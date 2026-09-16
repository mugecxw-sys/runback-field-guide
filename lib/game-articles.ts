import data from './game-articles.json';
export const articlePublishedAt = '2026-09-09T00:00:00.000Z';
type RawLibrary = (typeof data)[number];
export type GameArticle = RawLibrary['articles'][number] & {
  publishedAt: string;
  updatedAt?: string;
};
type ArticleLibrary = Omit<RawLibrary, 'articles'> & { articles: GameArticle[] };

export const articleLibraries: ArticleLibrary[] = data.map((library) => ({
  ...library,
  articles: library.articles.map((article) => ({
    ...article,
    publishedAt: articlePublishedAt,
  })),
}));
export const articleSortDate = (article: GameArticle) =>
  article.updatedAt ?? article.publishedAt;
export const findLibrary = (slug: string) => articleLibraries.find(game => game.slug === slug);
