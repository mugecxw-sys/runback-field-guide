'use client';
import { useEffect, useMemo, useState } from 'react';
import { searchGuides, searchIndex } from '@/lib/search-index';
import { gameLibraries } from '@/lib/game-catalog';

const popularHrefs = [
  '/guides/first-run-guide',
  '/guides/meet-quota',
  '/games/hades-ii/hades-ii-beginner-guide',
  '/games/risk-of-rain-2/risk-of-rain-2-beginner-guide',
];

function ResultCard({ item }: { item: (typeof searchIndex)[number] }) {
  return (
    <a
      href={item.href}
      className="rounded-xl border border-white/10 p-5 hover:border-[#ff8662]"
    >
      <p className="text-sm text-[#9fd7ba]">
        {item.game} · {item.kind}
      </p>
      <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
      <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">{item.summary}</p>
    </a>
  );
}

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [game, setGame] = useState('All games');
  useEffect(() => {
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) setQuery(initialQuery);
  }, []);
  const ready = query.trim().length >= 2;
  const results = ready ? searchGuides(query, game) : [];
  const popular = popularHrefs
    .map((href) => searchIndex.find((item) => item.href === href))
    .filter(Boolean) as typeof searchIndex;
  const recent = useMemo(
    () =>
      searchIndex
        .filter((item) => item.kind !== 'Game' && item.kind !== 'Enemy')
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 4),
    [],
  );
  const guideCount = searchIndex.filter(
    (item) => item.kind !== 'Game' && item.kind !== 'Enemy',
  ).length;
  const enemyCount = searchIndex.filter((item) => item.kind === 'Enemy').length;
  return (
    <section>
      <p className="mt-4 text-sm text-[#aeb7bc]">
        {guideCount} Guides · {gameLibraries.length} Games · {enemyCount}{' '}
        Enemies
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_240px]">
        <div>
          <label htmlFor="search-input" className="mb-2 block text-sm">
            Search all guides
          </label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Game, boss, build, item, map, unlock…"
            className="w-full rounded-lg border border-white/20 bg-[#192126] p-3"
          />
        </div>
        <div>
          <label htmlFor="game-filter" className="mb-2 block text-sm">
            Game
          </label>
          <select
            id="game-filter"
            value={game}
            onChange={(event) => setGame(event.target.value)}
            className="w-full rounded-lg border border-white/20 bg-[#192126] p-3"
          >
            <option>All games</option>
            {gameLibraries.map((item) => (
              <option key={item.slug}>{item.title}</option>
            ))}
          </select>
        </div>
      </div>
      <output
        className="my-5 block text-sm text-[#aeb7bc]"
        aria-live="polite"
        aria-atomic="true"
      >
        {ready
          ? results.length +
            ' searchable ' +
            (results.length === 1 ? 'entry' : 'entries') +
            ' for “' +
            query +
            '”'
          : 'Enter at least 2 characters to search the full library.'}
      </output>
      {ready ? (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((item) => (
              <ResultCard key={item.href} item={item} />
            ))}
          </div>
          {!results.length && (
            <p className="py-8">
              No matching content yet. Try a shorter term or another game.
            </p>
          )}
        </>
      ) : (
        <div className="grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="popular-title">
            <h2 id="popular-title" className="text-xl font-semibold">
              Popular starting points
            </h2>
            <p className="mt-2 text-sm text-[#aeb7bc]">
              Editor picks, not a traffic ranking.
            </p>
            <div className="mt-4 grid gap-4">
              {popular.map((item) => (
                <ResultCard key={item.href} item={item} />
              ))}
            </div>
          </section>
          <section aria-labelledby="recent-title">
            <h2 id="recent-title" className="text-xl font-semibold">
              Recently published
            </h2>
            <div className="mt-4 grid gap-4">
              {recent.map((item) => (
                <ResultCard key={item.href} item={item} />
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
