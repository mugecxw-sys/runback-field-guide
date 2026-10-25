import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { evaluateBagLayout } from "../../lib/sephiria-planner/engine/bag-planner-engine.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const readJson = path => JSON.parse(readFileSync(resolve(root, path), "utf8"));
const itemDataset = readJson("public/data/sephiria-items-1.0.33.json");
const tabletDataset = readJson("lib/sephiria-planner/data/sephiria-tablet-rules-public-1.0.33.json");
const artifactDataset = readJson("lib/sephiria-planner/data/sephiria-artifact-constraints-public-1.0.33.json");
const comboDataset = readJson("lib/sephiria-planner/data/sephiria-combos-public-1.0.33.json");
const fixtures = readJson("tests/sephiria-planner/sephiria-bag-planner-fixtures-1.0.33.json");
const itemsById = Object.fromEntries(itemDataset.items.map(item => [item.id, item]));
const tabletRulesById = Object.fromEntries(tabletDataset.ruleRecords.map(rule => [rule.id, rule]));
const artifactRulesById = Object.fromEntries(artifactDataset.ruleRecords.map(rule => [rule.id, rule]));
const comboRules = comboDataset.rules;

function makeSlots(placements, capacity = 33) {
  const slots = Array(capacity).fill(null);
  for (const [index, placement] of placements.entries()) {
    const item = itemsById[placement.itemId];
    assert.ok(item, `fixture item ${placement.itemId} exists`);
    assert.equal(slots[placement.slot], null, `slot ${placement.slot} is unique`);
    slots[placement.slot] = {
      placementId: `p-${placement.itemId}-${placement.slot}-${index}`,
      itemId: placement.itemId,
      itemKind: item.itemKind,
      rotation: placement.rotation ?? (item.itemKind === "Tablet" ? "UP" : null),
      baseLevel: placement.baseLevel ?? 1,
    };
  }
  return slots;
}

function evaluate(placements, { capacity = 33, weapon = "SWORD_AND_SHIELD" } = {}) {
  return evaluateBagLayout({
    capacity,
    weapon,
    slots: makeSlots(placements, capacity),
    itemsById,
    tabletRulesById,
    artifactRulesById,
    comboRules,
  });
}

function artifactAt(result, itemId, slot) {
  const state = result.artifactStates.find(value => value.itemId === itemId && value.slot === slot);
  assert.ok(state, `artifact ${itemId} at ${slot} has a calculated state`);
  return state;
}

function tabletAt(result, itemId, originSlot) {
  const state = result.tabletStates.find(value => value.itemId === itemId && value.originSlot === originSlot);
  assert.ok(state, `tablet ${itemId} at ${originSlot} has a calculated state`);
  return state;
}

void test("public catalog and rules satisfy the planner hard gates", () => {
  assert.equal(itemDataset.items.length, 419);
  assert.equal(itemDataset.items.filter(item => item.itemKind === "Artifact").length, 297);
  assert.equal(itemDataset.items.filter(item => item.itemKind === "Tablet").length, 66);
  assert.equal(tabletDataset.ruleRecords.length, 66);
  assert.equal(artifactDataset.ruleRecords.length, 297);
  assert.equal(comboDataset.rules.length, 20);
  assert.equal(new Set(tabletDataset.ruleRecords.map(rule => rule.id)).size, 66);
});

void test("each public Tablet has a matching public rule and image", () => {
  for (const item of itemDataset.items.filter(item => item.itemKind === "Tablet")) {
    assert.ok(tabletRulesById[item.id], `rule exists for ${item.displayName}`);
    assert.ok(item.image?.src, `image exists for ${item.displayName}`);
  }
});

void test("public Planner datasets contain no raw markup or research-only identifiers", () => {
  const publicData = JSON.stringify([itemDataset, tabletDataset, artifactDataset, comboDataset]);
  for (const token of ["{VALUE}", "{MAGIC_NAME}", "fieldPath", "runtimeClass", "Charm_", "sharedassets", "<tag="]) {
    assert.equal(publicData.toLowerCase().includes(token.toLowerCase()), false, `unexpected public token: ${token}`);
  }
});

