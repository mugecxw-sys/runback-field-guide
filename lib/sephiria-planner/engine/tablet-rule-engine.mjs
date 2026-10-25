/**
 * Pure Sephiria 1.0.33 Tablet rule resolver.
 * No DOM, UI state, filesystem, network, or game runtime dependencies.
 */

export const ROTATIONS = Object.freeze(["UP", "LEFT", "DOWN", "RIGHT"]);
export const DEFAULT_COLUMNS = 6;

const EDGE_ROTATION = Object.freeze({
  TOP: "LEFT",
  LEFT: "BOTTOM",
  BOTTOM: "RIGHT",
  RIGHT: "TOP",
});

function assertInteger(value, label) {
  if (!Number.isInteger(value)) throw new TypeError(`${label} must be an integer`);
}

export function getGridHeight(capacity, columns = DEFAULT_COLUMNS) {
  assertInteger(capacity, "capacity");
  assertInteger(columns, "columns");
  if (capacity < 1) throw new RangeError("capacity must be positive");
  if (columns !== DEFAULT_COLUMNS) {
    throw new RangeError("Sephiria 1.0.33 inventory width is fixed at 6 columns");
  }
  return Math.ceil(capacity / columns);
}

/** Resolve a visual cell against the shared 6-column inventory grid. */
export function resolveGridCell(row, column, capacity, columns = DEFAULT_COLUMNS) {
  assertInteger(row, "row");
  assertInteger(column, "column");
  const height = getGridHeight(capacity, columns);
  if (column < 0 || column >= columns || row < 0 || row >= height) {
    return { row, column, slot: null, status: "OUT_OF_GRID" };
  }
  const slot = row * columns + column;
  if (slot >= capacity) return { row, column, slot, status: "LOCKED" };
  return { row, column, slot, status: "ACTIVE" };
}

/** Resolve a linear slot through the same shared 6-column inventory grid. */
export function resolveGridSlot(slot, capacity, columns = DEFAULT_COLUMNS) {
  assertInteger(slot, "slot");
  const height = getGridHeight(capacity, columns);
  const row = Math.floor(slot / columns);
  const column = slot - row * columns;
  if (row < 0 || row >= height) return { row, column, slot, status: "OUT_OF_GRID" };
  return resolveGridCell(row, column, capacity, columns);
}

function normalizeDirection(rotation) {
  if (Number.isInteger(rotation)) return ROTATIONS[((rotation % 4) + 4) % 4];
  const value = String(rotation ?? "UP").toUpperCase();
  if (!ROTATIONS.includes(value)) throw new RangeError(`Unknown rotation: ${rotation}`);
  return value;
}

function rotationIndex(direction) {
  return ROTATIONS.indexOf(direction);
}

function rotateVector(vector, turns) {
  let result = { row: vector.row, column: vector.column };
  for (let i = 0; i < turns; i += 1) {
    // Matches StoneTablet.GetRotatedKeyword: UP -> LEFT per clockwise UI turn.
    result = { row: cleanZero(-result.column), column: cleanZero(result.row) };
  }
  return result;
}

function cleanZero(value) {
  return Object.is(value, -0) ? 0 : value;
}

/** Apply the one shared quarter-turn transform to a base semantic pattern. */
export function rotatePattern(pattern, rotation) {
  const turns = rotationIndex(normalizeDirection(rotation));
  if (turns === 0) return structuredClone(pattern);

  if (pattern.type === "RELATIVE_OFFSET" || pattern.type === "DIRECTION_RAY") {
    return { ...structuredClone(pattern), vector: rotateVector(pattern.vector, turns) };
  }
  if (pattern.type === "LINE_THROUGH_ORIGIN") {
    const axis = turns % 2 === 0 ? pattern.axis : (pattern.axis === "ROW" ? "COLUMN" : "ROW");
    return { ...structuredClone(pattern), axis };
  }
  if (pattern.type === "GRID_EDGE") {
    let edge = pattern.edge;
    for (let i = 0; i < turns; i += 1) edge = EDGE_ROTATION[edge];
    return { ...structuredClone(pattern), edge };
  }
  if (pattern.type === "GRID_PARITY") return structuredClone(pattern);
  throw new TypeError(`Unsupported Tablet pattern type: ${pattern.type}`);
}

