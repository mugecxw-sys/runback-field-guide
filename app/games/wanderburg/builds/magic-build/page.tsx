import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/magic-build';
const h1 = 'Wanderburg Magic Build Guide (0.9.14)';
const description = 'A tested Wanderburg Magic build centered on Lightning Mage, with upgrade priorities, Force Mage support, Legendary upgrades and boss tips.';
const publishedAt = '2026-10-07T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/magic/';
const toc = [
  'Quick Setup',
  'Build Around Lightning Mage',
  'Auto Early, Cooldown Later',
  'Legendary Lightning Upgrades',
  'Force Mage Is Support',
  'Do Not Overinvest in Wizard Crew',
  'Keep the Other Slots Flexible',
  'Bosses',
  'Tested Result',
];

export const metadata: Metadata = {
  title: h1 + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: {
    title: h1 + ' | RUNBACK',
    description,
    type: 'article',
    url: siteUrl + href,
    publishedTime: publishedAt,
    modifiedTime: publishedAt,
  },
  twitter: { card: 'summary', title: h1 + ' | RUNBACK', description },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: h1,
      description,
      datePublished: publishedAt,
      dateModified: publishedAt,
      inLanguage: 'en',
      mainEntityOfPage: siteUrl + href,
      author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
      publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
        { '@type': 'ListItem', position: 3, name: 'Builds', item: siteUrl + '/games/wanderburg/builds' },
        { '@type': 'ListItem', position: 4, name: 'Magic Build', item: siteUrl + href },
      ],
    },
  ],
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return <section aria-labelledby={id} className="mt-9"><h2 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">{title}</h2><div className="mt-4 space-y-4 leading-8 text-[#c7d0d5]">{children}</div></section>;
}

function VideoFigure() {
  return (
    <figure className="my-6 min-w-0 max-w-full">
      <video
        controls
        playsInline
        preload="none"
        poster={imageBase + 'magic-boss.webp'}
        className="block h-auto w-full max-w-full rounded-xl border border-white/15"
        aria-label="Lightning Mage can hit multiple targets while you keep moving"
      >
        <source src="/videos/games/wanderburg/magic-build/lightning-mage-multi-target.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:04.018%0ALightning%20Mage%20can%20hit%20multiple%20targets%20while%20you%20keep%20moving." srcLang="en" label="Gameplay captions" />
        Your browser does not support HTML video.
      </video>
      <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">Lightning Mage can hit multiple targets while you keep moving.</figcaption>
    </figure>
  );
}

