import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  decodeBagPlannerLayout, encodeBagPlannerLayout, getBagPlannerUrl, layoutToPlannerState,
  plannerStateToLayout, validateBagPlannerLayout,
} from '../../lib/sephiria-planner/bag-planner-layout.ts';
import { getBuildPlannerLink } from '../../lib/sephiria-planner/build-planner-link.ts';
import { safeRestoreLayout } from '../../lib/sephiria-planner/planner-state.ts';
import { plannerItems, plannerItemsById, plannerTabletRules, plannerTabletRulesById, plannerWeapons, plannerArtifactRulesById, plannerComboRules } from '../../lib/sephiria-planner/data.ts';
import { evaluateBagLayout } from '../../lib/sephiria-planner/engine/bag-planner-engine.mjs';
import { buildLayoutForDisplay } from '../../lib/sephiria-builds/build-layout-from-planner.ts';
import { weaponBuildGroups } from '../../lib/sephiria-build-navigation.ts';
import { assertValidBuildPlannerLayouts } from '../../lib/sephiria-planner/build-validation.ts';
import { OpenInBagPlannerButton } from '../../components/game-wiki/open-in-bag-planner-button.tsx';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const empty=(capacity=42,weapon=plannerWeapons[0].value)=>({schemaVersion:1,gameVersion:'1.0.33',capacity,weapon,placements:[]});
const artifact=plannerItems.find(x=>x.itemKind==='Artifact'&&x.categories.length>1);
const consumable=plannerItems.find(x=>x.itemKind==='Consumable');
const item=plannerItems.find(x=>x.itemKind==='Item');
const rotatable=plannerTabletRules.find(x=>x.rotation.canRotate);
const fixed=plannerTabletRules.find(x=>!x.rotation.canRotate);
const placements=[
 ...Array.from({length:5},(_,slot)=>({slot,itemId:artifact.id,kind:'Artifact'})),
 ...['UP','LEFT','DOWN','RIGHT'].map((rotation,i)=>({slot:5+i,itemId:rotatable.id,kind:'Tablet',rotation})),
 {slot:9,itemId:consumable.id,kind:'Consumable'},{slot:10,itemId:item.id,kind:'Item'},
];
const partial={...empty(42,plannerWeapons[1].value),placements};
const full={...empty(),placements:Array.from({length:42},(_,slot)=>placements.find(p=>p.slot===slot)??{slot,itemId:artifact.id,kind:'Artifact'})};
const cases=[empty(),partial,full,{...empty(24),placements:placements.filter(p=>p.slot<24)},{...partial,capacity:33},{...partial,weapon:plannerWeapons[2].value}];
const normalize=layout=>({...layout,placements:[...layout.placements].sort((a,b)=>a.slot-b.slot)});
function evaluate(layout){
 const ui=layoutToPlannerState(layout);
 const x=evaluateBagLayout({capacity:ui.capacity,weapon:ui.weapon,slots:ui.slots,itemsById:plannerItemsById,tabletRulesById:plannerTabletRulesById,artifactRulesById:plannerArtifactRulesById,comboRules:plannerComboRules});
 return {
  artifacts:x.artifactStates.map(a=>({slot:a.slot,id:a.itemId,raw:a.rawLevel,level:a.effectiveLevel,active:a.effectiveActive,constraints:a.constraints})),
  tablets:x.tabletStates.map(t=>({slot:t.originSlot,id:t.itemId,active:t.isActive,condition:t.activationConditionResult,effects:t.effectCells,rotation:t.rotation.effective})),
  combos:x.summary.combos,
 };
}
void test('canonical layouts round-trip with capacities, duplicate IDs, rotations, item kinds and weapons',()=>{
 for(const layout of cases){
  assert.equal(validateBagPlannerLayout(layout).valid,true);
  const decoded=decodeBagPlannerLayout(encodeBagPlannerLayout(layout));
  assert.equal(decoded.valid,true);
  assert.deepEqual(decoded.layout,normalize(layout));
  assert.deepEqual(evaluate(decoded.layout),evaluate(layout));
 }
 assert.equal(full.placements.length,42);
 assert.equal(encodeBagPlannerLayout(partial),encodeBagPlannerLayout({...partial,placements:[...partial.placements].reverse()}));
 const url=getBagPlannerUrl(full,{origin:'https://roguelikegame.org'});
 console.log('MAX_SHARE_URL_LENGTH='+url.length);
 assert(url.length<2048);
});
void test('validator reports structured errors and prevents invalid input or calculated fields',()=>{
 const cases=[
  [{...empty(),schemaVersion:2},'SCHEMA_VERSION'],
  [{...empty(),gameVersion:'1.0.34'},'GAME_VERSION'],
  [{...empty(),capacity:23},'CAPACITY'],
  [{...empty(),capacity:42.1},'CAPACITY'],
  [{...empty(),weapon:'UNKNOWN'},'WEAPON'],
  [{...empty(),placements:[{slot:42,itemId:artifact.id,kind:'Artifact'}]},'SLOT'],
  [{...empty(),placements:[{slot:0,itemId:999999,kind:'Artifact'}]},'UNKNOWN_ITEM'],
  [{...empty(),placements:[{slot:0,itemId:artifact.id,kind:'Tablet',rotation:'UP'}]},'ITEM_KIND'],
  [{...empty(),placements:[{slot:0,itemId:artifact.id,kind:'Artifact',rotation:'UP'}]},'NON_TABLET_ROTATION'],
  [{...empty(),placements:[{slot:0,itemId:fixed.id,kind:'Tablet',rotation:'DOWN'}]},'NON_ROTATABLE'],
  [{...empty(),placements:[{slot:0,itemId:rotatable.id,kind:'Tablet',rotation:'SIDE'}]},'ROTATION'],
  [{...empty(),placements:[{slot:0,itemId:artifact.id,kind:'Artifact'},{slot:0,itemId:item.id,kind:'Item'}]},'DUPLICATE_SLOT'],
  [{...empty(),placements:[{slot:0,itemId:artifact.id,kind:'Artifact',effectiveLevel:5}]},'EXTRA_PLACEMENT_FIELD'],
  [{...empty(),selectedItem:'x'},'EXTRA_LAYOUT_FIELD'],
 ];
 for(const [layout,code] of cases){const result=validateBagPlannerLayout(layout);assert.equal(result.valid,false,code);assert(result.errors.some(x=>x.code===code),code)}
});
void test('malformed URL payloads and unsupported versions fail safely',()=>{
 for(const bad of ['', '!!!','a',btoa('not json'),btoa(JSON.stringify({v:2,g:'1.0.33',c:42,w:plannerWeapons[0].value,p:[]})),btoa(JSON.stringify({v:1,g:'1.0.34',c:42,w:plannerWeapons[0].value,p:[]}))]) assert.equal(decodeBagPlannerLayout(bad).valid,false);
 const base={v:1,g:'1.0.33',c:42,w:plannerWeapons[0].value,p:[]};
 const invalids=[
  {...base,c:23}, {...base,w:'unknown'},
  {...base,p:[[0,999999,'a']]},
  {...base,p:[[0,artifact.id,'a'],[0,item.id,'i']]},
  {...base,p:[[0,rotatable.id,'t',5]]},
  {...base,p:[[0,artifact.id,'a',0]]},
 ];
 for(const wire of invalids){const payload=btoa(JSON.stringify(wire)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');assert.equal(decodeBagPlannerLayout(payload).valid,false)}
 const badGame=btoa(JSON.stringify({v:1,g:'1.0.34',c:42,w:plannerWeapons[0].value,p:[]}));
 assert(decodeBagPlannerLayout(badGame).errors.some(e=>e.code==='GAME_VERSION'));
});
void test('local storage uses canonical inputs, regenerates identities and migrates old saves',()=>{
 const original=layoutToPlannerState(partial);
 const restored=safeRestoreLayout(JSON.stringify(partial),plannerItemsById,id=>!!plannerTabletRulesById.get(id)?.rotation.canRotate,new Set(plannerWeapons.map(w=>w.value)),plannerWeapons[0].value);
 assert.equal(restored.recovered,false);
 assert.deepEqual(plannerStateToLayout(restored.layout),normalize(partial));
 assert.notEqual(restored.layout.slots[0].placementId,original.slots[0].placementId);
 const legacy=safeRestoreLayout(JSON.stringify(original),plannerItemsById,id=>!!plannerTabletRulesById.get(id)?.rotation.canRotate,new Set(plannerWeapons.map(w=>w.value)),plannerWeapons[0].value);
 assert.deepEqual(plannerStateToLayout(legacy.layout),normalize(partial));
});
void test('future Build obtains a valid URL from its optional layout alone',()=>{
 const future={href:'/games/sephiria/builds/example/future-build',plannerLayout:partial};
 const href=getBuildPlannerLink(future);
 assert(href.startsWith('/games/sephiria/tools/bag-planner?layout='));
 const query=new URL(href,'https://roguelikegame.org').searchParams;
 assert.equal(query.get('source'),'future-build');
 assert.deepEqual(decodeBagPlannerLayout(query.get('layout')).layout,normalize(partial));
 assert.equal(getBuildPlannerLink({href:future.href}),null);
 const html=renderToStaticMarkup(React.createElement(OpenInBagPlannerButton,{plannerLayout:future.plannerLayout,buildSlug:'future-build'}));
 assert(html.includes('Open in Bag Planner')); assert(html.includes('layout=')); assert(html.includes('source=future-build'));
 assert.equal(renderToStaticMarkup(React.createElement(OpenInBagPlannerButton,{buildSlug:'future-build'})),'');
 assert.throws(()=>assertValidBuildPlannerLayouts([{title:'Broken future build',plannerLayout:{...partial,capacity:99}}]),/Invalid Planner layout/);
 assert.doesNotThrow(()=>assertValidBuildPlannerLayouts([{title:'Future build',plannerLayout:partial},{title:'No layout'}]));
});
void test('all current official layouts validate and calculate after a round-trip',()=>{
 const builds=weaponBuildGroups.flatMap(g=>g.builds);
 assert.equal(builds.length,7);
 assert.equal(builds.filter(build=>build.plannerLayout).length,4);
 assert.equal(builds.find(build=>build.title==='Superconductor Lightning Spear Build')?.plannerLayout,undefined);
 for(const build of builds){
  if(!build.plannerLayout) continue;
  const decoded=decodeBagPlannerLayout(encodeBagPlannerLayout(build.plannerLayout));
  assert.equal(decoded.valid,true,build.title);
  assert.deepEqual(evaluate(decoded.layout),evaluate(build.plannerLayout),build.title);
 }
});

void test('locked client item 1260 is rejected and SNS-06 remains unregistered',()=>{
 const validation=validateBagPlannerLayout({...empty(),placements:[{slot:0,itemId:1260,kind:'Artifact'}]});
 assert.equal(validation.valid,false);
 assert(validation.errors.some(error=>error.code==='UNKNOWN_ITEM'));
 const builds=weaponBuildGroups.flatMap(group=>group.builds);
 const sns06=builds.find(build=>build.title==='Superconductor Lightning Spear Build');
 assert(sns06);
 assert.equal(sns06.plannerLayout,undefined);
 assert.doesNotThrow(()=>assertValidBuildPlannerLayouts(builds));
});

void test('future Build display preserves sparse slots and non-Artifact item types', () => {
 const layout = {...empty(), placements: [
  {slot:2, itemId:consumable.id, kind:'Consumable'},
  {slot:9, itemId:item.id, kind:'Item'},
  {slot:31, itemId:artifact.id, kind:'Artifact'},
 ]};
 const displayed = buildLayoutForDisplay({href:'/games/sephiria/builds/example',title:'Example',finalBuild:[],plannerLayout:layout});
 assert.deepEqual(displayed.cells.map(cell=>[cell.slot,cell.kind]),[[2,'Consumable'],[9,'Item'],[31,'Artifact']]);
 assert.equal(displayed.activeSlots,42);
});
