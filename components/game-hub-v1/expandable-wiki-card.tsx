import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import type { HubEntry } from '@/lib/game-hub-v1/config';

export function ExpandableWikiCard({ entry, preview, facts }: { entry: HubEntry; preview: ReactNode; facts: ReactNode }) {
  return (
    <details className="group min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)]">
      <summary className="flex h-24 cursor-pointer list-none items-center gap-3 overflow-hidden px-4 py-3 focus-visible:outline focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">{preview}</div>
        <ChevronDown size={18} aria-hidden="true" className="shrink-0 text-[var(--gold-label)] group-open:rotate-180" />
      </summary>
      <section aria-label={entry.title + ' details'} className="max-h-72 space-y-3 overflow-auto border-t border-[var(--gold-border)]/25 px-3 py-2.5 text-sm leading-snug [overflow-wrap:break-word]">
        {entry.summary && <p>{entry.summary}</p>}
        {entry.detail && <p className="whitespace-pre-line">{entry.detail}</p>}
        {facts}
        {entry.facts?.map(({ label, value }) => <p key={label}><strong>{label}</strong> {value}</p>)}
        {entry.detailSections?.map((section) => (
          <section key={section.title}>
            <h4 className="font-semibold text-[var(--heading)]">{section.title}</h4>
            {section.description && <p className="mt-1">{section.description}</p>}
            <ul className="mt-1 divide-y divide-[var(--gold-border)]/20">
              {section.rows.map((row, index) => {
                const values = section.columns.filter(({ key }) => row[key]?.trim());
                if (!values.length) return null;
                return (
                  <li key={index} className="py-1.5">
                    <p className="font-medium text-[var(--heading)]">{values[0].label}: {row[values[0].key]}</p>
                    {values.length > 1 && (
                      <dl className="mt-0.5 space-y-0.5 text-xs text-[var(--body-soft)]">
                        {values.slice(1).map(({ key, label }) => (
                          <div key={key}>
                            <dt className="inline font-semibold">{label}: </dt>
                            <dd className="inline">{row[key]}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        {!!entry.relatedLinks?.length && <ul className="space-y-1">
          {entry.relatedLinks.map(({ href, label, title }, index) => <li key={href + index}><a href={href} className="text-[var(--gold-label)] underline underline-offset-4">{label} · {title}</a></li>)}
        </ul>}
      </section>
    </details>
  );
}
