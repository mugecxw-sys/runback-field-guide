import { GameWikiCategoryCard, GameWikiHero, GameWikiShell } from './game-wiki';
import { sephiriaWikiConfig } from './sephiria-config';
import { sephiriaWikiPages } from '@/lib/sephiria-wiki-data';
import { siteUrl } from '@/lib/repo-guide-pages';

const categories = sephiriaWikiPages.filter((page) => page.group === 'category');
const systems = sephiriaWikiPages.filter((page) => page.group === 'system');
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
    <GameWikiHero eyebrow="RUNBACK GAME GUIDE" title={title} description={description} version="Full Release · July 31, 2026" />
    <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Sephiria key stats">
      {facts.map(([label, value]) => <div key={label} className="min-w-0 border border-[#b99256]/25 bg-[#17201d] p-4"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#b99256]">{label}</p><p className="mt-2 break-words text-sm leading-6 text-[#fff2df]">{value}</p></div>)}
    </section>
    <section className="mt-7 border-t border-[#b99256]/25 pt-5" aria-labelledby="sephiria-game-info">
      <h2 id="sephiria-game-info" className="text-sm font-semibold text-[#bdc6c5]">Game Info</h2>
      <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 xl:grid-cols-4">
        {gameInfo.map(([label, value]) => <div key={label} className="min-w-0"><dt className="text-[11px] text-[#aeb7bc]">{label}</dt><dd className="mt-1 break-words text-sm text-[#e1e6e8]">{value}</dd></div>)}
      </dl>
    </section>
    <section className="mt-9 border-t border-[#b99256]/25 pt-7">
      <h2 className="font-serif text-2xl font-semibold text-[#fff2df]">Sephiria Wiki</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-[#bdc6c5]">Open the Wiki to browse the current reference sections and game systems.</p>
      <div className="mt-4 max-w-2xl"><GameWikiCategoryCard item={{ href: '/games/sephiria/wiki', label: 'Open the Wiki', description: 'Weapons, items, systems and named encounters.', count: 'Wiki reference' }} /></div>
    </section>
  </GameWikiShell>;
}

export function SephiriaWikiLanding() {
  const page = sephiriaWikiPages.find((item) => item.group === 'wiki')!;
  const url = `${siteUrl}${page.href}`;
  return <GameWikiShell config={sephiriaWikiConfig} activeHref={page.href}>
    <Schema title="Sephiria Wiki | RUNBACK" url={url} description={page.summary} />
    <GameWikiHero eyebrow="SEPHIRIA REFERENCE" title="Sephiria Wiki" description="Browse the weapon, item, encounter and system indexes." version="Patch 1.0.33" />
    <section className="mt-8" aria-labelledby="sephiria-categories"><h2 id="sephiria-categories" className="font-serif text-2xl font-semibold text-[#fff2df]">Categories</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
    <section className="mt-9 border-t border-[#b99256]/25 pt-7" aria-labelledby="sephiria-systems"><h2 id="sephiria-systems" className="font-serif text-2xl font-semibold text-[#fff2df]">Systems</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{systems.map((item) => <GameWikiCategoryCard key={item.href} item={{ href: item.href, label: item.title, description: item.summary }} />)}</div></section>
  </GameWikiShell>;
}
