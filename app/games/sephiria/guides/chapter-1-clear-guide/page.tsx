import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { GameWikiShell } from '@/components/game-wiki/game-wiki';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import { chapterOneGuide as guide } from '@/lib/sephiria-chapter-one-guide';
import { sephiriaBossFacts } from '@/lib/sephiria-boss-facts';
import { siteUrl } from '@/lib/repo-guide-pages';

const imageRoot = '/images/games/sephiria/chapter-1/';
const videoRoot = '/videos/games/sephiria/chapter-1/';
const imageUrl = (key: string) => `${imageRoot}sephiria-ch1-${key}.webp`;
const canonical = siteUrl + guide.href;

export const metadata: Metadata = {
  title: guide.seoTitle,
  description: guide.description,
  alternates: { canonical },
  openGraph: { title: guide.seoTitle, description: guide.description, type: 'article', url: canonical, siteName: 'RUNBACK', images: [{ url: imageUrl('overview'), width: 1200, height: 675, alt: 'Sephiria Chapter 1, Mole Stronghold' }] },
  twitter: { card: 'summary_large_image', title: guide.seoTitle, description: guide.description, images: [imageUrl('overview')] },
};

const sections = [
  ['chapter-one', 'What Chapter 1 Is Teaching You'],
  ['sapphire', 'Sapphire Progression Matters'],
  ['build-your-run', 'How to Build Your Run'],
  ['bosses', 'Bosses'],
  ['clear-build', 'The Build That Cleared Chapter 1'],
  ['mistakes', 'Common Mistakes'],
  ['checklist', 'Quick Checklist'],
] as const;
const officialName = (id: string) => sephiriaBossFacts.find(boss => boss.id === id)!.name;
const bosses = [
  {
    slug: 'mogdi', name: 'Mogdi, the Black Hand Mole Chief', area: 'Mole Stronghold · Floor 1',
    difficulty: 'Leaving room to move around the marked ground attacks.',
    image: 'boss-mogdi-pre', combo: 'Storm Cloud 2/4', support: 'Elemental 2/4',
    note: 'This earlier inventory shows the active Storm Cloud combo. More rewards were collected before the fight; it is not the exact entrance inventory.',
    videoSummary: 'Ground markers, the mid-fight transition and the final defeat are included.',
  },
  {
    slug: 'rataka', name: officialName('BOS-08'), area: 'Woodlands · Floor 2',
    difficulty: 'Finding space between the spreading projectiles.',
    image: 'build-mid', combo: 'Storm Cloud 7/8', support: 'Elemental 2/4',
    note: 'The inventory snapshot shows the mid-run build. A weapon upgrade was selected afterward, before entering the fight.',
    videoSummary: 'The complete fight shows the projectile patterns and the boss defeat.',
  },
  {
    slug: 'erma', name: officialName('BOS-06'), area: 'Library · Floor 3',
    difficulty: 'Staying alive through the lasers and changing attack patterns.',
    image: 'build-storm-cloud', combo: 'Storm Cloud 10/10', support: 'Magitech 2/4 · Elemental 2/4 · Companion 1/2',
    note: 'Storm Cloud had reached 10/10 by the last inventory shown before Erma. The video includes the later phases of the fight.',
    videoSummary: 'The full encounter includes the health-bar recoveries, later phases and final defeat.',
  },
  {
    slug: 'askard', name: officialName('BOS-03'), area: 'Wasteland · Floor 4',
    difficulty: 'Avoiding the red ground patterns through both parts of the fight.',
    image: 'boss-askard-pre', combo: 'Storm Cloud 10/10', support: 'Magitech 2/4 · Elemental 2/4 · Companion 1/2',
    note: 'This is the last inventory shown before Askard, rather than an entrance screenshot. Health was restored before the fight.',
    videoSummary: 'Both parts of the encounter and the final defeat are included.',
  },
] as const;

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="mt-12 min-w-0 scroll-mt-24 border-t border-[var(--gold-border)]/25 pt-7">
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Chapter 1 / {number}</p>
    <h2 className="mb-5 mt-2 font-serif text-2xl font-semibold leading-tight text-[var(--heading)] sm:text-3xl">{title}</h2>
    <div className="space-y-5 text-[var(--body)] [&_p]:max-w-[78ch] [&_p]:leading-8">{children}</div>
  </section>;
}

