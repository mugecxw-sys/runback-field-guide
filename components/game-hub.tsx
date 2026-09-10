import Link from 'next/link';
import { siteUrl } from '@/lib/repo-guide-pages';
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
    <main className="min-h-screen px-5 py-10 text-[#e1e6e8]">
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
        <nav aria-label="Breadcrumb" className="text-sm text-[#aeb7bc]">
          <Link href="/">Home</Link> / <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">
          {title} guides
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#aeb7bc]">
          {description}
        </p>
        <nav
          aria-label="Guide categories"
          className="mt-6 flex flex-wrap gap-2"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={'#' + s.id}
              className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#ff8662]"
            >
              {s.title}
            </a>
          ))}
        </nav>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="mt-10 scroll-mt-6">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            {s.description && (
              <p className="mt-2 leading-7 text-[#aeb7bc]">{s.description}</p>
            )}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {s.guides.map((g) => (
                <a
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border border-white/10 bg-[#192126] p-5 hover:border-[#ff8662]/60"
                >
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#aeb7bc]">
                    {g.description}
                  </p>
                  <span className="mt-4 block text-sm text-[#ff9a7a]">
                    Read guide →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
        {children}
        <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-[#aeb7bc]">
          <Link href="/about">About</Link>
          <Link href="/editorial">Editorial policy</Link>
          <Link href="/privacy">Privacy</Link>
        </footer>
      </div>
    </main>
  );
}
