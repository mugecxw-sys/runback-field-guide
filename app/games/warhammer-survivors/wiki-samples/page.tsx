import type { Metadata } from 'next';
import { HubSectionPage } from '@/components/game-hub-v1/hub-pages';
import { warhammerSurvivorsStage13SampleGame, warhammerSurvivorsStage13SampleGroups } from '@/lib/game-hub-v1/warhammer-survivors-stage13-samples';

export const metadata: Metadata = {
  title: 'Warhammer Survivors Wiki Samples | RUNBACK',
  description: 'Selected reference entries from Warhammer Survivors.',
  robots: { index: false, follow: false },
};

export default function WarhammerSurvivorsWikiSamplesPage() {
  const wiki = warhammerSurvivorsStage13SampleGame.sections.wiki!;
  return (
    <HubSectionPage
      game={warhammerSurvivorsStage13SampleGame}
      section="wiki"
      groups={warhammerSurvivorsStage13SampleGroups}
      description={wiki.description}
      pageSize={wiki.pageSize}
      compactGrid={wiki.compactGrid}
      showResultCount={wiki.showResultCount}
      heading="Wiki samples / 样本预览"
      breadcrumbLabel="Wiki samples"
      breadcrumbHref="/games/warhammer-survivors/wiki-samples"
      notice={{
        text: 'Selected sample entries. The complete Wiki remains available and unchanged.',
        href: '/games/warhammer-survivors/wiki',
        label: 'Open full Wiki',
      }}
    />
  );
}
