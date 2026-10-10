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
    origin: 'border-[#e5c17e] bg-[#dca464]/25 text-[#fff2df]',
    positive: 'border-[#79c7a0]/60 bg-[#79c7a0]/15 text-[#c4efd2]',
    negative: 'border-[#ff8662]/60 bg-[#ff7043]/15 text-[#ffc0aa]',
    neutral: 'border-white/15 bg-white/[0.04] text-[#bdc6c5]',
  };
  const cellDescription = pattern.map((cell) => `Row ${cell.y - minY + 1}, column ${cell.x - minX + 1}: ${cell.kind === 'origin' ? 'tablet' : cell.label ?? cell.value ?? 'affected'}`).join('; ');
  const large = width > 7;
  return <figure className="block min-w-0 max-w-full">
    <div aria-hidden="true" className={`grid max-w-full ${large ? 'gap-px' : 'gap-1'}`} style={{ width: `${width * 3}rem`, gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`, transform: `rotate(${rotation}deg)` }}>
    {Array.from({ length: width * height }, (_, index) => {
      const x = index % width + minX, y = Math.floor(index / width) + minY;
      const cell = pattern.find((item) => item.x === x && item.y === y);
      return <div key={`${x},${y}`} className={`flex aspect-square min-w-0 items-center justify-center border ${large ? 'text-[10px] sm:text-xs' : 'text-xs'} font-semibold ${cell ? colors[cell.kind] : 'border-transparent bg-transparent'}`}>{cell?.kind === 'origin' ? '●' : cell?.label ?? cell?.value ?? ''}</div>;
    })}
    </div>
    <figcaption className="mt-2 text-xs text-[#bdc6c5]">● Tablet<span className="sr-only">. {label}. {cellDescription}</span></figcaption>
  </figure>;
}
