import type { SephiriaBuildDefinition } from '@/lib/sephiria-build-navigation';
import type { BagPlannerLayoutV1 } from '@/lib/sephiria-planner/bag-planner-layout';
import { coreItem, itemImage, upgradeImage, type SephiriaSwordShieldBuildPageData } from './sword-and-shield-pages';
import layout from './frog-auto-storm-cloud-layout.json';
import preset from './frog-auto-storm-cloud-preset.json';
import { validateFruitSkewer } from './fruit-skewer';

const fruitErrors = validateFruitSkewer(preset.fruit_skewer, ['Storm Cloud', 'Companion']);
if (fruitErrors.length) throw new Error(fruitErrors.join(', '));
const fruitImages = {
  Plum: { src: '/images/games/sephiria/wiki/pre-run/plum.webp', width: 60, height: 30, alt: 'Plum' },
  Strawberry: { src: '/images/games/sephiria/wiki/pre-run/strawberry.webp', width: 40, height: 33, alt: 'Strawberry' },
  Carrot: { src: '/images/games/sephiria/wiki/pre-run/carrot.webp', width: 16, height: 11, alt: 'Carrot' },
};

const href = '/games/sephiria/builds/sword-and-shield/frog-auto-storm-cloud-build';

export const frogAutoStormCloudBuild: SephiriaBuildDefinition = {
  title: 'Frog Auto Storm Cloud Build',
  href,
  weaponRoute: ['Conductor', 'Ballista Sword'],
  finalBuild: ['Storm Cloud 10', 'Companion 10'],
  style: 'Low-Input Automatic Damage',
  comboLabel: 'Combo Targets',
  inactiveSlotLabel: 'Inactive',
  plannerLayout: layout as BagPlannerLayoutV1,
  coreArtifactIds: [1071, 1263, 1055, 1090, 1104, 1113, 1129],
  fieldNotes: [
    { title: 'Keep the inputs simple', detail: 'You do not need a complicated attack rotation. Get the automatic damage engine running, then give yourself room to move.' },
    { title: 'Let Storm Cloud and companions work', detail: 'Their automatic attacks provide the sustained damage. Keep enemies in reach without taking unnecessary risks.' },
    { title: 'Keep both Mini Ballista and Flux Coupler', detail: 'Mini Ballista generates Storm Cloud with its lightning arrows. Flux Coupler Mk.2 turns Companion Lightning hits into more Storm Cloud activations.' },
    { title: 'Prioritize survival once the build is online', detail: 'Watch enemy attacks, reposition early, and Guard when you need to. Staying alive gives the automatic damage time to add up.' },
    { title: 'Do not force extra attacks', detail: 'Take safe openings when they appear, but avoid chasing a little more damage at the cost of a clean dodge or a safer position.' },
    { title: 'Around 2,000 DPS in my testing', detail: 'In my testing, this build was doing around 2,000 DPS. Once it comes online, you can mostly focus on dodging enemy attacks and let Storm Cloud and your companions do the work. If the setup looks fun, try recreating it and taking it into Hard Mode—have fun with it.' },
  ],
};

