import { voidBreakerReleaseMetadata, voidBreakerWikiIntroduction } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HubSectionPage } from '@/components/game-hub-v1/hub-pages';
import {
  getHubSection,
  hubSections,
  isHubResourceSection,
} from '@/lib/game-hub-v1/config';
import { game } from '../game';
import { WikiCategoryIndex } from '../wiki-category-pages';

type Props = { params: Promise<{ section: string }> };

async function readSection(params: Props['params']) {
  const { section } = await params;
  if (!isHubResourceSection(section)) notFound();
  // V1 opens only the Wiki section; keep demo definitions for future work.
  if (!['wiki'].includes(section)) notFound();
  const content = getHubSection(game, section);
  if (!content) notFound();
  return { section, ...content };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, description } = await readSection(params);
  if (section === 'wiki') {
    return voidBreakerReleaseMetadata('/games/void-breaker/wiki', 'VOID/BREAKER Wiki | RUNBACK', voidBreakerWikiIntroduction);
  }
  return {
    title:
      game.name +
      ' ' +
      hubSections[section].label +
      (game.demo ? ' Demo' : '') +
      ' | RUNBACK',
    description,
  };
}

export default async function GameHubSectionRoute({ params }: Props) {
  const content = await readSection(params);
  if (content.section === 'wiki') return <WikiCategoryIndex />;
  return <HubSectionPage game={game} {...content} />;
}
