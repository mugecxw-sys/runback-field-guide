export type TabletPatternCell = {
  x: number;
  y: number;
  kind: 'origin' | 'positive' | 'negative' | 'neutral';
  value?: number;
  label?: string;
};

export function TabletPatternGrid({ pattern, rotation = 0, label = 'Tablet pattern' }: { pattern?: TabletPatternCell[] | null; rotation?: 0 | 90 | 180 | 270; label?: string }) {
  if (!pattern?.length) return null;
  const xs = pattern.map((cell) => cell.x);
  const ys = pattern.map((cell) => cell.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const width = maxX - minX + 1, height = maxY - minY + 1;
  const colors = {
    origin: 'border-[var(--gold-detail)] bg-[var(--gold-label)]/25 text-[var(--heading)]',
    positive: 'border-[var(--success)]/60 bg-[var(--success)]/15 text-[var(--success-bright)]',
    negative: 'border-[var(--orange-text)]/60 bg-[var(--orange)]/15 text-[var(--orange-soft)]',
    neutral: 'border-[var(--neutral-edge)]/15 bg-[var(--neutral-wash)]/[0.04] text-[var(--secondary)]',
  };
  const cellDescription = pattern.map((cell) => `Row ${cell.y - minY + 1}, column ${cell.x - minX + 1}: ${cell.kind === 'origin' ? 'tablet' : cell.label ?? cell.value ?? 'affected'}`).join('; ');
  const large = width > 7;
  return <figure className="mx-auto block w-fit min-w-0 max-w-full">
    <div aria-hidden="true" className={`mx-auto grid max-w-full ${large ? 'gap-px' : 'gap-1'}`} style={{ width: `calc(${width * 2.125}rem + ${(width - 1) * (large ? 1 : 4)}px)`, gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`, transform: `rotate(${rotation}deg)` }}>
    {Array.from({ length: width * height }, (_, index) => {
      const x = index % width + minX, y = Math.floor(index / width) + minY;
      const cell = pattern.find((item) => item.x === x && item.y === y);
      return <div key={`${x},${y}`} className={`flex aspect-square min-w-0 items-center justify-center border ${large ? 'text-[10px] sm:text-xs' : 'text-xs'} font-semibold ${cell ? colors[cell.kind] : 'border-transparent bg-transparent'}`}>{cell?.kind === 'origin' ? '●' : cell?.label ?? cell?.value ?? ''}</div>;
    })}
    </div>
    <figcaption className="mt-2 text-xs text-[var(--secondary)]">● Tablet<span className="sr-only">. {label}. {cellDescription}</span></figcaption>
  </figure>;
}
