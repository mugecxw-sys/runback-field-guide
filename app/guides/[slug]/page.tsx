import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidePublishedAt, repoGuideBySlug, repoGuidePages, siteUrl } from '@/lib/repo-guide-pages';

type GuidePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return repoGuidePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = repoGuideBySlug[slug];
  if (!guide) return {};
  const url = `${siteUrl}/guides/${guide.slug}`;
  return {
    title: `${guide.title} | RUNBACK`,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, type: 'article', url, publishedTime: guidePublishedAt, modifiedTime: guidePublishedAt },
    twitter: { card: 'summary', title: guide.title, description: guide.description },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = repoGuideBySlug[slug];
  if (!guide) notFound();
  const url = `${siteUrl}/guides/${guide.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: guide.title, description: guide.description, datePublished: guidePublishedAt, dateModified: guidePublishedAt, inLanguage: 'en', mainEntityOfPage: url, isPartOf: { '@type': 'WebSite', name: 'RUNBACK', url: siteUrl }, author: { '@type': 'Organization', name: 'RUNBACK' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'R.E.P.O. guides', item: `${siteUrl}/#repo-guides` }, { '@type': 'ListItem', position: 3, name: guide.title, item: url }] },
    ],
  };

  return <main className="min-h-screen bg-[#111417] px-5 py-10 text-[#f1f3f4] sm:px-9 lg:px-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <article className="mx-auto max-w-3xl">
      <nav aria-label="Breadcrumb" className="mb-9 text-sm text-[#9ba7af]"><Link href="/" className="hover:text-white">RUNBACK</Link><span className="px-2">/</span><Link href="/#repo-guides" className="hover:text-white">R.E.P.O. guides</Link><span className="px-2">/</span><span>{guide.tag}</span></nav>
      <p className="mb-4 font-mono text-xs font-bold tracking-[0.18em] text-[#ff8662]">{guide.id} · {guide.tag}</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{guide.title}</h1>
      <p className="mt-6 text-lg leading-8 text-[#c8d0d5]">{guide.lead}</p>
      <div className="mt-10 rounded-2xl border border-[#ff7043]/25 bg-[#ff7043]/[0.06] p-5"><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#ff8662]">Quick answer</h2><p className="mt-3 leading-7 text-[#e1e6e8]">{guide.description}</p></div>
      <section className="mt-12"><h2 className="text-2xl font-semibold text-white">What to do</h2><ol className="mt-5 space-y-3">{guide.steps.map((step, index) => <li key={step} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#ff7043]/15 font-mono text-sm font-bold text-[#ff8662]">{index + 1}</span><span className="leading-7 text-[#d4dce0]">{step}</span></li>)}</ol></section>
      <aside className="mt-10 grid gap-5 sm:grid-cols-2"><section className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#d2d9dd]">Common mistakes</h2><p className="mt-3 leading-7 text-[#b8c3c9]">{guide.mistakes}</p></section><section className="rounded-xl border border-[#79c7a0]/25 bg-[#79c7a0]/[0.06] p-5"><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#9fd7ba]">Version check</h2><p className="mt-3 leading-7 text-[#c2d7ca]">{guide.versionNote}</p></section></aside>
      <section className="mt-10 border-t border-white/[0.1] pt-7"><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#9ba7af]">Sources and patch trail</h2><ul className="mt-4 space-y-2">{guide.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="text-[#ff9a7a] underline decoration-[#ff7043]/40 underline-offset-4 hover:text-white">{source.label}</a></li>)}</ul></section>
      <div className="mt-12 border-t border-white/[0.1] pt-7"><Link href="/#repo-guides" className="inline-flex rounded-lg bg-[#ff7043] px-4 py-2.5 text-sm font-bold text-[#111417] hover:bg-[#ff8965]">Browse all R.E.P.O. guide topics</Link></div>
    </article>
  </main>;
}
