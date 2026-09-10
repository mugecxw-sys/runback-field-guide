import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

// Use an existing Playwright installation; do not change production dependencies.
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = (process.argv[2] || 'http://127.0.0.1:4175').replace(/\/$/, '');
const output = process.argv[3] || 'outputs/navigation-e2e.json';
const smokeOnly = process.env.NAV_SMOKE_ONLY === '1';
const failFast = process.env.NAV_FAIL_FAST === '1';
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}),
});
const report = { base, browser: browser.version(), cases: [], audit: {}, failures: [], limitations: [
  'Cmd+Click requires macOS; Windows Meta-key simulation is not a macOS test.',
  'Mobile uses Chrome touch emulation at 390x844, not a physical phone.',
  'Right-click default handling is checked; the operating-system Open link in new tab menu is not automated.',
] };
const clientExceptions = [];
const observed = new WeakSet();
function observe(tab) {
  if (observed.has(tab)) return;
  observed.add(tab);
  tab.on('pageerror', (e) => clientExceptions.push({ url: tab.url(), message: e.message }));
}
function checkFailures() {
  if (failFast && (report.failures.length || clientExceptions.length)) throw new Error('Production acceptance failed; stop for rollback');
}
const origin = new URL(base).origin;
const full = (p) => new URL(p, base).href;
const libraries = JSON.parse(fs.readFileSync('lib/game-articles.json', 'utf8'));
const guide = (slug) => '/games/' + slug + '/' + libraries.find((g) => g.slug === slug).articles[0].slug;
const guidePages = ['/guides/first-run-guide', '/guides/meet-quota', guide('hades-ii'), guide('risk-of-rain-2'), guide('cult-of-the-lamb')];
const hubPages = ['/games/repo', '/games/hades-ii', '/games/risk-of-rain-2'];
const desktop = await browser.newContext({ viewport: { width: 1365, height: 900 } });
const page = await desktop.newPage();
observe(page);
const cases = [];
async function collect(source, selector, label, limit = Infinity) {
  const links = await page.locator(selector).evaluateAll((els) => els.map((a) => ({ href: a.getAttribute('href'), text: a.textContent.trim().replace(/\s+/g, ' ') })));
  if (!links.length) report.failures.push({ source, selector, error: 'Required navigation control missing' });
  for (let i = 0; i < Math.min(links.length, limit); i++) cases.push({ source, selector, index: i, label: label + (links.length > 1 ? ' ' + (i + 1) : ''), ...links[i] });
}
async function visit(source) {
  const response = await page.goto(full(source), { waitUntil: 'load' });
  if (response.status() !== 200) throw new Error(source + ': status ' + response.status());
}
try {
  await visit('/');
  await collect('/', 'header a', 'Header');
  await collect('/', '#game-library a', 'Game Card', 3);
  await collect('/', '#guides a', 'Featured Guide', 2);
  await collect('/', '#latest a', 'Latest Guide', 2);
  await collect('/', 'footer a', 'Footer');
  for (const source of hubPages) {
    await visit(source);
    await collect(source, 'nav[aria-label="Breadcrumb"] a', 'Home breadcrumb');
    await collect(source, 'nav[aria-label="Guide categories"] a', 'Category anchor', 1);
    await collect(source, 'main section a', 'Guide Card', 1);
    await collect(source, 'footer a', 'Footer');
  }
  for (const source of guidePages) {
    await visit(source);
    await collect(source, 'header a', 'Header');
    await collect(source, 'nav[aria-label="Breadcrumb"] a', 'Breadcrumb');
    if (source.startsWith('/guides/')) await collect(source, 'a[data-context-link]', 'Contextual internal link', 1);
    await page.locator('summary').filter({ hasText: 'On this page' }).click();
    await collect(source, 'nav[aria-label="On this page"] a', 'On this page', 1);
    await collect(source, '#related > div a', 'Related Guide', 1);
    await collect(source, '#related > a', 'All game guides');
    await collect(source, 'footer a', 'Footer');
  }
  for (const source of ['/about', '/editorial', '/privacy', '/games/repo/enemies', '/guides/r-e-p-o-upgrade-planner']) {
    await visit(source);
    await collect(source, 'main a[href="/"], main a[href="/games/repo"], main a[href="/privacy"], main a[href="/editorial"]', 'Additional page navigation');
  }
  // Parse all rendered sitemap pages, then request each unique internal href without redirects.
  const sitemap = await desktop.request.get(full('/sitemap.xml'));
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const auditPaths = [...new Set([...urls, '/search'])];
  const rendered = [];
  const queue = [...auditPaths];
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const source = queue.shift();
      const response = await desktop.request.get(full(source), { maxRedirects: 0 });
      if (response.status() !== 200) report.failures.push({ source, kind: 'route', status: response.status() });
      rendered.push({ source, html: await response.text() });
    }
  }));
  const parsed = await page.evaluate((pages) => pages.map(({ source, html }) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return { source, hrefs: [...doc.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')), ids: [...doc.querySelectorAll('[id]')].map((e) => e.id) };
  }), rendered);
  const targets = new Set(); let hrefCount = 0;
  for (const { source, hrefs } of parsed) for (const href of hrefs) {
    if (!href.startsWith('/') && !href.startsWith('#') && !href.startsWith('https://roguelikegame.org/')) continue;
    const url = new URL(href, full(source));
    if (url.origin !== origin && url.origin !== 'https://roguelikegame.org') continue;
    hrefCount++;
    if (url.pathname !== '/' && url.pathname.endsWith('/')) report.failures.push({ source, href, kind: 'trailing slash' });
    targets.add(url.pathname + url.search);
    if (url.hash) {
      const destination = parsed.find((p) => p.source === url.pathname);
      if (destination && !destination.ids.includes(decodeURIComponent(url.hash.slice(1)))) report.failures.push({ source, href, kind: 'missing anchor' });
    }
  }
  const redirects = [];
  for (const target of targets) {
    const response = await desktop.request.get(full(target), { maxRedirects: 0 });
    if (response.status() !== 200) redirects.push({ target, status: response.status(), location: response.headers().location });
  }
  report.audit = { pages: parsed.length, internalHrefs: hrefCount, uniqueTargets: targets.size, redirects };
  report.failures.push(...redirects);
  console.log('Redirect audit:', JSON.stringify(report.audit));
  checkFailures();

  for (const mode of (smokeOnly ? ['desktop'] : ['desktop', 'mobile', 'no-js'])) {
    const context = mode === 'desktop' ? desktop : await browser.newContext(mode === 'mobile'
      ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }
      : { javaScriptEnabled: false, viewport: { width: 1365, height: 900 } });
    const tab = mode === 'desktop' ? page : await context.newPage();
    observe(tab);
    const errors = [];
    tab.on('pageerror', (e) => errors.push(e.message));
    for (let i = 0; i < cases.length; i++) {
      const item = cases[i];
      const result = { ...item, mode, destination: new URL(item.href, full(item.source)).href, status: 'PASS' };
      try {
        await tab.goto(full(item.source), { waitUntil: 'load' });
        // Give production hydration time to attach handlers, catching the original Link failure.
        if (mode !== 'no-js') await tab.waitForTimeout(100);
        if (item.label.startsWith('On this page')) {
          const summary = tab.locator('summary').filter({ hasText: 'On this page' });
          if (mode === 'mobile') await summary.tap(); else await summary.click();
        }
        const link = tab.locator(item.selector).nth(item.index);
        const responseStatus = [];
        const onResponse = (r) => { if (r.request().isNavigationRequest() && r.frame() === tab.mainFrame()) responseStatus.push(r.status()); };
        tab.on('response', onResponse);
        const beforeErrors = errors.length;
        if (mode === 'mobile') await link.tap({ timeout: 6000 }); else await link.click({ timeout: 6000 });
        await tab.waitForURL(result.destination, { waitUntil: 'load', timeout: 8000 });
        await tab.locator('h1').waitFor({ state: 'visible' });
        tab.off('response', onResponse);
        if (responseStatus.some((s) => s !== 200)) throw new Error('Navigation HTTP statuses: ' + responseStatus);
        if (errors.length > beforeErrors) throw new Error(errors.slice(beforeErrors).join('; '));
        if (result.destination === full(item.source) && responseStatus.length === 0) throw new Error('Same-URL link did not trigger document navigation');
      } catch (e) { result.status = 'FAIL'; result.error = e.message; report.failures.push(result); }
      report.cases.push(result);
      checkFailures();
      if ((i + 1) % 25 === 0) console.log(mode + ': ' + (i + 1) + '/' + cases.length);
    }
    if (context !== desktop) await context.close();
  }
  // Native new tabs on every tested ordinary cross-page link, plus backward/forward history.
  const ordinary = cases.filter((c) => !c.href.startsWith('#'));
  for (const action of (smokeOnly ? [] : ['ctrl-click', 'middle-click'])) for (const item of ordinary) {
    const result = { source: item.source, label: item.label, href: item.href, mode: action, status: 'PASS' };
    try {
      await page.goto(full(item.source), { waitUntil: 'load' });
      const [popup] = await Promise.all([
        desktop.waitForEvent('page', { timeout: 6000 }),
        page.locator(item.selector).nth(item.index).click(action === 'ctrl-click' ? { modifiers: ['Control'] } : { button: 'middle' }),
      ]);
      observe(popup);
      await popup.waitForURL(new URL(item.href, full(item.source)).href, { waitUntil: 'load', timeout: 8000 });
      await popup.locator('h1').waitFor({ state: 'visible' });
      await popup.close();
    } catch (e) { result.status = 'FAIL'; result.error = e.message; report.failures.push(result); }
    report.cases.push(result);
    checkFailures();
  }
  await visit('/');
  await page.locator('header a[href="/search"]').click();
  await page.waitForURL(full('/search'));
  await page.goBack({ waitUntil: 'load' });
  if (page.url() !== full('/')) throw new Error('Back failed');
  await page.goForward({ waitUntil: 'load' });
  if (page.url() !== full('/search')) throw new Error('Forward failed');
  report.history = { back: 'PASS', forward: 'PASS' };
  await visit('/');
  await page.evaluate(() => {
    document.addEventListener('contextmenu', (event) => {
      setTimeout(() => { window.__contextDefaultPrevented = event.defaultPrevented; }, 0);
    });
  });
  await page.locator('header a[href="/search"]').click({ button: 'right' });
  await page.waitForTimeout(100);
  report.rightClickDefault = await page.evaluate(() => window.__contextDefaultPrevented === false) ? 'PASS' : 'FAIL';
  await page.keyboard.press('Escape');
  await page.locator('#home-search').fill('quota');
  await page.locator('form[action="/search"] button').click();
  await page.waitForURL(full('/search?q=quota'));
  if (await page.locator('#search-input').inputValue() !== 'quota') throw new Error('Search query was not preserved');
  await page.locator('#search-input').fill('cart');
  const searchResult = page.locator('main a[href="/guides/cart-guide"]');
  await searchResult.waitFor({ state: 'visible' });
  await searchResult.click();
  await page.waitForURL(full('/guides/cart-guide'), { waitUntil: 'load', timeout: 8000 });
  await page.locator('h1').waitFor({ state: 'visible' });
  report.searchResult = { keyword: 'cart', destination: page.url(), status: 'PASS' };
  report.search = 'PASS';
  checkFailures();
} catch (e) { report.failures.push({ fatal: e.message }); }
finally {
  report.clientExceptions = clientExceptions;
  report.failures.push(...clientExceptions.map((e) => ({ kind: 'client-side exception', ...e })));
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ tests: report.cases.length, failures: report.failures, history: report.history, rightClickDefault: report.rightClickDefault, search: report.search, output }, null, 2));
  await browser.close();
}
process.exitCode = report.failures.length ? 1 : 0;
