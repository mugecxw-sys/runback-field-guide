import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/arrow-build';
const h1 = 'Wanderburg Arrow Build Guide (0.9.14)';
const description = 'Two tested Wanderburg Arrow builds compared, showing why Archer Tower, Side Ballista and Turret Layer performed better in the stronger setup.';
const publishedAt = '2026-10-09T00:00:00.000Z';
const modifiedAt = '2026-10-10T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/arrow/';
const videoCaption = 'Archer Tower, Side Ballista and Turret Layer working together after the full core came online.';
const toc = [
  'Short Answer',
  'Setup 1 vs Setup 2',
  'Why Setup 2 Was Stronger',
  'Upgrade Priority',
  'Artifact Choices',
  'Huntress',
  'Setup 2 in Combat',
  'Final Verdict',
];
const comparisonRows = [
  ['Vehicle', 'Wanderturm', 'Wanderturm'],
  ['Captain', 'Huntress', 'Huntress'],
  ['Crew', 'Archer Crew', 'Archer Crew'],
  ['Starter Module', 'Archer Tower', 'Archer Tower'],
  ['Starter Artifact', 'Electric Arrow', 'Reset Lever'],
  ['Main Core', 'Archer Tower + Side Ballista', 'Archer Tower + Side Ballista + Turret Layer'],
  ['Front', 'RAM', 'RAM'],
  ['Back', 'Dash', 'Turret Layer'],
  ['Crowd Damage', 'Enough', 'Stronger after Turret Layer'],
  ['Single-Target Damage', 'Weak', 'Better than Setup 1'],
  ['Mobility', 'Better with Dash', 'More dependent on positioning'],
  ['Artifact Result', 'Electric Arrow was hard to notice', 'Fast Quiver / Golden Bow felt more useful'],
  ['Overall', 'Cleared, but felt weak', 'Clearly stronger'],
];

export const metadata: Metadata = {
  title: h1 + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title: h1 + ' | RUNBACK', description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: modifiedAt },
  twitter: { card: 'summary', title: h1 + ' | RUNBACK', description },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article', headline: h1, description, datePublished: publishedAt, dateModified: modifiedAt,
      inLanguage: 'en', mainEntityOfPage: siteUrl + href,
      author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
      publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
    },
    {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
        { '@type': 'ListItem', position: 3, name: 'Builds', item: siteUrl + '/games/wanderburg/builds' },
        { '@type': 'ListItem', position: 4, name: 'Arrow Build', item: siteUrl + href },
      ],
    },
  ],
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return <section aria-labelledby={id} className="mt-9"><h2 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">{title}</h2><div className="mt-4 space-y-4 leading-8 text-[#c7d0d5]">{children}</div></section>;
}

function VideoFigure() {
  return <figure className="my-6 min-w-0 max-w-full">
    <video controls playsInline preload="none" poster={imageBase + 'arrow-v2-boss.webp'} className="block h-auto w-full max-w-full rounded-xl border border-white/15" aria-label="Setup 2 Archer Tower, Side Ballista and Turret Layer in combat">
      <source src="/videos/games/wanderburg/arrow-build/arrow-v2-core-output.mp4" type="video/mp4" />
      <track kind="captions" src={'data:text/vtt,' + encodeURIComponent('WEBVTT\n\n00:00:00.000 --> 00:00:04.018\n' + videoCaption)} srcLang="en" label="Gameplay captions" />
      Your browser does not support HTML video.
    </video>
    <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">{videoCaption}</figcaption>
  </figure>;
}

