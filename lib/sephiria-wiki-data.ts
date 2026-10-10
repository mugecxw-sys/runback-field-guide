import { sephiriaArtifactFacts } from './sephiria-artifact-facts';

export type SephiriaPatchNote = { version: string; text: string };

export type SephiriaRecord = {
  id: string;
  slug: string;
  name: string;
  category: string;
  aliases: string[];
  tags: string[];
  effectCurrent: string | null;
  rarity: string | null;
  weapon: string | null;
  weaponRole?: string | null;
  mechanicCurrent?: string | null;
  unlockCurrent?: string | null;
  upgradeIds?: string[];
  artifactCategories?: string[];
  artifactEffectLabel?: 'Selected effects' | 'Base effect';
  currentValues?: { label: string; values: string[] }[];
  effectsByLevel?: string[];
  patchHistory: SephiriaPatchNote[];
  relatedIds: string[];
};

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const record = (
  id: string,
  name: string,
  category: string,
  extra: Partial<SephiriaRecord> = {},
): SephiriaRecord => ({
  id,
  slug: slug(name),
  name,
  category,
  aliases: [],
  tags: [category.toLowerCase()],
  effectCurrent: null,
  rarity: null,
  weapon: null,
  patchHistory: [],
  relatedIds: [],
  ...extra,
});

export const sephiriaWeapons = [
  record('WPN-01', 'Sword & Shield', 'Weapon', {
    tags: ['weapon', 'sword', 'shield', 'block', 'cleave'],
    weaponRole: 'Melee guarding and Cleave.',
    mechanicCurrent: 'Use Block to guard attacks and Cleave for your Special Attack.',
    upgradeIds: ['WUP-02', 'WUP-03', 'WUP-04'],
  }),
  record('WPN-02', 'Greatsword', 'Weapon', {
    aliases: ['Great Sword'], tags: ['weapon', 'greatsword', 'whirlwind'],
    weaponRole: 'Melee attacks and charged Whirlwind.',
    mechanicCurrent: 'Whirlwind is a charged Special Attack. Upgrades can change its charge speed or replace the Special Attack.',
    upgradeIds: ['WUP-05', 'WUP-12', 'WUP-13'],
  }),
  record('WPN-03', 'Crossbow', 'Weapon', {
    tags: ['weapon', 'ranged', 'reload', 'ammunition'],
    weaponRole: 'Ranged attacks with ammunition and Reload.',
    mechanicCurrent: 'The Crossbow uses ammunition and requires Reload. Its upgrade branches can modify ammunition or Special Attacks such as Ammo Compression.',
    unlockCurrent: 'Unlock through a Destiny Inscription quest.',
    upgradeIds: ['WUP-06', 'WUP-17'],
  }),
  record('WPN-04', 'Dagger', 'Weapon', {
    tags: ['weapon', 'dagger', 'dash attack', 'parry', 'fury'],
    weaponRole: 'Melee Dash Attack, Parry and Fury.',
    mechanicCurrent: 'Dash Attack can chain into Special Attack: Parry or Special Attack: Fury.',
    upgradeIds: ['WUP-18'],
  }),
  record('WPN-05', 'Blade', 'Weapon', {
    aliases: ['Katana'], tags: ['weapon', 'blade', 'sheath', 'unsheath'],
    weaponRole: 'Melee attacks alternating between sheathed and unsheathed states.',
    mechanicCurrent: 'Alternate between Sheath and Unsheath. Both actions have an invincibility window; upgrades can replace Sheath with another Special Attack.',
    unlockCurrent: 'Unlock through Destiny Inscription.',
    upgradeIds: ['WUP-07'],
  }),
  record('WPN-06', 'Staff', 'Weapon', {
    tags: ['weapon', 'staff'],
    unlockCurrent: 'Unlock through Destiny Inscription.',
    upgradeIds: [],
  }),
];

