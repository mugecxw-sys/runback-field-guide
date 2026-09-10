import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url),
  ts = require('typescript');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  const candidate =
    parent && request.startsWith('.')
      ? path.resolve(path.dirname(parent.filename), request) + '.ts'
      : '';
  return candidate && fs.existsSync(candidate)
    ? candidate
    : originalResolve.call(this, request, parent, ...rest);
};
require.extensions['.ts'] = (m, f) =>
  m._compile(
    ts.transpileModule(fs.readFileSync(f, 'utf8'), {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
      },
    }).outputText,
    f,
  );
const { searchGuides, searchIndex } = require('../lib/search-index.ts');
const {
  repoGuidePages,
  repoGuideSections,
  repoRelatedGuideIds,
} = require('../lib/repo-guide-pages.ts');
for (const q of [
  'Typhon',
  'Artificer',
  'C.A.R.T.',
  'quota',
  'unlock',
  'build',
  'boss',
  'map',
  'item',
])
  assert(searchGuides(q).length > 0, 'No search results for ' + q);
assert.equal(searchGuides('THIS_CANNOT_BE_A_REAL_GAME_9876').length, 0);
assert(searchGuides('build', 'Hades II').every((x) => x.game === 'Hades II'));
assert.equal(new Set(searchIndex.map((x) => x.href)).size, searchIndex.length);
assert.deepEqual(
  repoGuideSections.map((x) => x.title),
  ['Beginner', 'Mechanics', 'Upgrades', 'Enemies', 'Items', 'Advanced'],
);
for (const g of repoGuidePages) {
  assert(repoGuideSections.some((s) => s.guideIds.includes(g.id)));
  assert((repoRelatedGuideIds[g.id]?.length ?? 0) >= 3);
}
const base = process.argv[2] || 'http://localhost:4174',
  failures = [],
  pages = new Map();
const sm = await fetch(base + '/sitemap.xml').then((r) => r.text());
const paths = [
  ...new Set(
    [...sm.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map((m) => new URL(m[1]).pathname)
      .concat('/search'),
  ),
];
const queue = [...paths];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      try {
        const r = await fetch(base + p, { signal: AbortSignal.timeout(30000) }),
          h = await r.text();
        if (r.status !== 200) failures.push([p, 'status', r.status]);
        pages.set(p, h);
      } catch (e) {
        failures.push([p, e.message]);
      }
    }
  }),
);
for (const [p, html] of pages) {
  const schemas = [
    ...html.matchAll(
      /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
    ),
  ]
    .map((m) => JSON.parse(m[1]))
    .flatMap((s) => s['@graph'] ?? [s]);
  if (p.startsWith('/games/') && p.split('/').filter(Boolean).length === 2) {
    const breadcrumb = schemas.find((s) => s['@type'] === 'BreadcrumbList');
    const canonical = html.match(
      /<link\b(?=[^>]*rel="canonical")[^>]*href="([^"]+)"/,
    )?.[1];
    if (!canonical || new URL(canonical).pathname !== p)
      failures.push([p, 'hub sitemap/canonical mismatch', canonical]);
    if (breadcrumb?.itemListElement?.[1]?.item !== canonical)
      failures.push([p, 'hub breadcrumb mismatch']);
  }
  if (
    p.startsWith('/guides/') ||
    (p.startsWith('/games/') &&
      p.split('/').filter(Boolean).length === 3 &&
      !p.includes('/enemies'))
  ) {
    if (
      !schemas.some((s) => s['@type'] === 'Article') ||
      !schemas.some((s) => s['@type'] === 'BreadcrumbList')
    )
      failures.push([p, 'schema']);
    if (!schemas.find((s) => s['@type'] === 'Article')?.publisher?.name)
      failures.push([p, 'missing publisher']);
    const related = html.match(/<nav id="related"[\s\S]*?<\/nav>/)?.[0] ?? '';
    const count = [...related.matchAll(/<a /g)].length - 1;
    if (count < 3 || count > 5) failures.push([p, 'related', count]);
    if (!html.includes('On this page')) failures.push([p, 'contents']);
  }
  const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const internal = [...body.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)]
    .map((m) => m[1])
    .filter((h) => h.startsWith('/') || h.startsWith('#'));
  for (const h of internal) {
    const u = new URL(h, base + p),
      key = u.pathname.replace(/\/$/, '') || '/';
    const target = [...pages.keys()].find(
      (k) => (k.replace(/\/$/, '') || '/') === key,
    );
    if (!target) {
      failures.push([p, 'missing route', h]);
      continue;
    }
    if (
      u.hash &&
      !pages
        .get(target)
        .includes('id="' + decodeURIComponent(u.hash.slice(1)) + '"')
    )
      failures.push([p, 'missing anchor', h]);
  }
  if (p.startsWith('/guides/')) {
    const links = [
      ...body.matchAll(/<a\b(?=[^>]*data-context-link)[^>]*href="([^"]+)"/g),
    ].map((m) => m[1]);
    if (new Set(links).size !== links.length)
      failures.push([p, 'duplicate context link']);
  }
}
const home = pages.get('/');
assert(home.includes('Roguelike Game Guides &amp; Walkthroughs'));
assert(!home.includes('enemy-dossier') && !home.includes('guide-detail'));
assert(
  home.includes('"@type":"WebSite"') && home.includes('"@type":"Organization"'),
);
const first = pages.get('/guides/first-run-guide') ?? '';
for (const href of [
  '/guides/cart-guide',
  '/guides/meet-quota',
  '/guides/extraction-guide',
  '/guides/first-shop-priority',
  '/guides/upgrades-explained',
])
  if (!first.includes('href="' + href + '"'))
    failures.push(['first-run', 'missing contextual destination', href]);
const invalid = await fetch(base + '/games/no-such-game/no-such-article');
assert.equal(invalid.status, 404);
console.log(
  JSON.stringify(
    { base, routes: paths.length, searchEntries: searchIndex.length, failures },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
