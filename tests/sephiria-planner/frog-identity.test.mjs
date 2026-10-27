import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { frogAutoStormCloudBuild as build, frogAutoStormCloudPage as page } from '../../lib/sephiria-builds/frog-auto-storm-cloud.ts';
import { validateFruitSkewer } from '../../lib/sephiria-builds/fruit-skewer.ts';
import { buildLayoutForDisplay } from '../../lib/sephiria-builds/build-layout-from-planner.ts';
import { listedWeaponBuildGroups, weaponBuildGroups } from '../../lib/sephiria-build-navigation.ts';
const preset=JSON.parse(fs.readFileSync('lib/sephiria-builds/frog-auto-storm-cloud-preset.json','utf8'));
const baseline=JSON.parse(fs.readFileSync(process.env.FROG_REVIEW_BASELINE,'utf8'));
const report={SOURCE_BUILD:preset.id,BUILD_IDENTITY_CHECK:{}};
void test('Frog identity is sourced from the corrected A2 with explicit pre-run overrides',()=>{
  assert.equal(preset.id,'SNS-FROG-A2');
  assert.deepEqual(page.setup.map(x=>x.title),['Talent Setup','Innate Skill','Starting Item','Fruit Skewer','Costume']);
  assert.deepEqual(preset.talents.map(x=>[x.name,x.points]),[['Survival',10],['Wrath',20]]);
  assert.equal(preset.costume.name,'Frog');assert.equal(preset.innate_skill.name,'Lightning Bolt');
  assert.equal(preset.starting_item.id,'1071');assert.equal(preset.starting_item.name,'Mini Ballista');
  assert.equal(preset.artifacts.filter(x=>x.id==='1071').length,1);
  assert.deepEqual(preset.fruit_skewer.selections,[{category:'Storm Cloud',fruit:'Plum',quantity:3},{category:'Companion',fruit:'Strawberry',quantity:2},{category:'Adaptive',fruit:'Carrot',quantity:1}]);
  assert.deepEqual(validateFruitSkewer(preset.fruit_skewer,['Storm Cloud','Companion']),[]);
  assert(!('sturdy' in preset.fruit_skewer));assert(!('windSong' in preset.fruit_skewer));assert(!('precision' in preset.fruit_skewer));
  assert.deepEqual(validateFruitSkewer({selections:[{category:'Sturdy',fruit:'Peanut',quantity:6}],totalSlots:6},['Storm Cloud','Companion']),['FRUIT_SKEWER_BUILD_MISMATCH']);
  for(const [field,source] of Object.entries({Talent:'Corrected A2 talents; Survival 10 / Wrath 20 explicitly retained',Costume:'A2 costume: Frog',InnateSkill:'Current user correction and in-game screenshot: Frog grants Lightning Bolt',StartingItem:'Current user correction: extra pre-run Mini Ballista, same final artifact',FruitSkewer:'Current user correction: Plum 3 / Strawberry 2 / Carrot 1; reward bias only',WeaponRoute:'A2 weapon.upgrade1 / weapon.upgrade2',ComboTargets:'Recalculated from A2 artifact/tablet layout; fruits excluded',CoreItems:'A2 core_items and recalculated effective levels'}))report.BUILD_IDENTITY_CHECK[field]={build:preset.id,source,status:'PASS'};
});
void test('A2 layout counts and core levels are preserved without starting-item duplication',()=>{
 const d=buildLayoutForDisplay(build);assert.equal(d.artifactCount,26);assert.equal(d.tabletCount,7);assert.equal(d.activeSlots,33);
 assert.deepEqual(d.comboCounts,[{name:'Storm Cloud',count:10},{name:'Companion',count:10}]);
 for(const expected of preset.core_items){const actual=d.cells.find(x=>x.itemId===Number(expected.id));assert(actual);assert.equal(actual.effectiveLevel,expected.targetEffectiveLevel,expected.name);}
 assert.equal(page.coreItems.length,11);assert.equal(page.coreItems.filter(x=>x.group==='Supporting Core').length,6);
 assert.equal(page.replacements.length,8);assert(page.replacementKeep.includes('do not have a true 1:1 replacement'));
 Object.assign(report,{TALENTS:'Survival 10 + Wrath 20',INNATE_SKILL:preset.innate_skill.name,EXTRA_STARTING_ITEM:preset.starting_item.name,FRUIT_SKEWER:preset.fruit_skewer.selections.map(x=>`${x.fruit} ×${x.quantity}`),FRUIT_SKEWER_TOTAL:'6 / 6',OLD_FRUIT_CONFIG_PRESENT:'NO',STURDY_FRUIT:0,WIND_SONG_FRUIT:0,PRECISION_FRUIT:0,STORM_CLOUD_COUNT:10,COMPANION_COUNT:10,ARTIFACT_COUNT:d.artifactCount,TABLET_COUNT:d.tabletCount,ACTIVE_SLOTS:d.activeSlots,REPLACEMENTS_PRESENT:'PASS'});
});
void test('discovery restores all existing builds and leaves other article sources unchanged',()=>{
 const after=listedWeaponBuildGroups.flatMap(g=>g.builds.map(b=>b.title));
 for(const title of baseline.PUBLIC_BUILDS_BEFORE)assert(after.includes(title));
 assert.deepEqual(after,weaponBuildGroups.flatMap(g=>g.builds.map(b=>b.title)));
 for(const [file,hash] of Object.entries(baseline.articleHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),hash,file);
 Object.assign(report,{PUBLIC_BUILDS_BEFORE:baseline.PUBLIC_BUILDS_BEFORE,SIDEBAR_BUILDS_BEFORE:baseline.SIDEBAR_BUILDS_BEFORE,INDEX_BUILDS_BEFORE:baseline.INDEX_BUILDS_BEFORE,PUBLIC_BUILDS_AFTER:after,SIDEBAR_BUILDS_AFTER:after,INDEX_BUILDS_AFTER:after,OLD_PUBLIC_BUILDS_RESTORED:'PASS',REMOVED_PUBLIC_BUILD:0,HIDDEN_PUBLIC_BUILD:0,FIXED_BUILD_COUNT:'NONE',OTHER_ARTICLE_SOURCE_HASHES:'UNCHANGED'});
 fs.writeFileSync(process.env.FROG_IDENTITY_REPORT,JSON.stringify(report,null,2));
});
