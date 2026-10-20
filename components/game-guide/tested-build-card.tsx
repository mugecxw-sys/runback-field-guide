export type TestedBuildCardProps = {
  title: string;
  href: string;
  vehicle?: string;
  captain?: string;
  core: string;
  playstyle: string;
  notes?: string[];
  result?: string;
  resultTone?: 'neutral' | 'caution';
  cta: string;
};

export function TestedBuildCard({
  title, href, vehicle, captain, core, playstyle, notes, result, resultTone = 'neutral', cta,
}: TestedBuildCardProps) {
  return <article className="flex min-w-0 flex-col rounded-xl border border-[var(--gold-border)]/30 bg-[var(--surface)] p-5 sm:p-6">
    <h3 className="font-serif text-xl font-semibold text-[var(--heading)]">{title}</h3>
    {(vehicle || captain) && <p className="mt-2 text-sm leading-6 text-[var(--secondary)]">
      {[vehicle, captain].filter(Boolean).join(' · ')}
    </p>}
    <dl className="mt-5 space-y-4">
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold-label)]">Core</dt>
        <dd className="mt-1 break-words text-sm leading-6 text-[var(--cream)]">{core}</dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold-label)]">Playstyle</dt>
        <dd className="mt-1 break-words text-sm leading-6 text-[var(--cream)]">{playstyle}</dd>
      </div>
    </dl>
    {notes?.length ? <ul className="mt-5 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--secondary)]">
      {notes.map(note => <li key={note}>{note}</li>)}
    </ul> : null}
    <div className="mt-auto pt-6">
      {result && <p className="text-sm font-semibold text-[var(--gold-alt)]"><span aria-hidden="true">{resultTone === 'caution' ? '!' : '✓'} </span>{result}</p>}
      <a href={href} className="mt-3 inline-flex max-w-full items-center text-sm font-semibold text-[var(--orange-hover)] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-text)]">{cta}</a>
    </div>
  </article>;
}
