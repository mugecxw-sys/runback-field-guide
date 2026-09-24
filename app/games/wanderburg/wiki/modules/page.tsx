import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import modulesMarkdown from './modules.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { WikiDataBlock, WikiEntityCard, WikiEntitySection } from '@/components/game-wiki/database-ui';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/wiki/modules';
const title = 'Wanderburg Modules Wiki (0.9.14): All 20 Modules, Stats & Effects';
const h1 = 'Wanderburg Modules Wiki (0.9.14)';
const description = 'Wanderburg Modules reference for Early Access 0.9.14, covering all 20 Modules visible in the current client with slots, effects, base stats, cooldowns and patch changes.';
const publishedAt = '2026-09-22T00:00:00.000Z';
const modifiedAt = '2026-09-23T00:00:00.000Z';
const sources = [
  ['Official Wanderburg Steam Hotfix 0.9.14', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.13', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.10', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.9', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.8', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.7', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.6', 'https://steamcommunity.com/app/3624140/allnews/'],
] as const;
const toc = [
  'Module Database', 'Top-Slot Modules', 'Side-Slot Modules', 'Front-Slot Modules', 'Back-Slot Modules',
  'Module Details',
  'Module Rerolls',
];
const moduleImages: Record<string, string> = {
  'Archer Tower': 'archer-tower', Arms: 'arms', Cannon: 'cannon', 'Cannon Tower': 'cannon-tower',
  Catapult: 'catapult', Companion: 'companion', Dash: 'dash', 'Fire Mage': 'fire-mage',
  'Force Mage': 'force-mage', 'Front Barracks': 'front-barracks', FrontCannon: 'frontcannon',
  'Lightning Mage': 'lightning-mage', 'Mine Layer': 'mine-layer', RAM: 'ram',
  'Side Ballista': 'side-ballista', 'Side Barracks': 'side-barracks', 'Side Flamethrower': 'side-flamethrower',
  Teleporter: 'teleporter', 'Top Mortar': 'top-mortar', 'Turret Layer': 'turret-layer',
};

