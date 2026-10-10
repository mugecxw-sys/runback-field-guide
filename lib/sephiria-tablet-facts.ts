import type { SephiriaRecord } from './sephiria-wiki-data';

export const sephiriaTabletFacts: (Pick<SephiriaRecord, 'id' | 'name' | 'rarity' | 'effectCurrent' | 'mechanicCurrent' | 'tabletPattern' | 'tabletPatternNote'>)[] = [
  {
    "id": "TBL-32",
    "name": "Advance",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-27",
    "name": "Advent",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-46",
    "name": "Approximation",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-24",
    "name": "Binary Star",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-44",
    "name": "Brilliance",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-30",
    "name": "Cheers",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-19",
    "name": "Chivalry",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-14",
    "name": "Cohesion",
    "effectCurrent": "Increase Artifact Level: +3.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-02",
    "name": "Competition",
    "effectCurrent": "Increase Artifact Level: +3.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-48",
    "name": "Compression",
    "effectCurrent": "Increase Artifact Level: +1 / +2 / +3.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-53",
    "name": "Conviction",
    "effectCurrent": "Increase Artifact Level: +5.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 5,
        "label": "+5"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-57",
    "name": "Courage",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-07",
    "name": "Curse",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -5,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -3,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 3,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 5,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 7,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-06",
    "name": "Daydream",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-29",
    "name": "Dedication",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-62",
    "name": "Defensive Move",
    "effectCurrent": "Increase Artifact Level: +1 / +2.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-26",
    "name": "Desire",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-18",
    "name": "Destiny",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-51",
    "name": "Disconnection",
    "effectCurrent": "Increase Artifact Level: +3.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-34",
    "name": "Distribution",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-49",
    "name": "Dry",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-35",
    "name": "Entrance",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-52",
    "name": "Exit",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-13",
    "name": "Exploitation",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-61",
    "name": "Flag",
    "effectCurrent": "Increase Artifact Level: +1 / +2 / +3.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Active only when the tablet is placed in the leftmost column. Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-33",
    "name": "Foundation",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-42",
    "name": "Future",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-21",
    "name": "Gaze",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-15",
    "name": "Good Will",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Active only when the tablet is placed in the bottom row. Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-45",
    "name": "Handshake",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-31",
    "name": "Harvest",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-65",
    "name": "Heaven",
    "effectCurrent": "Increase Artifact Level: +9.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": -1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 1,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 2,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 3,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 4,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 5,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 6,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -6,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -5,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -4,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -3,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -2,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": -1,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 1,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 2,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 3,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 4,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 5,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 6,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "positive",
        "value": 9,
        "label": "+9"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-64",
    "name": "Hell",
    "effectCurrent": "Reduce Artifact Level: -9.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": -1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 1,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 2,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 3,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 4,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 5,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 6,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -6,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -5,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -4,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -3,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -2,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": -1,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 1,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 2,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 3,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 4,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 5,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 6,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "negative",
        "value": -9,
        "label": "-9"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-59",
    "name": "Honor",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-09",
    "name": "Hope",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-58",
    "name": "Hospitality",
    "effectCurrent": "Increase Artifact Level: +1 / +2.\nIgnore artifact constraints (★).",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2★"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1★"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-38",
    "name": "Junction",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-16",
    "name": "Justice",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Active only when the tablet is placed in the leftmost column or rightmost column. Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-60",
    "name": "Last Stand",
    "effectCurrent": "Increase Artifact Level: +5.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 5,
        "label": "+5"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-25",
    "name": "Link",
    "effectCurrent": "Increase Artifact Level: +2.\nIgnore artifact constraints (★).",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "neutral",
        "label": "★"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-11",
    "name": "Miracle",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-01",
    "name": "Nurture",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-36",
    "name": "Oaths",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-08",
    "name": "Oppression",
    "effectCurrent": "Disable Artifacts (×).",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "neutral",
        "label": "×"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-41",
    "name": "Past",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-56",
    "name": "Peace",
    "effectCurrent": "Increase Artifact Level: +3.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-47",
    "name": "Power",
    "effectCurrent": "Increase Artifact Level: +3.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-05",
    "name": "Preparation",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-55",
    "name": "Progress",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-22",
    "name": "Pulsation",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-54",
    "name": "Rally",
    "effectCurrent": "Increase Artifact Level: +2.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-39",
    "name": "Rebellion",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 7,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-66",
    "name": "Requital",
    "effectCurrent": "Increase Artifact Level: +3.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-23",
    "name": "Shade",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Active only when the tablet is placed in the top row. Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-50",
    "name": "Simultaneity",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-43",
    "name": "Stack",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-10",
    "name": "Surge",
    "effectCurrent": "Ignore artifact constraints (★).",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "neutral",
        "label": "★"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-37",
    "name": "Thorns",
    "effectCurrent": "Increase Artifact Level: +1 / +2.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 2,
        "label": "+2"
      },
      {
        "x": 1,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-40",
    "name": "Three-Headed",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-12",
    "name": "Transference",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 2,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 3,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 4,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 5,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 6,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-04",
    "name": "Trick",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-17",
    "name": "Unity",
    "effectCurrent": "Increase Artifact Level: +1.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": -1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-28",
    "name": "Vigilance",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Cannot be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -7,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": -7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -5,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -3,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": -1,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 0,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 1,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 2,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 3,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 4,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 5,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 6,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      },
      {
        "x": 7,
        "y": 7,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": "Placement example with the tablet centered. Edge-spanning areas follow the inventory boundaries; the activation condition still applies."
  },
  {
    "id": "TBL-03",
    "name": "Wave",
    "effectCurrent": "Increase Artifact Level: +3.\nReduce Artifact Level: -1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": 0,
        "y": -1,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      },
      {
        "x": 1,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      },
      {
        "x": 1,
        "y": 0,
        "kind": "negative",
        "value": -1,
        "label": "-1"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-63",
    "name": "Wedge",
    "effectCurrent": "Increase Artifact Level: +3.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 3,
        "label": "+3"
      }
    ],
    "tabletPatternNote": null
  },
  {
    "id": "TBL-20",
    "name": "Wit",
    "effectCurrent": "Increase Artifact Level: +1.",
    "mechanicCurrent": "Can be rotated.",
    "rarity": null,
    "tabletPattern": [
      {
        "x": 0,
        "y": 0,
        "kind": "origin"
      },
      {
        "x": -1,
        "y": -1,
        "kind": "positive",
        "value": 1,
        "label": "+1"
      }
    ],
    "tabletPatternNote": null
  }
];