export const sephiriaWeaponUpgrades = [
  record('WUP-01', 'Glacial Blade', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'frost relic'],
    patchHistory: [{ version: '1.0.19', text: 'Scabbard of Exorcism gained a smaller projectile while retaining 50% faster charging. This bonus multiplies with Frost Relic charge speed.' }],
  }),
  record('WUP-02', 'Blinding Silence', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'lightning', 'cleave'],
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: "Lightning Damage +5. Thunder's Earring gains 1 attack and 100 damage.",
    mechanicCurrent: "Special Attack: Cleave immediately triggers Thunder's Earring.",
  }),
  record('WUP-03', 'Garden of Needle Ice', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'cold', 'ice vine'],
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Cold Damage +5.',
    mechanicCurrent: 'Activated Ice Vine orbits you and has no cooldown.',
  }),
  record('WUP-04', 'Prismatic Magic Wand', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'magic missile', 'elemental', 'chaos'],
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Weapon Attack fires Magic Missiles.',
    mechanicCurrent: 'Missiles use your highest-damage element. A tie between two or more highest elements produces Chaos Damage.',
    patchHistory: [{ version: '1.0.31', text: 'Replaced the Magic Wand upgrade.' }],
  }),
  record('WUP-05', 'Bloodletting Gearblade', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'bloodletting', 'hp'],
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Bloodletting fixes Max HP and converts excess HP at activation into damage. Converted current HP returns when the effect ends.',
    mechanicCurrent: 'Special Attack: Bloodletting replaces Reassemble.',
  }),
  record('WUP-06', 'M-9200', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'ammo compression', 'enhanced round'],
    weapon: 'Crossbow', relatedIds: ['WPN-03'],
    effectCurrent: 'Enhanced Rounds deal 20% more damage.',
    mechanicCurrent: 'Ammo Compression with at least 10 rounds creates a larger Enhanced Round.',
  }),
  record('WUP-07', "Cerulean Cloud Sword 'Arges'", 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'lightning', 'cloud slash', 'residual lightning'],
    weapon: 'Blade', relatedIds: ['WPN-05'],
    effectCurrent: 'Weapon Attack damage is reduced by 20% and scales with Lightning Damage. Cloud Slash costs 5 MP. Its base power rises every 5 Residual Lightning stacks (200/220/250/300% of Lightning Damage), with an additional 5% damage per stack.',
    mechanicCurrent: 'Cloud Slash replaces Sheath and consumes all Residual Lightning for a wide frontal slash. Each independent Storm Cloud lightning strike grants 1 stack, up to 20.',
  }),
  record('WUP-08', 'Incendium', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'fire'],
    patchHistory: [{ version: '1.0.19', text: 'Changed from Fire Damage +5 to Weapon Attack damage reduced by 15% and based on Fire Damage.' }],
  }),
  record('WUP-09', 'Solis Missio', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'reignite', 'solar blade'],
    patchHistory: [
      { version: '1.0.19', text: 'Reignite throws Solar Blades every 0.12 seconds instead of every 0.2 seconds.' },
      { version: '1.0.31', text: 'Reignite time changed from counting down immediately to counting down only during Block.' },
    ],
  }),
  record('WUP-10', 'Flame Eater: Haetae', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'flame strike'],
    patchHistory: [
      { version: '0.11.3', text: 'The basic Slam became Normal Attack: Flame Strike and stopped consuming MP.' },
      { version: '1.0.19', text: 'Base Attack Speed increased.' },
    ],
  }),
  record('WUP-11', 'Hypersensitivity', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'whirlwind'],
    patchHistory: [{ version: '1.0.19', text: 'The 20% Special Attack Damage bonus became a 20% Whirlwind damage bonus. The 50% faster Whirlwind charging remained.' }],
  }),
  record('WUP-12', 'Lightning Greatsword “S3G”', 'Weapon Upgrade', {
    aliases: ['Lightning Greatsword S3G'],
    tags: ['weapon upgrade', 'upgrade', 'lightning', 'electrocution'],
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    patchHistory: [
      { version: '0.11.0', text: 'Fixed Electrocution extra damage applying additively instead of multiplicatively.' },
      { version: '1.0.19', text: 'The Electrocution extra-damage bonus on Weapon Attack changed from 20% to 33%.' },
    ],
  }),
  record('WUP-13', 'Greatsword of Exorcism', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'greatsword', 'scabbard of exorcism'],
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    patchHistory: [
      { version: '0.12.0', text: 'Scabbard of Exorcism charge speed changed from 50% to 80%.' },
      { version: '1.0.19', text: 'Fixed incorrect application of some stats.' },
    ],
  }),
  record('WUP-14', 'Mischievous Prank', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'leaf explosion'],
    patchHistory: [{ version: '1.0.19', text: 'Replaced the -20% Critical Chance / +25% Weapon Damage effect with Special Attack: Leaf Explosion, adding Normal Attack Damage to its damage.' }],
  }),
  record('WUP-15', 'Red Snake Crush', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'red snake eyes'],
    patchHistory: [{ version: '1.0.19', text: 'Red Snake Eyes damage bonus changed from 20% to 33%; Normal Attack reduces its cooldown by 2.5 seconds.' }],
  }),
  record('WUP-16', 'Solis Cineris', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'solar blade'],
    patchHistory: [
      { version: '0.10.6', text: 'Additional Solar Blade triggers were restricted to Weapon Attack.' },
      { version: '1.0.19', text: 'The Solar Blade Critical Damage bonus changed from 33% to 36%, retaining 2 additional Solar Blade activations on Weapon Attack.' },
    ],
  }),
  record('WUP-17', 'Colossal Crossbow: Rapid Freeze Crystal', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'crossbow', 'frost relic', 'frost veil'],
    weapon: 'Crossbow', relatedIds: ['WPN-03'],
    patchHistory: [
      { version: '1.0.19', text: 'Replaced the effect preventing arrow consumption during Frost Veil with Frost Relic damage +20%.' },
      { version: '1.0.31', text: 'Replaced the Frost Relic damage bonus with Frost Relic: Frost Veil, allowing Normal Attack to benefit from Frost Relic enhancements.' },
    ],
  }),
  record('WUP-18', 'Lightning Dagger', 'Weapon Upgrade', {
    tags: ['weapon upgrade', 'upgrade', 'dagger', 'lightning'],
    weapon: 'Dagger', relatedIds: ['WPN-04'],
    patchHistory: [{ version: '1.0.19', text: 'Extra damage on Weapon Attack changed from 20% to 25% of Lightning Damage.' }],
  }),
];

