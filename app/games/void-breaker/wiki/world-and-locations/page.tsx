import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import hub from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import { game } from '../../game';
import frozenEnemies from '../enemies/enemies.internal.json';
import source from './world.internal.json';
import rules from './world-rules.internal.json';
import { buildWorldContent } from './public-world';
import { WorldCards } from './world-cards';

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker/wiki/world-and-locations',
  'World & Locations · VOID/BREAKER Wiki | RUNBACK',
  'Explore Zone encounter configurations and learn the purpose of map markers in VOID/BREAKER.',
);

export default function WorldPage() {
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={hub.pageHeader}>
        <p className={hub.eyebrow}>{game.name} · Wiki</p>
        <h1>World &amp; Locations</h1>
        <p className={hub.lead}>
          Find Zone enemy encounters and learn what map markers mean.
        </p>
        <p className={hub.lead}>
          Enemy lists and groups come from encounter configurations. They do not
          guarantee an encounter on every run.
        </p>
      </header>
      <WorldCards content={buildWorldContent(source, rules, frozenEnemies)} />
      <a className={hub.back} href={hubHref(game.slug, 'wiki')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
      </a>
    </HubShell>
  );
}
