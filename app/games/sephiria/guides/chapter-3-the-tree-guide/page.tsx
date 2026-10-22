import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { GameWikiCategoryCard, GameWikiShell } from '@/components/game-wiki/game-wiki';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import { chapterOneGuide } from '@/lib/sephiria-chapter-one-guide';
import { chapterTwoGuide } from '@/lib/sephiria-chapter-two-guide';
import { chapterThreeGuide as guide } from '@/lib/sephiria-chapter-three-guide';
import { siteUrl } from '@/lib/repo-guide-pages';

const imageRoot = '/images/games/sephiria/chapter-3/';
const canonical = siteUrl + guide.href;
const images = {
  explore: { file: 'sephiria-ch3-explore-beyond-wasteland.webp', width: 1200, height: 629 },
  animals: { file: 'sephiria-ch3-three-animals.webp', width: 1200, height: 673 },
  tree: { file: 'sephiria-ch3-talk-to-tree.webp', width: 1200, height: 620 },
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
    images: [{ url: imageRoot + images.explore.file, width: 1200, height: 629, alt: 'Sephiria Chapter 3: The Tree quest in Bunnyville' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: guide.seoTitle,
    description: guide.description,
    images: [imageRoot + images.explore.file],
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

export default function ChapterThreeGuide() {
  const config = {
    ...sephiriaWikiConfig,
    navigationSections: [
      sephiriaWikiConfig.navigationSections[0],
      { label: 'GUIDES', links: [
        { href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide' },
        { href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide' },
        { href: guide.href, label: 'Chapter 3 Guide' },
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
        { '@type': 'ListItem', position: 3, name: 'Chapter 3 Guide', item: canonical },
      ] },
    ],
  };
  const quickSteps = [
    'Complete three successful runs while progressing the Chapter 3 quest.',
    'Follow the Chapter 3 quest and talk to the three animals required by the story.',
    'After those conversations are complete, return to the Tree in Bunnyville.',
    'Talk to the Tree to complete the chapter.',
  ];
  return <GameWikiShell config={config} activeHref={guide.href}>
    <article className="mx-auto min-w-0 max-w-[1000px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm">
        <a href="/">RUNBACK</a><span aria-hidden="true">/</span><a href="/games/sephiria">Sephiria</a><span aria-hidden="true">/</span><span aria-current="page">Chapter 3 Guide</span>
      </nav>
      <header className="relative overflow-hidden border border-[var(--gold-border)]/35 bg-[var(--surface)] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(185,146,86,0.16),transparent_45%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK / SEPHIRIA / CHAPTER 3 GUIDE</p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 leading-8 text-[var(--body-soft)]">Chapter 3 is much simpler than the earlier chapters. There is no specific build you need to copy. The main objective is to keep progressing the chapter quest through successful runs, follow the story conversations, and return to the Tree in Bunnyville.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Version 1.0.33', 'Chapter 3', 'Quest Guide'].map((label) => <span key={label} className="border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] px-3 py-1.5 text-xs font-semibold text-[var(--gold-text)]">{label}</span>)}</div>
        </div>
      </header>

      <Section id="quick-answer" title="How Do I Complete Chapter 3?">
        <p>To complete Chapter 3: The Tree:</p>
        <ol className="grid gap-3 sm:grid-cols-2">{quickSteps.map((step, index) => <li key={step} className="flex min-w-0 gap-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 sm:p-5">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] text-sm font-bold text-[var(--gold-text)]">{index + 1}</span>
          <span className="min-w-0 text-sm leading-7 text-[var(--body-soft)]">{step}</span>
        </li>)}</ol>
      </Section>

      <Section id="successful-runs" title="1. Keep Running Until the Quest Advances">
        <p>At the start of Chapter 3, the quest objective tells you to:</p>
        <blockquote className="border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold leading-7 text-[var(--gold-text)]">Explore deeper beyond the wasteland</blockquote>
        <p>Continue playing runs and successfully clearing them. Chapter 3 progresses through repeated successful runs rather than requiring one special build or a unique boss strategy.</p>
        <p>You do not need to reproduce the same build every time. Use whatever coherent build your run gives you and focus on completing the run.</p>
        <Screenshot name="explore" alt="Chapter 3: The Tree quest asking the player to explore deeper beyond the wasteland near the Bunnyville entrance" caption="Chapter 3 begins by asking you to explore deeper beyond the wasteland." />
      </Section>

      <Section id="three-animals" title="2. Talk to the Three Animals">
        <p>After completing the required successful runs, continue following the Chapter 3 quest and complete the three required animal conversations.</p>
        <p>Use the active quest objective and story markers to continue the sequence. Do not assume that all three conversations take place in Bunnyville.</p>
        <p>Once the required conversations are complete, the quest will eventually send you back to the Tree.</p>
        <Screenshot name="animals" alt="Fox dialogue during Chapter 3 inside Qliphoth" caption="One of the Chapter 3 story conversations after progressing the required runs." />
      </Section>

      <Section id="return-to-tree" title="3. Return to the Tree">
        <p>The final objective becomes:</p>
        <blockquote className="border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold leading-7 text-[var(--gold-text)]">Talk to the Tree</blockquote>
        <p>Return to the Tree in Bunnyville and interact with it.</p>
        <p>Finish the conversation to complete Chapter 3: The Tree.</p>
        <Screenshot name="tree" alt="Talk to the Tree objective and F Talk interaction at the Tree in Bunnyville" caption="The final Chapter 3 objective sends you back to the Tree in Bunnyville." />
      </Section>

      <Section id="checklist" title="Chapter 3 Checklist">
        <ul className="space-y-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-5 sm:p-6">{[
          'Complete three successful runs',
          'Follow the Chapter 3 quest',
          'Complete all three required animal conversations',
          'Return to the Tree in Bunnyville',
          'Talk to the Tree to finish Chapter 3',
        ].map((item) => <li key={item} className="flex gap-3 text-sm leading-7"><span aria-hidden="true" className="shrink-0 text-[var(--gold-text)]">✓</span><span className="min-w-0">{item}</span></li>)}</ul>
      </Section>

      <Section id="build" title="Do You Need a Specific Build?">
        <p>No specific build is required for Chapter 3.</p>
        <p>The important part is being able to complete the required runs. Build around the Artifacts, Combos, and Weapon Upgrades that your run gives you rather than trying to reproduce one exact setup.</p>
      </Section>

      <Section id="related-guides" title="Related Guides">
        <div className="grid gap-3 sm:grid-cols-2">
          <GameWikiCategoryCard item={{ href: '/games/sephiria', label: 'Sephiria Hub', description: 'Browse the Sephiria guides and current reference pages.' }} />
          <GameWikiCategoryCard item={{ href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide', description: 'Learn the beginner loop and see the first chapter clear example.' }} />
          <GameWikiCategoryCard item={{ href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide', description: 'Follow the build progression and boss encounters from a recorded clear.' }} />
        </div>
      </Section>
    </article>
  </GameWikiShell>;
}
