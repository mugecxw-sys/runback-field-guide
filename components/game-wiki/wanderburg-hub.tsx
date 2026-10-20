import { siteUrl } from '@/lib/repo-guide-pages';
import { GameWikiCategoryCard, GameWikiHero, GameWikiShell, type GameWikiLink } from './game-wiki';
import { wanderburgWikiConfig } from './wanderburg-config';

const categories: GameWikiLink[] = [
  { href: '/games/wanderburg/beginner-guide', label: 'Beginner Guide', description: 'First-run priorities, Module slots, upgrades and Nitro.', count: '1 guide', backgroundImage: '/images/games/wanderburg/hub-cards/beginner-guide.png' },
  { href: '/games/wanderburg/reference', label: 'Reference', description: 'Core systems, progression and version notes.', count: '1 guide', backgroundImage: '/images/games/wanderburg/hub-cards/reference.png' },
  { href: '/games/wanderburg/builds', label: 'Builds', description: 'Practical build directions and play styles.', count: '6 guides', backgroundImage: '/images/games/wanderburg/hub-cards/builds.png' },
  { href: '/games/wanderburg/vehicle-guide', label: 'Vehicle Guide', description: 'Handling, slot layouts and which Vehicle fits each play style.', count: '1 guide', backgroundImage: '/images/games/wanderburg/hub-cards/vehicles.png' },
  { href: '/games/wanderburg/boss-guide', label: 'Boss Guide', description: 'Short boss dodge tips with screenshots and gameplay clips.', count: '3 regions', backgroundImage: '/images/games/wanderburg/hub-cards/reference.png' },
  { href: '/games/wanderburg/wiki/modules', label: 'Modules', description: 'Module slots, effects and reference values (0.9.14).', count: '20 Modules', backgroundImage: '/images/games/wanderburg/hub-cards/modules.png' },
  { href: '/games/wanderburg/wiki/captains', label: 'Captains', description: 'Current Captain effects and drawbacks.', count: '14 Captains', backgroundImage: '/images/games/wanderburg/hub-cards/captains.png' },
  { href: '/games/wanderburg/wiki/artifacts', label: 'Artifacts', description: 'Starter Artifact effects and reroll rules.', count: '21 Starter Artifacts', backgroundImage: '/images/games/wanderburg/hub-cards/artifacts.png' },
  { href: '/games/wanderburg/wiki/crew', label: 'Crew', description: 'Crew effects and in-game details.', count: '6 Crew', backgroundImage: '/images/games/wanderburg/hub-cards/crew.png' },
  { href: '/games/wanderburg/wiki/vehicles', label: 'Vehicles', description: 'Vehicle mechanics and Module slot layouts.', count: '3 Vehicles', backgroundImage: '/images/games/wanderburg/hub-cards/vehicles.png' },
];

const latest = [
  { href: '/games/wanderburg/builds/arrow-build', title: 'Wanderburg Arrow Build Guide (0.9.14)', date: '2026-10-09' },
  { href: '/games/wanderburg/builds/magic-build', title: 'Wanderburg Magic Build Guide (0.9.14)', date: '2026-10-07' },
  { href: '/games/wanderburg/vehicle-guide', title: 'Wanderburg Vehicle Guide (0.9.14)', date: '2026-09-28' },
  { href: '/games/wanderburg/builds/friendly-units-build', title: 'Wanderburg Friendly Units Build Guide (0.9.14)', date: '2026-09-27' },
  { href: '/games/wanderburg/builds/ram-build', title: 'Wanderburg RAM Build Guide (0.9.14)', date: '2026-09-27' },
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
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-[var(--muted)]"><a href="/">Home</a><span>›</span><span aria-current="page">Wanderburg</span></nav>
      <GameWikiHero eyebrow="RUNBACK GAME WIKI" title="Wanderburg Guides & Wiki" version="Early Access 0.9.14" description="Practical guides and current reference data for the castle-on-wheels roguelike." image={{ src: '/images/games/wanderburg/hub-cards/hero.png', alt: 'Illustration of a moving castle in a misty mountain landscape' }} gameHref={wanderburgWikiConfig.hubHref} />
      <section className="mt-10" aria-labelledby="browse-wanderburg"><div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--gold-border)]/25 pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Guide library</p><h2 id="browse-wanderburg" className="mt-2 font-serif text-3xl font-semibold text-[var(--heading)]">Browse Wanderburg</h2></div><p className="max-w-md text-sm leading-6 text-[var(--muted)]">Version-scoped reference and practical directions, arranged by the questions they answer.</p></div><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{categories.map((item) => <GameWikiCategoryCard key={item.href} item={item} />)}</div></section>
      <section className="mt-12 grid gap-8 border-t border-[var(--gold-border)]/25 pt-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Orientation</p><h2 className="mt-2 font-serif text-3xl font-semibold text-[var(--heading)]">Start here</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><a href="/games/wanderburg/reference" className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-5 hover:border-[var(--orange-text)]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">Systems</p><h3 className="mt-2 font-serif text-xl font-semibold text-[var(--heading)]">Game Reference</h3><p className="mt-3 text-sm leading-6 text-[var(--secondary)]">Core loop, vehicles, modules, captains, bosses and current patch context.</p></a><a href="/games/wanderburg/builds" className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-5 hover:border-[var(--orange-text)]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">Directions</p><h3 className="mt-2 font-serif text-xl font-semibold text-[var(--heading)]">Build Guides</h3><p className="mt-3 text-sm leading-6 text-[var(--secondary)]">Practical build directions for different Modules and play styles.</p></a></div></div>
        <aside className="border-l border-[var(--gold-border)]/25 pl-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">About Wanderburg</p><dl className="mt-4 space-y-3 text-sm"><div className="border-b border-[var(--neutral-edge)]/10 pb-3"><dt className="text-[var(--muted)]">Version</dt><dd className="mt-1 font-medium text-[var(--heading)]">Early Access 0.9.14</dd></div><div className="border-b border-[var(--neutral-edge)]/10 pb-3"><dt className="text-[var(--muted)]">Developer</dt><dd className="mt-1 font-medium text-[var(--heading)]">Randwerk</dd></div><div className="border-b border-[var(--neutral-edge)]/10 pb-3"><dt className="text-[var(--muted)]">Platform</dt><dd className="mt-1 font-medium text-[var(--heading)]">Steam</dd></div><div><dt className="text-[var(--muted)]">Mode</dt><dd className="mt-1 font-medium text-[var(--heading)]">Single-player action roguelike</dd></div></dl></aside>
      </section>
      <section className="mt-12 border-t border-[var(--gold-border)]/25 pt-8" aria-labelledby="latest-wanderburg"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Current library</p><h2 id="latest-wanderburg" className="mt-2 font-serif text-3xl font-semibold text-[var(--heading)]">Latest Wanderburg</h2><div className="mt-4 divide-y divide-[var(--neutral-edge)]/10 border-y border-[var(--neutral-edge)]/10">{latest.map((item) => <a key={item.href} href={item.href} className="flex flex-wrap items-center justify-between gap-3 px-1 py-4 text-sm hover:text-[var(--orange-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]"><span>{item.title}</span><time dateTime={item.date} className="text-xs text-[var(--muted)]">{item.date}</time></a>)}</div></section>
      <footer className="mt-12 flex flex-wrap gap-5 border-t border-[var(--neutral-edge)]/10 py-6 text-sm text-[var(--muted)]"><a href="/about">About</a><a href="/editorial">Editorial policy</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></footer>
    </GameWikiShell>
  );
}
