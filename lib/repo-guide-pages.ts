import extraGuides from './repo-extra-guides.json';
export const siteUrl = 'https://roguelikegame.org';
export const guidePublishedAt = '2026-09-06T00:00:00.000Z';

export type GuideSource = { label: string; href: string };

export type RepoGuidePage = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  description: string;
  lead: string;
  steps: string[];
  mistakes: string;
  versionNote: string;
  sources: GuideSource[];
  publishedAt?: string;
  updatedAt?: string;
  noindex?: boolean;
};

export function guideSortDate(guide: RepoGuidePage) {
  return guide.updatedAt ?? guide.publishedAt ?? guidePublishedAt;
}

export type RepoGuideSection = {
  id: string;
  title: string;
  description: string;
  guideIds: string[];
};

export type RepoInternalLinkRule = {
  targetId: string;
  terms: string[];
};

// These are the first ten field guides with a stable, crawlable article URL.
// Keep mechanics, exact values, and enemy behaviours version-checked before editing.
export const repoGuidePages: RepoGuidePage[] = [
  {
    id: 'P0-1',
    slug: 'first-run-guide',
    tag: 'FIRST RUN',
    title: 'R.E.P.O. first run guide: from first loot to leaving',
    description:
      'A practical R.E.P.O. first-run checklist: learn controls, stage loot, meet quota, extract, and choose the next upgrade.',
    lead: 'Learn how to handle an object, find a short route to the C.A.R.T., meet the displayed quota, finish extraction, and return to the truck. The next level can change the layout and required points.',
    steps: [
      'Use the tutorial or Controls menu to practice grabbing, rotating, and setting down a low-value object. Locate the truck, C.A.R.T., and the first extraction point before carrying farther.',
      'Start with a nearby intact valuable that fits through the known doorways. Place it in the cart without letting it scrape a wall or block the return lane.',
      'Compare the cart value with the displayed quota. Put the full load inside the extraction boundary and wait for the point to register; check whether another point is required.',
      'After extraction resolves, return to the truck and follow its leave prompt. At the Service Station, compare the available purchase with the problem that slowed or ended the run.',
      'On the next level, read the new layout, extraction points, nearby loot, and threats before reusing the last route.',
    ],
    mistakes:
      'Loading an item that cannot pass the next doorway, mistaking cart value for a completed extraction point, or assuming the next level has the same return path.',
    versionNote:
      'This page uses the R.E.P.O. v0.4.x period as its baseline. Recheck in-game prompts after every major patch.',
    sources: [
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
      {
        label: 'R.E.P.O. Steam community',
        href: 'https://steamcommunity.com/app/3241660?l=english',
      },
    ],
  },
  {
    id: 'P0-2',
    slug: 'meet-quota',
    tag: 'QUOTA',
    title: 'How to meet quota in R.E.P.O.',
    description:
      'Meet quota in R.E.P.O. by reading the HUD, protecting easy valuables, completing extraction points, and leaving once the run is safe.',
    lead: 'Read the required value and point count on the current HUD. Cart value is a load check; an extraction point counts only after the valuables are inside its boundary and the point resolves.',
    steps: [
      'Read the displayed quota and required extraction points before choosing which known valuables to carry.',
      'Compare the remaining value gap with nearby intact items; use the C.A.R.T. for a load you can actually move through the route.',
      'Place every valuable fully inside the extraction boundary and wait for the point to register. Check the HUD again before seeking another item or point.',
      'Once the required quota and points are complete, follow the extraction sequence and truck departure steps in the separate extraction guide.',
    ],
    mistakes:
      'Counting an item still in the cart as extracted, leaving part of it outside the boundary, or overlooking a remaining required point.',
    versionNote:
      'Exact quota formulas can vary with map and multiplayer conditions. Use the current HUD as the authority for your run.',
    sources: [
      {
        label: 'Steam discussion: over quota but cannot leave',
        href: 'https://steamcommunity.com/app/3241660/discussions/0/595142635298030173/',
      },
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
    ],
  },
  {
    id: 'P0-3',
    slug: 'extraction-guide',
    tag: 'EXTRACTION',
    title: 'How to Extract in R.E.P.O.: What to Do After Reaching Quota',
    description:
      'Reached quota in R.E.P.O.? Extraction starts automatically. Finish extraction, return to the truck, and leave—no separate extraction point or start button.',
    lead: "Once you reach the required quota, Extraction starts automatically. You do not need to find a separate Extraction Point or press another button to start it. Wait for the extraction sequence to finish, return to the truck, then use the truck's leave control to finish the sequence.",
    steps: [
      'Reach the required quota.',
      'Extraction starts automatically.',
      'Wait for Extraction to complete.',
      'Return to the truck.',
      'Leave from the truck.',
    ],
    mistakes:
      'You do not need to search for another Extraction Point, manually activate Extraction, or press a separate extraction-start button after quota has been satisfied.',
    versionNote:
      'R.E.P.O. is an Early Access game, so UI and mechanics can change. This guide does not claim untested failure conditions, multiplayer-only differences, timer behavior, or exact input bindings.',
    sources: [
      {
        label: 'R.E.P.O. extraction after reaching quota and returning to the truck',
        href: 'https://youtu.be/Fytce0ossj0',
      },
    ],
    publishedAt: guidePublishedAt,
    updatedAt: '2026-09-15T00:00:00.000Z',
  },
  {
    id: 'P0-4',
    slug: 'upgrade-priority',
    tag: 'UPGRADES',
    title: 'R.E.P.O. upgrade and shop priority: what to buy or save',
    description:
      'Choose R.E.P.O. upgrades and shop purchases by the problem that ended the previous run, and know when saving is the better call.',
    lead: 'At the Service Station, compare the actual offers with the last run. Strength addresses a slow or awkward carry; Stamina addresses exhausted movement; Health can absorb a repeated hit; Range can change an unsafe pickup. Save when the shelf offers no useful change or a purchase would leave no basic recovery option.',
    steps: [
      'If a known valuable repeatedly stalls at a doorway, compare Strength or a carrying option with a shorter cart route before buying movement speed.',
      'If the carrier runs out of actions or escape reserve on the same route, consider Stamina. If otherwise workable runs end after damage, consider Health; if unsafe interaction distance is the problem, compare Range.',
      'For a specific blocked route or enemy, buy a relevant available tool only when someone will carry and use it. Read the current shop description and price.',
      'Save when the shelf does not solve the named failure or buying would remove a basic recovery option. Recheck the same failure next run rather than changing several purchases at once.',
    ],
    mistakes:
      'Buying Range without a safer pickup angle, assigning no user to a team tool, or copying a purchase order when the shop offers different items.',
    versionNote:
      'Prices, upgrade pools, and availability are version-sensitive. This page explains decision logic rather than a permanent purchase order.',
    sources: [
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
      {
        label: 'Steam community upgrade guide',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3482961802&l=english',
      },
    ],
  },
  {
    id: 'P0-6',
    slug: 'strength-upgrade-breakpoints',
    tag: 'STRENGTH',
    title: 'R.E.P.O. Strength Upgrade Testing: Finding Carry Thresholds',
    description:
      'A repeatable way to check whether another Strength level changes what your crew can lift and deliver; no unverified breakpoint chart.',
    lead: 'The repo has no verified Strength breakpoint numbers. To find a useful threshold, compare the same object, crew size, doorway, and route before and after one Strength upgrade.',
    steps: [
      'Record the game version, Strength level, player count, object, and route before buying another level.',
      'Test whether the object can be lifted, carried through the same doorway, and delivered. Repeat after the upgrade with the same crew and path.',
      'Report the changed observation with its conditions; do not generalize one item result to monsters or every valuable.',
    ],
    mistakes:
      'Writing that one threshold moves everything, mixing monster and item behaviour, and treating community numbers as current official data.',
    versionNote:
      'Community strength charts are useful for hypotheses, not proof. Re-test after physics or enemy-balance changes.',
    noindex: true,
    sources: [
      {
        label: 'Steam community guide',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3482961802&l=english',
      },
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
    ],
  },
  {
    id: 'P0-7',
    slug: 'monster-first-response',
    tag: 'ENEMIES',
    title: 'R.E.P.O. monsters: identify the trigger before you fight',
    description:
      'A first-response system for R.E.P.O. monsters: identify sight, sound, proximity, or special triggers, then protect the escape route.',
    lead: 'Set down loot without blocking the retreat lane, identify whether the threat reacts to sight, sound, proximity, or contact, then use the matching dossier in the Enemy Index.',
    steps: [
      'Call the enemy and direction, and put carried loot somewhere recoverable outside the return lane.',
      'Check its trigger in the Enemy Index: break sight with solid cover for a gaze threat, reduce noise for a sound threat, or create distance from a proximity or contact threat.',
      'Use the individual dossier for a counter before committing a weapon or valuable to the encounter.',
    ],
    mistakes:
      'Treating a sound trigger like a sight trigger, or blocking the only retreat doorway with the carried item.',
    noindex: true,
    versionNote:
      'Enemy rosters, damage, and specific counters change. Keep only current, reproducible behavior in a quick reference.',
    sources: [
      {
        label: 'Steam Tactical Bestiary',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3456545585',
      },
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
    ],
  },
  {
    id: 'P0-8',
    slug: 'shadow-child-guide',
    tag: 'ENEMIES',
    title: 'R.E.P.O. Shadow Child guide: hear the laugh, then look away',
    description:
      'A conservative R.E.P.O. Shadow Child response: identify the cue briefly, look away, create space, and keep the route to your team open.',
    lead: 'A giggle and dark child-shaped silhouette signal Shadow Child. Use a short glance to locate it, then look away and leave a clear retreat lane. The Enemy Index contains the same behavior and counter in its dossier.',
    steps: [
      'Use the sound cue or a brief glance to locate it without prolonged eye contact.',
      'Look away and move toward an open route; set down a large object if it blocks that route.',
      'Use the Shadow Child dossier in the Enemy Index for the recognition cue and current counter.',
    ],
    mistakes:
      'Prolonged eye contact while trying to identify it, or blocking the retreat with a carried object.',
    noindex: true,
    versionNote:
      'This page keeps its advice behavioral until current-client footage verifies any timing, damage, or collision claim.',
    sources: [
      {
        label: 'Steam enemy dossier',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3582710295',
      },
      {
        label: 'Steam Tactical Bestiary',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3456545585',
      },
    ],
  },
  {
    id: 'P0-9',
    slug: 'rugrat-guide',
    tag: 'ENEMIES',
    title: 'R.E.P.O. Rugrat guide: protect the valuables first',
    description:
      'When Rugrat threatens R.E.P.O. loot, secure valuables and the route first; only then decide whether controlling it is worth the risk.',
    lead: 'Rugrat reaches for valuables and can throw them. Move fragile loot out of reach before deciding whether to avoid it or use the coordinated counter in the Enemy Index dossier.',
    steps: [
      'Move nearby valuables out of its reach and keep players clear of the thrown-item line.',
      'If it blocks the route, use the Rugrat dossier in the Enemy Index for the counter; otherwise carry by a different path.',
    ],
    mistakes:
      'Leaving fragile loot in reach or standing together in the path of a thrown object.',
    noindex: true,
    versionNote:
      'Throw timing, damage, and multiplayer behaviour need current-version verification before adding fixed values.',
    sources: [
      {
        label: 'Steam Tactical Bestiary',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3456545585',
      },
      {
        label: 'Steam enemy dossier',
        href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3582710295',
      },
    ],
  },
];

