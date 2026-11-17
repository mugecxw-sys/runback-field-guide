// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Cold Damage</span><span class="bg-tag">Frost Relic</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Fragment of Nastrond is the second of the two ice katanas, and it is the better of them — <strong>but only somewhat better</strong>. The weapon keeps the same skeleton as Silence of Everfrost: Sheath becomes Tackle, Cold Damage +3, and 15% of your Cold Damage is added on every Weapon Attack. What it changes is the trigger: <strong>after a Tackle action, attacking activates Frost Relic: Skaði</strong>.
 <br><br>That is what makes it worth a page. Frost Relic is a whole damage system of its own — charged slashes, auto-firing bows, relic damage multipliers — and this weapon reaches into it. So the honest shape of the build is that <strong>most of your damage does not come from the katana at all</strong>. It comes from the relics the katana switches on. <strong>18,000 DPS</strong> in this run, and very little of it is sword swings.
 <br><br>Which is also the criticism: you never really feel the weapon. It is a Frost Relic build wearing a katana. Read the tips before you spend a run on it.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Wizard Bunny</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Glacier 10/10 · Frost Relic 10/10 · Elemental 6/6</span></div>
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
<div class="bg-tl"><label for="bg-c1">Wizard Bunny</label><label for="bg-c2">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/wizard-bunny.webp" alt="Wizard Bunny costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Wizard Bunny</h3><p class="bg-mut">What this run used. A relic-and-cold-damage build suits the caster-flavoured costume better than a pure melee one — and since so much of your output is relic damage rather than sword damage, that is the right instinct here. Nothing in the build depends on it, so swap it freely.</p></div>
<div class="bg-pn bg-p2"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage</strong>, flat, with no condition and no element to line up. The safe alternative if you do not have Wizard Bunny — a straight multiplier with nothing to maintain.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Wizard Bunny costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Frozen Egg</strong> — <strong>+5% / +10% / +15% / +20% Critical Chance on ice attacks</strong> (companion damage included) for <strong>−9 / −6 / −3 / +0 MP Regeneration</strong>, so the first three tiers cost you regen. Then <strong>Scabbard of Exorcism</strong>: it charges every 6 seconds and unloads a slash on your next normal attack, scaling up to <strong>460%</strong> — the single biggest relic hit available to this build.</li><li>Early-Run Goal: <strong>Glacier, then Frost Relic, then Elemental</strong>. Glacier is Cold Damage and the weapon converts Cold Damage into its own damage; Frost Relic is what makes the relics actually hit; Elemental tops off the last slot.</li><li>Reality check: <strong>take the Glacier books.</strong> Without Cold Damage stacked high, even ordinary rooms are a struggle at this difficulty — the sword cannot carry the early floors on its own.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-01d6e4378a6878ce.webp" alt="Blue Claw" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Claw</h3><p class="bg-mut">Frostbite has a <strong>30 / 40 / 50 / 60% chance to be applied an additional time</strong>, plus <strong>+2 / +4 / +6 / +9 Cold Damage</strong> and <strong>+5 / +10 / +15 / +20 Max MP</strong>. Still the best item in the ice package: Cold Damage on the item itself, and double Frostbite on top of it. The Max MP is useful here too, since the relic play eats MP.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-44b0360c9062d563.webp" alt="Scabbard of Exorcism" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Scabbard of Exorcism</h3><p class="bg-mut">Charges every <strong>6 seconds</strong>, then unleashes a slash on your next normal attack for <strong>100% / 150% / 200% / 260% / 320% / 380% / 460%</strong>. Seven tiers, only Advanced, and the largest single hit this build has — the wish-pool pick for good reason. It also rewards you for attacking on rhythm, since the slash waits for your next swing.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-fd837efcbc752a64.webp" alt="Frozen Bow" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Frozen Bow</h3><p class="bg-mut">Automatically reloads <strong>1 shot every 0.75 seconds</strong> (up to 7) and fires an arrow at an enemy for <strong>50 / 60 / 70 / 80 / 100 / 120</strong>. Damage that happens whether or not you are doing anything, which is exactly what this build needs — the weapon is slow, and the bow covers the gaps while you are repositioning or waiting on a Tackle.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-29525c14c53da989.webp" alt="Tiny Magic Conch" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Tiny Magic Conch</h3><p class="bg-mut"><strong>+3% / +6% / +10% Frost Relic damage</strong> and <strong>+5% / +8% / +12% Critical Damage</strong>. Small on paper, but it is one of the only ways to scale every relic at once, and relic damage is where this build's number actually lives. Take it early; the multiplier applies to the Scabbard slash and the Bow.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1073fd2e1449adae.webp" alt="Frozen Egg" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Frozen Egg</h3><p class="bg-mut">Critical Chance of ice attacks <strong>+5% / +10% / +15% / +20%</strong> (companion damage included), at the cost of <strong>−9 / −6 / −3 / +0 MP Regeneration</strong>. The first three tiers are a straight MP loss and only the fourth breaks even — and this build genuinely wants MP for its relics, so level it to the end or expect to feel it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-c36c25f16fb8f975.webp" alt="Ice Bug" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Ice Bug</h3><p class="bg-mut"><strong>Freeze Debuff Damage +10% / +15% / +20% / +25% / +30% / +40%</strong>. The cheapest six-tier slot on the list and it only does one thing, which is fine, because Freeze is the one debuff this build applies constantly. No condition, no drawback — just make sure you are actually freezing things rather than only stacking Cold Damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-95cae9efaa68a7ba.webp" alt="Thunderfrost Butterfly" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Thunderfrost Butterfly</h3><p class="bg-mut"><strong>Storm Cloud changes to Snowstorm Cloud</strong>, plus <strong>+2 / +4 / +6 / +8 Cold Damage</strong> and <strong>+6% / +12% / +18% / +24% Consumption Speed of Storm Cloud</strong>. Read the last line as a cost as well as a benefit: the cloud burns out faster, so you get more Cold Damage but you are re-casting more often. Worth it for the flat Cold Damage, not for the speed.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with no Cold Damage machinery behind it.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Winter Smith's Draftblade</h3><p class="bg-mut">Shared stepping stone with the other ice katana — this is where the weapon becomes Cold Damage.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Sheath is replaced with <strong>Tackle</strong>. Adds additional damage equal to <strong>15% of Cold Damage</strong> on Weapon Attack. <strong>Cold Damage is increased by 3.</strong></p><p class="bg-mut" style="margin-top:10px">From here every point of Cold Damage you stack is being paid out on every hit, which is what keeps the early floors playable.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Fragment of Nastrond</h3><p class="bg-mut">The final tier, and the one that turns the katana into a relic trigger.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Sheath is replaced with Tackle. Adds additional damage equal to 15% of Cold Damage on Weapon Attack. Cold Damage is increased by 3. <strong>After a Tackle action, it activates Frost Relic: Skaði when attacking.</strong></p><p class="bg-mut" style="margin-top:10px">That last line is the build. Your swing is now a switch that fires the relic system, and the relics — Scabbard of Exorcism's charged slash, Frozen Bow's auto-arrows, the Conch's relic multiplier — are what actually kill things. It is more effective than Silence of Everfrost almost entirely because relics add damage that the sword cannot.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Glacier, then Frost Relic, then Elemental</strong>. Glacier first every time — it is Cold Damage, and Cold Damage is paid out both by the weapon and by the relics.</li><li><strong>Take the Glacier books wherever they appear.</strong> This is not a preference: at Difficulty 60, without Cold Damage stacked, even ordinary rooms are a real fight.</li><li>Keep the Tackle rhythm going. The relic only activates on attacks <em>after</em> a Tackle, so standing still and mashing is leaving the weapon's entire point on the table — dash in, Tackle, then unload while the relic window is open.</li><li>Time your swings around the Scabbard. It charges on a 6-second timer and pays out on your next normal attack, so the big slash is worth spending when something is actually in front of you.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzhB27wXVz3ijiTO+XMBHfTOkdBzWpeaHygTUqIB12VrTyHzcfdis7R2ya1wmb2bGVQW1yZxpbfTx3lljLml9q/dBIhDSmDz3U07MQUwP9lbdMSWIk1+wVUb/Mubu0wWTUw/EBvcghja0EVQq3zeUAqoLYMh3dYASP9JuHZ8bVwQjaK59GiyH5PjyFQTz3Xk5HDGRPDyXmQ98rpPkggmSCIBE4HHkERqnlX9tmX+ljOSq9CaWBsRg==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li><strong>My honest recommendation: don't play this weapon.</strong> It is better than Silence of Everfrost, but only somewhat better, and the reason is not the sword — most of the damage here does not come from the katana's own attacks, so you never actually feel the weapon. You are playing a Frost Relic build that happens to hold a katana.</li><li>If cold builds are what you enjoy, play it for the relic side: the Scabbard slash and the auto-firing bow are genuinely satisfying. Just do not expect the katana itself to be the star.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z23" class="bg-zin"><label for="bg-z23" class="bg-zl"><img src="/images/games/sephiria/builds/katana-fragment-of-nastrond/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z23"><img src="/images/games/sephiria/builds/katana-fragment-of-nastrond/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-fragment-of-nastrond/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-fragment-of-nastrond-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaFragmentOfNastrondBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
