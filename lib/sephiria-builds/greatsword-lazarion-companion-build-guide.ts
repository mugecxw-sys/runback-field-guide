// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Companion</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Lazarion throws out Whirlwind and replaces it with Amethyst Conjuration — a Special Attack that summons a companion. That single swap is what makes this build exist: the amethyst inherits the Companion combo and your own critical stats, so every point of crit you stack ends up hitting twice. It also never runs out of casts, because this costume has no MP limit at all.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Scholar Lizard</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Companion 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">28,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Scholar Lizard</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/scholar-lizard.webp" alt="Scholar Lizard costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Scholar Lizard</h3><p class="bg-mut">Infinite MP, with Max HP hard-locked at 20. Both halves matter here. The amethyst summon costs MP on every cast, so an unlimited pool means you can hold down Special Attack and never think about resources — no MP items, no MP talents, nothing. In return you are one of the frailest characters in the game, which is exactly why the tips below tell you to over-buy defense.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Greatsword and the Scholar Lizard costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Simple Contract, Mining Supervisor Armband. Both are there to make your companions live longer and hit harder.</li><li>Early-Run Goal: Lock in the combo order first — Precision &gt; Elemental &gt; Companion. Tactical Manual is the pickup that turns the three of them into damage.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-44610202a9cab17d.webp" alt="Tactical Manual" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Tactical Manual</h3><p class="bg-mut">Your Critical Chance and Critical Damage contribute +30% / +60% / +90% / +120% to your Companion, plus +2% to +8% Critical Chance on top. This is the item the whole build is built around — it is what connects the crit stack to the amethyst. Without it you have two half-builds sitting next to each other.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% to +40%, nothing else. Ordinarily that is a modest item. Here it is worth roughly double, because the Manual feeds your Critical Damage into the amethyst at up to 120%.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% to +33%, at a cost of 16 down to 7 Max MP. Normally that MP penalty is a real decision. With Scholar Lizard it is free — there is no MP bar to cut into, so take the crit damage and ignore the downside entirely.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60%, paid for with a 10% chance to miss for 20% reduced damage. One of the cheapest critical damage sources in the game, and this build wants critical damage more than most.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-70b0e150eb050607.webp" alt="Standards of Magic" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Standards of Magic</h3><p class="bg-mut">+2 to +10 Highest Elemental Damage, plus +3% to +15% Grimoire Damage. The amethyst deals damage based on the average of all your elements, so raising your highest element lifts that average — this is where the Elemental combo's payoff actually lands.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-104041643ca919c5.webp" alt="Sharp Flint" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sharp Flint</h3><p class="bg-mut">+2% to +8% Critical Chance and +1 to +4 Highest Elemental Damage, on one small item. Both of the stats this build cares about, in a single slot — it is the most efficient filler you can find.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-9dd5c01e05d7c137.webp" alt="Angry Potato" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Angry Potato</h3><p class="bg-mut">+4% to +15% Ignore Defense, +1 to +4 Luck, and +5% to +10% Move Speed. The ignore defense keeps your elemental hits from being chewed up by enemy armour, and the move speed matters more than usual on a 20 HP character.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Greatsword</h3><p class="bg-mut">Where every run starts. Nothing special on its own — what matters is that this line branches into the purple weapons rather than the crit upgrades.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Troubling Delight</h3><p class="bg-mut">Tier 2 on the purple Greatsword line, and the fork you have to get right.</p><p class="bg-mut" style="margin-top:10px"><strong>Route:</strong> From here the weapon splits three ways — Pristine Form, Legacy of the Illusionist, and Lazarion. Only Lazarion brings the amethyst, so the other two branches take you off this build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Lazarion</h3><p class="bg-mut">Third evolution of the purple Greatsword line. This is the weapon the build is named after.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Whirlwind is replaced by Amethyst Conjuration — spend 24 MP to summon an Amethyst companion that deals Elemental Normal damage.</p><p class="bg-mut" style="margin-top:10px"><strong>Amethyst stats:</strong> 80 HP, loses 5 HP with every attack it makes, and its damage is the average of all your elements at 120%. Because it is a companion, the Companion combo and Tactical Manual both apply to it — and because Scholar Lizard has infinite MP, the 24 MP cost never actually stops you.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Combo pick order: Precision &gt; Elemental &gt; Companion. Tactical Manual is the core of the build — if you see it, take it.</li><li>If the early game feels rough, pick up Companion and Elemental first. The amethyst's damage is the average of your elements, so it does not need your crit online yet to be worth something. Push Critical Chance to the cap later.</li><li>Tactical Manual is the single most important item. Everything else is a support stat for it.</li><li>Once the build is together you mostly just keep pressing Special Attack.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZwTjjWuxTUA3kvEa1rOQ6f3Jb9BpiSDmK7hH8KVHl57niCFl6D58Ipx4MiDGoatYyocVCRgP3ngJOhymTidrCF8+UfXHJLim6M7kIAfIfrb1k/8pGGPsQctS6USfIr9hT3LiIFZleHLqYZ90TU1MxzFI68xVxHsEXLHijH8hIDsY1zHOSkFo6oqxAPeJnLjnCCCOftg92lPgvdlcdayI1b1QW6w2x0DyrvNeW5x084qy42NobWE=</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>You do not need Precision and Companion at 10/10. Spend the spare picks on the Guardian combo for defense instead — this costume only has 20 HP, and the damage ceiling is already covered by the Manual.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z4" class="bg-zin"><label for="bg-z4" class="bg-zl"><img src="/images/games/sephiria/builds/greatsword-lazarion-companion/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z4"><img src="/images/games/sephiria/builds/greatsword-lazarion-companion/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/greatsword-lazarion-companion/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/greatsword-lazarion-companion-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderGreatswordLazarionCompanionBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