const artifactNames = [
  'Frozen Egg', 'Devotion Insignia', 'Eternal Winter', 'Electro Chakram', 'Shield Earrings',
  'Shieldmate', 'Rainbow Feather', 'Rylie’s Pocket Watch', 'Glowing Hourglass', 'Spiny Shell',
  'Frozen Bow', 'Shimmering Eyes', 'Sheet Music ‘Galaxy’', 'Academy Fountain Pen',
  'Snow Mountain Long-eared Bat', 'Red Planet Observation Log', 'Hand Mirror', 'Shield Bag',
  'Thunderstorm Tracking Compass', 'Multicolored Candy Glass Jar', 'Scale of the Astral Sea',
  'Mining Supervisor Armband', 'Pouch of Black Tea', 'Crimson Sunset', 'Chalcedony Key',
  'Tuning Fork', 'Flame Herb Root', 'Magic Carrot', 'Standards of Magic', 'Sharp Flint',
  'Blue Ink Bottle', 'Firefly', 'Captivating Lure', 'Empty Hilt', 'Droplet of Plitvice',
  'Faded Shield Crest', 'Rusty Tsuba', "Trainee Duelist's Epaulette", 'Dull Resonance Stone',
  'Stiff Crank', 'Midday Whetstone', 'Meteorite Mirror',
];

export const sephiriaArtifacts: SephiriaRecord[] = [
  ...artifactNames.map((name, index) => record(`ART-${String(index + 1).padStart(2, '0')}`, name, 'Artifact', { tags: ['artifact'] })),
  record('ART-43', "Master's Tsuba", 'Artifact', {
    tags: ['artifact', 'weapon damage'],
    effectCurrent: 'Weapon Damage: +5 / +10 / +15',
    patchHistory: [{ version: '1.0.33', text: 'Sheath/Unsheath invincibility bonus changed from a fixed duration increase to +40% / +70% / +120%.' }],
  }),
  record('ART-44', 'Meteorite Pauldrons', 'Artifact', {
    tags: ['artifact', 'solar blade'],
    patchHistory: [{ version: '1.0.33', text: 'Fixed Solar Blade bonus/application issues.' }],
  }),
  record('ART-45', 'Blacksmith’s Tongs', 'Artifact', { tags: ['artifact'] }),
].map((entry) => ({ ...entry, ...sephiriaArtifactFacts[entry.id] }));

