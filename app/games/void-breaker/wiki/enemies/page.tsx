import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import hub from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import { game } from '../../game';
import data from './enemies.internal.json';
import { EnemyCards } from './enemy-cards';
import type { BossEntry, EnemyEntry, EnemyFamily } from './enemy-types';

const published = data.records.filter((record) => record.projection !== null);
const priority = ['Grunt', 'Engineer', 'Hound', 'Nanogon', 'Nebula', 'Axiom'];
const families: EnemyFamily[] = published
  .filter((record) => record.category === 'Base enemy')
  .map((record) => ({
    name: record.projection!.display.name,
    base: record.projection!.display as EnemyEntry,
    variants: published
      .filter(
        (variant) =>
          variant.family === record.family && variant.asset !== record.asset,
      )
      .map((variant) => variant.projection!.display as EnemyEntry),
  }))
  .sort((a, b) => {
    const rank = (name: string) =>
      priority.includes(name) ? priority.indexOf(name) : 100;
    return rank(a.name) - rank(b.name) || a.name.localeCompare(b.name);
  });
const bosses = published
  .filter((record) => record.category === 'Boss')
  .map((record) => record.projection!.display as BossEntry)
  .sort((a, b) => a.number - b.number);

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker/wiki/enemies',
  'Enemies & Bosses · VOID/BREAKER Wiki | RUNBACK',
  'Enemy encounter configurations, related variants and boss achievement challenges in VOID/BREAKER.',
);

export default function EnemiesPage() {
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={hub.pageHeader}>
        <p className={hub.eyebrow}>{game.name} · Wiki</p>
        <h1>Enemies &amp; Bosses</h1>
        <p className={hub.lead}>
          Find enemy encounter configurations, known variants and boss
          achievement challenges.
        </p>
        <p className={hub.lead}>
          Encounter information comes from game configurations. Listed zones and
          group examples do not guarantee an encounter on every run.
        </p>
      </header>
      <EnemyCards
        families={families}
        bosses={bosses}
        notes={data.notes.map(({ label, text }) => ({ label, text }))}
      />
      <a className={hub.back} href={hubHref(game.slug, 'wiki')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
      </a>
    </HubShell>
  );
}
