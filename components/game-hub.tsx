import { siteUrl } from '@/lib/repo-guide-pages';
import { GameDisclosure } from '@/components/game-disclosure';
export type HubSection = {
  id: string;
  title: string;
  description?: string;
  guides: { href: string; title: string; description: string }[];
};
export function GameHub({
  title,
  href,
  description,
  sections,
  children,
}: {
  title: string;
  href: string;
  description: string;
  sections: HubSection[];
  children?: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-5 py-10 text-[var(--text)]">
      <div className="mx-auto max-w-5xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: siteUrl,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: title,
                  item: siteUrl + href,
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
          <a href="/">Home</a> / <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">
          {title} guides
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
        <GameDisclosure gameHref={href} position="hub" className="mt-3 max-w-3xl" />
        <nav
          aria-label="Guide categories"
          className="sticky top-0 z-20 -mx-5 mt-6 flex gap-2 overflow-x-auto border-y border-[var(--neutral-edge)]/10 bg-[var(--page-bg)]/95 px-5 py-3 backdrop-blur md:static md:mx-0 md:flex-wrap md:overflow-visible md:border-0 md:bg-transparent md:p-0"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={'#' + s.id}
              className="shrink-0 rounded-full border border-[var(--neutral-edge)]/15 px-4 py-2 text-sm hover:border-[var(--orange-text)]"
            >
              {s.title}
            </a>
          ))}
        </nav>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="mt-10 scroll-mt-6">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            {s.description && (
              <p className="mt-2 leading-7 text-[var(--muted)]">{s.description}</p>
            )}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {s.guides.map((g) => (
                <a
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border border-[var(--neutral-edge)]/10 bg-[var(--surface-raised)] p-5 hover:border-[var(--orange-text)]/60"
                >
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {g.description}
                  </p>
                  <span className="mt-4 block text-sm text-[var(--orange-hover)]">
                    Read guide →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
        {children}
        <footer className="mt-12 flex flex-wrap gap-5 border-t border-[var(--neutral-edge)]/10 pt-6 text-sm text-[var(--muted)]">
          <a href="/about">About</a>
          <a href="/editorial">Editorial policy</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </footer>
      </div>
    </main>
  );
}
