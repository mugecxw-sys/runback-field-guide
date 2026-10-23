'use client';

import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { ChevronDown, Search, Swords } from 'lucide-react';
import { sephiriaWeaponRoots, sephiriaWeaponTree, type SephiriaWeaponTreeNode } from '@/lib/sephiria-weapon-tree';
import { SephiriaRecordImageView } from './sephiria-record-image';
import styles from './sephiria-weapon-tree.module.css';

const nodeByKey = new Map(sephiriaWeaponTree.map((node) => [node.key, node]));
const normalize = (value: string) => value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const subscribeMobile = (notify: () => void) => {
  const media = window.matchMedia('(max-width: 639px)');
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};
const isMobile = () => window.matchMedia('(max-width: 639px)').matches;
const serverMobile = () => false;

function UpgradeNode({ node, initiallyOpen = false }: { node: SephiriaWeaponTreeNode; initiallyOpen?: boolean }) {
  const [expanded, setExpanded] = useState(initiallyOpen);
  const detailId = useId();
  return <div id={node.slug} data-upgrade={node.slug} data-stage={node.depth} className={styles.node}>
    <button type="button" className={styles.nodeButton} aria-expanded={expanded} aria-controls={detailId} onClick={() => setExpanded(!expanded)}>
      <SephiriaRecordImageView image={node.image} icon={Swords} size="compact" />
      <span className={styles.nodeLabel}><span className={styles.stage}>{node.depth === 1 ? 'First Upgrade' : 'Second Upgrade'}</span><span className={styles.nodeName}>{node.name}</span></span>
      <ChevronDown aria-hidden="true" className={`${styles.chevron} ${expanded ? styles.rotated : ''}`} />
    </button>
    {expanded && <div id={detailId} className={styles.nodeDetails}>
      {node.effectCurrent && <div><h4>Effect</h4><p>{node.effectCurrent}</p></div>}
      {node.mechanicCurrent && <div><h4>Mechanic</h4><p>{node.mechanicCurrent}</p></div>}
    </div>}
  </div>;
}

