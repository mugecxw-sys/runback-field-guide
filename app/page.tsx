import type { Metadata } from 'next';
import { HomepagePrototype } from '@/components/homepage-prototype';
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomepagePrototype featured={picks.filter((guide) => guide !== undefined)} latest={latest} />
    </>
  );
}
