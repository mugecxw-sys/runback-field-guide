// Run from an ordinary local terminal: node scripts/review-theme.mjs
// Uses the installed Chrome and Node only. No Git network operations or deployment.
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, mkdtempSync } from 'node:fs';
import { createServer } from 'node:net';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'outputs', 'theme-v1');
mkdirSync(output, { recursive: true });
mkdirSync(join(root, 'work'), { recursive: true });
const profile = mkdtempSync(join(root, 'work', 'theme-review-browser-'));
let base, debug;
const report = { status: 'RUNNING', checks: [], screenshots: [], errors: [] };
let server, chrome, cdp;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function freePort() {
  const socket = createServer();
  await new Promise((resolve, reject) => {
    socket.once('error', reject);
    socket.listen(0, '127.0.0.1', resolve);
  });
  const { port } = socket.address();
  await new Promise((resolve, reject) => socket.close(error => error ? reject(error) : resolve()));
  return port;
}

class CDP {
  constructor(url) {
    this.id = 0;
    this.pending = new Map();
    this.socket = new WebSocket(url);
    this.ready = new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        clearTimeout(pending.timer);
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(JSON.stringify(message.error)));
        else pending.resolve(message.result);
      } else if (message.method === 'Runtime.exceptionThrown') {
        report.errors.push(message.params.exceptionDetails.exception?.description ?? message.params.exceptionDetails.text);
      } else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
        const text = message.params.args.map(arg => arg.value ?? arg.description ?? '').join(' ');
        if (/hydrat|did not match|Minified React error/i.test(text)) report.errors.push(text);
      }
    });
  }
  async send(method, params = {}) {
    await this.ready;
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      const timer = setTimeout(() => { this.pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 45000);
      this.pending.set(id, { resolve, reject, timer });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  async evaluate(expression) {
    const response = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text);
    return response.result.value;
  }
}

async function waitFor(test, label, timeout = 90000) {
  const until = Date.now() + timeout;
  let lastError;
  while (Date.now() < until) {
    try { const value = await test(); if (value) return value; } catch (error) { if (error.fatal) throw error; lastError = error; }
    await delay(300);
  }
  throw new Error(`Timeout: ${label}${lastError ? ` (${lastError.message})` : ''}`);
}

async function navigate(path) {
  const target = base + path;
  await cdp.send('Page.navigate', { url: target });
  await waitFor(() => cdp.evaluate(`location.href === ${JSON.stringify(target)} && document.readyState === 'complete' && !!document.querySelector('main')`), path);
  await cdp.evaluate(`Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 4000))]).then(() => true)`);
  await waitFor(() => cdp.evaluate(`Array.from(document.images).filter(i => i.getBoundingClientRect().top < innerHeight).every(i => i.complete)`), 'visible images', 30000);
  await delay(200);
}

async function choose(theme) {
  const selector = `[aria-label="${theme[0].toUpperCase() + theme.slice(1)} theme"]`;
  await cdp.evaluate(`(() => { const button = [...document.querySelectorAll(${JSON.stringify(selector)})].find(b => b.getBoundingClientRect().width > 0); if (!button) throw Error('Visible theme button missing'); button.click(); })()`);
  await waitFor(() => cdp.evaluate(`document.documentElement.dataset.themePreference === ${JSON.stringify(theme)}`), `select ${theme}`);
  await delay(100);
}

const snapshot = `JSON.stringify({title:document.title,h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,robots:document.querySelector('meta[name="robots"]')?.content,schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>e.textContent),links:[...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href'))})`;