export function SephiriaWeaponTree() {
  const [activeKey, setActiveKey] = useState(sephiriaWeaponRoots[0].key);
  const [query, setQuery] = useState('');
  const [expandedBranches, setExpandedBranches] = useState<Set<string>>(() => new Set([sephiriaWeaponRoots[0].children[0]]));
  const [anchorNode, setAnchorNode] = useState<string | null>(null);
  const mobile = useSyncExternalStore(subscribeMobile, isMobile, serverMobile);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const root = nodeByKey.get(activeKey)!;
  const firstUpgrades = root.children.map((key) => nodeByKey.get(key)!);
  const secondCount = firstUpgrades.reduce((count, node) => count + node.children.length, 0);
  const normalizedQuery = normalize(query);
  const matches = useMemo(() => normalizedQuery ? sephiriaWeaponTree.filter((node) => node.depth > 0 && normalize([node.name, node.weapon, node.effectCurrent, node.mechanicCurrent].filter(Boolean).join(' ')).includes(normalizedQuery)) : [], [normalizedQuery]);

  useEffect(() => {
    const followHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const targetRoot = sephiriaWeaponRoots.find((node) => node.weaponAnchor === hash);
      const targetNode = sephiriaWeaponTree.find((node) => node.depth > 0 && node.slug === hash);
      if (targetRoot) { setActiveKey(targetRoot.key); setQuery(''); }
      if (targetNode) {
        const owningRoot = sephiriaWeaponRoots.find((node) => node.weaponAnchor === targetNode.weaponAnchor)!;
        setActiveKey(owningRoot.key); setQuery(''); setAnchorNode(targetNode.key);
        setExpandedBranches(new Set([targetNode.depth === 1 ? targetNode.key : targetNode.parent!]));
      }
    };
    followHash();
    window.addEventListener('hashchange', followHash);
    return () => window.removeEventListener('hashchange', followHash);
  }, []);

  useEffect(() => {
    if (!anchorNode) return;
    const frame = requestAnimationFrame(() => document.getElementById(nodeByKey.get(anchorNode)!.slug)?.scrollIntoView({ block: 'center' }));
    return () => cancelAnimationFrame(frame);
  }, [anchorNode, activeKey]);

  function chooseTab(index: number, focus = false) {
    const selected = sephiriaWeaponRoots[index];
    setActiveKey(selected.key); setAnchorNode(null); setQuery(''); setExpandedBranches(new Set([selected.children[0]]));
    window.history.replaceState(null, '', `#${selected.weaponAnchor}`);
    if (focus) { tabRefs.current[index]?.focus(); tabRefs.current[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  }

  return <section id="weapon-upgrade-tree" aria-label="Weapon upgrade tree" className={styles.tree}>
    <label className={styles.search}>
      <Search aria-hidden="true" size={18} /><span className="sr-only">Search upgrades</span>
      <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search upgrades" />
    </label>
    <div role="tablist" aria-label="Choose a weapon" className={styles.tabs}>
      {sephiriaWeaponRoots.map((weapon, index) => <button key={weapon.key} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`tab-${weapon.weaponAnchor}`} aria-selected={activeKey === weapon.key && !normalizedQuery} aria-controls={`panel-${weapon.weaponAnchor}`} tabIndex={activeKey === weapon.key ? 0 : -1} className={styles.tab} onClick={() => chooseTab(index)} onKeyDown={(event) => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % sephiriaWeaponRoots.length;
        else if (event.key === 'ArrowLeft') next = (index + sephiriaWeaponRoots.length - 1) % sephiriaWeaponRoots.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = sephiriaWeaponRoots.length - 1;
        else return;
        event.preventDefault(); chooseTab(next, true);
      }}>{weapon.name}</button>)}
    </div>
    {normalizedQuery ? <div className={styles.results} aria-label="Upgrade search results">
      <div className={styles.resultHeading}><h2>Search results</h2><output aria-live="polite">{matches.length} matching upgrades</output></div>
      {matches.length === 0 && <p>No matching upgrades. Try a weapon name or effect.</p>}
      {matches.map((node) => {
        const parent = node.parent ? nodeByKey.get(node.parent) : undefined;
        return <article key={node.key} className={styles.searchResult}><p className={styles.path}>{node.weapon}{node.depth === 2 && parent ? ` → ${parent.name}` : ''} → <strong>{node.name}</strong></p><UpgradeNode node={node} /></article>;
      })}
    </div> : <div role="tabpanel" id={`panel-${root.weaponAnchor}`} aria-labelledby={`tab-${root.weaponAnchor}`} tabIndex={0} className={styles.panel} key={root.key}>
      <div id={root.weaponAnchor} className={styles.root}>
        <SephiriaRecordImageView image={root.image} icon={Swords} />
        <div><p className={styles.stage}>Base Weapon</p><h2>{root.name}</h2><p className={styles.counts}>{firstUpgrades.length} first upgrades · {secondCount} second upgrades<span> · {firstUpgrades.length + secondCount} total upgrades</span></p></div>
      </div>
      <p className={styles.hint}>{mobile ? 'Open a branch to see its second upgrades. Tap any upgrade for its effects.' : 'Each branch leads from a first upgrade to its second upgrades. Select an upgrade for its effects.'}</p>
      <div className={styles.branches}>
        {firstUpgrades.map((first) => {
          const open = !mobile || expandedBranches.has(first.key);
          const childrenId = `children-${first.slug}`;
          return <article key={first.key} data-branch={first.slug} className={styles.branch}>
            <UpgradeNode key={`${first.key}-${anchorNode === first.key}`} node={first} initiallyOpen={anchorNode === first.key} />
            <button type="button" className={styles.branchToggle} disabled={!mobile} aria-expanded={open} aria-controls={childrenId} onClick={() => setExpandedBranches((previous) => {
              const next = new Set(previous);
              if (open) next.delete(first.key); else next.add(first.key);
              return next;
            })}>{first.children.length} second upgrades<ChevronDown aria-hidden="true" className={`${styles.chevron} ${open ? styles.rotated : ''}`} /></button>
            {open && <div id={childrenId} className={styles.children}>
              {first.children.map((child) => <UpgradeNode key={`${child}-${anchorNode === child}`} node={nodeByKey.get(child)!} initiallyOpen={anchorNode === child} />)}
            </div>}
          </article>;
        })}
      </div>
    </div>}
  </section>;
}