repoGuidePages.push(...extraGuides);
repoGuidePages.push({
  id: 'CART',
  slug: 'cart-guide',
  tag: 'MECHANICS',
  title: 'R.E.P.O. C.A.R.T. guide: load, move and protect your loot',
  description:
    'Use the C.A.R.T. to consolidate manageable valuables, check the loaded value and reduce repeat trips. Keep the entire load inside the extraction boundary.',
  lead: 'The cart is transport, not proof that quota is complete. Plan its route before loading it, and keep a clear lane for the return.',
  steps: [
    'Choose a staging spot near the rooms but outside the likely enemy route, with doors and the return lane kept accessible.',
    'Prioritize each valuable by its value, fragility, distance and number of hands needed. Practice grabbing, rotating and gently placing a low-value object first; check that carted items do not scrape a wall or stick out.',
    'Use the cart’s value display to track the load, then compare it with the current objective. Uncollected items elsewhere do not solve the immediate extraction.',
    'Rotate objects before tight turns, approach corners slowly and use a second player for heavy or awkward pieces. If the load becomes unstable, stop and reposition one object rather than dragging everything through the obstruction.',
    'At extraction, check the whole load is inside the boundary. Step away while it resolves, then check the remaining objectives before returning.',
  ],
  mistakes:
    'Packing the cart so full that the next doorway becomes the most dangerous part of the run.',
  versionNote:
    'Conservative transport advice. Follow the current extraction prompt; this is not a cart-weight or upgrade-stat table.',
  sources: [
    {
      label: 'Extraction and cart handling reference',
      href: 'https://dotesports.com/indies/news/how-to-extract-in-r-e-p-o',
    },
  ],
});
export const repoGuideBySlug = Object.fromEntries(
  repoGuidePages.map((guide) => [guide.slug, guide]),
);
export const repoGuidePathById = Object.fromEntries(
  repoGuidePages.map((guide) => [guide.id, `/guides/${guide.slug}`]),
);

