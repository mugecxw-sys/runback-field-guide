import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { GameWikiShell } from '@/components/game-wiki/game-wiki';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import { chapterOneGuide } from '@/lib/sephiria-chapter-one-guide';
import { chapterTwoGuide as guide } from '@/lib/sephiria-chapter-two-guide';
import { siteUrl } from '@/lib/repo-guide-pages';

const imageRoot = '/images/games/sephiria/chapter-2/';
const videoRoot = '/videos/games/sephiria/chapter-2/';
const canonical = siteUrl + guide.href;

const images = {
  overview: { file: 'sephiria-ch2-overview.webp', width: 1400, height: 788 },
  start: { file: 'sephiria-ch2-build-start.webp', width: 1200, height: 675 },
  early: { file: 'sephiria-ch2-build-early.webp', width: 1200, height: 675 },
  mid: { file: 'sephiria-ch2-build-mid.webp', width: 1200, height: 675 },
  erma: { file: 'sephiria-ch2-boss-erma-pre.webp', width: 1200, height: 675 },
  late: { file: 'sephiria-ch2-build-late.webp', width: 1200, height: 675 },
  final: { file: 'sephiria-ch2-build-final.webp', width: 1200, height: 675 },
  damage: { file: 'sephiria-ch2-damage-summary.webp', width: 1200, height: 675 },
  clear: { file: 'sephiria-ch2-clear-evidence.webp', width: 1200, height: 675 },
} as const;

type ImageKey = keyof typeof images;
const imageUrl = (key: ImageKey) => imageRoot + images[key].file;

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
    images: [{ url: imageUrl('overview'), width: 1400, height: 788, alt: 'Sephiria Chapter 2 main quest' }],
  },
  twitter: { card: 'summary_large_image', title: guide.seoTitle, description: guide.description, images: [imageUrl('overview')] },
};

const sectionLinks = [
  ['at-a-glance', 'The Successful Run at a Glance'],
  ['build-development', 'How the Build Developed'],
  ['bosses', 'Bosses Encountered in This Clear'],
  ['final-build', 'The Final Build'],
  ['damage', 'What Actually Dealt the Damage'],
  ['chapter-clear', 'Chapter 2 Clear'],
  ['takeaways', 'Quick Takeaways'],
] as const;

const timeline = [
  { stage: 'Start', image: 'start' as const, caption: 'Starting stats and inventory before the run.', main: '—', support: '—', change: 'The starting inventory and stats before entering Chapter 2.' },
  { stage: 'Early', image: 'early' as const, caption: 'Storm Cloud 5/6 with Companion 1/2.', main: 'Storm Cloud 5/6', support: 'Companion 1/2', change: 'Zappy Custard Pastry is in the inventory as the first clear direction takes shape.' },
  { stage: 'Mid', image: 'mid' as const, caption: 'Storm Cloud 8/10 with Magitech 2/4 and Companion 1/2.', main: 'Storm Cloud 8/10', support: 'Magitech 2/4; Companion 1/2', change: 'Stone Flower and Three-Headed are in the build, alongside the confirmed Ruadhslea Spear.' },
  { stage: 'Late', image: 'late' as const, caption: 'Storm Cloud 10/10, Magitech 4/6 and Companion 2/4.', main: 'Storm Cloud 10/10', support: 'Magitech 4/6; Companion 2/4', change: 'After Erma, the build has Storm Cloud online with larger supporting combos.' },
  { stage: 'Final', image: 'final' as const, caption: 'Latest confirmed build before Askard.', main: 'Storm Cloud 10/10', support: 'Magitech 6/8; Companion 2/4', change: 'The latest confirmed build before the final recorded boss encounter.' },
] as const;

