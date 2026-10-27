import { getBagPlannerUrl, validateBagPlannerLayout, type BagPlannerLayoutV1 } from './bag-planner-layout';

export function getBuildPlannerLink(build: { href: string; plannerLayout?: BagPlannerLayoutV1 | null }): string | null {
  if (!build.plannerLayout) return null;
  const validation = validateBagPlannerLayout(build.plannerLayout);
  if (!validation.valid) {
    if (process.env.NODE_ENV !== 'production') throw new Error('Invalid build Planner layout: ' + validation.errors.map((error) => error.code).join(', '));
    return null;
  }
  return getBagPlannerUrl(build.plannerLayout, { source: build.href.split('/').pop()! });
}
