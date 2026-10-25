import type { Metadata } from 'next';
import { SephiriaSwordShieldBuildPage } from '@/components/game-wiki/sephiria-sword-shield-build-page';
import { buildPageMetadata, sns06Page } from '@/lib/sephiria-builds/sword-and-shield-pages';

export const metadata: Metadata = buildPageMetadata(sns06Page);

export default function SuperconductorLightningSpearBuildPage() {
  return <SephiriaSwordShieldBuildPage data={sns06Page} />;
}
