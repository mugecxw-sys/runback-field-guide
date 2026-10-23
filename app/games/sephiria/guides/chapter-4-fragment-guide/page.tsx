import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { GameWikiCategoryCard, GameWikiShell } from '@/components/game-wiki/game-wiki';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import { chapterOneGuide } from '@/lib/sephiria-chapter-one-guide';
import { chapterTwoGuide } from '@/lib/sephiria-chapter-two-guide';
import { chapterThreeGuide } from '@/lib/sephiria-chapter-three-guide';
import { chapterFourGuide as guide } from '@/lib/sephiria-chapter-four-guide';
import { siteUrl } from '@/lib/repo-guide-pages';

const imageRoot = '/images/games/sephiria/chapter-4/';
const canonical = siteUrl + guide.href;
const images = {
  "fragments": {
    "file": "sephiria-ch4-destiny-fragment-quests.webp",
    "width": 1200,
    "height": 627
  },
  "sealTree": {
    "file": "sephiria-ch4-seal-tree-of-qliphoth.webp",
    "width": 1200,
    "height": 627
  },
  "dispel": {
    "file": "sephiria-ch4-dispel-the-seal.webp",
    "width": 1200,
    "height": 630
  }
} as const;

export const metadata: Metadata = {
  title: guide.seoTitle,
  description: guide.description,
  alternates: { canonical },
  openGraph: {
    title: guide.seoTitle,
    description: guide.description,
    type: 'article',
    url: canonical,
    siteName: 'RUNBACK',
    images: [{ url: imageRoot + images.fragments.file, width: 1200, height: 627, alt: 'Sephiria Chapter 4 Destiny Fragment side quest list' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: guide.seoTitle,
    description: guide.description,
    images: [imageRoot + images.fragments.file],
  },
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="mt-9 min-w-0 scroll-mt-24 border-t border-[var(--gold-border)]/25 pt-6">
    <h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-[var(--heading)] sm:text-3xl">{title}</h2>
    <div className="space-y-4 text-[var(--body)] [&_p]:max-w-[78ch] [&_p]:leading-8">{children}</div>
  </section>;
}

function Screenshot({ name, alt, caption }: { name: keyof typeof images; alt: string; caption: string }) {
  const asset = images[name];
  const src = imageRoot + asset.file;
  return <figure className="min-w-0">
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={'Open full-size image: ' + alt} className="group block overflow-hidden rounded-lg border border-[var(--gold-border)]/30 bg-[var(--surface-inset)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-text)]">
      <Image unoptimized src={src} alt={alt} width={asset.width} height={asset.height} loading="lazy" sizes="(max-width: 1023px) 100vw, 1000px" className="block h-auto w-full transition-opacity group-hover:opacity-90" />
    </a>
    <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{caption} <span className="text-[var(--gold-text)]">Open image to enlarge.</span></figcaption>
  </figure>;
}

export default function ChapterFourGuide() {
  const config = {
    ...sephiriaWikiConfig,
    navigationSections: [
      sephiriaWikiConfig.navigationSections[0],
      { label: 'GUIDES', links: [
        { href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide' },
        { href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide' },
        { href: chapterThreeGuide.href, label: 'Chapter 3 Guide' },
        { href: guide.href, label: 'Chapter 4 Guide' },
      ] },
      ...sephiriaWikiConfig.navigationSections.slice(1),
    ],
  };
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': canonical, name: guide.title, description: guide.description, url: canonical, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: 'RUNBACK', url: siteUrl } },
      { '@type': 'Article', '@id': canonical + '#article', headline: guide.title, description: guide.description, inLanguage: 'en', mainEntityOfPage: { '@id': canonical }, author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' }, publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl }, image: Object.values(images).map((asset) => siteUrl + imageRoot + asset.file) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Sephiria', item: siteUrl + '/games/sephiria' },
        { '@type': 'ListItem', position: 3, name: 'Chapter 4 Guide', item: canonical },
      ] },
    ],
  };
  const quickSteps = [
    'Complete the three Destiny Fragment side quests for Seyla, Khael, and Dyn.',
    'Return to the Chapter 4 main quest and continue until the objective becomes “Seal Tree of Qliphoth.”',
    'Complete the next required run and progress until you reach the sealed area.',
    'Use “Dispel the Seal” when the interaction appears.',
    'Finish the remaining boss encounter and story sequence to complete Chapter 4.',
  ];
  return <GameWikiShell config={config} activeHref={guide.href}>
    <article className="mx-auto min-w-0 max-w-[1000px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm">
        <a href="/">RUNBACK</a><span aria-hidden="true">/</span><a href="/games/sephiria">Sephiria</a><span aria-hidden="true">/</span><span aria-current="page">Chapter 4 Guide</span>
      </nav>
      <header className="relative overflow-hidden border border-[var(--gold-border)]/35 bg-[var(--surface)] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(185,146,86,0.16),transparent_45%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK / SEPHIRIA / CHAPTER 4 GUIDE</p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 leading-8 text-[var(--body-soft)]">Chapter 4 is mostly a quest-progression chapter. You do not need one specific build to complete it. The main objective is to recover the three Destiny Fragments, return to the Chapter 4 main quest, and complete the run that takes you back to the seal.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Version 1.0.33', 'Chapter 4', 'Quest Guide'].map((label) => <span key={label} className="border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] px-3 py-1.5 text-xs font-semibold text-[var(--gold-text)]">{label}</span>)}</div>
        </div>
      </header>

      <Section id="quick-answer" title="How Do I Complete Chapter 4?">
        <p>To complete Chapter 4: Fragment:</p>
        <ol className="grid gap-3 sm:grid-cols-2">{quickSteps.map((step, index) => <li key={step} className="flex min-w-0 gap-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 sm:p-5">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] text-sm font-bold text-[var(--gold-text)]">{index + 1}</span>
          <span className="min-w-0 text-sm leading-7 text-[var(--body-soft)]">{step}</span>
        </li>)}</ol>
      </Section>

      <Section id="destiny-fragments" title="1. Recover the Three Destiny Fragments">
        <p>Chapter 4 gives you three related side quests:</p>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-7">
          <li>Retrieve Destiny Fragment from Seyla</li>
          <li>Retrieve Destiny Fragment from Khael</li>
          <li>Retrieve Destiny Fragment from Dyn</li>
        </ul>
        <p>Complete all three objectives shown in the Side Quest List.</p>
        <p>These quests are the main progression requirement for the first part of Chapter 4. You do not need to force a particular build while completing them — focus on finishing each quest objective.</p>
        <Screenshot name="fragments" alt="Side Quest List showing the Destiny Fragment quests for Seyla, Khael, and Dyn in Chapter 4" caption="Complete all three Destiny Fragment side quests before returning to the Chapter 4 main quest." />
      </Section>

      <Section id="seal-tree" title="2. Seal the Tree of Qliphoth">
        <p>Once the three Destiny Fragment quests are complete, return to the main Chapter 4 quest.</p>
        <p>The objective changes to:</p>
        <blockquote className="border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold leading-7 text-[var(--gold-text)]">Seal Tree of Qliphoth</blockquote>
        <p>At this point, prepare for another successful run. Use a build that can reliably carry you through the later stages rather than trying to reproduce one exact setup.</p>
        <Screenshot name="sealTree" alt="Chapter 4: Fragment quest showing Seal Tree of Qliphoth beside the entrance for the next run" caption="After completing the three Destiny Fragment quests, the main objective advances to Seal Tree of Qliphoth." />
      </Section>

      <Section id="dispel-seal" title="3. Dispel the Seal and Finish the Chapter">
        <p>Continue the required run until you reach the sealed area.</p>
        <p>When the interaction appears, use:</p>
        <blockquote className="border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold leading-7 text-[var(--gold-text)]">Dispel the Seal</blockquote>
        <p>After opening the seal, continue forward and finish the remaining boss encounter and story sequence.</p>
        <p>Complete the final sequence to finish Chapter 4: Fragment.</p>
        <Screenshot name="dispel" alt="Dispel the Seal interaction at the sealed area during the Chapter 4 run" caption="Reach the sealed area during the required run and use Dispel the Seal to continue Chapter 4." />
      </Section>

      <Section id="checklist" title="Chapter 4 Checklist">
        <ul className="space-y-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-5 sm:p-6">{[
          'Retrieve the Destiny Fragment from Seyla',
          'Retrieve the Destiny Fragment from Khael',
          'Retrieve the Destiny Fragment from Dyn',
          'Return to the Chapter 4 main quest',
          'Progress “Seal Tree of Qliphoth”',
          'Complete the next required run',
          'Dispel the Seal',
          'Finish the remaining boss and story sequence',
        ].map((item) => <li key={item} className="flex gap-3 text-sm leading-7"><span aria-hidden="true" className="shrink-0 text-[var(--gold-text)]">✓</span><span className="min-w-0">{item}</span></li>)}</ul>
      </Section>

      <Section id="build" title="Do You Need a Specific Build?">
        <p>No specific build is required for Chapter 4.</p>
        <p>Chapter 4 is mainly gated by quest progression and completing the required run. Use a coherent build that can survive the later stages rather than trying to reproduce one exact Artifact, Combo, or Weapon setup.</p>
      </Section>

      <Section id="related-guides" title="Related Guides">
        <div className="grid gap-3 sm:grid-cols-2">
          <GameWikiCategoryCard item={{ href: '/games/sephiria', label: 'Sephiria Hub', description: 'Browse the Sephiria guides and current reference pages.' }} />
          <GameWikiCategoryCard item={{ href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide', description: 'Learn the beginner loop and see the first chapter clear example.' }} />
          <GameWikiCategoryCard item={{ href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide', description: 'Follow the build progression and boss encounters from a recorded clear.' }} />
          <GameWikiCategoryCard item={{ href: chapterThreeGuide.href, label: 'Chapter 3 Guide – The Tree', description: 'Follow the required runs and animal conversations, then return to the Tree.' }} />
        </div>
      </Section>
    </article>
  </GameWikiShell>;
}
