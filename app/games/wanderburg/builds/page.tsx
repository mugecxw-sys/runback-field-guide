import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import buildsMarkdown from '../builds.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';

const href = '/games/wanderburg/builds';
const h1 = 'Wanderburg Builds Guide: Modules, Captains & Build Directions (0.9.14)';
const title = h1;
const description = 'A Wanderburg builds guide for Early Access 0.9.14, with practical directions for current Modules, Captain effects, allied units, automatic attacks and projectile control.';
const publishedAt = '2026-09-20T00:00:00.000Z';
const toc = [
  'Short Answer',
  'How a Wanderburg Build Comes Together',
  'Build Directions',
  'How to Adapt When the Run Does Not Offer Your First Choice',
  'Related Wanderburg Pages',
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
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]*\)|<br>)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-[#ff9a7a] underline underline-offset-4">{link[1]}</a>;
    if (part === '<br>') return <br key={index} />;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

function cells(line: string) {
  return line.split('|').slice(1, -1).map(cell => cell.trim());
}

function MarkdownBody() {
  const lines = buildsMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line || line.startsWith('# ')) { index += 1; continue; }
    if (line === '---') {
      blocks.push(<hr key={index} className="mt-10 border-white/15" />);
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      const heading = line.slice(3);
      blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
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
      blocks.push(<blockquote key={index} className="mt-5 border-l-2 border-[#ff8662] pl-4 leading-7 text-[#c7d0d5]"><Inline text={line.slice(2)} /></blockquote>);
      index += 1;
      continue;
    }
    if (line.startsWith('|') && /^\|[-| :]+\|$/.test(lines[index + 1] ?? '')) {
      const header = cells(line);
      index += 2;
      const rows: string[][] = [];
      while (lines[index]?.startsWith('|')) { rows.push(cells(lines[index])); index += 1; }
      blocks.push(<div key={index} className="mt-5 overflow-x-auto rounded-xl border border-white/15"><table className="min-w-full border-collapse text-left text-sm leading-6"><thead className="bg-[#192126]"><tr>{header.map(cell => <th key={cell} scope="col" className="whitespace-nowrap border-b border-white/20 px-4 py-3 font-semibold"><Inline text={cell} /></th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-white/10 last:border-0">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="whitespace-nowrap px-4 py-3 text-left font-medium"><Inline text={cell} /></th> : <td key={cellIndex} className="min-w-72 px-4 py-3 text-[#c7d0d5]"><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) { items.push(lines[index].slice(2)); index += 1; }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map(item => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    index += 1;
  }
  return <>{blocks}</>;
}

export default function WanderburgBuilds() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description, datePublished: publishedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
          { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
        ],
      },
    ],
  };
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={description} publishedAt={publishedAt} reviewedAt="2026-09-22T00:00:00.000Z" toc={toc} schema={schema} label="Build directions" coverage="Early Access guidance">
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
