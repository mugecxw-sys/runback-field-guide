'use client';
import { useState } from 'react';
import { repoEnemies } from '@/lib/repo-enemies';
export function EnemyIndex() {
  const [query, setQuery] = useState(''),
    [tier, setTier] = useState('ALL');
  const enemies = repoEnemies.filter(
    (e) =>
      (tier === 'ALL' || e.tier === tier) &&
      (e.name + ' ' + e.alias + ' ' + e.trigger + ' ' + e.counter)
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section>
      <div className="mt-6 flex flex-wrap gap-4">
        <label className="flex-1 text-sm">
          Find an enemy
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#192126] p-3"
          />
        </label>
        <label className="text-sm">
          Difficulty group
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="mt-2 block rounded-lg border border-white/20 bg-[#192126] p-3"
          >
            {['ALL', 'DL1', 'DL2', 'DL2*', 'DL3'].map((t) => (
              <option key={t}>{t}</option>
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
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {enemies.map((e, i) => (
          <article
            id={e.id}
            key={e.id}
            className="scroll-mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#192126]"
          >
            <img
              src={e.image}
              alt={e.name + ' reference'}
              width={640}
              height={360}
              loading={i < 2 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
              referrerPolicy="no-referrer"
              className="aspect-video w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{e.name}</h2>
              <dl className="mt-4 space-y-3">
                {[
                  ['Recognition', e.tell],
                  ['Behavior', e.behavior],
                  ['First response', e.counter],
                  ['Run decision', e.decision],
                  [
                    'Version note',
                    e.note ??
                      'Exact mechanics and spawn conditions can change.',
                  ],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm font-semibold text-[#9fd7ba]">
                      {k}
                    </dt>
                    <dd className="mt-1 leading-7">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={e.source}
                className="mt-4 block text-sm text-[#ff9a7a] underline"
              >
                Image and research credit ↗
              </a>
            </div>
          </article>
        ))}
      </div>{' '}
      {!enemies.length && (
        <p>No enemies match. Clear the filters to show all dossiers.</p>
      )}
    </section>
  );
}
