export type Enrichment = {
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  heading: string;
  paragraphs: string[];
  columns?: string[];
  rows?: string[][];
  source?: { href: string; label: string };
};
export const repoEnrichment: Record<string, Enrichment[]> = {
  'first-run-guide': [
    {
      heading: 'Quick Facts',
      columns: ['Checkpoint', 'Ready to move on when'],
      rows: [
        [
          'Before looting',
          'Controls are comfortable and the truck route is clear.',
        ],
        [
          'Before extraction',
          'The load meets the displayed target and fits inside the boundary.',
        ],
        [
          'Before leaving',
          'Every required point is complete and the crew has regrouped.',
        ],
      ],
      paragraphs: [],
    },
    {
      heading: 'Plan the first ten minutes',
      paragraphs: [
        'Give each player a concrete job before the first carry. One person identifies the return route, another handles manageable valuables, and a third watches the next doorway. In a duo, combine scouting and lookout duties; alone, stop carrying whenever you need to inspect an unfamiliar room. The aim is to avoid learning a route while wrestling with a fragile object.',
        'Work outward from a safe staging point. Take a short path with repeatable handling before committing to a large piece at the far end of the map. Each detour should have a reason: a clearer doorway, a nearby extraction point or an item that closes the remaining gap. If nobody can explain how the object gets home, leave it until the team has a plan.',
      ],
    },
    {
      heading: 'Alternative: a low-risk solo route',
      paragraphs: [
        'Take smaller batches and return along a route you already know. Before lifting an awkward object, walk the next doorway empty-handed. If the object makes you lose sight of the route or prevents a quick retreat, park it and scout again. The slower-looking carry can be the faster successful run.',
        'After the run, choose one change. If the crew got separated, fix callouts before shopping. If handling was the bottleneck on an otherwise safe path, compare carrying upgrades. Spending cannot repair a plan that asks everyone to cross an unknown room at once.',
      ],
    },
  ],
  'meet-quota': [
    {
      heading: 'Quick Facts',
      columns: ['Number or cue', 'What it means for the route'],
      rows: [
        ['Displayed quota', 'The current objective to satisfy.'],
        [
          'Cart value',
          'A check on the valuables currently loaded, not proof that all objectives are finished.',
        ],
        [
          'Remaining extraction points',
          'More work may remain even after one delivery succeeds.',
        ],
      ],
      paragraphs: [],
    },
    {
      heading: 'Choose the next item by risk, not size',
      paragraphs: [
        'Compare the remaining gap with the time and handling needed for each known valuable. An easy nearby item may finish the objective with one short carry. A large object across an unscouted room may add enough risk to cancel the apparent benefit. Make the comparison before anyone commits the cart to the far route.',
        'Keep one person responsible for checking the objective after delivery. In co-op, a teammate may see the cart total and assume the group is done while another is still waiting for a point to resolve. Call both the delivery result and the next destination. Avoid vague instructions such as “we have enough” when another point is still required.',
      ],
    },
    {
      heading: 'If a delivery does not finish the objective',
      paragraphs: [
        'Check the current display and the item position first. Reposition anything outside the boundary and wait for the completion signal. Then check whether the map is asking for another extraction point rather than treating the run as broken. If the current client still refuses to advance, record the exact prompt and patch before following an old workaround.',
      ],
    },
  ],
  'extraction-guide': [
    {
      heading: 'Recognize the extraction platform',
      paragraphs: [
        'Check the loaded objects against the platform boundary, then move away before the machinery resolves. Use the current in-game signal rather than copying a countdown from an older guide.',
      ],
      image: {
        src: 'https://media.dotesports.com/wp-content/uploads/2025/02/R.E.P.O.-extraction-zone.jpg',
        width: 1200,
        height: 675,
        alt: 'A loaded cart on the extraction platform with the completion indicator above it.',
        caption:
          'Extraction-platform reference. Screenshot by Dot Esports; the original guide was published in 2025, so UI details may differ.',
      },
      source: {
        label: 'Dot Esports: extraction reference and screenshot credit',
        href: 'https://dotesports.com/indies/news/how-to-extract-in-r-e-p-o',
      },
    },
    {
      heading: 'Quick Facts',
      columns: ['Stage', 'Check before proceeding'],
      rows: [
        ['Load', 'The complete valuable is inside the boundary.'],
        ['Resolution', 'Players are clear and the point has completed.'],
        ['Return', 'No required extraction point remains.'],
        ['Departure', 'The crew follows the truck’s leave prompt.'],
      ],
      paragraphs: [],
    },
    {
      heading: 'Carry, resolve, then regroup',
      paragraphs: [
        'Treat delivery and departure as separate tasks. Keep teammates away from the active platform and give the carrier room to adjust the load. Once the point resolves, pause long enough to read the objective before anyone starts a different route. A successful delivery can still leave more extraction work to do.',
        'The way home is not automatically safe because the objective is complete. Stop chasing extra loot, identify a leader who knows the truck direction, and keep the slowest teammate in the group’s plan. If a threat interrupts the return, set down a blocking object before choosing cover or a detour.',
      ],
    },
    {
      heading: 'Alternative: split an awkward load',
      paragraphs: [
        'If an object makes the cart impossible to steer, move that piece separately through the troublesome section while the rest stays parked safely. Reassemble only where there is room. This is a handling choice, not a promise that every object can be carried by one player. Do not turn a congested platform into a team-wide physics test.',
      ],
    },
  ],
  'upgrade-priority': [
    {
      heading: 'Quick Facts',
      columns: ['Repeated failure', 'First question to ask'],
      rows: [
        [
          'Heavy or slow carry',
          'Was the route safe, and was handling actually the bottleneck?',
        ],
        [
          'Running out of stamina',
          'Was the team spending stamina on unnecessary movement?',
        ],
        [
          'Frequent damage',
          'Would better positioning solve it before another purchase?',
        ],
        [
          'Cannot reach safely',
          'Would reach or a different approach reduce exposure?',
        ],
      ],
      paragraphs: [],
    },
    {
      heading: 'Choose a role before a purchase',
      paragraphs: [
        'Compare the last failure with the next map’s likely demands. A dedicated carrier may benefit from a handling improvement that a lookout rarely uses. Agree who will use a team tool before paying for it; a tool left unassigned cannot reliably solve the problem that justified the purchase.',
        'Do not treat this table as a universal build order. A group that survives comfortably but wastes time moving valuables needs a different decision from a group that loses players on the first room. Read the current item description and price, then select the smallest change that addresses the repeated failure.',
      ],
    },
    {
      heading: 'Alternative: change the route and save',
      paragraphs: [
        'When no available item solves the problem, keep the money and make a concrete route adjustment instead. Carry smaller batches, scout the next corner first, or set a regroup point. Saving is useful when paired with an improvement in play; repeating the same failed plan while waiting for an ideal shop roll is not a strategy.',
      ],
    },
  ],
};
export const typhonSections: Enrichment[] = [
  {
    heading: 'Typhon: phase-by-phase priorities',
    paragraphs: [
      'This is a compact fight reference, not a full attack catalogue or a promise of a no-hit clear. Speed-changing Vows reduce reaction windows.',
    ],
    columns: ['Fight state', 'Response priority'],
    rows: [
      [
        'Opening phase',
        'Read the chin wind-up and dash away from the slam. Cross the tongue laser rather than following its sweep.',
      ],
      [
        'Egg intermission',
        'Switch damage to eggs before they hatch; keep watching the tail or hand follow-up.',
      ],
      [
        'Olympus aid',
        'Use the exposed tongue damage window, then prepare for the next transition.',
      ],
      [
        'Final phase',
        'Expect a return laser sweep. Keep a second dodge available and relocate when the eye swarm changes the safe area.',
      ],
    ],
    source: {
      label: 'Mobalytics: Typhon patterns and phases',
      href: 'https://mobalytics.gg/hades-2/guides/how-to-beat-typhon',
    },
  },
  {
    heading: 'Alternative: spend the next attempt learning one cue',
    paragraphs: [
      'If the final phase feels unreadable, stop measuring the attempt only by damage dealt. Pick the attack that last killed you, identify its startup, and keep an escape direction available. A short safe punish that leaves you ready for the next cue is more useful than a long combo that trades away the run.',
    ],
  },
];
