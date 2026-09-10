'use client';
import { useState } from 'react';
import { searchGuides } from '@/lib/search-index';
import { gameLibraries } from '@/lib/game-catalog';
export function GlobalSearch() {
  const [query, setQuery] = useState(''),
    [game, setGame] = useState('All games');
  const results = searchGuides(query, game);
  return (
    <section>
      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_240px]">
        <div>
          <label htmlFor="search-input" className="mb-2 block text-sm">
            Search all guides
          </label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
            onChange={(e) => setGame(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-[#192126] p-3"
          >
            <option>All games</option>
            {gameLibraries.map((g) => (
              <option key={g.slug}>{g.title}</option>
            ))}
          </select>
        </div>
      </div>
      <output
        className="my-5 block text-sm text-[#aeb7bc]"
        aria-live="polite"
        aria-atomic="true"
      >
        {results.length} results{query ? ' for “' + query + '”' : ''}
      </output>
      <div className="grid gap-4 md:grid-cols-2">
        {results.map((r) => (
          <a
            key={r.href}
            href={r.href}
            className="rounded-xl border border-white/10 p-5 hover:border-[#ff8662]"
          >
            <p className="text-sm text-[#9fd7ba]">
              {r.game} · {r.kind}
            </p>
            <h2 className="mt-2 text-lg font-semibold">{r.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">{r.summary}</p>
          </a>
        ))}
      </div>
      {!results.length && (
        <p className="py-8">
          No matching content yet. Try a shorter term or another game.
        </p>
      )}
    </section>
  );
}
