import { articleLibraries, articlePublishedAt } from './game-articles';
import { gameLibraries } from './game-catalog';
import { repoGuidePages, guidePublishedAt } from './repo-guide-pages';
import { repoEnemies } from './repo-enemies';
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
  ...repoGuidePages.map((g) => ({
    title: g.title,
    game: 'R.E.P.O.',
    kind: g.tag,
    href: '/guides/' + g.slug,
    summary: g.description,
    text: [g.lead, ...g.steps].join(' '),
    date: guidePublishedAt,
  })),
  ...articleLibraries.flatMap((g) =>
    g.articles.map((a) => ({
      title: a.title,
      game: g.title,
      kind: a.category,
      href: '/games/' + g.slug + '/' + a.slug,
      summary: a.answer,
      text: a.steps.join(' '),
      date: articlePublishedAt,
    })),
  ),
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
