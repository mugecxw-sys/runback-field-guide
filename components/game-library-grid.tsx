import { gameLibraries } from '@/lib/game-catalog';
export function GameLibraryGrid({ query = '' }: { query?: string }) {
  const games = gameLibraries.filter((g) =>
    (g.title + ' ' + g.description + ' ' + g.categories.join(' '))
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <section id="game-library" className="mt-9 scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--orange-hover)]">
            Pick your next run
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-white)]">
            Explore the game library
          </h2>
        </div>
        <p className="text-sm text-[var(--quiet-dim)]">
          {gameLibraries.length} games ·{' '}
          {gameLibraries.reduce((total, game) => total + game.guideCount, 0)}{' '}
          guides
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {games.map((g) => (
          <a
            key={g.slug}
            href={'/games/' + g.slug}
            className="group flex flex-col rounded-xl border border-[var(--neutral-edge)]/10 bg-[var(--surface-raised)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--orange-text)]/60"
          >
            <p className="text-xs text-[var(--success-text)]">{g.type}</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--text-white)]">{g.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {g.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.categories.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--neutral-edge)]/10 px-2 py-1 text-xs text-[var(--quiet-soft)]"
                >
                  {c}
                </span>
              ))}
            </div>
            <span className="mt-auto pt-5 text-sm font-semibold text-[var(--orange-hover)]">
              {g.contentLabel ?? `${g.guideCount} guides`} · Open library →
            </span>
          </a>
        ))}
      </div>
      {!games.length && (
        <p className="py-8 text-[var(--muted)]">
          No games match this search. Try a game name or clear the search.
        </p>
      )}
    </section>
  );
}
