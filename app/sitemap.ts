import type { MetadataRoute } from 'next';
import { articleLibraries, articlePublishedAt } from '@/lib/game-articles';
import {
  guidePublishedAt,
  repoGuidePages,
  siteUrl,
} from '@/lib/repo-guide-pages';

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
        lastModified: articlePublishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      ...game.articles.map((article) => ({
        url: `${siteUrl}/games/${game.slug}/${article.slug}`,
        lastModified: articlePublishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    ]),
    {
      url: siteUrl,
      lastModified: guidePublishedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/games/repo`,
      lastModified: guidePublishedAt,
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
      url: `${siteUrl}/privacy`,
      lastModified: guidePublishedAt,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    ...repoGuidePages.map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}`,
      lastModified: guidePublishedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