export default function WanderburgArrowBuild() {
  return <GameWikiArticleLayout
    config={wanderburgWikiConfig}
    activeHref="/games/wanderburg/builds"
    title={h1}
    description="Two Arrow setups were tested through full runs."
    publishedAt={publishedAt}
    modifiedAt={modifiedAt}
    toc={toc}
    schema={schema}
    label="Tested — Clear"
    footerNote=""
    breadcrumbItems={[
      { label: 'Home', href: '/' },
      { label: 'Wanderburg', href: '/games/wanderburg' },
      { label: 'Builds', href: '/games/wanderburg/builds' },
      { label: 'Arrow Build' },
    ]}
  >
    <article className="game-wiki-markdown min-w-0">
      <Section title="Short Answer">
        <p>The first produced plenty of projectiles but struggled with single-target damage. The second version was clearly stronger once <strong>Archer Tower, Side Ballista and Turret Layer</strong> were working together.</p>
        <p>If you want to copy one of these setups first, use <strong>Setup 2</strong>.</p>
      </Section>

      <Section title="Setup 1 vs Setup 2">
        <div className="max-w-full overflow-x-auto rounded-xl border border-white/15">
          <table aria-label="Arrow setup comparison" className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
            <thead className="bg-[#192126] text-[#fff2df]">
              <tr><th scope="col" aria-label="Comparison category" className="border-b border-white/20 px-4 py-3" /><th scope="col" className="border-b border-white/20 px-4 py-3">Setup 1</th><th scope="col" className="border-b border-white/20 px-4 py-3">Setup 2</th></tr>
            </thead>
            <tbody>{comparisonRows.map(([label, setup1, setup2]) => <tr key={label} className="border-b border-white/10 last:border-0">
              <th scope="row" className="w-1/4 px-4 py-3 font-semibold text-[#fff2df]">{label}</th>
              <td className="px-4 py-3">{setup1}</td>
              <td className="px-4 py-3">{label === 'Overall' ? <strong>{setup2}</strong> : setup2}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <p>Both setups completed full runs. The difference was how well the damage scaled once the build reached the middle and later parts of the run.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-final-stats.webp'} alt="Setup 1 final configuration with Archer Tower, Side Ballista, RAM and Dash" caption="Setup 1 finished with Archer Tower, Side Ballista, RAM and Dash." width={2073} height={1165} />
      </Section>

      <Section title="Why Setup 2 Was Stronger">
        <p>Setup 1 could put a lot of arrows on screen, but that did not translate into strong single-target damage.</p>
        <p>RAM and Dash helped cover some of its damage and mobility problems, while Electric Arrow was difficult to notice.</p>
        <p>Setup 2 changed when <strong>Turret Layer</strong> joined Archer Tower and Side Ballista.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-v2-loadout.webp'} alt="Wanderburg Arrow Build Setup 2 starting loadout with Archer Tower and Reset Lever" caption="Setup 2 started with Wanderturm, Huntress, Archer Crew, Archer Tower and Reset Lever." width={2057} height={1058} />
        <p>Before that point, Archer Tower and Side Ballista could still feel slow when many enemies were on screen.</p>
        <p>After Turret Layer came online, damage improved noticeably.</p>
        <VideoFigure />
        <p>Archer Tower kept dealing automatic damage while moving, Side Ballista added another ranged source, and Turret Layer added sustained pressure in areas the vehicle had already passed through.</p>
        <p>That gave the second setup much better mid-to-late-run scaling.</p>
      </Section>

      <Section title="Upgrade Priority">
        <p>Most upgrade investment in Setup 2 went into <strong>Archer Tower</strong> and <strong>Turret Layer</strong>.</p>
        <p>My preferred order was:</p>
        <ol className="list-decimal space-y-1 pl-6"><li><strong>Auto Attack</strong></li><li><strong>Cooldown</strong></li><li><strong>Ability</strong></li></ol>
        <p>This is not a fixed rule.</p>
        <p>All three upgrade types felt useful on Archer Tower and Turret Layer.</p>
        <p>Side Ballista received fewer upgrades because it could keep contributing without demanding as much attention, leaving more focus on driving.</p>
      </Section>

      <Section title="Artifact Choices">
        <p><strong>Fast Quiver</strong> and <strong>Golden Bow</strong> felt more useful than Electric Arrow in the stronger run.</p>
        <p>Electric Arrow did not stand out enough in Setup 1 to remain a priority pick.</p>
        <p>Setup 2 also used an arrow slowing effect to help control enemies and compensate for weaker mobility.</p>
        <p>Artifact choices can stay flexible. If rerolls are available, use them when the current options do not fit the build, but there is no need to force one exact Artifact every run.</p>
      </Section>

      <Section title="Huntress">
        <p>Huntress was used in both tests.</p>
        <p>Her faster auto attacks fit the idea of this build, but these runs did not compare her directly with other Captains.</p>
        <p>Because of that, this page does not treat Huntress as the definitive best Captain for Arrow builds.</p>
        <p>The biggest improvement between the two runs came from the Module setup, especially Turret Layer.</p>
      </Section>

      <Section title="Setup 2 in Combat">
        <p>The second version completed a full run and felt noticeably stronger than Setup 1.</p>
        <p>Before Turret Layer appeared, damage could still feel a little low.</p>
        <p>Once the full Archer Tower + Side Ballista + Turret Layer core was together, enemies were cleared much faster and the build became more comfortable through the middle and later parts of the run.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-v2-boss.webp'} alt="Wanderburg Archer Tower Side Ballista and Turret Layer Arrow build in combat" caption="Setup 2 during a full run after the Arrow core had come together." width={2047} height={1150} />
      </Section>

      <Section title="Final Verdict">
        <p><strong>Setup 2 is the stronger version from these two tests.</strong></p>
        <p>The core worth copying first is:</p>
        <p><strong>Archer Tower + Side Ballista + Turret Layer</strong></p>
        <p>Put most upgrade investment into Archer Tower and Turret Layer, while Side Ballista can keep adding ranged damage without needing the same level of attention.</p>
        <p>Setup 1 showed that simply putting more arrows on screen was not enough.</p>
        <p>Setup 2 worked better because it added another sustained damage source and scaled much more effectively once the full core was online.</p>
      </Section>
    </article>
  </GameWikiArticleLayout>;
}
