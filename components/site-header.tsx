export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#111417]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <a
          href="/"
          className="font-mono text-xl font-bold tracking-widest text-[#ff8662]"
        >
          RUNBACK
        </a>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-5 text-sm text-[#d4dce0]"
        >
          <a href="/#game-library">Games</a>
          <a href="/search">Guides</a>
          <a href="/#latest">Latest</a>
          <a href="/search#search-input">Search</a>
        </nav>
      </div>
    </header>
  );
}
