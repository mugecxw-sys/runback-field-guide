import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleView } from '@/components/article-view';
import { UpgradePlanner } from '@/components/upgrade-planner';
import { repoEnrichment } from '@/lib/guide-enrichment';
import {
  guidePublishedAt,
  repoGuideBySlug,
  repoGuidePages,
  repoRelatedGuideIds,
  siteUrl,
} from '@/lib/repo-guide-pages';
type Props = { params: Promise<{ slug: string }> };
const repoArticleType = (tag: string) => {
  if (tag === 'FAQ' || tag === 'PLATFORMS') return 'faq' as const;
  if (tag === 'ENEMIES') return 'mechanic' as const;
  if (tag === 'ITEMS' || tag === 'UPGRADES' || tag === 'STRENGTH')
    return 'build' as const;
  if (tag === 'LEVELS' || tag === 'ROUTES') return 'location' as const;
  if (tag === 'MECHANICS' || tag === 'QUOTA' || tag === 'EXTRACTION')
    return 'mechanic' as const;
  return 'beginner' as const;
};
export function generateStaticParams() {
  return repoGuidePages.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = repoGuideBySlug[slug];
  if (!g) return {};
  if (slug === 'r-e-p-o-upgrade-planner')
    return {
      title: 'R.E.P.O. Upgrade Planner | RUNBACK',
      description: g.description,
      alternates: { canonical: siteUrl + '/guides/' + g.slug },
      openGraph: {
        title: 'R.E.P.O. Upgrade Planner',
        description: g.description,
        type: 'website',
        url: siteUrl + '/guides/' + g.slug,
      },
    };
  return {
    title: g.title + ' | RUNBACK',
    description: g.description,
    alternates: { canonical: siteUrl + '/guides/' + g.slug },
    openGraph: {
      title: g.title,
      description: g.description,
      type: 'article',
      url: siteUrl + '/guides/' + g.slug,
    },
    twitter: { card: 'summary', title: g.title, description: g.description },
  };
}
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  if (slug === 'r-e-p-o-upgrade-planner') return <UpgradePlanner />;
  const g = repoGuideBySlug[slug];
  if (!g) notFound();
  const related = (repoRelatedGuideIds[g.id] ?? [])
    .map((id) => repoGuidePages.find((x) => x.id === id)!)
    .filter(Boolean)
    .map((r) => ({ href: '/guides/' + r.slug, title: r.title }));
  const hasDefaultModifiedDate =
    (repoEnrichment[g.slug] &&
      ![
        'repo-ps5-xbox-console-crossplay',
        'what-is-r-e-p-o-story-setting-and-what-we-know',
      ].includes(g.slug)) ||
    ['P2-24', 'P2-25'].includes(g.id);
  const modified = g.updatedAt ?? (hasDefaultModifiedDate
    ? '2026-09-10T00:00:00.000Z'
    : undefined);
  return (
    <ArticleView
      article={{ ...g, answer: g.lead, lead: undefined }}
      game="R.E.P.O."
      hub="/games/repo"
      href={'/guides/' + g.slug}
      date={g.publishedAt ?? guidePublishedAt}
      modified={modified}
      related={related}
      extra={repoEnrichment[g.slug] ?? []}
      articleType={repoArticleType(g.tag)}
    />
  );
}
