import type { ReactNode } from 'react';
import Image from 'next/image';

type WikiImage = {
  src: string;
  alt: string;
};

export function WikiEntityCard({
  href,
  name,
  category,
  summary,
  image,
}: {
  href: string;
  name: string;
  category: string;
  summary?: string;
  image?: WikiImage;
}) {
  return (
    <a href={href} className="group flex min-w-0 flex-col border border-[var(--gold-border)]/25 bg-[var(--surface)] transition-colors hover:border-[var(--orange-text)]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">
      {image && (
        <div className="flex h-36 items-center justify-center overflow-hidden border-b border-[var(--neutral-edge)]/10 bg-[var(--wiki-page-bg)] p-2">
          <Image src={image.src} alt="" width={640} height={1032} className="h-full w-full object-contain" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">{category}</p>
        <h4 className="mt-2 font-serif text-lg font-semibold leading-tight text-[var(--heading)]">{name}</h4>
        {summary && <p className="mt-2 text-sm leading-5 text-[var(--secondary)]">{summary}</p>}
        <span className="mt-auto pt-4 text-xs font-semibold text-[var(--orange-hover)]">View details ↓</span>
      </div>
    </a>
  );
}

export function WikiEntitySection({
  id,
  name,
  category,
  image,
  children,
}: {
  id: string;
  name: string;
  category: string;
  image?: WikiImage;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-[var(--gold-border)]/30 py-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 id={`${id}-title`} className="font-serif text-2xl font-semibold text-[var(--heading)] sm:text-3xl">{name}</h2>
        <span className="border border-[var(--gold-border)]/30 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">{category}</span>
      </div>
      <div className={`grid min-w-0 gap-6 ${image ? 'lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]' : ''}`}>
        {image && (
          <figure className="min-w-0 self-start border border-[var(--neutral-edge)]/10 bg-[var(--surface)] p-3">
            <Image src={image.src} alt={image.alt} width={640} height={1032} className="h-auto max-w-full" />
            <figcaption className="mt-3 text-xs leading-5 text-[var(--muted)]">{image.alt}</figcaption>
          </figure>
        )}
        <div className="min-w-0 space-y-5">{children}</div>
      </div>
    </section>
  );
}

export function WikiDataBlock({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: ReactNode }[];
}) {
  if (rows.length === 0) return null;
  return (
    <div className="min-w-0 border-t border-[var(--neutral-edge)]/10 pt-4">
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">{title}</h3>
      <dl className="mt-3 divide-y divide-[var(--neutral-edge)]/10 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="grid min-w-0 gap-1 py-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-3">
            <dt className="text-[var(--muted)]">{row.label}</dt>
            <dd className="min-w-0 break-words text-[var(--heading)]">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
