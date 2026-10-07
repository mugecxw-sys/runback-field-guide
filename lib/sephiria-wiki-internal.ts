import { sephiriaAllRecords, sephiriaWeaponUpgrades, sephiriaWeapons } from './sephiria-wiki-data';

const official = (post: string) => `https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/${post}`;
const launch = official('1839676055887303');
const patch31 = 'https://steamcommunity.com/games/2436940/announcements/detail/692020124159312087';
const patch33 = 'https://steamcommunity.com/games/2436940/announcements/detail/692020124159312357';

// Internal review metadata is never imported by public pages or client components.
export const sephiriaWeaponsReview = {
  version: '1.0.33',
  reviewedAt: '2026-10-02',
  announcementsFeed: 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2436940&count=100&maxlength=0&feeds=steam_community_announcements',
  latestPatch: patch33,
  latestAnnouncement: 'Price Update Notice (2026-09-12)',
  notes: 'No patch newer than 1.0.33 was returned by the official feed. The six complete new-upgrade definitions in 1.0.31 are reviewed as the latest published specifications; 1.0.33 changes Heidi, not any of these six. Older Before/After changes remain historical, not complete current tooltips.',
};

const weaponResearch: Record<string, { sources: string[]; notes: string }> = {
  'WPN-01': { sources: [patch31, official('1799817379594929')], notes: 'Block and Cleave are explicit Sword and Shield actions in the official Crossbow release and 1.0.31 additions. No complete unlock condition published.' },
  'WPN-02': { sources: [official('1799088287863948'), patch31], notes: 'Official 0.7.32 explicitly describes Greatsword Whirlwind; 1.0.31 explicitly assigns Bloodletting Gearblade. No complete unlock condition published.' },
  'WPN-03': { sources: [official('1799817379594929'), official('1799088287950279'), patch31], notes: 'Official Crossbow release states Destiny inscription quest; official preview specifies ranged ammunition and reloading. Do not invent quest steps.' },
  'WPN-04': { sources: [official('1840944183776721'), official('1799088287863948')], notes: '1.0.26 explicitly allows Dagger Dash Attack to chain into Parry/Fury; 0.7.32 explicitly labels Dagger Lightning Dagger. No complete unlock condition published.' },
  'WPN-05': { sources: [official('1810503566450829'), patch31, patch33], notes: 'The 0.8.11 section embedded in 0.8.12 states sheathed/unsheathed states and fate engraving unlock. Fate engraving is normalized to the existing Destiny Inscription system name; no detailed unlock quest is asserted. Katana remains an alias, not another record.' },
  'WPN-06': { sources: [official('1827626365768135')], notes: '0.11.0 explicitly unlocks Staff through Destiny Inscription. A complete current base attack description was not found. Do not assign Grimoires or magic-named upgrades to Staff.' },
  'WUP-01': { sources: [launch], notes: '1.0.19 historical Scabbard of Exorcism change only. Ownership and complete current effect unresolved.' },
  'WUP-02': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/blinding-silence'], notes: 'Explicit Sword & Shield addition and full definition in 1.0.31; no superseding change in 1.0.33. Latest official specification, not a client test.' },
  'WUP-03': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/garden-of-needle-ice'], notes: 'Explicit Sword & Shield addition and full definition in 1.0.31; no superseding change in 1.0.33.' },
  'WUP-04': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/prismatic-magic-wand'], notes: 'Explicit replacement of the Sword & Shield Magic Wand in 1.0.31; complete new missile definition reviewed through 1.0.33.' },
  'WUP-05': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/bloodletting-gearblade'], notes: 'Explicit Great Sword addition in 1.0.31. Fixed HP value and conversion coefficient are not stated and are not invented.' },
  'WUP-06': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/m-9200'], notes: 'Explicit Crossbow Ammo Compression addition in 1.0.31; complete published trigger and damage bonus reviewed through 1.0.33.' },
  'WUP-07': { sources: [patch31, patch33, 'https://sephiriawiki.com/weapon-upgrades/cerulean-cloud-sword-arges'], notes: 'Explicit Blade addition in 1.0.31. Listed coefficients retained without inventing a stack-to-coefficient table or a damage formula.' },
  'WUP-08': { sources: [launch], notes: '1.0.19 Before/After only. Branch and current effect left null.' },
  'WUP-09': { sources: [launch, patch31], notes: 'Two historical Reignite changes retained. Block interaction does not establish Sword & Shield ownership.' },
  'WUP-10': { sources: [official('1828441623103940'), launch], notes: 'Historical Flame Strike and attack-speed changes. No current base speed, full effect or explicit branch available.' },
  'WUP-11': { sources: [launch], notes: 'Historical Whirlwind modifier only. Mechanic similarity is not ownership evidence.' },
  'WUP-12': { sources: [launch, official('1827626365768135'), 'https://sephiriawiki.com/weapons/greatsword'], notes: 'Official Lightning Greatsword record is explicitly listed under Greatsword by the secondary branch index. Historical Electrocution values are not promoted to current.' },
  'WUP-13': { sources: [launch, official('1832700592786134'), 'https://sephiriawiki.com/weapons/greatsword'], notes: 'Official Greatsword record corroborated by the explicit secondary Greatsword listing. Historical charge-speed change and stat fix retained; no bonus formula inferred.' },
  'WUP-14': { sources: [launch], notes: 'Historical Leaf Explosion change only. Do not equate old Mischievous Play with Mischievous Prank without an identity match.' },
  'WUP-15': { sources: [launch], notes: 'Historical Red Snake Eyes interaction only. No explicit weapon assignment.' },
  'WUP-16': { sources: [launch, official('1821288646578852')], notes: 'Historical Solar Blade changes only. No explicit weapon assignment.' },
  'WUP-17': { sources: [patch31, launch, 'https://sephiriawiki.com/weapons/crossbow'], notes: 'Explicit Colossal Crossbow record corroborated by the secondary Crossbow listing. 1.0.31 supersedes the 1.0.19 Frost Relic bonus, but neither supplies a complete current tooltip.' },
  'WUP-18': { sources: [official('1799088287863948'), launch], notes: '0.7.32 explicitly labels Dagger Lightning Dagger. The later 1.0.19 extra-damage change remains historical.' },
};