const routes = [
  '/', '/games/wanderburg', '/games/repo', '/games/sephiria',
  '/games/wanderburg/wiki/modules', '/games/wanderburg/wiki/captains',
  '/games/wanderburg/wiki/artifacts', '/games/wanderburg/wiki/crew',
  '/games/wanderburg/wiki/vehicles', '/games/sephiria/wiki/weapons',
  '/games/brotato', '/games/brotato/cyborg', '/guides/first-run-guide',
  '/games/hades-ii', '/about', '/editorial', '/contact', '/privacy', '/search',
];
const desktopShots = new Map([
  ['/', ['01-home-day.png', '02-home-night.png']],
  ['/games/wanderburg', ['03-wanderburg-day.png', '04-wanderburg-night.png']],
  ['/games/repo', ['05-repo-day.png', '06-repo-night.png']],
  ['/games/sephiria', ['07-sephiria-day.png', '08-sephiria-night.png']],
  ['/games/wanderburg/wiki/modules', ['09-wiki-day.png', '10-wiki-night.png']],
]);
const mobileShots = new Map([
  ['/', ['11-mobile-home-day.png', '12-mobile-home-night.png']],
  ['/games/wanderburg', ['13-mobile-wanderburg-day.png', '14-mobile-wanderburg-night.png']],
]);

async function screenshot(name) {
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  const path = join(output, name);
  writeFileSync(path, Buffer.from(data, 'base64'));
  report.screenshots.push(path);
}

