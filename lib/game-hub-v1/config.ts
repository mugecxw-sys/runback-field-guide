export const hubSections = {
  overview: {
    label: 'Overview',
    description: 'Game information and featured resources.',
  },
  guides: {
    label: 'Guides',
    description: 'Start here for beginner, boss, and progression guides.',
  },
  wiki: {
    label: 'Wiki',
    description: 'Browse and search the game’s reference library.',
  },
  builds: {
    label: 'Builds',
    description: 'Explore loadouts by weapon, character, or playstyle.',
  },
  tools: {
    label: 'Tools',
    description: 'Find planners and utilities for this game.',
  },
} as const;

export type HubSection = keyof typeof hubSections;
export type HubResourceSection = Exclude<HubSection, 'overview'>;

export type HubImage = { src: string; alt: string };

export type HubEntry = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  facts?: readonly { label: string; value: string }[];
  href?: string;
  demo?: boolean;
  image?: HubImage;
  icon?: HubImage;
  attributes?: Readonly<Record<string, string>>;
  related?: readonly string[];
};

export type HubWikiField = {
  key: string;
  label: string;
  filter?: boolean;
};

export type HubGroup = {
  slug: string;
  label: string;
  entries: readonly HubEntry[];
  fields?: readonly HubWikiField[];
};

export type GameHubConfig = {
  slug: string;
  name: string;
  version: string;
  description: string;
  cover: HubImage;
  info: readonly { label: string; value: string }[];
  officialHref?: string;
  demo?: boolean;
  sections: Partial<
    Record<
      HubResourceSection,
      {
        description: string;
        groups: readonly HubGroup[];
        enabled?: boolean;
        pageSize?: number;
      }
    >
  >;
  featured?: { section: HubResourceSection; entry: string };
};

const sectionOrder = Object.keys(hubSections) as HubSection[];

export function visibleHubSections(game: GameHubConfig) {
  return sectionOrder.filter(
    (section) =>
      (game.slug !== 'void-breaker' || section === 'overview' || section === 'wiki') &&
      (section === 'overview' || !!getHubSection(game, section)),
  );
}

export function getHubSection(
  game: GameHubConfig,
  section: HubResourceSection,
) {
  const content = game.sections[section];
  if (
    content?.enabled !== false &&
    content?.groups.some((group) => group.entries.length)
  ) {
    return content;
  }
}

export function isHubResourceSection(
  section: string,
): section is HubResourceSection {
  return section !== 'overview' && Object.hasOwn(hubSections, section);
}

export function hubHref(
  slug: string,
  section: HubSection = 'overview',
  entry?: string,
) {
  const root = '/games/' + slug;
  if (section === 'overview') return root;
  return root + '/' + section + (entry ? '/' + entry : '');
}

export function findHubEntry(
  game: GameHubConfig,
  section: HubResourceSection,
  slug: string,
) {
  for (const group of getHubSection(game, section)?.groups ?? []) {
    const entry = group.entries.find((item) => item.slug === slug);
    if (entry) return { group, entry };
  }
}
