import type { BossGuideCardProps } from '@/components/game-guide/boss-guide-card';
import type { BossRegionCardProps } from '@/components/game-guide/boss-region-card';

export type BossGuideRegion = BossRegionCardProps & {
  slug: string;
  h1: string;
  metadataTitle: string;
  metadataDescription: string;
  intro: string;
  bosses: BossGuideCardProps[];
};

const imageRoot = '/images/games/wanderburg/boss-guide';
const videoRoot = '/videos/games/wanderburg/boss-guide';
const regionNames = {
  glasslands: 'Glasslands',
  desert: 'Desert',
  'dark-forest': 'Dark Forest',
} as const;

function boss(region: keyof typeof regionNames, slug: string, name: string, watch: string, dodge: string, attack: string, videoCaption?: string): BossGuideCardProps {
  const regionName = regionNames[region];
  const caption = name + ' during the ' + regionName + ' fight.';
  return {
    name, watch, dodge, attack,
    image: imageRoot + '/' + region + '/' + slug + '.webp',
    imageAlt: caption,
    imageCaption: caption,
    imageWidth: 800,
    imageHeight: 450,
    video: videoRoot + '/' + region + '/' + slug + '.mp4',
    videoPoster: imageRoot + '/' + region + '/' + slug + '.webp',
    videoCaption: videoCaption ?? caption,
  };
}

export const bossGuideRegions: BossGuideRegion[] = [
  {
    slug: 'glasslands',
    title: 'Glasslands',
    href: '/games/wanderburg/boss-guide/glasslands',
    h1: 'Wanderburg Glasslands Boss Guide (0.9.14)',
    metadataTitle: 'Wanderburg Glasslands Boss Guide (0.9.14) | RUNBACK',
    metadataDescription: 'Short Glasslands boss guides for Wanderburg 0.9.14, with dodge tips, screenshots and gameplay clips for Taurus Drillus, Fresensburg, Bombardia and The Dark Tower.',
    intro: "These fights are easier once you know where to move during each boss's main attack.",
    bossCount: 4,
    bossNames: ['Taurus Drillus', 'Fresensburg', 'Bombardia', 'The Dark Tower'],
    description: 'Four short boss guides with dodge patterns and gameplay clips.',
    bosses: [
      boss('glasslands', 'taurus-drillus', 'Taurus Drillus', 'Watch the cannon direction.', 'Circle around it instead of staying in front.', 'Let auto attacks work while you keep moving.'),
      boss('glasslands', 'fresensburg', 'Fresensburg', 'Watch its facing and movement.', 'Stay behind it when possible.', 'Keep dealing damage from the back instead of forcing front trades.'),
      boss('glasslands', 'bombardia', 'Bombardia', 'Watch the first shell volley.', 'Avoid the first wave, then move in close.', 'Staying close gives you a safer damage window before the next volley.'),
      boss('glasslands', 'the-dark-tower', 'The Dark Tower', 'Watch the first tornado.', 'Circle the boss or Boost away from the opening tornado.', 'After that, dodge normally and deal damage when the space opens.'),
    ],
  },
  {
    slug: 'desert',
    title: 'Desert',
    href: '/games/wanderburg/boss-guide/desert',
    h1: 'Wanderburg Desert Boss Guide (0.9.14)',
    metadataTitle: 'Wanderburg Desert Boss Guide (0.9.14) | RUNBACK',
    metadataDescription: 'Short Desert boss guides for Wanderburg 0.9.14, with dodge tips, screenshots and gameplay clips for King Klopp, Rust Shield, Saturna Raketa and The Ancient.',
    intro: "The safest approach is usually to keep moving and use each boss's attack gap for damage.",
    bossCount: 4,
    bossNames: ['King Klopp', 'Rust Shield', 'Saturna Raketa', 'The Ancient'],
    description: 'Four short boss guides with dodge patterns and gameplay clips.',
    bosses: [
      boss('desert', 'king-klopp', 'King Klopp', "Watch the terrain and the boss's path.", 'Use the terrain to circle around it safely.', 'Keep moving around it and take the free damage windows.'),
      boss('desert', 'rust-shield', 'Rust Shield', 'Watch the opening attack.', 'Boost away at the start, then keep circling.', 'Deal damage while moving and avoid staying directly in front.'),
      boss('desert', 'saturna-raketa', 'Saturna Raketa', 'Watch the incoming rockets.', 'Keep moving and avoid the rocket impacts.', 'Movement comes first; deal damage while the boss is firing from range.'),
      boss('desert', 'the-ancient', 'The Ancient', 'Watch its two main attack patterns.', 'Move away during the first pattern, then circle during the second.', 'Use the downtime between attacks for damage instead of forcing hits.'),
    ],
  },
  {
    slug: 'dark-forest',
    title: 'Dark Forest',
    href: '/games/wanderburg/boss-guide/dark-forest',
    h1: 'Wanderburg Dark Forest Boss Guide (0.9.14)',
    metadataTitle: 'Wanderburg Dark Forest Boss Guide (0.9.14) | RUNBACK',
    metadataDescription: 'Short Dark Forest boss guides for Wanderburg 0.9.14, with dodge tips, screenshots and gameplay clips for Schnittburg, Schnappenstein Castle, Rammi and Gunnings.',
    intro: 'Keep moving around these bosses instead of holding one position for too long.',
    bossCount: 4,
    bossNames: ['Schnittburg', 'Schnappenstein Castle', 'Rammi', 'Gunnings'],
    description: 'Four short boss guides with dodge patterns and gameplay clips.',
    bosses: [
      boss('dark-forest', 'schnittburg', 'Schnittburg', 'Watch the rotating attack around the boss.', 'Keep circling and stay outside the sweep.', 'Keep dealing damage while moving instead of stopping beside it.', "Keep circling to stay clear of Schnittburg's rotating attack."),
      boss('dark-forest', 'schnappenstein-castle', 'Schnappenstein Castle', 'Watch the fire zones around the boss.', 'Keep circling and avoid staying in the burning area.', 'Stay mobile and keep dealing damage from the safer side of the circle.', 'Keep moving around Schnappenstein Castle and avoid the fire zones.'),
      boss('dark-forest', 'rammi', 'Rammi', 'Watch the front of the boss and the mortar markers.', 'Keep circling instead of staying in its path.', 'Keep dealing damage from the side while you move.', 'Circle Rammi instead of staying in front of its attack path.'),
      boss('dark-forest', 'gunnings', 'Gunnings', 'Watch the side cannons and the slower-turning top cannon.', 'Keep moving around the boss and stay out of the side fire.', 'The top cannon turns more slowly, so use that opening to keep pressure on it.', 'Keep moving around Gunnings and use the slower top-cannon turn as an attack window.'),
    ],
  },
];

export const bossGuideRegionCards: BossRegionCardProps[] = bossGuideRegions.map(({ title, href, bossCount, bossNames, description }) => ({
  title, href, bossCount, bossNames, description,
}));

export function getBossGuideRegion(slug: string) {
  return bossGuideRegions.find((region) => region.slug === slug);
}