try {
  const chromePath = [
    join(process.env.PROGRAMFILES ?? 'C:\\Program Files', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    join(process.env['PROGRAMFILES(X86)'] ?? 'C:\\Program Files (x86)', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  ].find(existsSync);
  assert.ok(chromePath, 'Chrome or Edge is required');
  assert.ok(existsSync(join(root, 'dist', 'server', 'index.js')), 'Production build is missing. Run npm run build in the repository first.');
  const port = await freePort();
  let debugPort = await freePort();
  while (debugPort === port) debugPort = await freePort();
  base = `http://127.0.0.1:${port}`;
  debug = `http://127.0.0.1:${debugPort}`;
  report.preview = base;
  report.browserDebug = debug;
  const log = [];
  // The production server has no Vite dev lock or Miniflare dependency.
  server = spawn(process.execPath, ['scripts/serve-theme-review.mjs', String(port)], { cwd: root, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
  for (const stream of [server.stdout, server.stderr]) stream.on('data', chunk => { log.push(chunk.toString()); writeFileSync(join(output, 'preview.log'), log.join('')); });
  let startupError;
  server.on('error', error => { startupError = error; });
  await waitFor(async () => {
    if (startupError || server.exitCode !== null) {
      const error = new Error(`Production preview failed: ${startupError?.message ?? `exit ${server.exitCode}`}\n${log.join('').slice(-4000)}`);
      error.fatal = true;
      throw error;
    }
    return (await fetch(base, { signal: AbortSignal.timeout(3000) })).ok;
  }, 'production preview', 45000);
  console.log(`Production preview ready: ${base}`);
  chrome = spawn(chromePath, ['--headless=new', `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check', 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  chrome.on('error', error => report.errors.push(error.message));
  const target = await waitFor(async () => (await (await fetch(debug + '/json/list')).json()).find(t => t.type === 'page'), 'headless browser');
  cdp = new CDP(target.webSocketDebuggerUrl);
  await Promise.all([cdp.send('Page.enable'), cdp.send('Runtime.enable'), cdp.send('Network.enable')]);
  await cdp.send('Network.setBlockedURLs', { urls: ['*googletagmanager.com*', '*google-analytics.com*'] });
  await cdp.send('Page.addScriptToEvaluateOnNewDocument', { source: `requestAnimationFrame(() => { window.__themeAtFirstFrame = document.documentElement.dataset.theme; });` });
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate('/');
  await cdp.evaluate(`localStorage.removeItem('runback-theme')`);
  for (const [os, expected] of [['dark', 'night'], ['light', 'day']]) {
    await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: os }] });
    await choose('system');
    await cdp.send('Page.reload');
    await waitFor(() => cdp.evaluate(`document.readyState === 'complete' && document.documentElement.dataset.theme === ${JSON.stringify(expected)} && window.__themeAtFirstFrame === ${JSON.stringify(expected)}`), `system ${os} and first-frame theme`);
    report.checks.push(`System ${os}: ${expected}; first-frame theme correct`);
  }
  await choose('night');
  await cdp.send('Page.reload');
  await waitFor(() => cdp.evaluate(`document.readyState === 'complete' && document.documentElement.dataset.theme === 'night' && document.documentElement.dataset.themePreference === 'night'`), 'reload persistence');
  await choose('day');
  // A second page on the same profile checks persistence beyond a reload.
  const { targetId } = await cdp.send('Target.createTarget', { url: base });
  const otherTarget = await waitFor(async () => (await (await fetch(debug + '/json/list')).json()).find(t => t.id === targetId), 'reopened page');
  const other = new CDP(otherTarget.webSocketDebuggerUrl);
  await waitFor(() => other.evaluate(`document.readyState === 'complete' && document.documentElement.dataset.theme === 'day'`), 'new-page persistence');
  await cdp.send('Target.closeTarget', { targetId });
  other.socket.close();
  report.checks.push('Manual day/night, reload persistence, new-page persistence');
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    await navigate(route);
    const original = await cdp.evaluate(snapshot);
    for (const width of [1440, 1024, 768, 390]) {
      await cdp.send('Emulation.setDeviceMetricsOverride', { width, height: width === 390 ? 844 : 1000, deviceScaleFactor: 1, mobile: width === 390 });
      for (const [index, theme] of ['day', 'night'].entries()) {
        await choose(theme);
        assert.equal(await cdp.evaluate(snapshot), original, `${route}: theme changed content/SEO/links`);
        const state = await cdp.evaluate(`(() => {
          const root=document.documentElement;
          const controls=[...document.querySelectorAll('.theme-switcher')].filter(e=>e.getBoundingClientRect().width>0);
          const buttons=controls.flatMap(e=>[...e.querySelectorAll('button')]);
          const background=getComputedStyle(document.querySelector('main') ?? document.body).backgroundColor;
          const heading=document.querySelector('h1');
          const fields=[...document.querySelectorAll('input,select,textarea')].map(e=>({color:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));
          return {theme:root.dataset.theme,overflow:Math.max(root.scrollWidth,document.body.scrollWidth)-innerWidth,controls:controls.length,buttons:buttons.length,pressed:buttons.filter(e=>e.getAttribute('aria-pressed')==='true').length,headingColor:heading?getComputedStyle(heading).color:null,background,fields};
        })()`);
        assert.equal(state.theme, theme, `${route}: theme`);
        assert.ok(state.overflow <= 1, `${route} ${width} ${theme}: overflow ${state.overflow}px`);
        assert.equal(state.controls, 1, `${route}: exactly one visible switcher`);
        assert.equal(state.buttons, 3, `${route}: 3 theme buttons`);
        assert.equal(state.pressed, 1, `${route}: selected theme`);
        if (theme === 'day') assert.ok(state.fields.every(f=>!['rgb(0, 0, 0)','rgb(25, 33, 38)'].includes(f.background)), `${route}: dark form background`);
        report.checks.push({ route, width, theme, ...state });
        const names = width === 1440 ? desktopShots.get(route) : width === 390 ? mobileShots.get(route) : null;
        if (names) await screenshot(names[index]);
      }
    }
    console.log(`PASS ${route}: day/night at 1440, 1024, 768, 390`);
  }
  assert.equal(report.errors.length, 0, 'Browser runtime/hydration errors');
  assert.equal(report.screenshots.length, 14, 'Expected 14 screenshots');
  report.status = 'BROWSER_QA_PASS';
  console.log(`BROWSER_QA_PASS — 14 screenshots in ${output}`);
} catch (error) {
  report.status = 'NEEDS_FIX';
  report.errors.push(error.stack ?? String(error));
  process.exitCode = 1;
  console.error(error.message);
} finally {
  writeFileSync(join(output, 'browser-review.json'), JSON.stringify(report, null, 2));
  if (cdp) { try { await cdp.send('Browser.close'); } catch {} cdp.socket.close(); }
  for (const child of [chrome, server]) {
    if (!child?.pid) continue;
    try { execFileSync('taskkill', ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' }); } catch {}
  }
}
