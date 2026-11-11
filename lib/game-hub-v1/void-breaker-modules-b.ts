import type { VoidBreakerModule } from './void-breaker-modules';

// Public card fields for the B-grade import. Source and audit fields stay outside the site.
export const importedModules = [
  {
    slug: '360-no-scope-gif',
    title: '360-NO-SCOPE.gif',
    type: 'Weapon Mod',
    summary:
      'Next projectile damage greatly increased after performing an aerial 360',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_360NoScope.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'After performing an aerial 360',
      },
    ],
  },
  {
    slug: 'acidburst-adapter',
    title: 'ACIDBURST ADAPTER',
    type: 'Weapon Mod',
    summary: 'Slight chance to corrode enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_AcidBurst.png',
      alt: '',
    },
  },
  {
    slug: 'adreeno-booster',
    title: 'ADREENO BOOSTER',
    type: 'Body Mod',
    summary: 'Destroying an enemy provides a small increase in movement speed',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_AdreenoBooster.png',
      alt: '',
    },
  },
  {
    slug: 'ads-accelerator-2',
    title: 'ADS ACCELERATOR',
    type: 'Weapon Mod',
    summary: 'Increases ADS Speed',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ADS_Accelerator.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'ADS Time -40%',
      },
    ],
  },
  {
    slug: 'air-flow-chip',
    title: 'AIR FLOW CHIP',
    type: 'Body Mod',
    summary: 'Increases air control',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_AirFlow.png',
      alt: '',
    },
  },
  {
    slug: 'airborne-attack',
    title: 'AIRBORNE ATTACK',
    type: 'Weapon Mod',
    summary: 'Increases damage when airbourne',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Airbourne.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +50%',
      },
      {
        label: 'Activation',
        value: 'While airborne',
      },
    ],
  },
  {
    slug: 'amped-up',
    title: 'AMPED UP',
    type: 'Weapon Mod',
    summary: 'First shot in a magazine will deal additional damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_AmpedUp.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +100%',
      },
      {
        label: 'Activation',
        value: 'On the first shot in a magazine',
      },
    ],
  },
  {
    slug: 'arcstorm',
    title: 'ARCSTORM',
    type: 'Weapon Mod',
    summary: 'Produces a number of homing projectiles when weapon fires',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ArcStorm.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When the weapon fires',
      },
    ],
  },
  {
    slug: 'armor-plate',
    title: 'ARMOR PLATE',
    type: 'Body Mod',
    summary: 'Protects against 1 hit. Deletes on use.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ArmourPlate.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Blocks 1 hit',
      },
    ],
  },
  {
    slug: 'assault-burst-quad',
    title: 'ASSAULT BURST - QUAD',
    type: 'Fire Mode',
    summary:
      'Adds four round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireQuad.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'assault-burst-triple',
    title: 'ASSAULT BURST - TRIPLE',
    type: 'Fire Mode',
    summary:
      'Adds three round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'blast-core',
    title: 'BLAST CORE',
    type: 'Body Mod',
    summary: 'Staggered enemies explode on death',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Explosion.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'On enemy death',
      },
    ],
  },
  {
    slug: 'blast-cutter',
    title: 'Blast Cutter',
    type: 'Digisword Mod',
    summary: 'Melee will now destroy structures',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BlastCutter.png',
      alt: '',
    },
  },
  {
    slug: 'blastwave-charge',
    title: 'BLASTWAVE CHARGE',
    type: 'Projectile Mod',
    summary: 'Physics projectile that detonates with a moderate explosion.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Demolition.png',
      alt: '',
    },
  },
  {
    slug: 'bunnyhop-xes',
    title: 'BUNNYHOP.xes',
    type: 'Body Mod',
    summary: 'Jumping out of a slide will drop a destructive mine',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BunnyHop.png',
      alt: '',
    },
  },
  {
    slug: 'burning-cascade',
    title: 'BURNING CASCADE',
    type: 'Body Mod',
    summary: 'Destruction will drop burning bombs',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FireCascade.png',
      alt: '',
    },
  },
  {
    slug: 'burst-fire-quad',
    title: 'BURST FIRE - QUAD',
    type: 'Fire Mode',
    summary: 'Adds four round burst fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireQuad.png',
      alt: '',
    },
  },
  {
    slug: 'burst-fire-triple',
    title: 'BURST FIRE - TRIPLE',
    type: 'Fire Mode',
    summary: 'Adds three round burst fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
  },
  {
    slug: 'canted-sight',
    title: 'CANTED SIGHT',
    type: 'Optic Mod',
    summary: 'Adds a canted angle sight to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
  },
  {
    slug: 'catalyst-adapter',
    title: 'CATALYST ADAPTER',
    type: 'Ability Mod',
    summary:
      'For a brief duration, any attack that could apply an elemental stack will have a 100% chance',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Catalyst.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: '100% chance to apply an elemental stack with eligible attacks',
      },
    ],
  },
  {
    slug: 'cha0s-modulator-blk',
    title: 'Cha0s_Modulator.blk',
    type: 'Weapon Mod',
    summary: 'Randomly increases or decreases weapon damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Unknown.png',
      alt: '',
    },
  },
  {
    slug: 'chain-reaction',
    title: 'CHAIN REACTION',
    type: 'Weapon Mod',
    summary: 'Projectiles will ricochet to the closest target',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Chain.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot',
    title: 'CHARGED SHOT',
    type: 'Fire Mode',
    summary: 'Adds charged fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-assault',
    title: 'CHARGED SHOT - ASSAULT',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-lmg',
    title: 'CHARGED SHOT - LMG',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-marksman',
    title: 'CHARGED SHOT - MARKSMAN',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-pistol',
    title: 'CHARGED SHOT - PISTOL',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-shotgun',
    title: 'CHARGED SHOT - SHOTGUN',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'charged-shot-sniper',
    title: 'CHARGED SHOT - SNIPER',
    type: 'Fire Mode',
    summary: 'Adds charged shot fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Charge.png',
      alt: '',
    },
  },
  {
    slug: 'chrono-hold',
    title: 'CHRONO HOLD',
    type: 'Ability Mod',
    summary: 'Freeze time for a short duration',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_ChronoHold.png',
      alt: '',
    },
  },
  {
    slug: 'cluster-scatter',
    title: 'CLUSTER SCATTER',
    type: 'Body Mod',
    summary: 'Upon detonation, grenade will release several smaller grenades',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_ClusterScatter.png',
      alt: '',
    },
  },
  {
    slug: 'cold-snap',
    title: 'COLD SNAP',
    type: 'Body Mod',
    summary: 'Taking damage freezes all enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ColdSnap.png',
      alt: '',
    },
  },
  {
    slug: 'collision-burst',
    title: 'COLLISION BURST',
    type: 'Weapon Mod',
    summary:
      'Projectile will create a burst of copies when it collides with a surface',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CollisionBurst.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When the projectile hits a surface',
      },
    ],
  },
  {
    slug: 'column-invoker',
    title: 'COLUMN INVOKER',
    type: 'Utility Mod',
    summary: 'Enables all slots in the current column',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ColumnSlotInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'column-repeater',
    title: 'COLUMN REPEATER',
    type: 'Utility Mod',
    summary: 'All slots in the current column execute twice',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ColumnRepeater.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Slots in the current column execute twice',
      },
    ],
  },
  {
    slug: 'corner-resonator',
    title: 'CORNER RESONATOR',
    type: 'Utility Mod',
    summary:
      'Enables all corner slots and also adds additional executions to them.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CornerResonator.png',
      alt: '',
    },
  },
  {
    slug: 'corrosive-shot',
    title: 'CORROSIVE SHOT',
    type: 'Projectile Mod',
    summary: 'A powerful projectile imbued with corrosion',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Corrosive.png',
      alt: '',
    },
  },
  {
    slug: 'corrosive-strike',
    title: 'CORROSIVE STRIKE',
    type: 'Ability Mod',
    summary:
      'Creates a burst of corrisive fluid. Damaging targets and inflicting corrosion',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CorrosiveStrike.png',
      alt: '',
    },
  },
  {
    slug: 'corrosive-tether',
    title: 'CORROSIVE TETHER',
    type: 'Body Mod',
    summary: 'Objects thrown with gravity tether will inflict corrosion.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CorrosiveTether.png',
      alt: '',
    },
  },
  {
    slug: 'corruption-cleanse',
    title: 'CORRUPTION CLEANSE',
    type: 'Body Mod',
    summary: 'Heal slightly after cleansing a corruption',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Corruptor.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'After cleansing a corruption',
      },
    ],
  },
  {
    slug: 'cost-amp',
    title: 'COST-AMP',
    type: 'Body Mod',
    summary: 'Reduces price of items in shops',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Shop.png',
      alt: '',
    },
  },
  {
    slug: 'cover-sync-unit',
    title: 'COVER SYNC UNIT',
    type: 'Body Mod',
    summary: 'Reloading creates a static shield',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_HexShield.png',
      alt: '',
    },
  },
  {
    slug: 'credit-rage',
    title: 'CREDIT RAGE',
    type: 'Body Mod',
    summary: 'Deal more damage the more credits that are held',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_VoidCoin.png',
      alt: '',
    },
  },
  {
    slug: 'crit-driver-unit',
    title: 'CRIT DRIVER UNIT',
    type: 'Body Mod',
    summary:
      'Weapon damage is always critical for a short duration after using an ability',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CriticalAbility.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'After using an ability',
      },
    ],
  },
  {
    slug: 'critical-ability',
    title: 'CRITICAL ABILITY',
    type: 'Body Mod',
    summary:
      'Destroying an enemy gives a slight chance to instantly regenerate ability',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CriticalAbility.png',
      alt: '',
    },
  },
  {
    slug: 'critical-fire',
    title: 'CRITICAL FIRE',
    type: 'Body Mod',
    summary: 'Enemies inflicted with fire will always receive a critical hit',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CriticalFire.png',
      alt: '',
    },
  },
  {
    slug: 'critical-overdrive',
    title: 'CRITICAL OVERDRIVE',
    type: 'Ability Mod',
    summary: 'All damage critical for a short duration',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CriticalOverdrive.png',
      alt: '',
    },
  },
  {
    slug: 'critical-wounds',
    title: 'CRITICAL WOUNDS',
    type: 'Weapon Mod',
    summary: 'Critical hits have a chance to apply laceration',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CriticalWounds.png',
      alt: '',
    },
  },
  {
    slug: 'cross-invoker',
    title: 'CROSS INVOKER',
    type: 'Utility Mod',
    summary: 'Opens any slots in a two slot diagonal direction from this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_CrossInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'death-nova',
    title: 'DEATH NOVA',
    type: 'Weapon Mod',
    summary: 'Chance for enemies to explode on death',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DeathNova.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'On enemy death',
      },
    ],
  },
  {
    slug: 'decimating-orb',
    title: 'DECIMATING ORB',
    type: 'Projectile Mod',
    summary:
      'A slow moving orb that has a large amount of air resistance. Deals radial damage when projectile expires.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Gravity.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When the projectile expires',
      },
    ],
  },
  {
    slug: 'demolition-core',
    title: 'DEMOLITION CORE',
    type: 'Body Mod',
    summary: 'Increased damage from destruction debris',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Destruction_Building.png',
      alt: '',
    },
  },
  {
    slug: 'digi-struct',
    title: 'DIGI STRUCT',
    type: 'Projectile Mod',
    summary:
      'A digital projectile that is greatly effective against structures',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DigiStruct.png',
      alt: '',
    },
  },
  {
    slug: 'digistruct-bolt',
    title: 'Digistruct Bolt',
    type: 'Digisword Mod',
    summary: 'Holding melee will produce a high damage destructive bolt',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DigistructBolt.png',
      alt: '',
    },
  },
  {
    slug: 'down-slot-invoker',
    title: 'DOWN SLOT INVOKER',
    type: 'Utility Mod',
    summary:
      'Opens any slots in a three slot vicinity downwards from this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DownInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'down-slot-repeater',
    title: 'DOWN SLOT REPEATER',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent down slot.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DownSlotRepeater.png',
      alt: '',
    },
  },
  {
    slug: 'down-slot-repeater-min',
    title: 'DOWN SLOT REPEATER [MIN]',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent down slot. Disables two adjacent slots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DownSlotRepeaterMin.png',
      alt: '',
    },
  },
  {
    slug: 'echo-shot',
    title: 'ECHO SHOT',
    type: 'Weapon Mod',
    summary: 'Fires an additional projectile',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Additional.png',
      alt: '',
    },
  },
  {
    slug: 'electro-strike',
    title: 'ELECTRO STRIKE',
    type: 'Ability Mod',
    summary:
      'Creates a static energy burst. Damaging targets and inflicting electricity',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ElectricStrike.png',
      alt: '',
    },
  },
  {
    slug: 'elemental-amp',
    title: 'ELEMENTAL AMP',
    type: 'Body Mod',
    summary: 'Increases all elemental damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Element.png',
      alt: '',
    },
  },
  {
    slug: 'elemental-stabiliser',
    title: 'ELEMENTAL STABILISER',
    type: 'Body Mod',
    summary:
      'Increases duration that an elemental infliction will be applied to an enemy',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Element.png',
      alt: '',
    },
  },
  {
    slug: 'energy-pack',
    title: 'ENERGY PACK',
    type: 'Utility Mod',
    summary: 'Adds 20 energy to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Energy.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Energy +20',
      },
    ],
  },
  {
    slug: 'energy-pack-plus',
    title: 'ENERGY PACK PLUS',
    type: 'Utility Mod',
    summary: 'Adds 40 energy to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Energy.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Energy +40',
      },
    ],
  },
  {
    slug: 'energy-pack-pro',
    title: 'ENERGY PACK PRO',
    type: 'Utility Mod',
    summary: 'Adds 60 energy to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Energy.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Energy +60',
      },
    ],
  },
  {
    slug: 'entropy-helper',
    title: 'ENTROPY HELPER',
    type: 'Body Mod',
    summary: 'A strange robot assists you, attacking nearby enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_EntropyHelper.png',
      alt: '',
    },
  },
  {
    slug: 'entropy-token',
    title: 'ENTROPY TOKEN',
    type: 'Body Mod',
    summary:
      'Calls upon The Entropy Centre to revive the holder on death. One time use.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_EntropyToken.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'On the holder’s death',
      },
    ],
  },
  {
    slug: 'explosive-collision',
    title: 'EXPLOSIVE COLLISION',
    type: 'Weapon Mod',
    summary: 'Projectiles will create a small explosion on collision',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Demolition.png',
      alt: '',
    },
  },
  {
    slug: 'feedback-sync',
    title: 'FEEDBACK SYNC',
    type: 'Weapon Mod',
    summary: 'Deal increased damage with consecutive hits',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FeedbackSync.png',
      alt: '',
    },
  },
  {
    slug: 'final-impact-core',
    title: 'FINAL IMPACT CORE',
    type: 'Weapon Mod',
    summary: 'Last shot in magazine does additional damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FinalImpactCore.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +100%',
      },
      {
        label: 'Activation',
        value: 'On the last shot in the magazine',
      },
    ],
  },
  {
    slug: 'fire-arc',
    title: 'FIRE ARC',
    type: 'Weapon Mod',
    summary: 'Creates arcs of fire between two projectiles',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FireArc.png',
      alt: '',
    },
  },
  {
    slug: 'fire-shot',
    title: 'FIRE SHOT',
    type: 'Projectile Mod',
    summary: 'A powerful projectile imbued with fire',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Fire.png',
      alt: '',
    },
  },
  {
    slug: 'fire-strike',
    title: 'FIRE STRIKE',
    type: 'Ability Mod',
    summary: 'Fires a burst of fire. Damaging targets and Inflicting fire',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FireStrike.png',
      alt: '',
    },
  },
  {
    slug: 'fire-tether',
    title: 'FIRE TETHER',
    type: 'Body Mod',
    summary: 'Objects thrown with gravity tether will inflict fire',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FireTether.png',
      alt: '',
    },
  },
  {
    slug: 'flamethrower',
    title: 'FLAMETHROWER',
    type: 'Projectile Mod',
    summary: 'A projectile module that fires highly damaging flames',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Flamethrower.png',
      alt: '',
    },
  },
  {
    slug: 'flat-damage',
    title: 'FLAT DAMAGE',
    type: 'Weapon Mod',
    summary: 'Slightly increases weapon damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Velocity.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +20%',
      },
    ],
  },
  {
    slug: 'focus-fire-enhancer',
    title: 'FOCUS FIRE ENHANCER',
    type: 'Weapon Mod',
    summary: 'Slighty increases damage when in ADS',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FocusFire.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +30%',
      },
      {
        label: 'Activation',
        value: 'While aiming down sights',
      },
    ],
  },
  {
    slug: 'freeze-mark-unit',
    title: 'FREEZE MARK UNIT',
    type: 'Ability Mod',
    summary: 'Instantly explode all staggered enemies with a freezing blast',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FreezeMarkUnit.png',
      alt: '',
    },
  },
  {
    slug: 'freezeburst-adapter',
    title: 'FREEZEBURST ADAPTER',
    type: 'Weapon Mod',
    summary: 'Slight chance to freeze enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Ice.png',
      alt: '',
    },
  },
  {
    slug: 'freezing-cascade',
    title: 'FREEZING CASCADE',
    type: 'Body Mod',
    summary: 'Destruction will drop freezing bombs',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FreezingCascade.png',
      alt: '',
    },
  },
  {
    slug: 'freezing-tether',
    title: 'FREEZING TETHER',
    type: 'Body Mod',
    summary: 'Objects thrown with gravity tether will freeze enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FreezingTether.png',
      alt: '',
    },
  },
  {
    slug: 'full-auto',
    title: 'FULL AUTO',
    type: 'Fire Mode',
    summary: 'Adds full auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'full-auto-marksman',
    title: 'FULL AUTO - MARKSMAN',
    type: 'Fire Mode',
    summary: 'Adds full auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'full-auto-pistol',
    title: 'FULL AUTO - PISTOL',
    type: 'Fire Mode',
    summary: 'Adds full auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'full-auto-shotgun',
    title: 'FULL AUTO - SHOTGUN',
    type: 'Fire Mode',
    summary: 'Adds full auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'full-auto-sniper',
    title: 'FULL AUTO - SNIPER',
    type: 'Fire Mode',
    summary: 'Adds full auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'glacial-strike',
    title: 'GLACIAL STRIKE',
    type: 'Ability Mod',
    summary: 'Creates a burst of ice. Damaging targets and inflicting freezing',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_IceStrike.png',
      alt: '',
    },
  },
  {
    slug: 'glide-sync-module',
    title: 'GLIDE SYNC MODULE',
    type: 'Body Mod',
    summary: 'Increased strafe speed when in in ADS',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Movement.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'While aiming down sights',
      },
    ],
  },
  {
    slug: 'grav-boots',
    title: 'GRAV BOOTS',
    type: 'Body Mod',
    summary:
      'Hold crouch in mid-air to increase gravity. Landing will create a shockwave',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_GravBoots.png',
      alt: '',
    },
  },
  {
    slug: 'grav-invert-aix',
    title: 'Grav_Invert.aix',
    type: 'Weapon Mod',
    summary: 'Inverts projectile gravity',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_InvertGrav.png',
      alt: '',
    },
  },
  {
    slug: 'gravitech-module',
    title: 'GRAVITECH MODULE',
    type: 'Weapon Mod',
    summary: 'Removes projectile gravity',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RemoveGrav.png',
      alt: '',
    },
  },
  {
    slug: 'hard-throw',
    title: 'HARD THROW',
    type: 'Body Mod',
    summary:
      'All gravity tethered objects will destroy the environment when thrown',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_GravityTether.png',
      alt: '',
    },
  },
  {
    slug: 'heatburst-adapter',
    title: 'HEATBURST ADAPTER',
    type: 'Weapon Mod',
    summary: 'Slight chance to ignite enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Heatburst.png',
      alt: '',
    },
  },
  {
    slug: 'homing-bullets',
    title: 'HOMING BULLETS',
    type: 'Weapon Mod',
    summary: 'Projectiles home towards enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Homing.png',
      alt: '',
    },
  },
  {
    slug: 'hotshot',
    title: 'HOTSHOT',
    type: 'Weapon Mod',
    summary: 'Critical hit kills cause enemies to explode',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Hotshot.png',
      alt: '',
    },
  },
  {
    slug: 'ice-breaker',
    title: 'ICE BREAKER',
    type: 'Body Mod',
    summary: 'Enemies inflicted with ice will always receive a critical hit',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_IceBreaker.png',
      alt: '',
    },
  },
  {
    slug: 'ice-shot',
    title: 'ICE SHOT',
    type: 'Projectile Mod',
    summary: 'A powerful projectile imbued with ice',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Ice.png',
      alt: '',
    },
  },
  {
    slug: 'icewave-charge',
    title: 'ICEWAVE CHARGE',
    type: 'Projectile Mod',
    summary: 'Physics projectile that detonates with a freezing explosion',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Ice.png',
      alt: '',
    },
  },
  {
    slug: 'ignit-launcher',
    title: 'IGNIT LAUNCHER',
    type: 'Body Mod',
    summary: 'Adds ability to pick up ignits with the gravity tether',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_IgnitLauncher.png',
      alt: '',
    },
  },
  {
    slug: 'impact-loader',
    title: 'IMPACT LOADER',
    type: 'Body Mod',
    summary:
      'Hitting an enemy with a thrown object will add ammo back into magazine',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ImpactLoader.png',
      alt: '',
    },
  },
  {
    slug: 'impact-protocol',
    title: 'IMPACT PROTOCOL',
    type: 'Body Mod',
    summary: 'Increases grenade destruction radius',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ImpactProtocol.png',
      alt: '',
    },
  },
  {
    slug: 'infini-ammo',
    title: 'INFINI-AMMO',
    type: 'Ability Mod',
    summary: 'Provides infinite ammo for a short duration',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_FullyAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'input-overdrive-hop',
    title: 'INPUT_OVERDRIVE.hop',
    type: 'Weapon Mod',
    summary: 'Increases damage relative to input sensitivity setting',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_InputOverdrive.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +100%',
      },
    ],
  },
  {
    slug: 'invoker-nuke',
    title: 'INVOKER.nuke',
    type: 'Utility Mod',
    summary: 'Both opens and disables slots in a large area from this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_InvokerBomb.png',
      alt: '',
    },
  },
  {
    slug: 'jump-stack',
    title: 'JUMP STACK',
    type: 'Body Mod',
    summary: 'Adds additional mid-air jump',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_AddJump.png',
      alt: '',
    },
  },
  {
    slug: 'kill-charge-engine',
    title: 'KILL CHARGE ENGINE',
    type: 'Body Mod',
    summary:
      'Partially refill current weapon magazine after killing a staggered enemy',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_DamageSurge.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'After killing a staggered enemy',
      },
    ],
  },
  {
    slug: 'kinetic-breach',
    title: 'KINETIC BREACH',
    type: 'Body Mod',
    summary:
      'Allows ability to dash through enemies. Dashing through them deals damage.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_KineticBreach.png',
      alt: '',
    },
  },
  {
    slug: 'kinetic-converter',
    title: 'KINETIC CONVERTER',
    type: 'Weapon Mod',
    summary: 'Increases projectile damage the faster you are moving',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Kinetic.png',
      alt: '',
    },
  },
  {
    slug: 'kinetic-strike-adapter',
    title: 'KINETIC STRIKE ADAPTER',
    type: 'Weapon Mod',
    summary: 'Greatly increases projectile damage when sliding',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Slide.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'While sliding',
      },
    ],
  },
  {
    slug: 'kinship-tga',
    title: 'KINSHIP.TGA',
    type: 'Weapon Mod',
    summary:
      'Increases reload speed relative to how many friends are present in friends list',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Kinship.png',
      alt: '',
    },
  },
  {
    slug: 'l0ad-surge-crn',
    title: 'L0ad-surge.crn',
    type: 'Weapon Mod',
    summary: 'Deal damage relative to current ammo in magazine',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Magazine.png',
      alt: '',
    },
  },
  {
    slug: 'left-slot-invoker',
    title: 'LEFT SLOT INVOKER',
    type: 'Utility Mod',
    summary:
      'Opens any slots in a three slot vicinity to the left of this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LeftInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'left-slot-repeater',
    title: 'LEFT SLOT REPEATER',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent left slot.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LeftSlotRepeater.png',
      alt: '',
    },
  },
  {
    slug: 'left-slot-repeater-min',
    title: 'LEFT SLOT REPEATER [MIN]',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent left slot. Disables two adjacent slots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LeftSlotRepeaterMin.png',
      alt: '',
    },
  },
  {
    slug: 'lens-breaker-tga',
    title: 'LENS_BREAKER.tga',
    type: 'Body Mod',
    summary: 'Sprint speed increases relative to field of view setting',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LensBreaker.png',
      alt: '',
    },
  },
  {
    slug: 'lift-rip-engine',
    title: 'LIFT RIP ENGINE',
    type: 'Ability Mod',
    summary: 'Designates an area that launches enemies upwards',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LiftRip.png',
      alt: '',
    },
  },
  {
    slug: 'linear-invoker',
    title: 'LINEAR INVOKER',
    type: 'Utility Mod',
    summary:
      'Enables any disabled slots in the adjacent horizontal and vertical slots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_LinearInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'live-duplicator',
    title: 'LIVE DUPLICATOR',
    type: 'Weapon Mod',
    summary: 'Projectile will create copies of itself as it travels',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Duplicator.png',
      alt: '',
    },
  },
  {
    slug: 'lmg-burst-quad',
    title: 'LMG BURST - QUAD',
    type: 'Fire Mode',
    summary:
      'Adds four round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireQuad.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'lmg-burst-triple',
    title: 'LMG BURST - TRIPLE',
    type: 'Fire Mode',
    summary:
      'Adds three round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'lucky-day',
    title: 'LUCKY DAY',
    type: 'Body Mod',
    summary: 'Increases luck (chance to receive higher tier items)',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Lucky.png',
      alt: '',
    },
  },
  {
    slug: 'magnetic-interference',
    title: 'MAGNETIC INTERFERENCE',
    type: 'Weapon Mod',
    summary: 'Increases weapon damage, but projectiles move in random patterns',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_MagneticInterference.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +40%, Accuracy -40%',
      },
    ],
  },
  {
    slug: 'marksman-burst-triple',
    title: 'MARKSMAN BURST - TRIPLE',
    type: 'Fire Mode',
    summary:
      'Adds three round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'melee-reclaim',
    title: 'Melee Reclaim',
    type: 'Digisword Mod',
    summary: 'Meleeing an enemy will reset dash cooldown',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_MeleeReclaim.png',
      alt: '',
    },
  },
  {
    slug: 'mine-fabriactor',
    title: 'MINE FABRIACTOR',
    type: 'Ability Mod',
    summary: 'Generates a proximity mine',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_MineFabricator.png',
      alt: '',
    },
  },
  {
    slug: 'mini-rockets',
    title: 'MINI ROCKETS',
    type: 'Projectile Mod',
    summary: 'Fires several highly inaccurate projectiles',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_MiniRocket.png',
      alt: '',
    },
  },
  {
    slug: 'missile-strike',
    title: 'MISSILE STRIKE',
    type: 'Ability Mod',
    summary: 'Designate a target area to receive a missile strike',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Bullet.png',
      alt: '',
    },
  },
  {
    slug: 'nade-rage',
    title: 'NADE RAGE',
    type: 'Ability Mod',
    summary:
      'Provides unlimited grenades with no cooldown for a short duration',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_NadeRage.png',
      alt: '',
    },
  },
  {
    slug: 'onehitwonder-ift',
    title: 'OneHitWonder.ift',
    type: 'Weapon Mod',
    summary: 'Sets magazine size to 1. Greatly increases damage.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_OneHit.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Weapon Damage +400%, Magazine Size set to 1',
      },
    ],
  },
  {
    slug: 'optic-x1-type-2',
    title: 'OPTIC X1 - TYPE 2',
    type: 'Optic Mod',
    summary: 'Adds a x1 optic to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Adds a 1× optic',
      },
    ],
  },
  {
    slug: 'optic-x1-type-4',
    title: 'OPTIC X1 - TYPE 4',
    type: 'Optic Mod',
    summary: 'Adds a x1 optic to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Adds a 1× optic',
      },
    ],
  },
  {
    slug: 'optic-x2-type-1',
    title: 'OPTIC X2 - Type 1',
    type: 'Optic Mod',
    summary: 'Adds a x2 optic to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Adds a 2× optic',
      },
    ],
  },
  {
    slug: 'optic-x2-type-1-2',
    title: 'OPTIC X2 - Type 1',
    type: 'Optic Mod',
    summary: 'Adds a x2 optic to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Adds a 2× optic',
      },
    ],
  },
  {
    slug: 'payday',
    title: 'PAYDAY',
    type: 'Body Mod',
    summary: 'Enemies have a chance to drop extra credits',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Payday.png',
      alt: '',
    },
  },
  {
    slug: 'pistol-burst-quad',
    title: 'PISTOL BURST - QUAD',
    type: 'Fire Mode',
    summary:
      'Adds four round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireQuad.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'pistol-burst-triple',
    title: 'PISTOL BURST - TRIPLE',
    type: 'Fire Mode',
    summary:
      'Adds three round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'plasma',
    title: 'PLASMA',
    type: 'Projectile Mod',
    summary:
      'An energy projectile with low gravity and a slight damage increase',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Plasma.png',
      alt: '',
    },
  },
  {
    slug: 'potato-pot',
    title: 'Potato.pot',
    type: 'Weapon Mod',
    summary:
      'Magazine size increases relative to a decreasing resolution setting',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Potato.png',
      alt: '',
    },
  },
  {
    slug: 'predator',
    title: 'PREDATOR',
    type: 'Weapon Mod',
    summary: 'Do not consume ammo when stationary',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Predator.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'While stationary',
      },
    ],
  },
  {
    slug: 'proximity-amp',
    title: 'PROXIMITY AMP',
    type: 'Weapon Mod',
    summary: 'Damage increased the closer you are to the target',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Proximity.png',
      alt: '',
    },
  },
  {
    slug: 'proximity-destructor',
    title: 'PROXIMITY DESTRUCTOR',
    type: 'Ability Mod',
    summary: 'Destroys objects around you',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Destruction.png',
      alt: '',
    },
  },
  {
    slug: 'pump-shot',
    title: 'PUMP SHOT',
    type: 'Fire Mode',
    summary: 'Adds pump-action fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_FireMode_PumpShot.png',
      alt: '',
    },
  },
  {
    slug: 'radiant-sphere',
    title: 'RADIANT SPHERE',
    type: 'Weapon Mod',
    summary: 'Projectiles are surrounded by a damaging sphere',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RadiantSphere.png',
      alt: '',
    },
  },
  {
    slug: 'revved-up',
    title: 'REVVED UP',
    type: 'Weapon Mod',
    summary: 'Fire rate increases the longer the trigger is held',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RevvedUp.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Fire Rate -300 RPM',
      },
      {
        label: 'Activation',
        value: 'While holding the trigger',
      },
    ],
  },
  {
    slug: 'ricochet-bolt',
    title: 'RICOCHET BOLT',
    type: 'Projectile Mod',
    summary: 'Spinning projectile that will ricochet to additional enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Blade.png',
      alt: '',
    },
  },
  {
    slug: 'right-slot-invoker',
    title: 'RIGHT SLOT INVOKER',
    type: 'Utility Mod',
    summary:
      'Opens any slots in a three slot vicinity to the right of this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RightInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'right-slot-repeater',
    title: 'RIGHT SLOT REPEATER',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent right slot.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RightSlotRepeater.png',
      alt: '',
    },
  },
  {
    slug: 'right-slot-repeater-min',
    title: 'RIGHT SLOT REPEATER MIN',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent right slot. Disables two adjacent slots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RightSlotRepeaterMin.png',
      alt: '',
    },
  },
  {
    slug: 'row-invoker',
    title: 'ROW INVOKER',
    type: 'Utility Mod',
    summary: 'Enables all slots in the current row',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RowSlotInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'row-repeater',
    title: 'ROW REPEATER',
    type: 'Utility Mod',
    summary: 'Adds additional executions to all slots in the current row',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RowRepeater.png',
      alt: '',
    },
  },
  {
    slug: 'rusted-interior',
    title: 'RUSTED INTERIOR',
    type: 'Weapon Mod',
    summary: 'Slighty increases weapon damage, but increases reload time',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_RustedInterior.png',
      alt: '',
    },
  },
  {
    slug: 'scatter-net',
    title: 'SCATTER NET',
    type: 'Projectile Mod',
    summary: 'Fires a barrage projectiles in a grid pattern',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Scatternet.png',
      alt: '',
    },
  },
  {
    slug: 'sci-burst-engine',
    title: 'SCI BURST ENGINE',
    type: 'Body Mod',
    summary:
      'Destroying a staggered enemy that has elemental inflictions applied, will explode and spread the leading elemental effect to nearby enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Atomic.png',
      alt: '',
    },
  },
  {
    slug: 'scorch-mark-unit',
    title: 'SCORCH MARK UNIT',
    type: 'Ability Mod',
    summary: 'Instantly explode all staggered enemies with a scorch blast',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ScorchMarkUnit.png',
      alt: '',
    },
  },
  {
    slug: 'scream-trigger-mic',
    title: 'SCREAM_TRIGGER.MIC',
    type: 'Fire Mode',
    summary: 'Weapon fires when you yell into microphone',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ScreamTrigger.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When you yell into the microphone',
      },
    ],
  },
  {
    slug: 'semi-auto',
    title: 'SEMI AUTO',
    type: 'Fire Mode',
    summary: 'Adds semi auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SemiAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'semi-auto-assault',
    title: 'SEMI AUTO - ASSAULT',
    type: 'Fire Mode',
    summary:
      'Adds semi-auto fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SemiAutomatic.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'semi-auto-lmg',
    title: 'SEMI AUTO - LMG',
    type: 'Fire Mode',
    summary:
      'Adds semi-auto fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SemiAutomatic.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'semi-auto-shotgun',
    title: 'SEMI AUTO - SHOTGUN',
    type: 'Fire Mode',
    summary: 'Adds semi-auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SemiAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'semi-auto-sniper',
    title: 'SEMI AUTO - SNiPER',
    type: 'Fire Mode',
    summary: 'Adds semi-auto fire mode to weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SemiAutomatic.png',
      alt: '',
    },
  },
  {
    slug: 'serrated-edge',
    title: 'SERRATED EDGE',
    type: 'Digisword Mod',
    summary: 'Melee will have a chance to apply laceration to enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SerratedEdge.png',
      alt: '',
    },
  },
  {
    slug: 'sharp-debris',
    title: 'SHARP DEBRIS',
    type: 'Body Mod',
    summary: 'Destruction debris has a chance to apply laceration to enemies',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SharpDebris.png',
      alt: '',
    },
  },
  {
    slug: 'sickness-vom',
    title: 'Sickness.vom',
    type: 'Weapon Mod',
    summary:
      'Produces a number of homing projectiles relative to motion blur intensity setting',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Sickness.png',
      alt: '',
    },
  },
  {
    slug: 'simple-red-dot',
    title: 'SIMPLE RED DOT',
    type: 'Optic Mod',
    summary: 'Adds a small floating red dot sight to weapon.',
    icon: {
      src: '/images/games/void-breaker/modules/T_Icon_Opticx1_Type2.png',
      alt: '',
    },
  },
  {
    slug: 'skirmisher',
    title: 'SKIRMISHER',
    type: 'Weapon Mod',
    summary:
      'Increases weapon damage during, and a short duration after wall running',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Skirmisher.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'During and briefly after wall running',
      },
    ],
  },
  {
    slug: 'skirmisher-plus',
    title: 'SKIRMISHER PLUS',
    type: 'Weapon Mod',
    summary:
      'Greatly increases weapon damage during, and a short duration after wall running',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_SkirmisherPlus.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'During and briefly after wall running',
      },
    ],
  },
  {
    slug: 'skyfire',
    title: 'SKYFIRE',
    type: 'Weapon Mod',
    summary: 'Projectiles will fire from the sky instead of from weapon',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SkyFire.png',
      alt: '',
    },
  },
  {
    slug: 'smg-burst-quad',
    title: 'SMG BURST - QUAD',
    type: 'Fire Mode',
    summary:
      'Adds four round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireQuad.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'smg-burst-triple',
    title: 'SMG BURST - TRIPLE',
    type: 'Fire Mode',
    summary:
      'Adds three round burst fire mode to weapon\nIncreases damage when this fire mode is selected',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_BurstFireTriple.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Activation',
        value: 'When this fire mode is selected',
      },
    ],
  },
  {
    slug: 'sparkbreaker',
    title: 'SPARKBREAKER',
    type: 'Projectile Mod',
    summary:
      'A projectile that has a short life, fizzling out into a burst of sparks',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Spark.png',
      alt: '',
    },
  },
  {
    slug: 'sphere-invoker',
    title: 'SPHERE INVOKER',
    type: 'Utility Mod',
    summary: 'Enable all disabled slots that surround this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SphereInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'sphere-resonator',
    title: 'SPHERE RESONATOR',
    type: 'Utility Mod',
    summary:
      'Enable all slots that surround this slot\nAdds additional excecution to all slots that surround this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_SphereInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'storm-cycle',
    title: 'STORM CYCLE',
    type: 'Ability Mod',
    summary: 'Strike nearby enemies with lightning',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Lightning.png',
      alt: '',
    },
  },
  {
    slug: 'stuck-trigger-dlt',
    title: 'stuck.trigger.dlt',
    type: 'Weapon Mod',
    summary:
      'Weapon trigger will always break, expelling all projectiles at an extremely fast fire rate',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Stuck.png',
      alt: '',
    },
  },
  {
    slug: 'swat-nmd',
    title: 'SWAT.NMD',
    type: 'Weapon Mod',
    summary:
      'Regular hits deal greatly reduced damage. Critical hits deal +400% damage.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_SWAT.png',
      alt: '',
    },
    moduleEffects: [
      {
        label: 'Effect',
        value: 'Critical hits deal +400% damage',
      },
    ],
  },
  {
    slug: 'throwing-knife',
    title: 'THROWING KNIFE',
    type: 'Ability Mod',
    summary:
      'Throwing knife that deals high damage and extremely high critical damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_ThrowingKnife.png',
      alt: '',
    },
  },
  {
    slug: 'trailblazer',
    title: 'TRAILBLAZER',
    type: 'Body Mod',
    summary: 'Sldiing generates a trail of fire',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Trailblazer.png',
      alt: '',
    },
  },
  {
    slug: 'trigger-discipline',
    title: 'TRIGGER DISCIPLINE',
    type: 'Weapon Mod',
    summary: 'Increased damage the longer you wait between shots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_TriggerDiscipline.png',
      alt: '',
    },
  },
  {
    slug: 'up-slot-invoker',
    title: 'UP SLOT INVOKER',
    type: 'Utility Mod',
    summary: 'Opens any slots in a three slot vicinity upwards from this slot',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_UpInvoker.png',
      alt: '',
    },
  },
  {
    slug: 'up-slot-repeater',
    title: 'UP SLOT REPEATER',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent up slot.',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_UpSlotRepeater.png',
      alt: '',
    },
  },
  {
    slug: 'up-slot-repeater-min',
    title: 'UP SLOT REPEATER [MIN]',
    type: 'Utility Mod',
    summary:
      'Adds additional execution to the modification in the adjacent up slot. Disables two adjacent slots',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_UpSlotRepeaterMin.png',
      alt: '',
    },
  },
  {
    slug: 'velocity-clamp',
    title: 'VELOCITY CLAMP',
    type: 'Weapon Mod',
    summary: 'Clamps projectile velocity to a low value',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Clamp.png',
      alt: '',
    },
  },
  {
    slug: 'voltaic-arc',
    title: 'VOLTAIC ARC',
    type: 'Weapon Mod',
    summary: 'Creates arcs of electricity between two projectiles',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_VoltaicArc.png',
      alt: '',
    },
  },
  {
    slug: 'voltaic-cascade',
    title: 'VOLTAIC CASCADE',
    type: 'Body Mod',
    summary: 'Destruction will drop voltaic bombs',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_VoltaicCascade.png',
      alt: '',
    },
  },
  {
    slug: 'voltaic-tether',
    title: 'VOLTAIC TETHER',
    type: 'Body Mod',
    summary: 'Objects thrown with gravity tether will inflict electricity',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_VoltaicTether.png',
      alt: '',
    },
  },
  {
    slug: 'voltaic-trail',
    title: 'VOLTAIC TRAIL',
    type: 'Body Mod',
    summary: 'Sliding generates a trail of electricity damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_VoltaicTrail.png',
      alt: '',
    },
  },
  {
    slug: 'voltburst-adapter',
    title: 'VOLTBURST ADAPTER',
    type: 'Weapon Mod',
    summary: 'Slight chance to inflict electricity damage',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_Voltburst.png',
      alt: '',
    },
  },
  {
    slug: 'wall-chain-protocol',
    title: 'WALL CHAIN PROTOCOL',
    type: 'Body Mod',
    summary: 'Initiating a wall run will reset dash cooldown',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_Icon_WallChain.png',
      alt: '',
    },
  },
  {
    slug: 'wall-ricochet',
    title: 'WALL RICOCHET',
    type: 'Weapon Mod',
    summary: 'Projectile will ricochet off walls',
    icon: {
      src: '/images/games/void-breaker/modules/T_Item_AddBounce.png',
      alt: '',
    },
  },
  {
    slug: 'zeus-strike',
    title: 'ZEUS STRIKE',
    type: 'Body Mod',
    summary:
      'Enemies hit by gravity tethered objects will be struck by lightning',
    icon: {
      src: '/images/games/void-breaker/modules/T_UI_ZeusStrike.png',
      alt: '',
    },
  },
] satisfies readonly VoidBreakerModule[];
