import type { Metadata } from 'next';
import { SephiriaShockDifficulty60Page } from '@/components/game-wiki/sephiria-shock-difficulty-60-page';
import { shockDifficulty60Guide, shockRunMedia } from '@/lib/sephiria-builds/shock-difficulty-60';
import { buildPageMetadata } from '@/lib/sephiria-builds/sword-and-shield-pages';
import { siteUrl } from '@/lib/repo-guide-pages';

const base = buildPageMetadata(shockDifficulty60Guide);
export const metadata: Metadata = {
  ...base,
  openGraph: { ...base.openGraph, images: [{ url: siteUrl + shockRunMedia.poster, width: 1280, height: 720, alt: 'The final Difficulty 60 Sword & Shield Electric Build' }] },
  twitter: { ...base.twitter, card: 'summary_large_image', images: [siteUrl + shockRunMedia.poster] },
};

export default function ShockDifficulty60BuildPage() {
  return <SephiriaShockDifficulty60Page />;
}
