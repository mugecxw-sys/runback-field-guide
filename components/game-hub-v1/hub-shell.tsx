import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Hammer,
  LibraryBig,
  Swords,
} from 'lucide-react';
import type { ReactNode } from 'react';
import {
  hubHref,
  hubSections,
  visibleHubSections,
  type GameHubConfig,
  type HubSection,
} from '@/lib/game-hub-v1/config';
import styles from './hub.module.css';

export const sectionIcons = {
  overview: Compass,
  guides: BookOpen,
  wiki: LibraryBig,
  builds: Swords,
  tools: Hammer,
};

function HubNavigation({
  game,
  active,
  detail,
}: {
  game: GameHubConfig;
  active: HubSection;
  detail: boolean;
}) {
  return (
    <nav aria-label={game.name + ' navigation'} className={styles.nav}>
      {visibleHubSections(game).map((section) => {
        const Icon = sectionIcons[section];
        return (
          <a
            key={section}
            href={hubHref(game.slug, section)}
            aria-current={
              section === active ? (detail ? 'location' : 'page') : undefined
            }
          >
            <Icon size={17} aria-hidden="true" />
            {hubSections[section].label}
            {section === active && (
              <ArrowRight
                className={styles.navArrow}
                size={14}
                aria-hidden="true"
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}

export function HubShell({
  game,
  active,
  children,
  detail = false,
}: {
  game: GameHubConfig;
  active: HubSection;
  children: ReactNode;
  detail?: boolean;
}) {
  return (
    <main className={styles.shell}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.eyebrow}>Game Hub</p>
          <p className={styles.sideTitle}>{game.name}</p>
          <HubNavigation game={game} active={active} detail={detail} />
        </aside>
        <div className={styles.content}>
          <details className={styles.mobileNav}>
            <summary>
              <span>Game navigation</span>
              <span className={styles.currentSection}>
                {hubSections[active].label}
              </span>
              <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <HubNavigation game={game} active={active} detail={detail} />
          </details>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <a href="/#game-library">Games</a>
            <span aria-hidden="true">/</span>
            {active === 'overview' ? (
              <span aria-current="page">{game.name}</span>
            ) : (
              <>
                <a href={hubHref(game.slug)}>{game.name}</a>
                <span aria-hidden="true">/</span>
                {detail ? (
                  <a href={hubHref(game.slug, active)}>
                    {hubSections[active].label}
                  </a>
                ) : (
                  <span aria-current="page">{hubSections[active].label}</span>
                )}
              </>
            )}
          </nav>
          {children}
        </div>
      </div>
    </main>
  );
}
