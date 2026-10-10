import type { Metadata } from 'next';
import { RepoHub } from '@/components/repo-hub';
import { siteUrl } from '@/lib/repo-guide-pages';
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
  return <RepoHub />;
}
