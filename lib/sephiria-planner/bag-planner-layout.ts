import { defaultPlannerWeapon, plannerItemsById, plannerTabletRulesById, plannerWeapons, type PlannerItemKind, type PlannerRotation, type PlannerWeapon } from './data';
import type { PlannerLayout, PlannerPlacement } from './planner-state';
import { ROTATIONS } from './engine/tablet-rule-engine.mjs';

export type BagPlannerLayoutV1 = {
  schemaVersion: 1;
  gameVersion: '1.0.33';
  capacity: number;
  weapon: PlannerWeapon;
  placements: { slot: number; itemId: number; kind: PlannerItemKind; rotation?: PlannerRotation }[];
};
export type LayoutError = { code: string; slot?: number; itemId?: number };
export type LayoutCatalog = {
  itemsById: Map<number, { id: number; itemKind: PlannerItemKind }>;
  canRotate: (id: number) => boolean;
  hasTabletRule?: (id: number) => boolean;
  validWeapons: Set<string>;
};
const catalog: LayoutCatalog = {
  itemsById: plannerItemsById,
  canRotate: (id) => Boolean(plannerTabletRulesById.get(id)?.rotation.canRotate),
  hasTabletRule: (id) => plannerTabletRulesById.has(id),
  validWeapons: new Set(plannerWeapons.map((weapon) => weapon.value)),
};
const kinds: PlannerItemKind[] = ['Artifact', 'Tablet', 'Consumable', 'Item'];
const kindCodes = ['a', 't', 'c', 'i'];

export function validateBagPlannerLayout(value: unknown, source: LayoutCatalog = catalog): { valid: boolean; errors: LayoutError[] } {
  const errors: LayoutError[] = [];
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { valid: false, errors: [{ code: 'INVALID_LAYOUT' }] };
  const o = value as Record<string, unknown>;
  if (o.schemaVersion !== 1) errors.push({ code: 'SCHEMA_VERSION' });
  if (o.gameVersion !== '1.0.33') errors.push({ code: 'GAME_VERSION' });
  if (!Number.isInteger(o.capacity) || Number(o.capacity) < 24 || Number(o.capacity) > 42) errors.push({ code: 'CAPACITY' });
  if (typeof o.weapon !== 'string' || !source.validWeapons.has(o.weapon)) errors.push({ code: 'WEAPON' });
  if (!Array.isArray(o.placements) || o.placements.length > 42) errors.push({ code: 'PLACEMENTS' });
  const used = new Set<number>();
  if (Array.isArray(o.placements)) for (const raw of o.placements) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) { errors.push({ code: 'PLACEMENT' }); continue; }
    const p = raw as Record<string, unknown>;
    const slot = Number.isInteger(p.slot) ? Number(p.slot) : undefined;
    const id = Number.isInteger(p.itemId) ? Number(p.itemId) : undefined;
    if (slot === undefined || slot < 0 || slot >= Number(o.capacity)) errors.push({ code: 'SLOT', slot });
    else if (used.has(slot)) errors.push({ code: 'DUPLICATE_SLOT', slot });
    else used.add(slot);
    const item = id === undefined ? undefined : source.itemsById.get(id);
    if (!item) { errors.push({ code: 'UNKNOWN_ITEM', slot, itemId: id }); continue; }
    if (p.kind !== item.itemKind || !kinds.includes(p.kind as PlannerItemKind)) errors.push({ code: 'ITEM_KIND', slot, itemId: id });
    if (item.itemKind === 'Tablet') {
      if (source.hasTabletRule && !source.hasTabletRule(id!)) errors.push({ code: 'MISSING_TABLET_RULE', slot, itemId: id });
      if (typeof p.rotation !== 'string' || !ROTATIONS.includes(p.rotation as PlannerRotation)) errors.push({ code: 'ROTATION', slot, itemId: id });
      else if (!source.canRotate(id!) && p.rotation !== 'UP') errors.push({ code: 'NON_ROTATABLE', slot, itemId: id });
    } else if ('rotation' in p) errors.push({ code: 'NON_TABLET_ROTATION', slot, itemId: id });
    if (Object.keys(p).some((key) => !['slot', 'itemId', 'kind', 'rotation'].includes(key))) errors.push({ code: 'EXTRA_PLACEMENT_FIELD', slot, itemId: id });
  }
  if (Object.keys(o).some((key) => !['schemaVersion', 'gameVersion', 'capacity', 'weapon', 'placements'].includes(key))) errors.push({ code: 'EXTRA_LAYOUT_FIELD' });
  return { valid: errors.length === 0, errors };
}

