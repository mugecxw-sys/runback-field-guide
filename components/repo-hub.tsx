import {
  GameWikiCategoryCard,
  type GameWikiLink,
} from '@/components/game-wiki/game-wiki';
import { repoGuidePages, siteUrl } from '@/lib/repo-guide-pages';

function guideLink(
  id: string,
  label: string,
  description: string,
): GameWikiLink {
  const guide = repoGuidePages.find((page) => page.id === id && !page.noindex);
  if (!guide) throw new Error(`Missing public R.E.P.O. Hub guide: ${id}`);
  return { href: '/guides/' + guide.slug, label, description };
}

// Curated pillars: new long-tail articles do not automatically become Hub cards.
// Add dedicated, published solo guides here as they become available.
const soloGuides: GameWikiLink[] = [];

const referenceCategories: GameWikiLink[] = [
  {
    href: '/games/repo/enemies',
    label: 'Enemies',
    description:
      'Open the Enemy Index for recognition cues, first responses and individual dossiers.',
  },
  guideLink(
    'P1-11',
    'Items & Tools',
    'Look up the documented Zero Gravity, Roll and Void Staff effects.',
  ),
  guideLink(
    'P1-20',
    'Maps & Routes',
    'Open the Headman Manor guide for route risks and extraction planning.',
  ),
];

const essentialGuides = [
  guideLink(
    'P0-1',
    'First Run Guide',
    'Start with the controls, core loop and first-run checklist.',
  ),
  guideLink(
    'P0-2',
    'Meet Quota',
    'Understand the quota display and plan what to carry out.',
  ),
  guideLink(
    'P0-3',
    'Extraction Guide',
    'What to do after reaching quota, through to leaving in the truck.',
  ),
  guideLink(
    'P0-4',
    'Upgrade & Shop Priority',
    'Decide what to buy and what to save for the next run.',
  ),
  guideLink(
    'CART',
    'C.A.R.T. Guide',
    'Load, move and protect valuables along your route.',
  ),
  guideLink(
    'P2-26',
    'Upgrade Planner',
    'Choose a role and a run problem to compare upgrade priorities.',
  ),
];

const multiplayerGuides = [
  guideLink(
    'P1-17',
    'Player Count & Team Roles',
    'Check the co-op player limit and plan roles for your group.',
  ),
  guideLink(
    'P2-30',
    'Console & Crossplay Status',
    'Read the console availability and crossplay status guide.',
  ),
];

const patchNotes = repoGuidePages.find(
  (page) => page.id === 'P2-24' && !page.noindex,
);

function GuideCard({
  item,
  compact = false,
}: {
  item: GameWikiLink;
  compact?: boolean;
}) {
  return (
    <a
      href={item.href}
      className={`flex min-w-0 flex-col border border-[#b99256]/25 bg-[#17201d] hover:border-[#ff8662]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662] ${compact ? 'p-4' : 'p-5 sm:p-6'}`}
    >
      <h3
        className={`font-serif font-semibold leading-snug text-[#fff2df] ${compact ? 'text-lg' : 'text-2xl'}`}
      >
        {item.label}
      </h3>
      <p
        className={`text-sm leading-6 text-[#c4cfca] ${compact ? 'mb-4 mt-2' : 'mb-6 mt-3'}`}
      >
        {item.description}
      </p>
      <span className="mt-auto text-sm text-[#dca464]">
        Read guide <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

function SectionHeading({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-[#b99256]/25 pb-4">
      <h2 id={id} className="font-serif text-3xl font-semibold text-[#fff2df]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#aeb7bc]">
          {description}
        </p>
      )}
    </div>
  );
}

export function RepoHub() {
  const schema = {
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
    ],
  };

  return (
    <main className="min-h-screen bg-[#101714] px-5 py-8 text-[#e1e6e8] sm:py-10">
      <div className="mx-auto max-w-6xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
        <nav
          aria-label="Breadcrumb"
          className="flex gap-2 text-sm text-[#aeb7bc]"
        >
          <a href="/" className="hover:text-[#ff9a7a]">
            Home
          </a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">R.E.P.O.</span>
        </nav>

        <header className="border-b border-[#b99256]/25 pb-9 pt-10 sm:pb-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">
            RUNBACK FIELD GUIDE
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#fff2df] sm:text-5xl">
            R.E.P.O. Wiki & Guides
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c4cfca]">
            Use the Wiki for enemies, equipment and game mechanics. Dedicated
            Solo Guides are in development for surviving and progressing alone.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="#solo-guides"
              className="text-[#dca464] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
            >
              Solo Guides <span aria-hidden="true">→</span>
            </a>
            <a
              href="#wiki"
              className="text-[#dca464] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
            >
              Browse Wiki <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-5 text-xs leading-6 text-[#aeb7bc] sm:text-sm">
            Current coverage: v0.4.4 · 4 levels · 29 enemies
          </p>
        </header>

        <section aria-labelledby="solo-guides" className="mt-10 sm:mt-12">
          <SectionHeading id="solo-guides" title="Solo Guides" />
          {soloGuides.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {soloGuides.map((item) => (
                <GuideCard key={item.href} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-4 max-w-2xl text-sm leading-6">
              <p className="text-[#c4cfca]">
                Playing R.E.P.O. alone? Dedicated solo guides are being built
                around survival, upgrades, equipment, enemies and long-run
                progression.
              </p>
              <a
                href="#essential-guides"
                className="mt-3 inline-block text-[#dca464] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
              >
                New to the game? Start with Essential Guides{' '}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </section>

        <section
          id="wiki"
          aria-labelledby="wiki-reference"
          className="mt-10 sm:mt-12"
        >
          <SectionHeading
            id="wiki-reference"
            title="Wiki & Reference"
            description="Choose a subject to find the index or reference you need."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {referenceCategories.map((item) => (
              <GameWikiCategoryCard key={item.href} item={item} />
            ))}
          </div>
        </section>

        <section aria-labelledby="essential-guides" className="mt-10 sm:mt-12">
          <SectionHeading
            id="essential-guides"
            title="Essential Guides"
            description="Practical help with carrying, purchases and upgrade decisions."
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {essentialGuides.map((item) => (
              <GuideCard key={item.href} item={item} compact />
            ))}
          </div>
        </section>

        <section aria-labelledby="multiplayer" className="mt-10 sm:mt-12">
          <SectionHeading
            id="multiplayer"
            title="Multiplayer"
            description="Plan for your group and check where you can play."
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {multiplayerGuides.map((item) => (
              <GuideCard key={item.href} item={item} compact />
            ))}
          </div>
        </section>

        {patchNotes && (
          <section
            aria-labelledby="updates"
            className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-y border-[#b99256]/25 py-5 sm:mt-12"
          >
            <div>
              <h2 id="updates" className="text-sm font-semibold text-[#fff2df]">
                Updates
              </h2>
              <p className="mt-1 text-sm text-[#aeb7bc]">
                Latest covered update: v0.4.4
              </p>
            </div>
            <a
              href={'/guides/' + patchNotes.slug}
              className="text-sm text-[#dca464] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
            >
              Read patch notes <span aria-hidden="true">→</span>
            </a>
          </section>
        )}

        <footer className="mt-10 flex flex-wrap gap-5 py-6 text-sm text-[#aeb7bc]">
          <a href="/about">About</a>
          <a href="/editorial">Editorial policy</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </footer>
      </div>
    </main>
  );
}
