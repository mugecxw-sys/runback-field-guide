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
    alternates: { canonical: siteUrl + '/games/' + g.slug + '/' },
    openGraph: {
      title: g.title + ' Guides | RUNBACK',
      description:
        'Practical ' +
        g.title +
        ' guides: quick answers, detailed routes and sources.',
      type: 'website',
      url: siteUrl + '/games/' + g.slug + '/',
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
      href={'/games/' + g.slug + '/'}
      description={
        gameLibraries.find((x) => x.slug === g.slug)?.description ?? ''
      }
      sections={sections}
    />
  );
}
