import { validateBagPlannerLayout, type BagPlannerLayoutV1 } from './bag-planner-layout';

export function assertValidBuildPlannerLayouts(builds: { title: string; plannerLayout?: BagPlannerLayoutV1 | null }[]) {
  for (const build of builds) {
    if (!build.plannerLayout) continue;
    const result = validateBagPlannerLayout(build.plannerLayout);
    if (!result.valid) throw new Error(`Invalid Planner layout for ${build.title}: ${result.errors.map((error) => error.code).join(', ')}`);
  }
}
