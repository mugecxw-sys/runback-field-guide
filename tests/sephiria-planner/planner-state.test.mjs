import assert from "node:assert/strict";
import { test } from "node:test";
import {
  clearLayout,
  createEmptyLayout,
  moveItem,
  placeItem,
  removeItem,
  resetLayout,
  resizeLayout,
  rotateTablet,
  safeRestoreLayout,
} from "../../lib/sephiria-planner/planner-state.ts";

const weapons = new Set(["SWORD_AND_SHIELD", "GREAT_SWORD", "CROSSBOW", "DAGGER", "KATANA", "STAFF"]);
const catalog = new Map([
  [1, { id: 1, itemKind: "Consumable" }],
  [1000, { id: 1000, itemKind: "Artifact" }],
  [10000, { id: 10000, itemKind: "Item" }],
  [2002, { id: 2002, itemKind: "Tablet" }],
  [2056, { id: 2056, itemKind: "Tablet" }],
]);
const canRotate = id => id === 2002;
const empty = () => createEmptyLayout("SWORD_AND_SHIELD");

void test("default planner layout starts at 42 slots with the default weapon", () => {
  const layout = empty();
  assert.equal(layout.capacity, 42);
  assert.equal(layout.slots.length, 42);
  assert.equal(layout.weapon, "SWORD_AND_SHIELD");
  assert.equal(layout.gameVersion, "1.0.33");
});

void test("placing an item creates an independent placement with base level one", () => {
  const placed = placeItem(empty(), catalog.get(1000), 0, "artifact-a");
  assert.equal(placed.slots[0].placementId, "artifact-a");
  assert.equal(placed.slots[0].baseLevel, 1);
  assert.equal(placed.slots[0].rotation, null);
});

void test("same Artifact ID can be placed more than once with distinct placement IDs", () => {
  let layout = empty();
  layout = placeItem(layout, catalog.get(1000), 0, "artifact-a");
  layout = placeItem(layout, catalog.get(1000), 1, "artifact-b");
  assert.equal(layout.slots[0].itemId, layout.slots[1].itemId);
  assert.notEqual(layout.slots[0].placementId, layout.slots[1].placementId);
});

void test("placing into an occupied or locked slot is rejected", () => {
  const layout = placeItem(empty(), catalog.get(1000), 0, "a");
  assert.equal(placeItem(layout, catalog.get(1), 0, "b"), null);
  const reduced = resizeLayout(layout, 33).layout;
  assert.equal(placeItem(reduced, catalog.get(1), 33, "c"), null);
});

void test("moving placements preserves identity, Artifact base level, and Tablet rotation", () => {
  let initial = placeItem(empty(), catalog.get(1000), 4, "artifact-a");
  initial.slots[4] = { ...initial.slots[4], baseLevel: 5 };
  initial = placeItem(initial, catalog.get(2002), 5, "tablet-a");
  initial.slots[5] = { ...initial.slots[5], rotation: "LEFT" };

  const movedArtifact = moveItem(initial, 4, 9);
  const movedTablet = moveItem(movedArtifact, 5, 10);

  assert.equal(movedTablet.slots[4], null);
  assert.equal(movedTablet.slots[5], null);
  assert.equal(movedTablet.slots[9].placementId, "artifact-a");
  assert.equal(movedTablet.slots[9].baseLevel, 5);
  assert.equal(movedTablet.slots[10].placementId, "tablet-a");
  assert.equal(movedTablet.slots[10].rotation, "LEFT");
});

void test("moving into occupied or out-of-range slots is rejected", () => {
  let layout = placeItem(empty(), catalog.get(1000), 0, "a");
  layout = placeItem(layout, catalog.get(1), 1, "b");
  assert.equal(moveItem(layout, 0, 1), null);
  assert.equal(moveItem(layout, 0, 42), null);
});

void test("removing an item clears only that slot", () => {
  let layout = placeItem(empty(), catalog.get(1000), 0, "a");
  layout = placeItem(layout, catalog.get(1), 1, "b");
  const removed = removeItem(layout, 0);
  assert.equal(removed.slots[0], null);
  assert.equal(removed.slots[1].placementId, "b");
});

void test("rotating a movable Tablet follows UP, LEFT, DOWN, RIGHT", () => {
  let layout = placeItem(empty(), catalog.get(2002), 0, "tablet-a");
  for (const direction of ["LEFT", "DOWN", "RIGHT", "UP"]) {
    layout = rotateTablet(layout, 0, true);
    assert.equal(layout.slots[0].rotation, direction);
  }
});

void test("non-rotatable Tablet does not change orientation", () => {
  let layout = placeItem(empty(), catalog.get(2056), 0, "tablet-fixed");
  layout = rotateTablet(layout, 0, false);
  assert.equal(layout.slots[0].rotation, "UP");
});

void test("shrinking capacity explicitly reports and removes overflow placements", () => {
  const initial = placeItem(empty(), catalog.get(1000), 32, "keep");
  const withOverflow = placeItem(initial, catalog.get(1), 32, "replace");
  assert.equal(withOverflow, null);
  const larger = resizeLayout(initial, 42).layout;
  const withItem = placeItem(larger, catalog.get(1), 40, "overflow");
  const shrunk = resizeLayout(withItem, 33);
  assert.equal(shrunk.layout.capacity, 33);
  assert.equal(shrunk.removed.length, 1);
  assert.equal(shrunk.removed[0].slot, 40);
});

