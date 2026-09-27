import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BeginnerGuideFigure } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/vehicle-guide';
const h1 = 'Wanderburg Vehicle Guide: Which One Should You Pick? (0.9.14)';
const title = 'Wanderburg Vehicle Guide: Spiderburg vs Tankenburg vs Wanderturm | RUNBACK';
const description = 'A short tested comparison of Wanderturm, Tankenburg and Spiderburg in Wanderburg 0.9.14, covering handling, Module slots and the play styles each vehicle fits.';
const publishedAt = '2026-09-28T00:00:00.000Z';
const imageBase = '/images/games/wanderburg/';
const toc = [
  'Quick Answer',
  'Wanderturm — The Flexible Choice',
  'Tankenburg — Front-Heavy and Slower',
  'Spiderburg — The Mobile Choice',
  'Slot Layouts Matter More Than They Look',
  'Which One Should You Pick?',
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: publishedAt },
  twitter: { card: 'summary', title, description },
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
        { '@type': 'ListItem', position: 3, name: 'Vehicle Guide', item: siteUrl + href },
      ],
    },
  ],
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return <section aria-labelledby={id} className="mt-9"><h2 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">{title}</h2><div className="mt-4 space-y-4 leading-8 text-[#c7d0d5]">{children}</div></section>;
}

function VehicleImages({ vehicle, detailCaption, testCaption, detailSize, testSize }: {
  vehicle: 'wanderturm' | 'tankenburg' | 'spiderburg';
  detailCaption: string;
  testCaption: string;
  detailSize: [number, number];
  testSize: [number, number];
}) {
  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-2">
      <BeginnerGuideFigure src={imageBase + 'vehicles/' + vehicle + '.png'} alt={vehicle + ' current-client Vehicle details'} caption={detailCaption} width={detailSize[0]} height={detailSize[1]} />
      <BeginnerGuideFigure src={imageBase + 'guides/vehicle-guide/' + vehicle + '-test.png'} alt={vehicle + ' during the short handling test'} caption={testCaption} width={testSize[0]} height={testSize[1]} />
    </div>
  );
}

