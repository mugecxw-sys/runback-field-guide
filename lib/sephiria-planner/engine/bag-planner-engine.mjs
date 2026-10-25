import { aggregateTabletEffects, DEFAULT_COLUMNS, resolveTabletPattern } from "./tablet-rule-engine.mjs";
import { evaluateArtifactState } from "./artifact-state-engine.mjs";
import { evaluateCombos } from "./combo-engine.mjs";

const MIN_CAPACITY = 24;
const MAX_CAPACITY = 42;

function findById(records, id) {
  if (records instanceof Map) return records.get(id) ?? records.get(String(id));
  if (Array.isArray(records)) return records.find((record) => record.id === id);
  if (records && typeof records === "object") return records[id] ?? records[String(id)];
  return undefined;
}

function emptyCellEffect(slot) {
  return { slot, levelDelta: 0, disabled: false, ignoreConstraints: false, contributors: [] };
}

function getItemKind(item, placement) {
  return placement?.itemKind ?? item?.itemKind ?? "Item";
}

function toItemsByCell(slots, itemsById, capacity) {
  const itemsByCell = {};
  const layout = {};
  for (let slot = 0; slot < capacity; slot += 1) {
    const placement = slots[slot];
    if (!placement) continue;
    const item = findById(itemsById, placement.itemId);
    if (!item) continue;
    const itemKind = getItemKind(item, placement);
    const cell = { itemKind, itemId: placement.itemId, placementId: placement.placementId };
    itemsByCell[slot] = cell;
    layout[slot] = cell;
  }
  return { itemsByCell, layout };
}

function stateReason(state) {
  if (state.finalState === "ACTIVE") return null;
  if (state.finalState === "INACTIVE_BY_TABLET_DISABLE") {
    const tablet = state.contributors.find((contributor) => contributor.effectType === "DISABLE_ARTIFACT");
    return tablet ? `Disabled by ${tablet.tabletName}.` : "Disabled by a Tablet effect.";
  }
  if (state.finalState === "INACTIVE_BY_LEVEL") return "Artifact level is below 1.";
  if (state.finalState === "INACTIVE_BY_PLACEMENT") return "This item must be placed in an active bag slot.";
  if (state.finalState === "CONTEXT_REQUIRED") return "Choose a weapon and complete the nearby item layout to check this Artifact.";
  const failed = state.failedConstraints ?? [];
  const weapon = failed.find((constraint) => constraint.type === "WEAPON_IS");
  if (weapon) return `Requires ${weapon.expectedWeapon.replaceAll("_", " ").toLowerCase()}.`;
  if (failed.length) return `Requirements not met: ${failed.map((constraint) => constraint.type.replaceAll("_", " ").toLowerCase()).join(", ")}.`;
  return "This Artifact is inactive.";
}

function tabletReason(resolved) {
  if (resolved.activationConditionResult === "PASS") return null;
  if (resolved.activationConditionResult === "INDETERMINATE") return "Add the nearby item required to check this Tablet.";
  return "This Tablet must be placed in a marked slot.";
}

/**
 * Pure whole-layout calculation. It consumes the verified public datasets and
 * existing Tablet/Artifact engines; it does not read browser or UI state.
 */
