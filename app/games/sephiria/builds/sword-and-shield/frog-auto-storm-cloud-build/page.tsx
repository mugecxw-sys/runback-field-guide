import type { Metadata } from 'next';
import { SephiriaSwordShieldBuildPage } from '@/components/game-wiki/sephiria-sword-shield-build-page';
import { frogAutoStormCloudPage } from '@/lib/sephiria-builds/frog-auto-storm-cloud';
import { buildPageMetadata } from '@/lib/sephiria-builds/sword-and-shield-pages';

export const metadata: Metadata = buildPageMetadata(frogAutoStormCloudPage);

export default function FrogAutoStormCloudBuildPage() {
  return <SephiriaSwordShieldBuildPage data={frogAutoStormCloudPage} />;
}
