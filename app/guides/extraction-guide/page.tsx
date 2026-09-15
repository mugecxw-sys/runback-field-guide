import type { Metadata } from 'next';
import {
  guidePublishedAt,
  repoGuideBySlug,
  repoGuidePages,
  repoRelatedGuideIds,
  siteUrl,
} from '@/lib/repo-guide-pages';

const guide = repoGuideBySlug['extraction-guide'];
const href = '/guides/extraction-guide';
const h1 = 'How to Extract in R.E.P.O.';
const updated = '2026-09-15T00:00:00.000Z';
export const metadata: Metadata = {
  title: { absolute: guide.title },
  description: guide.description,
  alternates: { canonical: siteUrl + href },
  openGraph: {
    title: guide.title,
    description: guide.description,
    type: 'article',
    url: siteUrl + href,
  },
  twitter: { card: 'summary', title: guide.title, description: guide.description },
};

const sections = [
  ['after-quota', 'What happens after you meet quota?'],
  ['automatic-extraction', 'Does extraction start automatically?'],
  ['extraction-complete', 'What happens when extraction is complete?'],
  ['leave-in-truck', 'How do you leave in the truck?'],
  ['full-flow', 'The full extraction flow'],
  ['version-note', 'Version note'],
];

function Screenshot({ name, alt, width, height }: {
  name: string; alt: string; width: number; height: number;
}) {
  return (
    <figure className="mt-5">
      <img src={'/images/repo/extraction-guide/' + name + '.png'} alt={alt}
        width={width} height={height} loading="lazy" decoding="async"
        className="h-auto w-full rounded-xl" />
    </figure>
  );
}

export default function ExtractionGuide() {
  const related = (repoRelatedGuideIds[guide.id] ?? [])
    .map((id) => repoGuidePages.find((g) => g.id === id)!)
    .filter(Boolean)
    .map((g) => ({ href: '/guides/' + g.slug, title: g.title }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description: guide.lead,
        datePublished: guidePublishedAt, dateModified: updated, inLanguage: 'en',
        mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation: guide.sources.map((s) => s.href),
        image: ['REPO-QUOTA-01', 'REPO-EXT-02', 'REPO-EXT-03'].map((name) => siteUrl + '/images/repo/extraction-guide/' + name + '.png'),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'R.E.P.O.', item: siteUrl + '/games/repo' },
          { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
        ],
      },
    ],
  };
  return (
    <main className="min-h-screen px-5 py-8 text-[#e1e6e8]">
      <article className="mx-auto max-w-3xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]">
          <a href="/">Home</a><span>›</span><a href="/games/repo">R.E.P.O.</a><span>›</span><span aria-current="page">{h1}</span>
        </nav>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{h1}</h1>
        <section id="quick-answer" aria-label="Quick Answer" className="mt-6 rounded-xl border border-[#ff7043]/30 bg-[#ff7043]/[0.07] p-5">
          <p className="leading-7"><strong>Quick Answer:</strong> Once you reach the required quota, <strong>Extraction starts automatically</strong>. You do <strong>not</strong> need to find a separate Extraction Point or press another button to start it. Wait for the extraction sequence to finish, return to the truck, then use the truck&apos;s leave control to finish the sequence.</p>
        </section>
        <Screenshot name="REPO-QUOTA-01" alt="Quota reached in the tested R.E.P.O. run" width={3610} height={1810} />
        <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={guidePublishedAt}>{guidePublishedAt.slice(0, 10)}</time> · Updated <time dateTime={updated}>{updated.slice(0, 10)}</time></p>
        <details className="mt-5 rounded-lg border border-white/15 p-4">
          <summary className="cursor-pointer text-sm font-semibold">On this page</summary>
          <nav aria-label="On this page" className="mt-4 flex flex-col gap-3 text-sm text-[#ff9a7a]">
            {sections.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
          </nav>
        </details>
        <section id="after-quota" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-semibold">What happens after you meet quota?</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Reaching the required quota triggered Extraction automatically in the tested run. No extra activation step was needed between <strong>Quota reached</strong> and <strong>Extraction starting</strong>.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">The verified flow is:</p>
          <ol className="mt-4 list-decimal space-y-2 pl-8 leading-8 text-[#c7d0d5]">
            {guide.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="mt-4 leading-8 text-[#c7d0d5]">If you are still working on the quota itself, see the <a href="/guides/meet-quota" data-context-link className="text-[#ff9a7a] underline underline-offset-4">Meet Quota Guide</a>.</p>
        </section>
        <section id="automatic-extraction" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-semibold">Does extraction start automatically?</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Yes. The manual test confirmed that reaching quota directly triggered Extraction.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">You do not need to search for another Extraction Point, manually activate Extraction, or press a separate extraction-start button after quota has been satisfied.</p>
        </section>
        <section id="extraction-complete" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-semibold">What happens when extraction is complete?</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]">When the tested extraction finished, the game displayed the message:</p>
          <blockquote className="mt-4 border-l-2 border-[#ff8662] pl-5 leading-8 text-[#c7d0d5]">“Time to leave, the truck heals you and revives carried player heads!”</blockquote>
          <p className="mt-4 leading-8 text-[#c7d0d5]">At that point, the next step is to return to the truck.</p>
          <Screenshot name="REPO-EXT-02" alt="Extraction completed and the game tells you to leave" width={3684} height={1857} />
        </section>
        <section id="leave-in-truck" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-semibold">How do you leave in the truck?</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]">After Extraction is complete, return to the truck and use the truck&apos;s leave control to finish the sequence.</p>
          <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl">
            <iframe src="https://www.youtube-nocookie.com/embed/Fytce0ossj0" title="R.E.P.O. extraction after reaching quota and returning to the truck" loading="lazy" width="560" height="315" className="h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
          <Screenshot name="REPO-EXT-03" alt="Truck leave control after returning to the truck" width={3660} height={1807} />
          <p className="mt-4 leading-8 text-[#c7d0d5]">The supplied manual evidence confirms the <strong>return to truck → leave</strong> flow. It does not establish a specific keyboard key, controller button, countdown behavior, or separate Extraction button, so those details are not stated as facts here.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">If your current game build shows an on-screen leave prompt, follow that prompt.</p>
        </section>
        <section id="full-flow" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-semibold">The full extraction flow</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]"><strong>Quota reached → Extraction automatically starts → Extraction completes → Return to truck → Leave</strong></p>
        </section>
        <section id="version-note" className="mt-8 scroll-mt-6 rounded-xl border border-[#79c7a0]/25 p-5">
          <h2 className="font-semibold text-[#9fd7ba]">Version note</h2>
          <p className="mt-3 leading-7">{guide.versionNote}</p>
        </section>
        <nav id="related" aria-label="Related Guides" className="mt-10 border-t border-white/10 pt-6">
          <h2 className="text-2xl font-semibold">Related Guides</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map((r) => <a key={r.href} href={r.href} className="rounded-xl border border-white/10 p-4 leading-6 hover:border-[#ff8662]">{r.title} →</a>)}
          </div>
          <a href="/games/repo" className="mt-6 block text-[#ff9a7a]">All R.E.P.O. guides →</a>
        </nav>
        <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-[#aeb7bc]">
          <a href="/about">About</a><a href="/editorial">Editorial policy</a><a href="/privacy">Privacy</a>
        </footer>
      </article>
    </main>
  );
}
