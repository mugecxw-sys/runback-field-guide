import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { SephiriaDatabaseIndex } from '@/components/game-wiki/sephiria-database-index';
import { sephiriaWikiConfig } from '@/components/game-wiki/sephiria-config';
import {
  sephiriaArtifacts,
  sephiriaBosses,
  sephiriaCostumes,
  sephiriaGrimoires,
  sephiriaHardModeElements,
  sephiriaTablets,
  sephiriaWeaponUpgrades,
  sephiriaWeapons,
  sephiriaWikiPages,
} from '@/lib/sephiria-wiki-data';
import { siteUrl } from '@/lib/repo-guide-pages';

type Props = { params: Promise<{ section: string }> };
const byPath = new Map(sephiriaWikiPages.map((item) => [item.href.split('/').pop()!, item]));
const categories = new Map([
  ['weapons', sephiriaWeapons], ['weapon-upgrades', sephiriaWeaponUpgrades],
  ['artifacts', sephiriaArtifacts], ['tablets', sephiriaTablets],
  ['costumes', sephiriaCostumes], ['bosses', sephiriaBosses],
  ['hard-mode', sephiriaHardModeElements], ['grimoires', sephiriaGrimoires],
]);

export function generateStaticParams() {
  return sephiriaWikiPages.filter((page) => page.group === 'category' || page.group === 'system')
    .map((page) => ({ section: page.href.split('/').pop()! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = byPath.get((await params).section);
  if (!page || (page.group !== 'category' && page.group !== 'system')) return {};
  const title = `Sephiria ${page.title} | RUNBACK`;
  const canonical = `${siteUrl}${page.href}`;
  return { title, description: page.summary, alternates: { canonical }, openGraph: { title, description: page.summary, type: 'article', url: canonical, siteName: 'RUNBACK' } };
}

const h2Id = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Subheading({ children }: { children: string }) {
  return <h2 id={h2Id(children)} className="mt-7 border-t border-[#b99256]/25 pt-6 font-serif text-2xl font-semibold text-[#fff2df]">{children}</h2>;
}

function Paragraph({ children }: { children: string }) {
  return <p className="mt-3 max-w-3xl text-sm leading-6 text-[#bdc6c5]">{children}</p>;
}

function SystemPage({ section }: { section: string }) {
  if (section === 'grimoires') return <>
    <Subheading>Grimoire System</Subheading>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#e1e6e8]"><li>Staff and Grimoires are separate systems.</li><li>Grimoires use active actions.</li><li>MP is involved.</li><li>Relevant stats include Grimoire Damage, Grimoire Haste and MP Cost.</li></ul>
    <Subheading>Related Records</Subheading>
    <Paragraph>Known records connected to Grimoires include Tome of Mimicry, Rylie’s Pocket Watch, Academy Fountain Pen, Standards of Magic and Empty Hilt.</Paragraph>
    <ul className="mt-3 flex flex-wrap gap-2">{[
      ['Tome of Mimicry', '/games/sephiria/wiki/grimoires#tome-of-mimicry'],
      ['Rylie’s Pocket Watch', '/games/sephiria/wiki/artifacts#rylies-pocket-watch'],
      ['Academy Fountain Pen', '/games/sephiria/wiki/artifacts#academy-fountain-pen'],
      ['Standards of Magic', '/games/sephiria/wiki/artifacts#standards-of-magic'],
      ['Empty Hilt', '/games/sephiria/wiki/artifacts#empty-hilt'],
    ].map(([name, href]) => <li key={name} className="border border-[#b99256]/25 bg-[#17201d] px-3 py-2 text-sm text-[#fff2df]"><a href={href} className="hover:text-[#ff9a7a]">{name}</a></li>)}</ul>
  </>;
  if (section === 'hard-mode') return <>
    <Subheading>Hard Mode Overview</Subheading>
    <dl className="mt-3 grid gap-3 sm:grid-cols-2"><div className="border border-[#b99256]/25 bg-[#17201d] p-4"><dt className="text-xs uppercase tracking-wide text-[#b99256]">Hard Mode Elements</dt><dd className="mt-2 text-xl font-semibold text-[#fff2df]">18</dd></div><div className="border border-[#b99256]/25 bg-[#17201d] p-4"><dt className="text-xs uppercase tracking-wide text-[#b99256]">Maximum Hard Mode Level</dt><dd className="mt-2 text-xl font-semibold text-[#fff2df]">60</dd></div></dl>
    <Subheading>Named Elements</Subheading>
    <Paragraph>Hard Mode has 18 elements in total and a maximum level of 60. The reference below currently covers 6 named elements.</Paragraph>
    <SephiriaDatabaseIndex title="Hard Mode Elements" entries={sephiriaHardModeElements} countLabel="entries" showPatchHistory={false} />
  </>;
  if (section === 'mystic-pot') return <>
    <Subheading>Conversion Rules</Subheading>
    <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="border border-[#b99256]/25 bg-[#17201d] p-5"><p className="font-semibold text-[#fff2df]">1 Artifact</p><p className="mt-2 text-sm leading-6 text-[#bdc6c5]">→ Different Artifact of the same rarity</p></div><div className="border border-[#b99256]/25 bg-[#17201d] p-5"><p className="font-semibold text-[#fff2df]">2 Artifacts</p><p className="mt-2 text-sm leading-6 text-[#bdc6c5]">→ 1 Artifact of higher rarity</p></div></div>
    <Subheading>After Use</Subheading><Paragraph>The Mystic Pot appears broken after all uses are consumed.</Paragraph>
  </>;
  if (section === 'side-bag') return <>
    <Subheading>Storage</Subheading><Paragraph>The Side Bag stores spare items. Items inside the Side Bag are inactive.</Paragraph>
    <Subheading>Unlock</Subheading><Paragraph>The Side Bag is unlocked through Destiny Inscription.</Paragraph>
  </>;
  if (section === 'destiny-inscription') return <>
    <Subheading>Overview</Subheading><Paragraph>Destiny Inscription is a progression system.</Paragraph>
    <Subheading>Connection</Subheading><Paragraph>The Side Bag can be unlocked through Destiny Inscription.</Paragraph>
  </>;
  if (section === 'training-grounds') return <>
    <Subheading>Access</Subheading><Paragraph>Enter the Training Grounds through its entrance to test unlocked items and equipment.</Paragraph>
    <Subheading>Testing Items</Subheading><Paragraph>Open the inventory to take out and test items that have already been unlocked.</Paragraph>
  </>;
  if (section === 'chapters') return <>
    <Subheading>Chapter Count</Subheading><Paragraph>Total Chapters: 6.</Paragraph>
    <Subheading>Chapter 6</Subheading><Paragraph>Chapter 6 is the final story chapter. It includes 2 bosses, 1 miniboss, 3 BGM tracks, 3 achievements and the ending.</Paragraph>
  </>;
  return null;
}

function CategoryPage({ section }: { section: string }) {
  const entries = categories.get(section);
  if (!entries) return <SystemPage section={section} />;
  const pageTitle: Record<string, string> = {
    weapons: 'Weapon Index', 'weapon-upgrades': 'Weapon Upgrade Index', artifacts: 'Artifact Index',
    tablets: 'Tablet Index', costumes: 'Costume Index', bosses: 'Boss & Miniboss Index',
    'hard-mode': 'Named Elements', grimoires: 'Grimoire Reference',
  };
  return <>
    {section === 'hard-mode' && <><Subheading>Hard Mode Overview</Subheading><Paragraph>Hard Mode has 18 elements in total and a maximum level of 60. The reference below currently covers 6 named elements.</Paragraph></>}
    {section === 'grimoires' && <Paragraph>A reference to Grimoire actions, relevant stats and selected related records.</Paragraph>}
    <SephiriaDatabaseIndex title={pageTitle[section]} entries={entries.map((entry) => ({ ...entry, patchHistory: [] }))} relationEntries={section === 'weapons' ? sephiriaWeaponUpgrades.map((entry) => ({ ...entry, patchHistory: [] })) : section === 'weapon-upgrades' ? sephiriaWeapons : []} filterTypes={section === 'bosses'} showPatchHistory={false} countLabel={section === 'grimoires' ? 'entry' : section !== 'weapons' ? 'entries' : undefined} />
    {section === 'grimoires' && <>
      <Subheading>Grimoire System</Subheading><Paragraph>Staff and Grimoires are separate systems. Grimoires use active actions, MP is involved, and relevant stats include Grimoire Damage, Grimoire Haste and MP Cost.</Paragraph>
      <Subheading>Related Records</Subheading><Paragraph>Known related records: Tome of Mimicry, Rylie’s Pocket Watch, Academy Fountain Pen, Standards of Magic and Empty Hilt.</Paragraph>
      <ul className="mt-3 flex flex-wrap gap-2">{[
        ['Tome of Mimicry', '/games/sephiria/wiki/grimoires#tome-of-mimicry'],
        ['Rylie’s Pocket Watch', '/games/sephiria/wiki/artifacts#rylies-pocket-watch'],
        ['Academy Fountain Pen', '/games/sephiria/wiki/artifacts#academy-fountain-pen'],
        ['Standards of Magic', '/games/sephiria/wiki/artifacts#standards-of-magic'],
        ['Empty Hilt', '/games/sephiria/wiki/artifacts#empty-hilt'],
      ].map(([name, href]) => <li key={name} className="border border-[#b99256]/25 bg-[#17201d] px-3 py-2 text-sm text-[#fff2df]"><a href={href} className="hover:text-[#ff9a7a]">{name}</a></li>)}</ul>
    </>}
  </>;
}

function tocFor(section: string) {
  const databaseTitles: Record<string, string> = {
    weapons: 'Weapon Index', 'weapon-upgrades': 'Weapon Upgrade Index', artifacts: 'Artifact Index',
    tablets: 'Tablet Index', costumes: 'Costume Index', bosses: 'Boss & Miniboss Index',
  };
  if (databaseTitles[section]) return [databaseTitles[section]];
  if (section === 'hard-mode') return ['Hard Mode Overview', 'Named Elements'];
  if (section === 'grimoires') return ['Grimoire Reference', 'Grimoire System', 'Related Records'];
  if (section === 'mystic-pot') return ['Conversion Rules', 'After Use'];
  if (section === 'side-bag') return ['Storage', 'Unlock'];
  if (section === 'destiny-inscription') return ['Overview', 'Connection'];
  if (section === 'training-grounds') return ['Access', 'Testing Items'];
  if (section === 'chapters') return ['Chapter Count', 'Chapter 6'];
  return [];
}

export default async function SephiriaWikiSectionPage({ params }: Props) {
  const section = (await params).section;
  const page = byPath.get(section);
  if (!page || (page.group !== 'category' && page.group !== 'system')) notFound();
  const title = `Sephiria ${page.title}`;
  const url = `${siteUrl}${page.href}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', headline: title, description: page.summary, datePublished: page.publishedAt, author: { '@type': 'Organization', name: 'RUNBACK' }, publisher: { '@type': 'Organization', name: 'RUNBACK' }, mainEntityOfPage: url, url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Sephiria', item: `${siteUrl}/games/sephiria` },
      { '@type': 'ListItem', position: 3, name: 'Wiki', item: `${siteUrl}/games/sephiria/wiki` },
      { '@type': 'ListItem', position: 4, name: page.title, item: url },
    ] },
  ] };
  const isSystem = page.group === 'system';
  return <GameWikiArticleLayout config={sephiriaWikiConfig} activeHref={page.href} title={title} description={page.summary} toc={tocFor(section)} schema={schema} label="Wiki" labelTone="neutral" footerNote="">
    <div className="game-wiki-markdown mt-6 min-w-0 overflow-wrap-anywhere">
      {isSystem ? <SystemPage section={section} /> : <CategoryPage section={section} />}
    </div>
  </GameWikiArticleLayout>;
}
