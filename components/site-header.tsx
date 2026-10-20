import { ThemeSwitcher } from './theme-switcher';

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--neutral-edge)]/10 bg-[var(--page-bg)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <a
          href="/"
          className="font-mono text-xl font-bold tracking-widest text-[var(--orange-text)]"
        >
          RUNBACK
        </a>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-4 text-sm text-[var(--nav)]"
        >
          <a href="/#game-library">Games</a>
          <a href="/search">Guides</a>
          <a href="/#latest">Latest</a>
          <a href="/search#search-input">Search</a>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
