import assert from 'node:assert/strict';
import { test } from 'node:test';
import { frogAutoStormCloudBuild as build } from '../../lib/sephiria-builds/frog-auto-storm-cloud.ts';
import { buildLayoutForDisplay } from '../../lib/sephiria-builds/build-layout-from-planner.ts';
import { listedWeaponBuildGroups } from '../../lib/sephiria-build-navigation.ts';
import { validateBagPlannerLayout } from '../../lib/sephiria-planner/bag-planner-layout.ts';

void test('Frog layout preserves the tested 33 slots and computes all 26 effective levels from Base Lv1', () => {
  assert.equal(validateBagPlannerLayout(build.plannerLayout).valid, true);
  assert.equal(build.plannerLayout.capacity,33);
  assert.deepEqual(build.plannerLayout.placements.map(x=>x.itemId),[1239,1076,2042,1245,1320,2051,1276,1187,1066,1170,2046,1130,2100,1071,1104,1263,1055,1129,1200,1202,1029,1216,1113,2052,1065,1249,1090,1198,1053,1197,3011,2003,2058]);
  const display=buildLayoutForDisplay(build);
  assert.equal(display.artifactCount,26);
  assert.equal(display.tabletCount,7);
  assert.deepEqual(display.comboCounts,[{name:'Storm Cloud',count:10},{name:'Companion',count:10}]);
  const expected=[1,4,null,3,1,null,1,2,2,1,null,6,null,5,5,4,7,6,1,2,2,1,5,null,1,2,7,1,2,1,2,null,null];
  for(const cell of display.cells.filter(x=>x.kind==='Artifact')) {
    assert.equal(cell.effectiveLevel,expected[cell.slot],cell.name);
    assert.equal(cell.rawLevel-cell.tabletBonus,1,`${cell.name} Base Lv1`);
  }
  assert.equal(display.cells.find(x=>x.itemId===2003).kind,'Tablet');
  assert.equal(display.cells.find(x=>x.itemId===1104).kind,'Artifact');
});

void test('public discovery preserves all previously published Sword & Shield builds', () => {
  const group=listedWeaponBuildGroups.find(x=>x.name==='Sword & Shield');
  assert.deepEqual(group.builds.map(x=>x.title),['Grip of Fear Cleave Build','Indomitable Normal Attack Build','Superconductor Lightning Spear Build',"Blizzard's Eve Frost Hammer Build",'Frog Auto Storm Cloud Build']);
  assert(group.builds.every(x=>x.listed!==false));
});