export function plannerStateToLayout(state: PlannerLayout): BagPlannerLayoutV1 {
  return {
    schemaVersion: 1, gameVersion: '1.0.33', capacity: state.capacity, weapon: state.weapon,
    placements: state.slots.flatMap((p, slot) => p ? [{
      slot, itemId: p.itemId, kind: p.itemKind,
      ...(p.itemKind === 'Tablet' ? { rotation: p.rotation ?? 'UP' as PlannerRotation } : {}),
    }] : []),
  };
}

export function layoutToPlannerState(layout: BagPlannerLayoutV1, source: LayoutCatalog = catalog): PlannerLayout {
  const check = validateBagPlannerLayout(layout, source);
  if (!check.valid) throw new Error('Invalid Planner layout: ' + check.errors.map((x) => x.code).join(', '));
  const slots: (PlannerPlacement | null)[] = Array(layout.capacity).fill(null);
  for (const p of layout.placements) slots[p.slot] = {
    placementId: globalThis.crypto?.randomUUID?.() ?? `placement-${p.slot}-${Math.random().toString(36).slice(2)}`,
    itemId: p.itemId, itemKind: p.kind, rotation: p.kind === 'Tablet' ? p.rotation! : null, baseLevel: 1,
  };
  return { schemaVersion: 1, gameVersion: '1.0.33', capacity: layout.capacity, weapon: layout.weapon, slots };
}

export function encodeBagPlannerLayout(layout: BagPlannerLayoutV1): string {
  const validation = validateBagPlannerLayout(layout);
  if (!validation.valid) throw new Error('Invalid Planner layout: ' + validation.errors.map((x) => x.code).join(', '));
  const placements = [...layout.placements].sort((a, b) => a.slot - b.slot).map((p) =>
    p.kind === 'Tablet' ? [p.slot, p.itemId, kindCodes[kinds.indexOf(p.kind)], ROTATIONS.indexOf(p.rotation!)] : [p.slot, p.itemId, kindCodes[kinds.indexOf(p.kind)]]);
  return btoa(JSON.stringify({ v: 1, g: layout.gameVersion, c: layout.capacity, w: layout.weapon, p: placements })).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

export function decodeBagPlannerLayout(payload: string): { valid: true; layout: BagPlannerLayoutV1; errors: [] } | { valid: false; errors: LayoutError[] } {
  try {
    if (!payload || payload.length > 6000 || !/^[A-Za-z0-9_-]+$/.test(payload) || payload.length % 4 === 1) return { valid: false, errors: [{ code: 'MALFORMED' }] };
    const json = atob(payload.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - payload.length % 4) % 4));
    const o = JSON.parse(json);
    if (!o || typeof o !== 'object' || Array.isArray(o) || Object.keys(o).some((k) => !['v', 'g', 'c', 'w', 'p'].includes(k)) || !Array.isArray(o.p)) return { valid: false, errors: [{ code: 'MALFORMED' }] };
    const placements = o.p.map((p: unknown) => {
      if (!Array.isArray(p) || (p.length !== 3 && p.length !== 4) || (p.length === 4 && (!Number.isInteger(p[3]) || p[3] < 0 || p[3] > 3))) return null;
      const kind = kinds[kindCodes.indexOf(p[2])];
      return { slot: p[0], itemId: p[1], kind, ...(p.length === 4 ? { rotation: ROTATIONS[p[3]] ?? '__INVALID__' } : {}) };
    });
    const layout = { schemaVersion: o.v, gameVersion: o.g, capacity: o.c, weapon: o.w, placements };
    const validation = validateBagPlannerLayout(layout);
    return validation.valid ? { valid: true, layout: layout as BagPlannerLayoutV1, errors: [] } : { valid: false, errors: validation.errors };
  } catch {
    return { valid: false, errors: [{ code: 'MALFORMED' }] };
  }
}

export const PLANNER_PATH = '/games/sephiria/tools/bag-planner';
export function getBagPlannerUrl(layout: BagPlannerLayoutV1, options: { source?: string; origin?: string } = {}): string {
  const params = new URLSearchParams({ layout: encodeBagPlannerLayout(layout) });
  if (options.source) params.set('source', options.source);
  return (options.origin ?? '') + PLANNER_PATH + '?' + params.toString();
}

export function emptyBagPlannerLayout(): BagPlannerLayoutV1 {
  return { schemaVersion: 1, gameVersion: '1.0.33', capacity: 42, weapon: defaultPlannerWeapon, placements: [] };
}
