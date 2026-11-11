import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { HubOverview } from '@/components/game-hub-v1/hub-pages';
import { game } from './game';

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker',
  'VOID/BREAKER Game Hub | RUNBACK',
  game.description,
);

export default function GameHubOverviewRoute() {
  return <HubOverview game={game} />;
}
