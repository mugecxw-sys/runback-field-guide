import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import wanderburgMarkdown from './wanderburg-complete-reference-guide.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/reference';
const title = 'Wanderburg Complete Reference Guide: Core Loop, Modules, Vehicles, Bosses and Map Data';
const h1 = 'Wanderburg Complete Reference Guide';
const description = 'A data-focused Wanderburg reference for the core loop, controls, upgrades, vehicles, modules, captains, enemies, bosses, maps, tasks, and version-scoped mechanics.';
const publishedAt = '2026-09-16T00:00:00.000Z';
const sources = [
  ['Wanderburg Wiki — Getting Started', 'https://wanderburggame.wiki/guides/getting-started/'],
  ['Wanderburg Wiki — Progression Guide', 'https://wanderburggame.wiki/guides/progression/'],
  ['Wanderburg Wiki — Enemy Database', 'https://wanderburggame.wiki/players/enemies/'],
  ['Steam announcements — Wanderburg', 'https://steamcommunity.com/app/3624140/allnews/'],
] as const;
const toc = [
  'Core Loop and Controls',
  'Upgrades, Difficulty and Run Flow',
  'Vehicles and Chassis',
  'Modules and Unlocks',
  'Captains, Crew and Artifacts',
  'Enemies, Bosses and Non-Consumable Targets',
  'Maps, Stages and Tasks',
  'Mechanics, Bugs and Open Questions',
];
const hiddenSections = new Set(['Page scope and navigation', 'Image Inventory for Upload', 'Editorial note']);

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
  let hiddenLevel: number | null = null;
  let hiddenSubsection = false;
  while (index < lines.length) {
    const line = lines[index];
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    if (h2) {
      hiddenSubsection = false;
      if (hiddenLevel !== null) hiddenLevel = null;
      if (hiddenSections.has(h2[1])) {
        hiddenLevel = 2;
        index += 1;
        continue;
      }
      if (!line || line === '# ' || line.startsWith('# ')) {
        index += 1;
        continue;
      }
      blocks.push(<h2 id={slugify(h2[1])} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{h2[1]}</h2>);
      index += 1;
      continue;
    }
    if (hiddenLevel !== null) {
      index += 1;
      continue;
    }
    if (h3) {
      if (h3[1] === 'Recommended map-page structure') {
        hiddenSubsection = true;
        index += 1;
        continue;
      }
      if (hiddenSubsection) hiddenSubsection = false;
      blocks.push(<h3 id={slugify(h3[1])} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{h3[1]}</h3>);
      index += 1;
      continue;
    }
    if (hiddenSubsection || !line || line.startsWith('# ')) {
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
  return <main className="min-h-screen px-5 py-8 text-[#e1e6e8]"><article className="mx-auto max-w-4xl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/games/wanderburg">Wanderburg</a><span>›</span><span aria-current="page">{h1}</span></nav>
    <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{h1}</h1>
    <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={publishedAt}>2026-09-16</time></p>
    <p className="mt-5 text-lg leading-8 text-[#c7d0d5]">{description}</p>
    <nav aria-label="On this page" className="mt-6 rounded-xl border border-white/15 bg-[#192126] p-5"><p className="font-semibold">On this page</p><ul className="mt-3 grid gap-2 sm:grid-cols-2">{toc.map((item) => <li key={item}><a className="text-[#ff9a7a] underline underline-offset-4" href={'#' + slugify(item)}>{item}</a></li>)}</ul></nav>
    <MarkdownBody />
    <section id="sources" className="mt-10 scroll-mt-24"><h2 className="text-2xl font-semibold">Sources</h2><ul className="mt-4 list-disc space-y-2 pl-6">{sources.map(([label, url]) => <li key={url}><a className="text-[#ff9a7a] underline underline-offset-4" href={url}>{label}</a></li>)}</ul></section>
  </article></main>;
}
