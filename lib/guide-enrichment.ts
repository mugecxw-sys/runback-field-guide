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
  'repo-ps5-xbox-console-crossplay': [
    {
      heading: 'Current Platform Status',
      columns: ['Platform', 'Current Status'],
      rows: [
        ['Windows PC / Steam', 'Available'],
        ['PS5', 'Not currently released'],
        ['Xbox', 'Not currently released'],
        ['PC ↔ PS5 crossplay', 'Not currently available'],
        ['PC ↔ Xbox crossplay', 'Not currently available'],
        ['Future console version', 'Planned, no confirmed release date'],
      ],
      paragraphs: [],
    },
  ],
  'what-is-r-e-p-o-story-setting-and-what-we-know': [
    {
      heading: 'What Does R.E.P.O. Stand For?',
      paragraphs: [
        'You will often see R.E.P.O. expanded as: Retrieve, Extract and Profit Operation.',
        "That wording matches the game's basic loop: retrieve valuables, extract them safely, and turn the recovered value into progress.",
        'However, RUNBACK has not found a primary semiwork statement formally defining that phrase as the official expansion of the title.',
        'For that reason, it is better described as the commonly reported expansion of R.E.P.O. rather than something this guide can independently label as an officially confirmed acronym.',
        'The name also plays naturally on the word repo, short for repossession, which fits a game about entering abandoned locations and recovering valuable property.',
      ],
    },
  ],
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
      heading: 'Before a long carry',
      paragraphs: [
        'Walk the doorway and return path without the object first. Park the C.A.R.T. where it leaves that route open. If the item cannot clear a turn without scraping a wall, choose a smaller nearby valuable or move it separately.',
      ],
    },
    {
      heading: 'On the next level',
      paragraphs: [
        'Check the new extraction points and truck route before loading the cart. The prior level’s path and loot placement do not establish a safe path through the next one.',
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
      heading: 'Match the offer to a failed task',
      paragraphs: [
        'If a carrier cannot manage the same heavy object through a doorway, compare Strength with changing the cart route. If the crew repeatedly runs out of Stamina on the return, buying Health does not fix that movement problem.',
        'Read the current shop offer and price. Give a team tool to the player who will use it on the next route before paying for it.',
      ],
    },
    {
      heading: 'When to save',
      paragraphs: [
        'If the Service Station does not offer a relevant purchase, keep the money. Shorten the carry, move the cart closer, or take smaller batches on the next attempt; compare that result before paying for an unrelated offer.',
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
