import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiCategoryCard, GameWikiHero, GameWikiShell, type GameWikiLink } from './game-wiki';
import { wanderburgWikiConfig } from './wanderburg-config';

const categories: GameWikiLink[] = [
  { href: '/games/wanderburg/beginner-guide', label: 'Beginner Guide', description: 'First-run priorities, Module slots, upgrades and Nitro.', count: '1 guide' },
  { href: '/games/wanderburg/reference', label: 'Reference', description: 'Core systems, progression and version notes.', count: '1 guide' },
  { href: '/games/wanderburg/builds', label: 'Builds', description: 'Practical build directions and play styles.', count: '2 guides' },
  { href: '/games/wanderburg/wiki/modules', label: 'Modules', description: 'Module slots, effects and reference values (0.9.14).', count: '20 Modules' },
  { href: '/games/wanderburg/wiki/captains', label: 'Captains', description: 'Current Captain effects and drawbacks.', count: '14 Captains' },
  { href: '/games/wanderburg/wiki/artifacts', label: 'Artifacts', description: 'Starter Artifact effects and reroll rules.', count: '21 Starter Artifacts' },
  { href: '/games/wanderburg/wiki/crew', label: 'Crew', description: 'Crew effects and in-game details.', count: '6 Crew' },
  { href: '/games/wanderburg/wiki/vehicles', label: 'Vehicles', description: 'Vehicle mechanics and Module slot layouts.', count: '3 Vehicles' },
];

const latest = [
  { href: '/games/wanderburg/builds/cannon-build', title: 'Wanderburg Cannon Build Guide (0.9.14)', date: '2026-09-26' },
  { href: '/games/wanderburg/wiki/vehicles', title: 'Wanderburg Vehicles Wiki (0.9.14)', date: '2026-09-25' },
  { href: '/games/wanderburg/wiki/crew', title: 'Wanderburg Crew Wiki (0.9.14)', date: '2026-09-25' },
  { href: '/games/wanderburg/wiki/artifacts', title: 'Wanderburg Artifacts Wiki (0.9.14)', date: '2026-09-23' },
  { href: '/games/wanderburg/wiki/modules', title: 'Wanderburg Modules Wiki (0.9.14)', date: '2026-09-22' },
  { href: '/games/wanderburg/wiki/captains', title: 'Wanderburg Captains Wiki (0.9.14)', date: '2026-09-22' },
];

export function WanderburgHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' },
    ],
  };
  return (
    <GameWikiShell config={wanderburgWikiConfig} activeHref="/games/wanderburg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><span aria-current="page">Wanderburg</span></nav>
      <GameWikiHero eyebrow="RUNBACK GAME WIKI" title="Wanderburg Guides & Wiki" version="Early Access 0.9.14" description="Practical guides and verified reference data for the castle-on-wheels roguelike." />
      <section className="mt-10" aria-labelledby="browse-wanderburg"><div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#b99256]/25 pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">Guide library</p><h2 id="browse-wanderburg" className="mt-2 font-serif text-3xl font-semibold text-[#fff2df]">Browse Wanderburg</h2></div><p className="max-w-md text-sm leading-6 text-[#aeb7bc]">Version-scoped reference and practical directions, arranged by the questions they answer.</p></div><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{categories.map((item) => <GameWikiCategoryCard key={item.href} item={item} />)}</div></section>
      <section className="mt-12 grid gap-8 border-t border-[#b99256]/25 pt-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">Orientation</p><h2 className="mt-2 font-serif text-3xl font-semibold text-[#fff2df]">Start here</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><a href="/games/wanderburg/reference" className="border border-[#b99256]/25 bg-[#17201d] p-5 hover:border-[#ff8662]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dca464]">Systems</p><h3 className="mt-2 font-serif text-xl font-semibold text-[#fff2df]">Game Reference</h3><p className="mt-3 text-sm leading-6 text-[#bdc6c5]">Core loop, vehicles, modules, captains, bosses and current patch context.</p></a><a href="/games/wanderburg/builds" className="border border-[#b99256]/25 bg-[#17201d] p-5 hover:border-[#ff8662]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dca464]">Directions</p><h3 className="mt-2 font-serif text-xl font-semibold text-[#fff2df]">Build Guides</h3><p className="mt-3 text-sm leading-6 text-[#bdc6c5]">Evidence-bounded build directions without invented universal rankings.</p></a></div></div>
        <aside className="border-l border-[#b99256]/25 pl-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">About Wanderburg</p><dl className="mt-4 space-y-3 text-sm"><div className="border-b border-white/10 pb-3"><dt className="text-[#aeb7bc]">Version</dt><dd className="mt-1 font-medium text-[#fff2df]">Early Access 0.9.14</dd></div><div className="border-b border-white/10 pb-3"><dt className="text-[#aeb7bc]">Developer</dt><dd className="mt-1 font-medium text-[#fff2df]">Randwerk</dd></div><div className="border-b border-white/10 pb-3"><dt className="text-[#aeb7bc]">Platform</dt><dd className="mt-1 font-medium text-[#fff2df]">Steam</dd></div><div><dt className="text-[#aeb7bc]">Mode</dt><dd className="mt-1 font-medium text-[#fff2df]">Single-player action roguelike</dd></div></dl></aside>
      </section>
      <section className="mt-12 border-t border-[#b99256]/25 pt-8" aria-labelledby="latest-wanderburg"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">Current library</p><h2 id="latest-wanderburg" className="mt-2 font-serif text-3xl font-semibold text-[#fff2df]">Latest Wanderburg</h2><div className="mt-4 divide-y divide-white/10 border-y border-white/10">{latest.map((item) => <a key={item.href} href={item.href} className="flex flex-wrap items-center justify-between gap-3 px-1 py-4 text-sm hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"><span>{item.title}</span><time dateTime={item.date} className="text-xs text-[#aeb7bc]">{item.date}</time></a>)}</div></section>
      <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 py-6 text-sm text-[#aeb7bc]"><a href="/about">About</a><a href="/editorial">Editorial policy</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></footer>
    </GameWikiShell>
  );
}
