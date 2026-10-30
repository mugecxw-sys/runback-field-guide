import type { SephiriaBuildDefinition } from '@/lib/sephiria-build-navigation';
import itemsDatabase from '@/public/data/sephiria-items-1.0.33.json';
import artifactRules from '@/lib/sephiria-planner/data/sephiria-artifact-constraints-public-1.0.33.json';
import { itemImage, upgradeImage, type SephiriaSwordShieldBuildPageData } from './sword-and-shield-pages';

// Keep the reviewed local route until the author approves a URL change.
const href = '/games/sephiria/builds/sword-and-shield/shock-difficulty-60-build';
const mediaRoot = '/videos/games/sephiria/builds/sword-and-shield/shock-difficulty-60-build';
export const shockRunMedia = {
  video: `${mediaRoot}/gameplay-demo.mp4`,
  poster: `${mediaRoot}/poster.webp`,
  layout: { src: `${mediaRoot}/build-layout.webp`, width: 1332, height: 976 },
  dps: { src: `${mediaRoot}/dps.webp`, width: 1542, height: 1005 },
};

export const shockTalents = [
  { name: 'Wrath', points: 5 },
  { name: 'Wisdom', points: 5 },
  { name: 'Willpower', points: 20 },
  { name: 'Ingenuity', points: 20 },
];
export const shockWeaponRoute = [
  { name: 'Sword & Shield', image: upgradeImage('WPN-01') },
  { name: 'Conductor', image: upgradeImage('upgrade-1016') },
  { name: 'Blinding Silence', image: upgradeImage('WUP-02') },
];
export const electricCostumeOptions = [
  { name: 'Skeleton', image: upgradeImage('CST-06'), note: 'Other costume option' },
  { name: 'Frog', image: upgradeImage('CST-04'), note: 'Used in this Difficulty 60 clear' },
  { name: 'Deer', image: upgradeImage('CST-13'), note: 'Other costume option' },
];

function artifact(id: number, role: string) {
  const item = itemsDatabase.items.find((entry) => Number(entry.id) === id);
  const rule = artifactRules.ruleRecords.find((entry) => entry.id === id);
  if (!item || item.itemKind !== 'Artifact' || !rule) throw new Error(`Missing Electric build Artifact ${id}`);
  return { name: item.displayName, image: itemImage(id), maxLevel: rule.maxLevel, categories: item.categories, role };
}
export const shockCoreArtifacts = [
  artifact(1167, 'Primarily a trigger in this build. It works with Thunder’s Earring to keep the Electrocution engine going; its own damage is not the main DPS source.'),
  artifact(1239, 'Applies Electrocution to nearby enemies. Blinding Silence lets Special Attack trigger it immediately.'),
  { ...artifact(1013, 'Repeated close-range hits continuously help trigger Electrocution. Its sustained triggering value is more important here than strengthening the Compass’s own damage.'), maxLevel: 4 },
  { ...artifact(1182, 'Extends Debuff duration and amplifies this sustained Electrocution setup. Stack additional copies to keep increasing the damage.'), maxLevel: 4 },
];
export const shockSupportingArtifacts = [
  artifact(1170, 'Adds Lightning-element Critical Chance, including Companion damage, with a Cold Damage penalty.'),
  artifact(1183, 'Adds damage for each debuff on the target, supporting repeated hits against enemies kept under Electrocution.'),
];
export const shockStartingArtifacts = [
  { name: shockCoreArtifacts[0].name, image: itemImage(1167) },
  { name: itemsDatabase.items.find((entry) => Number(entry.id) === 3011)!.displayName, image: itemImage(3011) },
];
export const shockAvoidItem = { name: 'Plasma Helmet', image: itemImage(1294) };
export const shockComboTargets = [
  { name: 'Magitech', count: 10 },
  { name: 'Precision', count: 10 },
  { name: 'Curse', count: 4 },
];

