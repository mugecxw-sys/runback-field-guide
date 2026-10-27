import { GameWikiCategoryCard, GameWikiHero, GameWikiShell } from './game-wiki';
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
const facts = [
  ['Current Version', '1.0.33'], ['Chapters', '6'], ['Weapons', '6'],
  ['Artifacts', 'About 300 at 1.0 launch'], ['Tablets', 'About 70 at 1.0 launch'],
  ['Bosses', '10+'], ['Hard Mode Elements', '18'], ['Online Co-op', 'Up to 4 players'],
];
const gameInfo = [
  ['Developer', 'TEAM HORAY'], ['Publisher', 'TEAM HORAY'],
  ['Early Access', 'April 3, 2025'], ['Full Release', 'July 31, 2026'],
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
  const title = 'Sephiria';
  const description = 'Explore Sephiria weapons, upgrades, Artifacts, Tablets, costumes, grimoires, bosses and game systems.';
  const url = `${siteUrl}/games/sephiria`;
  return <GameWikiShell config={sephiriaWikiConfig} activeHref={url.replace(siteUrl, '')}>
    <Schema title="Sephiria | RUNBACK" url={url} description={description} />
    <GameWikiHero eyebrow="RUNBACK GAME GUIDE" title={title} description={description} version="Full Release · July 31, 2026" gameHref={sephiriaWikiConfig.hubHref} />
    <section className="mt-8" aria-labelledby="sephiria-builds">
      <h2 id="sephiria-builds" className="font-serif text-2xl font-semibold text-[var(--heading)]">Sephiria Builds</h2>
      <div className="mt-4 grid max-w-4xl gap-4 sm:grid-cols-2">{weaponBuildGroups.flatMap((group) => group.builds.map((build) => <GameWikiCategoryCard key={build.href} item={{ href: build.href, label: build.title, count: group.name, description: `${build.weaponRoute.join(' → ')} · ${build.finalBuild.join(' · ')}` }} />))}</div>
    </section>
    <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Sephiria key stats">
      {facts.map(([label, value]) => <div key={label} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">{label}</p><p className="mt-2 break-words text-sm leading-6 text-[var(--heading)]">{value}</p></div>)}
    </section>
    <section className="mt-7 border-t border-[var(--gold-border)]/25 pt-5" aria-labelledby="sephiria-game-info">
      <h2 id="sephiria-game-info" className="text-sm font-semibold text-[var(--secondary)]">Game Info</h2>
      <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 xl:grid-cols-4">
        {gameInfo.map(([label, value]) => <div key={label} className="min-w-0"><dt className="text-[11px] text-[var(--muted)]">{label}</dt><dd className="mt-1 break-words text-sm text-[var(--text)]">{value}</dd></div>)}
      </dl>
    </section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-guides">
      <h2 id="sephiria-guides" className="font-serif text-2xl font-semibold text-[var(--heading)]">Sephiria Guides</h2>
      <div className="mt-4 grid max-w-4xl gap-4 sm:grid-cols-2">
        <GameWikiCategoryCard item={{ href: chapterOneGuide.href, label: 'Chapter 1 Clear Guide', description: 'Permanent progression, building a focused run and four boss fights from a Storm Cloud-focused Chapter 1 clear.', count: 'Beginner guide' }} />
        <GameWikiCategoryCard item={{ href: chapterTwoGuide.href, label: 'Chapter 2 Clear Guide', description: 'Build progression, four boss finish clips, the final build and damage from one recorded clear.', count: 'Clear run guide' }} />
        <GameWikiCategoryCard item={{ href: chapterThreeGuide.href, label: 'Chapter 3 Guide – The Tree', description: 'Complete the Chapter 3 quest, finish the required runs, talk to the three animals, and return to the Tree.', count: 'Quest guide' }} />
        <GameWikiCategoryCard item={{ href: chapterFourGuide.href, label: 'Chapter 4 Guide – Fragment', description: 'Complete the three Destiny Fragment quests, seal the Tree of Qliphoth, and finish the final Chapter 4 run.', count: 'Quest guide' }} />
      </div>
    </section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7">
      <h2 className="font-serif text-2xl font-semibold text-[var(--heading)]">Sephiria Wiki</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--secondary)]">Open the Wiki to browse the current reference sections and game systems.</p>
      <div className="mt-4 max-w-2xl"><GameWikiCategoryCard item={{ href: '/games/sephiria/wiki', label: 'Open the Wiki', description: 'Weapons, items, systems and named encounters.', count: 'Wiki reference' }} /></div>
    </section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-tools">
      <h2 id="sephiria-tools" className="font-serif text-2xl font-semibold text-[var(--heading)]">Tools</h2>
      <div className="mt-4 grid max-w-2xl gap-4 sm:grid-cols-2">{tools.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary, count: 'Interactive planner' }} />)}</div>
    </section>
  </GameWikiShell>;
}

export function SephiriaWikiLanding() {
  const page = sephiriaWikiPages.find((item) => item.group === 'wiki')!;
  const url = `${siteUrl}${page.href}`;
  return <GameWikiShell config={sephiriaWikiConfig} activeHref={page.href}>
    <Schema title="Sephiria Wiki | RUNBACK" url={url} description={page.summary} />
    <GameWikiHero eyebrow="SEPHIRIA REFERENCE" title="Sephiria Wiki" description="Browse the weapon, item, encounter and system indexes." version="Patch 1.0.33" />
    <section className="mt-8" aria-labelledby="sephiria-categories"><h2 id="sephiria-categories" className="font-serif text-2xl font-semibold text-[var(--heading)]">Categories</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-systems"><h2 id="sephiria-systems" className="font-serif text-2xl font-semibold text-[var(--heading)]">Systems</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{systems.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
    <section className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby="sephiria-wiki-tools"><h2 id="sephiria-wiki-tools" className="font-serif text-2xl font-semibold text-[var(--heading)]">Tools</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{tools.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary, count: 'Interactive planner' }} />)}</div></section>
  </GameWikiShell>;
}
