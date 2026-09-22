import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import buildsMarkdown from '../builds.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/builds';
const title = 'Wanderburg Builds Guide (0.9.14): Modules & Build Directions';
const h1 = 'Wanderburg Builds Guide (0.9.14): What to Build Around Now';
const description = 'A current Wanderburg builds guide for Early Access 0.9.14, covering Electric Mage, Side Arms, Side Ballista, Front Barracks, Force Mage, captains and practical build decisions.';
const publishedAt = '2026-09-20T00:00:00.000Z';
const sources = [
  ['Official Wanderburg Hotfix 0.9.14', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Hotfix 0.9.13', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Hotfix 0.9.10', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Hotfix 0.9.9', 'https://steamcommunity.com/app/3624140/allnews/'],
  ['Official Wanderburg Steam store page', 'https://store.steampowered.com/app/3624140/Wanderburg/'],
] as const;
const toc = [
  'Is There a Best Wanderburg Build?',
  'Current Build Directions Worth Testing',
  'What About Back Turret?',
  'Captains Matter to the Build',
  'Use Rerolls Instead of Forcing a Bad Build',
  'Use Damage Numbers to Test Your Build',
  'A Simple Build Decision Order',
  'What RUNBACK Is Not Calling “Meta” Yet',
  'Current Patch Takeaway',
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
  const citation = [...new Set(sources.map(([, url]) => url))];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description, datePublished: publishedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation,
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
  return <main className="min-h-screen px-5 py-8 text-[#e1e6e8]"><article className="mx-auto max-w-4xl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/games/wanderburg">Wanderburg</a><span>›</span><span aria-current="page">{h1}</span></nav>
    <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{h1}</h1>
    <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={publishedAt}>2026-09-20</time></p>
    <nav aria-label="On this page" className="mt-6 rounded-xl border border-white/15 bg-[#192126] p-5"><p className="font-semibold">On this page</p><ul className="mt-3 grid gap-2 sm:grid-cols-2">{toc.map((item) => <li key={item}><a className="text-[#ff9a7a] underline underline-offset-4" href={'#' + slugify(item)}>{item}</a></li>)}</ul></nav>
    <MarkdownBody />
  </article></main>;
}
