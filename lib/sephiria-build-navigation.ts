import type { BagPlannerLayoutV1 } from '@/lib/sephiria-planner/bag-planner-layout';
import sns01 from '@/lib/sephiria-builds/sns-01-layout.json';
import sns04 from '@/lib/sephiria-builds/sns-04-layout.json';
import sns11 from '@/lib/sephiria-builds/sns-11-layout.json';
import { frogAutoStormCloudBuild } from '@/lib/sephiria-builds/frog-auto-storm-cloud';
import { electricDifficulty60Build } from '@/lib/sephiria-builds/shock-difficulty-60';

export type SephiriaBuildDefinition = {
  title: string;
  href: string;
  weaponRoute: string[];
  finalBuild: string[];
  fieldNotes: { title: string; detail: string }[];
  plannerLayout?: BagPlannerLayoutV1 | null;
  coreArtifactIds?: number[];
  listed?: boolean;
  comboLabel?: string;
  style?: string;
  inactiveSlotLabel?: string;
};

export type SephiriaWeaponBuildGroup = {
  name: string;
  imageKey: string;
  href?: string;
  builds: SephiriaBuildDefinition[];
};

// HOW TO PLAY / FIELD NOTES RULE:
// These notes must be rewritten from actual testing for every individual build.
// Do not copy field notes between builds.
// This build's observations were supplied and confirmed by its author.
export const weaponBuildGroups: SephiriaWeaponBuildGroup[] = [
  {
    name: 'Sword & Shield',
    imageKey: 'WPN-01',
    builds: [
      {
        title: 'Grip of Fear Cleave Build',
        href: '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build',
        plannerLayout: sns01 as BagPlannerLayoutV1,
        coreArtifactIds: [1034, 1221, 1112, 1009, 1191],
        weaponRoute: ['Tiny Destruction', 'Grip of Fear'],
        finalBuild: ['Sturdy 10', 'Wind Song 10', 'Precision 8'],
        fieldNotes: [
          {
            title: 'This is the version I would keep',
            detail:
              'After running this setup, I would keep this version. The damage feels good already; for me, cleaner execution and staying alive have been the bigger limits.',
          },
          {
            title: 'Make the starting Shieldmate count',
            detail:
              'Shieldmate comes into the run with me. Bringing it toward Lv7 is an early priority: improving this piece is what makes repeated Cleave use feel more comfortable.',
          },
          {
            title: 'I would keep Sturdy 10',
            detail:
              'I would keep Sturdy 10 when choosing between it and more Attack Speed. Its Physical Damage Amplification is a meaningful part of this setup’s direct damage.',
          },
          {
            title: 'Use Attack Speed to feed Grip of Fear',
            detail:
              'Wind Song helps Rising Dread arrive faster through Attack Speed. That is the reason to value it here; Attack Speed itself does not increase the damage of a single Cleave hit.',
          },
          {
            title: 'Let the run grow into the layout',
            detail:
              'I would start with the core pieces, then their important levels, then Sturdy 10 / Wind Song 10 / Precision 8. The finished layout is a goal to work toward as items appear, rather than something to copy from the opening room.',
          },
          {
            title: 'My experience before Hard Mode',
            detail:
              'Before Hard Mode, I found this build comfortably strong. I did fail the final boss in this run, but that was mostly down to my own positioning rather than the build lacking damage. I would not judge the build’s strength by that failed attempt.',
          },
        ],
      },
      {
        title: 'Indomitable Normal Attack Build',
        href: '/games/sephiria/builds/sword-and-shield/indomitable-normal-attack-build',
        plannerLayout: sns04 as BagPlannerLayoutV1,
        coreArtifactIds: [1262, 1080, 1218, 1086, 1191],
        weaponRoute: ['Default Sword & Shield', 'Perfect Balance', 'Indomitable'],
        finalBuild: ['Sturdy 10', 'Wind Song 10', 'Precision 8'],
        fieldNotes: [
          { title: 'Normal Attack is the build', detail: 'Indomitable disables Cleave. Close the distance, keep a safe position, and sustain Normal Attacks instead of waiting for a Cleave window.' },
          { title: 'Attack Speed matters immediately', detail: 'Indomitable supplies +15% Attack Speed. The preset also reaches Wind Song 10, so its real Attack Speed bonuses support a smoother attack cycle.' },
          { title: 'The automatic Block adds room for error', detail: 'Normal Attacks automatically Block in front of you. This is not invulnerability, but it makes facing an enemy more forgiving than a pure damage setup.' },
          { title: 'Stay close when the opening is safe', detail: 'Keep continuous attacks on a boss during a safe window, then move away when it is dangerous. The build needs sustained contact to deal damage.' },
          { title: 'Build toward sustained attacks', detail: 'In this preset, Mystical Pendulum and Begonia Sachet support Normal Attack damage; Valter’s Work Monocle adds Critical Chance, and Silver Plate adds Normal Attack and Special Attack Damage. Grow these pieces before filling every slot.' },
          { title: 'Simple to play, with respectable damage', detail: 'This is one of the simpler Sword & Shield setups I have tested. You mostly stay in range and keep attacking instead of managing a more complicated Special Attack loop. In my test, the build was sitting at around 2,200 DPS, which is respectable for how straightforward it is. It is also a surprisingly fun build to play.' },
        ],
      },
      {
        title: 'Superconductor Lightning Spear Build',
        href: '/games/sephiria/builds/sword-and-shield/superconductor-lightning-spear-build',
        weaponRoute: ['Default Sword & Shield', 'Conductor', 'Superconductor'],
        finalBuild: ['Storm Cloud 8', 'Magitech 10', 'Sturdy 9'],
        fieldNotes: [
          { title: 'Lightning Spear replaces Cleave', detail: 'After Superconductor, Special Attack becomes Lightning Spear. Use that Special Attack as the build’s main damage source.' },
          { title: 'Lightning Damage matters more here', detail: 'Conductor and Superconductor each add +5 Lightning Damage. The preset reinforces that route with Lightning focused Artifacts.' },
          { title: 'Save Special Attack for a real opening', detail: 'Lightning Spear carries the damage plan. When a boss gives you a safe opening, use Special Attack to make that window count.' },
          { title: 'Do not spend into small openings', detail: 'Special Attack has a resource cost. I hold it through short or unsafe openings, then use it when there is room to land meaningful damage.' },
          { title: 'Build around the spear, not Cleave', detail: 'I prioritize the preset’s Lightning Rod, Charm of Lightning, Thunder’s Earring, and Blue Wrist Guard, alongside Storm Cloud 8, Magitech 10, and Sturdy 9, rather than copying the Grip of Fear Cleave setup.' },
          { title: 'Fun, but not one of my stronger setups', detail: 'This feels more like a fun build than a particularly strong one. Against bosses with large health pools, I had to use Special Attack very frequently to keep the damage going, and that put too much pressure on the build’s Storm Cloud resource. The damage is usable, but the resource pressure becomes noticeable in longer fights. I would treat this as an entertaining setup rather than one of the stronger Sword & Shield builds.' },
        ],
      },
      {
        title: "Blizzard's Eve Frost Hammer Build",
        href: '/games/sephiria/builds/sword-and-shield/blizzards-eve-build',
        plannerLayout: sns11 as BagPlannerLayoutV1,
        coreArtifactIds: [1208, 1209, 1210, 1145, 1027, 1179, 1063],
        weaponRoute: ['Default Sword & Shield', 'Frost Shard', "Blizzard's Eve"],
        finalBuild: ['Frost Relic 10', 'Glacier 8', 'Precision 7'],
        fieldNotes: [
          { title: 'Keep attacking normally when it is safe.', detail: '' },
          { title: "Consume Dash Count regularly to trigger Blizzard's Eve.", detail: '' },
          { title: 'Use Frozen Bow during ranged damage windows.', detail: '' },
          { title: 'Keep Frostbite active so automatic ice projectiles continue contributing damage.', detail: '' },
        ],
      },
      frogAutoStormCloudBuild,
      electricDifficulty60Build,
    ],
  },
  {
    name: 'Greatsword',
    href: '/games/sephiria/builds/greatsword',
    imageKey: 'WPN-02',
    builds: [{
      title: '[Build Name]',
      href: '/games/sephiria/builds/greatsword/greatsword-build',
      weaponRoute: ['Greatsword'],
      finalBuild: [],
      fieldNotes: [],
    }],
  },
  { name: 'Dagger', imageKey: 'WPN-04', builds: [] },
  { name: 'Staff', imageKey: 'WPN-06', builds: [] },
  { name: 'Crossbow', imageKey: 'WPN-03', builds: [] },
  { name: 'Katana', imageKey: 'WPN-05', builds: [] },
];

// Keep existing routes and layout metadata available while controlling public discovery.
export const listedWeaponBuildGroups = weaponBuildGroups.map((group) => ({
  ...group,
  builds: group.builds.filter((build) => build.listed !== false),
}));