export const repoGuideSections: RepoGuideSection[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: 'Start safely and learn the core loop.',
    guideIds: ['P0-1', 'P2-28', 'P2-29', 'P2-30'],
  },
  {
    id: 'mechanics',
    title: 'Mechanics',
    description: 'Quota, extraction, carrying and level objectives.',
    guideIds: ['P0-2', 'P0-3', 'CART', 'P1-20'],
  },
  {
    id: 'upgrades',
    title: 'Upgrades',
    description: 'Choose purchases around your next run.',
    guideIds: ['P0-4', 'P0-6', 'P1-23', 'P2-26'],
  },
  {
    id: 'enemies',
    title: 'Enemies',
    description: 'Recognition, counters and a visual field index.',
    guideIds: ['P0-7', 'P0-8', 'P0-9', 'P1-13', 'P1-14', 'P1-15'],
  },
  {
    id: 'items',
    title: 'Items',
    description: 'Browse useful equipment and tools for a run.',
    guideIds: ['P1-11'],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Co-op planning, routes and version-aware play.',
    guideIds: ['P1-16', 'P1-17', 'P2-24'],
  },
];
export const repoRelatedGuideIds: Record<string, string[]> = {
  'P0-1': ['P0-2', 'P0-3', 'CART', 'P0-4'],
  'P0-2': ['P0-3', 'P0-1', 'P0-4', 'CART'],
  'P0-3': ['P0-2', 'P0-1', 'P0-7', 'CART'],
  'P0-4': ['P0-6', 'P0-1', 'P0-2', 'P0-7'],
  'P0-6': ['P0-4', 'P0-7', 'P0-9', 'CART'],
  'P0-7': ['P0-8', 'P0-9', 'P0-1', 'P0-3'],
  'P0-8': ['P0-7', 'P0-9', 'P0-3'],
  'P0-9': ['P0-7', 'P0-8', 'P0-3'],
  'P1-17': ['P2-30', 'P0-1', 'P0-2', 'P2-28'],
  'P2-28': ['P2-30', 'P2-29', 'P0-2', 'P0-3'],
  'P2-29': ['P2-30', 'P0-1', 'P0-2', 'P2-28'],
  'P2-30': ['P0-1', 'P1-17', 'P2-28', 'P2-29'],
};

for (const guide of repoGuidePages) {
  if (!repoRelatedGuideIds[guide.id]) {
    const section = repoGuideSections.find((s) =>
      s.guideIds.includes(guide.id),
    );
    repoRelatedGuideIds[guide.id] = [
      ...new Set([
        ...(section?.guideIds ?? []),
        'P0-1',
        'P0-2',
        'P0-3',
        'P0-7',
      ]),
    ]
      .filter((id) => id !== guide.id)
      .slice(0, 4);
  }
}
export const repoInternalLinkRules: RepoInternalLinkRule[] = [
  { targetId: 'CART', terms: ['C.A.R.T.', 'cart'] },
  { targetId: 'P0-4', terms: ['Service Station'] },
  { targetId: 'P0-2', terms: ['quota'] },
  { targetId: 'P0-3', terms: ['extraction'] },
  { targetId: 'P0-4', terms: ['upgrades', 'upgrade'] },
];
