import { BossGuideCard } from './boss-guide-card';
import type { BossGuideRegion } from '@/lib/wanderburg-boss-guides';

export function BossGuideRegionPage({ region }: { region: BossGuideRegion }) {
  return <section aria-label={region.title + ' bosses'} className="mt-7 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">{region.bosses.map((item) => <BossGuideCard key={item.name} {...item} />)}</section>;
}
