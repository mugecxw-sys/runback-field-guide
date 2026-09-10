// Reservation only: no ad script, publisher ID or visible empty slot is enabled.
// An activation must supply a real ad component and independently handle consent.
export function allowedBodyAds(wordCount: number) {
  return wordCount < 400 ? 0 : wordCount < 1200 ? 1 : 2;
}
export const adPolicy = {
  enabled: false,
  minGapPx: 160,
  exclude: ['quick-answer', 'navigation', 'buttons', 'images', 'image-viewer'],
  placement: 'after-complete-text-section',
} as const;
