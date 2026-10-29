import { evaluateBagLayout } from '@/lib/sephiria-planner/engine/bag-planner-engine.mjs';
import { plannerArtifactRulesById, plannerComboRules, plannerItemsById, plannerTabletRulesById } from '@/lib/sephiria-planner/data';
import { layoutToPlannerState } from '@/lib/sephiria-planner/bag-planner-layout';
import type { SephiriaBuildDefinition } from '@/lib/sephiria-build-navigation';
import type { BuildLayoutData } from '@/components/game-wiki/sephiria-build-layout';

export function buildLayoutForDisplay(build: SephiriaBuildDefinition): BuildLayoutData {
  if (!build.plannerLayout) throw new Error('Build has no complete Planner layout');
  const input = build.plannerLayout;
  // Article data can be evaluated during Worker module initialization, where
  // random values are forbidden. Display calculations only need unique slot IDs.
  const state = layoutToPlannerState(input, undefined, (slot) => `build-slot-${slot}`);
  const result = evaluateBagLayout({
    capacity: input.capacity, weapon: input.weapon, slots: state.slots,
    itemsById: plannerItemsById, tabletRulesById: plannerTabletRulesById,
    artifactRulesById: plannerArtifactRulesById, comboRules: plannerComboRules,
  });
  const cells: BuildLayoutData['cells'] = [...input.placements].sort((a, b) => a.slot - b.slot).map((p) => {
    const item = plannerItemsById.get(p.itemId)!;
    if (p.kind === 'Tablet') {
      const rule = plannerTabletRulesById.get(p.itemId)!;
      return {
        slot: p.slot, itemId: p.itemId, name: item.displayName, kind: 'Tablet',
        image: item.image, rotation: p.rotation,
        patterns: rule.effects.map((effect) => `${(typeof effect.pattern.keyword === 'string' ? effect.pattern.keyword : 'Range')} ${effect.value ?? ''}`),
        affectedArtifacts: result.cellEffects.flatMap((cell) => {
          const target = state.slots[cell.slot];
          const bonus = cell.contributors.filter((c) => c.originSlot === p.slot && c.effectType === 'ADD_ARTIFACT_LEVEL').reduce((n, c) => n + Number(c.value), 0);
          const name = target && plannerItemsById.get(target.itemId)?.displayName;
          return target?.itemKind === 'Artifact' && name && bonus ? [{ slot: cell.slot, name, bonus }] : [];
        }),
      };
    }
    if (p.kind !== 'Artifact') return { slot: p.slot, itemId: p.itemId, name: item.displayName, kind: p.kind, image: item.image };
    const artifact = result.artifactStates.find((a) => a.slot === p.slot);
    return {
      slot: p.slot, itemId: p.itemId, name: item.displayName, kind: 'Artifact',
      image: item.image, categories: item.categories,
      effectiveLevel: artifact?.effectiveLevel, rawLevel: artifact?.rawLevel,
      tabletBonus: artifact?.tabletLevelDelta,
      contributors: artifact?.contributors.filter((c) => c.effectType === 'ADD_ARTIFACT_LEVEL').map((c) => ({ name: c.tabletName, value: Number(c.value) })),
      requirement: artifact?.reason ?? undefined,
    };
  });
  const comboNames = build.finalBuild.map((text) => text.replace(/\s+\d+$/, ''));
  return {
    buildId: build.href.split('/').pop()!, label: build.title, columns: 6,
    activeSlots: input.capacity, artifactCount: result.summary.artifacts, tabletCount: result.summary.tablets,
    inactiveSlotLabel: build.inactiveSlotLabel,
    comboCounts: comboNames.flatMap((name) => {
      const combo = result.summary.combos.find((entry) => entry.name === name);
      return combo ? [{ name, count: combo.count }] : [];
    }),
    coreTargets: (build.coreArtifactIds ?? []).flatMap((id) => {
      const item = plannerItemsById.get(id);
      const artifact = result.artifactStates.find((a) => a.itemId === id);
      return item && artifact ? [{ name: item.displayName, effectiveLevel: artifact.effectiveLevel }] : [];
    }),
    cells,
  };
}
