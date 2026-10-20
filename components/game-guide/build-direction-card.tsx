export type BuildDirectionCardProps = {
  title: string;
  coreIdea: string;
  example: string;
  note?: string;
};

export function BuildDirectionCard({ title, coreIdea, example, note }: BuildDirectionCardProps) {
  return <article className="min-w-0 rounded-xl border border-[var(--neutral-edge)]/15 bg-[var(--neutral-wash)]/[0.025] p-4 sm:p-5">
    <h3 className="font-serif text-lg font-semibold text-[var(--gold-text)]">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-[var(--text)]">{coreIdea}</p>
    <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]"><span className="font-semibold text-[var(--gold-label)]">Example:</span> {example}</p>
    {note && <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{note}</p>}
  </article>;
}
