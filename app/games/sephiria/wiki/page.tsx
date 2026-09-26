import type { Metadata } from 'next';
import { SephiriaWikiLanding } from '@/components/game-wiki/sephiria-hubs';
import { siteUrl } from '@/lib/repo-guide-pages';

const canonical = `${siteUrl}/games/sephiria/wiki`;
const description = 'Browse Sephiria weapons, weapon upgrades, Artifacts, Tablets, costumes, Grimoires, bosses, Hard Mode and game systems.';

export const metadata: Metadata = {
  title: 'Sephiria Wiki: Weapons, Artifacts & Systems | RUNBACK',
  description,
  alternates: { canonical },
  openGraph: { title: 'Sephiria Wiki | RUNBACK', description, type: 'website', url: canonical, siteName: 'RUNBACK' },
};

export default function SephiriaWikiPage() {
  return <SephiriaWikiLanding />;
}
