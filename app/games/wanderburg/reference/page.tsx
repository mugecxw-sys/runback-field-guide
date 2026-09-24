import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import wanderburgMarkdown from './wanderburg-complete-reference-guide.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/reference';
const title = 'Wanderburg Wiki & Reference: Modules, Captains, Bosses & Current Patch';
const h1 = 'Wanderburg Wiki & Reference';
const description = 'Wanderburg wiki and Early Access reference covering modules, captains, artifacts, vehicles, bosses, progression and current patch changes through version 0.9.14.';
const publishedAt = '2026-09-16T00:00:00.000Z';
const sources = [
  ['Official Wanderburg Steam announcements and hotfix notes', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam store page', 'https://store.steampowered.com/app/3624140/Wanderburg/'],
] as const;
const toc = [
  'Wanderburg at a Glance',
  'Current Game Version',
  'Changes from Hotfix 0.9.13',
  'Progression and Rerolls',
  'Modules',
  'Captains',
  'Vehicles',
  'Bosses',
  'Overtime',
  'How RUNBACK Handles Early Access Data',
  'What to Read Next',
  'Sources',
];

export const metadata: Metadata = {
  title: title + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt },
  twitter: { card: 'summary', title, description },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]*\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-[#ff9a7a] underline underline-offset-4">{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

function MarkdownBody() {
  const lines = wanderburgMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    if (h2) {
      if (!line || line === '# ' || line.startsWith('# ')) {
        index += 1;
        continue;
      }
      blocks.push(<h2 id={slugify(h2[1])} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{h2[1]}</h2>);
      index += 1;
      continue;
    }
    if (h3) {
      blocks.push(<h3 id={`${slugify(h3[1])}-${index}`} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{h3[1]}</h3>);
      index += 1;
      continue;
    }
    if (!line || line === '---' || line.startsWith('# ')) {
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={index} className="mt-5 border-l-2 border-[#ff8662] pl-4 leading-7 text-[#c7d0d5]"><Inline text={line.slice(2)} /></blockquote>);
      index += 1;
      continue;
    }
    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (lines[index]?.startsWith('|')) {
        if (!/^\|[-| :]+\|$/.test(lines[index])) rows.push(lines[index].split('|').slice(1, -1).map((cell) => cell.trim()));
        index += 1;
      }
      const header = rows[0] ?? [];
      blocks.push(<div key={index} className="mt-6 max-w-full overflow-x-auto rounded-xl border border-white/15"><table className="min-w-full text-left text-sm"><thead className="bg-[#192126]"><tr>{header.map((cell) => <th key={cell} scope="col" className="whitespace-nowrap p-4">{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map((row, rowIndex) => <tr key={rowIndex} className="border-t border-white/10">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="whitespace-nowrap p-4 font-medium">{cell}</th> : <td key={cellIndex} className="whitespace-nowrap p-4">{cell}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) {
        items.push(lines[index].slice(2));
        index += 1;
      }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    index += 1;
  }
  return <>{blocks}</>;
}

export default function WanderburgReference() {
  const citation = sources.map(([, url]) => url);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: title, description, datePublished: publishedAt,
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
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={description} publishedAt={publishedAt} reviewedAt="2026-09-22T00:00:00.000Z" toc={toc} schema={schema} coverage="Core systems & version notes">
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