const bosses = [
  {
    slug: 'odner', name: 'Odner, the Blasting Expert', area: 'Mole Stronghold / Floor 1', image: 'early' as const,
    combo: 'Storm Cloud 5/6', support: 'Companion 1/2', weapon: 'Georoid Spear',
    artifacts: 'Zappy Custard Pastry; Sharp Acorn; Stone Flower; Model Mast',
    poster: 'sephiria-ch2-boss-odner-poster.webp', video: 'sephiria-ch2-boss-odner-finish.mp4',
    summary: 'This clip shows the final part of the recorded Odner encounter and the successful finish.',
  },
  {
    slug: 'lerid', name: 'Lerid, the Shadow Blade', area: 'Woodlands / Floor 2', image: 'mid' as const,
    combo: 'Storm Cloud 8/10', support: 'Magitech 2/4; Companion 1/2', weapon: 'Ruadhslea Spear',
    artifacts: 'Lightning Stone; Stone Flower; Charm of Lightning; Sharp Acorn; Zappy Custard Pastry',
    poster: 'sephiria-ch2-boss-lerid-poster.webp', video: 'sephiria-ch2-boss-lerid-finish.mp4',
    summary: 'This clip shows the closing part of the recorded Lerid encounter.',
  },
  {
    slug: 'erma', name: 'Erma, the Mad Scientist', area: 'Library / Floor 3', image: 'erma' as const,
    combo: 'Storm Cloud 10/10', support: 'Magitech 4/6; Companion 1/2', weapon: 'Ruadhslea Spear',
    artifacts: 'Leaf Bird Leather; Cloud Bottle; Lightning-Struck Branch; Thunder\'s Earring; Mini Ballista; Lightning Stone',
    poster: 'sephiria-ch2-boss-erma-poster.webp', video: 'sephiria-ch2-boss-erma-finish.mp4',
    summary: 'This clip shows the final part of the Erma fight from the successful Chapter 2 run.',
  },
  {
    slug: 'askard', name: 'Askard, the Cult Leader', area: 'Wasteland / Floor 4', image: 'final' as const,
    combo: 'Storm Cloud 10/10', support: 'Magitech 6/8; Companion 2/4', weapon: 'Ruadhslea Spear',
    artifacts: 'Mining Supervisor Armband; Thunder\'s Earring; Lightning-Struck Branch; Mini Ballista; Cloud Bottle; Leaf Bird Leather; Lightning Stone; Sharp Acorn',
    poster: 'sephiria-ch2-boss-askard-poster.webp', video: 'sephiria-ch2-boss-askard-finish.mp4',
    summary: 'This is the final portion of the recorded Askard encounter before the Chapter 2 clear.',
  },
] as const;

const damage = [
  { source: 'Storm Cloud (Ability)', amount: 75176 },
  { source: 'Normal Attack (Weapon)', amount: 14142 },
  { source: 'Dash attack (Weapon)', amount: 5485 },
  { source: 'Electrocution (Ability)', amount: 4937 },
  { source: 'Thunder\'s Earring (Artifact)', amount: 2118 },
  { source: 'Mini Ballista (Artifact)', amount: 1925 },
  { source: 'Special Attack (Weapon)', amount: 1179 },
  { source: 'Mining Supervisor Armband (Artifact)', amount: 715 },
  { source: 'Lightning-Struck Branch (Artifact)', amount: 213 },
] as const;
const totalDamage = damage.reduce((sum, row) => sum + row.amount, 0);
const numberFormat = new Intl.NumberFormat('en-US');

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="mt-12 min-w-0 scroll-mt-24 border-t border-[var(--gold-border)]/25 pt-7">
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Chapter 2 / {number}</p>
    <h2 className="mb-5 mt-2 font-serif text-2xl font-semibold leading-tight text-[var(--heading)] sm:text-3xl">{title}</h2>
    <div className="space-y-5 text-[var(--body)] [&_p]:max-w-[78ch] [&_p]:leading-8">{children}</div>
  </section>;
}

function Screenshot({ name, alt, caption, eager = false }: { name: ImageKey; alt: string; caption: string; eager?: boolean }) {
  const asset = images[name];
  return <figure className="min-w-0">
    <a href={imageUrl(name)} target="_blank" rel="noopener noreferrer" aria-label={'Open full-size image: ' + alt} className="group block overflow-hidden rounded-lg border border-[var(--gold-border)]/30 bg-[var(--surface-inset)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-text)]">
      <Image unoptimized src={imageUrl(name)} alt={alt} width={asset.width} height={asset.height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} sizes="(max-width: 1023px) 100vw, 1000px" className="block h-auto w-full transition-opacity group-hover:opacity-90" />
    </a>
    <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{caption} <span className="text-[var(--gold-text)]">Open image to enlarge.</span></figcaption>
  </figure>;
}

