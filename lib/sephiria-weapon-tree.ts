import { sephiriaWeaponUpgradeFacts } from './sephiria-weapon-upgrade-facts';
import { sephiriaImageManifest, type SephiriaRecordImage } from './sephiria-image-manifest';

export type SephiriaWeaponTreeNode = {
  key: string;
  name: string;
  weapon: string;
  weaponAnchor: string;
  depth: number;
  parent: string | null;
  children: string[];
  slug: string;
  effectCurrent: string | null;
  mechanicCurrent: string | null;
  image: SephiriaRecordImage;
};

type TreeEntry = Omit<SephiriaWeaponTreeNode, 'image' | 'effectCurrent' | 'mechanicCurrent'> & {
  effectCurrent?: string | null;
  mechanicCurrent?: string | null;
};

const entries: TreeEntry[] = [
  {
    "key": "upgrade-1020",
    "name": "Stone Sword",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1",
    "children": [],
    "slug": "stone-sword",
    "effectCurrent": "Upon a successful Block, the Block MP cost is reduced by 50%.\nSpecial Attack: Cleave is changed to Special Attack: Shield Bash.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1023",
    "name": "Guardian’s Return",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-3",
    "children": [],
    "slug": "guardian-s-return",
    "effectCurrent": "Special Attack: Cleave damage increases by 40%.\nSpecial Attack: Cleave changes to Special Attack: Shield Throw.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-08",
    "name": "Incendium",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "WUP-09",
      "WUP-10"
    ],
    "slug": "incendium"
  },
  {
    "key": "WUP-09",
    "name": "Solis Missio",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "WUP-08",
    "children": [],
    "slug": "solis-missio"
  },
  {
    "key": "WUP-10",
    "name": "Flame Eater: Haetae",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "WUP-08",
    "children": [],
    "slug": "flame-eater-haetae"
  },
  {
    "key": "WUP-02",
    "name": "Blinding Silence",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1016",
    "children": [],
    "slug": "blinding-silence"
  },
  {
    "key": "WUP-03",
    "name": "Garden of Needle Ice",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1013",
    "children": [],
    "slug": "garden-of-needle-ice"
  },
  {
    "key": "WUP-04",
    "name": "Prismatic Magic Wand",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1004",
    "children": [],
    "slug": "prismatic-magic-wand"
  },
  {
    "key": "WPN-01",
    "name": "Sword & Shield",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 0,
    "parent": null,
    "children": [
      "upgrade-1",
      "upgrade-2",
      "upgrade-3",
      "upgrade-1000",
      "upgrade-1004",
      "upgrade-1006",
      "upgrade-1013",
      "upgrade-1016",
      "WUP-08"
    ],
    "slug": "sword-shield"
  },
  {
    "key": "upgrade-1",
    "name": "Protection of the Fuzz",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-4",
      "upgrade-5",
      "upgrade-1020"
    ],
    "slug": "protection-of-the-fuzz",
    "effectCurrent": "Upon a successful Block, the Block MP cost is reduced by 50%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-2",
    "name": "Perfect Balance",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-6",
      "upgrade-7"
    ],
    "slug": "perfect-balance",
    "effectCurrent": "Increases Attack Speed by 15% and, when performing Normal Attack, automatically uses Block in front.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-3",
    "name": "Tiny Destruction",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-9",
      "upgrade-1023"
    ],
    "slug": "tiny-destruction",
    "effectCurrent": "Special Attack: Cleave damage increases by 40%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-4",
    "name": "Starlight",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1",
    "children": [],
    "slug": "starlight",
    "effectCurrent": "Upon a successful Block, the Block MP cost is reduced by 50%.\nArtifact Riposte Blade Fragment’s counter becomes a piercing attack fired at the nearest enemy.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-5",
    "name": "Frozen Fury",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1",
    "children": [],
    "slug": "frozen-fury",
    "effectCurrent": "Upon a successful Block, the Block MP cost is reduced by 50%.\nOn Perfect guard success, Universal Damage Boost increases by 20% for 14 seconds.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-6",
    "name": "Drifting Ash",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-2",
    "children": [],
    "slug": "drifting-ash",
    "effectCurrent": "Increases Attack Speed by 15% and, when performing Normal Attack, automatically uses Block in front.\nDash Attack Damage increases by 60%. Deals 50% of Dash attack damage to enemies along the dash path. (Deals double damage when Dash Count is consumed.)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-7",
    "name": "Indomitable",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-2",
    "children": [],
    "slug": "indomitable",
    "effectCurrent": "Increases Attack Speed by 15% and, when performing Normal Attack, automatically uses Block in front.\nIncreases Normal Attack Damage by 33%, but Special Attack: Cleave can no longer be used.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-9",
    "name": "Grip of Fear",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-3",
    "children": [],
    "slug": "grip-of-fear",
    "effectCurrent": "Special Attack: Cleave damage increases by 40%.\nEvery 3 seconds, gain 1 stack of 'Rising Dread'. (Max 10 stacks)\nStack gain rate increases in proportion to Attack Speed.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1000",
    "name": "Carrot Sword",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-1001",
      "upgrade-1019"
    ],
    "slug": "carrot-sword",
    "effectCurrent": "Increases all elemental damage by 3.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1001",
    "name": "Carrotcalibur",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1000",
    "children": [],
    "slug": "carrotcalibur",
    "effectCurrent": "Increases all elemental damage by 3.\nNormal Attack changes to Normal Attack: Carrot Sword Technique, and the efficiency of additional Attack Speed is increased by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1004",
    "name": "Magic Wand",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "WUP-04"
    ],
    "slug": "magic-wand",
    "effectCurrent": "Weapon Attack is changed to a form that uses Magic Missile. The element of Magic Missile follows your Highest Elemental Damage; if two or more elements are tied for the highest, it becomes Chaos Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1006",
    "name": "Rapier",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-1007"
    ],
    "slug": "rapier",
    "effectCurrent": "Dash attack is disabled, and Normal Attack is changed to Dash attack type. Attack Speed increases by 10%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1007",
    "name": "Flashing Rapier",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1006",
    "children": [],
    "slug": "flashing-rapier",
    "effectCurrent": "Dash attack is disabled, and Normal Attack is changed to Dash attack type. Attack Speed increases by 10%.\nExtends thrusting range. Increases Attack Speed by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1013",
    "name": "Frost Shard",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "WUP-01",
      "upgrade-1015",
      "WUP-03"
    ],
    "slug": "frost-shard",
    "effectCurrent": "Cold Damage increases by 5.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-01",
    "name": "Glacial Blade",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1013",
    "children": [],
    "slug": "glacial-blade"
  },
  {
    "key": "upgrade-1015",
    "name": "Blizzard’s Eve",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1013",
    "children": [],
    "slug": "blizzard-s-eve",
    "effectCurrent": "Cold Damage increases by 5.\nWhen Dash Count is consumed, instantly activate the Artifact Blizzard Hammer with 60% damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1016",
    "name": "Conductor",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 1,
    "parent": "WPN-01",
    "children": [
      "upgrade-1017",
      "upgrade-1018",
      "WUP-02"
    ],
    "slug": "conductor",
    "effectCurrent": "Lightning Damage increases by 5.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1017",
    "name": "Ballista Sword",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1016",
    "children": [],
    "slug": "ballista-sword",
    "effectCurrent": "Lightning Damage increases by 5.\nThe arrows from Artifact Mini Ballista pierce walls and home in on enemies. On a successful Block, immediately fire arrows. Mini Ballista no longer takes damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1018",
    "name": "Superconductor",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1016",
    "children": [],
    "slug": "superconductor",
    "effectCurrent": "Lightning Damage increases by 5.\nSpecial Attack: Cleave changes to Special Attack: Lightning Spear.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1019",
    "name": "Excallion",
    "weapon": "Sword & Shield",
    "weaponAnchor": "sword-shield",
    "depth": 2,
    "parent": "upgrade-1000",
    "children": [],
    "slug": "excallion",
    "effectCurrent": "Increases all elemental damage by 3.\nIncreases all elemental damage by 2, and Grimoire Damage is increased by 15%.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-05",
    "name": "Bloodletting Gearblade",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1102",
    "children": [],
    "slug": "bloodletting-gearblade"
  },
  {
    "key": "WPN-02",
    "name": "Greatsword",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 0,
    "parent": null,
    "children": [
      "WUP-11",
      "upgrade-12",
      "upgrade-17",
      "upgrade-1100",
      "upgrade-1102",
      "upgrade-1104",
      "upgrade-1107",
      "upgrade-1112",
      "upgrade-1122"
    ],
    "slug": "greatsword"
  },
  {
    "key": "WUP-11",
    "name": "Hypersensitivity",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-14",
      "upgrade-15"
    ],
    "slug": "hypersensitivity"
  },
  {
    "key": "upgrade-12",
    "name": "Swarming Shadow",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-16"
    ],
    "slug": "swarming-shadow",
    "effectCurrent": "Special Attack: Whirlwind charge time increases by 100%, but Normal Attack Damage increases by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-14",
    "name": "Negligence",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "WUP-11",
    "children": [],
    "slug": "negligence",
    "effectCurrent": "Damage from Special Attack: Whirlwind increases by 20% and its charge speed increases by 50%.\nSpecial Attack Damage increases by 15%.\nSpecial Attack: Whirlwind is immediately charged, and Special Attack Speed decreases by 15%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-15",
    "name": "Loving Gaze",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "WUP-11",
    "children": [],
    "slug": "loving-gaze",
    "effectCurrent": "Damage from Special Attack: Whirlwind increases by 20% and its charge speed increases by 50%.\nIncreases Critical Chance of Special Attack: Whirlwind by 100% and Special Attack Speed by 50%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-16",
    "name": "Swift Regret",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-12",
    "children": [],
    "slug": "swift-regret",
    "effectCurrent": "Special Attack: Whirlwind charge time increases by 100%, but Normal Attack Damage increases by 20%.\nYou can swing the final attack of the Normal Attack 2 additional times. Increases Normal Attack damage by 10%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-17",
    "name": "Troubling Delight",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1117",
      "upgrade-1118",
      "upgrade-1120"
    ],
    "slug": "troubling-delight",
    "effectCurrent": "Weapon Attack is changed to a form that uses Laser.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1100",
    "name": "Wooden Club",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1101",
      "WUP-14"
    ],
    "slug": "wooden-club",
    "effectCurrent": "Dash attack can no longer be used, but damage dealt by Normal Attack is increased by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1101",
    "name": "Spike Club",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1100",
    "children": [],
    "slug": "spike-club",
    "effectCurrent": "Dash attack can no longer be used, but damage dealt by Normal Attack is increased by 20%.\nFires 3 piercing spikes upon a Critical Damage hit with a Weapon Attack. An additional spike is added for every 20% extra critical damage of the attack. (Damage: 26% of Physical Damage)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1102",
    "name": "Bone Gearblade",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1103",
      "WUP-05"
    ],
    "slug": "bone-gearblade",
    "effectCurrent": "Special Attack changes to Special Attack: Reassemble. Attack Speed gradually increases on Normal Attack. (Up to 35%, resets when you stop attacking)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1103",
    "name": "Creaking Spine",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1102",
    "children": [],
    "slug": "creaking-spine",
    "effectCurrent": "Special Attack changes to Special Attack: Reassemble. Attack Speed gradually increases on Normal Attack. (Up to 35%, resets when you stop attacking)\nThe attack range of Special Attack: Reassemble is increased, and attacks deal additional damage to the target. (Additional Damage: 15 + Defense 50%)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1104",
    "name": "Frostbound Greatsword",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1105",
      "upgrade-1106",
      "WUP-13"
    ],
    "slug": "frostbound-greatsword",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Cold Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1105",
    "name": "Eternal Frost Greatsword",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1104",
    "children": [],
    "slug": "eternal-frost-greatsword",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Cold Damage.\nAdditional Cold Damage increases from 30% to 55%.\nNormal Attack range increases, and basic combo becomes 15% faster (based on total time).",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1106",
    "name": "Icicle Sword",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1104",
    "children": [],
    "slug": "icicle-sword",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Cold Damage.\nWeapon Attack has a 80% chance to inflict Frostbite. Increases Freeze damage by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1107",
    "name": "Crimson Thorn",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1108",
      "upgrade-1115"
    ],
    "slug": "crimson-thorn",
    "effectCurrent": "Attacks the target and inflicts Wound.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1108",
    "name": "Crimson Vortex",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1107",
    "children": [],
    "slug": "crimson-vortex",
    "effectCurrent": "Attacks the target and inflicts Wound.\nChanges Normal Attack and Dash attack to 3-hit combos. The damage of each hit is adjusted to 40% of the original damage. The maximum stacks of Wound increase by 6.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1109",
    "name": "Lightning Greatsword \"E3G\"",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1112",
    "children": [],
    "slug": "lightning-greatsword-e3g",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Lightning Damage.\nEvery 5 attacks, gain 5 Storm Cloud stacks. When using Special Attack: Whirlwind, gain a buff that increases Consumption Speed of Storm Cloud by 100% for 10 seconds. (Max 5 stacks)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1112",
    "name": "Lightning Greatsword \"E2G\"",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "upgrade-1109",
      "WUP-12"
    ],
    "slug": "lightning-greatsword-e2g",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Lightning Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-12",
    "name": "Lightning Greatsword \"S3G\"",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1112",
    "children": [],
    "slug": "lightning-greatsword-s3g"
  },
  {
    "key": "WUP-13",
    "name": "Greatsword of Exorcism",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1104",
    "children": [],
    "slug": "greatsword-of-exorcism"
  },
  {
    "key": "upgrade-1115",
    "name": "The Inquisitor",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1107",
    "children": [],
    "slug": "the-inquisitor",
    "effectCurrent": "Attacks the target and inflicts Wound.\nPhysical Damage dealt with Weapon is applied as Chaos. Special Attack: Whirlwind is changed to Special Attack: Wound Explosion.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1117",
    "name": "Legacy of the Illusionist",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-17",
    "children": [],
    "slug": "legacy-of-the-illusionist",
    "effectCurrent": "Weapon Attack is changed to a form that uses Laser.\nGrimoire Haste increases by 50%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1118",
    "name": "Pristine Form",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-17",
    "children": [],
    "slug": "pristine-form",
    "effectCurrent": "Weapon Attack is changed to a form that uses Laser.\nNormal Attack and Dash attack lasers become larger and damage is increased by 25%.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-14",
    "name": "Mischievous Prank",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1100",
    "children": [],
    "slug": "mischievous-prank"
  },
  {
    "key": "upgrade-1120",
    "name": "Lazarion",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-17",
    "children": [],
    "slug": "lazarion",
    "effectCurrent": "Weapon Attack is changed to a form that uses Laser.\nSpecial Attack: Whirlwind is changed to Special Attack: Amethyst Conjuration.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1122",
    "name": "The Emberforged",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 1,
    "parent": "WPN-02",
    "children": [
      "WUP-15",
      "WUP-16"
    ],
    "slug": "the-emberforged",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Fire Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-15",
    "name": "Red Snake Crush",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1122",
    "children": [],
    "slug": "red-snake-crush"
  },
  {
    "key": "WUP-16",
    "name": "Solis Cineris",
    "weapon": "Greatsword",
    "weaponAnchor": "greatsword",
    "depth": 2,
    "parent": "upgrade-1122",
    "children": [],
    "slug": "solis-cineris"
  },
  {
    "key": "upgrade-119",
    "name": "Kagumede",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-120",
      "upgrade-121"
    ],
    "slug": "kagumede",
    "effectCurrent": "Attacks the target and inflicts Poison.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-120",
    "name": "Kalim's Form",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-119",
    "children": [],
    "slug": "kalim-s-form",
    "effectCurrent": "Attacks the target and inflicts Poison.\nHeita’s Spirit Powder, Tero’s Spirit Powder, Ahmad’s Spirit Powder attack twice and deal 25% more damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-121",
    "name": "Purple Jacket",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-119",
    "children": [],
    "slug": "purple-jacket",
    "effectCurrent": "Attacks the target and inflicts Poison.\nPoison stack increases by 3.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-122",
    "name": "M-9199",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-123",
      "WUP-06"
    ],
    "slug": "m-9199",
    "effectCurrent": "Normal Attack Pierces enemies and increases damage by 15%. Special Attack is changed to ‘Special Attack: Ammo Compression’.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-123",
    "name": "XRA-9",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-122",
    "children": [],
    "slug": "xra-9",
    "effectCurrent": "Normal Attack Pierces enemies and increases damage by 15%. Special Attack is changed to ‘Special Attack: Ammo Compression’.\nWhen using the last bullet with a normal attack, the current cooldown of all Grimoire and Active Artifact is reduced by 25%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-124",
    "name": "Solis Iubar",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-108",
    "children": [],
    "slug": "solis-iubar",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Fire Damage.\nWeapon Damage decreases by 15%, but Solar Blade Damage increases by 35%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-125",
    "name": "Bounty Hunter",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-101",
    "children": [],
    "slug": "bounty-hunter",
    "effectCurrent": "Normal Attack damage is reduced by 45% Special Attack is changed to 'Advanced Reload'.\nThe magazine is fixed at 6 rounds and reloads instantly when using Dash.\nDash attack is disabled, and damage increases by 7% for every point of Dash Count.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-126",
    "name": "Minigun",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-110",
    "children": [],
    "slug": "minigun",
    "effectCurrent": "When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'.\nLightning Arrow firing chance increases by 10%. Special Attack changes to Special Attack: Barrage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-127",
    "name": "The Barnacle",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-104",
    "children": [],
    "slug": "the-barnacle",
    "effectCurrent": "Normal Attack is changed to Normal Attack: Blast Shot, and damage is increased by 80%.\nOn Normal Attack and Dash attack, attaches Sticky Bomb. Special Attack changes to Special Attack: Explosion.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-06",
    "name": "M-9200",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-122",
    "children": [],
    "slug": "m-9200"
  },
  {
    "key": "WPN-03",
    "name": "Crossbow",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 0,
    "parent": null,
    "children": [
      "upgrade-101",
      "upgrade-104",
      "upgrade-106",
      "upgrade-108",
      "upgrade-110",
      "upgrade-112",
      "upgrade-119",
      "upgrade-122"
    ],
    "slug": "crossbow"
  },
  {
    "key": "upgrade-101",
    "name": "Colossal Crossbow: Reload Device",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-102",
      "upgrade-103",
      "upgrade-125"
    ],
    "slug": "colossal-crossbow-reload-device",
    "effectCurrent": "Normal Attack damage is reduced by 45% Special Attack is changed to 'Advanced Reload'.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-102",
    "name": "Colossal Crossbow: Acceleration Core",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-101",
    "children": [],
    "slug": "colossal-crossbow-acceleration-core",
    "effectCurrent": "Normal Attack damage is reduced by 45% Special Attack is changed to 'Advanced Reload'.\nAs you attack, Attack Speed stacks up, adding up to +60% to your base Attack Speed.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-103",
    "name": "Crossbow: Twin",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-101",
    "children": [],
    "slug": "crossbow-twin",
    "effectCurrent": "Normal Attack damage is reduced by 45% Special Attack is changed to 'Advanced Reload'.\nNormal Attack fires two projectiles and allows slightly more freedom of movement during the attack. Fire rate increases by the amount of Move Speed increase.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-104",
    "name": "Colossal Crossbow: Scattershot Shooter",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-105",
      "upgrade-116",
      "upgrade-127"
    ],
    "slug": "colossal-crossbow-scattershot-shooter",
    "effectCurrent": "Normal Attack is changed to Normal Attack: Blast Shot, and damage is increased by 80%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-105",
    "name": "Colossal Crossbow: Gunpowder Synthesis",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-104",
    "children": [],
    "slug": "colossal-crossbow-gunpowder-synthesis",
    "effectCurrent": "Normal Attack is changed to Normal Attack: Blast Shot, and damage is increased by 80%.\nIncrease Critical Chance of Weapon Attack by 35% and recharge 1 bullets if the attack hits critically.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-106",
    "name": "Colossal Crossbow: Enhanced Special Bolts",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-117"
    ],
    "slug": "colossal-crossbow-enhanced-special-bolts",
    "effectCurrent": "The attack range of Special Attack: Power Arrow is increased, and damage is increased by 30%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-108",
    "name": "Colossal Crossbow: Fire Mine",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-109",
      "upgrade-118",
      "upgrade-124"
    ],
    "slug": "colossal-crossbow-fire-mine",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Fire Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-109",
    "name": "Colossal Crossbow: Equipped with Guidance Module",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-108",
    "children": [],
    "slug": "colossal-crossbow-equipped-with-guidance-module",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Fire Damage.\nThe cost of Special Attack is reduced to 3, and damage increases by 0.9% per Additional MP. Special Attack tracks nearby enemies.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-110",
    "name": "Colossal Crossbow: Unstable Lightning Mark",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "upgrade-111",
      "upgrade-115",
      "upgrade-126"
    ],
    "slug": "colossal-crossbow-unstable-lightning-mark",
    "effectCurrent": "When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-111",
    "name": "Colossal Crossbow: Mark Stabilization",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-110",
    "children": [],
    "slug": "colossal-crossbow-mark-stabilization",
    "effectCurrent": "When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'.\nApplies Electrocution debuff on hit with 'Lightning Arrow'. Electrocution damage increased by 25%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-112",
    "name": "Colossal Crossbow: Frost Veil",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 1,
    "parent": "WPN-03",
    "children": [
      "WUP-17",
      "upgrade-114"
    ],
    "slug": "colossal-crossbow-frost-veil",
    "effectCurrent": "Special Attack is replaced with 'Frost Veil'.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-17",
    "name": "Colossal Crossbow: Rapid Freeze Crystal",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-112",
    "children": [],
    "slug": "colossal-crossbow-rapid-freeze-crystal"
  },
  {
    "key": "upgrade-114",
    "name": "Colossal Crossbow: Expansion Device",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-112",
    "children": [],
    "slug": "colossal-crossbow-expansion-device",
    "effectCurrent": "Special Attack is replaced with 'Frost Veil'.\nFires Frostbite projectiles that penetrate enemies while Frost Veil is active. \n[Magazine Capacity is fixed at 5 rounds]",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-115",
    "name": "Colossal Crossbow: Cloud Gatherer",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-110",
    "children": [],
    "slug": "colossal-crossbow-cloud-gatherer",
    "effectCurrent": "When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'.\nWhen the 'Lightning Arrow' hits an enemy, you gain 3 Storm Cloud points.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-116",
    "name": "Colossal Crossbow: Explosive Device",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-104",
    "children": [],
    "slug": "colossal-crossbow-explosive-device",
    "effectCurrent": "Normal Attack is changed to Normal Attack: Blast Shot, and damage is increased by 80%.\nDamage from Normal Attack is increased by 10%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-117",
    "name": "Colossal Crossbow: Rapid-Fire Device",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-106",
    "children": [],
    "slug": "colossal-crossbow-rapid-fire-device",
    "effectCurrent": "The attack range of Special Attack: Power Arrow is increased, and damage is increased by 30%.\nWhen Special Attack: Power Arrow is cast consecutively (within 2 seconds), it deals an additional 10% damage for each consecutive cast. (up to a maximum of 50%)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-118",
    "name": "Mini Cannon",
    "weapon": "Crossbow",
    "weaponAnchor": "crossbow",
    "depth": 2,
    "parent": "upgrade-108",
    "children": [],
    "slug": "mini-cannon",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Fire Damage.\nFire a Grenade Launch with Normal Attack. Its firing speed is not affected by Attack Speed, but its damage and area increase by 1% for each additional Attack Speed.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1210",
    "name": "Dark Veil",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1206",
    "children": [],
    "slug": "dark-veil",
    "effectCurrent": "Weapon Attack is changed to a form that uses Throw Shuriken.\nGain Dominate buff when using Weapon Attack",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1211",
    "name": "Tome of Mimicry",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1212",
    "children": [],
    "slug": "tome-of-mimicry",
    "effectCurrent": "The Special Attack: Parry MP cost becomes 0, and on a successful Special Attack: Parry recover 30% MP.\nSpecial Attack: Fury changes to Grimoire: Duplicate.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1212",
    "name": "Academy Enchanted Sword",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1211",
      "upgrade-1213"
    ],
    "slug": "academy-enchanted-sword",
    "effectCurrent": "The Special Attack: Parry MP cost becomes 0, and on a successful Special Attack: Parry recover 30% MP.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1213",
    "name": "Academy Magic Sword - Liberation",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1212",
    "children": [],
    "slug": "academy-magic-sword-liberation",
    "effectCurrent": "The Special Attack: Parry MP cost becomes 0, and on a successful Special Attack: Parry recover 30% MP.\nSpecial Attack: Fury changes to Special Attack: Liberation.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1214",
    "name": "Solis Imber",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1200",
    "children": [],
    "slug": "solis-imber",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 25% of Fire Damage.\nOn Special Attack: Fury hit, activate all Solar Blade. Artifact Meteorite Pauldrons deals 50% more damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1215",
    "name": "Dormant Frost",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1216",
      "upgrade-1217"
    ],
    "slug": "dormant-frost",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Cold Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1216",
    "name": "Frozen Smelt",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1215",
    "children": [],
    "slug": "frozen-smelt",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Cold Damage.\nCold Damage increases by 5. On Special Attack hit, applies Frostbite 1 times, and on Special Attack: Fury hit, applies it 2 additional times.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1217",
    "name": "Drífa",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1215",
    "children": [],
    "slug": "dr-fa",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Cold Damage.\nArtifact Blizzard Hammer is changed to “Blizzard Scythe.” Damage is reduced by 50%, but it flies to the targeted location and continuously strikes enemies.",
    "mechanicCurrent": null
  },
  {
    "key": "WPN-04",
    "name": "Dagger",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 0,
    "parent": null,
    "children": [
      "upgrade-22",
      "upgrade-23",
      "upgrade-1200",
      "WUP-18",
      "upgrade-1206",
      "upgrade-1208",
      "upgrade-1212",
      "upgrade-1215"
    ],
    "slug": "dagger"
  },
  {
    "key": "upgrade-22",
    "name": "Beyond the Threshold",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-26",
      "upgrade-27"
    ],
    "slug": "beyond-the-threshold",
    "effectCurrent": "Upon Dash attack, gain a buff for 10 seconds: Normal Attack damage +20% and Dash attack damage +30%. Disables Special Attack: Fury.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-23",
    "name": "Arid Breeze",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-28",
      "upgrade-29"
    ],
    "slug": "arid-breeze",
    "effectCurrent": "Damage from Special Attack: Fury increases by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-26",
    "name": "Lightless Blade",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-22",
    "children": [],
    "slug": "lightless-blade",
    "effectCurrent": "Upon Dash attack, gain a buff for 10 seconds: Normal Attack damage +20% and Dash attack damage +30%. Disables Special Attack: Fury.\nWhen a Dash charge is consumed, Dash attack changes to Dash Attack: Blade Prison",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-27",
    "name": "Absolute Envy",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-22",
    "children": [],
    "slug": "absolute-envy",
    "effectCurrent": "Upon Dash attack, gain a buff for 10 seconds: Normal Attack damage +20% and Dash attack damage +30%. Disables Special Attack: Fury.\nThe damage of the 3rd, 4th, and 5th Normal Attack is increased by 25%, and the staggering effect is enhanced.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-28",
    "name": "Creeping Despair",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-23",
    "children": [],
    "slug": "creeping-despair",
    "effectCurrent": "Damage from Special Attack: Fury increases by 20%.\nDamage of Special Attack: Fury increases by an additional 15%.\nSuccessfully executing Special Attack: Parry will recharge Trance twice.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-29",
    "name": "Harsh Trial",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-23",
    "children": [],
    "slug": "harsh-trial",
    "effectCurrent": "Damage from Special Attack: Fury increases by 20%.\nYou can no longer use Special Attack: Parry, but have a 30% chance to gain Trance when using Weapon Attack. (Trance can be charged up to 4 times)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1200",
    "name": "Fire Dagger",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1201",
      "upgrade-1214"
    ],
    "slug": "fire-dagger",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 25% of Fire Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1201",
    "name": "Heated Blade",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1200",
    "children": [],
    "slug": "heated-blade",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 25% of Fire Damage.\nSpecial Attack: Parry is replaced with Special Attack: Throw Dagger.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-18",
    "name": "Lightning Dagger",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1204",
      "upgrade-1205"
    ],
    "slug": "lightning-dagger"
  },
  {
    "key": "upgrade-1204",
    "name": "Overhanging Storm Cloud",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "WUP-18",
    "children": [],
    "slug": "overhanging-storm-cloud",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 25% of Lightning Damage.\nExtra Storm Cloud damage increases by 15%, Lightning Damage increases by 5.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1205",
    "name": "Lightning’s Wrath",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "WUP-18",
    "children": [],
    "slug": "lightning-s-wrath",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 25% of Lightning Damage.\nWhen using Weapon Attack, there's a 70% chance to apply an Electrocution debuff. Electrocution stacks increases by 1.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1206",
    "name": "Alpine Edelweiss",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1207",
      "upgrade-1210"
    ],
    "slug": "alpine-edelweiss",
    "effectCurrent": "Weapon Attack is changed to a form that uses Throw Shuriken.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1207",
    "name": "Adonis",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1206",
    "children": [],
    "slug": "adonis",
    "effectCurrent": "Weapon Attack is changed to a form that uses Throw Shuriken.\nThe Critical Damage dealt by Weapon Attack is amplified by 30%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1208",
    "name": "Jade Vestige",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 1,
    "parent": "WPN-04",
    "children": [
      "upgrade-1209"
    ],
    "slug": "jade-vestige",
    "effectCurrent": "You can no longer use Special Attack: Parry, but gain Trance every 2.8 seconds. (1% increased charge rate per Evasion, up to 33%)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-1209",
    "name": "Unbound Immersion",
    "weapon": "Dagger",
    "weaponAnchor": "dagger",
    "depth": 2,
    "parent": "upgrade-1208",
    "children": [],
    "slug": "unbound-immersion",
    "effectCurrent": "You can no longer use Special Attack: Parry, but gain Trance every 2.8 seconds. (1% increased charge rate per Evasion, up to 33%)\nFor every 1 Evasion, Trance’s charge speed increases by an additional 0.25%. The charge speed cap from Evasion is removed.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-404",
    "name": "Thunder Sword 'Bronte'",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-405",
      "WUP-07"
    ],
    "slug": "thunder-sword-bronte",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Lightning Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-405",
    "name": "Lightning Flash",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-404",
    "children": [],
    "slug": "lightning-flash",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Lightning Damage.\nGain 1 stack of 'Electric Charge' when dealing damage with Electrocution. (Max 10)\nConsume 2 stacks of 'Electric Charge' to perform Special Attack: Issen upon Special Attack: Heavy Slash.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-422",
    "name": "Solis Ekli",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-406",
    "children": [],
    "slug": "solis-ekli",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Fire Damage.\nSheath changes to Eclipse.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-423",
    "name": "Armor-Bender",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-424"
    ],
    "slug": "armor-bender",
    "effectCurrent": "Damage dealt by Normal Attack increases by 1% for every 2 of Defense.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-424",
    "name": "Breakplate Blade",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-423",
    "children": [],
    "slug": "breakplate-blade",
    "effectCurrent": "Damage dealt by Normal Attack increases by 1% for every 2 of Defense.\nWhile not Sheath, gain 1 stack of Hardening every 0.8 seconds.",
    "mechanicCurrent": null
  },
  {
    "key": "WUP-07",
    "name": "Cerulean Cloud Sword 'Arges'",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-404",
    "children": [],
    "slug": "cerulean-cloud-sword-arges"
  },
  {
    "key": "WPN-05",
    "name": "Blade",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 0,
    "parent": null,
    "children": [
      "upgrade-401",
      "upgrade-404",
      "upgrade-406",
      "upgrade-409",
      "upgrade-412",
      "upgrade-416",
      "upgrade-419",
      "upgrade-423"
    ],
    "slug": "blade"
  },
  {
    "key": "upgrade-401",
    "name": "Long Blade 'Onohara'",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-402",
      "upgrade-403"
    ],
    "slug": "long-blade-onohara",
    "effectCurrent": "Special Attack: Heavy Slash is affected by Attack Speed. Attack Speed increases by 15%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-402",
    "name": "Famed Sword 'Muramasa'",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-401",
    "children": [],
    "slug": "famed-sword-muramasa",
    "effectCurrent": "Special Attack: Heavy Slash is affected by Attack Speed. Attack Speed increases by 15%.\nAlways remains in Sheath state, and Special Attack: Heavy Slash changes to Special Attack: Swift Slash. The efficiency of Attack Speed is increased by 80%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-403",
    "name": "Beast Marks Sword 'Hou'",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-401",
    "children": [],
    "slug": "beast-marks-sword-hou",
    "effectCurrent": "Special Attack: Heavy Slash is affected by Attack Speed. Attack Speed increases by 15%.\nSpecial Attack: Heavy Slash's base Attack Speed is reduced by 24%, but it can hit distant enemies. Damage increases by 1% for every 1 Evasion.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-406",
    "name": "Helbanus",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-407",
      "upgrade-408",
      "upgrade-422"
    ],
    "slug": "helbanus",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Fire Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-407",
    "name": "Blazing Helbanus",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-406",
    "children": [],
    "slug": "blazing-helbanus",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Fire Damage.\nBurn stacks increases by 2, and Fire Damage increases by 4.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-408",
    "name": "Heidi",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-406",
    "children": [],
    "slug": "heidi",
    "effectCurrent": "When performing a Weapon Attack, deal additional damage to the target equal to 30% of Fire Damage.\nWhen consuming Dash Count, gain 1 'Overheat' stack. (1 by default, gain 3 when using Sheath, up to 12) Consumes 1 stack to empower Normal Attack.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-409",
    "name": "Rendblade: Heavenrend",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-410",
      "upgrade-411"
    ],
    "slug": "rendblade-heavenrend",
    "effectCurrent": "Gain Sword Strike through Normal Attack. Special Attack: Heavy Slash changes to Normal Attack: Iaido Slash.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-410",
    "name": "Rendblade: Drifting Willow",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-409",
    "children": [],
    "slug": "rendblade-drifting-willow",
    "effectCurrent": "Gain Sword Strike through Normal Attack. Special Attack: Heavy Slash changes to Normal Attack: Iaido Slash.\nCritical Chance increases by 30%, and the range of Normal Attack: Great Iaido Slash changes to a full attack.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-411",
    "name": "Rendblade: RuinDance",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-409",
    "children": [],
    "slug": "rendblade-ruindance",
    "effectCurrent": "Gain Sword Strike through Normal Attack. Special Attack: Heavy Slash changes to Normal Attack: Iaido Slash.\nYou cannot use Normal Attack: Great Iaido Slash, but when the Sword Strike gauge is at 100%, you gain the Barrage buff.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-412",
    "name": "The Awaiting Azureblade",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-413",
      "upgrade-414"
    ],
    "slug": "the-awaiting-azureblade",
    "effectCurrent": "Continuously gain 'Blade Slash' when Sheath. Consumes 10 Blade Slash when casting magic to increase Grimoire Damage by 20%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-413",
    "name": "Yui's Short Dagger",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-412",
    "children": [],
    "slug": "yui-s-short-dagger",
    "effectCurrent": "Continuously gain 'Blade Slash' when Sheath. Consumes 10 Blade Slash when casting magic to increase Grimoire Damage by 20%.\nGrimoire Critical Chance increases by 30%.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-414",
    "name": "Adamah’s Oath",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-412",
    "children": [],
    "slug": "adamah-s-oath",
    "effectCurrent": "Continuously gain 'Blade Slash' when Sheath. Consumes 10 Blade Slash when casting magic to increase Grimoire Damage by 20%.\nSummons a 'Magic Blade' that flies towards the enemy and deals damage when magic is used. (Damage: 20 + 70% of empty MP amount)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-416",
    "name": "Library Spectral Sealing Society Mark I",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-417"
    ],
    "slug": "library-spectral-sealing-society-mark-i",
    "effectCurrent": "Dash Attack Damage increases by 40%, and when Dash Count is consumed, a spirit performs Dash attack on nearby enemies twice. (Cooldown: 2.5 seconds)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-417",
    "name": "Library Spectral Sealing Society Mark II",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-416",
    "children": [],
    "slug": "library-spectral-sealing-society-mark-ii",
    "effectCurrent": "Dash Attack Damage increases by 40%, and when Dash Count is consumed, a spirit performs Dash attack on nearby enemies twice. (Cooldown: 1 seconds)\nThe cooldown of the spirit's Dash attack is changed to 1 second and is reduced by 10% for each Dash Count.\nThe invincibility duration of Sheath is increased by 50%, and if an attack is blocked, the spirit performs the Dash attack equal to Dash Count.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-419",
    "name": "Winter Smith's Draftblade",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 1,
    "parent": "WPN-05",
    "children": [
      "upgrade-420",
      "upgrade-421"
    ],
    "slug": "winter-smith-s-draftblade",
    "effectCurrent": "Sheath is replaced with Tackle. Adds additional damage equal to 15% of Cold Damage on Weapon Attack. Cold Damage is increased by 3.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-420",
    "name": "Silence of Everfrost",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-419",
    "children": [],
    "slug": "silence-of-everfrost",
    "effectCurrent": "Sheath is replaced with Tackle. Adds additional damage equal to 15% of Cold Damage on Weapon Attack. Cold Damage is increased by 3.\nTackle changes to Special Attack: Ice Sliding. Blocking enemy attacks during invincibility triggers the artifact Echo of the Glacier immediately. Upon activation, it deals damage to nearby enemies. (Damage: 120% of Cold Damage)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-421",
    "name": "Fragment of Nastrond",
    "weapon": "Blade",
    "weaponAnchor": "blade",
    "depth": 2,
    "parent": "upgrade-419",
    "children": [],
    "slug": "fragment-of-nastrond",
    "effectCurrent": "Sheath is replaced with Tackle. Adds additional damage equal to 15% of Cold Damage on Weapon Attack. Cold Damage is increased by 3.\nAfter a Tackle action, it activates Frost Relic: Skaði when attacking.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-501",
    "name": "Flourish Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-502",
      "upgrade-503"
    ],
    "slug": "flourish-staff",
    "effectCurrent": "Normal Attack changes to Normal Attack: Flower Staff",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-502",
    "name": "Staff of Great Might",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-501",
    "children": [],
    "slug": "staff-of-great-might",
    "effectCurrent": "Normal Attack changes to Normal Attack: Flower Staff\nNormal Attack Damage increases by 30%, and while attacking, gain Shield equal to 5% of Defense. (Refreshes every 20 sec.)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-503",
    "name": "Ilonica's Spirit Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-501",
    "children": [],
    "slug": "ilonica-s-spirit-staff",
    "effectCurrent": "Normal Attack changes to Normal Attack: Flower Staff\nCannot directly cast any Grimoire. Normal Attack: Flower Staff changes to Grimoire: Bolt Barrage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-505",
    "name": "Divine Iron Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-506",
      "upgrade-507"
    ],
    "slug": "divine-iron-staff",
    "effectCurrent": "Gain Extend Staff buff on Weapon Attack.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-506",
    "name": "Weight of the Sea",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-505",
    "children": [],
    "slug": "weight-of-the-sea",
    "effectCurrent": "Gain Extend Staff buff on Weapon Attack.\nUpon Block success, gain Heavy Staff buff.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-507",
    "name": "Ringless Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-505",
    "children": [],
    "slug": "ringless-staff",
    "effectCurrent": "Gain Extend Staff buff on Weapon Attack.\nIf Critical Chance is below 30%, increase damage dealt by 20.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-509",
    "name": "Distant Starlight",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-510"
    ],
    "slug": "distant-starlight",
    "effectCurrent": "Increase the damage of Special Attack: Riposte by 20%. If Max MP is at least 100, Block in all directions while using Special Attack: Riposte.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-510",
    "name": "Scale of the Astral Sea",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-509",
    "children": [],
    "slug": "scale-of-the-astral-sea",
    "effectCurrent": "Increase the damage of Special Attack: Riposte by 20%. If Max MP is at least 100, Block in all directions while using Special Attack: Riposte.\nAfter a successful Block, use 'Crystal Explosion' on Normal Attack.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-513",
    "name": "Georoid Spear",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-514",
      "upgrade-515"
    ],
    "slug": "georoid-spear",
    "effectCurrent": "You can use Normal Attack: Spear Thrust and Dash attack: Spear Attack.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-514",
    "name": "Ruadhslea Spear",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-513",
    "children": [],
    "slug": "ruadhslea-spear",
    "effectCurrent": "You can use Normal Attack: Spear Thrust and Dash attack: Spear Attack.\nAttack Speed increases by 10%. Damage increases by 5% for every point of Dash Count attribute when attacking with a weapon.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-515",
    "name": "Fuarsca Spear",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-513",
    "children": [],
    "slug": "fuarsca-spear",
    "effectCurrent": "You can use Normal Attack: Spear Thrust and Dash attack: Spear Attack.\nBlock granted when casting Dash attack: Spear Attack, and damage increases by 30% for each Dash charge consumed beforehand. (Up to 6 times)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-517",
    "name": "Staff of Embers",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-518",
      "upgrade-519"
    ],
    "slug": "staff-of-embers",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Fire Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-518",
    "name": "Fiaola’s Judgment Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-517",
    "children": [],
    "slug": "fiaola-s-judgment-staff",
    "effectCurrent": "Weapon Attack damage is reduced by 15% and uses Fire Damage.",
    "mechanicCurrent": "Applying Burn creates a Ring of Fire that attacks nearby enemies."
  },
  {
    "key": "upgrade-519",
    "name": "Solis Braca",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-517",
    "children": [],
    "slug": "solis-braca",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Fire Damage.\nWhen retrieving Solar Blade, you will retrieve an additional 1. Special Attack is changed to Special Attack: Solar Spear Forging.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-521",
    "name": "Staff of Rime",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-522",
      "upgrade-523"
    ],
    "slug": "staff-of-rime",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Cold Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-522",
    "name": "Oracle’s Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-521",
    "children": [],
    "slug": "oracle-s-staff",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Cold Damage.\nActivate artifact Voluspa in the aimed direction after hitting Weapon Attack 3 times.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-523",
    "name": "Malaspina",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-521",
    "children": [],
    "slug": "malaspina",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Cold Damage.\nWhen Weapon Attack, 30% chance to apply Frostbite. Cold Damage increases by 5.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-525",
    "name": "Staff of Storms",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-526",
      "upgrade-528"
    ],
    "slug": "staff-of-storms",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Lightning Damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-526",
    "name": "Viduka",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-525",
    "children": [],
    "slug": "viduka",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Lightning Damage.\nDamage dealt by Electro Chakram increases by 20%, and its rotation radius extends to the crosshair.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-528",
    "name": "Nephorhax",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-525",
    "children": [],
    "slug": "nephorhax",
    "effectCurrent": "Damage dealt by Weapon Attack is reduced by 15%, but it is changed to Lightning Damage.\nDash attack is changed to Throw Cloud Bottle. On hit with Dash attack, Storm Cloud is immediately triggered on the target for 70% damage.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-529",
    "name": "Javelin",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 1,
    "parent": "WPN-06",
    "children": [
      "upgrade-530",
      "upgrade-531",
      "upgrade-532"
    ],
    "slug": "javelin",
    "effectCurrent": "Normal Attack changes to Normal Attack: Throwing Spear, and Weapon Damage increases by 10.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-530",
    "name": "Sacred Jar",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-529",
    "children": [],
    "slug": "sacred-jar",
    "effectCurrent": "Normal Attack changes to Normal Attack: Throwing Spear, and Weapon Damage increases by 10.\nNormal Attack combines Companion Damage stats.\nNormal Attack has a 20% chance to summon a Carrot Soldier.",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-531",
    "name": "Formless Dance",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-529",
    "children": [],
    "slug": "formless-dance",
    "effectCurrent": "Normal Attack changes to Normal Attack: Throwing Spear, and Weapon Damage increases by 10.\nNormal Attack lures enemies and has a chance to fire twice. (Increases by 0.85% per 1 Evasion)",
    "mechanicCurrent": null
  },
  {
    "key": "upgrade-532",
    "name": "Successor",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 2,
    "parent": "upgrade-529",
    "children": [],
    "slug": "successor",
    "effectCurrent": "Normal Attack changes to Normal Attack: Throwing Spear, and Weapon Damage increases by 10.\nInflicts Magic Wound on Weapon hit.",
    "mechanicCurrent": null
  },
  {
    "key": "WPN-06",
    "name": "Staff",
    "weapon": "Staff",
    "weaponAnchor": "staff",
    "depth": 0,
    "parent": null,
    "children": [
      "upgrade-501",
      "upgrade-505",
      "upgrade-509",
      "upgrade-513",
      "upgrade-517",
      "upgrade-521",
      "upgrade-525",
      "upgrade-529"
    ],
    "slug": "staff"
  }
];

export const sephiriaWeaponTree: SephiriaWeaponTreeNode[] = entries.map((entry) => {
  const facts = sephiriaWeaponUpgradeFacts[entry.key];
  return {
    ...entry,
    effectCurrent: facts?.effectCurrent ?? entry.effectCurrent ?? null,
    mechanicCurrent: facts?.mechanicCurrent ?? entry.mechanicCurrent ?? null,
    image: sephiriaImageManifest[entry.key]!,
  };
});

export const sephiriaWeaponRoots = sephiriaWeaponTree.filter((node) => node.depth === 0);
