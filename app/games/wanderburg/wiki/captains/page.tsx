import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import captainsMarkdown from './captains.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { WikiDataBlock, WikiEntityCard, WikiEntitySection } from '@/components/game-wiki/database-ui';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/wiki/captains';
const title = 'Wanderburg Captains Wiki (0.9.14): All 14 Captains & Effects';
const h1 = 'Wanderburg Captains Wiki (0.9.14)';
const description = 'Wanderburg Captains reference for Early Access 0.9.14, covering all 14 current Captains, their bonuses, drawbacks, screenshots and confirmed balance changes.';
const publishedAt = '2026-09-22T00:00:00.000Z';
const modifiedAt = '2026-09-23T00:00:00.000Z';
const sources = [
  ['Official Wanderburg Steam Hotfix 0.9.14', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.10', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.7', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.6', 'https://steamcommunity.com/app/3624140/allnews/'],
] as const;
const toc = [
  'Captain Database', 'Captain Details', 'Captain Balance History',
  'Captains and Builds',
];
const captainImages: Record<string, string> = {
  'Patchy The Pirate': 'patchy-the-pirate', 'Dieter The Drunk': 'dieter-the-drunk', Duelist: 'duelist', Empress: 'empress',
  Huntress: 'huntress', 'Kapitalistus Maximus': 'kapitalistus-maximus', Lumberjack: 'lumberjack',
  'Norbert The Normal': 'norbert-the-normal', Pyromaniac: 'pyromaniac', 'Racer Ruth': 'racer-ruth',
  'Sire Jonah': 'sire-jonah', Tankbert: 'tankbert', 'The Count': 'the-count', 'Time Witch': 'time-witch',
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

const markdownLines = captainsMarkdown.replace(/\r\n/g, '\n').split('\n');
const rosterStart = markdownLines.indexOf('## Current Captain List');
const detailStart = markdownLines.indexOf('# Patchy The Pirate');
const historyStart = markdownLines.indexOf('# Captain Balance History');
if (rosterStart < 0 || detailStart <= rosterStart || historyStart <= detailStart) {
  throw new Error('Captain source sections are incomplete');
}

const rosterHeader = markdownLines.indexOf('| Captain | Positive effect | Drawback |', rosterStart);
if (rosterHeader < 0) throw new Error('Current Captain List table is missing');
const rosterRows: string[][] = [];
for (let index = rosterHeader + 2; markdownLines[index]?.startsWith('|'); index += 1) {
  rosterRows.push(cells(markdownLines[index]));
}

type CaptainEntry = { name: string; positive: string; drawback: string; imageFile: string; notes: string[] };
const detailSections: { name: string; notes: string[] }[] = [];
let currentSection: { name: string; notes: string[] } | null = null;
for (const line of markdownLines.slice(detailStart, historyStart)) {
  if (line.startsWith('# ')) {
    currentSection = { name: line.slice(2), notes: [] };
    detailSections.push(currentSection);
  } else if (currentSection) {
    currentSection.notes.push(line);
  }
}

const rosterByName = new Map(rosterRows.map((row) => [row[0], row]));
const captains: CaptainEntry[] = detailSections.map(({ name, notes }) => {
  const roster = rosterByName.get(name);
  const imageFile = captainImages[name];
  if (!roster || roster.length !== 3 || !roster[1] || !roster[2] || !imageFile) {
    throw new Error('Captain source mapping is incomplete: ' + name);
  }
  return { name, positive: roster[1], drawback: roster[2], imageFile, notes };
});
const anchors = captains.map((entry) => slugify(entry.name));
if (
  rosterRows.length !== 14 || captains.length !== 14 ||
  rosterByName.size !== 14 || new Set(captains.map((entry) => entry.name)).size !== 14 ||
  Object.keys(captainImages).length !== 14 ||
  new Set(anchors).size !== 14 ||
  new Set(captains.map((entry) => entry.imageFile)).size !== 14 ||
  rosterRows.some((row) => !captains.some((entry) => entry.name === row[0]))
) {
  throw new Error('Current-client Captain roster, screenshots and detail anchors do not match');
}

const referenceLines = markdownLines.slice(rosterStart, detailStart);
const supportingLines = markdownLines.slice(historyStart);

function captainImage(entry: CaptainEntry) {
  return {
    src: '/images/games/wanderburg/captains/' + entry.imageFile + '.png',
    alt: 'Wanderburg 0.9.14 ' + entry.name + ' Captain tooltip',
  };
}

function MarkdownContent({ lines, showRosterScreenshot = false, nested = false }: { lines: string[]; showRosterScreenshot?: boolean; nested?: boolean }) {
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line) { index += 1; continue; }
    if (line === '---') { blocks.push(<hr key={index} className="mt-10 border-white/15" />); index += 1; continue; }
    const headingMatch = line.match(/^(#{1,3}) (.+)$/);
    if (headingMatch) {
      const heading = headingMatch[2];
      const level = nested ? 3 : headingMatch[1].length === 3 ? 4 : headingMatch[1].length === 2 && lines === supportingLines ? 3 : 2;
      const Heading = (`h${level}`) as 'h2' | 'h3' | 'h4';
      blocks.push(<Heading id={slugify(heading) + (level === 2 ? '' : '-' + index)} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</Heading>);
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
      blocks.push(<div key={index} className="mt-5 max-w-full overflow-x-auto rounded-xl border border-white/15"><table className="min-w-[850px] border-collapse text-left text-sm leading-6"><thead className="bg-[#192126]"><tr>{header.map((cell) => <th key={cell} scope="col" className="border-b border-white/20 px-4 py-3 font-semibold"><Inline text={cell} /></th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-white/10 last:border-0">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="whitespace-nowrap px-4 py-3 text-left font-medium"><Inline text={cell} /></th> : <td key={cellIndex} className="px-4 py-3 text-[#c7d0d5]"><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>);
      if (showRosterScreenshot && header.includes('Positive effect')) {
        blocks.push(<figure key="captains-list" className="my-6 max-w-[648px]"><Image src="/images/games/wanderburg/captains/captains-list-0.9.14.png" alt="Wanderburg 0.9.14 Captain selection showing 14 Captains" width={648} height={1024} className="h-auto max-w-full rounded-xl border border-white/15" /><figcaption className="mt-2 text-sm text-[#aeb7bc]">All 14 Captains visible in the Wanderburg Early Access 0.9.14 client used for this reference.</figcaption></figure>);
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

function CaptainDatabase() {
  return <>
    <section id="captain-database" aria-labelledby="captain-database-title" className="mt-8 scroll-mt-24 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">CAPTAIN DATABASE</p>
      <h2 id="captain-database-title" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Captain Database</h2>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
        <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">{captains.length} Captains</span>
      </div>
    </section>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {captains.map((entry) => <WikiEntityCard key={entry.name} href={'#' + slugify(entry.name)} name={entry.name} category="Captain" summary={'Positive: ' + entry.positive + ' · Drawback: ' + entry.drawback} image={captainImage(entry)} />)}
    </div>
    <details className="mt-10 border-y border-[#b99256]/25 py-4">
      <summary className="cursor-pointer font-serif text-lg font-semibold text-[#f2d6ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Captain Table</summary>
      <div className="game-wiki-markdown pb-6"><MarkdownContent lines={referenceLines} showRosterScreenshot /></div>
    </details>
    <section aria-labelledby="captain-details" className="mt-12">
      <h2 id="captain-details" className="scroll-mt-24 font-serif text-3xl font-semibold text-[#fff2df]">Captain Details</h2>
      <div className="mt-5">
        {captains.map((entry) => <WikiEntitySection key={entry.name} id={slugify(entry.name)} name={entry.name} category="Captain" image={captainImage(entry)}>
          <WikiDataBlock title="Effects" rows={[{ label: 'Positive effect', value: entry.positive }, { label: 'Drawback', value: entry.drawback }]} />
          <div className="border-t border-white/10 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#dca464]">Notes</h3>
            <div className="game-wiki-markdown text-sm"><MarkdownContent lines={entry.notes} nested /></div>
          </div>
          <a href="#captain-database" className="inline-block text-xs font-semibold text-[#ff9a7a] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Back to Captain Database ↑</a>
        </WikiEntitySection>)}
      </div>
    </section>
    <div className="game-wiki-markdown"><MarkdownContent lines={supportingLines} /></div>
  </>;
}

export default function WanderburgCaptains() {
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
  return <GameWikiArticleLayout config={{ ...wanderburgWikiConfig, officialHref: undefined }} activeHref={href} title={h1} description={description} label="Captain Database" labelTone="neutral" footerNote="" toc={toc} schema={schema}>
    <CaptainDatabase />
  </GameWikiArticleLayout>;
}
