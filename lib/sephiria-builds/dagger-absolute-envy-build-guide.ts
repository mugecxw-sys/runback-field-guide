// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Dagger</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Experimental</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Absolute Envy only touches three hits — the 3rd, 4th and 5th of your Normal Attack string get +25% damage and stagger harder. So this build does the obvious silly thing: wear White Wolf for infinite dashes, dash in, throw out the first half of the combo just to reach hits three through five, and dash again before the string ever ends. Dash Attack damage carries the route, and the tail of the combo is the payoff. <strong>It is not a strong build</strong> — 6,500 DPS on a Difficulty 60 run is not a number to brag about — <strong>but it is a fun one.</strong> If you like poking at ideas that do not quite work, this is that idea.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">White Wolf</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Wind Song 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">6,500</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">White Wolf</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/white-wolf.webp" alt="White Wolf costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>White Wolf</h3><p class="bg-mut">Infinity Dash — you never run out of dash charges. The catch is that dashing no longer gives you invincibility frames. That trade <em>is</em> the build: you can dash-attack forever, and you also eat every hit you would normally have dashed straight through. It is the single biggest reason this setup struggles at Difficulty 60, because losing dash i-frames takes away your cheapest defensive option.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Dagger and the White Wolf costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Wings and Kriton’s Seal. Wings gives +3% / +6% / +9% / +12% / +15% / +18% Attack Speed outright, then turns your extra Attack Speed into Universal Damage Boost — every 25% of bonus Attack Speed adds +1% at level 1, tightening to +1% per 5% at level 6. Kriton’s Seal does no damage at all; it just keeps the Leaf economy healthy so the pieces you are actually hunting stay on the shelf.</li><li>Early-Run Goal: Wind Song first, Precision second. Those two combos plus the six items below are the entire build — there is no second layer to it.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-53967eff28b98e6e.webp" alt="Yakumo Short Blade" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Yakumo Short Blade</h3><p class="bg-mut">Dash Attack Damage +10% / +20% / +30% / +40%, plus Dash Recovery Speed +4% / +8% / +12% / +16%. Half of this card is dead weight here — White Wolf already gives you infinite dashes, so the recovery does nothing. You are holding it purely for the flat Dash Attack damage, which is what keeps the run alive while you grind toward hits three, four and five.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0e57c639cc541f60.webp" alt="Windgrass Scarf" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Windgrass Scarf</h3><p class="bg-mut">Dash Attack Damage +30% / +45% / +60% / +80%. If you only take one Dash item, take this one: it is the biggest raw number you can bolt onto a dash-spam playstyle, and it drops at common rarity so you will actually see it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">Entering a new area grants +10% to +30% Move Speed and Attack Speed for 90 seconds. On a dash-spam build that is simply uptime — faster repositioning and faster swings from the moment you open a floor.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Absolute Envy concentrates your damage into three hits out of every string, so those three hits have to carry everything — crit damage is the cheapest way to make the good hits actually sting.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of −16 to −7 Max MP. Nothing in this build spends MP — no Fury, no specials — so the drawback is invisible and you are just buying crit damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, in exchange for a 10% chance to miss for 20% reduced damage. Same reasoning as Warm Stone: when three hits per combo are doing the work, crit damage on those three beats a wider spread of smaller numbers.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Dagger</h3><p class="bg-mut">The starting weapon, with no passive at all. Nothing to learn and nothing to keep — move off it as soon as the first fork appears.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Beyond the Threshold</h3><p class="bg-mut">Tier 2, and what makes reaching the tail of the combo worth the effort.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Upon Dash attack, gain a buff for 10 seconds: Normal Attack damage +20% and Dash Attack damage +30%. Disables Special Attack: Fury.</p><p class="bg-mut" style="margin-top:10px">The +20% Normal Attack damage is what the Absolute Envy hits get multiplied on top of, so keep the buff alive by dashing constantly. That is why this build never stops dashing — it is not styling, the damage literally depends on it.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Absolute Envy</h3><p class="bg-mut">The final form of the branch, and the reason the run exists.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> The damage of the 3rd, 4th, and 5th Normal Attack is increased by 25%, and the staggering effect is enhanced.</p><p class="bg-mut" style="margin-top:10px">Note how narrow that is — it does not make your combo better, it makes the tail of your combo better and stiffens the stagger on those three hits. In practice: dash in, swing until you are on hit three, cash in. The reason it feels weak is that you spend the first two thirds of every string doing nothing special, and at Difficulty 60 the enemies do not politely wait for you to reach the good part.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Wind Song and Precision first, both to 10/10. This setup is two combos and six items — there is no deeper plan to work toward.</li><li>If a Dash artifact shows up, take it. Dash Attack damage is the number that carries the whole run, so any piece feeding it is worth a slot.</li><li>Dash while you attack. The goal is never to finish a combo — it is to reach hits three through five as often as possible, so cancel out of the string and dash back in rather than standing still for hit six.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Straight from the author: this one did not really work. 6,500 DPS at Difficulty 60 is not a good number, and losing White Wolf’s dash invincibility hurts considerably more than infinite dashes help. But it is fun, and if you want to poke at the idea and fix it, please do — treat this page as an experiment rather than a recommendation.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z8" class="bg-zin"><label for="bg-z8" class="bg-zl"><img src="/images/games/sephiria/builds/dagger-absolute-envy/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z8"><img src="/images/games/sephiria/builds/dagger-absolute-envy/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/dagger-absolute-envy/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/dagger-absolute-envy-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderDaggerAbsoluteEnvyBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