export function evaluateBagLayout({
  capacity,
  weapon,
  slots,
  itemsById,
  tabletRulesById,
  artifactRulesById,
  comboRules,
  previewTablet = null,
  previewTabletPlacementId = null,
}) {
  if (!Number.isInteger(capacity) || capacity < MIN_CAPACITY || capacity > MAX_CAPACITY) {
    throw new RangeError(`capacity must be between ${MIN_CAPACITY} and ${MAX_CAPACITY}`);
  }
  if (!Array.isArray(slots) || slots.length < capacity) throw new TypeError("slots must include one entry per active bag slot");
  if (!itemsById || !tabletRulesById || !artifactRulesById || !Array.isArray(comboRules)) throw new TypeError("item and public rule datasets are required");

  const { itemsByCell, layout } = toItemsByCell(slots, itemsById, capacity);
  const artifactPlacements = [];
  const tabletPlacements = [];
  const occupiedCount = Object.keys(itemsByCell).length;

  for (let slot = 0; slot < capacity; slot += 1) {
    const placement = slots[slot];
    if (!placement) continue;
    const item = findById(itemsById, placement.itemId);
    if (!item) continue;
    const itemKind = getItemKind(item, placement);
    if (itemKind === "Artifact") artifactPlacements.push({ slot, placement, item });
    if (itemKind === "Tablet") {
      const tabletRule = findById(tabletRulesById, placement.itemId);
      if (tabletRule) tabletPlacements.push({ tabletId: placement.itemId, originSlot: slot, rotation: placement.rotation ?? "UP", placementId: placement.placementId, rule: tabletRule });
    }
  }

  const aggregate = aggregateTabletEffects({
    capacity,
    columns: DEFAULT_COLUMNS,
    rulesById: tabletRulesById,
    tablets: tabletPlacements,
    itemsByCell,
  });
  const effectBySlot = new Map(aggregate.cells.map((cell) => [cell.slot, cell]));
  const tabletResolutionByPlacement = new Map();
  const tabletStates = tabletPlacements.map((placement, index) => {
    const resolved = aggregate.tablets[index];
    const state = {
      ...resolved,
      placementId: placement.placementId,
      itemId: placement.tabletId,
      finalState: resolved.activationConditionResult === "PASS" ? "ACTIVE" : resolved.activationConditionResult === "INDETERMINATE" ? "CONTEXT_REQUIRED" : "INACTIVE",
      reason: tabletReason(resolved),
    };
    tabletResolutionByPlacement.set(placement.placementId, state);
    return state;
  });

  const artifactStates = artifactPlacements.map(({ slot, placement, item }) => {
    const artifactRule = findById(artifactRulesById, placement.itemId);
    if (!artifactRule) return null;
    const contribution = effectBySlot.get(slot) ?? emptyCellEffect(slot);
    const state = evaluateArtifactState({
      artifactRule,
      slot,
      capacity,
      weapon,
      layout,
      baseLevel: placement.baseLevel ?? 1,
      tabletEffectState: {
        levelDelta: contribution.levelDelta,
        disabled: contribution.disabled,
        ignoreConstraints: contribution.ignoreConstraints,
        contributors: contribution.contributors,
      },
    });
    return {
      ...state,
      placementId: placement.placementId,
      itemId: placement.itemId,
      image: item.image?.src ?? artifactRule.image,
      rarity: item.rarity,
      categories: item.categories ?? [],
      reason: stateReason(state),
    };
  }).filter(Boolean);

  let preview = null;
  if (previewTabletPlacementId) {
    preview = tabletResolutionByPlacement.get(previewTabletPlacementId) ?? null;
  } else if (previewTablet) {
    const rule = findById(tabletRulesById, previewTablet.tabletId ?? previewTablet.itemId);
    if (rule && Number.isInteger(previewTablet.originSlot) && previewTablet.originSlot >= 0 && previewTablet.originSlot < capacity) {
      const resolved = resolveTabletPattern(rule, previewTablet.originSlot, previewTablet.rotation ?? "UP", capacity, {
        columns: DEFAULT_COLUMNS,
        itemsByCell,
      });
      preview = {
        ...resolved,
        itemId: rule.id,
        placementId: previewTablet.placementId ?? null,
        finalState: resolved.activationConditionResult === "PASS" ? "ACTIVE" : resolved.activationConditionResult === "INDETERMINATE" ? "CONTEXT_REQUIRED" : "INACTIVE",
        reason: tabletReason(resolved),
      };
    }
  }

  const previewCondition = new Set(preview?.conditionCells ?? []);
  const previewEffects = new Set(preview?.effectCells ?? []);
  const cells = Array.from({ length: MAX_CAPACITY }, (_, slot) => {
    const active = slot < capacity;
    const placement = active ? slots[slot] ?? null : null;
    return {
      index: slot,
      row: Math.floor(slot / DEFAULT_COLUMNS),
      column: slot % DEFAULT_COLUMNS,
      status: active ? "ACTIVE" : "LOCKED",
      placement,
      effect: active ? effectBySlot.get(slot) ?? emptyCellEffect(slot) : emptyCellEffect(slot),
      preview: { condition: previewCondition.has(slot), effect: previewEffects.has(slot), tabletState: preview?.finalState ?? null },
    };
  });
  const activeArtifacts = artifactStates.filter((state) => state.effectiveActive === true).length;
  const inactiveArtifacts = artifactStates.filter((state) => state.effectiveActive === false).length;
  const activeTablets = tabletStates.filter((state) => state.finalState === "ACTIVE").length;
  const inactiveTablets = tabletStates.filter((state) => state.finalState === "INACTIVE").length;
  const combos = evaluateCombos({ layout: { capacity, slots }, itemsById, comboRules });

  return {
    capacity,
    columns: DEFAULT_COLUMNS,
    weapon,
    cells,
    tabletStates,
    artifactStates,
    cellEffects: aggregate.cells,
    previewTablet: preview,
    summary: {
      usedSlots: occupiedCount,
      artifacts: artifactStates.length,
      activeArtifacts,
      inactiveArtifacts,
      unresolvedArtifacts: artifactStates.length - activeArtifacts - inactiveArtifacts,
      tablets: tabletStates.length,
      activeTablets,
      inactiveTablets,
      combos,
    },
  };
}
