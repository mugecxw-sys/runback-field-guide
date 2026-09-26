import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/ram-build';
const h1 = 'Wanderburg RAM Build Guide (0.9.14)';
const description = 'A tested Wanderburg RAM build for Early Access 0.9.14 using Spiderburg, Duelist, RAM and Bumper, with hit-and-run Boost timing, upgrade priorities and boss tips.';
const publishedAt = '2026-09-27T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/ram/';
const toc = [
  'Quick Setup',
  'Boost Before You Hit',
  'Do Not Stay in the Crowd',
  'Upgrade RAM for the Next Hit',
  'Add Automatic Damage',
  'RAM Works Better on Bigger Targets',
  'Bosses: Hit and Leave',
  'Carpenters Help With Chip Damage',
  'Do Not Build Around RAM Alone',
  'Tested Result',
];

export const metadata: Metadata = {
  title: 'Wanderburg RAM Build Guide (0.9.14) | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: {
    title: 'Wanderburg RAM Build Guide (0.9.14) | RUNBACK',
    description,
    type: 'article',
    url: siteUrl + href,
    publishedTime: publishedAt,
    modifiedTime: publishedAt,
  },
  twitter: {
    card: 'summary',
    title: 'Wanderburg RAM Build Guide (0.9.14) | RUNBACK',
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
        { '@type': 'ListItem', position: 4, name: 'RAM Build', item: siteUrl + href },
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
        aria-label="Boost in, land the RAM hit, and keep moving"
      >
        <source src="/videos/games/wanderburg/ram-build/ram-hit-and-run.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:06.000%0ALine%20up.%20Boost%20in.%20Hit%20the%20target.%20Keep%20moving%20away." srcLang="en" label="Gameplay captions" />
        Your browser does not support HTML video.
      </video>
      <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">
        <strong className="font-medium text-[#c7d0d5]">Boost in, land the RAM hit, and keep moving instead of staying beside the target.</strong>
      </figcaption>
    </figure>
  );
}

