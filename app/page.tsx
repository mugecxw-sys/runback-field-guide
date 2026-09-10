import type { Metadata } from 'next';
import Link from 'next/link';
import { GameLibraryGrid } from '@/components/game-library-grid';
import { searchIndex } from '@/lib/search-index';
import { siteUrl } from '@/lib/repo-guide-pages';
export const metadata: Metadata = {
  title: 'Roguelike Game Guides, Builds & Boss Strategies | RUNBACK',
  description:
    'Roguelike game guides and walkthroughs for R.E.P.O., Hades II, Risk of Rain 2 and more. Find practical builds, boss strategies and unlock routes.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Roguelike Game Guides, Builds & Boss Strategies | RUNBACK',
    description:
      'Roguelike game guides and walkthroughs for R.E.P.O., Hades II, Risk of Rain 2 and more. Find practical builds, boss strategies and unlock routes.',
    siteName: 'RUNBACK',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary',
    title: 'Roguelike Game Guides, Builds & Boss Strategies | RUNBACK',
    description:
      'Practical roguelike walkthroughs, builds, boss strategies and unlock routes for R.E.P.O., Hades II and more.',
  },
};
export default function Home() {
  const featured = [
    '/guides/first-run-guide',
    ...['Hades II', 'Risk of Rain 2', 'Sephiria'].map(
      (game) =>
        searchIndex.find((x) => x.game === game && x.kind !== 'Game')!.href,
    ),
  ];
  const picks = featured
    .map((h) => searchIndex.find((x) => x.href === h))
    .filter(Boolean);
  const latest = searchIndex
    .filter((x) => x.kind !== 'Game' && x.kind !== 'Enemy')
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': siteUrl + '/#website',
        name: 'RUNBACK',
        url: siteUrl,
        inLanguage: 'en',
        publisher: { '@id': siteUrl + '/#organization' },
      },
      {
        '@type': 'Organization',
        '@id': siteUrl + '/#organization',
        name: 'RUNBACK',
        url: siteUrl,
      },
    ],
  };
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 text-[#e1e6e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Roguelike Game Guides &amp; Walkthroughs
        </h1>
        <p className="mt-4 text-xl text-[#ff9a7a]">
          Find the route. Make the run count.
        </p>
        <Link
          href="/search#search-input"
          className="mt-6 flex max-w-2xl items-center justify-between rounded-xl border border-white/20 bg-[#192126] p-4 text-[#aeb7bc]"
        >
          <span>Search games, bosses, builds, items, maps and unlocks</span>
          <span className="ml-4 text-[#ff9a7a]">Search →</span>
        </Link>
      </section>
      <GameLibraryGrid />
      <section id="guides" className="mt-12">
        <h2 className="text-2xl font-semibold">Featured guides</h2>
        <p className="mt-2 text-sm text-[#aeb7bc]">
          Editor's starting points — not a traffic ranking.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {picks.map(
            (g) =>
              g && (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border border-white/10 p-5 hover:border-[#ff8662]"
                >
                  <p className="text-sm text-[#9fd7ba]">{g.game}</p>
                  <h3 className="mt-2 text-lg font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">
                    {g.summary}
                  </p>
                </Link>
              ),
          )}
        </div>
      </section>
      <section id="latest" className="mt-12">
        <h2 className="text-2xl font-semibold">Latest guides</h2>
        <div className="mt-5 divide-y divide-white/10">
          {latest.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex flex-wrap justify-between gap-3 py-5 hover:text-[#ff9a7a]"
            >
              <span>
                {g.game} · {g.title}
              </span>
              <time className="text-sm text-[#aeb7bc]" dateTime={g.date}>
                {g.date.slice(0, 10)}
              </time>
            </Link>
          ))}
        </div>
      </section>
      <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 py-6 text-sm text-[#aeb7bc]">
        <Link href="/about">About</Link>
        <Link href="/editorial">Editorial policy</Link>
        <Link href="/privacy">Privacy</Link>
      </footer>
    </main>
  );
}
