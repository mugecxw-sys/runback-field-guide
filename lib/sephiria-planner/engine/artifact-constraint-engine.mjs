/**
 * Pure Sephiria 1.0.33 Artifact constraint evaluator.
 * Depends only on JSON data and the shared Tablet-engine grid helpers.
 */
import { resolveGridCell, resolveGridSlot } from "./tablet-rule-engine.mjs";

const SUPPORTED_TYPES = new Set([
  "TOP_ROW",
  "BOTTOM_SLOTS",
  "INNER_SLOTS",
  "OUTLINED_SLOTS",
  "BOTH_ADJACENT_SLOTS_EMPTY",
  "WEAPON_IS",
]);

function assertInteger(value, label) {
  if (!Number.isInteger(value)) throw new TypeError(`${label} must be an integer`);
}

function normalizeWeapon(weapon) {
  if (weapon === undefined || weapon === null || weapon === "") return null;
  return String(weapon)
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toUpperCase()
    .replaceAll("&", "AND")
    .replaceAll(/[^A-Z0-9]+/g, "_")
    .replaceAll(/^_+|_+$/g, "");
}

function entriesFromLayout(layout) {
  if (layout === undefined || layout === null) return null;
  const source = layout.slots ?? layout.cells ?? layout.itemsByCell ?? layout;
  if (source instanceof Map) return source;
  if (Array.isArray(source)) {
    const entries = new Map();
    for (let index = 0; index < source.length; index += 1) {
      const cell = source[index];
      if (cell !== undefined && cell !== null && cell !== false) {
        const slot = Number.isInteger(cell.slot) ? cell.slot : index;
        entries.set(slot, cell);
      }
    }
    return entries;
  }
  if (source && typeof source === "object") {
    return new Map(Object.entries(source).map(([slot, value]) => [Number(slot), value]));
  }
  throw new TypeError("layout must be a Map, array, or slot-keyed object");
}

function itemAt(layoutEntries, slot) {
  return layoutEntries instanceof Map ? layoutEntries.get(slot) : undefined;
}

function normalizedItemKind(item) {
  if (item === undefined || item === null || item === false) return "EMPTY";
  if (typeof item === "string") return item.trim().toUpperCase().replaceAll(/[ -]+/g, "_");
  if (item.itemTypeCode === 6 || item.kind === "TABLET" || item.itemKind === "Tablet") return "TABLET";
  if (item.itemTypeCode === 5 || item.kind === "ARTIFACT" || item.itemKind === "Artifact") return "ARTIFACT";
  if (item.itemTypeCode === 2 || item.kind === "CONSUMABLE" || item.itemKind === "Consumable") return "CONSUMABLE";
  const value = item.kind ?? item.itemKind ?? item.type ?? "ITEM";
  return String(value).trim().toUpperCase().replaceAll(/[ -]+/g, "_");
}

/** Client GridInventory.FindItem reads inventoryMatrix. Tablets live in the
 * separate stoneTablets collection and therefore do not count as occupants. */
export function isInventorySlotOccupied(layout, slot) {
  assertInteger(slot, "slot");
  const entries = entriesFromLayout(layout);
  if (entries === null) return null;
  const kind = normalizedItemKind(itemAt(entries, slot));
  return !new Set(["EMPTY", "LOCKED", "TABLET"]).has(kind);
}

function checkResult(constraint, predicateResult, reason, details = {}) {
  return {
    type: constraint.type,
    scope: constraint.scope,
    ignoreableByTablet: Boolean(constraint.ignoreableByTablet),
    evaluationMode: constraint.evaluationMode,
    status: predicateResult,
    predicateResult,
    reason,
    ...details,
  };
}

