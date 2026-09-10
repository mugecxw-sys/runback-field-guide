import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleView } from '@/components/article-view';
import { repoEnrichment } from '@/lib/guide-enrichment';
import {
  guidePublishedAt,
  repoGuideBySlug,
  repoGuidePages,
  repoRelatedGuideIds,
  siteUrl,
} from '@/lib/repo-guide-pages';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return repoGuidePages.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = repoGuideBySlug[(await params).slug];
  if (!g) return {};
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
  const g = repoGuideBySlug[(await params).slug];
  if (!g) notFound();
  const related = (repoRelatedGuideIds[g.id] ?? [])
    .map((id) => repoGuidePages.find((x) => x.id === id)!)
    .filter(Boolean)
    .map((r) => ({ href: '/guides/' + r.slug, title: r.title }));
  return (
    <ArticleView
      article={{ ...g, answer: g.lead, lead: undefined }}
      game="R.E.P.O."
      hub="/games/repo/"
      href={'/guides/' + g.slug}
      date={g.id === 'CART' ? '2026-09-09T00:00:00.000Z' : guidePublishedAt}
      modified={repoEnrichment[g.slug] ? '2026-09-09T00:00:00.000Z' : undefined}
      related={related}
      extra={repoEnrichment[g.slug] ?? []}
    />
  );
}
