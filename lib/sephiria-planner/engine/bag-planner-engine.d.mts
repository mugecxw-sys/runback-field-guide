import type { PlannerArtifactRule, PlannerCatalogItem, PlannerComboRule, PlannerTabletRule } from "../data.js";
import type { PlannerLayout, PlannerPlacement } from "../planner-state.js";
import type { PlannerComboState } from "./combo-engine.mjs";

export type PlannerConstraintCheck = {
  type: string;
  status: string;
  expectedWeapon?: string;
};

export type PlannerTabletContributor = {
  tabletId: number;
  tabletName: string;
  originSlot: number;
  rotation: string;
  effectIndex: number;
  effectType: string;
  value: number | null;
};

export type PlannerCellEffect = {
  slot: number;
  row: number;
  column: number;
  targetKind: string;
  appliesToArtifact: boolean | null;
  levelDelta: number;
  disabled: boolean;
  ignoreConstraints: boolean;
  contributors: PlannerTabletContributor[];
  ignoredContributors: PlannerTabletContributor[];
  projected: { levelDelta: number; disabled: boolean; ignoreConstraints: boolean };
};

export type PlannerArtifactState = {
  artifactId: number;
  artifactName: string;
  itemId: number;
  placementId: string;
  slot: number;
  baseLevel: number;
  tabletLevelDelta: number;
  rawLevel: number;
  maxLevel: number;
  effectiveLevel: number;
  disabled: boolean;
  ignoreConstraints: boolean;
  contributors: PlannerTabletContributor[];
  finalState: string;
  effectiveActive: boolean | null;
  finalConstraintStatus: string;
  constraints: PlannerConstraintCheck[];
  failedConstraints: PlannerConstraintCheck[];
  ignoredConstraints: PlannerConstraintCheck[];
  reason: string | null;
};

export type PlannerTabletState = {
  id: number;
  itemId: number;
  name: string;
  originSlot: number;
  placementId: string;
  rotation: { requested: string; effective: string; canRotate: boolean };
  isActive: boolean | null;
  activationConditionResult: string;
  conditionCells: number[];
  effectCells: number[];
  effectCellsApplied: number;
  finalState: string;
  reason: string | null;
};

export type PlannerCell = {
  index: number;
  row: number;
  column: number;
  status: "ACTIVE" | "LOCKED";
  placement: PlannerPlacement | null;
  effect: PlannerCellEffect;
  preview: { condition: boolean; effect: boolean; tabletState: string | null };
};

export type BagPlannerResult = {
  capacity: number;
  columns: 6;
  weapon: string;
  cells: PlannerCell[];
  tabletStates: PlannerTabletState[];
  artifactStates: PlannerArtifactState[];
  cellEffects: PlannerCellEffect[];
  previewTablet: (PlannerTabletState & { conditionCandidates?: unknown[] }) | null;
  summary: {
    usedSlots: number;
    artifacts: number;
    activeArtifacts: number;
    inactiveArtifacts: number;
    unresolvedArtifacts: number;
    tablets: number;
    activeTablets: number;
    inactiveTablets: number;
    combos: PlannerComboState[];
  };
};

export function evaluateBagLayout(options: {
  capacity: number;
  weapon: string;
  slots: (PlannerPlacement | null)[];
  itemsById: Map<number, PlannerCatalogItem>;
  tabletRulesById: Map<number, PlannerTabletRule>;
  artifactRulesById: Map<number, PlannerArtifactRule>;
  comboRules: PlannerComboRule[];
  previewTablet?: { tabletId: number; originSlot: number; rotation?: string } | null;
  previewTabletPlacementId?: string | null;
}): BagPlannerResult;
