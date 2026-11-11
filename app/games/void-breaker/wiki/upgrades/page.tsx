import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import hub from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import { game } from '../../game';
import source from './upgrades.internal.json';
import rules from './upgrades-rules.internal.json';
import { buildUpgrades } from './public-upgrades';
import { UpgradeCards } from './upgrade-cards';

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker/wiki/upgrades',
  'Upgrades · VOID/BREAKER Wiki | RUNBACK',
  'Browse upgrade effects, listed tiers and Voidium costs sourced from VOID/BREAKER game assets.',
);

export default function UpgradesPage() {
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={hub.pageHeader}>
        <p className={hub.eyebrow}>{game.name} · Wiki</p>
        <h1>Upgrades</h1>
        <p className={hub.lead}>
          Browse upgrade effects and Voidium costs from game assets.
        </p>
        <p className={hub.lead}>
          Listed tiers follow the exported game data order. Actual availability
          and upgrade behavior have not been fully verified in gameplay.
        </p>
      </header>
      <UpgradeCards upgrades={buildUpgrades(source, rules)} />
      <a className={hub.back} href={hubHref(game.slug, 'wiki')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
      </a>
    </HubShell>
  );
}
