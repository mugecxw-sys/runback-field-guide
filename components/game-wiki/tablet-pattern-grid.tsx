export type TabletPatternCell = {
  x: number;
  y: number;
  kind: 'origin' | 'positive' | 'negative' | 'neutral';
  value?: number;
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
  const cellDescription = pattern.map((cell) => `${cell.kind}${cell.value == null ? '' : ` ${cell.value > 0 ? '+' : ''}${cell.value}`} at ${cell.x}, ${cell.y}`).join('; ');
  return <figure className="inline-block max-w-full">
    <div aria-hidden="true" className="inline-grid max-w-full gap-1" style={{ gridTemplateColumns: `repeat(${width}, minmax(2.25rem, 3rem))`, transform: `rotate(${rotation}deg)` }}>
    {Array.from({ length: width * height }, (_, index) => {
      const x = index % width + minX, y = Math.floor(index / width) + minY;
      const cell = pattern.find((item) => item.x === x && item.y === y);
      return <div key={`${x},${y}`} className={`flex aspect-square min-w-0 items-center justify-center border text-xs font-semibold ${cell ? colors[cell.kind] : 'border-transparent bg-transparent'}`}>{cell?.kind === 'origin' ? '●' : cell?.value ?? ''}</div>;
    })}
    </div>
    <figcaption className="sr-only">{label}, rotated {rotation} degrees. {cellDescription}</figcaption>
  </figure>;
}
