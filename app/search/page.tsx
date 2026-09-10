import type { Metadata } from 'next';
import { GlobalSearch } from '@/components/global-search';
export const metadata: Metadata = {
  title: 'Search Game Guides | RUNBACK',
  description:
    'Search every RUNBACK game, boss, build, item, map, unlock and guide.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/search' },
};
export default function SearchPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-10 text-[#e1e6e8]">
      <h1 className="text-4xl font-semibold">Find your next answer</h1>
      <GlobalSearch />
    </main>
  );
}
