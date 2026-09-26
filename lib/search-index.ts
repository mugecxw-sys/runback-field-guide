import { articleLibraries, articlePublishedAt, articleSortDate } from './game-articles';
import { gameLibraries } from './game-catalog';
import { repoGuidePages, guidePublishedAt, guideSortDate } from './repo-guide-pages';
import { repoEnemies } from './repo-enemies';
import { wanderburgWikiPages } from './wanderburg-wiki-pages';
import { sephiriaAllRecords, sephiriaWikiPages } from './sephiria-wiki-data';
export const searchIndex = [
  ...gameLibraries.map((g) => ({
    title: g.title,
    game: g.title,
    kind: 'Game',
    href: '/games/' + g.slug,
    summary: g.description,
    text: g.categories.join(' '),
    date: articlePublishedAt,
  })),
  ...repoGuidePages.filter((g) => !g.noindex).map((g) => ({
    title: g.title,
    game: 'R.E.P.O.',
    kind: g.tag,
    href: '/guides/' + g.slug,
    summary: g.description,
    text: [g.lead, ...g.steps].join(' '),
    date: guideSortDate(g),
  })),
  ...articleLibraries.flatMap((g) =>
    g.articles.map((a) => ({
      title: a.title,
      game: g.title,
      kind: a.category,
      href: '/games/' + g.slug + '/' + a.slug,
      summary: a.answer,
      text: a.steps.join(' '),
      date: articleSortDate(a),
    })),
  ),
  ...wanderburgWikiPages.map((page) => ({
    title: page.title,
    game: 'Wanderburg',
    kind: 'Wiki',
    href: page.href,
    summary: page.summary,
    text: page.text,
    date: page.publishedAt,
  })),
  ...sephiriaWikiPages.map((page) => ({
    title: page.title,
    game: 'Sephiria',
    kind: page.group === 'game' ? 'Game' : page.group === 'wiki' ? 'Wiki' : page.group === 'category' ? 'Category' : 'System',
    href: page.href,
    summary: page.summary,
    text: page.title,
    date: page.publishedAt,
  })),
  ...sephiriaAllRecords.map((entry) => {
    const categoryPath: Record<string, string> = {
      Weapon: 'weapons', 'Weapon Upgrade': 'weapon-upgrades', Artifact: 'artifacts',
      Tablet: 'tablets', Costume: 'costumes', 'Hard Mode Element': 'hard-mode',
      Boss: 'bosses', Miniboss: 'bosses', Grimoire: 'grimoires',
    };
    return {
      title: entry.name,
      game: 'Sephiria',
      kind: entry.category,
      href: `/games/sephiria/wiki/${categoryPath[entry.category]}#${entry.slug}`,
      summary: entry.category,
      text: [...entry.aliases, ...entry.tags].join(' '),
      date: '2026-09-26T00:00:00.000Z',
    };
  }),
  ...repoEnemies.map((e) => ({
    title: e.name,
    game: 'R.E.P.O.',
    kind: 'Enemy',
    href: '/games/repo/enemies#' + e.id,
    summary: e.counter,
    text: [e.alias, e.behavior, e.trigger].join(' '),
    date: guidePublishedAt,
  })),
];
export function searchGuides(query: string, game = 'All games') {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/r\.e\.p\.o\./g, 'repo')
      .replace(/c\.a\.r\.t\./g, 'cart')
      .replace(/hades ii/g, 'hades 2');
  const terms = normalize(query)
    .replace(/[^a-z0-9.]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return searchIndex
    .filter((x) => game === 'All games' || x.game === game)
    .map((x) => ({
      x,
      score: terms.reduce(
        (n, t) => n + (normalize(x.title).includes(t) ? 5 : 1),
        0,
      ),
    }))
    .filter(({ x }) =>
      terms.every((t) =>
        normalize(
          x.title +
            ' ' +
            x.game +
            ' ' +
            x.kind +
            ' ' +
            x.summary +
            ' ' +
            x.text,
        ).includes(t),
      ),
    )
    .sort((a, b) => b.score - a.score)
    .map(({ x }) => x);
}
