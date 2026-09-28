import type { Metadata } from 'next';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { BossGuideRegionPage } from '@/components/game-guide/boss-guide-region-page';
import { getBossGuideRegion } from '@/lib/wanderburg-boss-guides';
import { siteUrl } from '@/lib/repo-guide-pages';

const region = getBossGuideRegion('desert')!;
const publishedAt = '2026-09-29T00:00:00.000Z';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: region.h1, description: region.metadataDescription, datePublished: publishedAt, dateModified: publishedAt, inLanguage: 'en', mainEntityOfPage: siteUrl + region.href, author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' }, publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' }, { '@type': 'ListItem', position: 3, name: 'Boss Guide', item: siteUrl + '/games/wanderburg/boss-guide' }, { '@type': 'ListItem', position: 4, name: 'Desert', item: siteUrl + region.href }] },
  ],
};

export const metadata: Metadata = {
  title: region.metadataTitle, description: region.metadataDescription,
  alternates: { canonical: siteUrl + region.href },
  openGraph: { title: region.metadataTitle, description: region.metadataDescription, type: 'article', url: siteUrl + region.href, publishedTime: publishedAt, modifiedTime: publishedAt },
  twitter: { card: 'summary', title: region.metadataTitle, description: region.metadataDescription },
};

export default function WanderburgDesertBosses() {
  return <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref="/games/wanderburg/boss-guide" title={region.h1} description={region.intro} publishedAt={publishedAt} toc={region.bossNames} schema={schema} label="Boss Guide" labelTone="neutral" footerNote="" breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Wanderburg', href: '/games/wanderburg' }, { label: 'Boss Guide', href: '/games/wanderburg/boss-guide' }, { label: 'Desert' }]}><BossGuideRegionPage region={region} /></GameWikiArticleLayout>;
}
