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
};

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
    title: 'R.E.P.O. first run guide: finish your first run safely',
    description:
      'A practical R.E.P.O. first-run checklist: learn controls, stage loot, meet quota, extract, and choose the next upgrade.',
    lead: 'Your first objective is a clean run, not a perfect map clear. Learn the controls, stage nearby valuables, satisfy quota, then leave with the crew before greed turns a stable run into a wipe.',
    steps: [
      'Use the tutorial or Controls menu to learn movement, grabbing, item rotation, the map, and sprinting.',
      'Find the C.A.R.T. before collecting. Start with nearby intact valuables that can pass through doors.',
      'Create a safe staging point between the rooms and the extraction route.',
      'Watch the quota and required extraction points instead of trying to empty every room.',
      'At the Service Station, buy the upgrade that addresses the failure you actually had.',
    ],
    mistakes:
      'Forcing large valuables through a doorway, letting the whole team roam without a regroup point, and treating a full map clear as the only successful result.',
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
    title: 'How to meet quota in R.E.P.O. before you get greedy',
    description:
      'Meet quota in R.E.P.O. by reading the HUD, protecting easy valuables, completing extraction points, and leaving once the run is safe.',
    lead: 'Quota is the extraction gate, not an instruction to empty the map. Use the HUD to plan the route, deliver manageable valuables, and stop taking unnecessary risk once the objective is met.',
    steps: [
      'Confirm the quota, the number of extraction points, and the truck direction before going deep.',
      'Choose nearby valuables that are intact and controllable before committing to awkward heavy pieces.',
      'Use the C.A.R.T. to reduce repeated crossings of dangerous rooms.',
      'Place each item fully inside the extraction boundary and wait for the point to register.',
      'When quota is complete, prioritize the crew and the return route over one last item.',
    ],
    mistakes:
      'Entering an unknown room for one more item, leaving a valuable half inside a boundary, and ignoring the time needed to return safely.',
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
    title: 'How to extract in R.E.P.O. and return to the truck',
    description:
      'Finish R.E.P.O. extraction correctly: secure valuables, complete every required extraction point, regroup, and confirm the leave sequence.',
    lead: 'Extraction is not complete when an item reaches the platform. Finish every required point, keep the route clear while the point resolves, then regroup at the truck before ending the run.',
    steps: [
      'Check the map early or ask one player to remember extraction points and truck direction.',
      'Clear a route before placing large or fragile valuables.',
      'Keep players out of the extraction area while it resolves and wait for its completion signal.',
      'Confirm every required point is complete before starting the return.',
      'Return as a group and follow the current client prompt to finish the run.',
    ],
    mistakes:
      'Missing a required point, scraping large loot on the boundary, waiting in a dangerous platform area, and stranding a teammate during the return.',
    versionNote:
      'Follow the current client prompt for leaving. Community explanations of edge cases can become stale after patches.',
    sources: [
      {
        label: 'Steam discussion: extraction-point confusion',
        href: 'https://steamcommunity.com/app/3241660/discussions/0/595142635298030173/',
      },
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
    ],
  },
  {
    id: 'P0-4',
    slug: 'upgrade-priority',
    tag: 'UPGRADES',
    title: 'R.E.P.O. upgrade priority: buy the fix for your last failure',
    description:
      'Choose R.E.P.O. upgrades by the problem that ended the previous run: carrying, stamina, survivability, reach, or route control.',
    lead: 'A purchase is valuable when it removes the team’s next likely failure. Name what ended the run, choose one improvement, then observe what changed rather than copying a universal tier list.',
    steps: [
      'Identify the specific failure: carrying pressure, stamina, damage, reach, or lost control.',
      'Use carrying upgrades when the route is safe but weight and time are the problem.',
      'Use survival upgrades when the route is correct but damage repeatedly ends runs.',
      'Use reach or mobility when distance and positioning are the risk.',
      'Test one category per run and record the result before adding another variable.',
    ],
    mistakes:
      'Treating a community recommendation as a fixed order, buying on price alone, and changing several unrelated upgrades at once.',
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
    id: 'P0-5',
    slug: 'upgrades-explained',
    tag: 'UPGRADES',
    title: 'R.E.P.O. upgrades explained: choose by the problem they solve',
    description:
      'A practical way to read R.E.P.O. upgrades: survival, carrying, movement, and information, with version checks before fixed values.',
    lead: 'Organize upgrades by the job they do for the run. Survival protects a working route, carrying reduces handling pressure, mobility opens safer paths, and information helps the crew avoid bad commitments.',
    steps: [
      'Start with the problem category instead of the item name.',
      'Compare survival upgrades when damage or action downtime ends the run.',
      'Compare carrying upgrades when weight, distance, or fragile handling is the bottleneck.',
      'Use mobility only when it changes a real route, doorway, or escape decision.',
      'Record the observed effect and patch version before adding exact numbers.',
    ],
    mistakes:
      'Copying old values into a new patch, assuming an offered upgrade always appears, and treating every available tool as mandatory.',
    versionNote:
      'Official patch notes should be the source of version changes; game-client testing confirms whether the guide still reflects play.',
    sources: [
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
      {
        label: 'Steam community guides',
        href: 'https://steamcommunity.com/app/3241660/guides/?browsefilter=trend&browsesort=trend&filetype=11&numperpage=18&requiredtags%5B0%5D=english',
      },
    ],
  },
  {
    id: 'P0-6',
    slug: 'strength-upgrade-breakpoints',
    tag: 'STRENGTH',
    title: 'R.E.P.O. Strength upgrade breakpoints: test, do not assume',
    description:
      'Use a repeatable test sheet to verify R.E.P.O. Strength upgrades by target, player count, distance, and patch instead of relying on old charts.',
    lead: 'Strength breakpoints are useful only when the test conditions are visible. Repeat the same target, route, player count, and version before relying on a claim about what a level can carry.',
    steps: [
      'Lock the map, target, distance, player count, and patch version.',
      'Record the baseline before buying the next Strength level.',
      'Test whether the target can be lifted, moved through a doorway, and delivered.',
      'Repeat the same setup at the next planned test level.',
      'Keep the test conditions beside the result and separate items from monsters.',
    ],
    mistakes:
      'Writing that one threshold moves everything, mixing monster and item behaviour, and treating community numbers as current official data.',
    versionNote:
      'Community strength charts are useful for hypotheses, not proof. Re-test after physics or enemy-balance changes.',
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
    lead: 'The first question is not “can we kill it?” It is “what triggers it?” Call the threat, stop blocking the route with loot, create space, and fight only when the team has an advantage.',
    steps: [
      'Call the enemy location and direction as soon as you see or hear it.',
      'Set down the valuable where it will not block the retreat path.',
      'Use doors, walls, containers, and distance for sight-based threats.',
      'Reduce sprinting, jumping, and hard drops when sound or proximity is the concern.',
      'Fight only with a clear weapon plan, open space, and a route back to the team.',
    ],
    mistakes:
      'Carrying silently into a threat, forcing a narrow doorway, and risking the whole run for one item.',
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
    lead: 'Treat Shadow Child as a positioning problem. Confirm the direction without locking your camera, turn away, create space, and avoid taking a large item deeper into a narrow route.',
    steps: [
      'Use the sound cue or screen edge for a brief confirmation instead of staring.',
      'Turn away and move toward a teammate or the truck direction.',
      'Drop a large item if it blocks the escape route.',
      'Avoid pushing deeper alone after contact or damage.',
      'Treat trigger distance and other exact mechanics as uncertain until current gameplay confirms them.',
    ],
    mistakes:
      'Staring too long to confirm the enemy, stopping with a large item in a narrow room, and copying old damage values as current truth.',
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
    lead: 'Rugrat turns a loot route into a recovery problem. Call it out, move valuables toward a safe handoff point, spread the team, and never trade a stable run for a chase.',
    steps: [
      'Call Rugrat as soon as it approaches an important valuable.',
      'Move discovered loot toward the truck, a safe corner, or a teammate handoff.',
      'Keep teammates out of a shared throwing line.',
      'Decide whether to route around or counter only after the loot is safe.',
      'Record what was lost and how player count changed the recovery.',
    ],
    mistakes:
      'Chasing before securing loot, stacking the whole team in one line, and parking a large item between the enemy and the return route.',
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
  {
    id: 'P0-10',
    slug: 'first-shop-priority',
    tag: 'SHOP',
    title: 'R.E.P.O. shop priority: spend first money on run stability',
    description:
      'Use R.E.P.O. shop money to solve the next likely failure: survival, carrying, control, or protection for fragile loot.',
    lead: 'The first purchase should improve the next run, not flatter a tier list. Buy for the bottleneck in front of the crew, assign a role to the tool, and verify its value on the next attempt.',
    steps: [
      'Name the previous run’s failure: stamina, carrying, damage, control, or lost value.',
      'Choose a survival or carrying option when it directly raises the chance of meeting quota.',
      'Keep enough budget for a tool that changes a known route or enemy problem.',
      'Assign ownership before buying a team tool.',
      'With a tight budget, buy one item and test its value before expanding the plan.',
    ],
    mistakes:
      'Treating a tier list as universal, forgetting shop inventory changes, and buying a tool without a player assigned to use it.',
    versionNote:
      'Shop prices and inventory can change. Use the selection logic here, then check any specific price or item in the current shop.',
    sources: [
      {
        label: 'Official R.E.P.O. announcements',
        href: 'https://steamcommunity.com/app/3241660/announcements/?l=english',
      },
      {
        label: 'Steam community guides',
        href: 'https://steamcommunity.com/app/3241660/guides/?browsefilter=trend&browsesort=trend&filetype=11&numperpage=18&requiredtags%5B0%5D=english',
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
    'Park on a clear stretch of floor before bringing in valuables. Keep doors and the route back to the truck accessible.',
    'Lower manageable pieces into the cart and check that nothing awkward is scraping a wall. Move oversized objects separately if necessary.',
    'Use the cart’s value display to track the load, then compare it with the current objective. Uncollected items elsewhere do not solve the immediate extraction.',
    'Approach corners slowly. If the load becomes unstable, stop and reposition one object rather than dragging everything through the obstruction.',
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
    guideIds: ['P0-1', 'P1-18', 'P2-28', 'P2-29'],
  },
  {
    id: 'mechanics',
    title: 'Mechanics',
    description: 'Quota, extraction, carrying and level objectives.',
    guideIds: ['P0-2', 'P0-3', 'CART', 'P1-19', 'P1-21', 'P1-22'],
  },
  {
    id: 'upgrades',
    title: 'Upgrades',
    description: 'Choose purchases around your next run.',
    guideIds: ['P0-4', 'P0-5', 'P0-6', 'P1-23', 'P2-26'],
  },
  {
    id: 'enemies',
    title: 'Enemies',
    description: 'Recognition, counters and a visual field index.',
    guideIds: ['P0-7', 'P0-8', 'P0-9', 'P1-13', 'P1-14', 'P1-15', 'P2-27'],
  },
  {
    id: 'items',
    title: 'Items',
    description: 'Service Station, tools and spending decisions.',
    guideIds: ['P0-10', 'P1-11', 'P1-12'],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Co-op planning, routes and version-aware play.',
    guideIds: ['P1-16', 'P1-17', 'P1-20', 'P2-24', 'P2-25'],
  },
];
export const repoRelatedGuideIds: Record<string, string[]> = {
  'P0-1': ['P0-2', 'P0-3', 'P0-4', 'P0-7'],
  'P0-2': ['P0-3', 'P0-1', 'P0-10', 'P0-4'],
  'P0-3': ['P0-2', 'P0-1', 'P0-7', 'P0-10'],
  'P0-4': ['P0-5', 'P0-10', 'P0-1', 'P0-6'],
  'P0-5': ['P0-4', 'P0-6', 'P0-10', 'P0-1'],
  'P0-6': ['P0-5', 'P0-4', 'P0-7', 'P0-9'],
  'P0-7': ['P0-8', 'P0-9', 'P0-1', 'P0-3'],
  'P0-8': ['P0-7', 'P0-9', 'P0-3'],
  'P0-9': ['P0-7', 'P0-8', 'P0-3'],
  'P0-10': ['P0-4', 'P0-5', 'P0-2', 'P0-1'],
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
  { targetId: 'P0-10', terms: ['Service Station'] },
  { targetId: 'P0-8', terms: ['Shadow Child'] },
  { targetId: 'P0-9', terms: ['Rugrat'] },
  { targetId: 'P0-2', terms: ['quota'] },
  { targetId: 'P0-3', terms: ['extraction'] },
  { targetId: 'P0-5', terms: ['upgrades', 'upgrade'] },
  { targetId: 'P0-7', terms: ['monsters', 'monster', 'enemies', 'enemy'] },
];
