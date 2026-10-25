import type { PlannerCatalogItem, PlannerComboRule } from "../data.js";
import type { PlannerLayout } from "../planner-state.js";

export type PlannerComboState = {
  comboId: string;
  name: string;
  count: number;
  isActive: boolean;
  activeThreshold: number | null;
  activeEffect: string | null;
  activeTiers: PlannerComboRule["thresholds"];
  thresholds: PlannerComboRule["thresholds"];
  nextThreshold: number | null;
  nextEffect: string | null;
};

export function evaluateCombos(options: {
  layout: Pick<PlannerLayout, "capacity" | "slots">;
  itemsById: Map<number, PlannerCatalogItem> | Record<number, PlannerCatalogItem> | PlannerCatalogItem[];
  comboRules: PlannerComboRule[];
}): PlannerComboState[];
