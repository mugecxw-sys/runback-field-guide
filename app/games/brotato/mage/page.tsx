import type { Metadata } from 'next';
import mageMarkdown from './brotato-mage-final.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/brotato/mage';
const title = 'Brotato Mage Taser Build and How to Play Mage';
const description =
  "Mage naturally favors Elemental Damage, and Taser is one available starting weapon that fits that direction. In RUNBACK's partial Danger 0 test, a six-Taser Elemental setup reached Wave 9 but became noticeably fragile.";
const publishedAt = '2026-09-16T00:00:00.000Z';
const images = {
  'BRT-MAGE-01.png': {
    width: 1920,
    height: 1080,
    alt: 'Mage selected with Taser on Danger 0',
  },
  'BRT-MAGE-02.png': {
    width: 3658,
    height: 1795,
    alt: 'Mage beginning the tested Danger 0 Taser run',
  },
  'BRT-MAGE-03.png': {
    width: 3685,
    height: 1858,
    alt: 'Wave 8 stats showing strong Elemental investment but thin defenses',
  },
  'BRT-MAGE-04.png': {
    width: 1920,
    height: 1080,
    alt: 'Mage fighting with multiple Tasers in Wave 9',
  },
} as const;

export const metadata: Metadata = {
  title: title + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: {
    title,
    description,
    type: 'article',
    url: siteUrl + href,
    publishedTime: publishedAt,
  },
  twitter: { card: 'summary', title, description },
};

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^\)]+\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (link) {
      return (
        <a key={index} href={link[2]} className="text-[#ff9a7a] underline underline-offset-4">
          {link[1]}
        </a>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function MarkdownBody() {
  const lines = mageMarkdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line || line.startsWith('# ')) {
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push(<h2 key={index} className="mt-10 text-2xl font-semibold">{line.slice(3)}</h2>);
      index += 1;
      continue;
    }
    if (line.startsWith('### ')) {
      blocks.push(<h3 key={index} className="mt-8 text-xl font-semibold">{line.slice(4)}</h3>);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      blocks.push(
        <section key={index} className="mt-6 rounded-xl border border-[#ff7043]/30 bg-[#ff7043]/[0.07] p-5 leading-7">
          <Inline text={line.slice(2)} />
        </section>,
      );
      index += 1;
      continue;
    }
    const image = line.match(/^!\[([^\]]+)\]\(([^\)]+)\)$/);
    if (image) {
      const asset = images[image[2] as keyof typeof images];
      const caption = lines[index + 2]?.match(/^\*(.+)\*$/)?.[1];
      if (asset) {
        blocks.push(
          <figure key={index} className="mt-6">
            <img src={'/images/brotato/mage/' + image[2]} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" className="h-auto w-full rounded-xl" />
            {caption && <figcaption className="mt-3 text-sm leading-6 text-[#aeb7bc]">{caption}</figcaption>}
          </figure>,
        );
      }
      index += caption ? 3 : 1;
      continue;
    }
    if (line.startsWith('| ')) {
      const rows: string[][] = [];
      while (lines[index]?.startsWith('|')) {
        if (!/^\|[-| ]+\|$/.test(lines[index])) {
          rows.push(lines[index].split('|').slice(1, -1).map((cell) => cell.trim()));
        }
        index += 1;
      }
      const header = rows[0] ?? [];
      const body = rows.slice(1);
      blocks.push(
        <div key={index} className="mt-6 overflow-x-auto rounded-xl border border-white/15">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#192126]"><tr>{header.map((cell) => <th key={cell} scope="col" className="p-4">{cell}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-white/10">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="p-4 font-medium">{cell}</th> : <td key={cellIndex} className="p-4">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
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

export default function MageGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: title, description, datePublished: publishedAt,
        inLanguage: 'en', mainEntityOfPage: siteUrl + href,
        author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' },
        publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl },
        citation: ['https://store.steampowered.com/app/1942280/Brotato/'],
        image: Object.keys(images).map((name) => siteUrl + '/images/brotato/mage/' + name),
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
  return (
    <main className="min-h-screen px-5 py-8 text-[#e1e6e8]">
      <article className="mx-auto max-w-3xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/games/brotato">Brotato</a><span>›</span><span aria-current="page">{title}</span></nav>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 text-xs text-[#aeb7bc]">By RUNBACK · Published <time dateTime={publishedAt}>2026-09-16</time></p>
        <aside className="mt-5 rounded-xl border border-white/15 bg-[#192126] p-5 text-sm leading-7 text-[#c7d0d5]">
          <strong>MANUAL_VERIFIED</strong> marks the limited Danger 0 run observations. <strong>SOURCE_VERIFIED</strong> marks Mage and Taser mechanics stated in the supplied Markdown; the two are not treated as the same evidence.
        </aside>
        <MarkdownBody />
      </article>
    </main>
  );
}
