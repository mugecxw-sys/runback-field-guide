import type { Metadata } from 'next';
import { BeginnerGuideChecklist, BeginnerGuideFigure, BeginnerGuideQuickStart, BeginnerGuideRule, BeginnerGuideStep } from '@/components/game-guide/beginner-guide';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/beginner-guide';
const h1 = 'Wanderburg Beginner Guide: What to Do First (0.9.14)';
const title = 'Wanderburg Beginner Guide: What to Do First | RUNBACK';
const description = 'A short Wanderburg beginner guide for Early Access 0.9.14, covering simple starting choices, Module slots, upgrades, active abilities, Nitro and first-run priorities.';
const publishedAt = '2026-09-26T00:00:00.000Z';
const toc = [
  'Quick Start',
  'Build Around One Main Module',
  'Check the Slot Before Taking a Module',
  'Let Auto Attacks Work While You Drive',
  'Save Active Abilities for Good Targets',
  'Keep Some Nitro',
  'If Your Health Starts Dropping',
  'You Do Not Need to Fill Every Slot',
  'First Boss',
  'First Run Checklist',
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
        { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
      ],
    },
  ],
};

const imageBase = '/images/games/wanderburg/beginner-guide/';
const imageDimensions = { width: 2074, height: 1099 };

export default function WanderburgBeginnerGuide() {
  return (
    <GameWikiArticleLayout
      config={wanderburgWikiConfig}
      activeHref={href}
      title={h1}
      description={description}
      publishedAt={publishedAt}
      toc={toc}
      schema={schema}
      label="Beginner Guide"
      labelTone="neutral"
      footerNote=""
    >
      <div className="game-wiki-markdown min-w-0">
        <p className="mt-6 leading-8 text-[#c7d0d5]">Your first run does not need a perfect build.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">Pick one Module that works, learn how the vehicle moves, and spend upgrades on what is already carrying the run.</p>
        <p className="mt-4 leading-8 text-[#c7d0d5]">The example run below was played on an unlocked profile, so your available starting choices may differ.</p>

        <BeginnerGuideQuickStart items={[
          'Start with one main damage Module.',
          'Upgrade it before spreading upgrades across several weapons.',
          'Check the slot before taking a new Module.',
          'Let auto attacks work while you concentrate on driving.',
          'Keep some Nitro for getting out of trouble.',
          'Do not fill every slot just because you can.',
        ]} />
        <BeginnerGuideFigure src={imageBase + 'beginner-loadout.png'} alt="Wanderburg 0.9.14 beginner test loadout with Wanderturm and Archer Tower" caption="Beginner test loadout: Wanderturm, Norbert The Normal, Archer Crew, Archer Tower and Repair Wrench. This run used an unlocked profile." width={imageDimensions.width} height={imageDimensions.height} />

        <BeginnerGuideStep number="01" title="Build Around One Main Module">
          <p className="leading-8 text-[#c7d0d5]">For this run, Archer Tower was the main Module.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">The easiest early plan was simple:</p>
          <p className="mt-3 font-semibold leading-8 text-[#fff2df]">Keep making Archer Tower better.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Cooldown upgrades are especially easy to use early because they help both the automatic attack and the active ability come back faster.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Once the basic damage feels comfortable, mix in ability upgrades.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">You do not need several equally upgraded weapons in the first few minutes.</p>
          <BeginnerGuideFigure src={imageBase + 'beginner-first-upgrade.png'} alt="Wanderburg Archer Tower cooldown and ability upgrade choices" caption="An early Archer Tower upgrade choice from the test run." width={2073} height={1161} />
          <BeginnerGuideRule>Upgrade what is already working before adding more weapons.</BeginnerGuideRule>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="02" title="Check the Slot Before Taking a Module">
          <p className="leading-8 text-[#c7d0d5]">Modules have slot types.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Wanderturm has:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7 text-[#c7d0d5]"><li>1 Side</li><li>1 Top</li><li>1 Front</li><li>1 Back</li></ul>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Archer Tower uses the Top slot.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Later, one new-Module choice in this run offered FrontCannon — Front, Force Mage — Front, and Catapult — Back.</p>
          <BeginnerGuideFigure src={imageBase + 'beginner-module-slot-choice.png'} alt="Wanderburg Module choice showing FrontCannon Force Mage and Catapult slot types" caption="FrontCannon and Force Mage need a Front slot; Catapult uses a Back slot." width={2079} height={1162} />
          <p className="mt-4 leading-8 text-[#c7d0d5]">A Module has to match an open slot on your Vehicle.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">When you are still learning the controls, a Back Module can be convenient because it can damage enemies following you without making you turn around just to attack them.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Do not force a specific Module if the run does not offer it.</p>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="03" title="Let Auto Attacks Work While You Drive">
          <p className="leading-8 text-[#c7d0d5]">Driving takes more attention than attacking when you are new.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">That is why automatic attacks are useful early.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Archer Tower can keep attacking while you focus on steering, avoiding enemies and collecting drops.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Learn the movement first. Add more active decisions once driving feels natural.</p>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="04" title="Save Active Abilities for Good Targets">
          <p className="leading-8 text-[#c7d0d5]">Do not press an active ability only because it is ready.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">With Archer Tower, the active ability was most useful when:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7 text-[#c7d0d5]"><li>enemies were packed together</li><li>a tougher target needed burst damage</li><li>attacking a structure that could drop a chest</li></ul>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Using it on a dense group usually gives more value than firing it into a few scattered enemies.</p>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="05" title="Keep Some Nitro">
          <p className="leading-8 text-[#c7d0d5]">Don’t spend all your Nitro just to travel faster. Keep some for getting out of trouble.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">If enemies start closing around the vehicle, having Nitro ready is more useful than arriving somewhere a few seconds earlier.</p>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="06" title="If Your Health Starts Dropping">
          <p className="leading-8 text-[#c7d0d5]">Do not immediately change the whole build.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Create some distance first.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Stop trading hits, use Nitro to escape, and pick up health when it is available.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">In this run, health recovered naturally enough that Repair Wrench never became an important part of the build.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">That is fine. Not every starting choice has to become central to the run.</p>
        </BeginnerGuideStep>

        <BeginnerGuideStep number="07" title="You Do Not Need to Fill Every Slot">
          <p className="leading-8 text-[#c7d0d5]">A new Module is not automatically better than another upgrade for your main one.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">By the middle of this run, Archer Tower was still doing most of the work. The other Modules only needed to support it.</p>
          <BeginnerGuideFigure src={imageBase + 'beginner-mid-run.png'} alt="Wanderburg beginner run mid-game Module setup" caption="The mid-run setup still centered on the main Module instead of forcing every slot immediately." width={2071} height={1170} />
          <p className="mt-4 leading-8 text-[#c7d0d5]">If your current damage works, keep improving it.</p>
          <p className="mt-4 leading-8 text-[#c7d0d5]">Add another Module when it gives you something useful — not just because an empty slot exists.</p>
        </BeginnerGuideStep>

        <section aria-labelledby="first-boss" className="mt-9">
          <h2 id="first-boss" className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">First Boss</h2>
          <p className="mt-4 leading-8 text-[#c7d0d5]">By the first boss, the same rules still worked:</p>
          <BeginnerGuideFigure src={imageBase + 'beginner-first-boss.png'} alt="Wanderburg first boss fight during beginner test run" caption="The first boss fight from the beginner test run." width={2068} height={1170} />
          <ul className="mt-4 list-disc space-y-1 pl-6 leading-7 text-[#c7d0d5]"><li>keep moving</li><li>let automatic attacks keep dealing damage</li><li>use the active ability when there is a good target</li><li>keep Nitro available for repositioning</li></ul>
          <p className="mt-4 leading-8 text-[#c7d0d5]">You do not need a complicated boss build for your first run.</p>
        </section>

        <BeginnerGuideChecklist items={[
          'Do I have one Module doing reliable damage?',
          'Am I upgrading it?',
          'Does the new Module fit an open slot?',
          'Am I wasting all my Nitro on travel?',
          'Am I using active abilities on useful targets?',
          'Am I adding a Module because I need it, or only because the slot is empty?',
        ]} />
        <p className="mt-5 leading-8 text-[#c7d0d5]">If those answers make sense, the run is probably in good shape.</p>
      </div>
    </GameWikiArticleLayout>
  );
}