export default function WanderburgVehicleGuide() {
  return (
    <GameWikiArticleLayout
      config={wanderburgWikiConfig}
      activeHref={href}
      title={h1}
      description={description}
      publishedAt={publishedAt}
      toc={toc}
      schema={schema}
      label="Vehicle Guide"
      labelTone="neutral"
      footerNote=""
    >
      <article className="game-wiki-markdown min-w-0">
        <p className="mt-6 leading-8 text-[#c7d0d5]">Wanderburg has three current Vehicles, and they feel noticeably different to drive.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">For the comparison, all three used the same basic setup:</p>
        <ul className="mt-4 list-disc space-y-1 pl-6 leading-8 text-[#c7d0d5]">
          <li><strong>Captain:</strong> Norbert The Normal</li>
          <li><strong>Crew:</strong> Archer Crew</li>
          <li><strong>Starter Module:</strong> Archer Tower</li>
          <li><strong>Starter Artifact:</strong> Repair Wrench</li>
        </ul>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The tests were short runs focused on handling, positioning and the first couple of bosses — not full-build power.</p>

        <Section title="Quick Answer">
          <p><strong>Wanderturm:</strong> pick it when you want a balanced slot layout and have not decided on a specific build yet.</p>
          <p><strong>Tankenburg:</strong> pick it when you want two Front slots and do not mind heavier steering.</p>
          <p><strong>Spiderburg:</strong> pick it when mobility, quick disengages and aggressive positioning matter most.</p>
        </Section>

        <figure className="my-7 min-w-0 max-w-full">
          <video controls playsInline preload="metadata" className="block h-auto w-full max-w-full rounded-xl border border-white/15" aria-label="Wanderturm, Tankenburg and Spiderburg handling comparison">
            <source src="/videos/games/wanderburg/vehicle-guide/vehicle-handling-comparison.mp4" type="video/mp4" />
            <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:03.480%0AWanderturm%2C%20Tankenburg%20and%20Spiderburg%20handling%20compared." srcLang="en" label="Gameplay captions" />
            Your browser does not support HTML video.
          </video>
          <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">Wanderturm, Tankenburg and Spiderburg handling compared under the same basic setup.</figcaption>
        </figure>

        <Section title="Wanderturm — The Flexible Choice">
          <p>Wanderturm has:</p>
          <ul className="list-disc space-y-1 pl-6"><li>1 Side</li><li>1 Top</li><li>1 Front</li><li>1 Back</li></ul>
          <p>It is the least specialized of the three Vehicles.</p>
          <p>In the short test, maintaining position was easy and disengaging from larger enemies was not a problem.</p>
          <p>The four different slot directions also leave room to change direction as a run develops.</p>
          <p>That does not mean every possible build fits equally well. The test was too short to fill every slot and compare complete late-game setups.</p>
          <p>Pick Wanderturm when you want flexibility rather than committing to a slot pattern from the start.</p>
          <VehicleImages vehicle="wanderturm" detailCaption="Wanderturm uses one Side, Top, Front and Back slot." testCaption="Wanderturm was easy to reposition during the short handling test." detailSize={[634, 1012]} testSize={[2392, 1341]} />
        </Section>

        <Section title="Tankenburg — Front-Heavy and Slower">
          <p>Tankenburg has:</p>
          <ul className="list-disc space-y-1 pl-6"><li>1 Side</li><li>1 Top</li><li>2 Front</li><li>no Back slot</li></ul>
          <p>Its current client description also calls out its armor and slower turning and acceleration.</p>
          <p>That heavier handling was easy to notice.</p>
          <p>Tankenburg had the most trouble maintaining position and disengaging when enemies closed in, and Nitro mattered more here than on the other two Vehicles.</p>
          <p>The two Front slots make its direction clear: it naturally gives you more room for front-facing Modules.</p>
          <p>Front attacks themselves were still easy enough to line up once the vehicle was facing the right way.</p>
          <p>The awkward part was repositioning afterward.</p>
          <p>Pick Tankenburg when the extra Front slot matters more to you than quick movement.</p>
          <VehicleImages vehicle="tankenburg" detailCaption="Tankenburg trades a Back slot for a second Front slot." testCaption="Tankenburg needed more room and Nitro to disengage from large enemies." detailSize={[643, 1015]} testSize={[2395, 1342]} />
        </Section>

        <Section title="Spiderburg — The Mobile Choice">
          <p>Spiderburg has:</p>
          <ul className="list-disc space-y-1 pl-6"><li>2 Top</li><li>1 Front</li><li>1 Back</li><li>no Side slot</li></ul>
          <p>It was the easiest Vehicle to turn out of a bad position and the easiest to disengage from large enemies.</p>
          <p>That makes it a natural fit for active movement and hit-and-run play.</p>
          <p>The tradeoff in the short test was not a proven defensive weakness. It was player positioning: Spiderburg also made it easy to drive aggressively into danger and take unnecessary hits.</p>
          <p>That matches the way it felt in the RAM test as well — get in, do the job, and get back out.</p>
          <p>Pick Spiderburg when movement matters more than having a Side slot.</p>
          <VehicleImages vehicle="spiderburg" detailCaption="Spiderburg uses two Top slots plus one Front and one Back slot." testCaption="Spiderburg was the easiest of the three to turn out and disengage." detailSize={[630, 1015]} testSize={[2385, 1348]} />
        </Section>

        <Section title="Slot Layouts Matter More Than They Look">
          <p>The biggest difference is not just steering.</p>
          <p>The Vehicles also push builds in different directions:</p>
          <div className="max-w-full overflow-x-auto">
            <table className="min-w-[28rem] border-collapse text-left text-sm sm:text-base">
              <thead><tr><th scope="col">Vehicle</th><th scope="col">Side</th><th scope="col">Top</th><th scope="col">Front</th><th scope="col">Back</th></tr></thead>
              <tbody>
                <tr><th scope="row">Wanderturm</th><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                <tr><th scope="row">Tankenburg</th><td>1</td><td>1</td><td>2</td><td>0</td></tr>
                <tr><th scope="row">Spiderburg</th><td>0</td><td>2</td><td>1</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
          <p>You do not need to decide an entire build from this table.</p>
          <p>Just check whether the Vehicle gives enough space for the Module direction you already want to play.</p>
        </Section>

        <Section title="Which One Should You Pick?">
          <p>Choose <strong>Wanderturm</strong> if you are still deciding what the run will become.</p>
          <p>Choose <strong>Tankenburg</strong> if you specifically want more Front slots and are comfortable relying more on Nitro for repositioning.</p>
          <p>Choose <strong>Spiderburg</strong> if you want the quickest disengages and a more active driving style.</p>
          <p>None of those choices needs to be permanent advice for every build.</p>
          <p>The useful question is simpler:</p>
          <p><strong>which slot layout and driving style match what you want to do this run?</strong></p>
        </Section>
        <nav aria-label="Related Wanderburg guides" className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-sm">
          <a href="/games/wanderburg/beginner-guide">Beginner Guide</a>
          <a href="/games/wanderburg/builds">Builds</a>
          <a href="/games/wanderburg/wiki/vehicles">Vehicles Wiki</a>
        </nav>
      </article>
    </GameWikiArticleLayout>
  );
}