export default function WanderburgRamBuild() {
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
        <p className="mt-6 leading-8 text-[#c7d0d5]">This RAM build uses a hit-and-run setup. Do not stay beside the target. The tested pattern was <strong className="text-[#fff2df]">line up → Boost → hit → keep moving → reset</strong>.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The tested Early Access 0.9.14 run used Spiderburg, Duelist, Carpenters, starter RAM and Bumper. It cleared successfully.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">Duelist adds <strong className="text-[#fff2df]">50% melee damage while boosting</strong>, but also makes you take <strong className="text-[#fff2df]">20% more damage while boosting</strong>. That trade-off rewards a clear line into the target and a quick exit, not spending the whole fight in enemy range.</p>

        <Section title="Quick Setup">
          <p>Build around <strong className="text-[#fff2df]">RAM + Boost speed + support damage</strong>. RAM creates the impact moments; other Modules keep contributing while you reposition.</p>
          <p>RAM by itself did not feel comfortable as the only early damage source. Plan for another damage source while RAM is cooling down, and treat the collision as one part of the setup rather than a move to repeat continuously.</p>
          <BeginnerGuideFigure src={imageBase + 'ram-loadout.png'} alt="Wanderburg RAM build starting loadout with Spiderburg and Duelist" caption="Tested RAM setup with Spiderburg, Duelist, Carpenters, RAM and Bumper." width={2553} height={1321} />
        </Section>

        <Section title="Boost Before You Hit">
          <p>In the tested run, Boosted RAM collisions were noticeably stronger than normal contact. Bumper made the high-speed approach more valuable, and adding Dash later made the difference clearer.</p>
          <p>Create space, line Spiderburg up with the target, Boost into it, then leave immediately and reset your angle. Do not keep driving into the target at close range.</p>
          <p>Before committing, check that you have room to approach and a way to move clear afterward. If the vehicle is already boxed in, creating distance is more important than forcing a collision. A missed line can leave you surrounded, so take the next opening instead of lingering for another contact hit.</p>
          <VideoFigure />
          <BeginnerGuideFigure src={imageBase + 'ram-boost-hit.png'} alt="Wanderburg Spiderburg RAM boost collision with an ordinary enemy" caption="A boosted RAM collision during the tested run." width={2428} height={1359} />
        </Section>

        <Section title="Do Not Stay in the Crowd">
          <p>Continuous contact was the dangerous approach. Early health is limited, and Duelist increases damage taken while boosting. If a collision misses and leaves Spiderburg surrounded, leave rather than trying to force another hit.</p>
          <p>Against a few enemies the risk was manageable; a crowded group was more dangerous. The safer rhythm is hit-and-run, not sustained melee.</p>
        </Section>

        <Section title="Upgrade RAM for the Next Hit">
          <p>The first RAM upgrade offered cooldown, ability and auto-attack choices. Cooldown was selected because another strong collision opportunity fit the tested play pattern better than staying close to deal auto-attack damage.</p>
          <ol className="list-decimal space-y-1 pl-6"><li><strong className="text-[#fff2df]">RAM cooldown</strong></li><li><strong className="text-[#fff2df]">RAM ability</strong></li><li><strong className="text-[#fff2df]">Auto attack when the option makes sense</strong></li></ol>
          <p>Auto attack was a lower priority in this run. Do not pass up every useful secondary upgrade just to stack RAM.</p>
        </Section>

        <Section title="Add Automatic Damage">
          <p>RAM alone was not comfortable as the only early damage source. A useful Top Module can keep dealing damage while you make space, turn, or wait for another collision. The specific Top Module is flexible: take a useful option instead of forcing a fixed pick.</p>
          <p>Dash worked very well in the tested Back slot because its speed supported the Boost collision pattern. It is useful, not mandatory.</p>
          <BeginnerGuideFigure src={imageBase + 'ram-mid-run.png'} alt="Wanderburg RAM build mid-run Module setup" caption="Mid-run RAM setup with support Modules handling damage between collisions." width={2431} height={1365} />
        </Section>

        <Section title="RAM Works Better on Bigger Targets">
          <p>RAM felt more convincing against structures, larger vehicles and bosses than as a general answer to every small enemy. Boost collisions dealt noticeably more damage than normal contact, and RAM also worked against buildings when there was room to line up a clean hit.</p>
          <p>Use the same spacing principle on a structure: line up from a clear approach, make the boosted hit, then keep moving. The run did not establish a hidden damage formula or a universal number of hits, so choose targets by the opening you can safely create.</p>
        </Section>

        <Section title="Bosses: Hit and Leave">
          <p>A direct Boost collision against a boss can be worthwhile when the angle is good and the boss has an attack opening. Wait for the opening, Boost in, land the hit, and leave. Do not stay beside the boss waiting for another attack.</p>
          <p>Boss attacks differ, so one timing rule does not fit every fight. The tested run used the same basic hit-and-run pattern against both early and later bosses.</p>
          <p>Read the current attack before choosing the approach: a clean angle is not enough if the boss is still attacking into your path. If no safe opening is available, keep moving and wait. After the collision, use the space you created to reset rather than turning back immediately.</p>
          <BeginnerGuideFigure src={imageBase + 'ram-first-boss.png'} alt="Wanderburg RAM build first boss collision" caption="RAM collision against the first boss." width={2418} height={1368} />
          <BeginnerGuideFigure src={imageBase + 'ram-second-boss.png'} alt="Wanderburg boosted RAM collision against a later boss" caption="A boosted collision against a later boss." width={2430} height={1345} />
        </Section>

        <Section title="Carpenters Help With Chip Damage">
          <p>This setup took more damage than a ranged approach. Carpenters helped with recovery, but did not remove the need to look for health pickups before the first boss. Health pressure eased later in the run.</p>
          <p>Treat Carpenters as support, not permission to remain in dangerous melee range.</p>
        </Section>

        <Section title="Do Not Build Around RAM Alone">
          <p>RAM should provide the big impact moments while other Modules keep working between them. If general damage is falling behind, a strong Top Module can be more useful than another RAM-focused upgrade. The aim is to land clean, high-speed collisions and stay alive between them—not maximize every RAM number.</p>
        </Section>

        <Section title="Tested Result">
          <p>The tested Spiderburg and Duelist run cleared successfully. The final screenshot showed Vehicle Tier 4, Upgrade Level 39, RAM Level 19, Max HP 470, Max Speed 32.0, Max Nitro 140 and Rotation Speed 16.0.</p>
          <BeginnerGuideFigure src={imageBase + 'ram-final-stats.png'} alt="Wanderburg RAM build final stats and Modules" caption="Final tested RAM setup before the last boss." width={2437} height={1374} />
          <p>The main lesson: build speed, keep support damage running, land one strong hit, then get out.</p>
        </Section>
      </article>
    </GameWikiArticleLayout>
  );
}
