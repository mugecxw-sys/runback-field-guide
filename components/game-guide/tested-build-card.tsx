export type TestedBuildCardProps = {
  title: string;
  href: string;
  vehicle?: string;
  captain?: string;
  core: string;
  playstyle: string;
  notes?: string[];
  result?: string;
  cta: string;
};

export function TestedBuildCard({
  title, href, vehicle, captain, core, playstyle, notes, result, cta,
}: TestedBuildCardProps) {
  return <article className="flex min-w-0 flex-col rounded-xl border border-[#b99256]/30 bg-[#17201d] p-5 sm:p-6">
    <h3 className="font-serif text-xl font-semibold text-[#fff2df]">{title}</h3>
    {(vehicle || captain) && <p className="mt-2 text-sm leading-6 text-[#bdc6c5]">
      {[vehicle, captain].filter(Boolean).join(' · ')}
    </p>}
    <dl className="mt-5 space-y-4">
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dca464]">Core</dt>
        <dd className="mt-1 break-words text-sm leading-6 text-[#f0ece3]">{core}</dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dca464]">Playstyle</dt>
        <dd className="mt-1 break-words text-sm leading-6 text-[#f0ece3]">{playstyle}</dd>
      </div>
    </dl>
    {notes?.length ? <ul className="mt-5 list-disc space-y-1 pl-5 text-sm leading-6 text-[#bdc6c5]">
      {notes.map(note => <li key={note}>{note}</li>)}
    </ul> : null}
    <div className="mt-auto pt-6">
      {result && <p className="text-sm font-semibold text-[#e9bd83]">✓ {result}</p>}
      <a href={href} className="mt-3 inline-flex max-w-full items-center text-sm font-semibold text-[#ff9a7a] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8662]">{cta}</a>
    </div>
  </article>;
}
