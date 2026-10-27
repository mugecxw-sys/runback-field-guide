import itemsDatabase from '@/public/data/sephiria-items-1.0.33.json';
import { sephiriaImageManifest } from '@/lib/sephiria-image-manifest';
import setup from '@/lib/sephiria-builds/sns-11-setup.json';
import { weaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { buildLayoutForDisplay } from '@/lib/sephiria-builds/build-layout-from-planner';
const build = weaponBuildGroups.flatMap((group) => group.builds).find((entry) => entry.href.endsWith('/blizzards-eve-build'))!;
const layout = buildLayoutForDisplay(build);
import type { LocalBuildImage, SephiriaSwordShieldBuildPageData } from './sword-and-shield-pages';

function imageFor(key: string): LocalBuildImage {
  const image = sephiriaImageManifest[key];
  if (!image) throw new Error(`Missing local image ${key}`);
  return image;
}

function artifact(id: number) {
  const item = itemsDatabase.items.find((entry) => Number(entry.id) === id);
  const cell = layout.cells.find((entry) => entry.itemId === id);
  if (!item?.image || !cell || !('effectiveLevel' in cell)) {
    throw new Error(`Missing Blizzard's Eve Artifact ${id}`);
  }
  return { name: cell.name, image: { ...item.image, alt: cell.name }, effectiveLevel: cell.effectiveLevel! };
}

export const sns11DamageSources = [
  {
    ...artifact(1208),
    role: 'Highest burst source in our test.',
    detail: "Blizzard's Eve activates the Blizzard Hammer Artifact effect at reduced damage when Dash Count is consumed, turning your dash resource into an offensive tool.",
  },
  {
    ...artifact(1247),
    role: 'Manual ranged damage.',
    detail: 'Frozen Bow gives the build a manual ranged attack. Use it when you need to keep distance from the Boss without completely giving up Cold Damage.',
  },
  {
    ...artifact(1293),
    role: 'Automatic projectile damage.',
    detail: 'It fires an ice projectile at Frostbitten enemies every 0.5 seconds, adding steady ranged damage while you continue fighting. Its damage scales with Cold Damage and Attack Speed.',
  },
];

export const sns11CoreArtifacts = layout.coreTargets.map((target) => {
  const cell = layout.cells.find((entry) => entry.name === target.name);
  if (!cell) throw new Error(`Missing core Artifact ${target.name}`);
  return artifact(cell.itemId);
});

export const sns11Page: SephiriaSwordShieldBuildPageData = {
  buildId: 'SNS-11',
  hideBuildId: true,
  href: '/games/sephiria/builds/sword-and-shield/blizzards-eve-build',
  seoTitle: "Sephiria Blizzard's Eve Build: Frost Hammer Sword & Shield | RUNBACK",
  h1: "Blizzard's Eve Frost Hammer Build",
  subtitle: "Tested Blizzard's Eve Sword & Shield Build",
  description: "A tested Sephiria Blizzard's Eve Sword & Shield build using Blizzard Hammer, Frozen Bow, and automatic ice projectiles. Peak DPS exceeded 10,000 in testing.",
  intro: "This tested Sword & Shield build turns Blizzard's Eve into a layered Cold Damage setup. Blizzard Hammer provides the biggest burst hits, while Frozen Bow and automatic ice projectiles keep adding ranged damage around your normal attacks.",
  introDetail: 'In our test, peak DPS went above 10,000, but stayed below 11,000.',
  mainDamage: 'Layered Cold Damage',
  costumeName: setup.costume,
  costumeImage: imageFor('CST-05'),
  weaponRoute: [
    { label: setup.weapon, image: imageFor('WPN-01') },
    { label: setup.upgrade1, image: imageFor('upgrade-1013') },
    { label: setup.upgrade2, image: imageFor('upgrade-1015') },
  ],
  setup: [
    { title: 'Weapon', lines: [setup.weapon], image: imageFor('WPN-01') },
    { title: 'Weapon Upgrade 1', lines: [setup.upgrade1], image: imageFor('upgrade-1013') },
    { title: 'Weapon Upgrade 2', lines: [setup.upgrade2], image: imageFor('upgrade-1015') },
    { title: 'Costume', lines: [setup.costume], image: imageFor('CST-05') },
    { title: 'Talents', lines: setup.talents },
    { title: 'Starting Item', lines: [setup.startingItem], image: { ...setup.startingItemImage, alt: setup.startingItem } },
    { title: 'Fruit Skewer', lines: setup.fruitSkewer, image: { src: '/images/games/sephiria/wiki/pre-run/fruit-skewer.webp', width: 50, height: 50, alt: 'Fruit Skewer' } },
  ],
  coreItems: sns11DamageSources,
  damageHeading: 'Multiple Damage Sources',
  damageSteps: sns11DamageSources.map((source) => ({ title: source.name, detail: source.detail })),
  videoPath: '/videos/games/sephiria/builds/sword-and-shield/blizzards-eve-build/gameplay-demo.mp4',
  relatedGuides: [
    { href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build', title: 'Grip of Fear Cleave Build' },
    { href: '/games/sephiria/builds/sword-and-shield/indomitable-normal-attack-build', title: 'Indomitable Normal Attack Build' },
    { href: '/games/sephiria/builds/sword-and-shield/superconductor-lightning-spear-build', title: 'Superconductor Lightning Spear Build' },
  ],
};
