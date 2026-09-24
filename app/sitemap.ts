import type { MetadataRoute } from 'next';
import {
  articleLibraries,
  articleSortDate,
  latestArticleDate,
} from '@/lib/game-articles';
import {
  guidePublishedAt,
  repoGuidePages,
  siteUrl,
  guideSortDate,
} from '@/lib/repo-guide-pages';
import { wanderburgWikiPages } from '@/lib/wanderburg-wiki-pages';

const latestDate = (dates: string[], fallback: string) =>
  dates.reduce((latest, date) => (date > latest ? date : latest), fallback);
const repoLastModified = latestDate(
  repoGuidePages.map(guideSortDate),
  guidePublishedAt,
);
const siteLastModified = latestDate(
  [
    ...repoGuidePages.map(guideSortDate),
    ...articleLibraries.flatMap((game) => game.articles.map(articleSortDate)),
  ],
  guidePublishedAt,
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/games/repo/enemies`,
      lastModified: '2026-09-09T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articleLibraries.flatMap((game) => [
      {
        url: `${siteUrl}/games/${game.slug}`,
        lastModified: latestArticleDate(game.articles),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      ...game.articles.map((article) => ({
        url: `${siteUrl}/games/${game.slug}/${article.slug}`,
        lastModified: articleSortDate(article),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    ]),
    ...wanderburgWikiPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      lastModified: page.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: siteUrl,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/games/repo`,
      lastModified: repoLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: guidePublishedAt,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${siteUrl}/editorial`,
      lastModified: guidePublishedAt,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: guidePublishedAt,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: guidePublishedAt,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    ...repoGuidePages.filter((guide) => !guide.noindex).map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}`,
      lastModified: guideSortDate(guide),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
