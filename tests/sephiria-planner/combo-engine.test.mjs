import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { evaluateBagLayout } from "../../lib/sephiria-planner/engine/bag-planner-engine.mjs";
import { evaluateCombos } from "../../lib/sephiria-planner/engine/combo-engine.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const readJson = path => JSON.parse(readFileSync(resolve(root, path), "utf8"));
const itemDataset = readJson("public/data/sephiria-items-1.0.33.json");
const tabletDataset = readJson("lib/sephiria-planner/data/sephiria-tablet-rules-public-1.0.33.json");
const artifactDataset = readJson("lib/sephiria-planner/data/sephiria-artifact-constraints-public-1.0.33.json");
const comboDataset = readJson("lib/sephiria-planner/data/sephiria-combos-public-1.0.33.json");
const fixtures = readJson("tests/sephiria-planner/sephiria-combo-engine-fixtures-1.0.33.json");
const itemsById = new Map(itemDataset.items.map(item => [item.id, item]));
const tabletRulesById = new Map(tabletDataset.ruleRecords.map(rule => [rule.id, rule]));
const artifactRulesById = new Map(artifactDataset.ruleRecords.map(rule => [rule.id, rule]));

function evaluateItems(items, capacity = 42) {
  const slots = Array(capacity).fill(null);
  items.forEach((itemId, slot) => {
    const item = itemsById.get(itemId);
    assert.ok(item, `item ${itemId} exists`);
    slots[slot] = { placementId: `placement-${slot}`, itemId, itemKind: item.itemKind };
  });
  return evaluateCombos({ layout: { capacity, slots }, itemsById, comboRules: comboDataset.rules });
}

void test("client-derived Combo data has 20 categories and complete player-facing tiers", () => {
  assert.equal(itemDataset.categories.length, 20);
  assert.equal(comboDataset.gameVersion, "1.0.33");
  assert.equal(comboDataset.rules.length, 20);
  assert.equal(new Set(comboDataset.rules.map(rule => rule.id)).size, 20);
  assert.equal(comboDataset.rules.reduce((sum, rule) => sum + rule.thresholds.length, 0), 85);
  for (const rule of comboDataset.rules) {
    assert.ok(rule.thresholds.length > 0, rule.name);
    assert.ok(rule.thresholds.every((tier, index) => tier.effect && (index === 0 || tier.count > rule.thresholds[index - 1].count)), rule.name);
  }
  const publicText = JSON.stringify(comboDataset);
  for (const token of ["<tag=", "{VALUE}", "runtimeClass", "componentAssetId", "localizationKey", "DARK_CLOUD_MULTISHOT", "COOLDOWN_RECOVERY_SPEED", "GrandWiki"]) {
    assert.equal(publicText.includes(token), false, `public Combo data leaked ${token}`);
  }
});

void test("all Combo fixtures cover every count from zero through beyond the highest tier", () => {
  assert.equal(fixtures.gameVersion, "1.0.33");
  assert.equal(fixtures.categoryFixtures.length, 20);
  for (const fixture of fixtures.categoryFixtures) {
    const rule = comboDataset.rules.find(value => value.id === fixture.comboId);
    assert.ok(rule, fixture.comboId);
    for (const count of fixture.counts) {
      const rows = evaluateItems(Array(count).fill(fixture.artifactItemId));
      const result = rows.find(value => value.comboId === rule.id);
      if (count === 0) {
        assert.equal(result, undefined, `${rule.name} is omitted at zero`);
        continue;
      }
      assert.ok(result, `${rule.name} is present at ${count}`);
      assert.equal(result.count, count, `${rule.name} count ${count}`);
      const active = rule.thresholds.filter(value => value.count <= count).at(-1) ?? null;
      const next = rule.thresholds.find(value => value.count > count) ?? null;
      assert.equal(result.isActive, active !== null, `${rule.name} active at ${count}`);
      assert.equal(result.activeThreshold, active?.count ?? null, `${rule.name} active tier at ${count}`);
      assert.equal(result.activeEffect, active?.effect ?? null, `${rule.name} active effect at ${count}`);
      assert.equal(result.nextThreshold, next?.count ?? null, `${rule.name} next tier at ${count}`);
      assert.equal(result.nextEffect, next?.effect ?? null, `${rule.name} next effect at ${count}`);
      assert.deepEqual(result.activeTiers.map(value => value.count), rule.thresholds.filter(value => value.count <= count).map(value => value.count));
    }
  }
});

