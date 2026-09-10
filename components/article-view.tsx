import Link from 'next/link';
import { BodyAdReservation } from './body-ad-reservation';
import { siteUrl } from '@/lib/repo-guide-pages';
import { linkRepoText } from '@/lib/repo-links';
import type { Enrichment } from '@/lib/guide-enrichment';
type Article = {
  title: string;
  answer: string;
  lead?: string;
  steps: string[];
  mistakes: string;
  versionNote: string;
  sources: { label: string; href: string }[];
};
export function ArticleView({
  article: a,
  game,
  hub,
  href,
  date,
  modified,
  related,
  extra = [],
}: {
  article: Article;
  game: string;
  hub: string;
  href: string;
  date: string;
  modified?: string;
  related: { href: string; title: string }[];
  extra?: Enrichment[];
}) {
  const seen = new Set<string>();
  const render = (text: string) =>
    game === 'R.E.P.O.' ? linkRepoText(text, href, seen) : text;
  const sections = [
    { id: 'quick-answer', label: 'Quick answer' },
    ...extra
      .filter((s) => s.heading === 'Quick Facts')
      .map(() => ({ id: 'quick-facts', label: 'Quick Facts' })),
    { id: 'steps', label: 'Steps' },
    ...extra
      .filter((s) => s.heading !== 'Quick Facts')
      .map((s, i) => ({ id: 'detail-' + i, label: s.heading })),
    { id: 'mistakes', label: 'Common mistakes' },
    { id: 'sources', label: 'Sources' },
    { id: 'related', label: 'Related guides' },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.title,
        description: a.answer,
        datePublished: date,
        dateModified: modified ?? date,
        inLanguage: 'en',
        mainEntityOfPage: siteUrl + href,
        author: {
          '@type': 'Organization',
          name: 'RUNBACK',
          url: siteUrl + '/about',
        },
        publisher: {
          '@type': 'Organization',
          '@id': siteUrl + '/#organization',
          name: 'RUNBACK',
          url: siteUrl,
        },
        citation: a.sources.map((s) => s.href),
        ...(extra.some((s) => s.image)
          ? { image: extra.flatMap((s) => (s.image ? [s.image.src] : [])) }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: game, item: siteUrl + hub },
          {
            '@type': 'ListItem',
            position: 3,
            name: a.title,
            item: siteUrl + href,
          },
        ],
      },
    ],
  };
  function detail(s: Enrichment, id: string) {
    return (
      <section key={id} id={id} className="mt-9 scroll-mt-6">
        <h2 className="text-2xl font-semibold">{s.heading}</h2>
        {s.paragraphs.map((p, i) => (
          <p key={i} className="mt-4 leading-8 text-[#c7d0d5]">
            {render(p)}
          </p>
        ))}
        {s.image && (
          <figure className="mt-5">
            <img
              src={s.image.src}
              alt={s.image.alt}
              width={s.image.width}
              height={s.image.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="mt-3 text-sm leading-6 text-[#aeb7bc]">
              {s.image.caption}
            </figcaption>
          </figure>
        )}
        {s.rows && (
          <div className="mt-5 overflow-x-auto rounded-xl border border-white/15">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{s.heading}</caption>
              <thead className="bg-[#192126]">
                <tr>
                  {s.columns?.map((c) => (
                    <th key={c} scope="col" className="p-4">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((r, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {r.map((c, j) =>
                      j === 0 ? (
                        <th
                          key={j}
                          scope="row"
                          className="min-w-32 p-4 font-medium"
                        >
                          {render(c)}
                        </th>
                      ) : (
                        <td key={j} className="p-4 leading-6">
                          {render(c)}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {s.source && (
          <a
            className="mt-4 block text-sm text-[#ff9a7a] underline"
            href={s.source.href}
          >
            {s.source.label} ↗
          </a>
        )}
      </section>
    );
  }
  return (
    <main className="min-h-screen px-5 py-8 text-[#e1e6e8]">
      <article className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"
        >
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href={hub}>{game}</Link>
          <span>›</span>
          <span aria-current="page">{a.title}</span>
        </nav>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
          {a.title}
        </h1>
        <section
          id="quick-answer"
          aria-label="30-second answer"
          className="mt-6 rounded-xl border border-[#ff7043]/30 bg-[#ff7043]/[0.07] p-5"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff9a7a]">
            30-second answer
          </h2>
          <p className="mt-3 leading-7">{render(a.answer)}</p>
        </section>
        <p className="mt-4 text-xs text-[#aeb7bc]">
          By RUNBACK · Published{' '}
          <time dateTime={date}>{date.slice(0, 10)}</time>
          {modified && (
            <>
              {' '}
              · Updated <time dateTime={modified}>{modified.slice(0, 10)}</time>
            </>
          )}
        </p>
        <details className="mt-5 rounded-lg border border-white/15 p-4">
          <summary className="cursor-pointer text-sm font-semibold">
            On this page
          </summary>
          <nav
            aria-label="On this page"
            className="mt-4 flex flex-col gap-3 text-sm text-[#ff9a7a]"
          >
            {sections.map((s) => (
              <a key={s.id} href={'#' + s.id}>
                {s.label}
              </a>
            ))}
          </nav>
        </details>
        {a.lead && (
          <p className="mt-6 leading-8 text-[#c7d0d5]">{render(a.lead)}</p>
        )}
        {extra
          .filter((s) => s.heading === 'Quick Facts')
          .map((s) => detail(s, 'quick-facts'))}
        <section id="steps" className="mt-9">
          <h2 className="text-2xl font-semibold">Step-by-step guide</h2>
          <ol className="mt-5 space-y-4">
            {a.steps.map((s, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-white/10 bg-[#192126] p-5"
              >
                <span className="font-mono text-[#ff9a7a]">{i + 1}.</span>
                <p className="leading-7">{render(s)}</p>
              </li>
            ))}
          </ol>
        </section>
        {extra
          .filter((s) => s.heading !== 'Quick Facts')
          .map((s, i) => detail(s, 'detail-' + i))}
        <BodyAdReservation
          wordCount={
            [a.answer, ...a.steps, ...extra.flatMap((s) => s.paragraphs)]
              .join(' ')
              .split(/\s+/).length
          }
        />
        <section id="mistakes" className="mt-9">
          <h2 className="text-2xl font-semibold">Common mistakes</h2>
          <p className="mt-4 leading-7">{render(a.mistakes)}</p>
        </section>
        <section className="mt-8 rounded-xl border border-[#79c7a0]/25 p-5">
          <h2 className="font-semibold text-[#9fd7ba]">Version and scope</h2>
          <p className="mt-3 leading-7">{render(a.versionNote)}</p>
        </section>
        <section id="sources" className="mt-10 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold">Sources and further reading</h2>
          <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">
            Source-backed synthesis. Community recommendations are not
            guaranteed outcomes; no new firsthand playtest is claimed.
          </p>
          <ul className="mt-4 space-y-3">
            {a.sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="break-words text-sm text-[#ff9a7a] underline underline-offset-4"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
        <nav
          id="related"
          aria-label="Related Guides"
          className="mt-10 border-t border-white/10 pt-6"
        >
          <h2 className="text-2xl font-semibold">Related Guides</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl border border-white/10 p-4 leading-6 hover:border-[#ff8662]"
              >
                {r.title} →
              </Link>
            ))}
          </div>
          <Link href={hub} className="mt-6 block text-[#ff9a7a]">
            All {game} guides →
          </Link>
        </nav>
        <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-[#aeb7bc]">
          <Link href="/about">About</Link>
          <Link href="/editorial">Editorial policy</Link>
          <Link href="/privacy">Privacy</Link>
        </footer>
      </article>
    </main>
  );
}