function *positionsForPattern(pattern, origin, height, columns, capacity) {
  if (pattern.type === "RELATIVE_OFFSET") {
    yield { row: origin.row + pattern.vector.row, column: origin.column + pattern.vector.column };
    return;
  }
  if (pattern.type === "LINE_THROUGH_ORIGIN") {
    if (pattern.axis === "ROW") {
      for (let column = 0; column < columns; column += 1) {
        if (column !== origin.column) yield { row: origin.row, column };
      }
    } else {
      for (let row = 0; row < height; row += 1) {
        if (row !== origin.row) yield { row, column: origin.column };
      }
    }
    return;
  }
  if (pattern.type === "GRID_EDGE") {
    // Native BOTTOM selects the final Width linear bag slots. On a partial
    // final row that range spans two visual rows (for example, slots 19–24
    // at capacity 25). This is distinct from a geometric last-row selector.
    if (pattern.edge === "TOP") {
      for (let slot = 0; slot < Math.min(columns, capacity); slot += 1) {
        yield { row: Math.floor(slot / columns), column: slot % columns };
      }
    } else if (pattern.edge === "BOTTOM") {
      for (let slot = Math.max(0, capacity - columns); slot < capacity; slot += 1) {
        yield { row: Math.floor(slot / columns), column: slot % columns };
      }
    } else {
      const column = pattern.edge === "LEFT" ? 0 : columns - 1;
      for (let row = 0; row < height; row += 1) {
        const slot = row * columns + column;
        if (slot < capacity) yield { row, column };
      }
    }
    return;
  }
  if (pattern.type === "GRID_PARITY") {
    const originParity = (origin.row + origin.column) % 2;
    for (let slot = 0; slot < capacity; slot += 1) {
      const row = Math.floor(slot / columns);
      const column = slot % columns;
      const isSameParity = ((row + column) % 2) === originParity;
      if (pattern.parity === "SAME_AS_ORIGIN" ? isSameParity : !isSameParity) {
        if (row !== origin.row || column !== origin.column) yield { row, column };
      }
    }
    return;
  }
  if (pattern.type === "DIRECTION_RAY") {
    for (let distance = 1; distance <= columns + height; distance += 1) {
      const row = origin.row + pattern.vector.row * distance;
      const column = origin.column + pattern.vector.column * distance;
      if (row < 0 || row >= height || column < 0 || column >= columns) break;
      yield { row, column };
    }
    return;
  }
  throw new TypeError(`Unsupported Tablet pattern type: ${pattern.type}`);
}

function classifyPosition(position, capacity, height, columns) {
  return resolveGridCell(position.row, position.column, capacity, columns);
}

function effectActionFor(effect) {
  if (effect.effectType === "ADD_ARTIFACT_LEVEL") {
    if (!Number.isInteger(effect.value)) throw new TypeError("ADD_ARTIFACT_LEVEL requires an integer value");
    return { effectType: effect.effectType, value: effect.value };
  }
  if (effect.effectType === "DISABLE_ARTIFACT" || effect.effectType === "IGNORE_ARTIFACT_CONSTRAINTS") {
    return { effectType: effect.effectType, value: null };
  }
  throw new TypeError(`Unsupported public Tablet effect type: ${effect.effectType}`);
}

function itemAt(itemsByCell, slot) {
  if (itemsByCell instanceof Map) return itemsByCell.get(slot);
  if (Array.isArray(itemsByCell)) return itemsByCell[slot];
  if (itemsByCell && typeof itemsByCell === "object") return itemsByCell[slot] ?? itemsByCell[String(slot)];
  return undefined;
}

function classifyItem(item) {
  if (item === undefined || item === null || item === false) return undefined;
  if (typeof item === "string") return item.toUpperCase();
  if (item.itemTypeCode === 6 || item.itemKind === "Tablet" || item.kind === "TABLET") return "TABLET";
  if (item.itemTypeCode === 5 || item.itemKind === "Artifact" || item.kind === "ARTIFACT") return "ARTIFACT";
  if (item.itemTypeCode !== undefined) return `ITEM_TYPE_${item.itemTypeCode}`;
  return String(item.kind ?? item.itemKind ?? "ITEM").toUpperCase();
}

function hasAnyItem(itemsByCell, slot) {
  return classifyItem(itemAt(itemsByCell, slot)) !== undefined;
}

function isCharm(item) {
  return classifyItem(item) === "ARTIFACT";
}

function normalizeChecks(activation) {
  return activation?.checks ?? [];
}

/**
 * Resolve one public Tablet. tabletRule is a record from the public-safe JSON.
 * Rotation override is optional because the client has a runtime override map;
 * without it the static ItemEntity flag is used.
 */
