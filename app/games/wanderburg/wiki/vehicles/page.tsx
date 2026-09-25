import type { Metadata } from 'next';
import Image from 'next/image';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { WikiDataBlock } from '@/components/game-wiki/database-ui';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/wiki/vehicles';
const h1 = 'Wanderburg Vehicles Wiki (0.9.14)';
const title = 'Wanderburg Vehicles Wiki (0.9.14): All 3 Vehicles, Stats & Slots';
const description = 'Wanderburg Vehicles reference for Early Access 0.9.14, covering all 3 current Vehicles with their Module slots, mechanics, stats and in-game screenshots.';
const publishedAt = '2026-09-25T00:00:00.000Z';
const modifiedAt = publishedAt;

export const metadata: Metadata = {
  title: `${title} | RUNBACK`,
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: modifiedAt },
  twitter: { card: 'summary', title, description },
};

type Vehicle = {
  name: string;
  file: string;
  width: number;
  height: number;
  slots: string;
  characteristic: string;
  description: string;
  use: string;
};

const vehicles: Vehicle[] = [
  {
    name: 'Spiderburg', file: 'spiderburg', width: 630, height: 1015,
    slots: '2 Top / 1 Front / 1 Back',
    characteristic: 'Agile legged vehicle with terrain-related advantages',
    description: 'An agile vehicle on legs. Its legs stomp enemies, and it is immune to terrain effects like water.',
    use: 'Its two Top slots allow a layout with multiple Top Modules, alongside one Front and one Back Module.',
  },
  {
    name: 'Tankenburg', file: 'tankenburg', width: 643, height: 1015,
    slots: '1 Side / 1 Top / 2 Front',
    characteristic: 'A lot of armor, but slow to turn and accelerate',
    description: 'Tankenburg has a lot of armor, but is slow to turn and accelerate.',
    use: 'Its two Front slots allow a layout with multiple Front Modules.',
  },
  {
    name: 'Wanderturm', file: 'wanderturm', width: 634, height: 1012,
    slots: '1 Side / 1 Top / 1 Front / 1 Back',
    characteristic: 'Reliable classic and a good all-rounder',
    description: 'Wanderturm is the reliable classic, a good all-rounder.',
    use: 'It has one slot in each position: Side, Top, Front and Back.',
  },
];

const toc = ['Current Vehicle List', ...vehicles.map((vehicle) => vehicle.name), 'Vehicle and Module Slots'];
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

if (vehicles.length !== 3 || new Set(vehicles.map((vehicle) => vehicle.name)).size !== 3) {
  throw new Error('Current-client Vehicle roster must contain exactly three unique entries');
}

function VehicleDatabase() {
  return (
    <>
      <p className="mt-6 leading-7 text-[#c7d0d5]">This page covers the 3 Vehicles available in Wanderburg Early Access 0.9.14, including their Module slots, core mechanics and current in-game characteristics.</p>

      <section id="current-vehicle-list" aria-labelledby="current-vehicle-list-title" className="mt-8 scroll-mt-24 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">VEHICLE DATABASE</p>
        <h2 id="current-vehicle-list-title" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Current Vehicle List</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">{vehicles.length} Vehicles</span>
        </div>
        <div className="mt-5 max-w-full overflow-x-auto rounded-xl border border-white/15">
          <table className="min-w-[680px] border-collapse text-left text-sm leading-6">
            <thead className="bg-[#192126]"><tr><th scope="col" className="border-b border-white/20 px-4 py-3 font-semibold">Vehicle</th><th scope="col" className="border-b border-white/20 px-4 py-3 font-semibold">Module Slots</th><th scope="col" className="border-b border-white/20 px-4 py-3 font-semibold">Main Characteristic</th></tr></thead>
            <tbody>{vehicles.map((vehicle) => <tr key={vehicle.name} className="border-b border-white/10 last:border-0"><th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-medium"><a className="text-[#ff9a7a] underline underline-offset-4" href={`#${slugify(vehicle.name)}`}>{vehicle.name}</a></th><td className="whitespace-nowrap px-4 py-3 text-[#c7d0d5]">{vehicle.slots}</td><td className="px-4 py-3 text-[#c7d0d5]">{vehicle.characteristic}</td></tr>)}</tbody>
          </table>
        </div>
        <figure className="mt-6 w-full max-w-[954px] border border-white/10 bg-[#17201d] p-3">
          <Image
            src="/images/games/wanderburg/vehicles/vehicles-list-0.9.14.png"
            alt="Wanderburg 0.9.14 Vehicle selection showing Spiderburg, Tankenburg and Wanderturm"
            width={954}
            height={226}
            className="h-auto max-w-full"
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#aeb7bc]">All 3 Vehicles available in Wanderburg Early Access 0.9.14.</figcaption>
        </figure>
      </section>

      <section id="vehicle-details" aria-labelledby="vehicle-details-title" className="mt-12">
        <h2 id="vehicle-details-title" className="font-serif text-3xl font-semibold text-[#fff2df]">Vehicle Details</h2>
        <div className="mt-5 space-y-8">
          {vehicles.map((vehicle) => (
            <section key={vehicle.name} id={slugify(vehicle.name)} aria-labelledby={`${slugify(vehicle.name)}-title`} className="scroll-mt-24 border-t border-[#b99256]/30 py-8">
              <h3 id={`${slugify(vehicle.name)}-title`} className="font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">{vehicle.name}</h3>
              <p className="mt-4 max-w-3xl leading-7 text-[#c7d0d5]">{vehicle.description}</p>
              <figure className="mt-5 w-full max-w-[640px] border border-white/10 bg-[#17201d] p-3">
                <Image
                  src={`/images/games/wanderburg/vehicles/${vehicle.file}.png`}
                  alt={`Wanderburg 0.9.14 ${vehicle.name} vehicle details`}
                  width={vehicle.width}
                  height={vehicle.height}
                  loading="lazy"
                  className="h-auto max-w-full"
                />
                <figcaption className="mt-3 text-xs leading-5 text-[#aeb7bc]">{vehicle.name} in Wanderburg Early Access 0.9.14.</figcaption>
              </figure>
              <div className="mt-5 max-w-2xl">
                <WikiDataBlock title="Vehicle Details" rows={[
                  { label: 'Module slots', value: vehicle.slots },
                  { label: 'Characteristic', value: vehicle.characteristic },
                ]} />
              </div>
              <p className="mt-4 max-w-3xl leading-7 text-[#c7d0d5]">{vehicle.use}</p>
            </section>
          ))}
        </div>
      </section>

      <section id="vehicle-and-module-slots" aria-labelledby="vehicle-and-module-slots-title" className="mt-10 border-t border-[#b99256]/30 pt-8">
        <h2 id="vehicle-and-module-slots-title" className="font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Vehicle and Module Slots</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#c7d0d5]">Each Vehicle has a fixed number of Module slots by position. Compare the slot layout with the positions of the Modules you want to use.</p>
      </section>
    </>
  );
}

export default function WanderburgVehicles() {
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
      label="Vehicle Database"
      labelTone="neutral"
      footerNote=""
      toc={toc}
      schema={schema}
    >
      <VehicleDatabase />
    </GameWikiArticleLayout>
  );
}
