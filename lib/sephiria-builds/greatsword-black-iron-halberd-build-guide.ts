// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Same crit package as the flagship greatsword build, different finish. Cap Critical Chance, dump the rest into Critical Damage and Special Attack Damage, and Whirlwind does the rest. The weapon line ends on Black Iron Halberd, the halberd branch off Hypersensitivity: it stretches Whirlwind's range and pays 50% bonus damage on the outer ring — which is exactly the area this build is built to hit.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Sturdy 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">26,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">A flat +20% damage boost that asks for nothing in return. It multiplies every crit the Special Attack lands, which is exactly what this build is short of. The tablet it ships with can be sold early for a free head start.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row" style="border-bottom:0"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Greatsword, Skeleton costume, and Heavy Heart — the Difficulty 60 artifact. It does nothing for you, but the shop will take it off your hands.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Blue Wrist Guard, Kriton’s Seal.</li><li>Early-Run Goal: Get Sturdy and Precision online first, then start moving points into Critical Chance and Critical Damage.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage up to +40% with no conditions beyond keeping it warm. It is the damage half of the Precision combo and the cheapest crit damage in the game.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp" alt="Blue Wrist Guard" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Wrist Guard</h3><p class="bg-mut">Up to +42% Special Attack Damage — the single biggest multiplier Whirlwind gets. Upgrade it early and never take it off.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ee6426e1161cde31.webp" alt="Discarded Golden Ring" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Discarded Golden Ring</h3><p class="bg-mut">+10 to +30 Special Attack Range so Whirlwind covers more of the screen, and after 40 Special Attack kills it transforms into something stronger.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">The biggest Critical Damage roll available at +60%, paid for with a 10% chance to miss for 20% reduced damage. Once crit rate is capped that trade is almost always worth it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-38d8f121f12d505f.webp" alt="Agma Projection Sword No. 190, 191" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Agma Projection Sword No. 190, 191</h3><p class="bg-mut">Flat Physical Damage up to +14. It reads small, but a Special Attack that hits on every tick applies it again and again.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-fe3773f4a62a3b74.webp" alt="Valter’s Work Monocle" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Valter’s Work Monocle</h3><p class="bg-mut">Critical Chance up to +45% — the fastest way to cap your crit rate. Respect the penalty: stay 3 tiles away from enemies or you lose 30% Critical Damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage Rate +10% at Lv1 up to +33% at Lv4, with Max MP dropping from −16% to −7% along the way. Pure crit damage in an accessory slot you were probably not using.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Greatsword</h3><p class="bg-mut">Where every run starts. Nothing remarkable on its own — the point is that its Special Attack, Whirlwind, becomes the delivery system for everything else in this build.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Hypersensitivity</h3><p class="bg-mut">Tier 2 on the Greatsword<br>Effect: Whirlwind deals 20% more damage and charges 50% faster.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Black Iron Halberd</h3><p class="bg-mut">The third option on the Hypersensitivity node, next to Negligence and Loving Gaze — a run only ever gives you one of them. This build takes the halberd.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Whirlwind keeps the +20% damage and +50% charge speed it inherited, and its range is increased. Hitting the outer area deals 50% additional damage and recovers HP equal to 0.7% of that damage.</p><p class="bg-mut" style="margin-top:10px">That outer-ring bonus is exactly why the How to Play section keeps telling you to fight from the edge of the circle. On the halberd the outside of Whirlwind is not just safer — it hits 50% harder and pays you back in HP.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Fill out Sturdy and Precision first. Elemental comes after those two are done.</li><li>Send slates and upgrades into Critical Chance and Critical Damage before anything else.</li><li>Always grab Stone Spindle Whorl when it shows up.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li><li>Take your damage from the outer ring of the Special Attack. The halberd gives that ring +50% damage and healing, so never stand on top of the target.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzjDWqwXUD2ivKZ51XaGEbq1e8vaZtcxE1wyoMgvOqTWQYBB3Btpr2rGoHeYjsUhMHcmYad3NG5nplKqPUB7vZmhPng0z3ckDh9zOmwB66Vk4kZM+16RkpAO8VxhbYyRVj+YTdNaNVpc+Zsy0APTKTYbLdOHjK9wbc8GBJ/nnjS4BEMtW8LkZpE8K9OUFQhL1g2IJ7gEDc4XEsYNcWPN/8cbOg1XofyeOmQO3iD5sK2+7PYVhSLLRqWjU8viKBMVVJoYQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>You can swap the wish pool to Discarded Golden Ring and Angry Potato instead — the opening is steadier that way, at the cost of a slower Blue Wrist Guard.</li><li>Kriton’s Seal is in the wish pool for economy, not damage: it raises Leaf gain, which turns into faster upgrades. Take it when you are buying your way out of a slow start.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z2" class="bg-zin"><label for="bg-z2" class="bg-zl"><img src="/images/games/sephiria/builds/greatsword-black-iron-halberd/run-results.webp" alt="Final build from a cleared Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z2"><img src="/images/games/sephiria/builds/greatsword-black-iron-halberd/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/greatsword-black-iron-halberd/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/greatsword-black-iron-halberd-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderGreatswordBlackIronHalberdBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
