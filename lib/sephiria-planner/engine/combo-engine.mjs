function findById(itemsById, id) {
  if (itemsById instanceof Map) return itemsById.get(id) ?? itemsById.get(String(id));
  if (Array.isArray(itemsById)) return itemsById.find((item) => item.id === id);
  if (itemsById && typeof itemsById === "object") return itemsById[id] ?? itemsById[String(id)];
  return undefined;
}

/**
 * Counts the categories on each placed Artifact instance. The 1.0.33 client
 * scans placed charms for combo membership without checking their Artifact
 * active state, so inactive Artifacts still contribute. Tablets, Consumables,
 * and Other items never contribute.
 */
export function evaluateCombos({ layout, itemsById, comboRules }) {
  if (!layout || !Number.isInteger(layout.capacity) || !Array.isArray(layout.slots)) {
    throw new TypeError("a Planner layout with capacity and slots is required");
  }
  if (layout.slots.length < layout.capacity) throw new TypeError("layout slots must include every active bag slot");
  if (!itemsById || !Array.isArray(comboRules)) throw new TypeError("item data and Combo rules are required");

  const counts = new Map();
  for (let slot = 0; slot < layout.capacity; slot += 1) {
    const placement = layout.slots[slot];
    if (!placement) continue;
    const item = findById(itemsById, placement.itemId);
    if (!item || (placement.itemKind ?? item.itemKind) !== "Artifact") continue;
    for (const category of new Set(item.categories ?? [])) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }

  return comboRules
    .map((rule) => {
      const count = counts.get(rule.name) ?? 0;
      if (count === 0) return null;
      const thresholds = [...rule.thresholds].sort((a, b) => a.count - b.count);
      const reached = thresholds.filter((threshold) => threshold.count <= count);
      const active = reached.at(-1) ?? null;
      const next = thresholds.find((threshold) => threshold.count > count) ?? null;
      return {
        comboId: rule.id,
        name: rule.name,
        count,
        isActive: active !== null,
        activeThreshold: active?.count ?? null,
        activeEffect: active?.effect ?? null,
        activeTiers: reached,
        thresholds,
        nextThreshold: next?.count ?? null,
        nextEffect: next?.effect ?? null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => Number(b.isActive) - Number(a.isActive) || b.count - a.count || a.name.localeCompare(b.name));
}
