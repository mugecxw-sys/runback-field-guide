import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HubSectionPage } from '@/components/game-hub-v1/hub-pages';
import {
  getHubSection,
  hubSections,
  isHubResourceSection,
} from '@/lib/game-hub-v1/config';
import { game } from '../game';

type Props = { params: Promise<{ section: string }> };

async function readSection(params: Props['params']) {
  const { section } = await params;
  if (!isHubResourceSection(section)) notFound();
  const content = getHubSection(game, section);
  if (!content) notFound();
  return { section, ...content };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, description } = await readSection(params);
  return {
    title:
      game.name +
      ' ' +
      hubSections[section].label +
      (game.demo ? ' Demo' : '') +
      ' | RUNBACK',
    description,
    alternates: { canonical: `https://roguelikegame.org/games/warhammer-survivors/${section}` },
  };
}

export default async function GameHubSectionRoute({ params }: Props) {
  return <HubSectionPage game={game} {...await readSection(params)} />;
}
