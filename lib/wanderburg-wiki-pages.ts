export type WanderburgWikiPage = {
  title: string;
  href: string;
  summary: string;
  text: string;
  publishedAt: string;
  updatedAt?: string;
  kind: 'Guide' | 'Wiki';
};

export const wanderburgWikiPages: WanderburgWikiPage[] = [
  {
    title: 'Wanderburg Arrow Build Guide (0.9.14)',
    href: '/games/wanderburg/builds/arrow-build',
    kind: 'Guide',
    summary: 'Two tested Arrow builds compared: Archer Tower, Side Ballista and Turret Layer performed better in Setup 2. Both setups completed full runs.',
    text: 'wanderburg arrow build comparison setup 1 setup 2 archer tower side ballista turret layer wanderturm huntress archer crew reset lever electric arrow fast quiver golden bow ram dash auto attack cooldown ability tested clear single-target damage mobility',
    publishedAt: '2026-10-09T00:00:00.000Z',
    updatedAt: '2026-10-10T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Boss Guide (0.9.14)',
    href: '/games/wanderburg/boss-guide',
    kind: 'Guide',
    summary: 'Short Wanderburg boss guides for Early Access 0.9.14, with practical dodge tips, screenshots and short gameplay videos.',
    text: 'wanderburg boss guide glasslands desert taurus drillus fresensburg bombardia the dark tower king klopp rust shield saturna raketa the ancient',
    publishedAt: '2026-09-29T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Glasslands Boss Guide (0.9.14)',
    href: '/games/wanderburg/boss-guide/glasslands',
    kind: 'Guide',
    summary: 'Short Glasslands boss guides with dodge tips, screenshots and gameplay clips for four bosses.',
    text: 'wanderburg glasslands boss taurus drillus fresensburg bombardia the dark tower watch dodge attack',
    publishedAt: '2026-09-29T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Desert Boss Guide (0.9.14)',
    href: '/games/wanderburg/boss-guide/desert',
    kind: 'Guide',
    summary: 'Short Desert boss guides with dodge tips, screenshots and gameplay clips for four bosses.',
    text: 'wanderburg desert boss king klopp rust shield saturna raketa the ancient watch dodge attack',
    publishedAt: '2026-09-29T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Dark Forest Boss Guide (0.9.14)',
    href: '/games/wanderburg/boss-guide/dark-forest',
    kind: 'Guide',
    summary: 'Short Dark Forest boss guides with dodge tips, screenshots and gameplay clips for four bosses.',
    text: 'wanderburg dark forest boss guide schnittburg boss schnappenstein castle boss rammi boss gunnings watch dodge attack rotating sweep fire zones mortar markers side cannons top cannon',
    publishedAt: '2026-09-29T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Vehicle Guide: Spiderburg vs Tankenburg vs Wanderturm',
    href: '/games/wanderburg/vehicle-guide',
    kind: 'Guide',
    summary: 'A short tested comparison of Wanderburg Vehicle handling, Module slots and play styles.',
    text: 'wanderburg vehicle guide wanderturm tankenburg spiderburg handling driving nitro side top front back slots',
    publishedAt: '2026-09-28T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Beginner Guide: What to Do First (0.9.14)',
    href: '/games/wanderburg/beginner-guide',
    kind: 'Guide',
    summary: 'A short first-run guide to starting choices, Module slots, upgrades, active abilities and Nitro.',
    text: 'wanderburg beginner guide what to do first first run main module archer tower vehicle movement slot upgrade auto attacks active abilities nitro first boss',
    publishedAt: '2026-09-26T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Cannon Build Guide (0.9.14)',
    href: '/games/wanderburg/builds/cannon-build',
    kind: 'Guide',
    summary: 'Tested Tankenburg Cannon setup with upgrade priorities, positioning and boss notes.',
    text: 'wanderburg cannon build tankenburg patchy the pirate canoneer crew frontcannon cannon tower repair wrench upgrade priority positioning boss tested clear',
    publishedAt: '2026-09-26T00:00:00.000Z',
  },
  {
    title: 'Wanderburg RAM Build Guide (0.9.14)',
    href: '/games/wanderburg/builds/ram-build',
    kind: 'Guide',
    summary: 'Tested hit-and-run RAM setup using Boost timing, speed and support damage.',
    text: 'wanderburg ram build spiderburg duelist carpenters bumper dash cooldown ability boost collision boss tested clear',
    publishedAt: '2026-09-27T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Friendly Units Build Guide (0.9.14)',
    href: '/games/wanderburg/builds/friendly-units-build',
    kind: 'Guide',
    summary: 'Tested Wanderturm friendly-units setup with Empress, Barracks upgrades and Running Shoes.',
    text: 'wanderburg friendly units build wanderturm empress carpenters front barracks side barracks running shoes companion boss tested clear',
    publishedAt: '2026-09-27T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Magic Build Guide (0.9.14)',
    href: '/games/wanderburg/builds/magic-build',
    kind: 'Guide',
    summary: 'A tested Wanderburg Magic build centered on Lightning Mage, with upgrade priorities, Force Mage support, Legendary upgrades and boss tips.',
    text: 'wanderburg magic build lightning mage force mage wizard crew wanderturm norbert the normal repair wrench auto attack cooldown thunderstorm ultra lightning dash boss tested',
    publishedAt: '2026-10-07T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Modules Wiki (0.9.14)',
    href: '/games/wanderburg/wiki/modules',
    kind: 'Wiki',
    summary:
      'Wanderburg Module reference for Early Access 0.9.14, covering current effects, slots and reference values.',
    text: 'wanderburg modules archer tower arms cannon cannon tower catapult companion dash fire mage force mage front barracks frontcannon lightning mage mine layer ram side ballista side barracks side flamethrower teleporter top mortar turret layer',
    publishedAt: '2026-09-22T00:00:00.000Z',
    updatedAt: '2026-09-23T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Captains Wiki (0.9.14)',
    href: '/games/wanderburg/wiki/captains',
    kind: 'Wiki',
    summary:
      'Wanderburg Captain reference for Early Access 0.9.14, covering current effects and drawbacks.',
    text: 'wanderburg captains patchy the pirate kapitalistus maximus huntress tankbert duelist',
    publishedAt: '2026-09-22T00:00:00.000Z',
    updatedAt: '2026-09-23T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Artifacts Wiki (0.9.14)',
    href: '/games/wanderburg/wiki/artifacts',
    kind: 'Wiki',
    summary:
      'Wanderburg Starter Artifact reference for Early Access 0.9.14, covering current effects and reroll-related items.',
    text: 'wanderburg starter artifacts repair wrench electric arrow artifact rerolls',
    publishedAt: '2026-09-23T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Crew Wiki (0.9.14)',
    href: '/games/wanderburg/wiki/crew',
    kind: 'Wiki',
    summary:
      'Wanderburg Crew reference covering six current Crew, their effects, mechanics and screenshots.',
    text: 'wanderburg crew archer crew canoneer crew carpenters fire crew merchants wizard crew',
    publishedAt: '2026-09-25T00:00:00.000Z',
  },
  {
    title: 'Wanderburg Vehicles Wiki (0.9.14)',
    href: '/games/wanderburg/wiki/vehicles',
    kind: 'Wiki',
    summary:
      'Wanderburg Vehicles reference covering three current Vehicles, Module slots, mechanics and screenshots.',
    text: 'wanderburg vehicles spiderburg tankenburg wanderturm vehicle module slots',
    publishedAt: '2026-09-25T00:00:00.000Z',
  },
];