void test("golden integration fixture set covers add, disable, ignore, and activation behavior", () => {
  assert.equal(fixtures.gameVersion, "1.0.33");
  assert.equal(fixtures.fixtures.length, 12);
  for (const fixture of fixtures.fixtures) {
    const result = evaluate(fixture.placements, { capacity: fixture.capacity, weapon: fixture.weapon });
    for (const expected of fixture.expected.artifacts ?? []) {
      const actual = artifactAt(result, expected.itemId, expected.slot);
      for (const key of ["finalState", "rawLevel", "effectiveLevel", "tabletLevelDelta", "disabled", "ignoreConstraints"]) {
        if (Object.hasOwn(expected, key)) assert.deepEqual(actual[key], expected[key], `${fixture.id}: ${key}`);
      }
      if (expected.ignoredConstraintTypes) {
        assert.deepEqual(actual.ignoredConstraints.map(value => value.type).sort((a, b) => a.localeCompare(b)), [...expected.ignoredConstraintTypes].sort((a, b) => a.localeCompare(b)), fixture.id);
      }
      if (expected.failedConstraintTypes) {
        assert.deepEqual(actual.failedConstraints.map(value => value.type).sort((a, b) => a.localeCompare(b)), [...expected.failedConstraintTypes].sort((a, b) => a.localeCompare(b)), fixture.id);
      }
      if (expected.contributorTabletIds) {
        assert.deepEqual(actual.contributors.map(value => value.tabletId).sort((a, b) => a - b), [...expected.contributorTabletIds].sort((a, b) => a - b), fixture.id);
      }
    }
    for (const expected of fixture.expected.tablets ?? []) {
      const actual = tabletAt(result, expected.itemId, expected.slot);
      assert.equal(actual.finalState, expected.finalState, fixture.id);
      assert.equal(actual.effectCellsApplied, expected.effectCellsApplied, fixture.id);
    }
  }
});

void test("layout output always includes 42 cells with six columns", () => {
  const result = evaluate([]);
  assert.equal(result.columns, 6);
  assert.equal(result.cells.length, 42);
  assert.equal(result.cells.filter(cell => cell.status === "ACTIVE").length, 33);
  assert.equal(result.cells.filter(cell => cell.status === "LOCKED").length, 9);
});

void test("each required capacity has exact active and locked cells including partial rows", () => {
  for (const capacity of fixtures.gridCapacities) {
    const result = evaluate([], { capacity });
    assert.equal(result.cells.length, 42);
    assert.equal(result.cells.filter(cell => cell.status === "ACTIVE").length, capacity);
    assert.equal(result.cells.filter(cell => cell.status === "LOCKED").length, 42 - capacity);
  }
});

void test("capacity outside the supported 24 to 42 range is rejected", () => {
  for (const capacity of [23, 43]) {
    assert.throws(() => evaluate([], { capacity }), RangeError);
  }
});

void test("empty bag has no effects and no occupied cells", () => {
  const result = evaluate([]);
  assert.equal(result.summary.usedSlots, 0);
  assert.equal(result.summary.artifacts, 0);
  assert.equal(result.summary.tablets, 0);
  assert.deepEqual(result.cellEffects, []);
});

void test("duplicate Artifact IDs are allowed as separate placements", () => {
  const result = evaluate([{ slot: 0, itemId: 1000 }, { slot: 1, itemId: 1000 }]);
  assert.equal(result.artifactStates.length, 2);
  assert.notEqual(result.artifactStates[0].placementId, result.artifactStates[1].placementId);
});

void test("ten or more Tablet placements are calculated independently", () => {
  const placements = Array.from({ length: 11 }, (_, index) => ({ slot: index * 2, itemId: 2002 }));
  const result = evaluate(placements);
  assert.equal(result.tabletStates.length, 11);
  assert.equal(result.summary.activeTablets, 11);
});

void test("rotation moves a rotatable Tablet effect through the shared direction sequence", () => {
  const up = evaluate([{ slot: 8, itemId: 2002, rotation: "UP" }]);
  const left = evaluate([{ slot: 8, itemId: 2002, rotation: "LEFT" }]);
  const down = evaluate([{ slot: 8, itemId: 2002, rotation: "DOWN" }]);
  const right = evaluate([{ slot: 8, itemId: 2002, rotation: "RIGHT" }]);
  assert.deepEqual([up, left, down, right].map(result => tabletAt(result, 2002, 8).rotation.effective), ["UP", "LEFT", "DOWN", "RIGHT"]);
  assert.deepEqual([up, left, down, right].map(result => tabletAt(result, 2002, 8).effectCells), [[9], [2], [7], [14]]);
});

void test("non-rotatable Tablet keeps its verified UP orientation", () => {
  const result = evaluate([{ slot: 8, itemId: 2056, rotation: "DOWN" }]);
  assert.equal(tabletAt(result, 2056, 8).rotation.effective, "UP");
  assert.equal(tabletAt(result, 2056, 8).rotation.canRotate, false);
});

