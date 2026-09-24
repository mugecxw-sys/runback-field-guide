import type { Metadata } from 'next';
import { GameWikiArticleLayout } from '@/components/game-wiki/game-wiki';
import { wanderburgWikiConfig } from '@/components/game-wiki/wanderburg-config';
import { siteUrl } from '@/lib/repo-guide-pages';

const href = '/games/wanderburg/mods';
const title = 'Wanderburg Mods & Tools';
const description = "RUNBACK's home for Wanderburg mods, utilities, installation guides and version compatibility notes.";

export const metadata: Metadata = {
  title: `${title} | RUNBACK`,
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteUrl}${href}` },
};

export default function WanderburgModsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Wanderburg', item: `${siteUrl}/games/wanderburg` },
      { '@type': 'ListItem', position: 3, name: title, item: `${siteUrl}${href}` },
    ],
  };

  return (
    <GameWikiArticleLayout
      config={wanderburgWikiConfig}
      activeHref={href}
      title={title}
      description={description}
      toc={['Mods & Tools']}
      schema={schema}
      label="In Development"
      labelTone="neutral"
      coverage="Mods & Tools"
      footerNote="RUNBACK tools are in development"
    >
      <section id="mods-tools" className="mt-8 border border-[#b99256]/25 bg-[#17201d] p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dca464]">MODS &amp; TOOLS</p>
        <h2 className="mt-3 font-serif text-2xl font-semibold text-[#fff2df]">In Development</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[#bdc6c5]">
          The first RUNBACK Wanderburg tools are currently being developed and tested. Downloads will only be listed here after they have been packaged and verified against the supported game version.
        </p>
      </section>
    </GameWikiArticleLayout>
  );
}
