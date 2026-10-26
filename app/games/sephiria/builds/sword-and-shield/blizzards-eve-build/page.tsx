import type { Metadata } from 'next';
import { SephiriaBlizzardsEveBuildPage } from '@/components/game-wiki/sephiria-blizzards-eve-build-page';
import { sns11Page } from '@/lib/sephiria-builds/sns-11-page';
import { buildPageMetadata } from '@/lib/sephiria-builds/sword-and-shield-pages';

export const metadata: Metadata = buildPageMetadata(sns11Page);

export default function BlizzardsEveBuildPage() {
  return <SephiriaBlizzardsEveBuildPage />;
}
