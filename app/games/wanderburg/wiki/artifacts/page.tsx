import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import artifactsMarkdown from './artifacts.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { WikiDataBlock, WikiEntityCard, WikiEntitySection } from '@/components/game-wiki/database-ui';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/wiki/artifacts';
const title = 'Wanderburg Artifacts Wiki (0.9.14): Effects, Rerolls & Patch Changes';
const h1 = 'Wanderburg Artifacts Wiki (0.9.14)';
const description = 'Wanderburg Artifacts reference for Early Access 0.9.14, covering Repair Wrench, Electric Arrow, Tinderbox, Artifact rerolls and confirmed patch changes.';
const publishedAt = '2026-09-23T00:00:00.000Z';
const modifiedAt = '2026-09-23T00:00:00.000Z';
const sources = [
  ['Official Wanderburg Steam Hotfix 0.9.14', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Hotfix 0.9.10', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam Store', 'https://store.steampowered.com/app/3624140/Wanderburg/'],
] as const;
const toc = [
  'Artifact Database', 'Artifact Details', 'Artifact Rerolls',
  'Artifact Rerolls vs Module Rerolls', 'Rare Artifact Screen', 'Are These All Wanderburg Artifacts?',
  'Why RUNBACK Does Not Copy a Community Artifact List', 'How to Evaluate an Artifact', 'Artifacts and Builds',
  'What RUNBACK Still Needs to Verify', 'Version Status', 'Sources',
];

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

const markdownLines = artifactsMarkdown.replace(/\r\n/g, '\n').split('\n');
const referenceStart = markdownLines.indexOf('## Quick Artifact Reference');
const detailStart = markdownLines.indexOf('# Repair Wrench');
const systemsStart = markdownLines.indexOf('# Artifact Rerolls');
if (referenceStart < 0 || detailStart <= referenceStart || systemsStart <= detailStart) {
  throw new Error('Artifact source sections are incomplete');
}

const referenceHeader = markdownLines.findIndex((line, index) => index > referenceStart && line.startsWith('| Artifact ') && line.includes('What is officially confirmed'));
if (referenceHeader < 0) throw new Error('Quick Artifact Reference table is missing');
const referenceRows: string[][] = [];
for (let index = referenceHeader + 2; markdownLines[index]?.startsWith('|'); index += 1) {
  referenceRows.push(cells(markdownLines[index]));
}

const detailSections: { name: string; notes: string[] }[] = [];
let currentSection: { name: string; notes: string[] } | null = null;
for (const line of markdownLines.slice(detailStart, systemsStart)) {
  if (line.startsWith('# ')) {
    currentSection = { name: line.slice(2), notes: [] };
    detailSections.push(currentSection);
  } else if (currentSection) {
    currentSection.notes.push(line);
  }
}

const referenceByName = new Map(referenceRows.map((row) => [row[0], row]));
const artifacts = detailSections.map(({ name, notes }) => {
  const row = referenceByName.get(name);
  if (!row || row.length !== 3 || !row[1] || !row[2]) {
    throw new Error('Artifact source mapping is incomplete: ' + name);
  }
  return { name, confirmation: row[1], patch: row[2], notes };
});
const anchors = artifacts.map((entry) => slugify(entry.name));
if (
  referenceRows.length !== 3 || artifacts.length !== 3 || referenceByName.size !== 3 ||
  new Set(artifacts.map((entry) => entry.name)).size !== 3 || new Set(anchors).size !== 3 ||
  referenceRows.some((row) => !artifacts.some((entry) => entry.name === row[0]))
) {
  throw new Error('Patch-note-confirmed Artifact reference and detail sections do not match');
}

const introLines = markdownLines.slice(1, referenceStart);
const warningLine = introLines.find((line) => line.startsWith('> **Important:**'));
if (!warningLine) throw new Error('Incomplete Artifact roster warning is missing');
const warningText = warningLine.slice(2).replace(/\\$/, '');
const scopeLines = introLines.filter((line) => line !== warningLine);
const referenceLines = markdownLines.slice(referenceStart, detailStart);
const supportingLines = markdownLines.slice(systemsStart);

