export function WikiFeedback() {
  const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]';

  return (
    <nav aria-label="Contact and feedback">
      <p className="text-sm font-semibold text-[var(--heading)]">Feedback</p>
      <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">
        Spotted an error, or have a question or suggestion?
      </p>
      <a href="mailto:contact@roguelikegame.org" className={`mt-3 inline-block text-sm font-semibold text-[var(--orange-text)] hover:text-[var(--orange-hover)] ${focus}`}>
        contact@roguelikegame.org
      </a>
      <a href="/contact" className={`mt-2 block text-sm text-[var(--body-soft)] hover:text-[var(--orange-hover)] ${focus}`}>
        More ways to reach us →
      </a>
    </nav>
  );
}
