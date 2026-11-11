import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import hub from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import { game } from '../../game';
import source from './chaos.internal.json';
import rules from './chaos-rules.internal.json';
import { buildChaos } from './public-chaos';
import { ChaosCards } from './chaos-cards';

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker/wiki/chaos',
  'Chaos, Corruptors & Obelisks · VOID/BREAKER Wiki | RUNBACK',
  'Browse source-confirmed difficulty modifiers, Corruptor effects and Obelisk offers.',
);
export default function ChaosPage() {
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={hub.pageHeader}>
        <p className={hub.eyebrow}>{game.name} · Wiki</p>
        <h1>Chaos, Corruptors &amp; Obelisks</h1>
        <p className={hub.lead}>
          Browse source-confirmed difficulty modifiers, Corruptor effects, and Obelisk offers.
          These sections organize game asset records; their complete in-game relationships are not yet verified.
        </p>
      </header>
      <ChaosCards content={buildChaos(source, rules)} />
      <a className={hub.back} href={hubHref(game.slug, 'wiki')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
      </a>
    </HubShell>
  );
}

