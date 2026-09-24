import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import modulesMarkdown from './modules.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
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
  ['PlayerTome Wanderburg Module database', 'https://wanderburg.playertome.com/database/modules/'],
] as const;
const toc = [
  'Current Module List', 'Patch-Note Names vs Current Client Names', 'Base Module Values', 'Important Data Notes',
  'Top-Slot Modules', 'Archer Tower', 'Cannon Tower', 'Fire Mage', 'Lightning Mage', 'Top Mortar',
  'Side-Slot Modules', 'Arms', 'Cannon', 'Side Ballista', 'Side Barracks', 'Side Flamethrower',
  'Front-Slot Modules', 'Force Mage', 'Front Barracks', 'FrontCannon', 'RAM', 'Teleporter',
  'Back-Slot Modules', 'Catapult', 'Companion', 'Dash', 'Mine Layer', 'Turret Layer',
  'Module Rerolls', 'Data Confidence', 'Current Coverage', 'Sources',
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

function MarkdownBody() {
  const lines = modulesMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let pendingModuleImage: string | null = null;
  const imageFigure = (file: string, alt: string, caption: string, key: string) => (
    <figure key={key} className="my-6 max-w-[640px]">
      <Image src={'/images/games/wanderburg/modules/' + file + '.png'} alt={alt} width={640} height={1032} className="h-auto max-w-full rounded-xl border border-white/15" />
      <figcaption className="mt-2 text-sm text-[#aeb7bc]">{caption}</figcaption>
    </figure>
  );
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line) { index += 1; continue; }
    if (line === '---') { blocks.push(<hr key={index} className="mt-10 border-white/15" />); index += 1; continue; }
    if (line.startsWith('# ')) {
      if (index !== 0) {
        const heading = line.slice(2);
        blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      }
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      const heading = line.slice(3);
      blocks.push(<h2 id={slugify(heading)} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      pendingModuleImage = moduleImages[heading] ? heading : null;
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
      if (header.includes('Current-client role')) blocks.push(imageFigure('modules-list-0.9.14', 'Wanderburg 0.9.14 module selection showing 20 modules', 'All 20 Modules visible in the Wanderburg Early Access 0.9.14 client used for this reference.', 'modules-list'));
      continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.startsWith('- ')) { items.push(lines[index].slice(2)); index += 1; }
      blocks.push(<ul key={index} className="mt-5 list-disc space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    if (pendingModuleImage) {
      const heading = pendingModuleImage;
      blocks.push(imageFigure(moduleImages[heading], 'Wanderburg 0.9.14 ' + heading + ' module tooltip', heading + ' in the Wanderburg Early Access 0.9.14 client.', 'module-' + slugify(heading)));
      pendingModuleImage = null;
    }
    index += 1;
  }
  return <>{blocks}</>;
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
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={description} publishedAt={publishedAt} modifiedAt={modifiedAt} reviewedAt="2026-09-23T00:00:00.000Z" toc={toc} schema={schema} coverage="20 current-client Modules">
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
