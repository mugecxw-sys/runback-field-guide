import type { Metadata } from 'next';
import { GameWikiHero, GameWikiShell } from '@/components/game-wiki/game-wiki';
import { SephiriaBagPlanner } from '@/components/game-wiki/sephiria-bag-planner';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const canonical = `${siteUrl}/games/sephiria/tools/bag-planner`;
const description = 'Plan Sephiria Artifact and Tablet placement, levels, and restrictions across a six-column inventory grid.';

export const metadata: Metadata = {
  title: 'Sephiria Bag & Tablet Planner | RUNBACK',
  description,
  alternates: { canonical },
  openGraph: { title: 'Sephiria Bag & Tablet Planner | RUNBACK', description, type: 'website', url: canonical, siteName: 'RUNBACK' },
};

export default function SephiriaBagPlannerPage() {
  return <GameWikiShell config={sephiriaWikiConfig} activeHref="/games/sephiria/tools/bag-planner">
    <GameWikiHero eyebrow="SEPHIRIA TOOL · PATCH 1.0.33" title="Sephiria Bag & Tablet Planner" description="Arrange Artifacts, Tablets and inventory items, then see their levels, placement restrictions and Tablet effects update together." version="Planner V1 · 6-column bag" gameHref={sephiriaWikiConfig.hubHref} />
    <SephiriaBagPlanner />
  </GameWikiShell>;
}
