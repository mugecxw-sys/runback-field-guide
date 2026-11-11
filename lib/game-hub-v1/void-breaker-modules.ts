import type { ModuleEntry } from '@/components/game-hub-v1/module-detail';
import { importedModules } from './void-breaker-modules-b';

export const moduleTypes = [
  'Weapon Mod',
  'Body Mod',
  'Projectile Mod',
  'Digisword Mod',
  'Ability Mod',
  'Utility Mod',
  'Optic Mod',
  'Fire Mode',
] as const;
export type ModuleType = (typeof moduleTypes)[number];

export type VoidBreakerModule = ModuleEntry & {
  slug: string;
  type: ModuleType;
  icon: NonNullable<ModuleEntry['icon']>;
};

const icon = (name: string) => ({
  src: '/images/games/void-breaker/modules/' + name + '.png',
  alt: '',
});

// Types are cross-checked against the export pools and historical game cards.
// Percentages preserve display_stat_changes text from modules_full.json.
const existingModules: readonly VoidBreakerModule[] = [
  {
    slug: 'airborne-accuracy',
    title: 'Airborne Accuracy',
    type: 'Weapon Mod',
    summary: 'Increases accuracy when airborne.',
    icon: icon('T_UI_Icon_AirFlow'),
    moduleEffects: [
      { label: 'Effect', value: 'Accuracy +100%' },
      { label: 'Activation', value: 'While airborne' },
    ],
  },
  {
    slug: 'charge-fury-interface',
    title: 'Charge Fury Interface',
    type: 'Body Mod',
    summary: 'Deal additional damage whilst ability is charging',
    icon: icon('T_UI_ChargeFury'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +25%' },
      { label: 'Activation', value: 'While ability is charging' },
    ],
  },
  {
    slug: 'crisis-spike',
    title: 'Crisis Spike',
    type: 'Body Mod',
    summary: 'Increased damage when at low health',
    icon: icon('T_UI_Icon_PrimeBoost'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +50%' },
      { label: 'Activation', value: 'At low health' },
    ],
  },
  {
    slug: 'fire-piercer',
    title: 'Fire Piercer',
    type: 'Body Mod',
    summary: 'Increased damage to burning targets',
    icon: icon('T_UI_Icon_Fire_02'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +25%' },
      { label: 'Activation', value: 'Against burning targets' },
    ],
  },
  {
    slug: 'ice-piercer',
    title: 'Ice Piercer',
    type: 'Body Mod',
    summary: 'Increased damage to frozen targets',
    icon: icon('T_UI_Icon_Ice'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +25%' },
      { label: 'Activation', value: 'Against frozen targets' },
    ],
  },
  {
    slug: 'electric-shot',
    title: 'Electric Shot',
    type: 'Projectile Mod',
    summary: 'A powerful projectile imbued with electricity',
    icon: icon('T_UI_Icon_ElectricShot'),
  },
  {
    slug: 'flatline',
    title: 'Flatline',
    type: 'Weapon Mod',
    summary: 'Removes all vertical recoil, but increases horizontal recoil',
    icon: icon('T_UI_Icon_Flatline'),
  },
  {
    slug: 'fastmag-module',
    title: 'Fastmag Module',
    type: 'Weapon Mod',
    summary: 'Increases reload speed',
    icon: icon('T_UI_Icon_FastMag'),
    moduleEffects: [{ label: 'Effect', value: 'Reload Time -30%' }],
  },
  {
    slug: 'recoil-dampener',
    title: 'Recoil Dampener',
    type: 'Weapon Mod',
    summary: 'Reduces weapon recoil',
    icon: icon('T_UI_Icon_RecoilDecrease'),
    moduleEffects: [{ label: 'Effect', value: 'Handling +30%' }],
  },
  {
    slug: 'stock-grip',
    title: 'Stock Grip',
    type: 'Weapon Mod',
    summary: 'Increases weapon accuracy, but increases recoil',
    icon: icon('T_UI_Icon_StockGrip'),
    moduleEffects: [{ label: 'Effect', value: 'Accuracy +35%, Handling -30%' }],
  },
  // A-grade additions verified against the build 26439385 import bundle.
  {
    slug: 'bandolier',
    title: 'BANDOLIER',
    type: 'Weapon Mod',
    summary: 'Greatly increases magazine size',
    icon: icon('T_UI_Icon_Bandolier'),
    moduleEffects: [{ label: 'Effect', value: 'Magazine Size +60%' }],
  },
  {
    slug: 'crit-drive',
    title: 'CRIT DRIVE',
    type: 'Weapon Mod',
    summary: 'Increased critical damage',
    icon: icon('T_UI_Icon_CritAmp'),
    moduleEffects: [{ label: 'Effect', value: 'Critical Damage +12%' }],
  },
  {
    slug: 'crit-drive-plus',
    title: 'CRIT DRIVE PLUS',
    type: 'Weapon Mod',
    summary: 'Greatly increased critical damage',
    icon: icon('T_UI_Icon_CritAmp'),
    moduleEffects: [{ label: 'Effect', value: 'Critical Damage +25%' }],
  },
  {
    slug: 'damage-surge-relay',
    title: 'DAMAGE SURGE RELAY',
    type: 'Body Mod',
    summary: 'Temporarily increase damage after receiving damage',
    icon: icon('T_UI_Icon_DamageSurge'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +100%' },
      { label: 'Activation', value: 'After taking damage' },
    ],
  },
  {
    slug: 'dash-spike-chip',
    title: 'DASH SPIKE CHIP',
    type: 'Body Mod',
    summary: 'Increases damage for a period after dashing',
    icon: icon('T_Icon_Dash'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +25%' },
      { label: 'Activation', value: 'After dashing' },
    ],
  },
  {
    slug: 'drop-matrix',
    title: 'Drop Matrix',
    type: 'Digisword Mod',
    summary: 'Increases melee damage when airborne',
    icon: icon('T_UI_Icon_DropMatrix'),
    moduleEffects: [
      { label: 'Effect', value: 'Melee Damage +50%' },
      { label: 'Activation', value: 'While airborne' },
    ],
  },
  {
    slug: 'extended-mag',
    title: 'EXTENDED MAG',
    type: 'Weapon Mod',
    summary: 'Slightly increases magazine size.',
    icon: icon('T_UI_Icon_Bandolier'),
    moduleEffects: [{ label: 'Effect', value: 'Magazine Size +20%' }],
  },
  {
    slug: 'fire-rate-increase',
    title: 'FIRE RATE INCREASE',
    type: 'Weapon Mod',
    summary: 'Increases fire rate of weapon',
    icon: icon('T_UI_Icon_Revved'),
    moduleEffects: [{ label: 'Effect', value: 'Fire Rate +30%' }],
  },
  {
    slug: 'focused-strike',
    title: 'Focused Strike',
    type: 'Digisword Mod',
    summary: 'Holding melee will produce a more damaging attack',
    icon: icon('T_UI_Icon_FocusedStrike'),
    moduleEffects: [
      { label: 'Effect', value: 'Melee Damage +60%' },
      { label: 'Activation', value: 'Hold the melee input' },
    ],
  },
  {
    slug: 'grenade-amp',
    title: 'GRENADE AMP',
    type: 'Body Mod',
    summary: 'Increases grenade damage',
    icon: icon('T_UI_Icon_GrenadeAmp'),
    moduleEffects: [{ label: 'Effect', value: 'Grenade Damage +15%' }],
  },
  {
    slug: 'high-caliber',
    title: 'HIGH CALIBER',
    type: 'Weapon Mod',
    summary: 'Slightly increases damage but slightly decreases fire rate',
    icon: icon('T_UI_Icon_Caliber'),
    moduleEffects: [{ label: 'Effect', value: 'Fire Rate -25%' }],
  },
  {
    slug: 'impact-spread',
    title: 'IMPACT SPREAD',
    type: 'Weapon Mod',
    summary: 'Greatly decreases accuracy. But increases hip-fire damage',
    icon: icon('T_UI_Icon_ImpactSpread'),
    moduleEffects: [{ label: 'Effect', value: 'Accuracy -100%' }],
  },
  {
    slug: 'inertia-breach',
    title: 'INERTIA BREACH',
    type: 'Weapon Mod',
    summary: 'Increases weapon damage but also increases recoil',
    icon: icon('T_UI_Icon_IntertiaBreach'),
    moduleEffects: [{ label: 'Effect', value: 'Handling -35%' }],
  },
  {
    slug: 'knee-breaker',
    title: 'KNEE/BREAKER',
    type: 'Digisword Mod',
    summary: 'Increases melee damage when sliding',
    icon: icon('T_UI_Icon_KNEEBREAKER'),
    moduleEffects: [
      { label: 'Effect', value: 'Melee Damage +75%' },
      { label: 'Activation', value: 'While sliding' },
    ],
  },
  {
    slug: 'lasor',
    title: 'LASOR',
    type: 'Weapon Mod',
    summary:
      'Greatly increases projectile damage, but greatly reduces fire rate',
    icon: icon('T_UI_Icon_LASOR'),
    moduleEffects: [{ label: 'Effect', value: 'Fire Rate -25%' }],
  },
  {
    slug: 'last-chance',
    title: 'LAST CHANCE',
    type: 'Body Mod',
    summary: 'Greatly increased damage when at low health',
    icon: icon('T_UI_Icon_PrimeBoost'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +100%' },
      { label: 'Activation', value: 'At low health' },
    ],
  },
  {
    slug: 'night-stim-exe',
    title: 'NIGHT_STIM.exe',
    type: 'Weapon Mod',
    summary: 'Increases damage and fire rate during night time hours',
    icon: icon('T_UI_Icon_NightStim'),
    moduleEffects: [
      { label: 'Effect', value: 'Fire Rate +40%, Damage +30%' },
      { label: 'Activation', value: 'During nighttime hours' },
    ],
  },
  {
    slug: 'orb-e',
    title: 'ORB-E',
    type: 'Weapon Mod',
    summary:
      'Greatly increases projectile damage, but greatly decreases velocity',
    icon: icon('T_UI_OrbE'),
    moduleEffects: [{ label: 'Effect', value: 'Projectile Velocity -40%' }],
  },
  {
    slug: 'precision-enhancer',
    title: 'PRECISION ENHANCER',
    type: 'Weapon Mod',
    summary: 'Increases weapon accuracy',
    icon: icon('T_UI_Icon_Precision'),
    moduleEffects: [{ label: 'Effect', value: 'Accuracy +40%' }],
  },
  {
    slug: 'prime-boost',
    title: 'PRIME BOOST',
    type: 'Body Mod',
    summary: 'Increased damage when at full health',
    icon: icon('T_UI_Icon_PrimeBoost'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +25%' },
      { label: 'Activation', value: 'At full health' },
    ],
  },
  {
    slug: 'recnul-module',
    title: 'RECNUL MODULE',
    type: 'Weapon Mod',
    summary: 'Nullifies weapon recoil',
    icon: icon('T_UI_Icon_Recnul'),
    moduleEffects: [{ label: 'Effect', value: 'Handling +200%' }],
  },
  {
    slug: 'shortened-muzzle',
    title: 'SHORTENED MUZZLE',
    type: 'Weapon Mod',
    summary: 'Increases weapon damage but reduces accuracy',
    icon: icon('T_UI_Icon_ShortenedMuzzle'),
    moduleEffects: [{ label: 'Effect', value: 'Accuracy -80%' }],
  },
  {
    slug: 'stagger-focus-driver',
    title: 'STAGGER FOCUS DRIVER',
    type: 'Body Mod',
    summary: 'Extra damage to staggered enemies',
    icon: icon('T_UI_Icon_StaggerFocus'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +20%' },
      { label: 'Activation', value: 'Against staggered enemies' },
    ],
  },
  {
    slug: 'strike-enhancer',
    title: 'STRIKE ENHANCER',
    type: 'Digisword Mod',
    summary: 'Increases melee damage',
    icon: icon('T_UI_Icon_StrikeEnhancer'),
    moduleEffects: [{ label: 'Effect', value: 'Melee Damage +40%' }],
  },
  {
    slug: 'the-floor-is-l4va-uxd',
    title: 'THE-FLOOR_IS-L4VA.uxd',
    type: 'Body Mod',
    summary: 'Greatly increases all damage when not touching the ground',
    icon: icon('T_UI_Icon_Lava'),
    moduleEffects: [
      { label: 'Effect', value: 'Damage +125%' },
      { label: 'Activation', value: 'While airborne' },
    ],
  },
  {
    slug: 'velocity-up',
    title: 'VELOCITY UP',
    type: 'Weapon Mod',
    summary: 'Increases projectile velocity',
    icon: icon('T_UI_Icon_Velocity'),
    moduleEffects: [{ label: 'Effect', value: 'Projectile Velocity +100%' }],
  },
];

export const voidBreakerModules: readonly VoidBreakerModule[] = [
  ...existingModules,
  ...importedModules,
];
