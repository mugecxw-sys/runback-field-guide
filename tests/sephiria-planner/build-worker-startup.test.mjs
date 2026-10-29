import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

test('Build article cold imports and display calculations do not require random values', () => {
  const script = `
    const fail = () => { throw new Error('Random values are forbidden during Worker module initialization'); };
    Object.defineProperty(globalThis.crypto, 'randomUUID', { value: fail });
    Math.random = fail;
    const { sns11Page } = await import('./lib/sephiria-builds/sns-11-page.ts');
    const { weaponBuildGroups } = await import('./lib/sephiria-build-navigation.ts');
    const { buildLayoutForDisplay } = await import('./lib/sephiria-builds/build-layout-from-planner.ts');
    if (!sns11Page.h1.includes('Blizzard')) throw new Error('Blizzard article did not initialize');
    for (const build of weaponBuildGroups.flatMap(group => group.builds)) {
      if (!build.plannerLayout) continue;
      const first = buildLayoutForDisplay(build);
      const second = buildLayoutForDisplay(build);
      if (JSON.stringify(first) !== JSON.stringify(second)) throw new Error('Display data is not deterministic');
      if (first.cells.length !== build.plannerLayout.placements.length) throw new Error('Missing layout cells');
    }
    process.stdout.write('WORKER_SAFE_BUILD_DATA');
  `;
  const output = execFileSync(process.execPath, [
    '--experimental-strip-types', '--import', './tests/sephiria-planner/node-loader-register.mjs',
    '--input-type=module', '-e', script,
  ], { cwd: fileURLToPath(new URL('../../', import.meta.url)), encoding: 'utf8' });
  assert.equal(output, 'WORKER_SAFE_BUILD_DATA');
});