void test("out-of-grid effects are ignored without row wrap or negative target slots", () => {
  const result = evaluate([{ slot: 0, itemId: 2002, rotation: "LEFT" }]);
  const state = tabletAt(result, 2002, 0);
  assert.deepEqual(state.effectCells, []);
  assert.equal(state.ignoredEffectCells.length, 1);
  assert.equal(state.ignoredEffectCells[0].status, "OUT_OF_GRID");
  assert.ok(result.cellEffects.every(cell => cell.slot >= 0 && cell.slot < 33));
});

void test("effect landing on a locked cell is ignored on a 25-slot bag", () => {
  const result = evaluate([{ slot: 19, itemId: 2018 }], { capacity: 25 });
  const state = tabletAt(result, 2018, 19);
  assert.ok(state.ignoredEffectCells.some(cell => cell.status === "LOCKED"));
  assert.ok(state.effectCells.every(slot => slot < 25));
});

void test("Tablet effects do not disable, level, or ignore rules for a Tablet target", () => {
  const result = evaluate([{ slot: 8, itemId: 2000 }, { slot: 9, itemId: 2002 }]);
  assert.equal(tabletAt(result, 2002, 9).finalState, "ACTIVE");
  assert.equal(result.artifactStates.length, 0);
  const target = result.cellEffects.find(cell => cell.slot === 9);
  assert.equal(target.targetKind, "TABLET");
  assert.equal(target.appliesToArtifact, false);
  assert.equal(target.disabled, false);
  assert.equal(target.levelDelta, 0);
  assert.equal(target.ignoredContributors[0].effectType, "DISABLE_ARTIFACT");
});

void test("Tablet effects do not apply to Consumable or Other item targets", () => {
  const result = evaluate([{ slot: 8, itemId: 2000 }, { slot: 9, itemId: 1 }, { slot: 10, itemId: 2000 }, { slot: 11, itemId: 10000 }]);
  const consumable = result.cellEffects.find(cell => cell.slot === 9);
  const otherItem = result.cellEffects.find(cell => cell.slot === 11);
  assert.equal(consumable.targetKind, "CONSUMABLE");
  assert.equal(consumable.appliesToArtifact, false);
  assert.equal(consumable.disabled, false);
  assert.equal(otherItem.targetKind, "ITEM");
  assert.equal(otherItem.appliesToArtifact, false);
  assert.equal(otherItem.disabled, false);
});

void test("Tablet activation failure applies zero effects", () => {
  const result = evaluate([{ slot: 1, itemId: 1000 }, { slot: 0, itemId: 2007 }]);
  const tablet = tabletAt(result, 2007, 0);
  assert.equal(tablet.activationConditionResult, "FAIL");
  assert.equal(tablet.effectCellsApplied, 0);
  assert.equal(artifactAt(result, 1000, 1).rawLevel, 1);
});

void test("all six verified Artifact constraint families are represented", () => {
  const types = new Set(artifactDataset.ruleRecords.flatMap(rule => rule.constraints.map(constraint => constraint.type)));
  assert.deepEqual([...types].sort((a, b) => a.localeCompare(b)), [
    "BOTH_ADJACENT_SLOTS_EMPTY",
    "BOTTOM_SLOTS",
    "INNER_SLOTS",
    "OUTLINED_SLOTS",
    "TOP_ROW",
    "WEAPON_IS",
  ]);
});

void test("no-constraint, top, bottom, inner, and outlined Artifact samples calculate", () => {
  assert.equal(artifactAt(evaluate([{ slot: 0, itemId: 1000 }]), 1000, 0).finalState, "ACTIVE");
  assert.equal(artifactAt(evaluate([{ slot: 0, itemId: 1009 }]), 1009, 0).finalState, "ACTIVE");
  assert.equal(artifactAt(evaluate([{ slot: 32, itemId: 1086 }]), 1086, 32).finalState, "ACTIVE");
  assert.equal(artifactAt(evaluate([{ slot: 14, itemId: 1018 }]), 1018, 14).finalState, "ACTIVE");
  assert.equal(artifactAt(evaluate([{ slot: 32, itemId: 1012 }]), 1012, 32).finalState, "ACTIVE");
});

void test("adjacent-empty constraint uses item occupancy and excludes Tablet cells", () => {
  const emptyNeighbors = evaluate([{ slot: 14, itemId: 1027 }]);
  assert.equal(artifactAt(emptyNeighbors, 1027, 14).finalState, "ACTIVE");
  const artifactNeighbor = evaluate([{ slot: 14, itemId: 1027 }, { slot: 13, itemId: 1000 }]);
  assert.equal(artifactAt(artifactNeighbor, 1027, 14).finalState, "INACTIVE_BY_CONSTRAINT");
  const tabletNeighbor = evaluate([{ slot: 14, itemId: 1027 }, { slot: 13, itemId: 2002 }]);
  assert.equal(artifactAt(tabletNeighbor, 1027, 14).finalState, "ACTIVE");
});

