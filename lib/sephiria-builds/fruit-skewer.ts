export type FruitSelection = { category: string; fruit: string; quantity: number };
export type FruitSkewer = { selections: FruitSelection[]; totalSlots: number };
export function validateFruitSkewer(skewer: FruitSkewer, targets: string[] = []): string[] {
  const errors: string[] = [];
  if (!Array.isArray(skewer.selections) || skewer.selections.some(x => !x.category || !x.fruit || !Number.isInteger(x.quantity) || x.quantity < 1)) return ['INVALID_FRUIT_SELECTION'];
  if (skewer.selections.reduce((n, x) => n + x.quantity, 0) !== skewer.totalSlots) errors.push('FRUIT_SKEWER_TOTAL_MISMATCH');
  const categories = skewer.selections.map(x => x.category);
  if (targets.includes('Storm Cloud') && targets.includes('Companion') && (!categories.includes('Storm Cloud') || !categories.includes('Companion') || categories.some(x => ['Sturdy', 'Wind Song', 'Precision'].includes(x)))) errors.push('FRUIT_SKEWER_BUILD_MISMATCH');
  return errors;
}
