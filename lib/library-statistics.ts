import { gameLibraries } from './game-catalog';
import { articleLibraries } from './game-articles';
import { repoGuidePages, siteUrl } from './repo-guide-pages';
import { wanderburgWikiPages } from './wanderburg-wiki-pages';
import { sephiriaWikiPages } from './sephiria-wiki-data';
import { searchIndex } from './search-index';

// Guide/reference entries include page-level results and anchored Wiki records.
// Game hubs and Enemy records have separate counts.
const contentEntries = searchIndex.filter(
  (item) => item.kind !== 'Game' && item.kind !== 'Enemy',
);

// Public pages come from the route/content registries, not search eligibility.
// Keep accessible noindex guides; exclude game hubs and the empty Mods placeholder.
// R.E.P.O.'s enemy dossiers share one static reference page, not individual routes.
const publicContentRoutes = new Set(
  [
    ...repoGuidePages.map((guide) => `/guides/${guide.slug}`),
    ...articleLibraries.flatMap((game) =>
      game.articles.map((article) => `/games/${game.slug}/${article.slug}`),
    ),
    ...wanderburgWikiPages.map((page) => page.href),
    ...sephiriaWikiPages.filter((page) => page.group !== 'game').map((page) => page.href),
    '/games/repo/enemies',
  ].map(
    (href) => new URL(href, siteUrl).pathname.replace(/\/$/, '') || '/',
  ),
);

export const libraryStatistics = {
  gameCount: gameLibraries.length,
  publicContentPageCount: publicContentRoutes.size,
  searchableEntryCount: contentEntries.length,
  enemyCount: searchIndex.filter((item) => item.kind === 'Enemy').length,
};
