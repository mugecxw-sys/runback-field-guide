// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Dagger</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Wind Song</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Lightless Blade takes the Dagger's Special Attack off the table and replaces it with something far more fun: spend a Dash charge and your Dash Attack becomes Dash Attack: Blade Prison, a flurry of hits whose length is decided entirely by your Attack Speed. That is the build. Wind Song gives you the hit count, Precision makes each of those hits crit, and the Skeleton costume quietly tacks 20% onto every one of them. It is the fastest-feeling thing on this site and there is no rotation to learn — dash, keep the buff alive, keep swinging.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Wind Song 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">23,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Damage dealt increased by 20%. No condition, no drawback, no cooldown — it simply multiplies everything you do. On a build that lands hundreds of small hits, a flat 20% on all of them is a very large number. Take it without thinking.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Dagger and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Wings and Kriton’s Seal. Wings is not mobility here — it is a damage wish, because more Attack Speed means more Blade Prison hits. Kriton’s Seal hits nothing at all, but it keeps the Leaf economy healthy so the pieces you actually want are still there when they show up.</li><li>Early-Run Goal: Wind Song first, Precision second. Do not spread out before both are at 10/10.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-53967eff28b98e6e.webp" alt="Yakumo Short Blade" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Yakumo Short Blade</h3><p class="bg-mut">Dash Attack Damage +10% / +20% / +30% / +40%, plus Dash Recovery Speed +4% / +8% / +12% / +16%. Both halves are Dash stats, and Dash stats are the entire build — one is damage, the other is how often you get to spend a charge.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0e57c639cc541f60.webp" alt="Windgrass Scarf" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Windgrass Scarf</h3><p class="bg-mut">Dash Attack Damage +30% / +45% / +60% / +80%. It is a common-rarity slot putting up a number that most rares cannot match, and there is no downside line to argue with.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">Entering a new area grants +10% to +30% Move Speed and Attack Speed for 90 seconds. Attack Speed is hit count on Blade Prison, so every new floor opens with the build already running at full strength.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Pure, unconditional, and it plugs straight into the Precision half of the setup with nothing to manage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of −16 to −7 Max MP. A Dagger build never leans on MP, so the downside costs you essentially nothing.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, in exchange for a 10% chance to miss for 20% reduced damage. One of the cheapest ways to thicken up the critical side of your damage, and the miss is a rounding error next to the gain.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Dagger</h3><p class="bg-mut">The starting weapon, with no passive whatsoever. Nothing to learn and nothing to keep — get off it the moment the first fork appears.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Beyond the Threshold</h3><p class="bg-mut">Tier 2, and the point where the build’s engine actually switches on.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Upon Dash attack, gain a buff for 10 seconds: Normal Attack damage +20% and Dash Attack damage +30%. Disables Special Attack: Fury.</p><p class="bg-mut" style="margin-top:10px">Two things matter here. Dashing stops being movement and becomes a damage button. And the buff only lives for ten seconds, which turns the build into a rhythm — dash, hit, dash again before it drops off.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Lightless Blade</h3><p class="bg-mut">The final form of the line, and the reason this build exists at all.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Keeps everything Beyond the Threshold grants, and adds: when a Dash charge is consumed, Dash Attack changes to Dash Attack: Blade Prison.</p><p class="bg-mut" style="margin-top:10px">Blade Prison is the payoff, and how many hits it lands is decided by your Attack Speed — which is exactly why Wind Song is the first combo you finish and why Wings is the wish you take. Every point of Attack Speed is not “faster”, it is literally more damage instances, and each of those instances rolls its own critical.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Combo order is Wind Song, then Precision. Both to 10/10 before you spend a slot on anything else — the setup is only worth playing once those two exist.</li><li>If a Dash artifact shows up, take it. Dash Attack Damage and Dash Recovery Speed both feed the build directly, and there is no such thing as too much of either.</li><li>Do not let Attack Speed eat your whole build. Hit count means nothing without a base panel behind it — if your Damage and Critical are thin, you are just swinging many times for very little.</li><li>If the early floors are beating you up, give up a slot or two to Guardian or Evasion. It does slow the damage build down, but a build that dies on floor two deals zero damage.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzTgh2vxXVz0ivbb/dau18TMbLQXSc3+HKfgc1MEAfbReSoFtrWRruyBG8lhWSkYYlwSPBlopoydPx//0dO5yG+cb/WgJ9DM8AAScmmJ0KO6ab9ZDkhhE9Tr7WXsyl0oNlDm4/NcJ9mk8efzeczo8qqfy/tbJ5KXVYrQZmA/qiVEjNvgx4onEhqen+roVwrNp7LjJYMK+qcUYGwx1dTKUbA6uIp/2QCNFLt5QWM=</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you find one, because until you do it is a permanently dead slot.</li><li>The loop is repetitive by design: dash, hit, dash again inside ten seconds. If your hands will not keep that rhythm, bind it to a macro. There is genuinely no reason to fight your own wrists over it.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z7" class="bg-zin"><label for="bg-z7" class="bg-zl"><img src="/images/games/sephiria/builds/dagger-lightless-blade/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z7"><img src="/images/games/sephiria/builds/dagger-lightless-blade/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/dagger-lightless-blade/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/dagger-lightless-blade-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderDaggerLightlessBladeBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