export function resolveTabletPattern(tabletRule, originSlot, rotation = "UP", capacity = 42, options = {}) {
  if (!tabletRule || typeof tabletRule !== "object") throw new TypeError("tabletRule must be a rule record");
  assertInteger(originSlot, "originSlot");
  const columns = options.columns ?? DEFAULT_COLUMNS;
  const height = getGridHeight(capacity, columns);
  if (originSlot < 0 || originSlot >= capacity) throw new RangeError("originSlot must identify an active bag cell");

  const requestedDirection = normalizeDirection(rotation);
  const canRotate = options.rotationOverride ?? tabletRule.rotation?.canRotate ?? false;
  const effectiveDirection = canRotate ? requestedDirection : "UP";
  const origin = { row: Math.floor(originSlot / columns), column: originSlot % columns };

  const conditionCellsBySlot = new Map();
  const conditionPositions = [];
  const placedChecks = [];
  const itemChecks = [];
  let conditionContextRequired = false;

  for (const check of normalizeChecks(tabletRule.activation)) {
    const rotated = rotatePattern(check.pattern, effectiveDirection);
    const positions = [...positionsForPattern(rotated, origin, height, columns, capacity)];
    const classified = positions.map(position => classifyPosition(position, capacity, height, columns));
    conditionPositions.push(...classified.map(position => ({ ...position, type: check.type })));
    for (const position of classified) {
      if (position.status === "ACTIVE") conditionCellsBySlot.set(position.slot, position);
    }
    if (check.type === "PLACED") placedChecks.push(classified);
    else if (check.type === "ANY_ITEM" || check.type === "ONLY_CHARM") {
      itemChecks.push({ type: check.type, positions: classified });
      if (options.itemsByCell === undefined) conditionContextRequired = true;
    } else {
      throw new TypeError(`Unsupported Tablet activation check: ${check.type}`);
    }
  }

  let activationConditionResult = "PASS";
  let activationReason = "NO_CONDITION";
  if (conditionContextRequired) {
    activationConditionResult = "INDETERMINATE";
    activationReason = "ITEM_LAYOUT_REQUIRED";
  } else {
    let allItemCriteriaHit = true;
    for (const check of itemChecks) {
      for (const position of check.positions) {
        const item = position.status === "ACTIVE" ? itemAt(options.itemsByCell, position.slot) : undefined;
        const hit = check.type === "ANY_ITEM" ? hasAnyItem(options.itemsByCell, position.slot) : isCharm(item);
        if (!hit) allItemCriteriaHit = false;
      }
    }
    const hasPlacedCriteria = placedChecks.length > 0;
    const anyPlacedMatch = placedChecks.some(positions => positions.some(position => position.status === "ACTIVE" && position.slot === originSlot));
    const pass = allItemCriteriaHit && (!hasPlacedCriteria || anyPlacedMatch);
    activationConditionResult = pass ? "PASS" : "FAIL";
    activationReason = hasPlacedCriteria ? (anyPlacedMatch ? "TABLET_ORIGIN_IN_MARKED_CELLS" : "TABLET_ORIGIN_OUTSIDE_MARKED_CELLS") : "ITEM_CRITERIA";
  }

  const effectMap = new Map();
  const ignoredEffectCells = [];
  if (activationConditionResult === "PASS") {
    for (let effectIndex = 0; effectIndex < (tabletRule.effects ?? []).length; effectIndex += 1) {
      const effect = tabletRule.effects[effectIndex];
      const action = effectActionFor(effect);
      const rotated = rotatePattern(effect.pattern, effectiveDirection);
      for (const position of positionsForPattern(rotated, origin, height, columns, capacity)) {
        const classified = classifyPosition(position, capacity, height, columns);
        if (classified.status !== "ACTIVE") {
          ignoredEffectCells.push({
            ...classified,
            effectIndex,
            effectType: action.effectType,
            value: action.value,
            reason: classified.status,
          });
          continue;
        }
        if (!effectMap.has(classified.slot)) effectMap.set(classified.slot, []);
        effectMap.get(classified.slot).push({ ...action, effectIndex });
      }
    }
  }

  const effectsByCell = [...effectMap.entries()]
    .sort(([a], [b]) => a - b)
    .map(([slot, effects]) => ({
      slot,
      row: Math.floor(slot / columns),
      column: slot % columns,
      effects,
    }));
  const effectCells = effectsByCell.map(cell => cell.slot);

  return {
    id: tabletRule.id,
    name: tabletRule.name,
    originSlot,
    rotation: {
      requested: requestedDirection,
      effective: effectiveDirection,
      canRotate: Boolean(canRotate),
      wasOverridden: options.rotationOverride !== undefined && Boolean(options.rotationOverride) !== Boolean(tabletRule.rotation?.canRotate),
    },
    isActive: activationConditionResult === "INDETERMINATE" ? null : activationConditionResult === "PASS",
    activationConditionResult,
    activationReason,
    conditionCells: [...conditionCellsBySlot.keys()].sort((a, b) => a - b),
    conditionCandidates: conditionPositions,
    effectCells,
    effectsByCell,
    effectCellsApplied: effectCells.length,
    ignoredEffectCells,
  };
}

