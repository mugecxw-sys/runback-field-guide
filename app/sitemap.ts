import { voidBreakerReleasePaths } from '@/lib/game-hub-v1/void-breaker-release';
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
import { sephiriaWikiPages } from '@/lib/sephiria-wiki-data';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { chapterOneGuide } from '@/lib/sephiria-chapter-one-guide';
import { chapterTwoGuide } from '@/lib/sephiria-chapter-two-guide';
import { chapterThreeGuide } from '@/lib/sephiria-chapter-three-guide';
import { chapterFourGuide } from '@/lib/sephiria-chapter-four-guide';

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
    ...sephiriaWikiPages.map((page) => page.publishedAt),
  ],
  guidePublishedAt,
);

const sephiriaBuildIndexDate = '2026-11-02T00:00:00.000Z';

// Every weapon group page plus every published build guide. New builds added to
// weaponBuildGroups are picked up automatically — keep `publishedAt` on the
// build definition current so lastmod stays meaningful.
const sephiriaBuildPages = listedWeaponBuildGroups.flatMap((group) => [
  ...(group.href
    ? [{ href: group.href, lastModified: sephiriaBuildIndexDate }]
    : []),
  ...group.builds.map((build) => ({
    href: build.href,
    lastModified: build.updatedAt ?? build.publishedAt ?? sephiriaBuildIndexDate,
  })),
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...voidBreakerReleasePaths.map((pathname) => ({
      url: siteUrl + pathname,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: siteUrl + chapterOneGuide.href, changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl + chapterTwoGuide.href, changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl + chapterThreeGuide.href, changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl + chapterFourGuide.href, changeFrequency: 'monthly', priority: 0.8 },
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
      lastModified: page.updatedAt ?? page.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...sephiriaWikiPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      lastModified: page.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: page.group === 'game' || page.group === 'wiki' ? 0.9 : 0.8,
    })),
    ...sephiriaBuildPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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
