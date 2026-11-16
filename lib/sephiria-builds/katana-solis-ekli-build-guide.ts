// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Solar Blade</span><span class="bg-tag">Ignore Defense</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Solis Ekli is the Solar Blade katana: it keeps the Helbanus line — <strong>every Weapon Attack deals extra damage equal to 30% of your Fire Damage</strong> — and swaps the Sheath for <strong>Eclipse</strong>, which spends Solar Blade charges to hit harder. So the build has two jobs, and they feed each other: make more Solar Blade, and make spending it hurt more. Eternal Furnace prints a free charge every few seconds, Solis Dekri turns those charges into defense-ignoring crit damage, Angry Potato adds flat Ignore Defense on top, and White Cape stretches every buff you put on yourself so the windows last longer.
 <strong>30,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Red-Clothed Cat</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Solar Blade 10/10 · Precision 8/10 · Wind Song 6/8</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">30,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Red-Clothed Cat</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/red-clothed-cat.webp" alt="Red-Clothed Cat costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Red-Clothed Cat</h3><p class="bg-mut"><strong>Fire Damage +15%, Physical Damage −20%.</strong> The same trade as any fire build, and it does cost you something — the blade's own swings lose a fifth of their direct damage. What you get is +15% on the number this weapon multiplies: the 30% bonus on every Weapon Attack is calculated from Fire Damage, so the costume feeds that bonus rather than just the burn.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Red-Clothed Cat costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Solis Dekri</strong> and <strong>Eternal Furnace</strong>. Both are Solar Blade items and they solve different halves of the build — Eternal Furnace creates 1 Solar Blade every 10 / 8 / 5 seconds while the Solar Blade effect is active, which is the fuel; Solis Dekri makes your Solar Blade ignore target defense and crit far more often, which is the payoff. On a weapon that spends charges to deal damage, a generator is not a luxury item.</li><li>Early-Run Goal: Solar Blade first, Precision second, Wind Song third. Solar Blade is the resource the weapon runs on and most of the items scale from it; Precision is where your crit damage lives; Wind Song comes once the two that carry the run are done.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5e6cfd2b4877bf53.webp" alt="Solis Dekri" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Solis Dekri</h3><p class="bg-mut">Ignore target's defense by +2% / +4% / +6% / +8% / +10% / +12% / +14% with Solar Blade, and +5% / +10% / +15% / +22% / +30% / +40% / +50% Critical Chance of Solar Blade. Seven tiers of both, which is why it is Legendary. Together with the flat Ignore Defense on Angry Potato this is what pushes the damage through armored targets — the reason the build works on Difficulty 60 at all.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%, but it loses its effect when it isn't kept warm. That condition is worth saying out loud: the biggest crit number here can quietly switch off, so it is not a slot you set and forget. Solis Dekri already pushes your Solar Blade crit chance up by as much as 50%, so when the stone is active the crit damage has something to multiply instead of sitting idle.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">+10% / +16% / +24% / +33% Critical Damage, at the cost of −16 to −7 Max MP. The second crit-damage item on the list, and the Max MP is the one cost worth watching: this weapon's damage comes out of Solar Blade and swings, not spells, so it is usually cheap — but if a fight ever leaves you short on MP, this is the slot to reconsider.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, and attacks have a 10% chance to miss, which reduces damage by 20%. The biggest crit number you can slot and the only item here that can actually cost you a hit. Take it if you want the ceiling; if the misses annoy you, Warm Stone is already doing most of the work.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-9dd5c01e05d7c137.webp" alt="Angry Potato" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Angry Potato</h3><p class="bg-mut">+4% / +7% / +11% / +15% Ignore Defense, +1 to +4 Luck, and +5% / +10% Move Speed. Ignore Defense is the point — it stacks with Solis Dekri and is what makes armored enemies stop being a wall. The Luck is quietly useful too, since this build wants specific Legendary and Advanced items, and Move Speed matters on a build this fragile.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4c670ee3b55599bd.webp" alt="White Cape" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">White Cape</h3><p class="bg-mut">+30% / +60% / +100% / +130% / +160% / +200% Duration of Buffs Applied by Self. Everything you set up — Solar Blade windows, Eclipse, every self-buff on the bar — simply lasts longer, which on a spend-the-resource weapon means fewer moments where you are waiting to be dangerous again. Optional, and it is the item that most changes how the build feels.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana — physical, fast, no Solar Blade synergy of its own. Everything that makes this build a build arrives two tiers later, so early on you are playing a plain sword.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Helbanus</h3><p class="bg-mut">The tier that adds a second damage number to every swing.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When performing a Weapon Attack, deal additional damage to the target equal to <strong>30% of Fire Damage</strong>.</p><p class="bg-mut" style="margin-top:10px">From here Fire Damage is no longer a background stat — it is a damage source paid out on every hit, which is why the Red-Clothed Cat and every Solar Blade scaling item matters so much.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Solis Ekli</h3><p class="bg-mut">The final tier, and the reason the build is called a Solar Blade build.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When performing a Weapon Attack, deal additional damage equal to 30% of Fire Damage. <strong>Sheath changes to Eclipse.</strong></p><p class="bg-mut" style="margin-top:10px">Eclipse is where the damage lives: it spends your Solar Blade charges to hit harder, so the stat you stack is also the resource you burn. That is the whole loop — Eternal Furnace and the Solar Blade tree hand you charges, Eclipse turns them into damage, and Solis Dekri makes sure the damage ignores defense and crits.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Solar Blade first, Precision second, Wind Song third. Solar Blade is both the resource the weapon spends and the stat half your items scale from, Precision is your crit package, and Wind Song is the third wheel that arrives once the run is already working.</li><li>This build is on the fragile side, and it is worth saying so plainly: if the run offers you Guardian or Shadow pieces, take them. Extra survivability does not show up in a damage screenshot, but it is the difference between a 30,000 readout and dying with the build online.</li><li>Spend your Solar Blade. A full bar is damage you have not cashed yet — the weapon's payoff is in Eclipse, not in holding charges, so treat the bar as a bank you are supposed to draw from.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyziBwq2TUD3ivGaMDIOtUcUBERIZPM5Kz2mmNzSvQqFuca98SqLne+SaL7S7Mdf2EKr6yyXnqDFbtEzcOjTuvoQZMZod5guhOXUiR/6BjYXwP3qa8HiyOdzbtVsEeqjXYdRLnP/7zLh5bJc6wC1fe93JfNZz/JxG+XmQuFRP3fqFHh2HTjHx5zfanBMMRbHqgSMsP1EFEIYKUpqKNz0AYoveYxHynnRkbZBNuwI9YRQYbefsS6r8k+CHgr0Bi5b1Cqm7s4ZPVaFPjzfVi/KHxNdbGFs</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>White Cape is not mandatory. I just find the build more fun to play with it on — that is a feel call, not a damage claim. If you would rather have the slot for something defensive on a squishy run, that is a perfectly good trade.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z17" class="bg-zin"><label for="bg-z17" class="bg-zl"><img src="/images/games/sephiria/builds/katana-solis-ekli/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z17"><img src="/images/games/sephiria/builds/katana-solis-ekli/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-solis-ekli/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-solis-ekli-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaSolisEkliBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