export const sephiriaInternalRecords = sephiriaAllRecords.map((entry) => ({
  id: entry.id,
  verificationStatus: weaponResearch[entry.id] ? (entry.effectCurrent ? 'OFFICIAL_SPEC_REVIEWED' : entry.category === 'Weapon' ? 'PARTIAL_WEAPON_REVIEW' : 'HISTORY_ONLY') : 'PROMPT_SUPPLIED',
  sourcePrimary: weaponResearch[entry.id]?.sources[0] ?? null,
  sourceSecondary: weaponResearch[entry.id]?.sources[1] ?? null,
  sourceUrls: weaponResearch[entry.id]?.sources ?? [],
  internalNotes: weaponResearch[entry.id]?.notes ?? null,
  lastVerifiedVersion: weaponResearch[entry.id] ? sephiriaWeaponsReview.version : null,
}));

export function validateSephiriaRecords() {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const entry of sephiriaAllRecords) {
    if (!entry.id || ids.has(entry.id)) throw new Error(`Duplicate or missing Sephiria record id: ${entry.id}`);
    if (!entry.slug || slugs.has(entry.slug)) throw new Error(`Duplicate or missing Sephiria record slug: ${entry.slug}`);
    if (!entry.name.trim()) throw new Error(`Missing Sephiria record name: ${entry.id}`);
    ids.add(entry.id);
    slugs.add(entry.slug);
  }
  if (sephiriaWeapons.length !== 6 || sephiriaWeaponUpgrades.length !== 18) throw new Error('Unexpected Sephiria weapon coverage');
  if (!sephiriaWeapons.find((entry) => entry.name === 'Blade')?.aliases.includes('Katana') || sephiriaWeapons.some((entry) => entry.name === 'Katana')) throw new Error('Blade / Katana identity mismatch');
  const upgradesById = new Map(sephiriaWeaponUpgrades.map((entry) => [entry.id, entry]));
  for (const weapon of sephiriaWeapons) {
    if (new Set(weapon.upgradeIds).size !== (weapon.upgradeIds ?? []).length) throw new Error(`Duplicate upgrade relation: ${weapon.id}`);
    for (const upgradeId of weapon.upgradeIds ?? []) {
      const upgrade = upgradesById.get(upgradeId);
      if (!upgrade || upgrade.weapon !== weapon.name || !upgrade.relatedIds.includes(weapon.id)) throw new Error(`Broken weapon-upgrade relation: ${weapon.id} -> ${upgradeId}`);
    }
  }
  for (const upgrade of sephiriaWeaponUpgrades) {
    const weapon = sephiriaWeapons.find((entry) => entry.name === upgrade.weapon);
    if (upgrade.weapon && (!weapon || upgrade.relatedIds.length !== 1 || upgrade.relatedIds[0] !== weapon.id || !weapon.upgradeIds?.includes(upgrade.id))) throw new Error(`Broken upgrade-weapon relation: ${upgrade.id}`);
    if (!upgrade.weapon && upgrade.relatedIds.length) throw new Error(`Unassigned upgrade has a weapon relation: ${upgrade.id}`);
  }
  const internalById = new Map(sephiriaInternalRecords.map((entry) => [entry.id, entry]));
  if (internalById.size !== sephiriaAllRecords.length) throw new Error('Missing or duplicate internal Sephiria records');
  for (const entry of sephiriaAllRecords) {
    if (!internalById.get(entry.id)?.verificationStatus) throw new Error(`Missing internal verification status: ${entry.id}`);
    for (const relatedId of entry.relatedIds) {
      if (!ids.has(relatedId)) throw new Error(`Unresolved Sephiria relation ${entry.id} -> ${relatedId}`);
    }
  }
  return true;
}
