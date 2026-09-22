import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GameHub } from '@/components/game-hub';
import { articleLibraries, findLibrary } from '@/lib/game-articles';
import { gameLibraries } from '@/lib/game-catalog';
import { siteUrl } from '@/lib/repo-guide-pages';
type Props = { params: Promise<{ game: string }> };
export function generateStaticParams() {
  return articleLibraries.map((g) => ({ game: g.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = findLibrary((await params).game);
  if (!g) return {};
  return {
    title: g.title + ' Guides | RUNBACK',
    description:
      'Practical ' +
      g.title +
      ' guides: quick answers, detailed routes and sources.',
    alternates: { canonical: siteUrl + '/games/' + g.slug },
    openGraph: {
      title: g.title + ' Guides | RUNBACK',
      description:
        'Practical ' +
        g.title +
        ' guides: quick answers, detailed routes and sources.',
      type: 'website',
      url: siteUrl + '/games/' + g.slug,
      siteName: 'RUNBACK',
    },
    twitter: {
      card: 'summary',
      title: g.title + ' Guides | RUNBACK',
      description:
        'Practical ' +
        g.title +
        ' guides: quick answers, detailed routes and sources.',
    },
  };
}
export default async function GamePage({ params }: Props) {
  const g = findLibrary((await params).game);
  if (!g) notFound();
  const sections = [...new Set(g.articles.map((a) => a.category))].map(
    (c, i) => ({
      id: 'category-' + i,
      title: c,
      guides: g.articles
        .filter((a) => a.category === c)
        .map((a) => ({
          href: '/games/' + g.slug + '/' + a.slug,
          title: a.title,
          description: a.answer,
        })),
    }),
  );
  return (
    <GameHub
      title={g.title}
      href={'/games/' + g.slug}
      description={
        gameLibraries.find((x) => x.slug === g.slug)?.description ?? ''
      }
      sections={sections}
    >
      {g.slug === 'wanderburg' && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Wanderburg Wiki</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <a
              href="/games/wanderburg/wiki/modules"
              className="rounded-xl border border-white/10 bg-[#192126] p-5 hover:border-[#ff8662]/60"
            >
              <h3 className="text-lg font-semibold">Wanderburg Modules Wiki (0.9.14)</h3>
              <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">Verified module effects and official Early Access patch changes.</p>
              <span className="mt-4 block text-sm text-[#ff9a7a]">Read wiki →</span>
            </a>
            <a
              href="/games/wanderburg/wiki/captains"
              className="rounded-xl border border-white/10 bg-[#192126] p-5 hover:border-[#ff8662]/60"
            >
              <h3 className="text-lg font-semibold">Wanderburg Captains Wiki (0.9.14)</h3>
              <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">Verified Captain effects and official Early Access balance changes.</p>
              <span className="mt-4 block text-sm text-[#ff9a7a]">Read wiki →</span>
            </a>
          </div>
        </section>
      )}
    </GameHub>
  );
}
