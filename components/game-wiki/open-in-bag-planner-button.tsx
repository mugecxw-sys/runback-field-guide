import type { BagPlannerLayoutV1 } from '@/lib/sephiria-planner/bag-planner-layout';
import { getBuildPlannerLink } from '@/lib/sephiria-planner/build-planner-link';

export function OpenInBagPlannerButton({ plannerLayout, buildSlug }: { plannerLayout?: BagPlannerLayoutV1 | null; buildSlug: string }) {
  const href = getBuildPlannerLink({ plannerLayout, href: `/games/sephiria/builds/${buildSlug}` });
  if (!href) return null;
  return <a href={href} className="inline-flex min-h-10 items-center justify-center border border-[var(--orange-text)]/60 bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--heading)] hover:border-[var(--orange-text)] hover:text-[var(--orange-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]">Open in Bag Planner →</a>;
}
