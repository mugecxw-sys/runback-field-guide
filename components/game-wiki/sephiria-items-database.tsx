'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';

type DisplayLevel = { level: number; lines: string[] };
type PublicItem = {
  id: number;
  slug: string;
  displayName: string;
  itemKind: string;
  rarity: string;
  isBondItem: boolean;
  bondLabel: string | null;
  categories: string[];
  displayDescription: string | null;
  displayEffectLines: string[];
  verifiedDisplayLevelLines: DisplayLevel[];
  price: number | null;
  sapphirePrice: number | null;
  image: { src: string; width: number; height: number };
};
type ItemsData = {
  version: string;
  counts: { items: number; categories: number; categoryMemberships: number; bondItems: number; rarities: Record<string, number>; kinds: Record<string, number> };
  categories: string[];
  items: PublicItem[];
};

const kinds = ['Artifact', 'Tablet', 'Consumable', 'Item'];
const rarities = ['Common', 'Advanced', 'Rare', 'Legendary', 'Eternal'];
type ItemsSnapshot = { data: ItemsData | null; loadError: boolean };
const emptyItemsSnapshot: ItemsSnapshot = { data: null, loadError: false };
let itemsSnapshot = emptyItemsSnapshot;
let itemsRequest: Promise<void> | null = null;
const itemsListeners = new Set<() => void>();
function subscribeItems(listener: () => void) { itemsListeners.add(listener); return () => itemsListeners.delete(listener); }
function subscribeLocation(listener: () => void) { window.addEventListener('popstate', listener); return () => window.removeEventListener('popstate', listener); }
function getLocationSearch() { return window.location.search; }
function notifyItems() { itemsListeners.forEach((listener) => listener()); }
function loadItems() {
  if (itemsRequest) return;
  itemsRequest = fetch('/data/sephiria-items-1.0.33.json')
    .then((response) => { if (!response.ok) throw new Error('Items database request failed'); return response.json() as Promise<ItemsData>; })
    .then((data) => { itemsSnapshot = { data, loadError: false }; notifyItems(); })
    .catch(() => { itemsSnapshot = { data: null, loadError: true }; notifyItems(); });
}

const rarityStyles: Record<string, string> = {
  Common: 'border-stone-400/30 bg-stone-400/10 text-[var(--secondary)]',
  Advanced: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
  Rare: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
  Legendary: 'border-amber-400/35 bg-amber-400/10 text-amber-200',
  Eternal: 'border-rose-400/35 bg-rose-400/10 text-rose-200',
};

function ItemCard({ item, activeCategory, onCategoryClick }: { item: PublicItem; activeCategory: string; onCategoryClick: (category: string) => void }) {
  return (
    <article id={item.slug} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:p-5">
      <div className="flex min-w-0 items-start gap-3">
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] p-1">
          <Image src={item.image.src} alt={item.displayName + ' icon'} width={item.image.width} height={item.image.height} unoptimized loading="lazy" decoding="async" sizes="56px" className="h-full w-full object-contain [image-rendering:pixelated]" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="break-words font-serif text-lg font-semibold leading-6 text-[var(--heading)]">{item.displayName}</h3>
          <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
            <span className="border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-2 py-1 text-[var(--secondary)]">{item.itemKind}</span>
            <span className={'border px-2 py-1 ' + (rarityStyles[item.rarity] ?? 'border-[var(--gold-border)]/25 text-[var(--secondary)]')}>{item.rarity}</span>
            {item.isBondItem && <span className="border border-[var(--orange-text)]/30 bg-[var(--orange-text)]/10 px-2 py-1 font-semibold text-[var(--orange-hover)]">{item.bondLabel ?? 'Bond'}</span>}
          </div>
        </div>
      </div>
      {item.categories.length > 0 && <ul aria-label="Categories" className="mt-3 flex min-w-0 flex-wrap gap-1.5">{item.categories.map((category) => <li key={category}><button type="button" aria-pressed={activeCategory === category} onClick={() => onCategoryClick(category)} className={"max-w-full break-words border px-2 py-1 text-left text-[11px] leading-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)] " + (activeCategory === category ? "border-[var(--orange-text)]/50 bg-[var(--orange-text)]/10 text-[var(--orange-hover)]" : "border-[var(--gold-border)]/20 bg-[var(--wiki-page-bg)] text-[var(--gold-text)] hover:bg-[var(--neutral-wash)]/[0.05]")}>{category}</button></li>)}</ul> }
      {item.displayDescription && <p className="mt-3 break-words text-sm leading-6 text-[var(--secondary)]">{item.displayDescription}</p>}
      {item.displayEffectLines.length > 0 && <div className="mt-3 space-y-1 border-t border-[var(--neutral-edge)]/10 pt-3 text-sm leading-6 text-[var(--text)]">
        {item.displayEffectLines.map((line, index) => <p key={index} className="break-words">{index === 0 && <span className="font-semibold text-[var(--heading)]">Effect: </span>}{line}</p>)}
      </div>}
      {item.verifiedDisplayLevelLines.length > 0 && <details className="mt-3 border-t border-[var(--neutral-edge)]/10 pt-3 text-sm">
        <summary className="cursor-pointer font-semibold text-[var(--gold-label)]">Level effects · {item.verifiedDisplayLevelLines.length} {item.verifiedDisplayLevelLines.length === 1 ? 'level' : 'levels'}</summary>
        <ol className="mt-2 space-y-1.5 text-[var(--secondary)]">{item.verifiedDisplayLevelLines.map((level) => <li key={level.level} className="break-words"><span className="font-semibold text-[var(--heading)]">Lv. {level.level}:</span> {level.lines.join(' · ')}</li>)}</ol>
      </details>}
      {(item.price !== null || item.sapphirePrice !== null) && <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-[var(--neutral-edge)]/10 pt-3 text-xs">
        {item.price !== null && <div className="min-w-0"><dt className="text-[var(--muted)]">Price</dt><dd className="mt-1 break-words font-semibold text-[var(--text)]">{item.price}</dd></div>}
        {item.sapphirePrice !== null && <div className="min-w-0"><dt className="text-[var(--muted)]">Sapphire Price</dt><dd className="mt-1 break-words font-semibold text-[var(--text)]">{item.sapphirePrice}</dd></div>}
      </dl>}
    </article>
  );
}

