import type { Metadata } from 'next';
import { EnemyIndex } from '@/components/enemy-index';
import { repoEnemies } from '@/lib/repo-enemies';
import { siteUrl } from '@/lib/repo-guide-pages';
export const metadata: Metadata = {
  title: 'R.E.P.O. Enemy Field Index | RUNBACK',
  description:
    '29 existing R.E.P.O. enemy dossiers with recognition, first responses and sources.',
  alternates: { canonical: '/games/repo/enemies' },
};
export default function Enemies() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 text-[#e1e6e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'R.E.P.O.',
                item: siteUrl + '/games/repo',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Enemy field index',
                item: siteUrl + '/games/repo/enemies',
              },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> / <a href="/games/repo">R.E.P.O.</a> /{' '}
        <span>Enemy field index</span>
      </nav>
      <h1 className="mt-8 text-4xl font-semibold">
        R.E.P.O. enemy field index
      </h1>
      <p className="mt-4 leading-7 text-[#aeb7bc]">
        29 existing dossiers. Recognition and counters are community-sourced;
        this is not a claim that the roster matches every future patch.
      </p>
      <section className="mt-6 rounded-xl border border-white/10 p-5">
        <h2 className="text-xl font-semibold">Global first response</h2>
        <p className="mt-3 leading-7 text-[#aeb7bc]">
          Call out the threat and its direction, set down loot without blocking
          the retreat lane, then respond to the behavior shown in its dossier.
          Use cover for sight threats, reduce noise when sound matters, create
          space for approaches or grabs, and secure valuables before dealing
          with enemies that move or disrupt them.
        </p>
        <p className="mt-3 text-sm text-[#aeb7bc]">
          Further reading:{' '}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3456545585"
            target="_blank"
            rel="noreferrer"
            className="text-[#ff9a7a] underline"
          >
            Steam Tactical Bestiary
          </a>
          {' · '}
          <a
            href="https://steamcommunity.com/app/3241660/announcements/?l=english"
            target="_blank"
            rel="noreferrer"
            className="text-[#ff9a7a] underline"
          >
            Official R.E.P.O. announcements
          </a>
        </p>
      </section>
      <details className="mt-6 rounded-xl border border-white/10 p-4">
        <summary className="cursor-pointer">
          On this page — choose an enemy
        </summary>
        <nav className="mt-4 flex flex-wrap gap-3">
          {repoEnemies.map((e) => (
            <a key={e.id} href={'#' + e.id} className="text-[#ff9a7a]">
              {e.name}
            </a>
          ))}
        </nav>
      </details>
      <EnemyIndex />
      <a href="/games/repo" className="my-10 block text-[#ff9a7a]">
        All R.E.P.O. guides →
      </a>
    </main>
  );
}