void test("increasing capacity preserves existing placements and opens empty slots", () => {
  const initial = placeItem(empty(), catalog.get(1000), 32, "keep");
  const grown = resizeLayout(initial, 42);
  assert.equal(grown.removed.length, 0);
  assert.equal(grown.layout.slots[32].placementId, "keep");
  assert.equal(grown.layout.slots[41], null);
});

void test("unsupported capacity changes are rejected without mutating the layout", () => {
  const layout = empty();
  assert.equal(resizeLayout(layout, 23).layout, null);
  assert.equal(resizeLayout(layout, 43).layout, null);
  assert.equal(layout.capacity, 42);
});

void test("clear empties the current bag while retaining capacity and weapon", () => {
  const initial = placeItem(empty(), catalog.get(1000), 0, "a");
  const cleared = clearLayout(initial);
  assert.equal(cleared.capacity, 42);
  assert.equal(cleared.weapon, "SWORD_AND_SHIELD");
  assert.ok(cleared.slots.every(slot => slot === null));
});

void test("reset returns the empty default layout with the requested weapon", () => {
  const reset = resetLayout("STAFF");
  assert.equal(reset.capacity, 42);
  assert.equal(reset.weapon, "STAFF");
  assert.ok(reset.slots.every(slot => slot === null));
});

void test("local layout JSON restores valid entries and Tablet rotation", () => {
  let layout = empty();
  layout = placeItem(layout, catalog.get(1000), 2, "artifact-a");
  layout = placeItem(layout, catalog.get(2002), 7, "tablet-a");
  layout = { ...layout, weapon: "STAFF" };
  layout = rotateTablet(layout, 7, true);
  const restored = safeRestoreLayout(JSON.stringify(layout), catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.recovered, false);
  assert.equal(restored.layout.weapon, "STAFF");
  assert.equal(restored.layout.slots[2].placementId, "artifact-a");
  assert.equal(restored.layout.slots[7].rotation, "LEFT");
});

void test("a saved pre-update 33-slot layout keeps its capacity until the user resets", () => {
  const legacyLayout = { ...empty(), capacity: 33, slots: Array(33).fill(null) };
  legacyLayout.slots[32] = { placementId: "legacy-item", itemId: 1000, itemKind: "Artifact", rotation: null, baseLevel: 1 };
  const restored = safeRestoreLayout(JSON.stringify(legacyLayout), catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.layout.capacity, 33);
  assert.equal(restored.layout.slots[32].placementId, "legacy-item");
  assert.equal(resetLayout("SWORD_AND_SHIELD").capacity, 42);
});

void test("malformed local storage recovers to an empty safe layout", () => {
  const restored = safeRestoreLayout("{bad json", catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.recovered, true);
  assert.equal(restored.layout.capacity, 42);
  assert.ok(restored.layout.slots.every(slot => slot === null));
});

void test("wrong schema or game version recovers to an empty default", () => {
  const raw = JSON.stringify({ schemaVersion: 7, gameVersion: "old", capacity: 42, slots: [] });
  const restored = safeRestoreLayout(raw, catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.recovered, true);
  assert.equal(restored.layout.capacity, 42);
});

void test("restore drops unknown items and duplicate placement identities", () => {
  const base = empty();
  const rawLayout = {
    ...base,
    slots: [
      { placementId: "same", itemId: 1000, itemKind: "Artifact", baseLevel: 1 },
      { placementId: "same", itemId: 1, itemKind: "Consumable", baseLevel: 1 },
      { placementId: "missing", itemId: 123456, itemKind: "Artifact", baseLevel: 1 },
    ],
  };
  const restored = safeRestoreLayout(JSON.stringify(rawLayout), catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.recovered, true);
  assert.equal(restored.removedCount, 2);
  assert.equal(restored.layout.slots[0].itemId, 1000);
  assert.equal(restored.layout.slots[1], null);
});

void test("restore drops items beyond the saved capacity", () => {
  const base = empty();
  const expanded = resizeLayout(base, 42).layout;
  const withTail = placeItem(expanded, catalog.get(1000), 41, "tail");
  const restored = safeRestoreLayout(JSON.stringify(withTail), catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.layout.capacity, 42);
  assert.equal(restored.layout.slots[41].placementId, "tail");
  const shrunkSaved = { ...withTail, capacity: 33 };
  const safe = safeRestoreLayout(JSON.stringify(shrunkSaved), catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(safe.removedCount, 1);
  assert.equal(safe.layout.slots.length, 33);
});

void test("restore normalizes an unknown weapon to the default", () => {
  const raw = JSON.stringify({ ...empty(), weapon: "SECRET_WEAPON" });
  const restored = safeRestoreLayout(raw, catalog, canRotate, weapons, "SWORD_AND_SHIELD");
  assert.equal(restored.recovered, true);
  assert.equal(restored.layout.weapon, "SWORD_AND_SHIELD");
});
