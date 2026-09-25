import type { Metadata } from 'next';
import Image from 'next/image';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { WikiDataBlock, WikiEntityCard, WikiEntitySection } from '@/components/game-wiki/database-ui';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/wiki/crew';
const h1 = 'Wanderburg Crew Wiki (0.9.14)';
const title = 'Wanderburg Crew Wiki (0.9.14): All 6 Crew & Effects';
const description = 'Wanderburg Crew reference for Early Access 0.9.14, covering all 6 current Crew with their effects, mechanics, stats and in-game screenshots.';
const publishedAt = '2026-09-25T00:00:00.000Z';
const modifiedAt = publishedAt;

export const metadata: Metadata = {
  title: `${title} | RUNBACK`,
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: modifiedAt },
  twitter: { card: 'summary', title, description },
};

type CrewEntry = {
  name: string;
  file: string;
  width: number;
  height: number;
  effect: string;
  cooldown?: string;
  note: string;
};

const crew: CrewEntry[] = [
  {
    name: 'Archer Crew', file: 'archer-crew', width: 625, height: 1012,
    effect: 'Attacks the nearest target.', cooldown: '2s',
    note: 'The Archer Crew directs its automatic attacks toward the closest target.',
  },
  {
    name: 'Canoneer Crew', file: 'canoneer-crew', width: 636, height: 1024,
    effect: 'Attacks a nearby target.', cooldown: '4s',
    note: 'Canoneers attack nearby targets automatically.',
  },
  {
    name: 'Carpenters', file: 'carpenters', width: 646, height: 1015,
    effect: 'Continuously repairs the vehicle.',
    note: 'Carpenters restore vehicle health over time.',
  },
  {
    name: 'Fire Crew', file: 'fire-crew', width: 639, height: 1024,
    effect: 'Uses fire-based attacks.', cooldown: '2s',
    note: 'Fire Crew uses fire-based attacks.',
  },
  {
    name: 'Merchants', file: 'merchants', width: 640, height: 1006,
    effect: 'Generates Gold over time.',
    note: 'Merchants generate Gold over time.',
  },
  {
    name: 'Wizard Crew', file: 'wizard-crew', width: 637, height: 1021,
    effect: 'Fires magic projectiles at nearby enemies.', cooldown: '2s',
    note: 'Wizard Crew attacks nearby enemies with magic projectiles.',
  },
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const toc = ['Crew Database', 'Crew Details', ...crew.map((entry) => entry.name)];

if (crew.length !== 6 || new Set(crew.map((entry) => entry.name)).size !== 6) {
  throw new Error('Crew roster must contain exactly six unique entries');
}

function crewImage(entry: CrewEntry) {
  return {
    src: `/images/games/wanderburg/crew/${entry.file}.png`,
    alt: `Wanderburg Early Access 0.9.14 ${entry.name} image`,
  };
}

function CrewDatabase() {
  return (
    <>
      <section id="crew-database" aria-labelledby="crew-database-title" className="mt-8 scroll-mt-24 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">CREW DATABASE</p>
        <h2 id="crew-database-title" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Crew Database</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">{crew.length} Crew</span>
          <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">Early Access 0.9.14</span>
        </div>
        <figure className="mt-6 max-w-[955px] border border-white/10 bg-[#17201d] p-3">
          <Image
            src="/images/games/wanderburg/crew/crew-list-0.9.14.png"
            alt="Wanderburg 0.9.14 Crew selection showing all six Crew"
            width={955}
            height={280}
            className="h-auto max-w-full"
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#aeb7bc]">All six Crew visible in Wanderburg Early Access 0.9.14.</figcaption>
        </figure>
      </section>
      <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {crew.map((entry) => <WikiEntityCard key={entry.name} href={`#${slugify(entry.name)}`} name={entry.name} category="Crew" summary={entry.effect} image={crewImage(entry)} />)}
      </div>
      <section id="crew-details" aria-labelledby="crew-details-title" className="mt-12">
        <h2 id="crew-details-title" className="scroll-mt-24 font-serif text-3xl font-semibold text-[#fff2df]">Crew Details</h2>
        <div className="mt-5">
          {crew.map((entry) => <WikiEntitySection key={entry.name} id={slugify(entry.name)} name={entry.name} category="Crew" image={crewImage(entry)}>
            <WikiDataBlock title="Crew Data" rows={[
              { label: 'Effect', value: entry.effect },
              ...(entry.cooldown ? [{ label: 'Auto cooldown', value: entry.cooldown }] : []),
            ]} />
            <p className="leading-7 text-[#c7d0d5]">{entry.note}</p>
            <a href="#crew-database" className="inline-block text-xs font-semibold text-[#ff9a7a] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Back to Crew Database ↑</a>
          </WikiEntitySection>)}
        </div>
      </section>
    </>
  );
}

export default function WanderburgCrew() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description, datePublished: publishedAt, dateModified: modifiedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
        { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
      ] },
    ],
  };

  return (
    <GameWikiArticleLayout
      config={{ ...wanderburgWikiConfig, officialHref: undefined }}
      activeHref={href}
      title={h1}
      description={description}
      label="Crew Database"
      labelTone="neutral"
      footerNote=""
      toc={toc}
      schema={schema}
    >
      <p className="mt-6 leading-7 text-[#c7d0d5]">Crew provide distinct support during a Wanderburg run, from attacks to repairs and Gold generation. This reference covers the six Crew shown in the Early Access 0.9.14 client.</p>
      <CrewDatabase />
    </GameWikiArticleLayout>
  );
}
