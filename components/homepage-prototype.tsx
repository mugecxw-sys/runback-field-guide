import Image from 'next/image';
import { ArrowRight, ArrowUpRight, RotateCcw, Search } from 'lucide-react';
import { gameLibraries } from '@/lib/game-catalog';
import styles from './homepage-prototype.module.css';

type HomeGuide = {
  href: string;
  title: string;
  game: string;
  summary: string;
  date: string;
};

// Select only categories already offered by each game library.
const contentTypes: Record<string, string[]> = {
  brotato: ['Characters', 'Builds', 'Weapons'],
  wanderburg: ['Modules', 'Vehicles', 'Bosses'],
  repo: ['Enemies', 'Loot & quota', 'First runs'],
  'cult-of-the-lamb': ['Followers', 'Rituals', 'Base'],
  'deep-rock-galactic': ['Missions', 'Classes', 'Overclocks'],
  'gamble-with-your-friends': ['Items', 'Minigames', 'Strategy'],
  'hades-ii': ['Weapons', 'Boons', 'Bosses'],
  'lost-castle-2': ['Weapons', 'Runes', 'Builds'],
  'risk-of-rain-2': ['Survivors', 'Items', 'Bosses'],
  sephiria: ['Weapons', 'Artifacts', 'Bosses'],
  'yet-another-zombie-survivors': ['Characters', 'Squads', 'Upgrades'],
};

// Homepage-only artwork; covers come from each game's official Steam listing.
function coverFor(gameName: string) {
  const game = gameLibraries.find((entry) => entry.title === gameName);
  return game ? `/images/home-prototype/${game.slug}.webp` : undefined;
}

function RunbackLogo() {
  return <a href="/" className={styles.logo} aria-label="RUNBACK home"><RotateCcw size={27} strokeWidth={2.6} aria-hidden="true" /><span>RUNBACK</span></a>;
}

export function HomepagePrototype({ featured, latest }: { featured: HomeGuide[]; latest: HomeGuide[] }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <RunbackLogo />
          <nav aria-label="Main navigation" className={styles.navigation}>
            <a href="/#game-library">Games</a>
            <a href="/#latest">Latest</a>
            <a href="/search#search-input" className={styles.search} aria-label="Search guides"><Search size={21} strokeWidth={1.8} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-title">
          <Image src="/images/home-prototype/hero.webp" alt="" fill priority sizes="(max-width: 1440px) 100vw, 1320px" className={styles.heroImage} />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}><span /> YOUR NEXT RUN STARTS HERE</p>
            <h1 id="home-title">Roguelike Guides<br />That Keep You Going</h1>
            <p className={styles.heroDescription}>Builds, strategies, and game references<br className={styles.desktopBreak} /> for the best roguelike games.</p>
            <a href="/#game-library" className={styles.primaryButton}>Browse Games <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <section id="game-library" className={styles.section} aria-labelledby="library-title">
          <div className={styles.sectionHeading}><div><p className={styles.kicker}>FIND YOUR GAME</p><h2 id="library-title">Game Library</h2><p className={styles.libraryIntro}>Choose a game and find builds, mechanics, bosses, and reference guides.</p></div></div>
          <div className={styles.gameGrid}>
            {gameLibraries.map((game) => (
              <a href={`/games/${game.slug}`} key={game.slug} className={styles.gameCard}>
                <div className={styles.cover}><Image src={`/images/home-prototype/${game.slug}.webp`} alt={`${game.title} cover`} width={460} height={215} loading="lazy" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" unoptimized /></div>
                <div className={styles.gameInfo}><h3>{game.title}</h3><p>{game.slug === 'wanderburg' ? 'Action roguelike' : game.type}</p><div className={styles.gameMeta}>{contentTypes[game.slug].join(' · ')}</div></div>
              </a>
            ))}
          </div>
        </section>

        <section id="guides" className={styles.section} aria-labelledby="featured-title">
          <div className={styles.sectionHeading}><div><p className={styles.kicker}>A GOOD PLACE TO START</p><h2 id="featured-title">Featured Guides</h2></div><p>Selected guides for your next run.</p></div>
          <div className={styles.featuredGrid}>
            {featured.map((guide) => {
              const cover = coverFor(guide.game);
              return <a href={guide.href} key={guide.href} className={styles.featuredCard}>
                {cover && <div className={styles.featuredImage}><Image src={cover} alt="" width={460} height={215} loading="lazy" unoptimized /></div>}
                <div className={styles.featuredContent}><p className={styles.guideGame}>{guide.game}</p><h3>{guide.title}</h3><p className={styles.summary}>{guide.summary}</p><span className={styles.readGuide}>Read guide <ArrowRight size={16} aria-hidden="true" /></span></div>
              </a>;
            })}
          </div>
        </section>

        <section id="latest" className={`${styles.section} ${styles.latestSection}`} aria-labelledby="latest-title">
          <div className={styles.sectionHeading}><div><p className={styles.kicker}>FRESH FROM THE LIBRARY</p><h2 id="latest-title">Latest Guides</h2></div><p>The newest guides and reference updates.</p></div>
          <div className={styles.latestList}>
            {latest.map((guide) => {
              const cover = coverFor(guide.game);
              return <a href={guide.href} key={guide.href} className={styles.latestRow}>
                {cover && <Image src={cover} alt="" width={460} height={215} loading="lazy" unoptimized className={styles.latestImage} />}
                <div className={styles.latestText}><p className={styles.guideGame}>{guide.game}</p><h3>{guide.title}</h3></div>
                <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
                <ArrowUpRight size={18} aria-hidden="true" className={styles.latestArrow} />
              </a>;
            })}
          </div>
        </section>
      </main>
      <footer className={styles.footer}><div className={styles.footerInner}><div><RunbackLogo /><p>Focused roguelike guides, builds, and reference pages.</p></div><nav aria-label="Footer navigation"><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></nav></div></footer>
    </div>
  );
}
