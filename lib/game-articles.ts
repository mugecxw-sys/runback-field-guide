import data from './game-articles.json';
export const articleLibraries = data;
export const articlePublishedAt = '2026-09-09T00:00:00.000Z';
export const findLibrary = (slug: string) => articleLibraries.find(game => game.slug === slug);
