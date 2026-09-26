import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  BeginnerGuideFigure,
  BeginnerGuideRule,
} from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/cannon-build';
const h1 = 'Wanderburg Cannon Build Guide (0.9.14)';
const description = 'A tested Wanderburg Cannon build for Early Access 0.9.14 using Tankenburg, Patchy The Pirate, Cannon, FrontCannon and Canoneer Crew, with upgrade priorities and gameplay tips.';
const publishedAt = '2026-09-26T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/cannon/';
const toc = [
  'Quick Setup',
  'Upgrade the Cannon Core First',
  'Add FrontCannon When It Appears',
  'Cannon Tower Is Optional',
  'Use Cannon Abilities on Targets That Matter',
  'Do Not Save Every Shot for the Boss',
  'Do Not Force a Pure Cannon Build',
  'Upgrade Priority',
  'Tested Result',
];

export const metadata: Metadata = {
  title: 'Wanderburg Cannon Build Guide (0.9.14) | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: {
    title: 'Wanderburg Cannon Build Guide (0.9.14) | RUNBACK',
    description,
    type: 'article',
    url: siteUrl + href,
    publishedTime: publishedAt,
    modifiedTime: publishedAt,
  },
  twitter: {
    card: 'summary',
    title: 'Wanderburg Cannon Build Guide (0.9.14) | RUNBACK',
    description,
  },
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
        { '@type': 'ListItem', position: 4, name: 'Cannon Build', item: siteUrl + href },
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
        preload="metadata"
        className="block h-auto w-full max-w-full rounded-xl border border-white/15"
        aria-label="FrontCannon positioning during the tested run"
      >
        <source src="/videos/games/wanderburg/cannon-build/frontcannon-positioning.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:02.857%0AGameplay%20audio." srcLang="en" label="Gameplay audio" />
        Your browser does not support HTML video.
      </video>
      <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">
        <strong className="font-medium text-[#c7d0d5]">FrontCannon positioning during the tested run.</strong>{' '}
        Line up the vehicle before firing instead of using the ability as soon as it is ready.
      </figcaption>
    </figure>
  );
}

export default function WanderburgCannonBuild() {
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
    >
      <article className="game-wiki-markdown min-w-0">
        <p className="mt-6 leading-8 text-[#c7d0d5]">Build around one strong Cannon rather than filling every slot with another Cannon.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The tested Tankenburg run used Patchy The Pirate, Canoneer Crew, starter Cannon and Repair Wrench. The tested run cleared successfully.</p>

        <Section title="Quick Setup">
          <p>Prioritize <strong className="text-[#fff2df]">Cannon → Canoneer Crew → FrontCannon → optional Cannon Tower</strong>.</p>
          <p>Do not spend rerolls trying to force a full Cannon loadout.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-loadout.png'} alt="Wanderburg Cannon build starting loadout with Tankenburg and Patchy The Pirate" caption="Tested Cannon setup with Tankenburg, Patchy The Pirate, Canoneer Crew, Cannon and Repair Wrench." width={2563} height={1318} />
        </Section>

        <Section title="Upgrade the Cannon Core First">
          <p>The starting Cannon is strong enough for the early game. Upgrade the parts already doing damage before filling slots.</p>
          <p>One early upgrade choice in the tested run offered:</p>
          <ul className="list-disc space-y-1 pl-6"><li>Cannon ability damage: <strong className="text-[#fff2df]">30 → 40</strong></li><li>Canoneer Crew auto damage: <strong className="text-[#fff2df]">10 → 18</strong></li><li>Cannon ability cooldown: <strong className="text-[#fff2df]">15s → 13s</strong></li><li>Cannon auto cooldown: <strong className="text-[#fff2df]">3.0s → 2.6s</strong></li></ul>
          <p>Canoneer Crew damage was taken. Its automatic damage kept contributing while attention stayed on driving and positioning. You do not need to spread upgrades evenly across every Module.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-first-upgrade.png'} alt="Wanderburg Cannon and Canoneer Crew early upgrade choices" caption="An early upgrade choice from the tested Cannon run." width={2026} height={1129} />
        </Section>

        <Section title="Add FrontCannon When It Appears">
          <p>FrontCannon appeared early in both tested runs. It fits Tankenburg naturally and adds another strong Cannon attack without changing the basic plan.</p>
          <p>FrontCannon fires forward, so face the target and stay within useful range. Aiming may feel awkward at first; Tankenburg&apos;s handling affected it slightly but did not seriously interfere with the build.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-frontcannon-choice.png'} alt="Wanderburg FrontCannon new Module choice" caption="FrontCannon appeared as an early new-Module choice in the tested run." width={2014} height={1129} />
          <VideoFigure />
        </Section>

        <Section title="Cannon Tower Is Optional">
          <p>Cannon Tower adds damage but is not required. It appeared much later, around the 14th upgrade, after one dice reroll; most investment had already gone into Cannon and Canoneer Crew.</p>
          <p>If Cannon Tower appears naturally and the Top slot is open, it is a useful addition. If it does not appear, keep upgrading the setup you already have.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-tower-choice.png'} alt="Wanderburg Cannon Tower Module choice" caption="Cannon Tower was added later in the run after a dice reroll." width={2017} height={1134} />
        </Section>

        <Section title="Use Cannon Abilities on Targets That Matter">
          <p>Use Cannon abilities on useful targets, not simply when ready. Early on, they broke buildings quickly for faster access to chests and upgrades. Against tougher vehicles, line up the shot first; front-facing abilities are easy to waste when poorly positioned.</p>
        </Section>

        <Section title="Do Not Save Every Shot for the Boss">
          <p>The first boss was manageable, though damage felt a little low. Saving every Cannon ability for it was not useful: enemies keep chasing, and forcing a perfect angle can make positioning harder.</p>
          <p>Keep moving and fire at clean targets. Later, damage was enough for larger targets without forcing a full Cannon setup.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-first-boss.png'} alt="Wanderburg Cannon build first boss fight" caption="The first boss fight from the tested Cannon run." width={2023} height={1134} />
        </Section>

        <Section title="Do Not Force a Pure Cannon Build">
          <p>The final tested setup included:</p>
          <ul className="list-disc space-y-1 pl-6"><li>Cannon</li><li>FrontCannon</li><li>Cannon Tower</li><li>RAM</li><li>Canoneer Crew</li></ul>
          <p>The run cleared without every slot being a Cannon. Upgrade the Cannon core, then use remaining slots for what the run offers.</p>
          <BeginnerGuideRule>Do not force every slot into another Cannon.</BeginnerGuideRule>
        </Section>

        <Section title="Upgrade Priority">
          <ol className="list-decimal space-y-1 pl-6"><li><strong className="text-[#fff2df]">Cannon</strong></li><li><strong className="text-[#fff2df]">Canoneer Crew</strong></li><li><strong className="text-[#fff2df]">FrontCannon</strong></li><li><strong className="text-[#fff2df]">Cannon Tower if it appears naturally</strong></li><li><strong className="text-[#fff2df]">Flexible final slot</strong></li></ol>
          <p>Upgrading your Cannon or Crew is usually better than spending several rerolls to force a perfect-looking loadout.</p>
        </Section>

        <Section title="Tested Result">
          <p>The run cleared with Tankenburg and Patchy The Pirate, with most upgrades invested in the starting Cannon and Canoneer Crew.</p>
          <BeginnerGuideFigure src={imageBase + 'cannon-final-stats.png'} alt="Wanderburg Cannon build final run stats and Modules" caption="Final tested Cannon setup before the last boss." width={2014} height={1132} />
        </Section>
      </article>
    </GameWikiArticleLayout>
  );
}
