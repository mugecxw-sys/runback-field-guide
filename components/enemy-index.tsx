'use client';
import { useState } from 'react';
import { repoEnemies, type RepoEnemy } from '@/lib/repo-enemies';

function Dossier({ enemy }: { enemy: RepoEnemy }) {
  return (
    <div className="hidden group-open:block md:block">
      <img
        src={enemy.image}
        alt={enemy.name + ' reference'}
        width={640}
        height={360}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="aspect-video w-full object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{enemy.name}</h2>
        <dl className="mt-4 space-y-3">
          {[
            ['Recognition', enemy.tell],
            ['Behavior', enemy.behavior],
            ['First response', enemy.counter],
            ['Run decision', enemy.decision],
            [
              'Version note',
              enemy.note ?? 'Exact mechanics and spawn conditions can change.',
            ],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm font-semibold text-[#9fd7ba]">{label}</dt>
              <dd className="mt-1 leading-7">{value}</dd>
            </div>
          ))}
        </dl>
        <a
          href={enemy.source}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block text-sm text-[#ff9a7a] underline"
        >
          Image and research credit ↗
        </a>
      </div>
    </div>
  );
}

export function EnemyIndex() {
  const [query, setQuery] = useState(''),
    [tier, setTier] = useState('ALL');
  const enemies = repoEnemies.filter(
    (enemy) =>
      (tier === 'ALL' || enemy.tier === tier) &&
      (
        enemy.name +
        ' ' +
        enemy.alias +
        ' ' +
        enemy.trigger +
        ' ' +
        enemy.counter
      )
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section>
      <div className="mt-6 flex flex-wrap gap-4">
        <label className="min-w-56 flex-1 text-sm">
          Find an enemy
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#192126] p-3"
          />
        </label>
        <label className="text-sm">
          Difficulty group
          <select
            value={tier}
            onChange={(event) => setTier(event.target.value)}
            className="mt-2 block rounded-lg border border-white/20 bg-[#192126] p-3"
          >
            {['ALL', 'DL1', 'DL2', 'DL2*', 'DL3'].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <output
        className="mt-4 block text-sm text-[#aeb7bc]"
        aria-live="polite"
        aria-atomic="true"
      >
        {enemies.length} enemies
      </output>
      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
        {enemies.map((enemy) => (
          <details
            id={enemy.id}
            key={enemy.id}
            className="group scroll-mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#192126]"
          >
            <summary className="cursor-pointer list-none p-5 md:hidden">
              <span className="flex items-center justify-between gap-4">
                <span>
                  <strong className="block text-lg">{enemy.name}</strong>
                  <span className="mt-1 block text-sm text-[#aeb7bc]">
                    {enemy.trigger}
                  </span>
                </span>
                <span className="shrink-0 text-sm text-[#ff9a7a]">
                  Open dossier
                </span>
              </span>
            </summary>
            <Dossier enemy={enemy} />
          </details>
        ))}
      </div>
      {!enemies.length && (
        <p className="py-8">
          No enemies match. Clear the filters to show all dossiers.
        </p>
      )}
    </section>
  );
}