function MarkdownContent({ lines, nested = false }: { lines: string[]; nested?: boolean }) {
  const blocks: ReactNode[] = [];
  const headingIds = new Map<string, number>();
  const uniqueHeadingId = (heading: string) => {
    const base = slugify(heading);
    const count = (headingIds.get(base) ?? 0) + 1;
    headingIds.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line) { index += 1; continue; }
    if (line === '---') { blocks.push(<hr key={index} className="mt-10 border-white/15" />); index += 1; continue; }
    const headingMatch = line.match(/^(#{1,3}) (.+)$/);
    if (headingMatch) {
      const heading = headingMatch[2];
      const level = nested ? 3 : headingMatch[1].length === 3 ? 4 : headingMatch[1].length === 2 && lines === supportingLines && heading !== 'Sources' ? 3 : 2;
      const Heading = (`h${level}`) as 'h2' | 'h3' | 'h4';
      blocks.push(<Heading id={uniqueHeadingId(heading)} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</Heading>);
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
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) { items.push(lines[index].slice(2)); index += 1; }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (/^\d+\. /.test(lines[index] ?? '')) { items.push(lines[index].replace(/^\d+\. /, '')); index += 1; }
      blocks.push(<ol key={index} className="mt-5 list-decimal space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ol>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    index += 1;
  }
  return <>{blocks}</>;
}

function ArtifactDatabase() {
  return <>
    <section id="artifact-database" aria-labelledby="artifact-database-title" className="mt-8 scroll-mt-24 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">ARTIFACT DATABASE</p>
      <h2 id="artifact-database-title" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">Artifact Database</h2>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
        <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#fff2df]">{artifacts.length} patch-note-confirmed Artifacts</span>
        <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#f2d6ac]">Early Access 0.9.14</span>
        <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#f2d6ac]">Incomplete roster</span>
        <span className="border border-[#b99256]/35 px-3 py-1.5 text-[#f2d6ac]">No current-client tooltip captures</span>
      </div>
      <p className="mt-5 border-l-2 border-[#ff8662] pl-4 text-sm leading-6 text-[#c7d0d5]"><Inline text={warningText} /></p>
      <details className="mt-4 border-t border-white/10 pt-3">
        <summary className="cursor-pointer text-xs font-semibold text-[#f2d6ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Scope and evidence notes</summary>
        <div className="game-wiki-markdown text-sm"><MarkdownContent lines={scopeLines} /></div>
      </details>
    </section>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {artifacts.map((entry) => <WikiEntityCard key={entry.name} href={'#' + slugify(entry.name)} name={entry.name} category="Patch-note confirmed Artifact" summary={entry.confirmation + ' · Latest relevant patch: ' + entry.patch} />)}
    </div>
    <details className="mt-10 border-y border-[#b99256]/25 py-4">
      <summary className="cursor-pointer font-serif text-lg font-semibold text-[#f2d6ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Reference table and evidence notes</summary>
      <div className="game-wiki-markdown pb-6"><MarkdownContent lines={referenceLines} /></div>
    </details>
    <section aria-labelledby="artifact-details" className="mt-12">
      <h2 id="artifact-details" className="scroll-mt-24 font-serif text-3xl font-semibold text-[#fff2df]">Artifact Details</h2>
      <div className="mt-5">
        {artifacts.map((entry) => <WikiEntitySection key={entry.name} id={slugify(entry.name)} name={entry.name} category="Patch-note confirmed Artifact">
          <WikiDataBlock title="Evidence status" rows={[
            { label: 'Official confirmation', value: entry.confirmation },
            { label: 'Latest relevant patch', value: entry.patch },
            { label: 'Current-client tooltip', value: 'Not yet verified' },
            { label: 'Current-client screenshot', value: 'Not available in this repository' },
          ]} />
          <div className="border-t border-white/10 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#dca464]">Full Artifact Notes</h3>
            <div className="game-wiki-markdown text-sm"><MarkdownContent lines={entry.notes} nested /></div>
          </div>
          <a href="#artifact-database" className="inline-block text-xs font-semibold text-[#ff9a7a] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">Back to Artifact Database ↑</a>
        </WikiEntitySection>)}
      </div>
    </section>
    <div className="game-wiki-markdown"><MarkdownContent lines={supportingLines} /></div>
  </>;
}

export default function WanderburgArtifacts() {
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
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={description} publishedAt={publishedAt} modifiedAt={modifiedAt} reviewedAt="2026-09-22T00:00:00.000Z" toc={toc} schema={schema} coverage="3 named Artifacts from patch notes">
    <ArtifactDatabase />
  </GameWikiArticleLayout>;
}
