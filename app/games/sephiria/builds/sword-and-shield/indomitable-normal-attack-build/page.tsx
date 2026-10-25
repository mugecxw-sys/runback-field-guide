import type { Metadata } from 'next';
import { SephiriaSwordShieldBuildPage } from '@/components/game-wiki/sephiria-sword-shield-build-page';
import { buildPageMetadata, sns04Page } from '@/lib/sephiria-builds/sword-and-shield-pages';

export const metadata: Metadata = buildPageMetadata(sns04Page);

export default function IndomitableNormalAttackBuildPage() {
  return <SephiriaSwordShieldBuildPage data={sns04Page} />;
}
