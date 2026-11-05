// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Glacier</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Eternal Frost Greatsword adds a slice of your Cold Damage onto every weapon hit, and the Glacier combo is what makes that slice worth carrying. Keep attacking fast and the target stays Frostbitten, which is the whole point — the gloves, the ring and the blade itself all pay out on a debuffed target. Against bosses this is the difference between whittling and deleting.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Wizard Bunny</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Glacier 10/10 · Wind Song 8/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">26,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Wizard Bunny</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/wizard-bunny.webp" alt="Wizard Bunny costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Wizard Bunny</h3><p class="bg-mut">+15% Cold Damage, −20% Physical Damage. This is the cleanest possible fit for the build: nearly every point of damage Eternal Frost Greatsword produces is Cold, so the downside basically never applies and the upside applies to everything. Take it without hesitation.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Greatsword and the Wizard Bunny costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Blue Claw and Kriton’s Seal. One feeds the damage, the other keeps the economy moving so you can actually buy the pieces you need.</li><li>Early-Run Goal: Combo order first — Glacier &gt; Wind Song &gt; Elemental.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-96a97a4992b35a75.webp" alt="Fluffy Fur Gloves" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Fluffy Fur Gloves</h3><p class="bg-mut">Targets suffering from Frostbite take an additional 5 / 10 / 15 / 20 / 25 damage from Cold Damage. This is the item that turns "the target is Frostbitten" into real extra damage on every single hit — the reason the build wants to keep applying the debuff.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5d55c95da6f98765.webp" alt="Frostium Ring" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Frostium Ring</h3><p class="bg-mut">When you deal damage with a Weapon Attack or a Grimoire, inflict 10 / 20 / 30 Cold Damage on the target, on a 2 second cooldown. Free Cold damage that also helps push the target toward Frozen.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-97f868d543dbd782.webp" alt="Eternal Winter" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Eternal Winter</h3><p class="bg-mut">On Normal Attack hit, a 24% / 36% / 54% chance to deal additional damage: 40% / 75% / 135% Physical Damage plus 80% / 150% / 250% Cold Damage, counted as Normal Attack damage. The Cold half is the important half here, and because it counts as Normal Attack damage it picks up everything that scales off your basic attacks.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">Entering a new area grants +10% to +30% Move Speed and Attack Speed for 90 seconds. Attack Speed is the stat that keeps Frostbite refreshed, so this doubles as both mobility and damage uptime.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% to +40%. Plain, unconditional, and it plugs straight into the Critical Chance you are already building — no strings attached.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, with a 10% chance to miss for 20% reduced damage. The cheapest way to thicken up the critical half of your damage profile.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Greatsword</h3><p class="bg-mut">The starting weapon. Nothing special — the goal is simply to get off it and onto the Cold line as quickly as the floors allow.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Frostbound Greatsword</h3><p class="bg-mut">Tier 2, and the first time the passive shows up.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When performing a Weapon Attack, deal additional damage to the target equal to 30% of your Cold Damage.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Eternal Frost Greatsword</h3><p class="bg-mut">The final form of the line, and where the build actually comes together.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> The additional Cold Damage on Weapon Attacks rises from 30% to 55%. Normal Attack range increases, and the basic combo becomes 15% faster.</p><p class="bg-mut" style="margin-top:10px">That last line is quietly the most valuable part — faster swings mean more hits, and more hits mean the Frostbite debuff never falls off.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Combo pick order: Glacier &gt; Wind Song &gt; Elemental.</li><li>Damage here effectively runs off the average of your Elemental and Critical Chance — keep the two roughly balanced instead of pouring everything into one.</li><li>Keeping the attack chain going is what puts Frostbite on the target. That matters most on bosses, where the fight lasts long enough for the debuff and everything scaling off it to matter.</li><li>For Wind Song, only take the good Attack Speed pieces. Filler with no speed on it is not worth a slot.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzhC2rxXVz0ivab50byVwzR1e+SBRM6HY+3q+o0qi+XsyoW6g1se4HbPRFwIfi8yPPbt5CH2tPYMCeAlPcOtA8Fe5GUb6SA1UNeyrjRbOA37hlHQApVrDMBNvp/5wVKb+BTxrt8cdBqUWtkkm9PD+InQVqvQJvFiKtt6AVuCURqxWyDLBBMqpvZOjPzgIC9gaVfwUEhHJdmOGZYWw2galojS9/ZD9WTnTZp+hv5lFIapSN+h1fiIhKp8vcpuo9q0atq4129SE14QWM=</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Push Elemental all the way to 6/6 if the run allows it. Anything less and you are not actually collecting the Elemental combo bonus, which is a big part of where this build’s Cold Damage comes from.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z6" class="bg-zin"><label for="bg-z6" class="bg-zl"><img src="/images/games/sephiria/builds/greatsword-eternal-frost/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z6"><img src="/images/games/sephiria/builds/greatsword-eternal-frost/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/greatsword-eternal-frost/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/greatsword-eternal-frost-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderGreatswordEternalFrostBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
