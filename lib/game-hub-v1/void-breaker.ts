import { hubHref, type GameHubConfig } from './config';
import { wikiCategories, wikiLocationCategories } from './void-breaker-wiki';
import { voidBreakerWikiIntroduction } from './void-breaker-release';

export const voidBreakerHub: GameHubConfig = {
  slug: 'void-breaker',
  name: 'VOID/BREAKER',
  version: '1.0',
  description:
    'A fast-paced roguelite FPS where you fight machines controlled by a hostile AI, modify your weapons, and use destructible environments to open new paths.',
  cover: {
    src: '/images/games/void-breaker/cover.jpg',
    alt: 'Official VOID/BREAKER key art',
  },
  officialHref: 'https://store.steampowered.com/app/2615540/VOIDBREAKER/',
  demo: false,
  info: [
    { label: 'Genre', value: 'Roguelite FPS' },
    { label: 'Developer', value: 'Stubby Games' },
    { label: 'Publisher', value: 'Playstack' },
  ],
  sections: {
    guides: {
      description:
        'Browse sample formats for getting started, preparing for bosses, and documenting a run.',
      groups: [
        {
          slug: 'beginner',
          label: 'Beginner',
          entries: [
            {
              slug: 'first-run-outline',
              title: 'First Run Outline',
              summary:
                'A sample layout for the opening steps of a new player guide.',
              detail:
                'A published guide can use this space for preparation, opening objectives, and a short checklist for a first run.',
            },
          ],
        },
        {
          slug: 'bosses',
          label: 'Boss Guides',
          entries: [
            {
              slug: 'encounter-brief',
              title: 'Encounter Brief',
              summary:
                'A sample brief for organizing an encounter by phases and cues.',
              detail:
                'A published encounter guide can document phase changes, readable cues, and recommended responses.',
            },
          ],
        },
        {
          slug: 'progression',
          label: 'Progression',
          entries: [
            {
              slug: 'route-notes',
              title: 'Route Notes',
              summary:
                'A sample walkthrough format for milestones and route choices.',
              detail:
                'A published walkthrough can organize objectives and optional detours in the order they appear in a run.',
            },
          ],
        },
      ],
    },
    wiki: {
      description: voidBreakerWikiIntroduction,
      groups: [
        {
          slug: 'category-index',
          label: 'Wiki Categories',
          entries: [...wikiCategories, ...wikiLocationCategories].map(
            (category) => ({
              slug: category.slug,
              title: category.label,
              summary: category.summary,
              detail: category.coverage,
              href: hubHref('void-breaker', 'wiki', category.slug),
            }),
          ),
        },
      ],
    },
    builds: {
      description:
        'See how build cards can be grouped by playstyle. Each card opens a sample build outline.',
      groups: [
        {
          slug: 'weapon-led',
          label: 'Weapon-led',
          entries: [
            {
              slug: 'precision-loadout',
              title: 'Precision Loadout',
              summary:
                'A sample weapon-led card with room for priorities and substitutions.',
              detail:
                'The build outline can describe a primary weapon, supporting choices, and what to swap when a piece is unavailable.',
            },
          ],
        },
        {
          slug: 'playstyle',
          label: 'Playstyle',
          entries: [
            {
              slug: 'close-range-loop',
              title: 'Close-range Loop',
              summary:
                'A sample playstyle card for a mobile, short-range concept.',
              detail:
                'The build outline can describe a preferred combat rhythm and the kinds of choices that support it.',
            },
            {
              slug: 'flex-loadout',
              title: 'Flexible Loadout',
              summary:
                'A sample build card organized around adaptable choices.',
              detail:
                'The build outline can list decision points, alternative equipment, and situations where each option fits.',
            },
          ],
        },
      ],
    },
    tools: {
      description:
        'Preview the entry points for game-specific utilities. These cards open design briefs for future tools.',
      groups: [
        {
          slug: 'planning',
          label: 'Planning',
          entries: [
            {
              slug: 'loadout-planner',
              title: 'Loadout Planner',
              summary:
                'An entry point for a future weapon and module planning utility.',
              detail:
                'This is a tool landing page preview. A future planner can provide controls to assemble a loadout from verified records.',
            },
          ],
        },
        {
          slug: 'reference',
          label: 'Reference',
          entries: [
            {
              slug: 'run-checklist',
              title: 'Run Checklist',
              summary: 'An entry point for a future run preparation checklist.',
              detail:
                'This is a tool landing page preview. A future checklist can let players organize their preparation notes.',
            },
          ],
        },
      ],
    },
  },
};
