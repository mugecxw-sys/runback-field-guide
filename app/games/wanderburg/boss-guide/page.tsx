import type { Metadata } from 'next';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { BossRegionCard } from '@/components/game-guide/boss-region-card';
import { bossGuideRegionCards } from '@/lib/wanderburg-boss-guides';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/boss-guide';
const h1 = 'Wanderburg Boss Guide (0.9.14)';
const title = 'Wanderburg Boss Guide (0.9.14) | RUNBACK';
const description = 'Short Wanderburg boss guides for Early Access 0.9.14, with practical dodge tips, screenshots and short gameplay videos.';
const intro = 'Pick a region below for short boss-specific dodge and attack tips. Each boss guide uses one screenshot and one short gameplay clip to show the key mechanic.';
const publishedAt = '2026-09-29T00:00:00.000Z';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: h1, description, datePublished: publishedAt, dateModified: publishedAt, inLanguage: 'en', mainEntityOfPage: siteUrl + href, author: { '@type': 'Organization', name: 'RUNBACK', url: siteUrl + '/about' }, publisher: { '@type': 'Organization', '@id': siteUrl + '/#organization', name: 'RUNBACK', url: siteUrl } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: siteUrl + '/games/wanderburg' }, { '@type': 'ListItem', position: 3, name: 'Boss Guide', item: siteUrl + href }] },
  ],
};

export const metadata: Metadata = {
  title, description, alternates: { canonical: siteUrl + href },
  openGraph: { title, description, type: 'article', url: siteUrl + href, publishedTime: publishedAt, modifiedTime: publishedAt },
  twitter: { card: 'summary', title, description },
};

export default function WanderburgBossGuideIndex() {
  return (
    <GameWikiArticleLayout config={wanderburgWikiConfig} activeHref={href} title={h1} description={intro} publishedAt={publishedAt} toc={['Regions']} schema={schema} label="Boss Guide" labelTone="neutral" footerNote="" breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Wanderburg', href: '/games/wanderburg' }, { label: 'Boss Guide' }]}>
      <section id="regions" aria-labelledby="boss-guide-regions" className="mt-7">
        <h2 id="boss-guide-regions" className="sr-only">Regions</h2>
        <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">{bossGuideRegionCards.map((region) => <BossRegionCard key={region.href} {...region} />)}</div>
      </section>
    </GameWikiArticleLayout>
  );
}
