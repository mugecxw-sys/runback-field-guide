import type { MetadataRoute } from 'next';
import { guidePublishedAt, repoGuidePages, siteUrl } from '@/lib/repo-guide-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: guidePublishedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...repoGuidePages.map((guide) => ({ url: `${siteUrl}/guides/${guide.slug}`, lastModified: guidePublishedAt, changeFrequency: 'weekly' as const, priority: 0.8 })),
  ];
}
