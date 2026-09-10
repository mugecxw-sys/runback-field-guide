import { repoGuidePages, repoInternalLinkRules } from './repo-guide-pages';
import { repoEnemies } from './repo-enemies';
const rules = [
  ...repoInternalLinkRules.flatMap((r) => {
    const g = repoGuidePages.find((g) => g.id === r.targetId);
    return g
      ? r.terms.map((term) => ({ term, href: '/guides/' + g.slug }))
      : [];
  }),
  ...repoEnemies.flatMap((e) =>
    [e.name, e.alias].map((term) => ({
      term,
      href: '/games/repo/enemies#' + e.id,
    })),
  ),
];
export function linkRepoText(
  text: string,
  currentHref: string,
  seen: Set<string>,
) {
  const expression = new RegExp(
    '(?<![a-zA-Z0-9])(' +
      [...new Set(rules.map((r) => r.term))]
        .sort((a, b) => b.length - a.length)
        .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|') +
      ')(?![a-zA-Z0-9])',
    'gi',
  );
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(expression)) {
    const rule = rules.find(
      (r) => r.term.toLowerCase() === match[0].toLowerCase(),
    )!;
    if (seen.has(rule.href) || rule.href === currentHref) continue;
    nodes.push(text.slice(last, match.index));
    nodes.push(
      <a
        key={match.index}
        data-context-link
        href={rule.href}
        className="text-[#ff9a7a] underline underline-offset-4"
      >
        {match[0]}
      </a>,
    );
    seen.add(rule.href);
    last = match.index! + match[0].length;
  }
  nodes.push(text.slice(last));
  return nodes;
}
