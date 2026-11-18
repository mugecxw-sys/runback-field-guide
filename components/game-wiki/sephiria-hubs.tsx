import { sephiriaCurrentGameVersion } from '@/lib/sephiria-current-version';
import { GameWikiCategoryCard, GameWikiHero, GameWikiShell } from './game-wiki';
import { GameHub, type GameHubConfig, type GameHubFact } from './game-hub';
import { sephiriaWikiConfig } from './sephiria-config';
import { sephiriaWikiPages } from '@/lib/sephiria-wiki-data';
import { siteUrl } from '@/lib/repo-guide-pages';
import { chapterOneGuide } from '@/lib/sephiria-chapter-one-guide';
import { chapterTwoGuide } from '@/lib/sephiria-chapter-two-guide';
import { chapterThreeGuide } from '@/lib/sephiria-chapter-three-guide';
import { chapterFourGuide } from '@/lib/sephiria-chapter-four-guide';
import { listedWeaponBuildGroups as weaponBuildGroups } from '@/lib/sephiria-build-navigation';

const categories = sephiriaWikiPages.filter((page) => page.group === 'category');
const systems = sephiriaWikiPages.filter((page) => page.group === 'system');
const tools = sephiriaWikiPages.filter((page) => page.group === 'tool');
const atAGlance: GameHubFact[] = [
  { label: 'Developer', value: 'TEAM HORAY' },
  { label: 'Current Version', value: sephiriaCurrentGameVersion },
  { label: 'Full Release', value: 'July 31, 2026' },
  { label: 'Early Access', value: 'April 3, 2025' },
  { label: 'Chapters', value: '6' },
  { label: 'Weapons', value: '6' },
  { label: 'Hard Mode Elements', value: '18' },
  { label: 'Online Co-op', value: 'Up to 4 players' },
];

function Schema({ title, url, description }: { title: string; url: string; description: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', name: title, description, url, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: 'RUNBACK', url: siteUrl } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Sephiria', item: `${siteUrl}/games/sephiria` },
        ...(url.endsWith('/wiki') ? [{ '@type': 'ListItem', position: 3, name: 'Wiki', item: url }] : []),
      ] },
    ],
  }).replace(/</g, '\\u003c') }} />;
}

export function SephiriaGameHub() {
  const url = `${siteUrl}/games/sephiria`;
  const description = 'Explore Sephiria weapons, upgrades, Artifacts, Tablets, costumes, grimoires, bosses and game systems.';
  const hub: GameHubConfig = {
    eyebrow: 'RUNBACK GAME GUIDE',
    title: 'Sephiria',
    description,
    version: 'Full Release · July 31, 2026',
    facts: atAGlance,
    sections: [
      {
        id: 'sephiria-database',
        title: 'Database',
        lead: 'Browse the reference indexes by category — weapons, items, artifacts, tablets, costumes and bosses.',
        cards: categories.map((item) => ({ href: item.href, label: item.title, description: item.summary })),
        cols: 3,
      },
      {
        id: 'sephiria-builds',
        title: 'Builds',
        lead: 'Start with how damage adds up, then browse tested builds by weapon.',
        cards: [
          { href: '/games/sephiria/builds/fundamentals', label: 'Build Fundamentals', count: 'Method, not a preset', description: 'The damage chain behind every build — which bonuses multiply, how artifact stats and duplicates stack, and how to read combo thresholds.' },
          ...weaponBuildGroups.filter((group) => group.builds.length > 0).map((group) => ({ href: group.href ?? '/games/sephiria/builds/fundamentals', label: `${group.name} Builds`, count: `${group.builds.length} build${group.builds.length === 1 ? '' : 's'}`, description: group.builds.map((build) => build.title).slice(0, 2).join(' · ') })),
        ],
        cols: 2,
        width: 'wide',
      },
      {
        id: 'sephiria-guides',
        title: 'Guides',
        cards: [
          { href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide', description: 'Permanent progression, building a focused run and four boss fights from a Storm Cloud-focused Chapter 1 clear.', count: 'Beginner guide' },
          { href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide', description: 'Build progression, four boss finish clips, the final build and damage from one recorded clear.', count: 'Clear run guide' },
          { href: chapterThreeGuide.href, label: 'Chapter 3 Guide – The Tree', description: 'Complete the Chapter 3 quest, finish the required runs, talk to the three animals, and return to the Tree.', count: 'Quest guide' },
          { href: chapterFourGuide.href, label: 'Chapter 4 Guide – Fragment', description: 'Complete the three Destiny Fragment quests, seal the Tree of Qliphoth, and finish the final Chapter 4 run.', count: 'Quest guide' },
        ],
        cols: 2,
        width: 'wide',
      },
      {
        id: 'sephiria-tools',
        title: 'Tools',
        cards: tools.map((item) => ({ href: item.href, label: item.title, description: item.summary, count: 'Interactive planner' })),
        cols: 2,
        width: 'narrow',
      },
    ],
  };
  return <GameHub config={sephiriaWikiConfig} hub={hub} activeHref={url.replace(siteUrl, '')} schema={<Schema title="Sephiria | RUNBACK" url={url} description={description} />} />;
}

export function SephiriaWikiLanding() {
  const page = sephiriaWikiPages.find((item) => item.group === 'wiki')!;
  const url = `${siteUrl}${page.href}`;
  return <GameWikiShell config={sephiriaWikiConfig} activeHref={page.href}>
    <Schema title="Sephiria Wiki | RUNBACK" url={url} description={page.summary} />
    <GameWikiHero eyebrow="SEPHIRIA REFERENCE" title="Sephiria Wiki" description="Browse the weapon, item, encounter and system indexes." version={`Game version ${sephiriaCurrentGameVersion}`} />
    <section className="mt-8" aria-labelledby="sephiria-categories"><h2 id="sephiria-categories" className="font-serif text-2xl font-semibold text-[var(--heading)]">Categories</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-systems"><h2 id="sephiria-systems" className="font-serif text-2xl font-semibold text-[var(--heading)]">Systems</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{systems.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-wiki-tools"><h2 id="sephiria-wiki-tools" className="font-serif text-2xl font-semibold text-[var(--heading)]">Tools</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{tools.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary, count: 'Interactive planner' }} />)}</div></section>
  </GameWikiShell>;
}