/**
 * Aggregate Tablet contributions per active bag cell. Arithmetic remains raw:
 * no Artifact cap, activation effect, combo, or damage math is performed.
 */
export function aggregateTabletEffects(layout) {
  const capacity = layout?.capacity;
  const columns = layout?.columns ?? DEFAULT_COLUMNS;
  const tablets = layout?.tablets ?? layout?.placements ?? [];
  if (!Array.isArray(tablets)) throw new TypeError("layout.tablets must be an array");
  const byId = layout?.rulesById ?? layout?.rules;
  if (!byId) throw new TypeError("layout.rulesById (or rules) is required");

  const ruleLookup = id => byId instanceof Map
    ? byId.get(id) ?? byId.get(String(id))
    : Array.isArray(byId)
      ? byId.find(rule => rule.id === id)
      : byId[id] ?? byId[String(id)];

  const origins = new Map();
  const rawCells = new Map();
  const resolvedTablets = [];

  for (let placementIndex = 0; placementIndex < tablets.length; placementIndex += 1) {
    const placement = tablets[placementIndex];
    const id = placement.tabletId ?? placement.id;
    const rule = placement.rule ?? ruleLookup(id);
    if (!rule) throw new RangeError(`No Tablet rule found for id ${id}`);
    const originSlot = placement.originSlot;
    origins.set(originSlot, { id, name: rule.name, placementIndex });
    const resolved = resolveTabletPattern(rule, originSlot, placement.rotation ?? "UP", capacity, {
      columns,
      rotationOverride: placement.rotationOverride,
      itemsByCell: layout.itemsByCell,
    });
    resolvedTablets.push(resolved);
    for (const cell of resolved.effectsByCell) {
      if (!rawCells.has(cell.slot)) {
        rawCells.set(cell.slot, { levelDelta: 0, disabled: false, ignoreConstraints: false, contributors: [] });
      }
      const aggregate = rawCells.get(cell.slot);
      for (const effect of cell.effects) {
        const contributor = {
          tabletId: id,
          tabletName: rule.name,
          originSlot,
          rotation: resolved.rotation.effective,
          effectIndex: effect.effectIndex,
          effectType: effect.effectType,
          value: effect.value,
        };
        aggregate.contributors.push(contributor);
        if (effect.effectType === "ADD_ARTIFACT_LEVEL") aggregate.levelDelta += effect.value;
        else if (effect.effectType === "DISABLE_ARTIFACT") aggregate.disabled = true;
        else if (effect.effectType === "IGNORE_ARTIFACT_CONSTRAINTS") aggregate.ignoreConstraints = true;
      }
    }
  }

  const cells = [...rawCells.entries()].sort(([a], [b]) => a - b).map(([slot, value]) => {
    const explicitKind = classifyItem(itemAt(layout.itemsByCell, slot));
    const tabletAtCell = origins.get(slot);
    const targetKind = tabletAtCell ? "TABLET" : explicitKind ?? "UNSPECIFIED";
    const isKnownNonArtifact = targetKind !== "ARTIFACT" && targetKind !== "UNSPECIFIED";
    const contributors = [...value.contributors].sort((a, b) =>
      a.tabletId - b.tabletId || a.originSlot - b.originSlot || a.effectIndex - b.effectIndex,
    );
    const ignoredContributors = isKnownNonArtifact ? contributors : [];
    return {
      slot,
      row: Math.floor(slot / columns),
      column: slot % columns,
      targetKind,
      appliesToArtifact: targetKind === "ARTIFACT" ? true : targetKind === "UNSPECIFIED" ? null : false,
      levelDelta: isKnownNonArtifact ? 0 : value.levelDelta,
      disabled: isKnownNonArtifact ? false : value.disabled,
      ignoreConstraints: isKnownNonArtifact ? false : value.ignoreConstraints,
      contributors: isKnownNonArtifact ? [] : contributors,
      ignoredContributors,
      projected: {
        levelDelta: value.levelDelta,
        disabled: value.disabled,
        ignoreConstraints: value.ignoreConstraints,
      },
    };
  });

  return { capacity, columns, tablets: resolvedTablets, cells };
}
