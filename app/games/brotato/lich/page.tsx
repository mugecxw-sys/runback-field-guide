import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import lichMarkdown from '../lich.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/brotato/lich';
const h1 = 'Brotato Lich Guide: Healing Build, Weapons and Stats';
const description = "Learn how Lich's healing-trigger damage works in Brotato, how HP Regen and Life Steal fit the build, why Medical Gun is a simple start, and what RUNBACK's Danger 0 test verified through Wave 8.";
const publishedAt = '2026-09-18T00:00:00.000Z';
const sources = [
  'https://brotato.wiki.spellsandguns.com/Lich',
  'https://brotato.wiki.spellsandguns.com/Medical_Gun',
  'https://brotato.wiki.spellsandguns.com/Life_Steal',
];
const images = {
  'LCH-01.png': { width: 2067, height: 1155, alt: 'Brotato Lich selected with Medical Gun showing healing-trigger traits on Danger 0' },
  'LCH-02.png': { width: 2070, height: 1156, alt: 'Lich Wave 3 shop with Medical Gun II and early healing stats' },
  'LCH-03.png': { width: 2077, height: 1165, alt: 'Lich Wave 6 shop with two Medical Guns and 24 HP Regeneration' },
  'LCH-04.png': { width: 2074, height: 1161, alt: 'Lich Wave 8 shop with mixed four weapon loadout and 36 HP Regeneration' },
} as const;

export const metadata: Metadata = {
  title: h1 + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title: h1, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt },
  twitter: { card: 'summary', title: h1, description },
};

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]*\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-[#ff9a7a] underline underline-offset-4">{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

function cells(line: string) {
  return line.split('|').slice(1, -1).map(cell => cell.trim());
}

function MarkdownBody() {
  const lines = lichMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line || line.startsWith('# ')) { index += 1; continue; }
    if (line.startsWith('## ')) {
      const heading = line.slice(3);
      blocks.push(<h2 id={heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')} key={index} className="mt-10 scroll-mt-24 text-2xl font-semibold">{heading}</h2>);
      index += 1;
      continue;
    }
    if (line.startsWith('### ')) {
      const heading = line.slice(4);
      blocks.push(<h3 id={heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')} key={index} className="mt-8 scroll-mt-24 text-xl font-semibold">{heading}</h3>);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={index} className="mt-5 border-l-2 border-[#ff8662] pl-4 leading-7 text-[#c7d0d5]"><Inline text={line.slice(2)} /></blockquote>);
      index += 1;
      continue;
    }
    const image = line.match(/^!\[[^\]]+\]\(([^)]+)\)$/);
    if (image) {
      const asset = images[image[1] as keyof typeof images];
      const caption = lines[index + 2]?.match(/^\*(.+)\*$/)?.[1];
      if (asset) blocks.push(<figure key={index} className="mt-6">{/* oxlint-disable-next-line next/no-img-element */}<img src={'/images/brotato/lich/' + image[1]} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" className="h-auto w-full rounded-xl" />{caption && <figcaption className="mt-3 text-sm leading-6 text-[#aeb7bc]">{caption}</figcaption>}</figure>);
      index += caption ? 3 : 1;
      continue;
    }
    if (line.startsWith('|') && /^\|[-| ]+\|$/.test(lines[index + 1] ?? '')) {
      const header = cells(line);
      index += 2;
      const rows: string[][] = [];
      while (lines[index]?.startsWith('|')) { rows.push(cells(lines[index])); index += 1; }
      blocks.push(<div key={index} className="mt-5 overflow-x-auto"><table className="min-w-full border-collapse text-left text-sm leading-6"><thead><tr>{header.map(cell => <th key={cell} className="border-b border-white/20 px-3 py-2 font-semibold"><Inline text={cell} /></th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-white/10 px-3 py-2 text-[#c7d0d5]"><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>);
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

export default function LichGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: h1, description, datePublished: publishedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation: sources,
        image: Object.keys(images).map(name => siteUrl + '/images/brotato/lich/' + name),
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Brotato', item: siteUrl + '/games/brotato' },
          { '@type': 'ListItem', position: 3, name: h1, item: siteUrl + href },
        ],
      },
    ],
  };
  return <main className="min-h-screen px-5 py-8 text-[#e1e6e8]"><article className="mx-auto max-w-3xl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/games/brotato">Brotato</a><span>›</span><span aria-current="page">{h1}</span></nav>
    <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{h1}</h1>
    <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={publishedAt}>2026-09-18</time></p>
    <MarkdownBody />
  </article></main>;
}
