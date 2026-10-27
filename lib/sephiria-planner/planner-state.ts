import { validateBagPlannerLayout, layoutToPlannerState, plannerStateToLayout, type BagPlannerLayoutV1 } from './bag-planner-layout';
import type { PlannerCatalogItem, PlannerItemKind, PlannerRotation, PlannerWeapon } from './data';
import { ROTATIONS } from './engine/tablet-rule-engine.mjs';

export const PLANNER_SCHEMA_VERSION = 1;
export const PLANNER_GAME_VERSION = '1.0.33';
export const PLANNER_MIN_CAPACITY = 24;
export const PLANNER_MAX_CAPACITY = 42;
export const PLANNER_DEFAULT_CAPACITY = 42;
export const PLANNER_STORAGE_KEY = 'runback:sephiria:bag-planner:v1';

export type PlannerPlacement = {
  placementId: string;
  itemId: number;
  itemKind: PlannerItemKind;
  rotation: PlannerRotation | null;
  baseLevel: 1;
};

export type PlannerLayout = {
  schemaVersion: 1;
  gameVersion: '1.0.33';
  capacity: number;
  weapon: PlannerWeapon;
  slots: (PlannerPlacement | null)[];
};

const kindSet = new Set<PlannerItemKind>(['Artifact', 'Tablet', 'Consumable', 'Item']);

export function createEmptyLayout(weapon: PlannerWeapon): PlannerLayout {
  return {
    schemaVersion: PLANNER_SCHEMA_VERSION,
    gameVersion: PLANNER_GAME_VERSION,
    capacity: PLANNER_DEFAULT_CAPACITY,
    weapon,
    slots: Array(PLANNER_DEFAULT_CAPACITY).fill(null),
  };
}

export function makePlacement(item: PlannerCatalogItem, placementId: string): PlannerPlacement {
  return {
    placementId,
    itemId: item.id,
    itemKind: item.itemKind,
    rotation: item.itemKind === 'Tablet' ? 'UP' : null,
    baseLevel: 1,
  };
}

export function placeItem(layout: PlannerLayout, item: PlannerCatalogItem, slot: number, placementId: string): PlannerLayout | null {
  if (!Number.isInteger(slot) || slot < 0 || slot >= layout.capacity || layout.slots[slot]) return null;
  const slots = [...layout.slots];
  slots[slot] = makePlacement(item, placementId);
  return { ...layout, slots };
}

export function removeItem(layout: PlannerLayout, slot: number): PlannerLayout {
  if (!Number.isInteger(slot) || slot < 0 || slot >= layout.capacity || !layout.slots[slot]) return layout;
  const slots = [...layout.slots];
  slots[slot] = null;
  return { ...layout, slots };
}

export function moveItem(layout: PlannerLayout, from: number, to: number): PlannerLayout | null {
  if (from === to) return layout;
  if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from >= layout.capacity || to >= layout.capacity) return null;
  if (!layout.slots[from] || layout.slots[to]) return null;
  const slots = [...layout.slots];
  slots[to] = slots[from];
  slots[from] = null;
  return { ...layout, slots };
}

export function rotateTablet(layout: PlannerLayout, slot: number, canRotate: boolean): PlannerLayout {
  if (!canRotate || slot < 0 || slot >= layout.capacity) return layout;
  const current = layout.slots[slot];
  if (!current || current.itemKind !== 'Tablet') return layout;
  const currentRotation = current.rotation ?? 'UP';
  const index = ROTATIONS.indexOf(currentRotation);
  const rotation = ROTATIONS[(index + 1) % ROTATIONS.length] as PlannerRotation;
  const slots = [...layout.slots];
  slots[slot] = { ...current, rotation };
  return { ...layout, slots };
}

