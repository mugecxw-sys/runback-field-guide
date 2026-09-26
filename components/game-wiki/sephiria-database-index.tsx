'use client';

import { useMemo, useState } from 'react';
import { Gem, Search, Shield, Skull, Sparkles, Swords, UserRound, WandSparkles } from 'lucide-react';
import type { SephiriaRecord } from '@/lib/sephiria-wiki-data';

const icons = {
  weapon: Swords,
  upgrade: Sparkles,
  artifact: Gem,
  tablet: Shield,
  costume: UserRound,
  boss: Skull,
  miniboss: Skull,
  grimoire: WandSparkles,
} as const;

function recordIcon(entry: SephiriaRecord) {
  const key = entry.category === 'Weapon' ? 'weapon'
    : entry.category === 'Weapon Upgrade' ? 'upgrade'
      : entry.category === 'Artifact' ? 'artifact'
        : entry.category === 'Tablet' ? 'tablet'
          : entry.category === 'Costume' ? 'costume'
            : entry.category === 'Boss' ? 'boss'
              : entry.category === 'Miniboss' ? 'miniboss'
                : 'grimoire';
  return icons[key];
}

const normalize = (value: string) => value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function SephiriaDatabaseIndex({ title, entries, filterTypes = false }: { title: string; entries: SephiriaRecord[]; filterTypes?: boolean }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const results = useMemo(() => entries.filter((entry) => {
    const haystack = normalize([entry.name, ...entry.aliases, ...entry.tags].join(' '));
    return (!query || haystack.includes(normalize(query))) && (type === 'All' || entry.category === type);
  }), [entries, query, type]);

  return (
    <section aria-label={title} className="mt-7 min-w-0">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div><h2 id={normalize(title).replace(/\s+/g, '-')} className="font-serif text-2xl font-semibold text-[#fff2df]">{title}</h2><p className="mt-1 text-sm text-[#aeb7bc]">{results.length} of {entries.length}</p></div>
        <div className="flex w-full min-w-0 flex-wrap gap-2 sm:w-auto">
          <label className="flex min-w-0 flex-1 items-center gap-2 border border-[#b99256]/30 bg-[#17201d] px-3 sm:w-64 sm:flex-none">
            <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-[#dca464]" />
            <span className="sr-only">Search {title}</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${title.toLowerCase()}`} className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-[#fff2df] outline-none placeholder:text-[#87918f]" />
          </label>
          {filterTypes && <label className="sr-only" htmlFor="sephiria-record-type">Filter by type</label>}
          {filterTypes && <select id="sephiria-record-type" value={type} onChange={(event) => setType(event.target.value)} className="border border-[#b99256]/30 bg-[#17201d] px-3 py-2.5 text-sm text-[#fff2df]"><option>All</option><option>Boss</option><option>Miniboss</option></select>}
        </div>
      </div>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((entry) => {
          const Icon = recordIcon(entry);
          return <article key={entry.id} id={entry.slug} className="min-w-0 border border-[#b99256]/25 bg-[#17201d] p-4">
            <div className="flex min-w-0 items-start gap-3"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#b99256]/25 bg-[#101714] text-[#dca464]"><Icon className="h-4 w-4" /></span><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b99256]">{entry.category}</p><h3 className="mt-1 break-words font-serif text-lg font-semibold leading-tight text-[#fff2df]">{entry.name}</h3></div></div>
            {entry.aliases.length > 0 && <p className="mt-3 break-words text-sm text-[#bdc6c5]">Also called: {entry.aliases.join(', ')}</p>}
            {entry.effectCurrent && <p className="mt-3 break-words text-sm leading-6 text-[#e1e6e8]">{entry.effectCurrent}</p>}
            {entry.patchHistory.length > 0 && <div className="mt-3 border-t border-white/10 pt-3"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#dca464]">Patch History</p><ul className="mt-2 space-y-2">{entry.patchHistory.map((item) => <li key={item.version + item.text} className="text-sm leading-5 text-[#bdc6c5]"><span className="font-semibold text-[#fff2df]">{item.version}:</span> {item.text}</li>)}</ul></div>}
          </article>;
        })}
      </div>
      {results.length === 0 && <p className="border border-white/10 bg-[#17201d] p-5 text-sm text-[#bdc6c5]">No matching entries.</p>}
    </section>
  );
}
