import data from './game-articles.json';
export const articlePublishedAt = '2026-09-09T00:00:00.000Z';
export type GameArticle = {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  answer: string;
  steps: string[];
  mistakes: string;
  versionNote: string;
  sources: { href: string; label: string }[];
};
export type ArticleLibrary = {
  slug: string;
  title: string;
  articles: GameArticle[];
};

export const articleLibraries: ArticleLibrary[] = data;
export const articleSortDate = (article: GameArticle) =>
  article.updatedAt ?? article.publishedAt;
export const latestArticleDate = (
  articles: GameArticle[],
  fallback = articlePublishedAt,
) => articles.reduce((latest, article) =>
  articleSortDate(article) > latest ? articleSortDate(article) : latest, fallback);
export const findLibrary = (slug: string) => articleLibraries.find(game => game.slug === slug);