export default function WanderburgMagicBuild() {
  return (
    <GameWikiArticleLayout
      config={wanderburgWikiConfig}
      activeHref="/games/wanderburg/builds"
      title={h1}
      description={description}
      publishedAt={publishedAt}
      toc={toc}
      schema={schema}
      label="Tested Build"
      labelTone="neutral"
      footerNote=""
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Wanderburg', href: '/games/wanderburg' },
        { label: 'Builds', href: '/games/wanderburg/builds' },
        { label: 'Magic Build' },
      ]}
    >
      <article className="game-wiki-markdown min-w-0">
        <p className="mt-6 leading-8 text-[#c7d0d5]">This build uses <strong>Lightning Mage</strong> as the main damage core.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">Most of the run is automatic: keep driving, let Lightning Mage handle groups, and use the active ability when the screen gets crowded.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The tested setup used:</p>
        <ul className="mt-4 list-disc space-y-1 pl-6 leading-8 text-[#c7d0d5]">
          <li><strong>Vehicle:</strong> Wanderturm</li>
          <li><strong>Captain:</strong> Norbert The Normal</li>
          <li><strong>Crew:</strong> Wizard Crew</li>
          <li><strong>Starter Module:</strong> Lightning Mage</li>
          <li><strong>Starter Artifact:</strong> Repair Wrench</li>
        </ul>

        <Section title="Quick Setup">
          <p>Prioritize:</p>
          <p><strong>Lightning Mage → useful support → flexible slots</strong></p>
          <p>Do not try to fill every slot with another Mage.</p>
          <p>Lightning Mage did enough damage on its own to stay the main investment throughout the run.</p>
          <BeginnerGuideFigure src={imageBase + 'magic-loadout.webp'} alt="Wanderburg Magic build starting setup with Lightning Mage" caption="Tested Magic setup with Wanderturm, Wizard Crew, Lightning Mage and Repair Wrench." width={2289} height={1178} />
        </Section>

        <Section title="Build Around Lightning Mage">
          <p>Lightning Mage was strong against groups and good enough against normal enemies, structures, large enemies and bosses.</p>
          <p>The main difference came from upgrades.</p>
          <p>Early in the run, <strong>Auto Attack</strong> upgrades felt more useful.</p>
          <p>Later, <strong>Cooldown</strong> became more valuable as Lightning Mage had enough damage to benefit from attacking more often.</p>
          <p>Do not treat that as a fixed formula. Auto Attack and Cooldown both matter.</p>
          <p>Active upgrades were a lower priority in this run.</p>
        </Section>

        <Section title="Auto Early, Cooldown Later">
          <p>After several Cooldown upgrades, large groups became much easier to handle.</p>
          <p>Lightning Mage could keep attacking while I focused on driving, and the stun helped stop crowded fights from becoming dangerous.</p>
          <p>The active ability was still useful when too many enemies were on screen, but I did not need to spam it.</p>
          <BeginnerGuideFigure src={imageBase + 'lightning-upgrade.webp'} alt="Wanderburg Lightning Mage Module upgrade choices" caption="An early Lightning Mage upgrade choice from the tested run." width={2283} height={1280} />
          <VideoFigure />
        </Section>

        <Section title="Legendary Lightning Upgrades">
          <p>Later in the run, Lightning Mage offered Legendary choices such as <strong>Thunderstorm</strong> and <strong>Ultra Lightning</strong>.</p>
          <p>These are strong upgrade opportunities for a build that is already centered on Lightning Mage.</p>
          <p>Keep investing in the core instead of spreading upgrades across every Module.</p>
          <BeginnerGuideFigure src={imageBase + 'lightning-legendary.webp'} alt="Wanderburg Lightning Mage Thunderstorm and Ultra Lightning Legendary upgrades" caption="Lightning Mage later offered Thunderstorm and Ultra Lightning as Legendary choices." width={2277} height={1285} />
        </Section>

        <Section title="Force Mage Is Support">
          <p>Force Mage appeared naturally and was worth taking.</p>
          <p>It added useful damage and control, but Lightning Mage remained the priority.</p>
          <p>If both Modules have useful upgrades available, keep the main investment on Lightning Mage.</p>
          <p>There is no need to spend several rerolls trying to force more Mage Modules.</p>
          <BeginnerGuideFigure src={imageBase + 'force-mage-choice.webp'} alt="Wanderburg Force Mage new Module choice" caption="Force Mage appeared naturally as a second Magic Module." width={2280} height={1289} />
        </Section>

        <Section title="Do Not Overinvest in Wizard Crew">
          <p>Wizard Crew fits the theme, but it was not the main upgrade target.</p>
          <p>When the choice was between improving Lightning Mage or Wizard Crew, Lightning Mage was more valuable.</p>
          <p>Treat Wizard Crew as support rather than the center of the build.</p>
        </Section>

        <Section title="Keep the Other Slots Flexible">
          <p>This build does not need every slot to be Magic.</p>
          <p>Once Lightning Mage is working, the remaining slots can solve other problems.</p>
          <p>A Rear <strong>Dash</strong> Module, for example, gives the build more mobility and makes repositioning easier.</p>
          <p>Take useful support instead of forcing a pure Mage loadout.</p>
        </Section>

        <Section title="Bosses">
          <p>Boss damage was enough throughout the run.</p>
          <p>Lightning Mage continued dealing automatic damage while I concentrated on driving, and there was no need to repeatedly use the active ability just to keep damage up.</p>
          <p>Single-target damage did not feel noticeably worse than the build&apos;s crowd damage.</p>
          <p>By the later part of the run, Cooldown investment kept the damage consistent enough without adding a separate non-Magic damage core.</p>
          <BeginnerGuideFigure src={imageBase + 'magic-boss.webp'} alt="Wanderburg Magic build fighting a boss with Lightning Mage" caption="Lightning Mage keeps dealing automatic damage while the player focuses on driving." width={2287} height={1277} />
        </Section>

        <Section title="Tested Result">
          <p>Lightning Mage remained the main damage source from early game into the late run.</p>
          <p>Force Mage worked well as support, while Wizard Crew and the remaining Module slots stayed secondary.</p>
          <p>The build was strongest when dealing with groups, but still had enough damage for large enemies and bosses.</p>
          <BeginnerGuideFigure src={imageBase + 'magic-final-stats.webp'} alt="Wanderburg Magic build late-run Modules and stats" caption="Late-run Magic setup with Lightning Mage as the main damage source." width={2281} height={1281} />
        </Section>
      </article>
    </GameWikiArticleLayout>
  );
}
