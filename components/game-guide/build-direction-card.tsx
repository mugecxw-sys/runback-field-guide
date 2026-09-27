export type BuildDirectionCardProps = {
  title: string;
  coreIdea: string;
  example: string;
  note?: string;
};

export function BuildDirectionCard({ title, coreIdea, example, note }: BuildDirectionCardProps) {
  return <article className="min-w-0 rounded-xl border border-white/15 bg-white/[0.025] p-4 sm:p-5">
    <h3 className="font-serif text-lg font-semibold text-[#f2d6ac]">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-[#e1e6e8]">{coreIdea}</p>
    <p className="mt-3 text-sm leading-6 text-[#c4cfca]"><span className="font-semibold text-[#dca464]">Example:</span> {example}</p>
    {note && <p className="mt-2 text-sm leading-6 text-[#aeb7bc]">{note}</p>}
  </article>;
}
