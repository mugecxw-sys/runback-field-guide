import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import buildsMarkdown from '../builds.md?raw';
import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { TestedBuildCard, type TestedBuildCardProps } from '@/components/game-guide/tested-build-card';
import { BuildDirectionCard, type BuildDirectionCardProps } from '@/components/game-guide/build-direction-card';

const href = '/games/wanderburg/builds';
const h1 = 'Wanderburg Builds (0.9.14)';
const title = h1;
const description = 'Tested Wanderburg builds for Early Access 0.9.14, plus compact build directions for choosing Modules, Captains and play styles.';
const intro = 'Choose a tested build below, or use the build directions further down when the run gives you different Modules. Wanderburg is flexible by design, so treat these as practical setups rather than fixed recipes.';
const publishedAt = '2026-09-20T00:00:00.000Z';
const reviewedAt = '2026-10-10T00:00:00.000Z';
const toc = [
  'Tested Builds',
  'How to Choose a Build',
  'Build Directions',
  'Related Wanderburg Pages',
];
const testedBuilds: TestedBuildCardProps[] = [
  {
    title: 'Cannon Build',
    href: '/games/wanderburg/builds/cannon-build',
    vehicle: 'Tankenburg',
    captain: 'Patchy The Pirate',
    core: 'Cannon + Canoneer Crew',
    playstyle: 'Steady ranged damage',
    notes: ['FrontCannon is a useful natural addition.', 'Cannon Tower is optional — do not force it.'],
    result: 'Tested — Clear',
    cta: 'View Cannon Build →',
  },
  {
    title: 'RAM Build',
    href: '/games/wanderburg/builds/ram-build',
    vehicle: 'Spiderburg',
    captain: 'Duelist',
    core: 'RAM + Bumper',
    playstyle: 'Boost → Hit → Disengage',
    notes: ['Support damage matters while RAM is cooling down.', 'Dash worked well, but is optional.'],
    result: 'Tested — Clear',
    cta: 'View RAM Build →',
  },
  {
    title: 'Friendly Units Build',
    href: '/games/wanderburg/builds/friendly-units-build',
    vehicle: 'Wanderturm',
    captain: 'Empress',
    core: 'Front Barracks + Side Barracks',
    playstyle: 'Drive while the army fights',
    notes: ['Running Shoes helps friendly units keep up.', 'Companion fits naturally, but is optional.'],
    result: 'Tested — Clear',
    cta: 'View Friendly Units Build →',
  },
  {
    title: 'Magic Build',
    href: '/games/wanderburg/builds/magic-build',
    vehicle: 'Wanderturm',
    captain: 'Norbert The Normal',
    core: 'Lightning Mage',
    playstyle: 'Automatic Magic damage while driving',
    notes: ['Prioritize Lightning Mage. Force Mage is support, and other slots can stay flexible.'],
    result: 'Tested',
    cta: 'View Magic Build →',
  },
  {
    title: 'Arrow Build',
    href: '/games/wanderburg/builds/arrow-build',
    vehicle: 'Wanderturm',
    captain: 'Huntress',
    core: 'Archer Tower + Side Ballista + Turret Layer',
    playstyle: 'Mobile ranged pressure with sustained damage',
    notes: ['Setup 2 performed clearly better after Turret Layer joined the core.'],
    result: 'Tested — Clear',
    cta: 'View Arrow Build →',
  },
];
const buildDirections: BuildDirectionCardProps[] = [
  {
    title: 'Multi-target attacks',
    coreIdea: 'Hit several enemies with one attack.',
    example: 'Lightning Mage — 7 base automatic targets.',
    note: 'Huntress trades faster auto attacks for longer ability cooldowns.',
  },
  {
    title: 'Automatic attacks',
    coreIdea: 'Keep dealing damage while you focus on driving.',
    example: 'Arms — 2.5s automatic attack interval.',
    note: 'Useful when you want low-maintenance damage.',
  },
  {
    title: 'Active side attacks',
    coreIdea: 'Use a Module whose active attack matters as much as its auto attack.',
    example: 'Side Ballista.',
    note: 'Better when you are comfortable choosing when to fire the active ability.',
  },
  {
    title: 'Allied-unit direction',
    coreIdea: 'Let friendly units contribute while you drive.',
    example: 'Front Barracks — spawns Biker Knights.',
    note: 'Empress adds 100% more friendly units but reduces speed by 30%.',
  },
  {
    title: 'Projectile control',
    coreIdea: 'Use utility when incoming projectiles are the main problem.',
    example: 'Force Mage — active ability cancels incoming projectiles.',
    note: 'This solves projectile pressure, not every type of threat.',
  },
];

export const metadata: Metadata = {
  title: title + ' | RUNBACK',
  description,
  alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: reviewedAt },
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
    if (line === '<!-- TESTED_BUILDS_CARDS -->') {
      blocks.push(<section key={index} aria-labelledby="tested-builds">
        <h2 id="tested-builds" className="mt-10 scroll-mt-24 text-2xl font-semibold">Tested Builds</h2>
        <p className="mt-5 leading-8 text-[#c7d0d5]">These builds were played in the 0.9.14 client. Results are listed on each card.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testedBuilds.map(build => <TestedBuildCard key={build.href} {...build} />)}
        </div>
      </section>);
      index += 1;
      continue;
    }
    if (line === '<!-- BUILD_DIRECTION_CARDS -->') {
      blocks.push(<section key={index} aria-labelledby="build-directions">
        <h2 id="build-directions" className="mt-10 scroll-mt-24 text-2xl font-semibold">Build Directions</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {buildDirections.map(direction => <BuildDirectionCard key={direction.title} {...direction} />)}
        </div>
      </section>);
      index += 1;
      continue;
    }
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
        '@type': 'Article', headline: h1, description, datePublished: publishedAt, dateModified: reviewedAt,
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
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={intro} publishedAt={publishedAt} reviewedAt={reviewedAt} toc={toc} schema={schema} label="Build library">
    <div className="game-wiki-markdown"><MarkdownBody /></div>
  </GameWikiArticleLayout>;
}
