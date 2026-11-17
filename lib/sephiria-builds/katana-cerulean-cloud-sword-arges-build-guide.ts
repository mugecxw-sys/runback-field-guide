// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Lightning Damage</span><span class="bg-tag">Storm Cloud</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Cerulean Cloud Sword 'Arges' converts <strong>all</strong> of your damage into Lightning Damage, so from the first swing your build is a lightning build and every lightning bonus in the game applies to it. Then it adds a stack-and-spend loop on top: you build <strong>Residual Thunder</strong> stacks, and <strong>Special Attack: Cloud Slash spends them for a large hit</strong>.
 <br><br>The whole build is one decision, repeated: <strong>how many stacks are you at?</strong> Cloud Slash at full stacks deletes things. Cloud Slash at half stacks throws away half the multiplier — and because the sword is slow-ish and the stacks take real time to build, the temptation to fire early is constant. Get disciplined about it and the numbers are fine; get greedy about it and the build looks weak for no reason.
 <br><br>The rest of the setup is a Storm Cloud package: clouds apply Electrocution, Electrocution is Lightning Damage, and lightning is everything. <strong>13,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Frog</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Storm Cloud 10/10 · Magitech 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">13,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<input type="radio" name="cos" id="bg-c2">
<div class="bg-tl"><label for="bg-c1">Frog</label><label for="bg-c2">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/frog.webp" alt="Frog costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Frog</h3><p class="bg-mut">What this run used. Nothing in the build depends on the costume, so this is a preference pick rather than a damage one.</p></div>
<div class="bg-pn bg-p2"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage</strong>, flat, with no condition and no element to line up. Since all of this build's damage is already lightning, a plain multiplier with nothing to maintain is the more consistent choice of the two.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Frog costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Wind Sheet Music</strong> (<strong>+10% / +20% / +30% / +40% / +50% Melee Attack range</strong>) so the swings that build your stacks connect without you standing inside the enemy. Then <strong>Wanderer's Necklace</strong> (<strong>+6% / +12% / +18% Attack Speed</strong>, <strong>+2 / +4 / +6 Highest Elemental Damage</strong>) — the elemental damage line is straight lightning damage, which is what this weapon converts everything into.</li><li>Early-Run Goal: <strong>Storm Cloud, then Magitech, then Elemental</strong>. Storm Cloud is capacity and cloud damage, and the clouds are your main steady source of Electrocution; Magitech is the lightning line that scales the sword; Elemental is the last slot.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4bedd5ba8dcd9b77.webp" alt="Lightning Rod" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Lightning Rod</h3><p class="bg-mut"><strong>+5 / +10 / +15 / +20 / +25 Storm Cloud Capacity</strong>, <strong>+3% to +15% Storm Cloud Recovery Rate during Combat</strong>, and <strong>+1 to +5 Lightning Damage</strong>. Three lines that all point the same way, and the capacity is the one that matters: more capacity means the cloud keeps working while you are busy stacking the sword. Legendary, no drawback.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-540c78f1fbb5530d.webp" alt="Lightning Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Lightning Stone</h3><p class="bg-mut"><strong>+25% / +30% / +35% / +40% / +45% / +50% / +60% Extra Storm Cloud damage</strong>. Seven tiers, one stat, and it multiplies every cloud tick you put out. Only Rare, which is cheap for how much of your damage runs through clouds. No condition, no downside.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-f3c784581337885b.webp" alt="Leaf Bird Leather" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Leaf Bird Leather</h3><p class="bg-mut">When a <strong>Normal Attack or Dash attack hits</strong>, there is a <strong>100% / 175% / 275% / 400%</strong> chance to immediately consume 1 Storm Cloud (cooldown 1.2 / 0.9 / 0.8 / 0.6 seconds), plus <strong>+2% to +4% Extra Storm Cloud damage</strong>. This is the item that rewards the playstyle: hugging an enemy and mashing normal and dash attacks fires the cloud over and over, which is exactly how you both stack and deal damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-efe3ee1e53617df0.webp" alt="Sapote Fruit" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sapote Fruit</h3><p class="bg-mut"><strong>+4 / +8 / +12 / +16 Storm Cloud Capacity</strong> and <strong>+1 / +2 / +3 / +4 MP Regeneration</strong>. Pure economy — bigger cloud plus the regen to keep casting it. Worth noting the MP regen specifically: this build spends a lot on clouds and Cloud Slash, and running dry mid-fight is how the loop stalls.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-caa3d0cbcdbaa433.webp" alt="Thunderstorm Tracking Compass" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Thunderstorm Tracking Compass</h3><p class="bg-mut">When Electrocution is applied, <strong>15% / 30% / 45% / 60% chance to apply Enhanced Electrocution</strong>, plus <strong>+2 / +4 / +6 / +8 Lightning Damage</strong>. A chance-based upgrade rather than a guarantee — expect some procs to not happen — but on a build that is applying Electrocution constantly, a 60% reroll is a lot of extra damage for one Legendary slot.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1efbb7debc9c1a2b.webp" alt="Charm of Lightning" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Charm of Lightning</h3><p class="bg-mut"><strong>+3 / +4 / +6 / +8 Lightning Damage</strong>. Only Common, four tiers, and it does exactly one thing — but that one thing is the number everything else multiplies, and with all damage converted to lightning it applies to every single hit. The cheapest damage on the list.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the lightning conversion that defines the build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Thunder Sword 'Bronte'</h3><p class="bg-mut">The shared stepping stone of the lightning blades — this is where the element changes.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Damage dealt by Weapon Attack is <strong>reduced by 20%</strong>, but it is changed to <strong>Lightning Damage</strong>.</p><p class="bg-mut" style="margin-top:10px">You pay 20% weapon damage for the element. Everything in the core items list exists to make that trade profitable — lightning damage up, cloud damage up, Electrocution up.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Cerulean Cloud Sword 'Arges'</h3><p class="bg-mut">The final tier, and where the stack-and-spend loop appears.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> all of your damage is converted to <strong>Lightning Damage</strong> and scales with your lightning bonuses. Attacking builds <strong>Residual Thunder</strong> stacks, and <strong>Special Attack: Cloud Slash</strong> consumes them to deal a large burst of damage — the bigger the stack count when you fire, the bigger the hit.</p><p class="bg-mut" style="margin-top:10px">Practical translation: the sword is not a sustained damage weapon, it is a <strong>charge-up</strong> weapon. Your normal attacks are the reload, Cloud Slash is the shot, and the whole skill ceiling is knowing when to take it.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Storm Cloud, then Magitech, then Elemental</strong>. The cloud line is capacity and cloud damage — your steady Electrocution — and Magitech is the lightning number the sword converts your damage into.</li><li><strong>Build stacks by getting close.</strong> Normal attacks and dash attacks at melee range are the fast route to full Residual Thunder, and they also trigger Leaf Bird Leather's cloud consumption on every hit.</li><li><strong>Only fire Cloud Slash at or near full stacks.</strong> Firing it at half stacks is not a small mistake — it throws away roughly half the multiplier and is the single biggest reason this build feels weak when it shouldn't. If you find yourself firing early because the room is dangerous, reposition instead; that is a cheaper mistake than wasting the stacks.</li><li>Keep a cloud up at all times. Electrocution from the cloud keeps lightning damage flowing while you are stacking the sword, and Thunderstorm Tracking Compass turns that into Enhanced Electrocution procs.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzi+2+wXVz2kjsc5xXi/NYLmUwTiuxcOfpMJyTofOibWdGrDakGwkj46aBoOy/3/DPSZ86qxsg45ipnrlzWLoMAKLODW+jvEmOM4WzwEIMiTTnZezceRDZ+dd8O0sO4P3DkISJJ9DDu9XOgMQXtGWNO3ydG13YNtBtCfUqXrfl/GRgtxgSvYx9oi7HTDOUj13C6HnuR1TcPrJscsk3UuQC1kiK/lbUWsMKOON7p0wmdYtuTbcWzrgBibFBy</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>If the damage feels bad, check your discipline before you check your items. Nine times out of ten the problem is Cloud Slash going out early, not the build.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z25" class="bg-zin"><label for="bg-z25" class="bg-zl"><img src="/images/games/sephiria/builds/katana-cerulean-cloud-sword-arges/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z25"><img src="/images/games/sephiria/builds/katana-cerulean-cloud-sword-arges/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-cerulean-cloud-sword-arges/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-cerulean-cloud-sword-arges-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaCeruleanCloudSwordArgesBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
