import type { Metadata } from 'next';
import { RepoHub } from '@/components/repo-hub';
import { siteUrl } from '@/lib/repo-guide-pages';
export const metadata: Metadata = {
  title: 'R.E.P.O. Wiki & Solo Guides | RUNBACK',
  description:
    'Find current R.E.P.O. Wiki reference for enemies, items, maps, mechanics and upgrades, plus a dedicated section for solo guides in development.',
  alternates: { canonical: siteUrl + '/games/repo' },
  openGraph: {
    title: 'R.E.P.O. Wiki & Solo Guides | RUNBACK',
    description:
      'Find current R.E.P.O. Wiki reference for enemies, items, maps, mechanics and upgrades, plus a dedicated section for solo guides in development.',
    type: 'website',
    url: siteUrl + '/games/repo',
    siteName: 'RUNBACK',
  },
  twitter: {
    card: 'summary',
    title: 'R.E.P.O. Wiki & Solo Guides | RUNBACK',
    description:
      'Find current R.E.P.O. Wiki reference for enemies, items, maps, mechanics and upgrades, plus a dedicated section for solo guides in development.',
  },
};
export default function RepoGameHub() {
  return <RepoHub />;
}
