// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Cold Damage</span><span class="bg-tag">Frostbite</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Silence of Everfrost is the ice katana, and it is not like the other blades on this site. Your Sheath is replaced with Tackle, Tackle becomes <strong>Special Attack: Ice Sliding</strong>, and the payoff line is this: <strong>blocking an enemy attack during invincibility triggers Echo of the Glacier immediately</strong>, which instantly deals <strong>120% of your Cold Damage</strong> to everything nearby.
 <br><br>So it is really a <strong>counter weapon</strong>. You are not fishing for damage, you are waiting for the swing, blocking it, and letting the glacier answer. The closest thing on this site is the Sword &amp; Shield perfect-block playstyle — same timing window, same "wait for it" rhythm.
 <br><br>I'll be straight with you, since this build is on the site for completeness rather than as a recommendation: <strong>it feels mediocre and it is heavy on execution</strong>. <strong>12,000 DPS</strong> in this run, with a lot of that coming from perfect blocks rather than from the sword itself. If you want the honest version: read the tips before you commit a run to it.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Wizard Bunny</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Glacier 10/10 · Precision 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">12,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<input type="radio" name="cos" id="bg-c2">
<div class="bg-tl"><label for="bg-c1">Wizard Bunny</label><label for="bg-c2">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/wizard-bunny.webp" alt="Wizard Bunny costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Wizard Bunny</h3><p class="bg-mut">What this run used, and what I would pick again — this is the caster-flavoured costume, and an ice katana that runs on Frostbite procs suits it better than a pure melee costume does. Nothing in the build depends on it, so you can swap it freely.</p></div>
<div class="bg-pn bg-p2"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage</strong>, flat, with no condition and no element to line up. The safe alternative if you do not have Wizard Bunny — it will not fix the weapon's problems, but it never stops working either.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Wizard Bunny costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Echo of the Glacier</strong> first — it is the exact artifact the weapon triggers on a well-timed block, and on its own timer it also <strong>inflicts Frostbite on nearby enemies every 5 / 4 / 3 / 2.5 seconds</strong> while giving <strong>+3 / +6 / +10 Defense</strong>. <strong>Ice Vine</strong> is the second pick: Special Attack spawns a line of ice thorns forward that inflicts Frostbite, so it keeps the Frostbite engine running between blocks.</li><li>Early-Run Goal: <strong>Glacier, then Precision, then Elemental</strong>. Glacier is the Cold Damage line and this weapon converts Cold Damage into everything it does, so it is not optional here. Precision covers the crit side of the ice package, and Elemental tops off the last slot.</li><li>Reality check: <strong>take every Glacier book you see.</strong> This weapon is genuinely weak, and at Difficulty 60 the run only gets through if you stack the Cold Damage line as hard as the draw allows.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-01d6e4378a6878ce.webp" alt="Blue Claw" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Claw</h3><p class="bg-mut">Frostbite has a <strong>30 / 40 / 50 / 60% chance to be applied an additional time</strong>, plus <strong>+2 / +4 / +6 / +9 Cold Damage</strong> and <strong>+5 / +10 / +15 / +20 Max MP</strong>. The best item in the build and the one that makes everything else count: every extra Frostbite is another Frozen Touch stack, and Frozen Touch is where your Cold Damage number comes from.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-490667f74a9d578b.webp" alt="Feet of the Ice Gull" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Feet of the Ice Gull</h3><p class="bg-mut">Gain the <strong>Frozen Touch</strong> buff whenever you inflict Frostbite. Frozen Touch: <strong>+1 Cold Damage for 7 seconds, up to 5 / 10 / 15 / 20 stacks</strong>. Twenty stacks is +20 Cold Damage, which feeds the weapon's 120% Echo and the 15% added on every Weapon Attack — the single biggest multiplier in the build, and it needs you to be applying Frostbite constantly.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1073fd2e1449adae.webp" alt="Frozen Egg" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Frozen Egg</h3><p class="bg-mut">Critical Chance of ice attacks <strong>+5% / +10% / +15% / +20%</strong> (companion damage included), at the cost of <strong>−9 / −6 / −3 / +0 MP Regeneration</strong>. Read that cost carefully: at the first three tiers you are losing MP regen, and only at the fourth does it break even. It is still the right item, but it is a real trade, not a free stat.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%, but it loses its effect when it isn't kept warm. Worth stating plainly: the biggest crit number here can quietly switch off, so it is not a fire-and-forget slot. Precision at 10 means the crits do land often enough to justify it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of <strong>−16 to −7 Max MP</strong>. The crit package's other half. The MP cost hurts slightly more here than on a pure physical katana, because Ice Sliding and the Frostbite engine both want MP — and Frozen Egg is already cutting your regen.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60%, and attacks have a <strong>10% chance to miss, which reduces damage by 20%</strong>. The largest crit number on the list, paid for in accuracy. On a weapon that is already starved for damage, a 10% miss rate is not a rounding error — this is the slot I would drop first if a run feels shaky.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the Cold Damage machinery that defines this build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Winter Smith's Draftblade</h3><p class="bg-mut">Where the weapon stops being a normal katana and starts being an ice weapon.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Sheath is replaced with <strong>Tackle</strong>. Adds additional damage equal to <strong>15% of Cold Damage</strong> on Weapon Attack. <strong>Cold Damage is increased by 3.</strong></p><p class="bg-mut" style="margin-top:10px">The 15% of Cold Damage is why Frozen Touch stacks matter so much — every point of Cold Damage is being paid out on every single hit, which is the only reason this weapon's numbers get respectable at all.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Silence of Everfrost</h3><p class="bg-mut">The final tier, and where the counter playstyle appears.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Sheath is replaced with Tackle. Adds additional damage equal to 15% of Cold Damage on Weapon Attack. Cold Damage is increased by 3. <strong>Tackle changes to Special Attack: Ice Sliding.</strong> Blocking enemy attacks during invincibility triggers the artifact <strong>Echo of the Glacier</strong> immediately. Upon activation, it deals damage to nearby enemies. <strong>(Damage: 120% of Cold Damage)</strong></p><p class="bg-mut" style="margin-top:10px">Everything about this build is that last sentence. The damage does not come from swinging faster, it comes from blocking at the right moment, and the glacier pays out 120% of a Cold Damage number you spent the whole run stacking. Miss the timing and you have a slow katana with nothing to show for it.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Glacier, then Precision, then Elemental</strong>. Glacier is Cold Damage and Cold Damage is what the Echo converts into damage, so it is the first thing you level every run.</li><li><strong>Take every Glacier book you can get.</strong> Not a preference — this weapon is genuinely weak, and at Difficulty 60 the run only survives if the Cold Damage line is stacked as high as the draw allows.</li><li>Play it like a perfect-block build: bait the swing, block inside the invincibility window, let Echo of the Glacier answer with the AoE. Standing in and trading is how these runs die — the sword cannot win a damage race on its own.</li><li>Keep Frostbite flowing between blocks. Echo of the Glacier ticks it on a timer, Ice Vine spawns thorns on Special Attack, and Blue Claw can double the application — every one of those is a Frozen Touch stack, and stacks are Cold Damage.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzgh2vxXVz0ivbb/das16izGBSkUf9ndBfYe6+CtQgj+RWprBNM25eC+6RVE0RcTqUgrMWJVFC5IOAYEhBafNorxABkJ16WN3s0xEIUwCcgGQO5Crt1tKBnbJNgR2zTQUK4aUJ8it9qVTLk3wGrU/dSASeu9USnF8ZeG3ho9rUiRGFcT2rpnm2wnDfk8qKBKsf18NcceeVaGiIFmn2LlA0MCY7sgBr5NmXoHJ4Un29uQQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li><strong>My honest recommendation: don't play this weapon.</strong> Silence of Everfrost is the weakest katana on this site by a comfortable margin. It is a lot of timing work for a payoff that the other blades reach by simply attacking, and if you want a strong katana run there are five better options in the Katana section.</li><li>Play it because the counter-block rhythm is fun and it genuinely is a different way to play a katana — not because it is strong.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z22" class="bg-zin"><label for="bg-z22" class="bg-zl"><img src="/images/games/sephiria/builds/katana-silence-of-everfrost/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z22"><img src="/images/games/sephiria/builds/katana-silence-of-everfrost/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-silence-of-everfrost/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-silence-of-everfrost-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaSilenceOfEverfrostBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
