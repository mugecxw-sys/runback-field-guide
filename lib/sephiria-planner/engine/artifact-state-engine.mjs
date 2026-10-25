/** Pure composition of an Artifact rule, Tablet aggregate state, and level data. */
import { evaluateArtifactConstraints } from "./artifact-constraint-engine.mjs";
import { resolveGridSlot } from "./tablet-rule-engine.mjs";

function assertInteger(value, label) {
  if (!Number.isInteger(value)) throw new TypeError(`${label} must be an integer`);
}

/**
 * Inputs are caller supplied layout facts. tabletEffectState is the single-cell
 * result from aggregateTabletEffects; this function never resolves Tablet rules.
 */
export function evaluateArtifactState({
  artifactRule,
  slot,
  capacity,
  weapon,
  layout,
  tabletEffectState = {},
  runtimeContext = {},
  baseLevel = 1,
}) {
  if (!artifactRule || typeof artifactRule !== "object") throw new TypeError("artifactRule must be a public-safe rule record");
  assertInteger(slot, "slot");
  assertInteger(capacity, "capacity");
  assertInteger(baseLevel, "baseLevel");

  const levelDelta = Number.isInteger(tabletEffectState.levelDelta) ? tabletEffectState.levelDelta : 0;
  const rawLevel = baseLevel + levelDelta;
  const maxLevel = artifactRule.maxLevel;
  if (!Number.isInteger(maxLevel) || maxLevel < 1) throw new TypeError("artifactRule.maxLevel must be a positive integer");
  const effectiveLevel = rawLevel < 1 ? rawLevel : Math.min(rawLevel, maxLevel);
  const disabled = Boolean(tabletEffectState.disabled);
  const ignoreConstraints = Boolean(tabletEffectState.ignoreConstraints);
  const columns = artifactRule.constraints?.[0]?.parameters?.columns ?? 6;
  const grid = resolveGridSlot(slot, capacity, columns);
  const base = {
    artifactId: artifactRule.id,
    artifactName: artifactRule.name,
    slot,
    capacity,
    baseLevel,
    tabletLevelDelta: levelDelta,
    rawLevel,
    maxLevel,
    effectiveLevel,
    disabled,
    ignoreConstraints,
    contributors: tabletEffectState.contributors ?? [],
    runtimeConditions: artifactRule.runtimeConditions ?? [],
    runtimeDependent: (artifactRule.runtimeConditions ?? []).length > 0,
    placement: { status: grid.status === "ACTIVE" ? "PASS" : "FAIL", gridStatus: grid.status, slot },
  };

  // Charm_Basic.RefreshCharm returns inactive for disable before checking level;
  // below-level state then returns before criteria/weapon activation.
  if (grid.status !== "ACTIVE") {
    return {
      ...base,
      finalState: "INACTIVE_BY_PLACEMENT",
      effectiveActive: false,
      staticValid: false,
      finalConstraintStatus: "NOT_EVALUATED",
      constraints: [],
      passedConstraints: [],
      failedConstraints: [],
      ignoredConstraints: [],
      failureReasons: [{ code: `PLACEMENT_${grid.status}`, slot }],
    };
  }
  if (disabled) {
    return {
      ...base,
      finalState: "INACTIVE_BY_TABLET_DISABLE",
      effectiveActive: false,
      staticValid: null,
      finalConstraintStatus: "NOT_EVALUATED",
      constraints: [],
      passedConstraints: [],
      failedConstraints: [],
      ignoredConstraints: [],
      failureReasons: [{ code: "TABLET_DISABLE", reason: "Artifact disabled by Tablet effect." }],
    };
  }
  if (rawLevel < 1) {
    return {
      ...base,
      finalState: "INACTIVE_BY_LEVEL",
      effectiveActive: false,
      staticValid: null,
      finalConstraintStatus: "NOT_EVALUATED",
      constraints: [],
      passedConstraints: [],
      failedConstraints: [],
      ignoredConstraints: [],
      failureReasons: [{ code: "LEVEL_BELOW_ONE", rawLevel }],
    };
  }

  const constraintResult = evaluateArtifactConstraints({
    artifactRule,
    slot,
    capacity,
    weapon,
    layout,
    tabletEffectState: { ignoreConstraints },
  });
  const runtimeConditions = artifactRule.runtimeConditions ?? [];
  const missingRuntime = runtimeConditions.filter(condition => runtimeContext[condition.key] === undefined);
  const runtimeFailed = runtimeConditions.filter(condition => runtimeContext[condition.key] !== undefined && runtimeContext[condition.key] !== condition.expected);
  let finalState = "ACTIVE";
  if (constraintResult.finalConstraintStatus === "FAIL") finalState = "INACTIVE_BY_CONSTRAINT";
  else if (constraintResult.finalConstraintStatus === "INDETERMINATE") finalState = "CONTEXT_REQUIRED";
  else if (runtimeFailed.length) finalState = "INACTIVE_BY_RUNTIME_CONDITION";
  else if (missingRuntime.length) finalState = "RUNTIME_DEPENDENT";

  return {
    ...base,
    ...constraintResult,
    runtimeConditions,
    runtimeDependent: runtimeConditions.length > 0,
    unresolvedRuntimeConditions: missingRuntime,
    failedRuntimeConditions: runtimeFailed,
    finalState,
    effectiveActive: finalState === "ACTIVE" ? true : finalState === "RUNTIME_DEPENDENT" || finalState === "CONTEXT_REQUIRED" ? null : false,
    tabletLevelDelta: levelDelta,
    rawLevel,
    maxLevel,
    effectiveLevel,
    disabled,
    ignoreConstraints,
    contributors: tabletEffectState.contributors ?? [],
    failureReasons: [
      ...constraintResult.failureReasons,
      ...runtimeFailed.map(condition => ({ code: "RUNTIME_CONDITION_FAILED", condition })),
      ...missingRuntime.map(condition => ({ code: "RUNTIME_CONTEXT_REQUIRED", condition })),
    ],
  };
}