export function SephiriaItemsDatabase() {
  const { data, loadError } = useSyncExternalStore(subscribeItems, () => itemsSnapshot, () => emptyItemsSnapshot);
  const locationSearch = useSyncExternalStore(subscribeLocation, getLocationSearch, () => '');
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [kind, setKind] = useState('All types');
  const [rarity, setRarity] = useState('All rarities');
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [bondOnly, setBondOnly] = useState<boolean | undefined>(undefined);
  const [focusSlug, setFocusSlug] = useState<string | null | undefined>(undefined);
  const activeQuery = query ?? new URLSearchParams(locationSearch).get('q') ?? '';
  const searchParams = new URLSearchParams(locationSearch);
  const activeFocusSlug = focusSlug === undefined ? searchParams.get('item') : focusSlug;
  const activeCategory = category ?? searchParams.get('category') ?? 'All categories';
  const activeBondOnly = bondOnly ?? searchParams.get('bond') === '1';
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(48);

  useEffect(() => { loadItems(); }, []);

  const filteredItems = useMemo(() => {
    if (!data) return [];
    const terms = activeQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return data.items.filter((item) => {
      if (activeFocusSlug && item.slug !== activeFocusSlug) return false;
      if (kind !== 'All types' && item.itemKind !== kind) return false;
      if (rarity !== 'All rarities' && item.rarity !== rarity) return false;
      if (activeBondOnly && !item.isBondItem) return false;
      if (activeCategory !== 'All categories' && !item.categories.includes(activeCategory)) return false;
      const searchable = [item.displayName, item.displayDescription, ...item.displayEffectLines, ...item.categories].filter(Boolean).join(' ').toLowerCase();
      return terms.every((term) => searchable.includes(term));
    });
  }, [data, activeQuery, kind, rarity, activeCategory, activeBondOnly, activeFocusSlug]);

  const pageCount = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visibleItems = filteredItems.slice((safePage - 1) * pageSize, safePage * pageSize);
  const rangeStart = filteredItems.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const rangeEnd = Math.min(safePage * pageSize, filteredItems.length);
  function clearFilters() { setQuery(''); setKind('All types'); setRarity('All rarities'); setCategory('All categories'); setBondOnly(false); setFocusSlug(null); setPage(1); }
  function updateQuery(value: string) { setQuery(value); setFocusSlug(null); setPage(1); }
  function updateCategoryFromChip(value: string) { setCategory(value === activeCategory ? 'All categories' : value); setPage(1); }

  return (
    <section aria-labelledby="browse-items" className="mt-5 min-w-0">
      <h2 id="browse-items" className="sr-only">Browse Items</h2>
      {data && <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[[String(data.counts.items), 'Public items'], [String(data.counts.categories), 'Categories'], [String(data.counts.bondItems), 'Bond items'], [data.version, 'Game version']].map(([value, label]) => <div key={label} className="min-w-0 border border-[var(--gold-border)]/20 bg-[var(--surface)] px-3 py-3"><p className="break-words font-semibold text-[var(--heading)]">{value}</p><p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--muted)]">{label}</p></div>)}
      </div>}
      <div className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 sm:p-5">
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="min-w-0 sm:col-span-2 xl:col-span-1"><label htmlFor="sephiria-items-search" className="mb-1.5 block text-xs font-semibold text-[var(--heading)]">Search items</label><input id="sephiria-items-search" type="search" value={activeQuery} onChange={(event) => updateQuery(event.target.value)} placeholder="Name, description, effect, category" className="w-full min-w-0 border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]" /></div>
          <div className="min-w-0"><label htmlFor="sephiria-items-kind" className="mb-1.5 block text-xs font-semibold text-[var(--heading)]">Item type</label><select id="sephiria-items-kind" value={kind} onChange={(event) => { setKind(event.target.value); setPage(1); }} className="w-full min-w-0 border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)]"><option>All types</option>{kinds.map((option) => <option key={option}>{option}</option>)}</select></div>
          <div className="min-w-0"><label htmlFor="sephiria-items-rarity" className="mb-1.5 block text-xs font-semibold text-[var(--heading)]">Base rarity</label><select id="sephiria-items-rarity" value={rarity} onChange={(event) => { setRarity(event.target.value); setPage(1); }} className="w-full min-w-0 border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)]"><option>All rarities</option>{rarities.map((option) => <option key={option}>{option}</option>)}</select></div>
          <div className="min-w-0"><label htmlFor="sephiria-items-category" className="mb-1.5 block text-xs font-semibold text-[var(--heading)]">Category</label><select id="sephiria-items-category" value={activeCategory} onChange={(event) => { setCategory(event.target.value); setPage(1); }} className="w-full min-w-0 border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)]"><option>All categories</option>{data?.categories.map((option) => <option key={option}>{option}</option>)}</select></div>
          <label className="flex min-w-0 items-center gap-2 text-sm text-[var(--text)] sm:col-span-2"><input type="checkbox" checked={activeBondOnly} onChange={(event) => { setBondOnly(event.target.checked); setPage(1); }} className="h-4 w-4 accent-[var(--orange-text)]" />Show Bond items only</label>
          <div className="flex min-w-0 items-center sm:col-span-2 xl:justify-end"><button type="button" onClick={clearFilters} className="border border-[var(--gold-border)]/30 px-3 py-2 text-xs font-semibold text-[var(--gold-label)] hover:bg-[var(--neutral-wash)]/[0.05] focus-visible:outline focus-visible:outline-2">Clear filters</button></div>
        </div>
      </div>
      <div className="mt-4 flex min-w-0 flex-wrap items-center justify-between gap-3"><output aria-live="polite" className="text-sm text-[var(--secondary)]">{data ? filteredItems.length.toLocaleString() + ' ' + (filteredItems.length === 1 ? 'item' : 'items') + ' showing ' + rangeStart + '-' + rangeEnd : loadError ? 'The item database could not be loaded.' : 'Loading items...'}</output><label className="flex items-center gap-2 text-xs text-[var(--secondary)]">Items per page<select aria-label="Items per page" value={pageSize} onChange={(event) => { setPageSize(Number(event.target.value)); setPage(1); }} className="border border-[var(--gold-border)]/25 bg-[var(--surface)] px-2 py-1.5 text-[var(--text)]"><option value={48}>48</option><option value={60}>60</option></select></label></div>
      {loadError && <p className="mt-4 border border-red-400/30 bg-red-950/20 p-4 text-sm text-red-200">The item database is temporarily unavailable. Reload this page to try again.</p>}
      {data && <>
        <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">{visibleItems.map((item) => <ItemCard key={item.id} item={item} activeCategory={activeCategory} onCategoryClick={updateCategoryFromChip} />)}</div>
        {visibleItems.length === 0 && <p className="mt-4 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-5 text-sm text-[var(--secondary)]">No items match these filters.</p>}
        <nav aria-label="Items pagination" className="mt-5 flex min-w-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--gold-border)]/20 pt-4"><button type="button" disabled={safePage <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))} className="border border-[var(--gold-border)]/25 px-3 py-2 text-sm text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40">Previous</button><p className="text-xs text-[var(--secondary)]">Page {safePage} of {pageCount}</p><button type="button" disabled={safePage >= pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))} className="border border-[var(--gold-border)]/25 px-3 py-2 text-sm text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40">Next</button></nav>
      </>}
    </section>
  );
}