void test("weapon requirement fails for the wrong weapon and passes for the matching weapon", () => {
  assert.equal(artifactAt(evaluate([{ slot: 12, itemId: 1034 }]), 1034, 12).finalState, "ACTIVE");
  assert.equal(artifactAt(evaluate([{ slot: 12, itemId: 1287 }]), 1287, 12).finalState, "INACTIVE_BY_CONSTRAINT");
  assert.equal(artifactAt(evaluate([{ slot: 12, itemId: 1287 }], { weapon: "STAFF" }), 1287, 12).finalState, "ACTIVE");
});

void test("sample layout covers four Artifacts, three Tablets, one Consumable, and one Other item", () => {
  const result = evaluate([
    { slot: 0, itemId: 1000 },
    { slot: 9, itemId: 1009 },
    { slot: 13, itemId: 1034 },
    { slot: 32, itemId: 1086 },
    { slot: 8, itemId: 2002 },
    { slot: 12, itemId: 2000 },
    { slot: 19, itemId: 2018 },
    { slot: 20, itemId: 1 },
    { slot: 21, itemId: 10000 },
  ]);
  assert.equal(result.summary.usedSlots, 9);
  assert.equal(result.summary.artifacts, 4);
  assert.equal(result.summary.tablets, 3);
  assert.equal(artifactAt(result, 1009, 9).finalState, "ACTIVE");
  assert.equal(artifactAt(result, 1034, 13).tabletLevelDelta, 2);
  assert.equal(artifactAt(result, 1034, 13).finalState, "INACTIVE_BY_TABLET_DISABLE");
  assert.equal(artifactAt(result, 1086, 32).finalState, "ACTIVE");
  assert.equal(result.cells[20].placement.itemKind, "Consumable");
  assert.equal(result.cells[21].placement.itemKind, "Item");
});

void test("overlapping level effects are additive and contributors are preserved", () => {
  const result = evaluate([
    { slot: 13, itemId: 1009 },
    { slot: 19, itemId: 2051 },
    { slot: 20, itemId: 2019 },
    { slot: 14, itemId: 2002, rotation: "DOWN" },
  ]);
  const state = artifactAt(result, 1009, 13);
  assert.equal(state.tabletLevelDelta, 4);
  assert.deepEqual(state.contributors.filter(value => value.effectType === "ADD_ARTIFACT_LEVEL").map(value => value.value).sort((a, b) => a - b), [-1, 5]);
  assert.deepEqual(state.contributors.map(value => value.tabletId).sort((a, b) => a - b), [2002, 2019, 2051]);
});

void test("Tablet processing order does not change aggregated cell state", () => {
  const tabletList = [
    { slot: 19, itemId: 2051 },
    { slot: 20, itemId: 2019 },
  ];
  const forward = evaluate([{ slot: 13, itemId: 1000 }, ...tabletList]);
  const reverse = evaluate([{ slot: 13, itemId: 1000 }, ...tabletList.toReversed()]);
  const a = forward.cellEffects.find(cell => cell.slot === 13);
  const b = reverse.cellEffects.find(cell => cell.slot === 13);
  assert.equal(a.levelDelta, b.levelDelta);
  assert.deepEqual(a.contributors.map(value => [value.tabletId, value.effectType, value.value]), b.contributors.map(value => [value.tabletId, value.effectType, value.value]));
});

void test("full 33 and 42 slot layouts contain no locked placements", () => {
  for (const capacity of [33, 42]) {
    const placements = Array.from({ length: capacity }, (_, slot) => ({ slot, itemId: slot % 2 ? 1 : 1000 }));
    const result = evaluate(placements, { capacity });
    assert.equal(result.summary.usedSlots, capacity);
    assert.equal(result.cells.slice(0, capacity).every(cell => cell.placement), true);
    assert.equal(result.cells.slice(capacity).every(cell => cell.placement === null), true);
  }
});

void test("a 25-slot partial bottom uses linear slots 19 through 24", () => {
  const bottom = artifactAt(evaluate([{ slot: 19, itemId: 1086 }], { capacity: 25 }), 1086, 19);
  const outside = artifactAt(evaluate([{ slot: 18, itemId: 1086 }], { capacity: 25 }), 1086, 18);
  assert.equal(bottom.finalState, "ACTIVE");
  assert.equal(outside.finalState, "INACTIVE_BY_CONSTRAINT");
});
