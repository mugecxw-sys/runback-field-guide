// Images are keyed by stable RUNBACK record ID, independently of gameplay facts.
// Future files: /images/games/sephiria/wiki/<category>/<slug>.webp
// Use actual intrinsic dimensions, preserve transparency, and avoid upscaling.
// Prefer sources up to about 256px. Icons default to contain; portraits may cover.
export type SephiriaRecordImage = {
  src: `/images/games/sephiria/wiki/${string}.webp`;
  alt: string;
  width: number;
  height: number;
  fit?: 'contain' | 'cover';
};

export const sephiriaImageManifest: Partial<Record<string, SephiriaRecordImage>> = {};
