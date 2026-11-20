import type { Metadata } from 'next';
import { HubOverview } from '@/components/game-hub-v1/hub-pages';
import { game } from './game';

export const metadata: Metadata = {
  title: game.name + ' Game Hub' + (game.demo ? ' Demo' : '') + ' | RUNBACK',
  description: game.description,
  alternates: { canonical: 'https://roguelikegame.org/games/warhammer-survivors' },
};

export default function GameHubOverviewRoute() {
  return <HubOverview game={game} />;
}
