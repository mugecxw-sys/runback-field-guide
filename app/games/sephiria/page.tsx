import type { Metadata } from 'next';
import { SephiriaGameHub } from '@/components/game-wiki/sephiria-hubs';
import { siteUrl } from '@/lib/repo-guide-pages';

const canonical = `${siteUrl}/games/sephiria`;
const description = 'Explore Sephiria weapons, upgrades, Artifacts, Tablets, costumes, grimoires, bosses and game systems.';

export const metadata: Metadata = {
  title: 'Sephiria Wiki & Game Guide | RUNBACK',
  description,
  alternates: { canonical },
  openGraph: { title: 'Sephiria Wiki & Game Guide | RUNBACK', description, type: 'website', url: canonical, siteName: 'RUNBACK' },
};

export default function SephiriaPage() {
  return <SephiriaGameHub />;
}
