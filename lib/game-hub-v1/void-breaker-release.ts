import type { Metadata } from 'next';

export const voidBreakerWikiIntroduction =
  'Explore VOID/BREAKER modules, weapons, enemies, locations, upgrades, and game mechanics.';

// Editorial navigation only. Frozen game records and their public projections stay unchanged.
export const voidBreakerReleaseCategories = [
  { slug: 'modules', label: 'Modules', summary: 'Module effects and Fire Modes.' },
  { slug: 'weapons', label: 'Weapons', summary: 'Weapons, variants, and available stats.' },
  { slug: 'enemies', label: 'Enemies & Bosses', summary: 'Enemy and boss information.' },
  { slug: 'world-and-locations', label: 'World & Locations', summary: 'Zones, encounter configurations, and map markers.' },
  { slug: 'upgrades', label: 'Upgrades', summary: 'Upgrade effects and Voidium costs.' },
  { slug: 'chaos', label: 'Chaos', summary: 'Difficulty modifiers, Corruptor effects, and Obelisk offers.' },
] as const;

export const voidBreakerReleasePaths = [
  '/games/void-breaker',
  '/games/void-breaker/wiki',
  ...voidBreakerReleaseCategories.map(({ slug }) => '/games/void-breaker/wiki/' + slug),
];

export function voidBreakerReleaseMetadata(
  pathname: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://roguelikegame.org' + pathname },
    openGraph: {
      title,
      description,
      url: 'https://roguelikegame.org' + pathname,
      siteName: 'RUNBACK',
      type: 'website',
    },
  };
}
