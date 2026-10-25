'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import layout from '@/lib/sephiria-builds/sns-01-layout.json';
import styles from './sephiria-build-layout.module.css';

const directionArrows: Record<string, string> = {
  UP: '↑',
  LEFT: '←',
  DOWN: '↓',
  RIGHT: '→',
};

function signed(value: number) {
  return `${value >= 0 ? '+' : '−'}${Math.abs(value)}`;
}

export function SephiriaBuildLayout() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const detailsRef = useRef<HTMLElement>(null);
  const selected = layout.cells.find((cell) => cell.slot === selectedSlot);
  const lockedCells =
    Math.ceil(layout.activeSlots / layout.columns) * layout.columns -
    layout.activeSlots;

  useEffect(() => {
    if (
      selectedSlot !== null &&
      window.matchMedia('(max-width: 640px)').matches
    ) {
      detailsRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedSlot]);

  return (
    <div className={styles.layout}>
      <fieldset className={styles.grid} aria-label="SNS-01 inventory layout">
        {layout.cells.map((cell) => (
          <button
            key={cell.slot}
            type="button"
            className={`${styles.cell} ${cell.kind === 'Tablet' ? styles.tablet : ''} ${selectedSlot === cell.slot ? styles.selected : ''}`}
            aria-label={`${cell.name}, ${cell.kind === 'Tablet' ? `Tablet, facing ${cell.rotation?.toLowerCase()}` : `Lv${cell.effectiveLevel}`}`}
            aria-expanded={selectedSlot === cell.slot}
            aria-controls="sns01-layout-details"
            title={
              cell.kind === 'Artifact'
                ? `${cell.name} · Base Lv1 ${signed(cell.tabletBonus ?? 0)} Tablet → Lv${cell.effectiveLevel}\nCombo: ${cell.categories?.join(', ')}`
                : `${cell.name} · Tablet\n${cell.patterns?.join('\n')}`
            }
            onClick={() => setSelectedSlot(cell.slot)}
          >
            <Image
              src={cell.image.src}
              alt=""
              width={cell.image.width}
              height={cell.image.height}
              className={styles.icon}
              unoptimized
            />
            <span className={styles.name}>{cell.name}</span>
            <span className={styles.level}>
              {cell.kind === 'Tablet'
                ? `Tablet ${directionArrows[cell.rotation ?? 'UP']}`
                : `Lv${cell.effectiveLevel}`}
            </span>
          </button>
        ))}
        {Array.from({ length: lockedCells }, (_, index) => (
          <div
            key={`locked-${index}`}
            className={styles.locked}
            aria-label="Locked slot"
          >
            <span aria-hidden="true">×</span>
          </div>
        ))}
      </fieldset>

      <aside className={styles.summary}>
        <div className={styles.legend}>
          <span>◇ Artifact</span>
          <span className={styles.tabletLabel}>▤ Tablet</span>
        </div>
        <p className={styles.intro}>
          Artifacts start at Lv1. Tablets supply the level bonuses shown here.
        </p>
        <h3>Final Build</h3>
        <div className={styles.combos}>
          {layout.comboCounts.map((combo) => (
            <span key={combo.name}>
              {combo.name} <strong>{combo.count}</strong>
            </span>
          ))}
        </div>
        <h3>Core Targets</h3>
        <ul className={styles.targets}>
          {layout.coreTargets.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <strong>Lv{item.effectiveLevel}</strong>
            </li>
          ))}
        </ul>
        <p className={styles.hint}>
          Select a slot to see its level breakdown or Tablet coverage.
        </p>
      </aside>

      {selected && (
        <section
          id="sns01-layout-details"
          ref={detailsRef}
          className={styles.details}
          aria-live="polite"
          aria-label="Selected layout item"
        >
          <div className={styles.detailHeading}>
            <h3>{selected.name}</h3>
            <button
              type="button"
              onClick={() => setSelectedSlot(null)}
              aria-label="Close item details"
            >
              ×
            </button>
          </div>
          {selected.kind === 'Artifact' ? (
            <>
              <p className={styles.equation}>
                Base Lv1{' '}
                <span>{signed(selected.tabletBonus ?? 0)} from Tablets</span> ={' '}
                <strong>Effective Lv{selected.effectiveLevel}</strong>
              </p>
              {(selected.rawLevel ?? 0) > (selected.effectiveLevel ?? 0) && (
                <p>Limited by this Artifact’s maximum level.</p>
              )}
              <p>Combo: {selected.categories?.join(' / ') || 'None'}</p>
              <ul className={styles.contributors}>
                {selected.contributors?.map((source) => (
                  <li key={source.name}>
                    {source.name} <strong>{signed(source.value)}</strong>
                  </li>
                ))}
              </ul>
              {selected.requirement && (
                <p className={styles.requirement}>
                  Activation: {selected.requirement}
                </p>
              )}
            </>
          ) : (
            <>
              <p className={styles.tabletLabel}>
                Tablet · Facing {selected.rotation?.toLowerCase()}
              </p>
              <h4>Upgrade Pattern</h4>
              <ul className={styles.patterns}>
                {selected.patterns?.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
              <h4>Affected Artifacts</h4>
              <ul className={styles.affected}>
                {selected.affectedArtifacts?.map((item) => (
                  <li key={item.slot}>
                    {item.name} <strong>{signed(item.bonus)}</strong>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}
    </div>
  );
}
