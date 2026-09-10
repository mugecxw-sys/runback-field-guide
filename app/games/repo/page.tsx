import type { Metadata } from 'next';
import { GameHub } from '@/components/game-hub';
import {
  repoGuidePages,
  repoGuideSections,
  siteUrl,
} from '@/lib/repo-guide-pages';
export const metadata: Metadata = {
  title: 'R.E.P.O. Guides: Quota, Upgrades, Enemies & More | RUNBACK',
  description:
    'R.E.P.O. beginner guides, mechanics, upgrades, enemies, items and advanced co-op strategies.',
  alternates: { canonical: siteUrl + '/games/repo' },
  openGraph: {
    title: 'R.E.P.O. Guides: Quota, Upgrades, Enemies & More | RUNBACK',
    description:
      'R.E.P.O. beginner guides, mechanics, upgrades, enemies, items and advanced co-op strategies.',
    type: 'website',
    url: siteUrl + '/games/repo',
    siteName: 'RUNBACK',
  },
  twitter: {
    card: 'summary',
    title: 'R.E.P.O. Guides | RUNBACK',
    description:
      'Beginner guides, mechanics, upgrades, enemies, items and advanced co-op strategies.',
  },
};
export default function RepoGameHub() {
  const sections = repoGuideSections.map((s) => ({
    ...s,
    guides: s.guideIds
      .map((id) => repoGuidePages.find((g) => g.id === id)!)
      .map((g) => ({
        href: '/guides/' + g.slug,
        title: g.title,
        description: g.description,
      })),
  }));
  sections
    .find((s) => s.id === 'enemies')!
    .guides.unshift({
      href: '/games/repo/enemies',
      title: 'Visual enemy field index',
      description:
        'Browse the existing 29 enemy dossiers, with recognition cues and credited images.',
    });
  return (
    <GameHub
      title="R.E.P.O."
      href="/games/repo"
      description="Learn the extraction loop, protect your loot and plan the next run. Choose a category below or start with the first-run guide."
      sections={sections}
    />
  );
}
