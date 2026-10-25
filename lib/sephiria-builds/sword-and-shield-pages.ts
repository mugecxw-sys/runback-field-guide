import itemsDatabase from '@/public/data/sephiria-items-1.0.33.json';
import { sephiriaImageManifest } from '@/lib/sephiria-image-manifest';
import { siteUrl } from '@/lib/repo-guide-pages';

export type LocalBuildImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SephiriaSwordShieldBuildPageData = {
  buildId: 'SNS-04' | 'SNS-06';
  href: string;
  subtitle: string;
  description: string;
  intro: string;
  mainDamage: string;
  costumeImage: LocalBuildImage;
  weaponRoute: { label: string; image: LocalBuildImage }[];
  setup: { title: string; lines: string[]; image?: LocalBuildImage }[];
  coreItems: {
    name: string;
    effectiveLevel: number;
    role: string;
    image: LocalBuildImage;
  }[];
  damageHeading: string;
  damageSteps: { title: string; detail: string }[];
  videoPath: string;
  relatedGuides: { href: string; title: string }[];
};

const itemMap = new Map(
  (itemsDatabase.items as (typeof itemsDatabase.items)[number][]).map((item) => [
    Number(item.id),
    item,
  ]),
);

function itemImage(id: number): LocalBuildImage {
  const item = itemMap.get(id);
  if (!item?.image?.src) throw new Error(`Missing verified item image for ${id}`);
  return {
    src: item.image.src,
    alt: item.displayName,
    width: item.image.width,
    height: item.image.height,
  };
}

function upgradeImage(key: string): LocalBuildImage {
  const image = sephiriaImageManifest[key];
  if (!image) throw new Error(`Missing local Sephiria image ${key}`);
  return image;
}

const costume = upgradeImage('CST-02');
const shieldmate = itemImage(1034);
const fruitSkewer: LocalBuildImage = {
  src: '/images/games/sephiria/wiki/pre-run/fruit-skewer.webp',
  alt: 'Fruit Skewer',
  width: 50,
  height: 50,
};
const talents = ['Survival 10', 'Swiftness 10', 'Wrath 10'];
const fruitAllocation = [
  'Adaptive ×1',
  'Sturdy ×3',
  'Wind Song ×1',
  'Precision ×1',
];
const commonSetup = () => [
  { title: 'Talent Setup', lines: [...talents] },
  { title: 'Starting Item', lines: ['Shieldmate'], image: shieldmate },
  { title: 'Fruit Skewer', lines: [...fruitAllocation], image: fruitSkewer },
];

function coreItem(
  id: number,
  effectiveLevel: number,
  role: string,
): SephiriaSwordShieldBuildPageData['coreItems'][number] {
  const item = itemMap.get(id);
  if (!item) throw new Error(`Missing verified core item ${id}`);
  return {
    name: item.displayName,
    effectiveLevel,
    role,
    image: itemImage(id),
  };
}

export const sns04Page: SephiriaSwordShieldBuildPageData = {
  buildId: 'SNS-04',
  href: '/games/sephiria/builds/sword-and-shield/indomitable-normal-attack-build',
  subtitle: 'Indomitable Normal Attack Build',
  description:
    'Sephiria Sword & Shield Indomitable Normal Attack build with its verified 1.0.33 preset, pre-run setup, core Artifacts, Tablet layout, and gameplay demo.',
  intro:
    'Indomitable makes Normal Attacks the damage plan: it adds Attack Speed and Normal Attack Damage, Blocks in front while attacking, and disables Cleave.',
  mainDamage: 'Normal Attack',
  costumeImage: costume,
  weaponRoute: [
    { label: 'Default Sword & Shield', image: upgradeImage('WPN-01') },
    { label: 'Perfect Balance', image: upgradeImage('upgrade-2') },
    { label: 'Indomitable', image: upgradeImage('upgrade-7') },
  ],
  setup: commonSetup(),
  coreItems: [
    coreItem(1262, 5, 'Normal Attack Damage +50%; Attack Speed −10%'),
    coreItem(1080, 4, 'Combo finisher damage +60%'),
    coreItem(1218, 2, 'Normal Attack Damage +10%'),
    coreItem(1086, 3, 'Normal Attack and Special Attack Damage +10%'),
    coreItem(1191, 3, 'Critical Chance +28%; −30% Critical Damage within 3 tiles'),
  ],
  damageHeading: 'Normal Attack Engine',
  damageSteps: [
    {
      title: 'Indomitable · +33% Normal Attack Damage',
      detail: 'Its direct damage bonus applies to the sustained Normal Attack loop used by this build.',
    },
    {
      title: 'Indomitable · +15% Attack Speed',
      detail: 'More Attack Speed makes it easier to keep a steady sequence of Normal Attacks.',
    },
    {
      title: 'Automatic frontal Block',
      detail: 'Normal Attacks automatically Block in front. This adds protection while attacking; it is not invulnerability.',
    },
    {
      title: 'Cleave is disabled',
      detail: 'Indomitable prevents Special Attack: Cleave, so the page treats Normal Attack as the main damage source.',
    },
    {
      title: 'Core Artifacts and final Combos',
      detail: 'Mystical Pendulum and Begonia Sachet support Normal Attack Damage; Silver Plate adds Normal Attack Damage, and Valter’s Work Monocle adds Critical Chance. The preset reaches Sturdy 10, Wind Song 10, and Precision 8.',
    },
  ],
  videoPath:
    '/videos/games/sephiria/builds/sword-and-shield/indomitable-normal-attack-build/gameplay-demo.mp4',
  relatedGuides: [
    {
      href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build',
      title: 'Grip of Fear Cleave Build',
    },
    {
      href: '/games/sephiria/builds/sword-and-shield/superconductor-lightning-spear-build',
      title: 'Superconductor Lightning Spear Build',
    },
    { href: '/games/sephiria/wiki/weapon-upgrades', title: 'Weapon Upgrade Tree' },
    { href: '/games/sephiria/wiki/items', title: 'Sephiria Items Database' },
  ],
};

