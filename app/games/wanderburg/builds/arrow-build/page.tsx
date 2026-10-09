import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds/arrow-build';
const h1 = 'Wanderburg Arrow Build Guide (0.9.14)';
const description = 'A tested Wanderburg Arrow build using Archer Tower, Side Ballista and Huntress, with upgrade priorities and the weaknesses found during the run.';
const publishedAt = '2026-10-09T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/builds/arrow/';
const videoCaption = 'The setup can put a large number of arrows on screen, even though single-target damage remained limited.';
const toc = [
  'Quick Setup',
  'Upgrade Archer Tower First',
  'Side Ballista Was a Useful Addition',
  'Huntress Did Not Add Enough',
  'Archer Crew Is Support',
  'Electric Arrow Was Hard to Notice',
  'Good Against Groups, Weaker Against Bosses',
  'RAM and Dash Helped the Build',
  'Tested Result',
];

export const metadata: Metadata = {
  title: h1 + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title: h1 + ' | RUNBACK', description, type: 'article', url: siteUrl + href, publishedTime: publishedAt },
  twitter: { card: 'summary', title: h1 + ' | RUNBACK', description },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article', headline: h1, description, datePublished: publishedAt,
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
    <video controls playsInline preload="none" poster={imageBase + 'arrow-boss.webp'} className="block h-auto w-full max-w-full rounded-xl border border-white/15" aria-label="Arrow build projectile output from the tested run">
      <source src="/videos/games/wanderburg/arrow-build/arrow-projectile-output.mp4" type="video/mp4" />
      <track kind="captions" src={'data:text/vtt,' + encodeURIComponent('WEBVTT\n\n00:00:00.000 --> 00:00:03.019\n' + videoCaption)} srcLang="en" label="Gameplay captions" />
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
    description="This tested Arrow setup used Archer Tower as the main ranged Module, with Huntress, Archer Crew and Electric Arrow."
    publishedAt={publishedAt}
    toc={toc}
    schema={schema}
    label="Tested — Not Recommended"
    labelTone="neutral"
    footerNote=""
    breadcrumbItems={[
      { label: 'Home', href: '/' },
      { label: 'Wanderburg', href: '/games/wanderburg' },
      { label: 'Builds', href: '/games/wanderburg/builds' },
      { label: 'Arrow Build' },
    ]}
  >
    <article className="game-wiki-markdown min-w-0">
      <p className="mt-6 leading-8 text-[#c7d0d5]">It produced a lot of projectiles, but the damage did not scale as well as expected. The build was comfortable against groups, but weaker against large enemies and bosses.</p>

      <Section title="Quick Setup">
        <p>The tested setup used:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Vehicle:</strong> Wanderturm</li>
          <li><strong>Captain:</strong> Huntress</li>
          <li><strong>Crew:</strong> Archer Crew</li>
          <li><strong>Starter Module:</strong> Archer Tower</li>
          <li><strong>Starter Artifact:</strong> Electric Arrow</li>
        </ul>
        <p>The final Module setup was:</p>
        <p><strong>Archer Tower + Side Ballista + RAM + Dash</strong></p>
        <BeginnerGuideFigure src={imageBase + 'arrow-loadout.webp'} alt="Tested Arrow build starting loadout in Wanderburg 0.9.14" caption="Tested Arrow setup with Wanderturm, Huntress, Archer Crew, Archer Tower and Electric Arrow." width={2068} height={1066} />
      </Section>

      <Section title="Upgrade Archer Tower First">
        <p>Archer Tower remained the main investment throughout the run.</p>
        <p>The upgrade priority that felt best was:</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li><strong>Auto Attack</strong></li>
          <li><strong>Cooldown</strong></li>
          <li><strong>Ability</strong></li>
        </ol>
        <p>Auto Attack upgrades helped the constant arrow output, while Cooldown became useful as the run progressed.</p>
        <p>Active abilities still mattered in difficult fights, even though they were not the first upgrade priority.</p>
        <BeginnerGuideFigure src={imageBase + 'archer-tower-upgrade.webp'} alt="Archer Tower Auto Attack Projectiles and More Damage upgrade choices" caption="An Archer Tower upgrade choice from the tested run." width={2074} height={1157} />
      </Section>

      <Section title="Side Ballista Was a Useful Addition">
        <p>Side Ballista appeared naturally and was taken as the second ranged Module.</p>
        <p>It added more arrow damage without changing the basic playstyle.</p>
        <p>It was useful, but one run was not enough to call it mandatory.</p>
        <p>Do not spend several rerolls trying to force it.</p>
        <BeginnerGuideFigure src={imageBase + 'side-ballista-choice.webp'} alt="Side Ballista offered as a new Module during the Arrow run" caption="Side Ballista appeared naturally as the second ranged Module." width={2065} height={1165} />
      </Section>

      <Section title="Huntress Did Not Add Enough">
        <p>Huntress increases auto-attack speed but also makes ability cooldowns longer.</p>
        <p>In this run, the faster auto attacks did not feel strong enough to change the build.</p>
        <p>The cooldown drawback was only minor, but Huntress still did not feel important enough to recommend based on this setup.</p>
      </Section>

      <Section title="Archer Crew Is Support">
        <p>Archer Crew helped the ranged setup, but it was not a main upgrade target.</p>
        <p>When Archer Tower had a useful upgrade available, improving the Module usually mattered more.</p>
        <p>Treat Archer Crew as support rather than the core of the build.</p>
      </Section>

      <Section title="Electric Arrow Was Hard to Notice">
        <p>Electric Arrow did not have a clear impact during the run.</p>
        <p>Its effect was hard to judge against groups and did not feel useful against bosses.</p>
        <p>The build produced many arrows, but projectile count alone did not solve the damage problem.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-mid-run.webp'} alt="Mid-run Arrow Modules and stats" caption="Mid-run Arrow setup with Archer Tower and Side Ballista." width={2076} height={1165} />
      </Section>

      <Section title="Good Against Groups, Weaker Against Bosses">
        <p>The build handled normal groups well enough and allowed most attention to stay on driving.</p>
        <p>The bigger problem was single-target damage.</p>
        <p>Large enemies were slower to kill, and boss damage felt weak compared with the amount of arrows on screen.</p>
        <p>Active abilities helped, but the build still lacked strong single-target pressure.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-boss.webp'} alt="Arrow build fighting The Dark Tower with many arrows on screen" caption="The Arrow setup produced many projectiles, but boss damage remained limited." width={2083} height={1168} />
        <VideoFigure />
      </Section>

      <Section title="RAM and Dash Helped the Build">
        <p>The final setup used RAM in the Front slot and Dash in the Back slot.</p>
        <p>These were not part of the Arrow core.</p>
        <p>They helped solve another problem: mobility.</p>
        <p>On harder maps, the build felt uncomfortable early when movement and escape options were limited.</p>
        <p>Dash made repositioning easier, while RAM gave another way to deal damage when the ranged setup was not enough.</p>
      </Section>

      <Section title="Tested Result">
        <p>This version of the Arrow build is <strong>not recommended as-is</strong>.</p>
        <p>Archer Tower was the best part of the setup, and Side Ballista was a useful second ranged Module.</p>
        <p>The build produced a high rate of fire, but single-target damage and mobility were not strong enough to make the full setup feel reliable.</p>
        <BeginnerGuideFigure src={imageBase + 'arrow-final-stats.webp'} alt="Final Arrow setup with Archer Tower, Side Ballista, RAM, Dash and Archer Crew" caption="Final tested setup with Archer Tower, Side Ballista, RAM and Dash." width={2073} height={1165} />
      </Section>
    </article>
  </GameWikiArticleLayout>;
}
