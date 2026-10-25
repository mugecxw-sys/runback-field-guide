export type SephiriaBuildDefinition = {
  title: string;
  href: string;
  weaponRoute: string[];
  finalBuild: string[];
  fieldNotes: { title: string; detail: string }[];
};

export type SephiriaWeaponBuildGroup = {
  name: string;
  imageKey: string;
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
    ],
  },
  { name: 'Greatsword', imageKey: 'WPN-02', builds: [] },
  { name: 'Dagger', imageKey: 'WPN-04', builds: [] },
  { name: 'Staff', imageKey: 'WPN-06', builds: [] },
  { name: 'Crossbow', imageKey: 'WPN-03', builds: [] },
  { name: 'Katana', imageKey: 'WPN-05', builds: [] },
];
