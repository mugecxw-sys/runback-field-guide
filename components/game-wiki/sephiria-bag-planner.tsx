'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode, SetStateAction } from 'react';
import { Check, CircleHelp, MoveRight, RotateCw, Search, ShieldAlert, Trash2, X } from 'lucide-react';
import styles from './sephiria-bag-planner.module.css';
import { decodeBagPlannerLayout, encodeBagPlannerLayout, getBagPlannerUrl, layoutToPlannerState, plannerStateToLayout, validateBagPlannerLayout } from '@/lib/sephiria-planner/bag-planner-layout';
import { weaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { evaluateBagLayout } from '@/lib/sephiria-planner/engine/bag-planner-engine.mjs';
import type { PlannerArtifactState, PlannerCell } from '@/lib/sephiria-planner/engine/bag-planner-engine.mjs';
import {
  defaultPlannerWeapon,
  plannerArtifactRulesById,
  plannerComboRules,
  plannerCategories,
  plannerItems,
  plannerItemsById,
  plannerTabletRulesById,
  plannerWeapons,
  rarityOrder,
  type PlannerCatalogItem,
  type PlannerItemKind,
  type PlannerRotation,
  type PlannerWeapon,
} from '@/lib/sephiria-planner/data';
import {
  clearLayout,
  createEmptyLayout,
  moveItem,
  placeItem,
  PLANNER_MAX_CAPACITY,
  PLANNER_MIN_CAPACITY,
  PLANNER_STORAGE_KEY,
  removeItem,
  resetLayout,
  resizeLayout,
  rotateTablet,
  safeRestoreLayout,
  type PlannerLayout,
} from '@/lib/sephiria-planner/planner-state';

type ItemTab = 'All' | PlannerItemKind;

const tabs: ItemTab[] = ['Artifact', 'Tablet', 'Consumable', 'Item'];
const directionGlyph: Record<PlannerRotation, string> = { UP: '↑', LEFT: '←', DOWN: '↓', RIGHT: '→' };
const directionLabel: Record<PlannerRotation, string> = { UP: 'Up', LEFT: 'Left', DOWN: 'Down', RIGHT: 'Right' };

const constraintLabel: Record<string, string> = {
  TOP_ROW: 'Top row',
  BOTTOM_SLOTS: 'Lowest six slots',
  INNER_SLOTS: 'Inner slots',
  OUTLINED_SLOTS: 'Outlined slots',
  BOTH_ADJACENT_SLOTS_EMPTY: 'Both side slots empty',
  WEAPON_IS: 'Weapon requirement',
};

function newPlacementId() {
  return globalThis.crypto?.randomUUID?.() ?? `placement-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function humanWeapon(value: string) {
  const match = plannerWeapons.find((weapon) => weapon.value === value);
  return match?.name ?? value.replaceAll('_', ' ');
}

function formatEffect(effect: { effectType: string; value?: number | null }) {
  if (effect.effectType === 'ADD_ARTIFACT_LEVEL') return `Artifact level ${Number(effect.value) > 0 ? '+' : ''}${effect.value}`;
  if (effect.effectType === 'DISABLE_ARTIFACT') return 'Disable Artifacts';
  if (effect.effectType === 'IGNORE_ARTIFACT_CONSTRAINTS') return 'Ignore Artifact Constraints';
  return 'Tablet effect';
}

function formatFailure(reason: string | null | undefined) {
  if (!reason) return null;
  return reason.replace('Requires great sword.', 'Requires Greatsword.');
}

function StatusPill({ value, tone = 'neutral' }: { value: string; tone?: 'good' | 'bad' | 'muted' | 'neutral' | 'warm' }) {
  const toneClasses = {
    good: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
    bad: 'border-rose-400/30 bg-rose-500/10 text-rose-100',
    muted: 'border-[var(--gold-border)]/20 bg-[var(--surface-inset)] text-[var(--muted)]',
    neutral: 'border-[var(--gold-border)]/25 bg-[var(--surface-inset)] text-[var(--secondary)]',
    warm: 'border-amber-400/30 bg-amber-400/10 text-amber-100',
  };
  return <span className={`inline-flex items-center border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${toneClasses[tone]}`}>{value}</span>;
}

function Panel({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return <section className={`border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:p-5 ${className}`}><h2 className="font-serif text-lg font-semibold text-[var(--heading)]">{title}</h2>{children}</section>;
}

function ItemMeta({ item }: { item: PlannerCatalogItem }) {
  return <div className="mt-2 flex flex-wrap gap-1.5">
    <span className="border border-[var(--gold-border)]/25 px-1.5 py-0.5 text-[10px] text-[var(--gold-label)]">{item.rarity}</span>
    {item.isBondItem && <span className="border border-violet-300/25 bg-violet-400/10 px-1.5 py-0.5 text-[10px] text-violet-100">Bond</span>}
    {item.categories.slice(0, 3).map((category) => <span key={category} className="border border-[var(--neutral-edge)]/20 px-1.5 py-0.5 text-[10px] text-[var(--secondary)]">{category}</span>)}
  </div>;
}

function PlacementStatus({ state }: { state: PlannerArtifactState }) {
  if (state.finalConstraintStatus === 'NOT_EVALUATED') return <span className="text-xs text-[var(--muted)]">Not checked while disabled or below level 1</span>;
  if (!state.constraints?.length) return <span className="text-xs text-emerald-200">PASS <span className="text-[var(--muted)]">· no placement requirement</span></span>;
  return <div className="space-y-2">
    {state.constraints.filter((constraint) => constraint.type !== 'WEAPON_IS').map((constraint, index) => {
      const status = constraint.status;
      const tone = status === 'PASS' ? 'good' : status === 'FAIL' ? 'bad' : status === 'IGNORED' ? 'warm' : 'muted';
      return <div key={`${constraint.type}-${index}`} className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-[var(--secondary)]">{constraintLabel[constraint.type] ?? 'Placement'}</span>
        <StatusPill value={status} tone={tone} />
      </div>;
    })}
  </div>;
}

export function SephiriaBagPlanner() {
  const [layout, setLayout] = useState<PlannerLayout>(() => createEmptyLayout(defaultPlannerWeapon));
  const [ready, setReady] = useState(false);
  const [selectedTab, setSelectedTab] = useState<ItemTab>('Artifact');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [rarity, setRarity] = useState('');
  const [bondOnly, setBondOnly] = useState(false);
  const [pendingItemId, setPendingItemId] = useState<number | null>(null);
  const [selectedPlacementId, setSelectedPlacementId] = useState<string | null>(null);
  const [movingPlacementId, setMovingPlacementId] = useState<string | null>(null);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const [notice, setNotice] = useState('');
  const [manualShareUrl, setManualShareUrl] = useState('');
  const [temporaryShared, setTemporaryShared] = useState(false);
  const [sourceBuild, setSourceBuild] = useState<{ title: string; href: string } | null>(null);
  const persistAllowed = useRef(true);
  const editLayout = (next: SetStateAction<PlannerLayout>) => { persistAllowed.current = true; setTemporaryShared(false); setLayout(next); };

  const shareLayout = async () => {
    const url = getBagPlannerUrl(plannerStateToLayout(layout), { origin: window.location.origin });
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      setManualShareUrl('');
      setNotice('Link copied');
    } catch {
      setManualShareUrl(url);
      setNotice('Copy this link to share your layout.');
    }
  };

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      const params = new URLSearchParams(window.location.search);
      const payload = params.get('layout');
      const shared = payload === null ? null : decodeBagPlannerLayout(payload);
      if (shared?.valid) {
        persistAllowed.current = false;
        setTemporaryShared(true);
        setLayout(layoutToPlannerState(shared.layout));
        const slug = params.get('source');
        const build = weaponBuildGroups.flatMap((group) => group.builds).find((entry) => entry.href.split('/').pop() === slug);
        if (build?.plannerLayout && validateBagPlannerLayout(build.plannerLayout).valid && encodeBagPlannerLayout(build.plannerLayout) === encodeBagPlannerLayout(shared.layout)) {
          setSourceBuild({ title: build.title, href: build.href });
        }
      } else {
        try {
          const result = safeRestoreLayout(
            window.localStorage.getItem(PLANNER_STORAGE_KEY),
            plannerItemsById,
            (tabletId) => Boolean(plannerTabletRulesById.get(tabletId)?.rotation.canRotate),
            new Set(plannerWeapons.map((weapon) => weapon.value)),
            defaultPlannerWeapon,
          );
          setLayout(result.layout);
          if (shared && !shared.valid) setNotice(shared.errors.some((error) => error.code === 'GAME_VERSION') ? 'This shared layout was created for another game version. This shared layout could not be loaded.' : 'This shared layout could not be loaded.');
          else if (result.recovered) setNotice(result.removedCount ? `Restored the layout and skipped ${result.removedCount} invalid saved item${result.removedCount === 1 ? '' : 's'}.` : 'The saved layout was invalid or from another version, so an empty bag was restored.');
        } catch {
          setNotice(shared ? 'This shared layout could not be loaded.' : 'Saved layout could not be read. A fresh bag is ready.');
        }
      }
      setReady(true);
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!ready || !persistAllowed.current) return;
    try {
      const canonical = plannerStateToLayout(layout);
      if (!validateBagPlannerLayout(canonical).valid) throw new Error('Invalid layout');
      window.localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(canonical));
    } catch {
      queueMicrotask(() => setNotice('This browser could not save the layout. You can still use the Planner for this session.'));
    }
  }, [layout, ready]);

  const selectedPlacementSlot = selectedPlacementId ? layout.slots.findIndex((placement) => placement?.placementId === selectedPlacementId) : -1;
  const selectedPlacement = selectedPlacementSlot >= 0 ? layout.slots[selectedPlacementSlot] : null;
  const pendingItem = pendingItemId === null ? null : plannerItemsById.get(pendingItemId) ?? null;
  const selectedItem = selectedPlacement ? plannerItemsById.get(selectedPlacement.itemId) ?? null : pendingItem;
  const previewTablet = pendingItem?.itemKind === 'Tablet' && hoveredSlot !== null
    ? { tabletId: pendingItem.id, originSlot: hoveredSlot, rotation: 'UP' as const }
    : null;

  const planner = evaluateBagLayout({
    capacity: layout.capacity,
    weapon: layout.weapon,
    slots: layout.slots,
    itemsById: plannerItemsById,
    tabletRulesById: plannerTabletRulesById,
    artifactRulesById: plannerArtifactRulesById,
    comboRules: plannerComboRules,
    previewTablet,
    previewTabletPlacementId: selectedPlacement?.itemKind === 'Tablet' ? selectedPlacement.placementId : null,
  });

  const itemCounts = useMemo(() => ({
    All: plannerItems.length,
    Artifact: plannerItems.filter((item) => item.itemKind === 'Artifact').length,
    Tablet: plannerItems.filter((item) => item.itemKind === 'Tablet').length,
    Consumable: plannerItems.filter((item) => item.itemKind === 'Consumable').length,
    Item: plannerItems.filter((item) => item.itemKind === 'Item').length,
  }), []);

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return plannerItems.filter((item) => {
      if (selectedTab !== 'All' && item.itemKind !== selectedTab) return false;
      if (category && !item.categories.includes(category)) return false;
      if (rarity && item.rarity !== rarity) return false;
      if (bondOnly && !item.isBondItem) return false;
      if (!normalizedQuery) return true;
      return `${item.displayName} ${item.categories.join(' ')}`.toLowerCase().includes(normalizedQuery);
    }).sort((a, b) => a.displayName.localeCompare(b.displayName));
  }, [selectedTab, query, category, rarity, bondOnly]);

  const selectedArtifactState = selectedPlacement?.itemKind === 'Artifact'
    ? planner.artifactStates.find((state) => state.placementId === selectedPlacement.placementId)
    : null;
  const selectedTabletState = selectedPlacement?.itemKind === 'Tablet'
    ? planner.tabletStates.find((state) => state.placementId === selectedPlacement.placementId)
    : pendingItem?.itemKind === 'Tablet' ? planner.previewTablet : null;
  const selectedTabletRule = selectedItem?.itemKind === 'Tablet' ? plannerTabletRulesById.get(selectedItem.id) : null;

  const handleCapacityChange = (nextCapacity: number) => {
    const result = resizeLayout(layout, nextCapacity);
    if (!result.layout) return;
    if (result.removed.length && !window.confirm(`Changing capacity will remove ${result.removed.length} item${result.removed.length === 1 ? '' : 's'} outside the new bag size. Continue?`)) return;
    editLayout(result.layout);
    setSelectedPlacementId(null);
    setPendingItemId(null);
    setMovingPlacementId(null);
    setHoveredSlot(null);
    setNotice(result.removed.length ? `Removed ${result.removed.length} item${result.removed.length === 1 ? '' : 's'} outside the new capacity.` : 'Bag capacity updated.');
  };

  const handleSlotClick = (slot: number) => {
    const occupant = layout.slots[slot];
    if (movingPlacementId) {
      const from = layout.slots.findIndex((placement) => placement?.placementId === movingPlacementId);
      if (from < 0 || slot === from || occupant || slot >= layout.capacity) {
        setNotice('Choose an empty active slot to move this item.');
        return;
      }
      const next = moveItem(layout, from, slot);
      if (!next) {
        setNotice('Choose an empty active slot to move this item.');
        return;
      }
      editLayout(next);
      setMovingPlacementId(null);
      setSelectedPlacementId(null);
      setNotice('Item moved.');
      return;
    }
    if (occupant) {
      setSelectedPlacementId(occupant.placementId);
      setPendingItemId(null);
      setMovingPlacementId(null);
      setHoveredSlot(null);
      setNotice('Item selected. Inspect it below or choose Move.');
      return;
    }
    if (pendingItem) {
      const next = placeItem(layout, pendingItem, slot, newPlacementId());
      if (!next) {
        setNotice('Choose an empty active slot.');
        return;
      }
      const placement = next.slots[slot];
      editLayout(next);
      setPendingItemId(null);
      setSelectedPlacementId(placement?.placementId ?? null);
      setHoveredSlot(null);
      setNotice(`${pendingItem.displayName} placed in slot ${slot + 1}.`);
      return;
    }
    setSelectedPlacementId(null);
    setMovingPlacementId(null);
  };

  const chooseItem = (itemId: number) => {
    const item = plannerItemsById.get(itemId);
    if (!item) return;
    setPendingItemId(itemId);
    setSelectedPlacementId(null);
    setMovingPlacementId(null);
    setNotice(`Selected ${item.displayName}. Choose an empty active slot to place it.`);
  };

  const removeSelected = () => {
    if (selectedPlacementSlot < 0) return;
    editLayout(removeItem(layout, selectedPlacementSlot));
    setSelectedPlacementId(null);
    setMovingPlacementId(null);
    setNotice('Item removed from the bag.');
  };

  const startMove = () => {
    if (!selectedPlacementId || selectedPlacementSlot < 0) return;
    if (movingPlacementId === selectedPlacementId) {
      setMovingPlacementId(null);
      setNotice('Move cancelled. Item remains in its original slot.');
      return;
    }
    setMovingPlacementId(selectedPlacementId);
    setNotice('Move mode: choose an empty active slot.');
  };

  const rotateSelected = () => {
    if (selectedPlacementSlot < 0 || !selectedTabletRule?.rotation.canRotate) return;
    editLayout(rotateTablet(layout, selectedPlacementSlot, selectedTabletRule.rotation.canRotate));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (selectedPlacementId || movingPlacementId)) {
        event.preventDefault();
        setSelectedPlacementId(null);
        setMovingPlacementId(null);
        if (movingPlacementId) setNotice('Move cancelled. Item remains in its original slot.');
        return;
      }
      if (event.key.toLowerCase() !== 'r' || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (
        target.isContentEditable || target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]')
      )) return;
      if (selectedPlacement?.itemKind !== 'Tablet' || !selectedTabletRule?.rotation.canRotate) return;
      event.preventDefault();
      editLayout((current) => rotateTablet(current, selectedPlacementSlot, selectedTabletRule.rotation.canRotate));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movingPlacementId, selectedPlacement?.itemKind, selectedPlacementId, selectedPlacementSlot, selectedTabletRule]);

  useEffect(() => {
    if (!selectedPlacementId) return;
    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('[data-planner-slot], [data-planner-item-actions]')) return;
      setSelectedPlacementId(null);
      setMovingPlacementId(null);
    };
    document.addEventListener('pointerdown', handleOutsidePointerDown);
    return () => document.removeEventListener('pointerdown', handleOutsidePointerDown);
  }, [selectedPlacementId]);

  const handleClear = () => {
    editLayout(clearLayout(layout));
    setSelectedPlacementId(null);
    setPendingItemId(null);
    setMovingPlacementId(null);
    setHoveredSlot(null);
    setNotice('Bag cleared. Capacity and weapon were kept.');
  };

  const handleReset = () => {
    editLayout(resetLayout(defaultPlannerWeapon));
    setSelectedPlacementId(null);
    setPendingItemId(null);
    setMovingPlacementId(null);
    setHoveredSlot(null);
    setNotice('Planner reset to an empty 42-slot bag.');
  };

  const updateWeapon = (weapon: PlannerWeapon) => {
    editLayout({ ...layout, weapon });
    setNotice(`Weapon changed to ${humanWeapon(weapon)}. Artifact requirements recalculated.`);
  };

  const preview = planner.previewTablet;
  const hasPendingTablet = pendingItem?.itemKind === 'Tablet';
  const canPreviewPendingTablet = hasPendingTablet && hoveredSlot !== null && Boolean(preview);
  const visiblePreview = selectedPlacement?.itemKind === 'Tablet' ? preview : canPreviewPendingTablet ? preview : null;
  const previewConditionCells = new Set<number>(visiblePreview?.conditionCells ?? []);
  const previewEffectCells = new Set<number>(visiblePreview?.effectCells ?? []);
  const selectedRotation = selectedPlacement?.rotation ?? 'UP';
  const selectedCanRotate = Boolean(selectedTabletRule?.rotation.canRotate);

  const renderCell = (cell: PlannerCell) => {
    const slot = cell.index;
    const placement = cell.placement;
    const item = placement ? plannerItemsById.get(placement.itemId) : null;
    const artifactState = placement?.itemKind === 'Artifact'
      ? planner.artifactStates.find((state) => state.placementId === placement.placementId)
      : null;
    const tabletState = placement?.itemKind === 'Tablet'
      ? planner.tabletStates.find((state) => state.placementId === placement.placementId)
      : null;
    const isLocked = slot >= layout.capacity;
    const isSelected = placement?.placementId === selectedPlacementId;
    const isMoving = placement?.placementId === movingPlacementId;
    const isMoveTarget = Boolean(movingPlacementId && !placement && !isLocked);
    const condition = previewConditionCells.has(slot);
    const effect = previewEffectCells.has(slot);
    const levelLabel = artifactState ? `Lv.${artifactState.effectiveLevel}` : null;
    const statusLabel = artifactState?.effectiveActive === false ? ', inactive' : '';
    const accessibleName = isLocked
      ? `Slot ${slot + 1}, locked`
      : `Slot ${slot + 1}${item ? `, ${item.displayName}${levelLabel ? `, ${levelLabel}` : ''}${statusLabel}` : `, empty${isMoveTarget ? ', available move target' : ''}`}${condition ? ', Tablet condition cell' : ''}${effect ? ', Tablet effect cell' : ''}`;
    const column = slot % 6;
    const lastRow = Math.floor((layout.capacity - 1) / 6);
    const row = Math.floor(slot / 6);
    const popoverAlign = column <= 1 ? 'left' : column >= 4 ? 'right' : 'center';
    const popoverSide = row <= Math.floor(lastRow / 2) ? 'below' : 'above';

    return <div
      key={slot}
      className={styles.gridCellWrap}
      data-planner-slot="true"
      data-selected={isSelected}
    >
      <button
        type="button"
        className={`${styles.gridCell} ${isMoving ? 'opacity-60' : ''}`}
        data-condition={condition}
        data-effect={effect}
        data-move-target={isMoveTarget}
        data-selected={isSelected}
        data-locked={isLocked}
        data-placement-id={placement?.placementId}
        aria-label={accessibleName}
        aria-pressed={isSelected}
        disabled={isLocked}
        onClick={() => handleSlotClick(slot)}
        onPointerEnter={() => { if (hasPendingTablet) setHoveredSlot(slot); }}
        onFocus={() => { if (hasPendingTablet) setHoveredSlot(slot); }}
        onPointerLeave={() => { if (hasPendingTablet) setHoveredSlot(null); }}
      >
        {item?.image?.src ? <Image src={item.image.src} alt={item.displayName} width={42} height={42} loading="lazy" className={styles.gridImage} /> : !isLocked ? <span aria-hidden="true" className={styles.gridEmptyMark}>+</span> : <span aria-hidden="true" className="text-xs">×</span>}
        {levelLabel && <span className={styles.gridLevelBadge}>{levelLabel}</span>}
        {artifactState?.effectiveActive === false && <span className={styles.gridInactiveBadge} aria-hidden="true">!</span>}
        {tabletState && <span className={styles.tabletDirection} aria-label={`${directionLabel[(placement?.rotation ?? 'UP') as PlannerRotation]} orientation`}>{directionGlyph[(placement?.rotation ?? 'UP') as PlannerRotation]}</span>}
        <span className={styles.gridSlotLabel}>{slot + 1}</span>
      </button>
      {isSelected && !movingPlacementId && selectedPlacement && selectedItem && <fieldset
        className={styles.actionPopover}
        data-planner-item-actions="true"
        data-side={popoverSide}
        data-align={popoverAlign}
        aria-label={`${selectedItem.displayName} actions`}
      >
        {movingPlacementId === selectedPlacementId && <output className={styles.actionPrompt} aria-live="polite">Select an empty slot</output>}
        <button type="button" aria-label={`Move ${selectedItem.displayName}`} aria-pressed={movingPlacementId === selectedPlacementId} onClick={startMove} className={styles.actionButton}><MoveRight size={15} aria-hidden="true" />Move</button>
        <button type="button" aria-label={`Remove ${selectedItem.displayName}`} onClick={removeSelected} className={`${styles.actionButton} ${styles.removeAction}`}><Trash2 size={15} aria-hidden="true" />Remove</button>
        {selectedPlacement.itemKind === 'Tablet' && selectedCanRotate && <button type="button" aria-label={`Rotate ${selectedItem.displayName} (R)`} onClick={rotateSelected} className={`${styles.actionButton} ${styles.rotateAction}`}><RotateCw size={15} aria-hidden="true" />Rotate (R) {directionLabel[selectedRotation]} →</button>}
      </fieldset>}
    </div>;
  };

  return <div className="mt-6 space-y-5">
    {sourceBuild && <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--secondary)]">Loaded from: <strong className="text-[var(--heading)]">{sourceBuild.title}</strong><a href={sourceBuild.href} className="font-semibold text-[var(--orange-text)] underline underline-offset-4">Back to Build</a></div>}
    <section className="grid gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-end sm:p-5" aria-label="Planner controls">
      <label className="block min-w-0 text-xs font-semibold text-[var(--heading)]" htmlFor="planner-capacity">Bag capacity
        <select id="planner-capacity" value={layout.capacity} onChange={(event) => handleCapacityChange(Number(event.target.value))} className="mt-1.5 block w-full border border-[var(--gold-border)]/30 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]">
          {Array.from({ length: PLANNER_MAX_CAPACITY - PLANNER_MIN_CAPACITY + 1 }, (_, index) => PLANNER_MIN_CAPACITY + index).map((capacity) => <option key={capacity} value={capacity}>{capacity} slots</option>)}
        </select>
      </label>
      <label className="block min-w-0 text-xs font-semibold text-[var(--heading)]" htmlFor="planner-weapon">Current weapon
        <select id="planner-weapon" value={layout.weapon} onChange={(event) => updateWeapon(event.target.value as PlannerWeapon)} className="mt-1.5 block w-full border border-[var(--gold-border)]/30 bg-[var(--wiki-page-bg)] px-3 py-2.5 text-sm text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]">
          {plannerWeapons.map((weapon) => <option key={weapon.id} value={weapon.value}>{weapon.name}</option>)}
        </select>
      </label>
      <div className="flex flex-wrap gap-2 sm:justify-end">
        <button type="button" onClick={shareLayout} disabled={!ready} className="inline-flex min-h-10 items-center gap-2 border border-[var(--orange-text)]/60 px-3 text-xs font-semibold text-[var(--heading)] hover:bg-[var(--neutral-wash)]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]">Share Layout</button>
        <button type="button" onClick={handleClear} className="inline-flex min-h-10 items-center gap-2 border border-[var(--gold-border)]/30 px-3 text-xs font-semibold text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]"><Trash2 size={14} />Clear Bag</button>
        <button type="button" onClick={handleReset} className="inline-flex min-h-10 items-center gap-2 border border-[var(--gold-border)]/30 px-3 text-xs font-semibold text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]"><RotateCw size={14} />Reset</button>
      </div>
    </section>

    {manualShareUrl && <label className="block min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-3 text-xs font-semibold text-[var(--heading)]">Copy this link
      <input aria-label="Share link" readOnly value={manualShareUrl} onFocus={(event) => event.currentTarget.select()} className="mt-2 block w-full min-w-0 border border-[var(--gold-border)]/30 bg-[var(--wiki-page-bg)] px-3 py-2 text-sm text-[var(--text)]" />
    </label>}
    {notice && <output className="flex items-start justify-between gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] px-3 py-2 text-xs text-[var(--secondary)]" aria-live="polite"><span>{notice}</span><button type="button" onClick={() => setNotice('')} aria-label="Dismiss message" className="shrink-0 text-[var(--muted)] hover:text-[var(--heading)]"><X size={14} /></button></output>}

    <div className={styles.plannerLayout}>
      <div className="min-w-0 space-y-4">
        <Panel title="Bag Grid">
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--secondary)]">
            <span>6 columns · {layout.capacity} active slots · {planner.summary.usedSlots} used</span>
            <span className="inline-flex flex-wrap gap-3"><span className="inline-flex items-center gap-1.5"><i className="inline-block size-3 border border-dashed border-cyan-200/80" />Condition</span><span className="inline-flex items-center gap-1.5"><i className="inline-block size-3 border border-amber-300/50 bg-amber-200/15" />Effect</span></span>
          </div>
          <p className="mt-2 text-xs leading-5 text-[var(--muted)]">Select an item, then choose an empty slot. Select a placed item to inspect, move, remove or rotate it.</p>
          <fieldset className={`${styles.plannerGrid} mt-4 min-w-0 border-0 p-0`}><legend className="sr-only">Sephiria six-column bag grid</legend>{planner.cells.map(renderCell)}</fieldset>
          {movingPlacementId && <div className="mt-3 flex items-center justify-between gap-3 border border-amber-300/20 bg-amber-400/5 px-3 py-2 text-xs text-amber-100"><span>Select an empty slot to move this item.</span><button type="button" data-planner-item-actions="true" aria-label={`Cancel moving ${selectedItem?.displayName ?? 'item'}`} onClick={() => { setMovingPlacementId(null); setNotice('Move cancelled. Item remains in its original slot.'); }} className="min-h-10 px-2 font-semibold underline underline-offset-2">Cancel</button></div>}
        </Panel>

        <Panel title="Planner Summary">
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ['Slots used', `${planner.summary.usedSlots} / ${layout.capacity}`],
              ['Artifacts active', `${planner.summary.activeArtifacts} / ${planner.summary.artifacts}`],
              ['Artifacts inactive', `${planner.summary.inactiveArtifacts}`],
              ['Tablets active', `${planner.summary.activeTablets} / ${planner.summary.tablets}`],
            ].map(([label, value]) => <div key={label} className="border border-[var(--gold-border)]/20 bg-[var(--surface-inset)] px-3 py-2.5"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--gold-label)]">{label}</p><p className="mt-1 text-sm font-semibold text-[var(--heading)]">{value}</p></div>)}
          </div>
          <div className="mt-4 border-t border-[var(--gold-border)]/20 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]">Combos</h3>
            {planner.summary.combos.length === 0 ? <p className="mt-2 text-xs text-[var(--muted)]">Place Artifacts to see their Combo counts and effects.</p> : <div className="mt-2 grid gap-2 md:grid-cols-2">
              {planner.summary.combos.map((combo) => <article key={combo.comboId} className="min-w-0 border border-[var(--gold-border)]/20 bg-[var(--surface-inset)] px-3 py-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-semibold text-[var(--heading)]">{combo.name} · {combo.count}</h4><StatusPill value={combo.isActive ? `ACTIVE · ${combo.activeThreshold}` : 'NOT ACTIVE'} tone={combo.isActive ? 'good' : 'muted'} /></div>
                {combo.isActive && combo.activeEffect && <p className="mt-2 break-words text-xs leading-5 text-[var(--secondary)]"><span className="font-semibold text-[var(--heading)]">Current effect:</span> {combo.activeEffect}</p>}
                {combo.nextThreshold && combo.nextEffect && <p className="mt-1 break-words text-xs leading-5 text-[var(--muted)]"><span className="font-semibold text-[var(--secondary)]">Next · {combo.nextThreshold}:</span> {combo.nextEffect}</p>}
                {combo.thresholds.length > 1 && <details className="mt-2 border-t border-[var(--gold-border)]/15 pt-2 text-xs text-[var(--secondary)]">
                  <summary className="cursor-pointer select-none font-semibold">All thresholds</summary>
                  <ul className="mt-2 space-y-1.5">{combo.thresholds.map((tier) => <li key={tier.count} className="break-words leading-5"><span className="font-semibold text-[var(--heading)]">{tier.count}:</span> {tier.effect}{tier.count === combo.activeThreshold ? ' · Current' : tier.count === combo.nextThreshold ? ' · Next' : tier.count < (combo.activeThreshold ?? 0) ? ' · Reached' : ''}</li>)}</ul>
                </details>}
              </article>)}
            </div>}
          </div>
          {planner.summary.unresolvedArtifacts > 0 && <p className="mt-3 text-xs text-amber-100">{planner.summary.unresolvedArtifacts} Artifact{planner.summary.unresolvedArtifacts === 1 ? '' : 's'} need more layout or weapon information.</p>}
          <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--muted)]"><Check size={13} className="text-emerald-300" />{!ready ? 'Restoring saved layout…' : temporaryShared ? 'Shared layout · changes will be saved in this browser' : 'Layout saved in this browser'}</p>
        </Panel>

        <Panel title={selectedItem ? 'Selected Item' : 'Item Details'}>
          {!selectedItem ? <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[var(--secondary)]"><CircleHelp size={16} className="mt-0.5 shrink-0 text-[var(--gold-label)]" />Select an item in the bag to inspect it, or choose one from the picker to place it.</p> : <>
            <div className="mt-3 flex gap-3">
              <div className="grid size-16 shrink-0 place-items-center border border-[var(--gold-border)]/25 bg-[var(--surface-inset)]"><Image src={selectedItem.image.src} alt={selectedItem.displayName} width={52} height={52} loading="lazy" className="max-h-12 max-w-12 object-contain" /></div>
              <div className="min-w-0 flex-1"><h3 className="break-words text-lg font-semibold text-[var(--heading)]">{selectedItem.displayName}</h3><p className="mt-0.5 text-xs text-[var(--secondary)]">{selectedItem.itemKind}</p><ItemMeta item={selectedItem} /></div>
            </div>
            {pendingItem && <p className="mt-3 border border-[var(--gold-border)]/20 bg-[var(--surface-inset)] px-3 py-2 text-xs leading-5 text-[var(--secondary)]">{pendingItem.itemKind === 'Tablet' && hoveredSlot === null ? 'Focus or hover a bag slot to preview this Tablet, then click an empty slot to place it.' : 'Click an empty active slot to place this item.'}</p>}

            {selectedPlacement && <div className="mt-4 flex flex-wrap gap-2" data-planner-item-actions="true">
              <button type="button" aria-label={`Move ${selectedItem?.displayName ?? 'item'}`} aria-pressed={movingPlacementId === selectedPlacementId} onClick={startMove} className="min-h-11 border border-[var(--gold-border)]/30 px-3 text-xs font-semibold text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)] sm:min-h-9">Move</button>
              <button type="button" aria-label={`Remove ${selectedItem?.displayName ?? 'item'}`} onClick={removeSelected} className="min-h-11 border border-rose-300/25 px-3 text-xs font-semibold text-rose-100 hover:bg-rose-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300 sm:min-h-9">Remove</button>
              {selectedPlacement.itemKind === 'Tablet' && selectedCanRotate && <button type="button" onClick={rotateSelected} className="inline-flex min-h-9 items-center gap-2 border border-[var(--gold-border)]/30 px-3 text-xs font-semibold text-[var(--gold-label)] hover:bg-[var(--neutral-wash)]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]"><RotateCw size={14} />Rotate (R) {directionLabel[selectedRotation]} →</button>}
              {selectedPlacement.itemKind === 'Tablet' && !selectedCanRotate && <span className="inline-flex min-h-9 items-center border border-[var(--gold-border)]/15 px-3 text-xs text-[var(--muted)]">Fixed orientation</span>}
            </div>}

            {selectedArtifactState && <div className="mt-4 space-y-4 border-t border-[var(--gold-border)]/20 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-semibold text-[var(--heading)]">Artifact Status</h4><StatusPill value={selectedArtifactState.effectiveActive ? 'ACTIVE' : selectedArtifactState.effectiveActive === null ? 'NEEDS INPUT' : 'INACTIVE'} tone={selectedArtifactState.effectiveActive ? 'good' : selectedArtifactState.effectiveActive === null ? 'warm' : 'bad'} /></div>
              {formatFailure(selectedArtifactState.reason) && <p className="flex items-start gap-2 text-xs leading-5 text-rose-100"><ShieldAlert size={15} className="mt-0.5 shrink-0" />{formatFailure(selectedArtifactState.reason)}</p>}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-sm"><span className="text-[var(--secondary)]">Placement</span><div className="max-w-[68%]"><PlacementStatus state={selectedArtifactState} /></div></div>
                <div className="flex items-center justify-between gap-2 text-sm"><span className="text-[var(--secondary)]">Weapon</span>
                  {selectedArtifactState.constraints.some((constraint) => constraint.type === 'WEAPON_IS')
                    ? <div className="space-y-1 text-right">{selectedArtifactState.constraints.filter((constraint) => constraint.type === 'WEAPON_IS').map((constraint, index) => <div key={index} className="flex items-center justify-end gap-2"><span className="text-xs text-[var(--secondary)]">Requires {humanWeapon(constraint.expectedWeapon ?? '')}</span><StatusPill value={constraint.status} tone={constraint.status === 'PASS' ? 'good' : constraint.status === 'FAIL' ? 'bad' : 'muted'} /></div>)}</div>
                    : <span className="text-xs text-[var(--muted)]">Any weapon</span>}
                </div>
                <div className="flex items-center justify-between gap-2 text-sm"><span className="text-[var(--secondary)]">Level</span><span className={selectedArtifactState.rawLevel < 1 ? 'text-rose-100' : 'text-[var(--heading)]'}>{selectedArtifactState.rawLevel < 1 ? 'FAIL' : `Lv.${selectedArtifactState.effectiveLevel} effective`}</span></div>
                <div className="flex items-center justify-between gap-2 text-sm"><span className="text-[var(--secondary)]">Disabled</span><StatusPill value={selectedArtifactState.disabled ? 'YES' : 'NO'} tone={selectedArtifactState.disabled ? 'bad' : 'good'} /></div>
                <div className="flex items-center justify-between gap-2 text-sm"><span className="text-[var(--secondary)]">Ignore Constraints</span><StatusPill value={selectedArtifactState.ignoreConstraints ? 'YES' : 'NO'} tone={selectedArtifactState.ignoreConstraints ? 'warm' : 'muted'} /></div>
              </div>

              {selectedArtifactState.ignoredConstraints.length > 0 && <div className="border border-amber-300/20 bg-amber-300/5 p-3">
                <p className="text-xs font-semibold text-amber-100">Constraint ignored by: {selectedArtifactState.contributors.filter((contributor) => contributor.effectType === 'IGNORE_ARTIFACT_CONSTRAINTS').map((contributor) => contributor.tabletName).join(', ')}</p>
                <ul className="mt-2 space-y-1 text-xs text-[var(--secondary)]">{selectedArtifactState.ignoredConstraints.map((constraint, index) => <li key={index}>Original rule: {constraintLabel[constraint.type] ?? 'Placement requirement'}</li>)}</ul>
              </div>}

              {selectedArtifactState.disabled && <p className="border border-rose-300/20 bg-rose-400/5 p-3 text-xs text-rose-100">Disabled by: {selectedArtifactState.contributors.filter((contributor) => contributor.effectType === 'DISABLE_ARTIFACT').map((contributor) => contributor.tabletName).join(', ') || 'Tablet effect'}</p>}

              <div className="border border-[var(--gold-border)]/20 bg-[var(--surface-inset)] p-3">
                <h5 className="text-xs font-semibold text-[var(--heading)]">Level Chain</h5>
                <dl className="mt-2 space-y-1.5 text-xs">
                  <div className="flex justify-between gap-3"><dt className="text-[var(--secondary)]">Base Level</dt><dd className="font-semibold text-[var(--heading)]">{selectedArtifactState.baseLevel}</dd></div>
                  {selectedArtifactState.contributors.filter((contributor) => contributor.effectType === 'ADD_ARTIFACT_LEVEL').map((contributor, index) => <div key={`${contributor.tabletId}-${contributor.originSlot}-${index}`} className="flex justify-between gap-3"><dt className="min-w-0 truncate text-[var(--secondary)]">{plannerItemsById.get(contributor.tabletId)?.displayName ?? contributor.tabletName}</dt><dd className="shrink-0 font-semibold text-[var(--gold-label)]">{Number(contributor.value) > 0 ? '+' : ''}{contributor.value}</dd></div>)}
                  {selectedArtifactState.contributors.filter((contributor) => contributor.effectType === 'ADD_ARTIFACT_LEVEL').length === 0 && <div className="flex justify-between gap-3"><dt className="text-[var(--secondary)]">Tablet Effects</dt><dd className="text-[var(--muted)]">None</dd></div>}
                  <div className="flex justify-between gap-3 border-t border-[var(--gold-border)]/15 pt-1.5"><dt className="text-[var(--secondary)]">Raw Level</dt><dd className="font-semibold text-[var(--heading)]">{selectedArtifactState.rawLevel}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-[var(--secondary)]">Max Level</dt><dd className="text-[var(--heading)]">{selectedArtifactState.maxLevel}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-[var(--secondary)]">Effective Level</dt><dd className="font-semibold text-[var(--heading)]">{selectedArtifactState.effectiveLevel}</dd></div>
                </dl>
              </div>
            </div>}

            {selectedItem.itemKind === 'Tablet' && selectedTabletRule && <div className="mt-4 space-y-4 border-t border-[var(--gold-border)]/20 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-semibold text-[var(--heading)]">Tablet Status</h4><StatusPill value={selectedTabletState?.finalState === 'ACTIVE' ? 'ACTIVE' : selectedTabletState?.finalState === 'INACTIVE' ? 'INACTIVE' : 'PREVIEW'} tone={selectedTabletState?.finalState === 'ACTIVE' ? 'good' : selectedTabletState?.finalState === 'INACTIVE' ? 'bad' : 'neutral'} /></div>
              {selectedTabletState?.reason && <p className="text-xs leading-5 text-[var(--secondary)]">{selectedTabletState.reason}</p>}
              <p className="text-xs text-[var(--secondary)]">{selectedCanRotate ? `Rotatable · facing ${directionLabel[selectedRotation]}` : 'Fixed orientation'}</p>
              <div className="space-y-2"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]">Tablet effects</p>{selectedTabletRule.effects.map((effect, index) => <div key={index} className="flex items-center justify-between gap-3 text-xs"><span className="text-[var(--secondary)]">{formatEffect(effect)}</span><span className="text-[var(--muted)]">{selectedTabletState?.effectCells?.length ?? 0} cells</span></div>)}</div>
              <div className="grid grid-cols-2 gap-2 text-xs"><div className="border border-cyan-200/15 bg-cyan-100/[0.025] p-2.5"><p className="text-[var(--muted)]">Condition Cells</p><p className="mt-1 font-semibold text-cyan-100">{selectedTabletState?.conditionCells?.length ?? 0}</p></div><div className="border border-amber-200/15 bg-amber-100/[0.035] p-2.5"><p className="text-[var(--muted)]">Effect Cells</p><p className="mt-1 font-semibold text-amber-100">{selectedTabletState?.effectCells?.length ?? 0}</p></div></div>
            </div>}

            {!selectedPlacement && selectedItem.itemKind !== 'Artifact' && selectedItem.itemKind !== 'Tablet' && selectedItem.displayDescription && <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">{selectedItem.displayDescription}</p>}
          </>}
        </Panel>
      </div>

      <Panel title="Item Picker" className="min-w-0">
        <p className="mt-1 text-xs text-[var(--secondary)]">Choose from the current 419-item Sephiria database.</p>
        <div className="mt-4 flex items-center gap-2 border border-[var(--gold-border)]/25 bg-[var(--wiki-page-bg)] px-3">
          <Search size={16} className="shrink-0 text-[var(--muted)]" />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name or category" aria-label="Search items by name or category" className="min-h-11 min-w-0 flex-1 bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]" />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5" role="tablist" aria-label="Item types">
          {tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={selectedTab === tab} onClick={() => { setSelectedTab(tab); if (tab !== 'Artifact' && tab !== 'All') setCategory(''); }} className={`min-h-9 border px-2.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)] ${selectedTab === tab ? 'border-[var(--orange-text)]/70 bg-[var(--orange)]/10 text-[var(--heading)]' : 'border-[var(--gold-border)]/20 text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.05]'}`}>{tab === 'Item' ? 'Other' : tab}<span className="ml-1.5 text-[10px] text-[var(--muted)]">{itemCounts[tab]}</span></button>)}
          <button type="button" role="tab" aria-selected={selectedTab === 'All'} onClick={() => setSelectedTab('All')} className={`min-h-9 border px-2.5 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)] ${selectedTab === 'All' ? 'border-[var(--orange-text)]/70 bg-[var(--orange)]/10 text-[var(--heading)]' : 'border-[var(--gold-border)]/20 text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.05]'}`}>All<span className="ml-1.5 text-[10px] text-[var(--muted)]">{itemCounts.All}</span></button>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {(selectedTab === 'Artifact' || selectedTab === 'All') && <label className="block text-[10px] font-semibold text-[var(--secondary)]">Category<select value={category} onChange={(event) => setCategory(event.target.value)} className="mt-1 block min-h-9 w-full border border-[var(--gold-border)]/20 bg-[var(--wiki-page-bg)] px-2 text-xs text-[var(--text)]"><option value="">All categories</option>{plannerCategories.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>}
          <label className="block text-[10px] font-semibold text-[var(--secondary)]">Rarity<select value={rarity} onChange={(event) => setRarity(event.target.value)} className="mt-1 block min-h-9 w-full border border-[var(--gold-border)]/20 bg-[var(--wiki-page-bg)] px-2 text-xs text-[var(--text)]"><option value="">All rarities</option>{rarityOrder.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
        </div>
        <label className="mt-3 inline-flex cursor-pointer items-center gap-2 text-xs text-[var(--secondary)]"><input type="checkbox" checked={bondOnly} onChange={(event) => setBondOnly(event.target.checked)} className="size-4 accent-amber-400" />Bond only</label>
        <p className="mt-3 text-[11px] text-[var(--muted)]">Showing {visibleItems.length} of {plannerItems.length}</p>
        <div className={`${styles.pickerScroll} mt-2 border-t border-[var(--gold-border)]/15 pt-3`}>
          {visibleItems.length === 0 ? <p className="px-2 py-8 text-center text-sm text-[var(--muted)]">No items match these filters.</p> : <div className={styles.pickerGrid}>
            {visibleItems.map((item) => {
              const tabletRule = item.itemKind === 'Tablet' ? plannerTabletRulesById.get(item.id) : null;
              const isPending = pendingItemId === item.id;
              const itemSummary = item.itemKind === 'Tablet' && tabletRule
                ? `${tabletRule.rotation.canRotate ? 'Rotatable' : 'Fixed'} · ${tabletRule.effects.map(formatEffect).slice(0, 2).join(', ')}`
                : item.categories.slice(0, 2).join(' · ');
              return <button key={item.id} type="button" className={styles.pickerCard} data-selected={isPending} aria-pressed={isPending} onClick={() => chooseItem(item.id)}>
                <Image src={item.image.src} alt="" width={40} height={40} loading="lazy" className={styles.pickerImage} />
                <span className={styles.pickerCardText}>
                  <span className="block break-words text-xs font-semibold leading-4 text-[var(--heading)]">{item.displayName}</span>
                  <span className="mt-1 block text-[10px] text-[var(--gold-label)]">{item.rarity}{item.isBondItem ? ' · Bond' : ''}</span>
                  {itemSummary && <span className="mt-1 block line-clamp-2 text-[10px] leading-4 text-[var(--muted)]">{itemSummary}</span>}
                </span>
              </button>;
            })}
          </div>}
        </div>
      </Panel>
    </div>
  </div>;
}