void test("dual-category samples contribute to both categories once per placed Artifact", () => {
  const expected = new Map([
    [1187, ["Storm Cloud", "Ember"]],
    [1071, ["Companion", "Storm Cloud"]],
    [1244, ["Storm Cloud", "Glacier"]],
    [1245, ["Storm Cloud", "Wind Song"]],
  ]);
  assert.deepEqual(fixtures.multiCategorySamples.map(value => value.itemId), [...expected.keys()]);
  for (const [itemId, categories] of expected) {
    const item = itemsById.get(itemId);
    assert.deepEqual(item.categories, categories);
    const rows = evaluateItems([itemId]);
    for (const category of categories) assert.equal(rows.find(value => value.name === category)?.count, 1, `${item.displayName} -> ${category}`);
  }
});

void test("each repeated Artifact placement counts, while non-Artifact kinds never count", () => {
  const duplicateRows = evaluateItems([1187, 1187]);
  assert.equal(duplicateRows.find(value => value.name === "Storm Cloud").count, 2);
  assert.equal(duplicateRows.find(value => value.name === "Ember").count, 2);

  const source = itemsById.get(1187);
  const nonArtifactItems = new Map(itemsById);
  for (const [id, itemKind] of [[900001, "Tablet"], [900002, "Consumable"], [900003, "Item"]]) {
    nonArtifactItems.set(id, { ...source, id, itemKind });
  }
  const slots = [900001, 900002, 900003].map((itemId, slot) => ({ placementId: `non-artifact-${slot}`, itemId, itemKind: nonArtifactItems.get(itemId).itemKind }));
  const result = evaluateCombos({ layout: { capacity: 24, slots: [...slots, ...Array(21).fill(null)] }, itemsById: nonArtifactItems, comboRules: comboDataset.rules });
  assert.deepEqual(result, []);
});

void test("inactive placed Artifacts still contribute to Combos, matching the client inventory scan", () => {
  const itemId = 1009;
  const item = itemsById.get(itemId);
  assert.equal(item.displayName, "Sword Training Manual");
  const slots = Array(33).fill(null);
  slots[8] = { placementId: "inactive-combo-artifact", itemId, itemKind: "Artifact", rotation: null, baseLevel: 1 };
  const result = evaluateBagLayout({
    capacity: 33,
    weapon: "SWORD_AND_SHIELD",
    slots,
    itemsById,
    tabletRulesById,
    artifactRulesById,
    comboRules: comboDataset.rules,
  });
  const state = result.artifactStates.find(value => value.itemId === itemId);
  assert.equal(state.effectiveActive, false);
  assert.equal(result.summary.combos.find(value => value.name === "Wind Song")?.count, 1);
});

void test("Combo summary only includes present categories and sorts active tiers before inactive counts", () => {
  const rows = evaluateItems([1187, 1071]);
  assert.equal(rows.length, 3);
  assert.equal(rows[0].name, "Storm Cloud");
  assert.equal(rows[0].count, 2);
  assert.equal(rows[0].activeThreshold, 2);
  assert.deepEqual(rows.slice(1).map(value => value.name).sort(), ["Companion", "Ember"]);
  assert.equal(rows.slice(1).every(value => !value.isActive && value.count === 1), true);
  assert.equal(rows.some(value => value.count === 0), false);
});
