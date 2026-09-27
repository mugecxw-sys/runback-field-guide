import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/friendly-units-build';
const h1 = 'Wanderburg Friendly Units Build Guide (0.9.14)';
const description = 'A tested Wanderburg friendly-units build using Empress, Front Barracks, Side Barracks and Running Shoes, with upgrade priorities and boss tips.';
const publishedAt = '2026-09-27T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/friendly-units/';
const toc = [
  'Quick Setup',
  'Upgrade Front Barracks First',
  'Add Side Barracks',
  'Drive While the Army Fights',
  'Running Shoes Helps Units Keep Up',
  'Empress Makes Driving Slower',
  'Companion Fits the Build',
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
        { '@type': 'ListItem', position: 4, name: 'Friendly Units Build', item: siteUrl + href },
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
        aria-label="Running Shoes friendly units follow while boosting"
      >
        <source src="/videos/games/wanderburg/friendly-units-build/running-shoes.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:04.900%0AFriendly%20units%20follow%20Wanderturm%20and%20accelerate%20when%20it%20Boosts." srcLang="en" label="Gameplay captions" />
        Your browser does not support HTML video.
      </video>
      <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">
        Running Shoes helps friendly units accelerate with the vehicle while boosting.
      </figcaption>
    </figure>
  );
}

export default function WanderburgFriendlyUnitsBuild() {
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
        <p className="mt-6 leading-8 text-[#c7d0d5]">This build lets the army do most of the fighting while you drive.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The cleared run used:</p>
        <ul className="mt-4 list-disc space-y-1 pl-6 leading-8 text-[#c7d0d5]">
          <li><strong>Vehicle:</strong> Wanderturm</li>
          <li><strong>Captain:</strong> Empress</li>
          <li><strong>Crew:</strong> Carpenters</li>
          <li><strong>Starter Module:</strong> Front Barracks</li>
          <li><strong>Starter Artifact:</strong> Running Shoes</li>
        </ul>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The core is:</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]"><strong>Front Barracks + Side Barracks + Empress</strong></p>

        <Section title="Quick Setup">
          <p>Prioritize:</p>
          <p><strong>Barracks upgrades → Side Barracks → support Modules</strong></p>
          <p>Empress gives <strong>100% more friendly units</strong> at the cost of <strong>30% speed</strong>.</p>
          <p>The extra units were worth the slower vehicle in this run.</p>
          <BeginnerGuideFigure src={imageBase + 'friendly-units-loadout.png'} alt="Wanderburg friendly units build with Wanderturm and Empress" caption="Tested setup with Wanderturm, Empress, Front Barracks and Running Shoes." width={2550} height={1306} />
        </Section>

        <Section title="Upgrade Front Barracks First">
          <p>Front Barracks can handle the early game as the main damage source.</p>
          <p>My upgrade preference was:</p>
          <ol className="list-decimal space-y-1 pl-6"><li><strong>Auto attack</strong></li><li><strong>Cooldown</strong></li><li><strong>Active ability</strong></li></ol>
          <p>Treat that as a priority, not a fixed rule.</p>
          <p>A useful Barracks upgrade matters more than spreading upgrades across Modules that are only supporting the build.</p>
        </Section>

        <Section title="Add Side Barracks">
          <p>Once Side Barracks appeared, it was an easy pick.</p>
          <p>If you are already building around friendly units, Front Barracks and Side Barracks work well together and give the army enough damage to carry most fights.</p>
          <p>Do not waste several rerolls trying to force it, but take it when the opportunity makes sense.</p>
          <BeginnerGuideFigure src={imageBase + 'friendly-units-side-barracks.png'} alt="Wanderburg Side Barracks Module choice" caption="Side Barracks adds a second major source of friendly units." width={2361} height={1329} />
        </Section>

        <Section title="Drive While the Army Fights">
          <p>This is the main strength of the build.</p>
          <p>Friendly units handled normal enemies, large groups, structures, large vehicles and bosses well.</p>
          <p>That leaves you free to concentrate on:</p>
          <ul className="list-disc space-y-1 pl-6"><li>positioning</li><li>avoiding damage</li><li>keeping the vehicle moving</li></ul>
          <p>With several enemy groups nearby, units sometimes split between targets.</p>
          <p>That became less important later because upgraded Barracks units killed weaker enemies quickly.</p>
          <BeginnerGuideFigure src={imageBase + 'friendly-units-mid-run.png'} alt="Wanderburg friendly units build during a mid-run fight" caption="Upgraded Barracks can put a large army on the field." width={2361} height={1327} />
        </Section>

        <Section title="Running Shoes Helps Units Keep Up">
          <p>Running Shoes makes friendly units accelerate when you Boost.</p>
          <p>The effect was useful when repositioning.</p>
          <p>If the army starts falling behind, Boosting helps pull the units forward and back into the fight.</p>
          <p>You do not need to Boost constantly. Use it when you actually need to move the army.</p>
          <VideoFigure />
        </Section>

        <Section title="Empress Makes Driving Slower">
          <p>The extra friendly units were immediately noticeable.</p>
          <p>The <strong>-30% speed</strong> penalty was minor early and more noticeable around bosses and later fights.</p>
          <p>It never felt worse than the benefit from the larger army, but Wanderturm needs a little more room to reposition.</p>
          <p>Do not wait until enemies have already surrounded you before moving.</p>
        </Section>

        <Section title="Companion Fits the Build">
          <p>Companion was added later in the run and fit naturally with the summon-heavy setup.</p>
          <p>By then, Front Barracks and Side Barracks were already doing most of the work.</p>
          <p>The remaining Top slot mattered much less.</p>
          <p>Do not downgrade the Barracks core just to fill every slot.</p>
        </Section>

        <Section title="Bosses">
          <p>Friendly units stayed on bosses well enough that most of my attention could stay on driving.</p>
          <p>There was no need to save every Barracks active specifically for the boss.</p>
          <p>By the middle and late game, the army already had enough damage that active abilities were extra pressure rather than the thing keeping the build alive.</p>
          <p>The slower movement from Empress mattered more than unit targeting.</p>
          <p>Keep space around Wanderturm and let the army stay on the boss.</p>
          <BeginnerGuideFigure src={imageBase + 'friendly-units-first-boss.png'} alt="Wanderburg friendly units build fighting the first boss" caption="Friendly units keep attacking while the player focuses on driving." width={2353} height={1320} />
        </Section>

        <Section title="Tested Result">
          <p>The run cleared successfully.</p>
          <p>The final setup used <strong>Front Barracks, Side Barracks and Companion</strong> as the friendly-unit core.</p>
          <p>The useful rule for this build is straightforward:</p>
          <p><strong>upgrade the army first and spend your attention on driving.</strong></p>
          <BeginnerGuideFigure src={imageBase + 'friendly-units-final-build.png'} alt="Wanderburg friendly units build final Module setup" caption="Late-run setup with Front Barracks, Side Barracks and Companion." width={2359} height={1320} />
        </Section>
      </article>
    </GameWikiArticleLayout>
  );
}