function DataTable({ headers, rows, label }: { headers: string[]; rows: ReactNode[][]; label: string }) {
  return <div className="min-w-0 rounded-lg border border-[var(--gold-border)]/25 bg-[var(--table-surface)]">
    <table aria-label={label} className="w-full table-fixed border-collapse text-left text-xs leading-6 sm:text-sm">
      <thead><tr>{headers.map((cell) => <th scope="col" key={cell} className="border-b border-[var(--gold-border)]/25 bg-[var(--surface)] px-2 py-3 font-semibold text-[var(--gold-text)] sm:px-4">{cell}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i} className="border-b border-[var(--neutral-edge)]/10 last:border-0">{row.map((cell, j) => j === 0 ? <th scope="row" key={j} className="break-words px-2 py-3 align-top font-medium text-[var(--heading)] sm:px-4">{cell}</th> : <td key={j} className="break-words px-2 py-3 align-top text-[var(--body-soft)] sm:px-4">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

function Timeline({ rows }: { rows: typeof timeline }) {
  return <>
    <div className="hidden lg:block"><DataTable label="Chapter 2 build timeline" headers={['Stage', 'Main Combo', 'Supporting Combos', 'What Changed']} rows={rows.map((row) => [row.stage, row.main, row.support, row.change])} /></div>
    <div className="space-y-3 lg:hidden">{rows.map((row) => <article key={row.stage} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
      <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{row.stage}</h3>
      <dl className="mt-3 grid grid-cols-[7rem_minmax(0,1fr)] gap-x-3 gap-y-2 text-sm leading-6">
        <dt className="text-[var(--gold-text)]">Main combo</dt><dd className="min-w-0 break-words">{row.main}</dd>
        <dt className="text-[var(--gold-text)]">Supporting</dt><dd className="min-w-0 break-words">{row.support}</dd>
        <dt className="text-[var(--gold-text)]">Changed</dt><dd className="min-w-0 break-words">{row.change}</dd>
      </dl>
    </article>)}</div>
  </>;
}

function DamageRows() {
  return <>
    <div className="hidden lg:block"><DataTable label="Final damage summary" headers={['Source', 'Damage', 'Share of Total']} rows={damage.map((row) => [row.source, numberFormat.format(row.amount), (row.amount / totalDamage * 100).toFixed(1) + '%'])} /></div>
    <div className="grid gap-2 sm:grid-cols-2 lg:hidden">{damage.map((row) => <article key={row.source} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-3">
      <h3 className="break-words text-sm font-medium leading-6 text-[var(--heading)]">{row.source}</h3>
      <p className="mt-1 text-xs text-[var(--body-soft)]">{numberFormat.format(row.amount)} damage <span className="text-[var(--gold-text)]">· {(row.amount / totalDamage * 100).toFixed(1)}% of total</span></p>
    </article>)}</div>
  </>;
}

function Note({ children }: { children: ReactNode }) {
  return <aside className="rounded-r-lg border-l-2 border-[var(--orange-text)] bg-[var(--surface)] px-4 py-3 text-sm leading-7 text-[var(--body-soft)]">{children}</aside>;
}

export default function ChapterTwoClearGuide() {
  const config = { ...sephiriaWikiConfig, navigationSections: [sephiriaWikiConfig.navigationSections[0], { label: 'GUIDES', links: [{ href: guide.href, label: 'Chapter 2 Clear Guide' }, { href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide' }] }, ...sephiriaWikiConfig.navigationSections.slice(1)] };
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': canonical, name: guide.title, description: guide.description, url: canonical, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: 'RUNBACK', url: siteUrl } },
      { '@type': 'Article', '@id': canonical + '#article', headline: guide.title, description: guide.description, inLanguage: 'en', mainEntityOfPage: { '@id': canonical }, author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' }, publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl }, image: [siteUrl + imageUrl('overview'), siteUrl + imageUrl('final')] },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Sephiria', item: siteUrl + '/games/sephiria' }, { '@type': 'ListItem', position: 3, name: 'Chapter 2 Guide', item: canonical }] },
    ],
  };
  return <GameWikiShell config={config} activeHref={guide.href}>
    <article className="mx-auto min-w-0 max-w-[1000px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm"><a href="/">RUNBACK</a><span aria-hidden="true">/</span><a href="/games/sephiria">Sephiria</a><span aria-hidden="true">/</span><span aria-current="page">Chapter 2 Guide</span></nav>
      <header className="relative overflow-hidden border border-[var(--gold-border)]/35 bg-[var(--surface)] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(185,146,86,0.16),transparent_45%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK / SEPHIRIA / CHAPTER 2 GUIDE</p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">Sephiria Chapter 2 Clear Guide</h1>
          <p className="mt-5 leading-8 text-[var(--body-soft)]">Chapter 2 is where a run needs to stay coherent for longer. Instead of focusing only on the final inventory, this guide follows one successful clear from the build’s early development through the boss encounters and the final Chapter 2 completion.</p>
          <p className="mt-4 leading-8 text-[var(--body-soft)]">The run shown here is one real clear, not a claim that this is the only way to beat Chapter 2 or the best possible build.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Version 1.0.33', 'Chapter 2', 'Real Clear Run'].map((label) => <span key={label} className="border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] px-3 py-1.5 text-xs font-semibold text-[var(--gold-text)]">{label}</span>)}</div>
        </div>
      </header>
      <nav aria-label="On this page" className="mt-6 border-y border-[var(--gold-border)]/25 py-4"><ul className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">{sectionLinks.map(([id, title], index) => <li key={id}><a href={'#' + id} className="text-[var(--body-soft)] hover:text-[var(--orange-hover)]"><span className="mr-2 text-xs text-[var(--gold-label)]">0{index + 1}</span>{title}</a></li>)}</ul></nav>

      <Section id="at-a-glance" number="01" title="The Successful Run at a Glance">
        <p>This recorded Chapter 2 clear gives us a useful view of the whole run rather than just the final result.</p>
        <ul className="grid gap-3 sm:grid-cols-2">{['Five useful build checkpoints', 'Four recorded boss encounters', 'A final confirmed build state', 'A complete end-of-run damage summary', 'A confirmed Chapter 2 clear'].map((point) => <li key={point} className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--body-soft)]">{point}</li>)}</ul>
        <p>The important part is how the build develops. A strong final inventory does not appear all at once. The screenshots below show which direction the run took as more pieces became available.</p>
        <Screenshot name="overview" eager alt="Chapter 2: The Seed main quest shown in Bunnyville" caption="The recorded run begins with the Chapter 2 main quest active." />
      </Section>

      <Section id="build-development" number="02" title="How the Build Developed">
        <p>Do not judge a run only by its final inventory.</p>
        <p>A more useful question is: when did the build start to have a clear damage direction, and which later choices strengthened it?</p>
        <p>The five checkpoints from this clear show that progression from the early setup to the latest confirmed build.</p>
        <Timeline rows={timeline} />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{timeline.map((row) => <article key={row.stage} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-3 sm:p-4">
          <h3 className="mb-3 text-sm font-semibold text-[var(--gold-text)]">{row.stage}</h3>
          <Screenshot name={row.image} alt={row.stage + ' Chapter 2 build checkpoint'} caption={row.caption} />
        </article>)}</div>
      </Section>

      <Section id="bosses" number="03" title="Bosses Encountered in This Clear">
        <p>This recorded Chapter 2 clear encountered Odner, the Blasting Expert; Lerid, the Shadow Blade; Erma, the Mad Scientist; and Askard, the Cult Leader.</p>
        <p>These are the encounters from this specific recorded run. This section is not intended to be a complete list of every boss that can appear in Chapter 2.</p>
        <p>For each encounter, the build image shows the latest reliable state before the fight, followed by a short clip showing how the fight ended.</p>
        <div className="grid gap-5 xl:grid-cols-2">{bosses.map((boss) => <article key={boss.slug} id={boss.slug} className="min-w-0 scroll-mt-24 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">{boss.area}</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--heading)]">{boss.name}</h3>
          <h4 className="mb-4 mt-6 text-sm font-semibold text-[var(--gold-text)]">Build Before the Fight</h4>
          <Screenshot name={boss.image} alt={boss.name + ' build before the fight'} caption="Latest reliable inventory snapshot before the encounter." />
          <div className="mt-4"><DataTable label={boss.name + ' build before the fight'} headers={['Field', 'Content']} rows={[
            ['Weapon', boss.weapon], ['Main combo', boss.combo], ['Supporting combos', boss.support], ['Key Artifacts', boss.artifacts], ['Result', 'Win'],
          ]} /></div>
          <figure className="mt-6 min-w-0">
            <h4 className="mb-3 text-sm font-semibold text-[var(--gold-text)]">Boss Finish Clip</h4>
            <video controls playsInline preload="none" poster={imageRoot + boss.poster} width={1280} height={720} aria-label={boss.name + ' Boss Finish Clip'} className="block h-auto w-full rounded-lg border border-[var(--gold-border)]/30 bg-black">
              <source src={videoRoot + boss.video} type="video/mp4" />
              <track kind="captions" src={videoRoot + boss.slug + '-context.vtt'} srcLang="en" label="Gameplay context" />
              Your browser does not support HTML video.
            </video>
            <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{boss.summary} Press play to load the clip.</figcaption>
          </figure>
        </article>)}</div>
      </Section>

      <Section id="final-build" number="04" title="The Final Build">
        <p>By the end of the run, the build had reached its latest confirmed state shown below.</p>
        <Screenshot name="final" alt="Latest confirmed Chapter 2 build before Askard" caption="The latest confirmed build before the final encounter." />
        <DataTable label="Final Chapter 2 build" headers={['Field', 'Result']} rows={[
          ['Main damage direction', 'Storm Cloud (Ability)'], ['Main combo', 'Storm Cloud 10/10'], ['Supporting combos', 'Magitech 6/8; Companion 2/4'], ['Weapon', 'Ruadhslea Spear'], ['Weapon upgrade', 'Georoid Spear'], ['Key Artifacts', 'Lightning Stone; Sharp Acorn; Leaf Bird Leather; Cloud Bottle; Mining Supervisor Armband; Thunder’s Earring; Lightning-Struck Branch; Mini Ballista'], ['Result', 'Chapter 2 Clear'],
        ]} />
        <p>This should be treated as an example successful build, not a mandatory Chapter 2 recipe.</p>
        <p>Sephiria gives you different pieces from run to run. The useful lesson is the relationship between the build’s main damage direction and the supporting pieces around it, not reproducing every slot exactly.</p>
      </Section>

      <Section id="damage" number="05" title="What Actually Dealt the Damage">
        <p>The final damage summary recorded {numberFormat.format(totalDamage)} total damage across {damage.length} entries.</p>
        <p>That makes the end-of-run summary useful for checking which parts of the build actually contributed damage instead of judging the build only by how the inventory looked.</p>
        <Screenshot name="damage" alt="End-of-run damage summary showing Storm Cloud at the top" caption="The end-of-run summary lists nine recorded damage sources." />
        <DamageRows />
        <Note>Storm Cloud dealt {numberFormat.format(damage[0].amount)} damage, or {(damage[0].amount / totalDamage * 100).toFixed(1)}% of the total recorded damage in this clear.</Note>
      </Section>

      <Section id="chapter-clear" number="06" title="Chapter 2 Clear">
        <Screenshot name="clear" alt="Main Quest Chapter 2: The Seed completed" caption="The Main Quest screen confirms Chapter 2: The Seed is completed." />
        <p>The run ends with a confirmed Chapter 2 completion.</p>
        <p>The main takeaway from this clear is not that one exact inventory is required. It is that the run developed a recognizable damage direction, continued strengthening it as new rewards appeared, and reached the end of the chapter with enough of the build working together.</p>
      </Section>

      <Section id="takeaways" number="07" title="Quick Takeaways">
        <ul className="space-y-3 border border-[var(--gold-border)]/30 bg-[var(--surface)] p-5 sm:p-6">{[
          'Give the run a clear main damage direction once the pieces start to line up.',
          'Use later rewards to strengthen that direction instead of collecting unrelated effects.',
          'Judge a build by what is actually contributing, not just by how many items it contains.',
          'Use the pre-fight screenshots as examples of what a working run looked like at each boss.',
          'Treat this clear as a tested example, not as the only correct Chapter 2 build.',
        ].map((point) => <li key={point} className="flex gap-3 text-sm leading-7"><span aria-hidden="true" className="text-[var(--gold-text)]">•</span><span>{point}</span></li>)}</ul>
      </Section>

      <Section id="related-guides" number="08" title="Related Guides">
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="/games/sephiria" className="border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 transition-colors hover:border-[var(--gold-border)]"><span className="font-serif text-lg font-semibold text-[var(--heading)]">Sephiria Hub</span><span className="mt-2 block text-sm leading-6 text-[var(--body-soft)]">Browse the game guide and current Sephiria reference pages.</span></a>
          <a href={chapterOneGuide.href} className="border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 transition-colors hover:border-[var(--gold-border)]"><span className="font-serif text-lg font-semibold text-[var(--heading)]">Chapter 1 Clear Guide</span><span className="mt-2 block text-sm leading-6 text-[var(--body-soft)]">Learn the beginner loop and see the first chapter clear example.</span></a>
        </div>
      </Section>
    </article>
  </GameWikiShell>;
}
