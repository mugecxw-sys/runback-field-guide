import itemDataset from '@/public/data/sephiria-items-1.0.33.json';
import artifactRulesDataset from './data/sephiria-artifact-constraints-public-1.0.33.json';
import tabletRulesDataset from './data/sephiria-tablet-rules-public-1.0.33.json';
import comboRulesDataset from './data/sephiria-combos-public-1.0.33.json';
import { sephiriaWeapons } from '@/lib/sephiria-wiki-data';

export type PlannerItemKind = 'Artifact' | 'Tablet' | 'Consumable' | 'Item';
export type PlannerWeapon = 'SWORD_AND_SHIELD' | 'GREAT_SWORD' | 'DAGGER' | 'CROSSBOW' | 'KATANA' | 'STAFF';
export type PlannerRotation = 'UP' | 'LEFT' | 'DOWN' | 'RIGHT';

export type PlannerCatalogItem = {
  id: number;
  slug: string;
  displayName: string;
  itemKind: PlannerItemKind;
  rarity: string;
  isBondItem: boolean;
  bondLabel: string | null;
  categories: string[];
  image: { src: string; width: number; height: number };
  displayDescription?: string | null;
  displayEffectLines?: string[];
};

export type PlannerConstraint = {
  type: string;
  scope: string;
  parameters: Record<string, unknown>;
  ignoreableByTablet: boolean;
  evaluationMode: string;
};

export type PlannerArtifactRule = {
  id: number;
  name: string;
  image: string;
  maxLevel: number;
  constraints: PlannerConstraint[];
};

export type PlannerTabletRule = {
  id: number;
  name: string;
  rarity: string;
  image: string;
  rotation: { canRotate: boolean; defaultDirection: PlannerRotation };
  activation: { type: string; checks: unknown[] };
  effects: { effectType: string; value: number | null; pattern: Record<string, unknown> }[];
};

export type PlannerComboRule = {
  id: string;
  name: string;
  thresholds: { count: number; effect: string }[];
};

type ItemDataset = { version: string; categories: string[]; items: PlannerCatalogItem[] };
type RuleDataset<T> = { gameVersion: string; ruleRecords: T[] };
type ComboDataset = { gameVersion: string; rules: PlannerComboRule[] };

const items = (itemDataset as ItemDataset).items;
const artifactRules = (artifactRulesDataset as RuleDataset<PlannerArtifactRule>).ruleRecords;
const tabletRules = (tabletRulesDataset as RuleDataset<PlannerTabletRule>).ruleRecords;
const comboRules = (comboRulesDataset as ComboDataset).rules;

const weaponEnumByRecordId: Record<string, PlannerWeapon> = {
  'WPN-01': 'SWORD_AND_SHIELD',
  'WPN-02': 'GREAT_SWORD',
  'WPN-03': 'CROSSBOW',
  'WPN-04': 'DAGGER',
  'WPN-05': 'KATANA',
  'WPN-06': 'STAFF',
};

export const plannerItems = items;
export const plannerCategories = (itemDataset as ItemDataset).categories;
export const plannerItemsById = new Map(items.map((item) => [item.id, item]));
export const plannerArtifactRules = artifactRules;
export const plannerArtifactRulesById = new Map(artifactRules.map((rule) => [rule.id, rule]));
export const plannerTabletRules = tabletRules;
export const plannerTabletRulesById = new Map(tabletRules.map((rule) => [rule.id, rule]));
export const plannerComboRules = comboRules;

export const plannerWeapons = sephiriaWeapons.map((weapon) => {
  const enumValue = weaponEnumByRecordId[weapon.id];
  if (!enumValue) throw new Error(`Unsupported Sephiria weapon entry: ${weapon.id}`);
  return { id: weapon.id, name: weapon.name, aliases: weapon.aliases, value: enumValue };
});

export const defaultPlannerWeapon: PlannerWeapon = plannerWeapons[0]?.value ?? 'SWORD_AND_SHIELD';
export const rarityOrder = ['Common', 'Advanced', 'Rare', 'Legendary', 'Eternal'];

if (items.length !== 419 || artifactRules.length !== 297 || tabletRules.length !== 66 || comboRules.length !== 20 || plannerWeapons.length !== 6) {
  throw new Error('Sephiria Planner public data gate failed.');
}