function evaluatePredicate(constraint, { slot, capacity, weapon, layoutEntries }) {
  const columns = constraint.parameters?.columns ?? 6;
  const row = Math.floor(slot / columns);
  const column = slot % columns;
  switch (constraint.type) {
    case "TOP_ROW":
      return checkResult(constraint, row === 0 ? "PASS" : "FAIL", row === 0 ? "ARTIFACT_IN_TOP_ROW" : "ARTIFACT_NOT_IN_TOP_ROW", { row, column });
    case "BOTTOM_SLOTS": {
      const slotCount = constraint.parameters?.slotCount ?? columns;
      const pass = slot >= capacity - slotCount;
      return checkResult(constraint, pass ? "PASS" : "FAIL", pass ? "IN_FINAL_LINEAR_SLOT_RANGE" : "OUTSIDE_FINAL_LINEAR_SLOT_RANGE", { slotCount, threshold: capacity - slotCount });
    }
    case "INNER_SLOTS": {
      const pass = column > 0 && row > 0 && column < columns - 1 && slot + columns + 1 < capacity;
      return checkResult(constraint, pass ? "PASS" : "FAIL", pass ? "POSITION_WITHIN_CLIENT_INNER_BOUNDS" : "POSITION_OUTSIDE_CLIENT_INNER_BOUNDS", { row, column });
    }
    case "OUTLINED_SLOTS": {
      const pass = column === 0 || row === 0 || column === columns - 1 || slot >= capacity - columns;
      return checkResult(constraint, pass ? "PASS" : "FAIL", pass ? "POSITION_MATCHES_CLIENT_OUTLINE_PREDICATE" : "POSITION_NOT_IN_CLIENT_OUTLINE", { row, column, bottomThreshold: capacity - columns });
    }
    case "BOTH_ADJACENT_SLOTS_EMPTY": {
      const left = slot - 1;
      const right = slot + 1;
      const leftCell = resolveGridCell(row, column - 1, capacity, columns);
      const rightCell = resolveGridCell(row, column + 1, capacity, columns);
      const boundaries = { left: leftCell, right: rightCell };
      if (column === 0 || column === columns - 1 || leftCell.status !== "ACTIVE" || rightCell.status !== "ACTIVE") {
        return checkResult(constraint, "FAIL", "BOTH_ACTIVE_HORIZONTAL_NEIGHBORS_REQUIRED", { neighbors: boundaries });
      }
      if (layoutEntries === null) {
        return checkResult(constraint, "INDETERMINATE", "INVENTORY_LAYOUT_REQUIRED", { neighbors: boundaries });
      }
      const leftOccupied = isInventorySlotOccupied(layoutEntries, left);
      const rightOccupied = isInventorySlotOccupied(layoutEntries, right);
      const pass = !leftOccupied && !rightOccupied;
      return checkResult(constraint, pass ? "PASS" : "FAIL", pass ? "BOTH_HORIZONTAL_NEIGHBORS_EMPTY" : "HORIZONTAL_NEIGHBOR_OCCUPIED", {
        neighbors: boundaries,
        occupied: { left: leftOccupied, right: rightOccupied },
      });
    }
    case "WEAPON_IS": {
      const actual = normalizeWeapon(weapon);
      if (actual === null) return checkResult(constraint, "INDETERMINATE", "CURRENT_WEAPON_REQUIRED", { expectedWeapon: constraint.parameters.weapon, actualWeapon: null });
      const expected = normalizeWeapon(constraint.parameters.weapon);
      const pass = actual === expected;
      return checkResult(constraint, pass ? "PASS" : "FAIL", pass ? "WEAPON_MATCH" : "WEAPON_MISMATCH", { expectedWeapon: expected, actualWeapon: actual });
    }
    default:
      throw new TypeError(`Unsupported Artifact constraint type: ${constraint.type}`);
  }
}

/** Evaluate one Artifact's static constraints without modifying the layout. */
export function evaluateArtifactConstraints({ artifactRule, slot, capacity, weapon, layout, tabletEffectState = {} }) {
  if (!artifactRule || typeof artifactRule !== "object") throw new TypeError("artifactRule must be a public-safe rule record");
  assertInteger(slot, "slot");
  assertInteger(capacity, "capacity");
  const columns = artifactRule.constraints?.[0]?.parameters?.columns ?? 6;
  const grid = resolveGridSlot(slot, capacity, columns);
  const layoutEntries = entriesFromLayout(layout);
  if (!Array.isArray(artifactRule.constraints)) throw new TypeError("artifactRule.constraints must be an array");

  const placement = {
    status: grid.status === "ACTIVE" ? "PASS" : "FAIL",
    slot,
    row: grid.row,
    column: grid.column,
    gridStatus: grid.status,
    reason: grid.status === "ACTIVE" ? "ACTIVE_BAG_SLOT" : grid.status,
  };
  const tabletIgnore = Boolean(tabletEffectState.ignoreConstraints);
  const results = [];
  if (placement.status === "PASS") {
    for (const constraint of artifactRule.constraints) {
      if (!SUPPORTED_TYPES.has(constraint.type)) throw new TypeError(`Unsupported Artifact constraint type: ${constraint.type}`);
      if (tabletIgnore && constraint.ignoreableByTablet) {
        results.push({
          type: constraint.type,
          scope: constraint.scope,
          ignoreableByTablet: true,
          evaluationMode: constraint.evaluationMode,
          status: "IGNORED",
          predicateResult: "NOT_EVALUATED",
          reason: "TABLET_IGNORE_ARTIFACT_CONSTRAINTS",
          ignoredByTablet: true,
        });
        continue;
      }
      const raw = evaluatePredicate(constraint, { slot, capacity, weapon, layoutEntries });
      results.push({ ...raw, ignoredByTablet: false });
    }
  }
  const failures = results.filter(result => result.status === "FAIL");
  const indeterminate = results.filter(result => result.status === "INDETERMINATE");
  let finalConstraintStatus;
  if (placement.status === "FAIL" || failures.length) finalConstraintStatus = "FAIL";
  else if (indeterminate.length) finalConstraintStatus = "INDETERMINATE";
  else finalConstraintStatus = "PASS";

  return {
    artifactId: artifactRule.id,
    artifactName: artifactRule.name,
    slot,
    capacity,
    placement,
    tabletIgnore,
    constraints: results,
    finalConstraintStatus,
    staticValid: finalConstraintStatus === "INDETERMINATE" ? null : finalConstraintStatus === "PASS",
    passedConstraints: results.filter(result => result.status === "PASS"),
    failedConstraints: failures,
    ignoredConstraints: results.filter(result => result.status === "IGNORED"),
    indeterminateConstraints: indeterminate,
    runtimeConditions: [],
    runtimeDependent: false,
    failureReasons: [
      ...(placement.status === "FAIL" ? [{ code: `PLACEMENT_${grid.status}`, slot, reason: placement.reason }] : []),
      ...failures.map(result => ({ code: result.type, reason: result.reason })),
      ...indeterminate.map(result => ({ code: `${result.type}_CONTEXT_REQUIRED`, reason: result.reason })),
    ],
  };
}
