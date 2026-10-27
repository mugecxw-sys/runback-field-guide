import { weaponBuildGroups } from '../../lib/sephiria-build-navigation.ts';
import { validateBagPlannerLayout, encodeBagPlannerLayout, decodeBagPlannerLayout, layoutToPlannerState } from '../../lib/sephiria-planner/bag-planner-layout.ts';
import { evaluateBagLayout } from '../../lib/sephiria-planner/engine/bag-planner-engine.mjs';
import { plannerItemsById, plannerTabletRulesById, plannerArtifactRulesById, plannerComboRules } from '../../lib/sephiria-planner/data.ts';
import assert from 'node:assert/strict';
import { assertValidBuildPlannerLayouts } from '../../lib/sephiria-planner/build-validation.ts';
const builds = weaponBuildGroups.flatMap(g => g.builds);
assertValidBuildPlannerLayouts(builds);
for (const build of builds) {
 if (!build.plannerLayout) continue;
 const validation = validateBagPlannerLayout(build.plannerLayout);
 assert.equal(validation.valid,true,`${build.title}: ${JSON.stringify(validation.errors)}`);
 const decoded=decodeBagPlannerLayout(encodeBagPlannerLayout(build.plannerLayout));
 assert.equal(decoded.valid,true,build.title);
 assert.deepEqual(decoded.layout, {...build.plannerLayout,placements:[...build.plannerLayout.placements].sort((a,b)=>a.slot-b.slot)});
 const ui=layoutToPlannerState(decoded.layout);
 const result=evaluateBagLayout({capacity:ui.capacity,weapon:ui.weapon,slots:ui.slots,itemsById:plannerItemsById,tabletRulesById:plannerTabletRulesById,artifactRulesById:plannerArtifactRulesById,comboRules:plannerComboRules});
 assert.equal(result.summary.usedSlots,build.plannerLayout.placements.length,build.title);
 console.log('VALID',build.title,result.summary.usedSlots);
}