export const frogAutoStormCloudPage: SephiriaSwordShieldBuildPageData = {
  buildId: 'frog-auto-storm-cloud',
  hideBuildId: true,
  href,
  seoTitle: 'Sephiria Frog Auto Storm Cloud Build | RUNBACK',
  h1: 'Sephiria Frog Auto Storm Cloud Build',
  subtitle: 'Frog Auto Storm Cloud Build',
  description: 'A low-input Sephiria Sword & Shield build using Frog, Ballista Sword, Storm Cloud, and companions for sustained automatic Lightning damage.',
  intro: 'Let Storm Cloud and your companions handle the sustained damage while you focus on staying alive. Frog and Ballista Sword bring the two sides together in a low-input Sword & Shield setup.',
  mainDamage: 'Automatic Lightning damage from Storm Cloud and companions',
  coreEngine: 'Storm Cloud + Companion',
  comboLabel: 'Combo Targets',
  costumeName: 'Frog',
  costumeImage: upgradeImage('CST-04'),
  costumeEffects: ['+15% Lightning Damage Amplification', '−20% Physical Damage Amplification'],
  weaponName: 'Sword & Shield',
  buildStyle: 'Low-Input Automatic Damage',
  weaponRoute: [
    { label: 'Conductor', image: upgradeImage('upgrade-1016') },
    { label: 'Ballista Sword', image: upgradeImage('upgrade-1017') },
  ],
  setup: [
    { title: 'Talent Setup', lines: [...preset.talents.map(t => `${t.name} ${t.points}`), 'Total: 30 / 30'] },
    { title: 'Innate Skill', lines: [preset.innate_skill.name], image: itemImage(3011), description: preset.innate_skill.source },
    { title: 'Starting Item', lines: [preset.starting_item.name], image: itemImage(Number(preset.starting_item.id)), description: 'Extra pre-run item. Bring Mini Ballista as your extra starting item to begin building both Companion and Storm Cloud immediately.' },
    { title: 'Fruit Skewer', lines: ['Total: 6 / 6'], fruits: preset.fruit_skewer.selections.map(f => ({ ...f, image: fruitImages[f.fruit as keyof typeof fruitImages] })), description: 'Fruit Skewer changes the reward bias for matching Artifact categories. This build needs many Storm Cloud and Companion Artifacts, so the Fruit Skewer is focused almost entirely on those two categories.' },
    { title: 'Costume', lines: [preset.costume.name], image: upgradeImage('CST-04') },
  ],
  coreItems: [
    { ...coreItem(1071, 5, 'Summons a companion. At Lv5, its lightning arrows have a 75% chance to generate Storm Cloud when they hit an enemy.'), categories: ['Companion', 'Storm Cloud'] },
    { ...coreItem(1263, 4, '+12% Companion Damage. Companion Lightning hits activate Storm Cloud, with a 0.1-second cooldown per companion.'), categories: ['Storm Cloud', 'Companion'] },
    coreItem(1055, 7, 'The most direct Storm Cloud damage upgrade here: +60% Extra Storm Cloud Damage at Lv7.'),
    coreItem(1090, 7, 'Companions attack 60% more frequently, keeping the automatic engine moving. Also grants +50% Companion Revive Time Haste.'),
    coreItem(1104, 5, 'Storm Cloud has a 70% chance not to be consumed, helping the build keep its automatic damage going.'),
    { ...coreItem(1113, 5, '+25 Storm Cloud Capacity, +15% Storm Cloud Recovery Rate during Combat, and +5 Lightning Damage.'), group: 'Supporting Core' },
    { ...coreItem(1129, 6, 'A 50% chance for enhanced Storm Cloud lightning bolts.'), group: 'Supporting Core' },
    { ...coreItem(1239, 1, 'Adds an automatic nearby Lightning attack that inflicts Electrocution, plus +1 Lightning Damage.'), group: 'Supporting Core' },
    { ...coreItem(1320, 1, '+8 Highest Elemental Damage. Supports Lightning when Lightning is your highest element.'), group: 'Supporting Core' },
    { ...coreItem(1276, 1, '+4 Defense, +2% Universal Damage Boost, and +2 Luck.'), group: 'Supporting Core' },
    { ...coreItem(1216, 1, '+2 Defense and +14 Grimoire Haste; contributes Guardian and Academy categories.'), group: 'Supporting Core' },
  ],
  damageHeading: 'Two linked automatic engines',
  damageSteps: [
    { title: 'Storm Cloud Engine', detail: 'Frog amplifies Lightning Damage. Lightning Stone raises Storm Cloud damage, while Fretted Clay Tablet reduces consumption. Cloud Seed Arrowhead at Lv6 gives a 50% chance for enhanced Storm Cloud lightning bolts. Lightning Rod at Lv5 adds +15% Storm Cloud Recovery Rate during Combat, +5 Lightning Damage, and +25 Storm Cloud Capacity.' },
    { title: 'Companion Engine', detail: 'Ballista Sword makes Mini Ballista arrows pierce walls and home in on enemies. Successful Blocks fire arrows immediately, and Mini Ballista no longer takes damage. Mini Ballista attacks automatically and generates Storm Cloud; Slim Cushion makes companions attack more frequently. Their Lightning hits feed Flux Coupler Mk.2, which triggers additional Storm Cloud activations.' },
  ],
  replacementsText: 'Choose filler swaps by category, then recheck core levels and the 10 Storm Cloud / 10 Companion targets. Use each replacement only once; a same-category swap does not preserve every effect.',
  replacements: [{"missing": "Ruby Brooch", "replacement": "Sapote Fruit or Sharp Acorn", "keep": "Storm Cloud category contribution. Sapote Fruit adds capacity and MP Regeneration; Sharp Acorn adds combat recovery and Evasion.", "tradeOff": "Loses Burn from Storm Cloud hits, elemental damage bonuses, and Ember membership. These are filler alternatives, not equivalent effects."}, {"missing": "Stone Flower", "replacement": "Sapote Fruit or Sharp Acorn", "keep": "Storm Cloud category contribution. Sapote Fruit adds capacity and MP Regeneration; Sharp Acorn adds combat recovery and Evasion.", "tradeOff": "Loses Lightning Damage and Critical Damage bonuses. These are filler alternatives, not equivalent effects."}, {"missing": "Model Mast", "replacement": "Sapote Fruit or Sharp Acorn", "keep": "Storm Cloud category contribution. Sapote Fruit adds capacity and MP Regeneration; Sharp Acorn adds combat recovery and Evasion.", "tradeOff": "Loses its Storm Cloud consumption speed bonus. These are filler alternatives, not equivalent effects."}, {"missing": "Sheet Music 'The Typhoon'", "replacement": "Sapote Fruit or Sharp Acorn", "keep": "Storm Cloud category contribution. Sapote Fruit adds capacity and MP Regeneration; Sharp Acorn adds combat recovery and Evasion.", "tradeOff": "Loses the attack-speed-based consumption scaling, weapon Lightning damage, Attack Speed, and Wind Song membership. These are filler alternatives, not equivalent effects."}, {"missing": "Mining Supervisor Armband", "replacement": "Tero’s Spirit Powder or Simple Contract", "keep": "Companion category contribution. Tero’s Spirit Powder summons a Fire-projectile companion; Simple Contract increases Companion Max HP.", "tradeOff": "Loses the summoned Mole Chief. Simple Contract improves survivability and does not replace a companion or provide equivalent damage."}, {"missing": "Tactical Manual", "replacement": "Tero’s Spirit Powder or Simple Contract", "keep": "Companion category contribution. Tero’s Spirit Powder summons a Fire-projectile companion; Simple Contract increases Companion Max HP.", "tradeOff": "Loses player critical-stat contribution to companions, Critical Chance, and Precision membership. Simple Contract improves survivability and does not replace a companion or provide equivalent damage."}, {"missing": "Heita’s Spirit Powder", "replacement": "Tero’s Spirit Powder or Simple Contract", "keep": "Companion category contribution. Tero’s Spirit Powder summons a Fire-projectile companion; Simple Contract increases Companion Max HP.", "tradeOff": "Loses the Ice-projectile companion, Frostbite utility, and Glacier membership. Simple Contract improves survivability and does not replace a companion or provide equivalent damage."}, {"missing": "Hiring Crest “Collin”", "replacement": "Tero’s Spirit Powder or Simple Contract", "keep": "Companion category contribution. Tero’s Spirit Powder summons a Fire-projectile companion; Simple Contract increases Companion Max HP.", "tradeOff": "Loses its recruited NPC companion. Simple Contract improves survivability and does not replace a companion or provide equivalent damage."}],
  replacementKeep: 'Mini Ballista, Flux Coupler Mk.2, Lightning Stone, Slim Cushion, Fretted Clay Tablet, Lightning Rod, and Cloud Seed Arrowhead do not have a true 1:1 replacement. If any is missing, treat the run as an incomplete version of the build. Alternative Tablet arrangements must preserve the required core effective levels.',
  videoPath: '/videos/games/sephiria/builds/sword-and-shield/frog-auto-storm-cloud-build/gameplay-demo.mp4',
  videoPoster: '/videos/games/sephiria/builds/sword-and-shield/frog-auto-storm-cloud-build/poster.webp',
  relatedGuides: [
    { href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build', title: 'Grip of Fear Cleave Build' },
    { href: '/games/sephiria/guides/chapter-1-clear-guide', title: 'Sephiria Chapter 1 Clear Guide' },
    { href: '/games/sephiria/wiki/items', title: 'Sephiria Items Database' },
    { href: '/games/sephiria/wiki/weapon-upgrades', title: 'Weapon Upgrade Tree' },
  ],
};