export const sephiriaTablets = [
  record('TBL-01', 'Nurture', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Rarity changed from Advanced to Common.' }] }),
  record('TBL-02', 'Competition', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Downward bonus changed from +2 to +3.' }] }),
  record('TBL-03', 'Wave', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Upper-right diagonal bonus changed from +2 to +3.' }] }),
  record('TBL-04', 'Trick', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Rarity changed from Advanced to Common.' }] }),
  record('TBL-05', 'Preparation', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Lower-right diagonal bonus changed from +1 to +2.' }] }),
  record('TBL-06', 'Daydream', 'Tablet', { patchHistory: [{ version: '1.0.19', text: 'Pattern changed from +1 in each of the four diagonal directions plus +1 in each cell beyond those diagonals to +2 in each of the four diagonal directions.' }] }),
];

export const sephiriaCostumes = [
  record('CST-01', 'Orange Rabbit', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Before: Max HP +10; Max MP -15. After: Debuff Damage +14%; Defense -8.' }] }),
  record('CST-02', 'White Rabbit', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Before: Normal Attack Damage +8%; Special Attack Damage -5%. After: Special Attack Damage +12%; Max MP +8; Evasion -15.' }] }),
  record('CST-03', 'Red-Clothed Cat', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Each elemental damage amplified +15%; Physical Damage amplified -20%.' }] }),
  record('CST-04', 'Frog', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Each elemental damage amplified +15%; Physical Damage amplified -20%.' }] }),
  record('CST-05', 'Wizard Bunny', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Each elemental damage amplified +15%; Physical Damage amplified -20%.' }] }),
  record('CST-06', 'Skeleton', 'Costume', { patchHistory: [{ version: '1.0.19', text: 'Before: Revive +2; Healing Curse 50%. After: Damage dealt amplified by 20%.' }] }),
  record('CST-07', 'Scholar Lizard', 'Costume', { patchHistory: [{ version: '1.0.33', text: 'Fixed an issue where the Costume effect could be removed by a certain weapon.' }] }),
];

export const sephiriaHardModeElements = [
  record('HM-01', 'Festival of Blood', 'Hard Mode Element', { effectCurrent: 'Enemies restore HP when they hit a player. Minibosses and bosses restore more HP.' }),
  record('HM-02', 'False Vanguard', 'Hard Mode Element', { aliases: ['Pseudo-Vanguard'], effectCurrent: 'Minibosses become stronger.' }),
  record('HM-03', 'Deterioration', 'Hard Mode Element', { aliases: ['Decline'], effectCurrent: 'Level Up Restoration is reduced.\n\n4 levels:\n-10%\n-25%\n-40%\n-60%' }),
  record('HM-04', 'Tension', 'Hard Mode Element', { effectCurrent: 'Potions cannot be used during boss fights.' }),
  record('HM-05', 'Heavy Heart', 'Hard Mode Element', { effectCurrent: 'Start each run with the Heavy Heart Artifact. Heavy Heart has no effect and cannot be discarded.' }),
  record('HM-06', 'Proliferation', 'Hard Mode Element', { effectCurrent: 'More Normal Enemies appear.\n\n2 levels:\n+10%\n+25%' }),
];

export const sephiriaBosses = [
  record('BOS-01', 'Demonic Grimoire', 'Miniboss'),
  record('BOS-02', 'Qliphoth', 'Boss'),
  record('BOS-03', 'Askard', 'Boss'),
  record('BOS-04', 'Pentaxis, the Guardian of the Library', 'Boss'),
];

export const sephiriaGrimoires = [
  record('GRI-01', 'Tome of Mimicry', 'Grimoire', {
    tags: ['grimoire', 'mp', 'active action'],
    relatedIds: ['ART-08', 'ART-14', 'ART-29', 'ART-34'],
  }),
];

export const sephiriaAllRecords: SephiriaRecord[] = [
  ...sephiriaWeapons,
  ...sephiriaWeaponUpgrades,
  ...sephiriaArtifacts,
  ...sephiriaTablets,
  ...sephiriaCostumes,
  ...sephiriaHardModeElements,
  ...sephiriaBosses,
  ...sephiriaGrimoires,
];

export type SephiriaWikiPage = { title: string; href: string; summary: string; publishedAt: string; group: 'wiki' | 'category' | 'system' | 'game' };
const publishedAt = '2026-09-26T00:00:00.000Z';

export const sephiriaWikiPages: SephiriaWikiPage[] = [
  { title: 'Sephiria', href: '/games/sephiria', summary: 'Game overview and entry to the Sephiria Wiki.', publishedAt, group: 'game' },
  { title: 'Sephiria Wiki', href: '/games/sephiria/wiki', summary: 'Browse weapons, Artifacts, systems and other Sephiria reference pages.', publishedAt, group: 'wiki' },
  { title: 'Weapons', href: '/games/sephiria/wiki/weapons', summary: 'Six weapon branches, combat mechanics, unlock routes and related upgrades.', publishedAt, group: 'category' },
  { title: 'Weapon Upgrades', href: '/games/sephiria/wiki/weapon-upgrades', summary: 'Weapon upgrade database entries with effects, mechanics and weapon relationships.', publishedAt, group: 'category' },
  { title: 'Artifacts', href: '/games/sephiria/wiki/artifacts', summary: 'Browse Artifact effects, rarity, categories and current values.', publishedAt, group: 'category' },
  { title: 'Tablets', href: '/games/sephiria/wiki/tablets', summary: 'Tablet names and documented pattern or rarity changes.', publishedAt, group: 'category' },
  { title: 'Costumes', href: '/games/sephiria/wiki/costumes', summary: 'Costume index and documented version history.', publishedAt, group: 'category' },
  { title: 'Grimoires', href: '/games/sephiria/wiki/grimoires', summary: 'How Grimoires relate to Staff, MP and relevant stats.', publishedAt, group: 'category' },
  { title: 'Bosses', href: '/games/sephiria/wiki/bosses', summary: 'Named bosses and minibosses.', publishedAt, group: 'category' },
  { title: 'Hard Mode', href: '/games/sephiria/wiki/hard-mode', summary: 'Hard Mode scope, maximum level and named elements.', publishedAt, group: 'category' },
  { title: 'Mystic Pot', href: '/games/sephiria/wiki/mystic-pot', summary: 'Artifact exchange rules and the 1.0.30 change.', publishedAt, group: 'system' },
  { title: 'Side Bag', href: '/games/sephiria/wiki/side-bag', summary: 'Storage behavior and unlock connection.', publishedAt, group: 'system' },
  { title: 'Destiny Inscription', href: '/games/sephiria/wiki/destiny-inscription', summary: 'Progression system overview and Side Bag connection.', publishedAt, group: 'system' },
  { title: 'Training Grounds', href: '/games/sephiria/wiki/training-grounds', summary: 'Version 1.0.31 training area and item testing.', publishedAt, group: 'system' },
  { title: 'Chapters', href: '/games/sephiria/wiki/chapters', summary: 'Six-chapter overview and Chapter 6 additions.', publishedAt, group: 'system' },
];

export const sephiriaLegacyRedirects: { oldUrl: string; destination: string; type: string; usefulData: string; action: '301' }[] = [
  { oldUrl: '/games/sephiria/beginner-guide-weapons-artifacts-and-the-inventory-grid', destination: '/games/sephiria/wiki', type: 'Beginner guide', usefulData: 'Generic advice only; no unique supported data retained.', action: '301' },
  { oldUrl: '/games/sephiria/build-choices-a-safe-weapon-and-one-supported-artifact-family', destination: '/games/sephiria/wiki', type: 'Build guide', usefulData: 'Generic advice only; no unique supported data retained.', action: '301' },
  { oldUrl: '/games/sephiria/hard-mode-preparation-survive-the-opening-rooms', destination: '/games/sephiria/wiki/hard-mode', type: 'Hard Mode guide', usefulData: 'Generic preparation advice; named current scope is retained on Hard Mode page.', action: '301' },
  { oldUrl: '/games/sephiria/anvil-upgrades-choose-the-branch-your-build-supports', destination: '/games/sephiria/wiki/weapon-upgrades', type: 'Upgrade guide', usefulData: 'Generic advice only; no unique supported data retained.', action: '301' },
  { oldUrl: '/games/sephiria/weapon-evolution-commit-to-a-branch-without-breaking-the-run', destination: '/games/sephiria/wiki/weapon-upgrades', type: 'Weapon guide', usefulData: 'Generic advice only; no unique supported data retained.', action: '301' },
  { oldUrl: '/games/sephiria/artifacts-active-effects-placement-conditions-and-replacements', destination: '/games/sephiria/wiki/artifacts', type: 'Artifact guide', usefulData: 'Generic advice only; item names and unsupported mechanics not migrated.', action: '301' },
  { oldUrl: '/games/sephiria/tablet-placement-read-the-pattern-and-protect-the-core', destination: '/games/sephiria/wiki/tablets', type: 'Tablet guide', usefulData: 'Generic advice only; current patterns remain blank unless provided.', action: '301' },
  { oldUrl: '/games/sephiria/artifact-combinations-choose-a-trigger-your-weapon-repeats', destination: '/games/sephiria/wiki/artifacts', type: 'Build guide', usefulData: 'Generic advice only; no unique supported data retained.', action: '301' },
  { oldUrl: '/games/sephiria/boss-strategy-check-the-bag-watch-the-tell-and-punish-briefly', destination: '/games/sephiria/wiki/bosses', type: 'Boss guide', usefulData: 'Generic combat advice; boss names retained without invented mechanics.', action: '301' },
  { oldUrl: '/games/sephiria/secret-rooms-cracked-walls-and-the-library-secret-study', destination: '/games/sephiria/wiki', type: 'Route guide', usefulData: 'Unverified route claims not migrated.', action: '301' },
  { oldUrl: '/games/sephiria/sephiria-wiki', destination: '/games/sephiria/wiki', type: 'Legacy wiki landing article', usefulData: 'Superseded by the structural Wiki hub.', action: '301' },
];