export const sns06Page: SephiriaSwordShieldBuildPageData = {
  buildId: 'SNS-06',
  href: '/games/sephiria/builds/sword-and-shield/superconductor-lightning-spear-build',
  subtitle: 'Superconductor Lightning Spear Build',
  description:
    'Sephiria Sword & Shield Superconductor Lightning Spear build with its verified 1.0.33 preset, Lightning focused core Artifacts, Tablet layout, and gameplay demo.',
  intro:
    'Conductor and Superconductor add Lightning Damage. Superconductor turns Special Attack: Cleave into Lightning Spear, which becomes this build’s main damage source.',
  mainDamage: 'Lightning Spear / Special Attack',
  costumeImage: costume,
  weaponRoute: [
    { label: 'Default Sword & Shield', image: upgradeImage('WPN-01') },
    { label: 'Conductor', image: upgradeImage('upgrade-1016') },
    { label: 'Superconductor', image: upgradeImage('upgrade-1018') },
  ],
  setup: commonSetup(),
  coreItems: [
    coreItem(1113, 5, '+5 Lightning Damage; +25 Storm Cloud Capacity; +15% Storm Cloud recovery in combat'),
    coreItem(1272, 4, '+8 Lightning Damage'),
    coreItem(1239, 4, '+4 Lightning Damage; periodic Lightning Damage and Electrocution'),
    coreItem(1298, 3, '+6% Weapon Damage; +4 Lightning Damage'),
    coreItem(1221, 3, '+21% Special Attack Damage'),
  ],
  damageHeading: 'Lightning Engine',
  damageSteps: [
    {
      title: 'Conductor · Lightning route',
      detail: 'Conductor adds +5 Lightning Damage and leads to the final weapon upgrade in this preset.',
    },
    {
      title: 'Superconductor · +5 Lightning Damage',
      detail: 'This is the final weapon route upgrade recorded in SNS-06.',
    },
    {
      title: 'Superconductor · Cleave becomes Lightning Spear',
      detail: 'Special Attack changes from Cleave to Lightning Spear, which gives the build its focus.',
    },
    {
      title: 'Lightning and Special Attack Artifacts',
      detail: 'Lightning Rod, Charm of Lightning, Thunder’s Earring, Topaz Badge, and Blue Wrist Guard provide the preset’s Lightning, Weapon, and Special Attack scaling.',
    },
    {
      title: 'Final Combos',
      detail: 'The verified layout reaches Storm Cloud 8, Magitech 10, and Sturdy 9.',
    },
  ],
  videoPath:
    '/videos/games/sephiria/builds/sword-and-shield/superconductor-lightning-spear-build/gameplay-demo.mp4',
  relatedGuides: [
    {
      href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build',
      title: 'Grip of Fear Cleave Build',
    },
    {
      href: '/games/sephiria/builds/sword-and-shield/indomitable-normal-attack-build',
      title: 'Indomitable Normal Attack Build',
    },
    { href: '/games/sephiria/wiki/weapon-upgrades', title: 'Weapon Upgrade Tree' },
    { href: '/games/sephiria/wiki/items', title: 'Sephiria Items Database' },
  ],
};

export function buildPageMetadata(data: SephiriaSwordShieldBuildPageData) {
  const canonical = `${siteUrl}${data.href}`;
  const title = `Sephiria Sword & Shield Build: ${data.subtitle} | RUNBACK`;
  return {
    title,
    description: data.description,
    alternates: { canonical },
    openGraph: { title, description: data.description, type: 'article' as const, url: canonical, siteName: 'RUNBACK' },
    twitter: { card: 'summary' as const, title, description: data.description },
  };
}
