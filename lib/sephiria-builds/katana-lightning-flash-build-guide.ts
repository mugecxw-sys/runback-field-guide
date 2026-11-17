// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Attack Speed</span><span class="bg-tag">Lightning Damage</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Lightning Flash converts the katana's Weapon Attack into <strong>Lightning Damage</strong> — at the cost of <strong>−20% Weapon Attack damage</strong> — and then builds a resource loop on top of it: dealing damage with <strong>Electrocution grants 1 stack of Electric Charge</strong> (max 10), and <strong>2 stacks lets Heavy Slash become Special Attack: Issen</strong>.
 <br><br>So the build is a speed build, not a lightning build. <strong>Attack speed is this weapon's main damage multiplier and lightning damage is second</strong> — every point of attack speed is more Issen, more hits, more Electrocution ticks, more stacks. And the cleanest part is that you do not have to farm the stacks yourself: a <strong>Storm Cloud or a companion's attacks also apply Electrocution</strong>, so the charges keep filling while you are repositioning. Once that loop is running you are basically always holding a special attack.
 <br><br><strong>18,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Frog</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Wind Song 10/10 · Magitech 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">18,000</span></div>
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
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/frog.webp" alt="Frog costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Frog</h3><p class="bg-mut">What this run used. Nothing in the build depends on the costume, so this is a preference pick rather than a damage one — pick it if you like it, and swap freely if you don't.</p></div>
<div class="bg-pn bg-p2"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage</strong>, flat, with no condition and no element to line up. The more consistent choice if you want the slot to actually do something — it is a straight multiplier with nothing to maintain.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Frog costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Wind Sheet Music</strong> — <strong>+10% / +20% / +30% / +40% / +50% Melee Attack range</strong>, so your Issen sweeps hit more of the room. Then <strong>Wanderer's Necklace</strong>: <strong>+6% / +12% / +18% Attack Speed</strong> and <strong>+2 / +4 / +6 Highest Elemental Damage</strong>, which is attack speed and lightning in one item.</li><li>Early-Run Goal: <strong>Wind Song, then Magitech, then Elemental</strong>. Wind Song is attack speed and attack speed is the damage multiplier here; Magitech is the lightning/electric line that keeps the stacks honest; Elemental is the last slot.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-f5970a58bdfc2325.webp" alt="Wings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wings</h3><p class="bg-mut"><strong>+3% / +6% / +9% / +12% / +15% / +18% Attack Speed</strong>, and it converts attack speed into damage: every <strong>25% / 20% / 15% / 9% / 6% / 5% of additional Attack Speed increases Universal Damage Boost by 1%</strong>. Note the direction of that ladder — the conversion gets <em>better</em> as the item levels, so a low-tier Wings gives you attack speed and almost nothing else. On this weapon that is still fine, because attack speed is the damage stat anyway.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-fb288890b7f5ff81.webp" alt="Ahmad's Spirit Powder" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Ahmad's Spirit Powder</h3><p class="bg-mut">Summons a jellyfish that fires <strong>Lightning projectiles</strong>, and those projectiles <strong>inflict Electrocution</strong> on what they hit. That makes it the engine of the build rather than a damage item: Electrocution is what generates Electric Charge, so the jellyfish keeps rearming your Issen while you do something else. Never skip it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena's Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena's Model Stairway</h3><p class="bg-mut">When you enter another place, gain <strong>+10% / +14% / +16% / +20% / +25% / +30% Move Speed</strong>, and the same ladder of <strong>Attack Speed</strong>, for 90 seconds. Both halves matter here — attack speed is your multiplier and the movement keeps you alive while you commit to Issen swings. The catch: it only triggers on entering another place and expires after 90 seconds, so it is a burst window at the start of each floor rather than a permanent buff.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-e9ca2c52ac182ed3.webp" alt="Wanderer's Necklace" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wanderer's Necklace</h3><p class="bg-mut"><strong>+6% / +12% / +18% Attack Speed</strong> and <strong>+2 / +4 / +6 Highest Elemental Damage</strong>. Only Rare, and it gives you both halves of what the build wants in one slot. The Highest Elemental Damage part is worth a sentence: it raises the lightning number that all your Issen hits are working from, which is the second multiplier after attack speed.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-bdef80c494e4c63b.webp" alt="Wind Sheet Music" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wind Sheet Music</h3><p class="bg-mut">Melee Attack range <strong>+10% / +20% / +30% / +40% / +50%</strong>. Reach rather than damage, and the wish-pool pick because Issen is a big swing that wants to land on several things at once. No condition, no downside.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with no Electric Charge loop behind it.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Thunder Sword 'Bronte'</h3><p class="bg-mut">Where the weapon changes element — and takes its first real cut of damage.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Damage dealt by Weapon Attack is <strong>reduced by 20%</strong>, but it is changed to <strong>Lightning Damage</strong>.</p><p class="bg-mut" style="margin-top:10px">That −20% is a genuine cost and it is on the tin: you lose raw weapon damage to gain an element. Everything after this tier exists to make that trade pay, which is why attack speed and Highest Elemental Damage carry the build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Lightning Flash</h3><p class="bg-mut">The final tier, and the one that turns lightning into a resource loop.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Damage dealt by Weapon Attack is reduced by 20%, but it is changed to Lightning Damage. <strong>Gain 1 stack of 'Electric Charge' when dealing damage with Electrocution (max 10). Consume 2 stacks of 'Electric Charge' to perform Special Attack: Issen upon Special Attack: Heavy Slash.</strong></p><p class="bg-mut" style="margin-top:10px">Read it as a rhythm: you stack charges by electrocuting things, and then spend two of them on an Issen instead of a Heavy Slash. Attack speed is what makes that loop fast — more hits, more Electrocution, more stacks, more Issen — which is why Wind Song is the core stat here rather than a luxury.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Wind Song, Magitech, Elemental</strong>. Wind Song first without hesitation — attack speed is the weapon's main damage multiplier, not a quality-of-life stat.</li><li>Bring something that electrocutes for you: a <strong>Storm Cloud or a companion</strong>. Their attacks also apply Electrocution, which stacks Electric Charge, which means you keep getting Issen without having to build the stacks by hand.</li><li>Spend the stacks rather than sitting on them. Two charges is one Issen, so at 10 stacks you have five special attacks queued up — holding them does nothing for you.</li><li>Keep the rhythm: swing with attack speed up, let the cloud or the jellyfish keep Electrocution rolling, and treat Issen as your default attack rather than a finisher.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzTi+2+wXVz2kjsc5xXa/NYMmczbpCT262/n2CwIKYORQR0+3SxInh/6z72oty4va9cfEPWbvrz0Eic3j/0RMJgMeEcW+y/2UiWhEghRtVukM9cSMPfG6HowrD99Fkd0BxB/89ttePPExBCU4UE45Ofq690OBcFhfCd2/ttZbPinldeF/OfAmPXn/1MuA07Hu/XQeeqKxneGPaHoDokHzr4cLP/dnlFK0NRGrKSh1nPYggBxorx67X6Kq7sfR3JldA==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>If Issen ever feels sluggish, the problem is almost always attack speed, not the lightning number. Fix the speed first.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z24" class="bg-zin"><label for="bg-z24" class="bg-zl"><img src="/images/games/sephiria/builds/katana-lightning-flash/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z24"><img src="/images/games/sephiria/builds/katana-lightning-flash/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-lightning-flash/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-lightning-flash-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaLightningFlashBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
