import Link from 'next/link';
export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#111417]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-widest text-[#ff8662]"
        >
          RUNBACK
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-5 text-sm text-[#d4dce0]"
        >
          <Link href="/#game-library">Games</Link>
          <Link href="/search">Guides</Link>
          <Link href="/#latest">Latest</Link>
          <Link href="/search#search-input">Search</Link>
        </nav>
      </div>
    </header>
  );
}
