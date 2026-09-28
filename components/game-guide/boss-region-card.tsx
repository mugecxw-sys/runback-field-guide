export type BossRegionCardProps = {
  title: string;
  href: string;
  bossCount: number;
  bossNames: string[];
  description: string;
};

export function BossRegionCard({ title, href, bossCount, bossNames, description }: BossRegionCardProps) {
  return (
    <a href={href} className="group flex min-w-0 flex-col border border-[#b99256]/35 bg-[#17201d] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.15)] transition-colors hover:border-[#ff8662]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662] sm:p-6">
      <div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl font-semibold text-[#fff2df]">{title}</h3><span aria-hidden="true" className="text-xl text-[#dca464] transition-transform group-hover:translate-x-1">→</span></div>
      <p className="mt-3 text-sm leading-6 text-[#c7d0d5]">{description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#dca464]">{bossCount} Bosses</p>
      <ul className="mt-2 flex flex-wrap gap-2 text-sm text-[#e1e6e8]">{bossNames.map((name) => <li key={name} className="border border-white/10 bg-black/15 px-2.5 py-1">{name}</li>)}</ul>
      <span className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-[#ff9a7a]">View {title} Bosses →</span>
    </a>
  );
}