function Shot({ name, alt, caption, eager = false }: { name: string; alt: string; caption: string; eager?: boolean }) {
  return <figure className="min-w-0">
    <a href={imageUrl(name)} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${alt}`} className="group block overflow-hidden rounded-lg border border-[var(--gold-border)]/30 bg-[var(--surface-inset)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-text)]">
      <Image unoptimized src={imageUrl(name)} alt={alt} width={1200} height={name === 'sapphire' ? 644 : 675} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} sizes="(max-width: 1023px) 100vw, 1000px" className="block h-auto w-full transition-opacity group-hover:opacity-90" />
    </a>
    <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{caption} <span className="text-[var(--gold-text)]">Open image to enlarge.</span></figcaption>
  </figure>;
}

function DataTable({ headers, rows, label }: { headers: string[]; rows: ReactNode[][]; label: string }) {
  return <div className="min-w-0 rounded-lg border border-[var(--gold-border)]/25 bg-[var(--table-surface)]">
    <table aria-label={label} className="w-full table-fixed border-collapse text-left text-xs leading-6 sm:text-sm">
      <thead><tr>{headers.map((cell, index) => <th scope="col" key={cell} className={`border-b border-[var(--gold-border)]/25 bg-[var(--surface)] px-2 py-3 font-semibold text-[var(--gold-text)] sm:px-4 ${headers.length === 4 && index > 1 ? 'w-[17%]' : ''}`}>{cell}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i} className="border-b border-[var(--neutral-edge)]/10 last:border-0">{row.map((cell, j) => j === 0 ? <th scope="row" key={j} className="break-words px-2 py-3 align-top font-medium text-[var(--heading)] sm:px-4">{cell}</th> : <td key={j} className="break-words px-2 py-3 align-top text-[var(--body-soft)] sm:px-4">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

function Note({ children }: { children: ReactNode }) {
  return <aside className="rounded-r-lg border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm leading-7 text-[var(--body-soft)]">{children}</aside>;
}

export default function ChapterOneClearGuide() {
  const config = { ...sephiriaWikiConfig, navigationSections: [sephiriaWikiConfig.navigationSections[0], { label: 'GUIDES', links: [{ href: guide.href, label: 'Chapter 1 Clear Guide' }] }, ...sephiriaWikiConfig.navigationSections.slice(1)] };
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': canonical, name: guide.title, description: guide.description, url: canonical, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: 'RUNBACK', url: siteUrl } },
      { '@type': 'Article', '@id': canonical + '#article', headline: guide.title, description: guide.description, inLanguage: 'en', mainEntityOfPage: { '@id': canonical }, author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' }, publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl }, image: [siteUrl + imageUrl('overview'), siteUrl + imageUrl('build-final')] },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Sephiria', item: siteUrl + '/games/sephiria' }, { '@type': 'ListItem', position: 3, name: 'Chapter 1 Guide', item: canonical }] },
    ],
  };
  const textLink = 'font-medium text-[var(--orange-hover)] underline underline-offset-4';
  return <GameWikiShell config={config} activeHref={guide.href}>
    <article className="mx-auto min-w-0 max-w-[1000px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm"><a href="/">RUNBACK</a><span aria-hidden="true">/</span><a href="/games/sephiria">Sephiria</a><span aria-hidden="true">/</span><span aria-current="page">Chapter 1 Guide</span></nav>
      <header className="relative overflow-hidden border border-[var(--gold-border)]/35 bg-[var(--surface)] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(185,146,86,0.16),transparent_45%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK FIELD GUIDE / SEPHIRIA</p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">Sephiria Chapter 1 Clear Guide</h1>
          <p className="mt-5 leading-8 text-[var(--body-soft)]">This guide is for new players learning Sephiria through Chapter 1. The goal is not to force a perfect first run. Chapter 1 teaches the game&apos;s core loop: run, fail or progress, unlock permanent growth, build around what you find, and try again.</p>
          <p className="mt-4 leading-8 text-[var(--body-soft)]">My clear came after multiple attempts and several permanent upgrades. The successful run eventually developed into a Storm Cloud-focused build, with Storm Cloud becoming the largest single damage source in the final damage summary.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Version 1.0.33', 'Beginner Guide', 'Chapter 1'].map(label => <span key={label} className="border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] px-3 py-1.5 text-xs font-semibold text-[var(--gold-text)]">{label}</span>)}</div>
        </div>
      </header>
      <div className="mt-4"><Note>This is a Chapter 1 guide, not a full-game first-clear guide.</Note></div>
      <nav aria-label="On this page" className="mt-6 border-y border-[var(--gold-border)]/25 py-4"><ul className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">{sections.map(([id, title], i) => <li key={id}><a href={`#${id}`} className="text-[var(--body-soft)] hover:text-[var(--orange-hover)]"><span className="mr-2 text-xs text-[var(--gold-label)]">0{i + 1}</span>{title}</a></li>)}</ul></nav>

      <Section id="chapter-one" number="01" title="What Chapter 1 Is Teaching You">
        <p>Chapter 1 is Sephiria&apos;s real introduction. It is where you learn the feel of combat, how rewards shape a run, why inventory space matters, and how a build starts to come together.</p>
        <p>Do not treat an early failure as a wasted run. Each attempt gives you more experience with the game&apos;s systems, and permanent progression can make later attempts more forgiving.</p>
        <div className="grid gap-3 sm:grid-cols-2">{['Do not expect the first run to be perfect.', 'Learn the core systems before worrying about advanced optimization.', 'Let your build develop around a clear damage direction.', 'Failed runs are part of normal progression.'].map((point, i) => <div key={point} className="flex gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 text-sm leading-7"><span className="font-serif text-lg text-[var(--gold-label)]">0{i + 1}</span><span>{point}</span></div>)}</div>
        <Shot name="overview" eager alt="The first floor of Chapter 1, Mole Stronghold" caption="Chapter 1 begins in Mole Stronghold." />
      </Section>

      <Section id="sapphire" number="02" title="Sapphire Progression Matters">
        <p>Failed runs are not only practice. Sapphire can be spent through <a className={textLink} href="/games/sephiria/wiki/destiny-inscription">Destiny Inscription</a> to unlock permanent progression that carries into later attempts.</p>
        <p>Depending on what you unlock, this can include improvements or utility such as HP, MP Regeneration, Talent Points, Inventory Space, Dice-related upgrades, and Weapon Training.</p>
        <Shot name="sapphire" alt="Destiny Inscription permanent progression tree" caption="Destiny Inscription is a way to keep permanent progression moving between attempts; this is an example, not a required upgrade route." />
        <DataTable label="Sapphire progression examples" headers={['Sapphire can improve', 'Examples']} rows={[
          ['Permanent stats', 'HP, MP Regeneration'], ['Run utility', 'Inventory Space, Dice-related upgrades'], ['Progression unlocks', 'Talent Points, Weapon Training'],
        ]} />
        <p>If Chapter 1 feels difficult, you do not have to keep forcing the exact same starting state. Run again, build up permanent progression, and return with more options.</p>
      </Section>

      <Section id="build-your-run" number="03" title="How to Build Your Run">
        <p>You do not need a complicated build plan for Chapter 1, but your choices should start working together.</p>
        <ol aria-label="Build planning flow" className="grid gap-2 sm:grid-cols-5">{['Weapon', 'Weapon Upgrade', 'Main Combo', 'Supporting Artifacts', 'Inventory cleanup'].map((step, i) => <li key={step} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] px-3 py-4 text-sm"><span className="mb-2 block text-[11px] font-bold text-[var(--gold-label)]">0{i + 1} {i < 4 ? '→' : ''}</span><span className="font-semibold text-[var(--heading)]">{step}</span></li>)}</ol>
        <p>The common problem with early runs is not necessarily having weak items. It is having too many unrelated items without a clear main damage engine.</p>
        <p>Once a main combo starts to form, prioritize pieces that strengthen that direction or solve an obvious weakness. You do not need a perfect inventory — you need a coherent one.</p>
        <p className="text-sm">Use the <a className={textLink} href="/games/sephiria/wiki/weapons">Weapons</a>, <a className={textLink} href="/games/sephiria/wiki/weapon-upgrades">Weapon Upgrades</a>, <a className={textLink} href="/games/sephiria/wiki/artifacts">Artifacts</a> and <a className={textLink} href="/games/sephiria/wiki/tablets">Tablets</a> pages when you need to check an item or mechanic.</p>
        <DataTable label="Successful run build timeline" headers={['Stage', 'Main Combo', 'Build State']} rows={[
          ['Early', 'Storm Cloud 1/2', 'Direction starting to form'], ['Mid', 'Storm Cloud 7/8', 'Main damage plan becoming clear'], ['Floor 3 Boss prep', 'Storm Cloud 10/10', 'Core build online'], ['Final', 'Storm Cloud 10/10', 'Chapter 1 clear setup'],
        ]} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Shot name="build-early" alt="Early successful-run inventory with Storm Cloud at 1/2" caption="Early: Storm Cloud starts to form." />
          <Shot name="build-mid" alt="Mid-run inventory with Storm Cloud at 7/8" caption="Mid: a clearer Storm Cloud damage direction." />
          <Shot name="build-storm-cloud" alt="Storm Cloud at 10/10 before the third-floor boss" caption="Before Floor 3's boss: Storm Cloud reaches 10/10." />
          <Shot name="build-final" alt="Final build with Storm Cloud 10/10, Magitech 2/4, Elemental 2/4 and Companion 1/2" caption="Final: Storm Cloud with supporting synergies." />
        </div>
      </Section>

      <Section id="bosses" number="04" title="Bosses">
        <p>The videos below show the real fights from the Chapter 1 clear run. This page keeps the advice short; detailed attack-pattern breakdowns can live in separate Boss guides later.</p>
        <DataTable label="Chapter 1 boss overview" headers={['Boss', 'Main Difficulty', 'Build', 'Fight']} rows={bosses.map(boss => [boss.name, boss.difficulty, <a key="build" className={textLink} href={`#${boss.slug}-build`}>View build</a>, <a key="fight" className={textLink} href={`#${boss.slug}-fight`}>Watch fight</a>])} />
        <div className="space-y-8">{bosses.map((boss, i) => <article key={boss.slug} id={boss.slug} className="min-w-0 scroll-mt-24 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">{boss.area}</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--heading)]">{boss.name}</h3>
          <p className="mt-3 text-sm text-[var(--body-soft)]">{boss.difficulty}</p>
          <h4 id={`${boss.slug}-build`} className="mb-4 mt-6 scroll-mt-24 text-sm font-semibold text-[var(--gold-text)]">Build Before the Fight</h4>
          <Shot name={boss.image} alt={`Inventory snapshot before ${boss.name}`} caption={boss.note} />
          <div className="mt-4"><DataTable label={`${boss.name} build`} headers={['Field', 'Content']} rows={[
            ['Build before the fight', <a key="snapshot" className={textLink} href={imageUrl(boss.image)} target="_blank" rel="noopener noreferrer">View inventory screenshot</a>],
            ...(i >= 2 ? [['Main damage', 'Storm Cloud automatic attacks']] : []),
            ['Main combo', boss.combo], ['Supporting combos', boss.support], ['Result', 'Win'],
          ]} /></div>
          <figure id={`${boss.slug}-fight`} className="mt-6 min-w-0 scroll-mt-24">
            <video controls playsInline preload="none" poster={`${imageRoot}sephiria-ch1-boss-${boss.slug}-poster.webp`} width={1920} height={1080} aria-label={`${boss.name} full Chapter 1 fight`} className="block h-auto w-full rounded-lg border border-[var(--gold-border)]/30 bg-black">
              <source src={`${videoRoot}sephiria-ch1-boss-${boss.slug}.mp4`} type="video/mp4" />
              <track kind="captions" src={`${videoRoot}sephiria-ch1-boss-${boss.slug}.vtt`} srcLang="en" label="Gameplay context" />
              Your browser does not support HTML video.
            </video>
            <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{boss.videoSummary} Press play to load the video.</figcaption>
          </figure>
        </article>)}</div>
      </Section>

      <Section id="clear-build" number="05" title="The Build That Cleared Chapter 1">
        <p>The successful run developed into a Storm Cloud-focused build.</p>
        <p>By the later part of the chapter, Storm Cloud had reached 10/10 and had become the run&apos;s main damage engine. The build also had smaller Magitech, Elemental, and Companion synergies.</p>
        <p>This does not mean Storm Cloud was the only source of damage. It means it was the clearest core of this particular clear.</p>
        <Shot name="build-final" alt="The final Storm Cloud-focused Chapter 1 clear build" caption="The final build: Storm Cloud 10/10 with Magitech, Elemental and Companion synergies." />
        <DataTable label="Chapter 1 clear build" headers={['Field', 'Result']} rows={[
          ['Build identity', 'Storm Cloud-focused'], ['Main damage', 'Storm Cloud automatic attacks'], ['Main combo', 'Storm Cloud 10/10'], ['Supporting combo', 'Magitech 2/4'], ['Supporting combo', 'Elemental 2/4'], ['Supporting combo', 'Companion 1/2'], ['Result', 'Chapter 1 Clear'],
        ]} />
        <Shot name="damage-summary" alt="Final damage summary: Storm Cloud 44,208 damage out of 85,100 total" caption="Storm Cloud was the largest single damage source in the final damage summary." />
        <p>In the final damage summary, Storm Cloud dealt <strong className="text-[var(--heading)]">44,208 of 85,100 total recorded damage — roughly 52%</strong> — making it the largest single damage source in this clear.</p>
        <Note>This is an example clear, not a claim that Storm Cloud is the best or required Chapter 1 build.</Note>
        <Shot name="chapter-completed" alt="Main Quest Chapter 1: The Cult Leader, completed" caption="Chapter 1: The Cult Leader — completed." />
      </Section>

      <Section id="mistakes" number="06" title="Common Mistakes">
        <div className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-5">
          <h3 className="font-serif text-xl font-semibold text-[var(--heading)]">Build is too scattered</h3>
          <p className="mt-3">Picking up many useful-looking Artifacts does not automatically create a good build. If nothing supports the same damage engine, boss fights can become much longer than they need to be.</p>
          <p className="mt-3 font-medium text-[var(--gold-text)]">Commit to one main direction once the run gives you enough pieces to support it.</p>
        </div>
      </Section>

      <Section id="checklist" number="07" title="Quick Checklist">
        <ul className="space-y-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-5 sm:p-6">{['Use Sapphire to keep permanent progression moving.', 'Give each run one clear main damage direction.', 'Avoid filling the inventory with unrelated pieces.', 'In boss fights, survive first and use safe openings to deal damage.'].map(point => <li key={point} className="flex gap-3 text-sm leading-7"><span aria-hidden="true" className="text-[var(--gold-text)]">✓</span><span>{point}</span></li>)}</ul>
      </Section>
    </article>
  </GameWikiShell>;
}