export const electricGameplayNotes = [
  { title: 'Early Game', detail: 'Damage is modest before the pieces come together. Use Electro Chakram at close range for repeated triggers while building toward the core Artifacts and Blinding Silence.' },
  { title: 'Stack Oink Shaman’s Necklace', detail: 'More copies are better for this build. Additional copies keep increasing Electrocution damage.', multipliers: ['1 copy = 2× Electrocution damage', '2 copies = 3× Electrocution damage', '3 copies = 4× Electrocution damage'] },
  { title: 'Boss Strategy', detail: 'Once the build is complete, keep the shield up, stay close to the boss, and use Special Attack to continuously trigger Electrocution. This is a low-input shield build without a complicated attack rotation.' },
];

export const electricDifficulty60Build: SephiriaBuildDefinition = {
  title: 'Sword & Shield Electric Build',
  href,
  weaponRoute: shockWeaponRoute.map((step) => step.name),
  finalBuild: shockComboTargets.map((combo) => `${combo.name} ${combo.count}/${combo.count}`),
  comboLabel: 'Core Combo Targets',
  style: 'Low-input shield build · Difficulty 60 clear',
  coreArtifactIds: [1167, 1239, 1013, 1182, 1170, 1183],
  fieldNotes: electricGameplayNotes,
};

export const shockDifficulty60Guide: SephiriaSwordShieldBuildPageData = {
  buildId: 'electric-difficulty-60',
  hideBuildId: true,
  href,
  seoTitle: 'Sephiria Sword & Shield Electric Build – Difficulty 60 Clear | RUNBACK',
  h1: 'Sephiria Sword & Shield Electric Build',
  subtitle: 'Difficulty 60 Clear · Low-Input Shield Build',
  description: 'A tested Sephiria Sword & Shield Electric build with Blinding Silence for a Difficulty 60 clear. Talents, core Artifacts, and sustained Electrocution gameplay.',
  intro: 'Keep the shield up, stay close to the boss, and use Special Attack to continuously trigger Electrocution. Thunderstorm Tracking Compass, Thunder’s Earring, Electro Chakram, and Oink Shaman’s Necklace form the core engine.',
  introDetail: 'I cleared Difficulty 60 with Frog. Once the build was complete, it reached about 20,000 DPS in my run.',
  mainDamage: 'Continuous Electrocution',
  coreEngine: 'Continuous Electrocution',
  buildStyle: 'Low-input shield build',
  weaponName: 'Sword & Shield',
  costumeName: 'Frog',
  costumeImage: upgradeImage('CST-04'),
  comboLabel: 'Core Combo Targets',
  weaponRoute: shockWeaponRoute.map((step) => ({ label: step.name, image: step.image })),
  setup: [
    { title: 'Talent Setup', lines: [...shockTalents.map((talent) => `${talent.name} ${talent.points}`), 'Total: 50 / 50'] },
    { title: 'Starting Selections', lines: [], selections: shockStartingArtifacts },
    { title: 'Costume Options', lines: [], selections: electricCostumeOptions },
  ],
  coreItems: [],
  damageHeading: 'Electrocution Engine',
  damageSteps: [
    { title: 'Compass + Thunder’s Earring', detail: 'Thunderstorm Tracking Compass and Thunder’s Earring work together as triggers. The Compass primarily supports the engine rather than supplying the main damage.' },
    { title: 'Repeated close-range applications', detail: 'Electro Chakram continuously helps trigger Electrocution while you stay near the enemy.' },
    { title: 'Longer Debuff duration', detail: 'Oink Shaman’s Necklace extends Debuff duration and amplifies the build’s sustained damage. Additional copies keep improving the engine.' },
    { title: 'Blinding Silence + Special Attack', detail: 'Special Attack adds immediate Thunder’s Earring activations. Keep applying and triggering Electrocution instead of relying on a single burst.' },
  ],
  videoPath: shockRunMedia.video,
  videoPoster: shockRunMedia.poster,
  relatedGuides: [
    { href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build', title: 'Grip of Fear Cleave Build' },
    { href: '/games/sephiria/wiki/weapon-upgrades', title: 'Weapon Upgrade Tree' },
    { href: '/games/sephiria/wiki/items', title: 'Sephiria Items Database' },
  ],
};