export const metadata: Metadata = {
  title: title + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: modifiedAt },
  twitter: { card: 'summary', title, description },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]*\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-[#ff9a7a] underline underline-offset-4">{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

function cells(line: string) {
  return line.split('|').slice(1, -1).map((cell) => cell.trim());
}

const markdownLines = modulesMarkdown.replace(/\r\n/g, '\n').split('\n');

function linesBetween(start: string, end: string) {
  const first = markdownLines.indexOf(start);
  const last = markdownLines.indexOf(end, first + 1);
  if (first < 0 || last < 0) throw new Error('Module source section not found: ' + start);
  return markdownLines.slice(first + 1, last);
}

function tableRows(header: string) {
  const first = markdownLines.indexOf(header);
  if (first < 0) throw new Error('Module source table not found: ' + header);
  const rows: string[][] = [];
  for (let index = first + 2; markdownLines[index]?.startsWith('|'); index += 1) {
    rows.push(cells(markdownLines[index]));
  }
  return rows;
}

const rosterRows = tableRows('| Module | Slot | Effect |');
const baseRows = tableRows('| Module | Active Base | Auto Base | Active CD | Auto CD |');
const rosterByName = new Map(rosterRows.map((row) => [row[0], row]));
const baseByName = new Map(baseRows.map((row) => [row[0], row]));
const slotGroups = [
  { slot: 'Top', heading: '# Top-Slot Modules', next: '# Side-Slot Modules' },
  { slot: 'Side', heading: '# Side-Slot Modules', next: '# Front-Slot Modules' },
  { slot: 'Front', heading: '# Front-Slot Modules', next: '# Back-Slot Modules' },
  { slot: 'Back', heading: '# Back-Slot Modules', next: '# Module Rerolls' },
] as const;

type ModuleEntry = {
  name: string;
  slot: string;
  role: string;
  imageFile: string;
  baseValues: string[];
  notes: string[];
};

function entriesInGroup(slot: string, heading: string, next: string): ModuleEntry[] {
  const entries: { name: string; notes: string[] }[] = [];
  let current: { name: string; notes: string[] } | null = null;
  for (const line of linesBetween(heading, next)) {
    if (line.startsWith('## ')) {
      current = { name: line.slice(3), notes: [] };
      entries.push(current);
    } else if (current && line !== '---') {
      current.notes.push(line);
    }
  }
  return entries.map(({ name, notes }) => {
    const roster = rosterByName.get(name);
    const base = baseByName.get(name);
    const imageFile = moduleImages[name];
    if (!roster || roster[1] !== slot || !base || !imageFile) {
      throw new Error('Module source mapping is incomplete: ' + name);
    }
    return { name, slot, role: roster[2], imageFile, baseValues: base, notes };
  });
}

const groupedModules = slotGroups.map((group) => ({
  ...group,
  modules: entriesInGroup(group.slot, group.heading, group.next),
}));
const allModules = groupedModules.flatMap((group) => group.modules);
if (
  allModules.length !== 20 ||
  rosterRows.length !== allModules.length ||
  new Set(allModules.map((entry) => entry.name)).size !== allModules.length
) {
  throw new Error('Current-client Module roster and detail sections do not match');
}

const rosterStart = markdownLines.indexOf('## Current Module List');
const detailStart = markdownLines.indexOf('# Top-Slot Modules');
const rerollsStart = markdownLines.indexOf('# Module Rerolls');
if (rosterStart < 0 || detailStart < 0 || rerollsStart < 0) {
  throw new Error('Module source sections are incomplete');
}
const referenceLines = markdownLines.slice(rosterStart, detailStart);
const supportingLines = markdownLines.slice(rerollsStart);

function moduleImage(entry: ModuleEntry) {
  return {
    src: '/images/games/wanderburg/modules/' + entry.imageFile + '.png',
    alt: 'Wanderburg 0.9.14 ' + entry.name + ' module tooltip',
  };
}

function MarkdownContent({ lines, showRosterScreenshot = false }: { lines: string[]; showRosterScreenshot?: boolean }) {
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line) { index += 1; continue; }
    if (line === '---') { blocks.push(<hr key={index} className="mt-10 border-white/15" />); index += 1; continue; }
    if (line.startsWith('# ') || line.startsWith('## ')) {
      const heading = line.replace(/^#{1,2} /, '');
      blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      index += 1;
      continue;
    }
    if (line.startsWith('### ')) {
      const heading = line.slice(4);
      blocks.push(<h3 id={slugify(heading) + '-' + index} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</h3>);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      const quotes: string[] = [];
      while (lines[index]?.startsWith('> ')) { quotes.push(lines[index].slice(2).replace(/\\$/, '')); index += 1; }
      blocks.push(<blockquote key={index} className="mt-5 border-l-2 border-[#ff8662] pl-4 leading-7 text-[#c7d0d5]">{quotes.map((quote, quoteIndex) => <span key={quoteIndex}><Inline text={quote} />{quoteIndex < quotes.length - 1 && <br />}</span>)}</blockquote>);
      continue;
    }
    if (line.startsWith('|') && /^\|[-| :]+\|$/.test(lines[index + 1] ?? '')) {
      const header = cells(line);
      index += 2;
      const rows: string[][] = [];
      while (lines[index]?.startsWith('|')) { rows.push(cells(lines[index])); index += 1; }
      blocks.push(<div key={index} className="mt-5 max-w-full overflow-x-auto border border-white/15"><table className="min-w-[850px] border-collapse text-left text-sm leading-6"><thead className="bg-[#192126]"><tr>{header.map((cell) => <th key={cell} scope="col" className="border-b border-white/20 px-4 py-3 font-semibold"><Inline text={cell} /></th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-white/10 last:border-0">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="whitespace-nowrap px-4 py-3 text-left font-medium"><Inline text={cell} /></th> : <td key={cellIndex} className="px-4 py-3 text-[#c7d0d5]"><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>);
      if (showRosterScreenshot && header.includes('Effect')) {
        blocks.push(<figure key="modules-list" className="my-6 max-w-[640px]"><Image src="/images/games/wanderburg/modules/modules-list-0.9.14.png" alt="Wanderburg 0.9.14 module selection showing 20 modules" width={640} height={1032} className="h-auto max-w-full border border-white/15" /><figcaption className="mt-2 text-sm text-[#aeb7bc]">All 20 Modules visible in the Wanderburg Early Access 0.9.14 client used for this reference.</figcaption></figure>);
      }
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) { items.push(lines[index].slice(2)); index += 1; }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    index += 1;
  }
  return <>{blocks}</>;
}

function ModuleDatabase() {
  return (
    <>
      <section id="module-database" aria-labelledby="module-database-title" className="mt-8 scroll-mt-24 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">MODULE DATABASE</p>
        <h2 id="module-database-title" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Module Database</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">{allModules.length} Modules</span>
        </div>
        <nav aria-label="Browse modules by slot" className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {groupedModules.map((group) => (
            <a key={group.slot} href={'#' + slugify(group.heading.slice(2))} className="border border-[#b99256]/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#f2d6ac] hover:border-[#ff8662] hover:text-[#fff2df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">{group.slot}</a>
          ))}
        </nav>
      </section>
      {groupedModules.map((group) => {
        const heading = group.heading.slice(2);
        const id = slugify(heading);
        return (
          <section key={group.slot} aria-labelledby={id} className="mt-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#b99256]/25 pb-3">
              <h3 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df]">{heading}</h3>
              <span className="text-xs text-[#aeb7bc]">{group.modules.length} Modules</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.modules.map((entry) => (
                <WikiEntityCard key={entry.name} href={'#' + slugify(entry.name)} name={entry.name} category={entry.slot + ' slot'} summary={entry.role} image={moduleImage(entry)} />
              ))}
            </div>
          </section>
        );
      })}
      <details className="mt-10 border-y border-[#b99256]/25 py-4">
        <summary className="cursor-pointer font-serif text-lg font-semibold text-[#f2d6ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Module Tables</summary>
        <div className="game-wiki-markdown pb-6"><MarkdownContent lines={referenceLines} showRosterScreenshot /></div>
      </details>
      <section aria-labelledby="module-details" className="mt-12">
        <h2 id="module-details" className="scroll-mt-24 font-serif text-3xl font-semibold text-[#fff2df]">Module Details</h2>
        <div className="mt-5">
          {allModules.map((entry) => {
            const fields = ['Active Base', 'Auto Base', 'Active CD', 'Auto CD'];
            const baseRows = fields.map((label, index) => ({ label, raw: entry.baseValues[index + 1] }))
              .filter((row) => row.raw && row.raw !== '—')
              .map((row) => ({ label: row.label, value: <Inline text={row.raw} /> }));
            return (
              <WikiEntitySection key={entry.name} id={slugify(entry.name)} name={entry.name} category={entry.slot + ' slot'} image={moduleImage(entry)}>
                <WikiDataBlock title="Module" rows={[{ label: 'Slot', value: entry.slot }, { label: 'Effect', value: entry.role }]} />
                <WikiDataBlock title="Base Values" rows={baseRows} />
                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#dca464]">Notes</h3>
                  <div className="game-wiki-markdown text-sm"><MarkdownContent lines={entry.notes} /></div>
                </div>
                <a href="#module-database" className="inline-block text-xs font-semibold text-[#ff9a7a] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Back to Module Database ↑</a>
              </WikiEntitySection>
            );
          })}
        </div>
      </section>
      <div className="game-wiki-markdown"><MarkdownContent lines={supportingLines} /></div>
    </>
  );
}

export default function WanderburgModules() {
  const citation = [...new Set(sources.map(([, url]) => url))];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description, datePublished: publishedAt, dateModified: modifiedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation,
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
        { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
      ] },
    ],
  };
  return <GameWikiArticleLayout config={{ ...wanderburgWikiConfig, officialHref: undefined }} activeHref={href} title={h1} description={description} label="Module Database" labelTone="neutral" footerNote="" toc={toc} schema={schema}>
    <ModuleDatabase />
  </GameWikiArticleLayout>;
}
