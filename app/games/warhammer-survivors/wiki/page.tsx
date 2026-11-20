import type { Metadata } from 'next';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import { GameWikiCategoryCard, GameWikiHero } from '@/components/game-wiki/game-wiki';
import { warhammerWikiCategories, warhammerWikiHref } from '@/lib/game-hub-v1/warhammer-wiki-categories';
import { WikiColumns } from './wiki-columns';
import { LegacyWikiAnchor } from './legacy-wiki-anchor';
import { game } from '../game';

export const metadata: Metadata = {
  title: 'Warhammer Survivors Wiki | RUNBACK',
  description: 'Browse the Warhammer Survivors Wiki by category.',
  alternates: { canonical: 'https://roguelikegame.org/games/warhammer-survivors/wiki' },
};

export default function WarhammerWikiPage() {
  return (
    <HubShell game={game} active="wiki">
      <WikiColumns>
      <GameWikiHero eyebrow="Warhammer Survivors" title="Warhammer Survivors Wiki" description="Find characters, upgrades, equipment, unlocks, and enemies." version={game.version ?? ''} />
      <section className="mt-8" aria-labelledby="warhammer-wiki-categories">
        <h2 id="warhammer-wiki-categories" className="font-serif text-2xl font-semibold text-[var(--heading)]">Categories</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {warhammerWikiCategories.map(({ slug, label, description }) => (
            <GameWikiCategoryCard key={slug} item={{ href: warhammerWikiHref(slug), label, description }} />
          ))}
        </div>
      </section>
      </WikiColumns>
      <LegacyWikiAnchor groups={game.sections.wiki?.groups.map(({ slug, entries }) => ({ slug, entries: entries.map((entry) => entry.slug) })) ?? []} />
    </HubShell>
  );
}
