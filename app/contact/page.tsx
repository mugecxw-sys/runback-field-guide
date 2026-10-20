import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact RUNBACK | Game Guide Requests & Feedback',
  description:
    'Contact RUNBACK to suggest a game, request a guide, report an error, share gameplay information, or send other feedback about our roguelike and roguelite guides.',
  alternates: { canonical: 'https://roguelikegame.org/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-5 py-10 text-[var(--page-text)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--orange-text)]"
        >
          ← RUNBACK
        </a>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[var(--quiet)]">
          Contact RUNBACK
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
          Contact RUNBACK
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
          Have a game you want us to cover, found something wrong in one of our
          guides, or have a question we have not answered yet? You can contact
          RUNBACK directly.
        </p>
        <a
          href="mailto:contact@roguelikegame.org"
          className="mt-7 inline-flex rounded-lg border border-[var(--orange-text)]/50 bg-[var(--orange)]/[0.07] px-5 py-3 text-sm font-semibold text-[var(--orange-hover)] transition hover:border-[var(--orange-text)] hover:text-[var(--text-white)]"
        >
          Email RUNBACK
        </a>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <a
            href="mailto:contact@roguelikegame.org"
            className="text-[var(--orange-hover)] underline underline-offset-4 hover:text-[var(--text-white)]"
          >
            contact@roguelikegame.org
          </a>
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[var(--text-soft)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-white)]">
              What can you contact us about?
            </h2>
          </section>
          <section>
            <h3 className="text-base font-semibold text-[var(--text-white)]">Suggest a Game</h3>
            <p className="mt-2">
              Playing a roguelike or roguelite that you think deserves better
              guides? Send us the game name and tell us what kind of information
              players are having trouble finding.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-[var(--text-white)]">Request a Guide</h3>
            <p className="mt-2">
              You can suggest a specific guide you would like to see, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>character guides</li>
              <li>builds</li>
              <li>weapons or items</li>
              <li>bosses and enemies</li>
              <li>beginner guides</li>
              <li>unlocks</li>
              <li>game mechanics</li>
              <li>maps, routes, or locations</li>
              <li>other gameplay questions</li>
            </ul>
            <p className="mt-3">
              Guide requests help us understand what players actually want to
              find. We cannot guarantee that every request will become a guide,
              but we review suggestions when planning new content.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-[var(--text-white)]">Report an Error</h3>
            <p className="mt-2">
              If something in a RUNBACK guide is incorrect, outdated, or unclear,
              please tell us.
            </p>
            <p className="mt-3">When possible, include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>the page URL</li>
              <li>the section that may be wrong</li>
              <li>what you believe the correct information is</li>
              <li>the game version, platform, or difficulty if relevant</li>
            </ul>
            <p className="mt-3">
              Gameplay changes between versions, so this information can be very
              useful.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-[var(--text-white)]">
              Share Gameplay Information
            </h3>
            <p className="mt-2">
              If you have tested a mechanic, discovered an interaction, found a
              useful route, or noticed something that is missing from one of our
              guides, you can send it to us.
            </p>
            <p className="mt-3">
              Please distinguish your own gameplay observations from information
              taken from another website, video, wiki, or community post.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-[var(--text-white)]">Other Requests</h3>
            <p className="mt-2">You can also contact us about:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>website feedback</li>
              <li>accessibility or usability problems</li>
              <li>broken pages or links</li>
              <li>copyright or image concerns</li>
              <li>corrections</li>
              <li>collaboration or other legitimate inquiries</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-white)]">Before you email</h2>
            <p className="mt-2">
              For guide corrections or gameplay questions, including the exact
              RUNBACK page URL makes it much easier for us to understand the
              issue.
            </p>
            <a
              href="mailto:contact@roguelikegame.org"
              className="mt-3 inline-block text-[var(--orange-hover)] underline underline-offset-4 hover:text-[var(--text-white)]"
            >
              contact@roguelikegame.org
            </a>
          </section>
        </div>

        <footer className="mt-12 flex flex-wrap gap-5 border-t border-[var(--neutral-edge)]/[0.08] pt-6 text-xs text-[var(--quiet)]">
          <a href="/about" className="text-[var(--orange-text)] hover:text-[var(--text-white)]">About</a>
          <a href="/editorial" className="text-[var(--orange-text)] hover:text-[var(--text-white)]">
            Editorial policy
          </a>
          <a href="/contact" className="text-[var(--orange-text)] hover:text-[var(--text-white)]">Contact</a>
          <a href="/privacy" className="text-[var(--orange-text)] hover:text-[var(--text-white)]">Privacy</a>
        </footer>
      </div>
    </main>
  );
}
