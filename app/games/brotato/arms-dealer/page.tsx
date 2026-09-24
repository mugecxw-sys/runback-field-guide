import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import armsDealerMarkdown from '../arms-dealer.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/brotato/arms-dealer';
const title = 'Brotato Arms Dealer Build: Shop Strategy, Economy and How to Play';
const description = "Arms Dealer's weapon destruction makes material economy and temporary loadouts central; this Danger 0 partial test failed around Wave 12.";
const publishedAt = '2026-09-17T00:00:00.000Z';
const images = {
  'BRT-ARMS-01.png': { width: 3514, height: 1714, alt: 'Brotato Arms Dealer selected with Pistol on Danger 0' },
  'BRT-ARMS-02.png': { width: 1920, height: 1080, alt: 'Arms Dealer Wave 1 shop showing 0 of 6 weapons after the starting Pistol was destroyed' },
  'BRT-ARMS-03.png': { width: 2041, height: 1147, alt: 'Arms Dealer Wave 5 shop with a full six weapon temporary loadout' },
  'BRT-ARMS-04.png': { width: 2016, height: 1126, alt: 'Arms Dealer Wave 8 shop showing economy stats and temporary weapon choices' },
} as const;

export const metadata: Metadata = {
  title: title + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt },
  twitter: { card: 'summary', title, description },
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

function MarkdownBody() {
  const lines = armsDealerMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line || line.startsWith('# ')) {
      index += 1;
      continue;
    }
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
    const image = line.match(/^!\[([^\]]+)\]\(([^)]+)\)$/);
    if (image) {
      const asset = images[image[2] as keyof typeof images];
      const caption = lines[index + 2]?.match(/^\*(.+)\*$/)?.[1];
      if (asset) blocks.push(<figure key={index} className="mt-6">{/* oxlint-disable-next-line next/no-img-element */}<img src={'/images/brotato/arms-dealer/' + image[2]} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" className="h-auto w-full rounded-xl" />{caption && <figcaption className="mt-3 text-sm leading-6 text-[#aeb7bc]">{caption}</figcaption>}</figure>);
      index += caption ? 3 : 1;
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
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (/^\d+\. /.test(lines[index] ?? '')) {
        items.push(lines[index].replace(/^\d+\. /, ''));
        index += 1;
      }
      blocks.push(<ol key={index} className="mt-5 list-decimal space-y-2 pl-6 leading-7">{items.map((item) => <li key={item}><Inline text={item} /></li>)}</ol>);
      continue;
    }
    blocks.push(<p key={index} className="mt-5 leading-8 text-[#c7d0d5]"><Inline text={line} /></p>);
    index += 1;
  }
  return <>{blocks}</>;
}

export default function ArmsDealerGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: title, description, datePublished: publishedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation: [
          'https://brotato.wiki.spellsandguns.com/Arms_Dealer',
          'https://brotato.wiki.spellsandguns.com/Dangerous_Bunny',
          'https://brotato.wiki.spellsandguns.com/Shop',
          'https://store.steampowered.com/app/1942280/Brotato/',
        ],
        image: Object.keys(images).map((name) => siteUrl + '/images/brotato/arms-dealer/' + name),
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Brotato', item: siteUrl + '/games/brotato' },
          { '@type': 'ListItem', position: 3, name: title, item: siteUrl + href },
        ],
      },
    ],
  };
  return <main className="min-h-screen px-5 py-8 text-[#e1e6e8]"><article className="mx-auto max-w-3xl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/games/brotato">Brotato</a><span>›</span><span aria-current="page">{title}</span></nav>
    <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
    <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={publishedAt}>2026-09-17</time></p>
    <aside className="mt-5 rounded-xl border border-white/15 bg-[#192126] p-5 text-sm leading-7 text-[#c7d0d5]">This Danger 0 melee-leaning run failed around Wave 12. Its snapshots show part of the run, not a full clear or a universal build recipe.</aside>
    <MarkdownBody />
  </article></main>;
}
