import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import captainsMarkdown from './captains.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
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
  'Current Captain List', 'Current Names vs Patch-Note Names', 'Patchy The Pirate', 'Dieter The Drunk', 'Duelist', 'Empress',
  'Huntress', 'Kapitalistus Maximus', 'Lumberjack', 'Norbert The Normal', 'Pyromaniac', 'Racer Ruth', 'Sire Jonah',
  'Tankbert', 'The Count', 'Time Witch', 'Captain Balance History', 'How to Read Captain Effects', 'Captains and Builds',
  'Data Confidence', 'Current Coverage', 'Sources',
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

function MarkdownBody() {
  const lines = captainsMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let pendingCaptainImage: string | null = null;
  const imageFigure = (file: string, alt: string, caption: string, key: string) => (
    <figure key={key} className="my-6 max-w-[648px]">
      <Image src={'/images/games/wanderburg/captains/' + file + '.png'} alt={alt} width={648} height={1024} className="h-auto max-w-full rounded-xl border border-white/15" />
      <figcaption className="mt-2 text-sm text-[#aeb7bc]">{caption}</figcaption>
    </figure>
  );
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line) { index += 1; continue; }
    if (line === '---') { blocks.push(<hr key={index} className="mt-10 border-white/15" />); index += 1; continue; }
    if (line.startsWith('# ')) {
      const heading = line.slice(2);
      if (index !== 0) {
        blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      }
      pendingCaptainImage = captainImages[heading] ? heading : null;
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      const heading = line.slice(3);
      blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      pendingCaptainImage = captainImages[heading] ? heading : null;
      index += 1;
      continue;
    }
    if (line.startsWith('### ')) {
      const heading = line.slice(4);
      blocks.push(<h3 id={`${slugify(heading)}-${index}`} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</h3>);
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
      if (header.includes('Positive effect')) blocks.push(imageFigure('captains-list-0.9.14', 'Wanderburg 0.9.14 Captain selection showing 14 Captains', 'All 14 Captains visible in the Wanderburg Early Access 0.9.14 client used for this reference.', 'captains-list'));
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) { items.push(lines[index].slice(2)); index += 1; }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    if (pendingCaptainImage) {
      const heading = pendingCaptainImage;
      blocks.push(imageFigure(captainImages[heading], 'Wanderburg 0.9.14 ' + heading + ' Captain tooltip', heading + ' in the Wanderburg Early Access 0.9.14 client.', 'captain-' + slugify(heading)));
      pendingCaptainImage = null;
    }
    index += 1;
  }
  return <>{blocks}</>;
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
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={description} publishedAt={publishedAt} modifiedAt={modifiedAt} reviewedAt="2026-09-23T00:00:00.000Z" toc={toc} schema={schema} coverage="14 current-client Captains">
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
