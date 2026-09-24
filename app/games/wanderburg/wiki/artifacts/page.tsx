import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import artifactsMarkdown from './artifacts.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
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
  'Artifact Verification Status', 'Quick Artifact Reference', 'Repair Wrench', 'Electric Arrow', 'Tinderbox', 'Artifact Rerolls',
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

function MarkdownBody() {
  const lines = artifactsMarkdown.replace(/\r\n/g, '\n').split('\n');
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
    if (line.startsWith('# ')) {
      if (index !== 0) {
        const heading = line.slice(2);
        blocks.push(<h2 id={uniqueHeadingId(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      }
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      const heading = line.slice(3);
      blocks.push(<h2 id={uniqueHeadingId(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      index += 1;
      continue;
    }
    if (line.startsWith('### ')) {
      const heading = line.slice(4);
      blocks.push(<h3 id={uniqueHeadingId(heading)} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</h3>);
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

function ArtifactStatusCards() {
  const cards = [
    { name: 'Repair Wrench', change: '25% healing', current: 'Flat 25 HP healing', verified: ['Official 0.9.14 patch confirmed', 'Current value: 25 HP'], unknown: ['Exact trigger conditions', 'Cooldown and rarity', 'Unlock requirement'] },
    { name: 'Electric Arrow', change: 'Trigger reliability issue', current: 'Triggers more reliably', verified: ['Official 0.9.10 patch confirmed', 'Confirmed as an Artifact'], unknown: ['Exact trigger condition', 'Current damage and rarity', 'Unlock requirement'] },
    { name: 'Tinderbox', change: 'Artifact-specific bug', current: 'Bug fixed in 0.9.14', verified: ['Official 0.9.14 patch confirmed', 'Confirmed as an Artifact'], unknown: ['Full effect and damage', 'Trigger condition and rarity', 'Unlock requirement'] },
  ];
  return <section className="mt-8 border border-[#b99256]/25 bg-[#17201d] p-4 sm:p-5" aria-labelledby="artifact-verification-status"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dca464]">Confirmed patch-note data</p><h2 id="artifact-verification-status" className="mt-2 font-serif text-2xl font-semibold text-[#fff2df]">Artifact Verification Status</h2></div><p className="max-w-md text-sm leading-6 text-[#bdc6c5]">No current-client tooltip captures are available in this repository, so these remain evidence cards rather than reconstructed item descriptions.</p></div><div className="mt-5 grid gap-4">{cards.map((card) => <section key={card.name} className="border-t border-[#b99256]/20 pt-5"><h3 className="font-serif text-xl font-semibold text-[#fff2df]">{card.name}</h3><div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"><div className="border border-white/10 bg-[#101714] p-4 text-sm leading-6 text-[#bdc6c5]"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b99256]">What changed</p><p className="mt-2">{card.change}</p><p className="my-2 text-[#ff9a7a]">↓</p><p className="font-semibold text-[#fff2df]">{card.current}</p></div><div className="border border-[#79c7a0]/25 bg-[#79c7a0]/[0.06] p-4 text-sm leading-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a8d9b8]">What we can verify</p><ul className="mt-2 space-y-1 text-[#c4cfca]">{card.verified.map((item) => <li key={item}>✓ {item}</li>)}</ul></div><div className="border border-[#b99256]/25 bg-[#b99256]/[0.06] p-4 text-sm leading-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f2d6ac]">Not yet verified</p><ul className="mt-2 space-y-1 text-[#c4cfca]">{card.unknown.map((item) => <li key={item}>? {item}</li>)}</ul></div></div></section>)}</div></section>;
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
    <ArtifactStatusCards />
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
