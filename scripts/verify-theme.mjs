import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { themeBootstrap } from '../lib/theme.ts';

function browser({ stored = null, dark = true, blockedStorage = false } = {}) {
  const listeners = new Map();
  const dataset = {};
  const classes = new Set();
  const media = { matches: dark, addEventListener: (_, callback) => { media.change = callback; } };
  const storage = new Map(stored === null ? [] : [['runback-theme', stored]]);
  const window = {
    matchMedia: () => media,
    addEventListener: (name, callback) => listeners.set(name, [...(listeners.get(name) ?? []), callback]),
    dispatchEvent: event => { for (const callback of listeners.get(event.type) ?? []) callback(event); },
  };
  const context = {
    document: { documentElement: { dataset, classList: { toggle: (name, on) => on ? classes.add(name) : classes.delete(name) } } },
    window,
    Event: class { constructor(type) { this.type = type; } },
    localStorage: {
      getItem: key => { if (blockedStorage) throw new Error('blocked'); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (blockedStorage) throw new Error('blocked'); storage.set(key, value); },
    },
  };
  vm.runInNewContext(themeBootstrap, context);
  return {
    dataset, classes, storage,
    choose: detail => window.dispatchEvent({ type: 'runback-theme-select', detail }),
    os: matches => { media.matches = matches; media.change(); },
    external: (newValue, key = 'runback-theme') => window.dispatchEvent({ type: 'storage', key, newValue }),
  };
}

let checks = 0;
for (const dark of [true, false]) {
  const b = browser({ dark });
  assert.equal(b.dataset.theme, dark ? 'night' : 'day');
  assert.equal(b.dataset.themePreference, 'system');
  assert.equal(b.classes.has('dark'), dark);
  b.os(!dark);
  assert.equal(b.dataset.theme, dark ? 'day' : 'night');
  checks++;
}
for (const preference of ['day', 'night']) {
  const b = browser();
  b.choose(preference);
  assert.equal(b.dataset.theme, preference);
  assert.equal(b.storage.get('runback-theme'), preference);
  b.os(false);
  assert.equal(b.dataset.theme, preference);
  const reopened = browser({ stored: b.storage.get('runback-theme') });
  assert.equal(reopened.dataset.theme, preference);
  b.choose('system');
  assert.equal(b.dataset.theme, 'day');
  b.os(true);
  assert.equal(b.dataset.theme, 'night');
  checks++;
}
const blocked = browser({ blockedStorage: true, dark: false });
assert.equal(blocked.dataset.theme, 'day');
blocked.choose('night');
assert.equal(blocked.dataset.theme, 'night');
checks++;
const b = browser({ stored: 'corrupt', dark: false });
assert.equal(b.dataset.themePreference, 'system');
b.choose('invalid');
assert.equal(b.dataset.themePreference, 'system');
b.external('night');
assert.equal(b.dataset.theme, 'night');
b.external('day', 'unrelated');
assert.equal(b.dataset.theme, 'night');
b.external(null);
assert.equal(b.dataset.themePreference, 'system');
assert.equal(b.dataset.theme, 'day');
b.choose('night');
b.external(null, null);
assert.equal(b.dataset.theme, 'day');
checks++;
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
assert.ok(layout.indexOf('__html: themeBootstrap') < layout.indexOf('<body'));
assert.ok(layout.includes('suppressHydrationWarning'));
checks++;
console.log(`PASS: ${checks} theme scenarios (OS changes, manual override, reopen persistence, storage failures, cross-tab updates, early initialization).`);
