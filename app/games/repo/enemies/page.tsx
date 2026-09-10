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