export function resizeLayout(layout: PlannerLayout, capacity: number) {
  if (!Number.isInteger(capacity) || capacity < PLANNER_MIN_CAPACITY || capacity > PLANNER_MAX_CAPACITY) {
    return { layout: null, removed: [] as { slot: number; placement: PlannerPlacement }[] };
  }
  const removed = layout.slots.flatMap((placement, slot) => slot >= capacity && placement ? [{ slot, placement }] : []);
  const slots = Array.from({ length: capacity }, (_, slot) => layout.slots[slot] ?? null);
  return { layout: { ...layout, capacity, slots }, removed };
}

export function clearLayout(layout: PlannerLayout): PlannerLayout {
  return { ...layout, slots: Array(layout.capacity).fill(null) };
}

export function resetLayout(defaultWeapon: PlannerWeapon): PlannerLayout {
  return createEmptyLayout(defaultWeapon);
}

export function safeRestoreLayout(
  raw: string | null,
  itemsById: Map<number, PlannerCatalogItem>,
  canRotateTablet: (tabletId: number) => boolean,
  validWeapons: Set<string>,
  defaultWeapon: PlannerWeapon,
): { layout: PlannerLayout; recovered: boolean; removedCount: number } {
  const fallback = createEmptyLayout(defaultWeapon);
  if (!raw) return { layout: fallback, recovered: false, removedCount: 0 };
  try {
    const parsed: unknown = JSON.parse(raw);
    const source = { itemsById, canRotate: canRotateTablet, validWeapons };
    if (parsed && typeof parsed === 'object' && 'placements' in parsed) {
      const validation = validateBagPlannerLayout(parsed, source);
      if (!validation.valid) return { layout: fallback, recovered: true, removedCount: 0 };
      return { layout: layoutToPlannerState(parsed as BagPlannerLayoutV1, source), recovered: false, removedCount: 0 };
    }
    const saved = parsed as Partial<PlannerLayout>;
    if (saved.schemaVersion !== PLANNER_SCHEMA_VERSION || saved.gameVersion !== PLANNER_GAME_VERSION || !Array.isArray(saved.slots)) {
      return { layout: fallback, recovered: true, removedCount: 0 };
    }
    const capacity = Number.isInteger(saved.capacity) && saved.capacity! >= PLANNER_MIN_CAPACITY && saved.capacity! <= PLANNER_MAX_CAPACITY
      ? saved.capacity!
      : PLANNER_DEFAULT_CAPACITY;
    const weapon = validWeapons.has(String(saved.weapon)) ? saved.weapon as PlannerWeapon : defaultWeapon;
    const usedPlacementIds = new Set<string>();
    let removedCount = 0;
    const slots: (PlannerPlacement | null)[] = Array(capacity).fill(null);
    for (let slot = 0; slot < saved.slots.length; slot += 1) {
      const value = saved.slots[slot] as Partial<PlannerPlacement> | null;
      if (!value) continue;
      if (slot >= capacity || !Number.isInteger(value.itemId)) { removedCount += 1; continue; }
      const item = itemsById.get(value.itemId!);
      if (!item || !kindSet.has(item.itemKind) || typeof value.placementId !== 'string' || !value.placementId || usedPlacementIds.has(value.placementId)) {
        removedCount += 1;
        continue;
      }
      usedPlacementIds.add(value.placementId);
      const rotation = item.itemKind === 'Tablet' && canRotateTablet(item.id) && ROTATIONS.includes(value.rotation as PlannerRotation)
        ? value.rotation as PlannerRotation
        : item.itemKind === 'Tablet' ? 'UP' : null;
      slots[slot] = { placementId: value.placementId, itemId: item.id, itemKind: item.itemKind, rotation, baseLevel: 1 };
    }
    const recovered = removedCount > 0 || saved.capacity !== capacity || !validWeapons.has(String(saved.weapon));
    const restored = { schemaVersion: PLANNER_SCHEMA_VERSION as 1, gameVersion: PLANNER_GAME_VERSION as '1.0.33', capacity, weapon, slots };
    if (!validateBagPlannerLayout(plannerStateToLayout(restored), source).valid) return { layout: fallback, recovered: true, removedCount };
    return { layout: restored, recovered, removedCount };
  } catch {
    return { layout: fallback, recovered: true, removedCount: 0 };
  }
}
