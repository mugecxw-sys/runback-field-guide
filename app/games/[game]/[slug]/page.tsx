import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleView } from '@/components/article-view';
import { typhonSections } from '@/lib/guide-enrichment';
import {
  articleLibraries,
  articlePublishedAt,
  findLibrary,
} from '@/lib/game-articles';
import { siteUrl } from '@/lib/repo-guide-pages';
type Props = { params: Promise<{ game: string; slug: string }> };
const gameArticleType = (category: string) => {
  if (/boss/i.test(category)) return 'boss' as const;
  if (/build/i.test(category)) return 'build' as const;
  if (/location|collectible|route/i.test(category)) return 'location' as const;
  if (/mechanic|systems|controls/i.test(category)) return 'mechanic' as const;
  return 'beginner' as const;
};
export function generateStaticParams() {
  return articleLibraries.flatMap((g) =>
    g.articles.map((a) => ({ game: g.slug, slug: a.slug })),
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params,
    g = findLibrary(p.game),
    a = g?.articles.find((a) => a.slug === p.slug);
  if (!g || !a) return {};
  const title = g.title + ': ' + a.title,
    url = siteUrl + '/games/' + g.slug + '/' + a.slug;
  return {
    title: title + ' | RUNBACK',
    description: a.answer,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: a.answer,
      type: 'article',
      url,
      publishedTime: articlePublishedAt,
    },
    twitter: { card: 'summary', title, description: a.answer },
  };
}
export default async function ArticlePage({ params }: Props) {
  const p = await params,
    g = findLibrary(p.game),
    a = g?.articles.find((a) => a.slug === p.slug);
  if (!g || !a) notFound();
  const words = new Set(
    (a.title + ' ' + a.category)
      .toLowerCase()
      .split(/\W+/)
      .filter((w) => w.length > 3),
  );
  const related = g.articles
    .filter((r) => r.slug !== a.slug)
    .map((r) => ({
      r,
      score:
        (r.category === a.category ? 20 : 0) +
        r.title
          .toLowerCase()
          .split(/\W+/)
          .filter((w) => words.has(w)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ r }) => ({
      href: '/games/' + g.slug + '/' + r.slug,
      title: r.title,
    }));
  return (
    <ArticleView
      article={a}
      game={g.title}
      hub={'/games/' + g.slug}
      href={'/games/' + g.slug + '/' + a.slug}
      date={articlePublishedAt}
      related={related}
      extra={
        g.slug === 'hades-ii' &&
        a.slug === 'surface-bosses-polyphemus-eris-prometheus-and-typhon'
          ? typhonSections
          : []
      }
      articleType={gameArticleType(a.category)}
    />
  );
}
