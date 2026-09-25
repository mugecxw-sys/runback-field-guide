import type { ReactNode } from 'react';
import Image from 'next/image';

export function BeginnerGuideQuickStart({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="quick-start" className="mt-8 border border-[#b99256]/30 bg-[#17201d] p-4 sm:p-6">
      <h2 id="quick-start" className="font-serif text-2xl font-semibold text-[#fff2df]">Quick Start</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#c7d0d5] sm:grid-cols-2">
        {items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-[#dca464]">•</span><span>{item}</span></li>)}
      </ul>
    </section>
  );
}

export function BeginnerGuideStep({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return (
    <section aria-labelledby={id} className="mt-9">
      <h2 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">
        <span aria-hidden="true" className="mr-2 text-[#dca464]">{number}</span>{title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function BeginnerGuideRule({ children }: { children: ReactNode }) {
  return <blockquote className="mt-5 border-l-2 border-[#ff8662] bg-[#17201d] px-4 py-3 font-medium leading-7 text-[#fff2df]">{children}</blockquote>;
}

export function BeginnerGuideFigure({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <figure className="my-6 min-w-0">
      <Image src={src} alt={alt} width={width} height={height} loading="lazy" className="h-auto max-w-full rounded-xl border border-white/15" />
      <figcaption className="mt-2 text-sm leading-6 text-[#aeb7bc]">{caption}</figcaption>
    </figure>
  );
}

export function BeginnerGuideChecklist({ title = 'First Run Checklist', items }: { title?: string; items: string[] }) {
  return (
    <section aria-labelledby="first-run-checklist" className="mt-9 border-t border-[#b99256]/25 pt-6">
      <h2 id="first-run-checklist" className="scroll-mt-24 font-serif text-2xl font-semibold text-[#fff2df] sm:text-3xl">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#c7d0d5]">
        {items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-0.5 text-[#dca464]">□</span><span>{item}</span></li>)}
      </ul>
    </section>
  );
}
