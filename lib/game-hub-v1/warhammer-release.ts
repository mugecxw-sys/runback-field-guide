import { hubHref } from './config';
import { warhammerSurvivorsHub as game } from './warhammer-survivors';
import { warhammerWikiCategories, warhammerWikiHref } from './warhammer-wiki-categories';

const groups = game.sections.wiki?.groups ?? [];
const categoryByGroup = new Map<string, string>(
  warhammerWikiCategories.flatMap((category) => category.groups.map((group) => [group, category.slug] as const)),
);
const releasedAt = '2026-11-21T00:00:00.000Z';

export const warhammerSearchRecords = [
  {
    title: 'Warhammer Survivors Wiki', game: game.name, kind: 'Wiki',
    href: hubHref(game.slug, 'wiki'), summary: 'Browse characters, equipment, enemies, and unlocks.',
    text: 'Warhammer Survivors 2.1.7 Wiki', date: releasedAt,
  },
  ...warhammerWikiCategories.map((category) => ({
    title: `${game.name}: ${category.label}`, game: game.name, kind: 'Wiki category',
    href: warhammerWikiHref(category.slug), summary: category.description,
    text: category.groups.join(' '), date: releasedAt,
  })),
  ...groups.flatMap((group) => group.entries.map((entry) => ({
    title: entry.title, game: game.name, kind: group.slug === 'enemies' ? 'Enemy' : group.label,
    href: (entry.entryDisplay ?? group.entryDisplay) === 'compact'
      ? `${warhammerWikiHref(categoryByGroup.get(group.slug) ?? 'bit-box')}#sample-entry-${entry.slug}`
      : hubHref(game.slug, 'wiki', entry.slug),
    summary: entry.summary,
    text: [entry.title, ...Object.entries(entry.attributes ?? {})
      .filter(([key]) => key !== 'configuredValues')
      .flatMap(([, value]) => typeof value === 'string' ? [value] : value)].join(' '),
    date: releasedAt,
  }))),
];

// Compact entries resolve to their category page. Only actual detail pages
// belong in the sitemap; samples, aliases, Music and empty sections stay out.
export const warhammerReleasePaths = [...new Set([
  hubHref(game.slug), hubHref(game.slug, 'wiki'),
  ...warhammerWikiCategories.map((category) => warhammerWikiHref(category.slug)),
  ...groups.flatMap((group) => group.entries
    .filter((entry) => (entry.entryDisplay ?? group.entryDisplay) !== 'compact')
    .map((entry) => hubHref(game.slug, 'wiki', entry.slug))),
])];
