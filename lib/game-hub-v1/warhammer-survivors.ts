import bulkWiki from '../../data/warhammer-survivors/wiki-bulk-public.json';
import type { GameHubConfig, HubEntry, HubGroup } from './config';

const bulkEntries = bulkWiki.entriesByCategory as unknown as Record<string, HubEntry[]>;
const bulkGroupDefinitions = bulkWiki.newGroups as unknown as Array<Omit<HubGroup, 'entries'>>;
const bulkGroups = bulkGroupDefinitions.map((group) => ({
  ...group,
  entries: bulkEntries[group.slug] ?? [],
})) as HubGroup[];

const image = (name: string, alt: string) => ({
  src: `/images/games/warhammer-survivors/${name}`,
  alt,
});

const wikiGroups = bulkGroups;
export const warhammerSurvivorsHub: GameHubConfig = {
  slug: 'warhammer-survivors',
  name: 'Warhammer Survivors',
  narrowViewportSafe: true,
  useSectionCardDescriptions: true,
  version: '2.1.7',
  description: `Explore characters, weapons, items, enemies, and other Warhammer Survivors reference entries.`,
  cover: image('warhammer-survivors-cover-ai.png', 'Warhammer Survivors heroes from both worlds'),
  coverFit: 'cover',
  info: [],
  showInfoFacts: false,
  sections: {
    guides: {
      enabled: false,
      description: 'Guides for Warhammer Survivors.',
      groups: [],
      emptyState: { title: 'No guides yet', description: 'No guides are available yet.' },
    },
    wiki: {
      description: 'Browse characters, weapons, in-run Passives, Enhancements, Arcana, evolutions, items, enemies, stages, merchants, objectives, Steam achievements, puzzles, incantations, and paint pots.',
      groups: wikiGroups,
      pageSize: 20,
      compactGrid: true,
      showResultCount: false,
    },
    builds: {
      enabled: false,
      description: 'Builds for Warhammer Survivors.',
      groups: [],
      emptyState: { title: 'No builds yet', description: 'No builds are available yet.' },
    },
    tools: {
      enabled: false,
      description: 'Tools for Warhammer Survivors.',
      groups: [],
      emptyState: { title: 'No tools yet', description: 'No tools are available yet.' },
    },
  },
};
