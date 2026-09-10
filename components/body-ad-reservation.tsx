import { allowedBodyAds } from '@/lib/ad-policy';
// Hidden, zero-layout reservation after the complete article text. No ad is loaded.
// Future activation requires 160px clearance from controls/media/navigation,
// a genuine publisher integration, and a separate consent review.
export function BodyAdReservation({ wordCount }: { wordCount: number }) {
  if (!allowedBodyAds(wordCount)) return null;
  return (
    <div
      hidden
      aria-hidden="true"
      data-ad-reservation="after-body"
      data-max-ads={allowedBodyAds(wordCount)}
      data-min-clearance="160"
    />
  );
}
