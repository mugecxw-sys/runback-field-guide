import type { ReactNode } from 'react';
import { GameWikiCategoryCard, GameWikiHero, GameWikiShell, type GameWikiConfig, type GameWikiLink } from './game-wiki';

// Generic, data-driven game hub. Every game's Overview page is a GameHubConfig
// plus a thin page wrapper — no per-game hub component to copy. See
// docs/game-template.md for the full contract and the new-game checklist.

export type GameHubFact = { label: string; value: string };

export type GameHubSection = {
  id: string;
  title: string;
  lead?: string;
  cards: GameWikiLink[];
  cols?: 2 | 3;
  width?: 'full' | 'wide' | 'narrow';
};

export type GameHubConfig = {
  eyebrow: string;
  title: string;
  description: string;
  version: string;
  image?: { src: string; alt: string };
  facts?: GameHubFact[];
  factsTitle?: string;
  sections: GameHubSection[];
};

const widthClass = { full: '', wide: 'max-w-4xl', narrow: 'max-w-2xl' } as const;
const colsClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 xl:grid-cols-3' } as const;

export function GameHub({ config, hub, activeHref, schema }: {
  config: GameWikiConfig;
  hub: GameHubConfig;
  activeHref: string;
  schema: ReactNode;
}) {
  const factsId = `${config.gameName.toLowerCase()}-at-a-glance`;
  return (
    <GameWikiShell config={config} activeHref={activeHref}>
      {schema}
      <GameWikiHero eyebrow={hub.eyebrow} title={hub.title} description={hub.description} version={hub.version} image={hub.image} gameHref={config.hubHref} />
      {hub.facts && hub.facts.length > 0 && (
        <section className="mt-8" aria-labelledby={factsId}>
          <h2 id={factsId} className="font-serif text-2xl font-semibold text-[var(--heading)]">{hub.factsTitle ?? 'At a glance'}</h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {hub.facts.map(({ label, value }) => (
              <div key={label} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">{label}</dt>
                <dd className="mt-2 break-words text-sm leading-6 text-[var(--heading)]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {hub.sections.map((section) => (
        <section key={section.id} className="mt-9 border-t border-[var(--gold-border)]/25 pt-7" aria-labelledby={section.id}>
          <h2 id={section.id} className="font-serif text-2xl font-semibold text-[var(--heading)]">{section.title}</h2>
          {section.lead && <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--secondary)]">{section.lead}</p>}
          <div className={`mt-4 grid gap-4 ${widthClass[section.width ?? 'full']} ${colsClass[section.cols ?? 3]}`}>
            {section.cards.map((item) => <GameWikiCategoryCard key={item.href} item={item} />)}
          </div>
        </section>
      ))}
    </GameWikiShell>
  );
}
