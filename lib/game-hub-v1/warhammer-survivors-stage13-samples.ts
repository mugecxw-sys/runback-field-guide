import sampleData from '@/data/warhammer-survivors/wiki-stage13-samples.json';
import type { GameHubConfig, HubGroup } from './config';
import { warhammerSurvivorsHub } from './warhammer-survivors';

export const warhammerSurvivorsStage13SampleGroups =
  sampleData.groups as unknown as HubGroup[];

export const warhammerSurvivorsStage13SampleGame: GameHubConfig = {
  ...warhammerSurvivorsHub,
  sections: {
    ...warhammerSurvivorsHub.sections,
    wiki: {
      ...warhammerSurvivorsHub.sections.wiki!,
      description: sampleData.description,
      groups: warhammerSurvivorsStage13SampleGroups,
      pageSize: sampleData.view_count,
      compactGrid: true,
      showResultCount: false,
    },
  },
};
