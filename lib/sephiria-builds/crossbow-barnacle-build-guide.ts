// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Defense Scaling</span><span class="bg-tag">Bombs</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">The Barnacle does not carry this build. <strong>Rock Elephant does</strong> — and Rock Elephant does not care about your weapon damage at all. It fires three rock spears that hit for a percentage of your <strong>Defense</strong>, and it adds another spear for every 15% of bonus Attack Speed you are carrying. So the whole run is a simple bargain: stack Guardian for the Defense that feeds the spears, stack Wind Song for the Attack Speed that multiplies how many spears there are, and never stop attacking. The Barnacle sticks a bomb on everything it touches and detonates the lot with Special Attack, Rock Elephant turns your Defense into flying rocks, and the two halves never fight over the same button. <strong>23,000 DPS</strong> with a defensive stat doing the carrying — and it is genuinely more fun than that number suggests.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Guardian 10/10 · Wind Song 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">23,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c2" checked>
<div class="bg-tl"><label for="bg-c2">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Damage dealt +20%, flat, no condition. Worth saying out loud: this is <em>not</em> weapon damage only. Rock Elephant's spears go through your damage multipliers, so the 20% is lifting the thing that is actually killing enemies — not just the shotgun you are holding.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Wings and Kriton’s Seal. Wings is the interesting one here — it hands you +3% / +6% / +9% / +12% / +15% / +18% Attack Speed outright and then converts your <em>extra</em> Attack Speed into a Universal Damage Boost. Attack Speed is literally extra rock spears on this build, so Wings is the only pick in the pool that pays Rock Elephant twice. Kriton’s Seal hits nothing at all, but it keeps the Leaf economy healthy so the Guardian and Wind Song pieces you are hunting are still on the shelf.</li><li>Early-Run Goal: Guardian 10/10 and Wind Song 10/10 are the two that matter — Defense feeds the spears and Attack Speed multiplies them. Precision 10/10 comes third, once the engine is already running.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-55733ffed8a3b66e.webp" alt="Rock Elephant" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Rock Elephant</h3><p class="bg-mut">Fire 3 rock spears that deal damage equal to 70% / 95% / 125% / 160% / 200% of Defense, plus <strong>additional Rock Spear count per extra 15% Attack Speed</strong>. This is the build. Guardian is not a defensive comfort pick here, it is your damage stat, and Attack Speed is not a quality-of-life stat, it is your projectile count. Everything else on this page exists to feed these two lines.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-bdef80c494e4c63b.webp" alt="Wind Sheet Music" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wind Sheet Music</h3><p class="bg-mut">+10% / +20% / +30% / +40% / +50% increase in Melee Attack range. Blast Shot counts as a Melee Attack, so this quietly turns a point-blank shotgun into something you can fire from a sensible distance — which matters a lot more once you are standing still to let your spears do the work. It is also a Wind Song body, so it pays the combo too.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">When entering another place, gain a buff that increases Move Speed and Attack Speed by 10% / 14% / 16% / 20% / 25% / 30% for 90 seconds. Up to 30% Attack Speed refreshes every time you take a door — that is two free rock spears off a single pickup, on top of the movement. In a run where you are constantly changing rooms, the buff is effectively always on.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Precision does not make your spears crit — it is filling the damage half of the shotgun — but it is cheap, common and stacks cleanly with the other two Precision pieces below.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">+10% / +16% / +24% / +33% Critical Damage, at the cost of −16 to −7 Max MP. The price is close to invisible: the only thing you cast is Power Shot at 10 MP, and you are not leaning on it here the way an MP build would.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, with a 10% chance per attack to miss for 20% reduced damage. Both halves are real. It is the strongest of the three Precision pieces and it is worth the graze, but do not pretend the downside is not there.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow: a slow physical bolt weapon that automatically reloads once the arrows are gone, and cuts your Move Speed by 40% while you are attacking. This build cares less about that than most, because your damage is not really coming from the bolts.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Colossal Crossbow: Scattershot Shooter</h3><p class="bg-mut">Tier 2, where the crossbow becomes a shotgun.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Basic Attack is changed to Blast Shot, and damage is increased by 80%.</p><p class="bg-mut" style="margin-top:10px">Blast Shot is a short-range spread with a melee hitbox and 80% free damage on top. That hitbox is why Wind Sheet Music is worth a slot — extending a melee-flagged attack is far more useful than extending a bolt.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>The Barnacle</h3><p class="bg-mut">The other tier-3 of this branch, sitting beside Gunpowder Synthesis.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attacks and Dash Attacks attach a bomb to what they hit, and Special Attack becomes the detonation that sets them all off.</p><p class="bg-mut" style="margin-top:10px">Three things follow from that. Blast Shot is a spread with a melee hitbox, so a single shot can plant bombs on several enemies at once. Dash Attacks plant them as well — the dash is a bomb delivery, not an escape button. And Power Shot stops being a damage spell and becomes the detonator: everything you have stuck to the room goes off together, which is why it is worth pressing even at 10 MP.</p><p class="bg-mut" style="margin-top:10px">It also asks nothing of the rest of the build. Gunpowder Synthesis wants a crit engine built around it; The Barnacle just wants you to keep attacking — and so does Rock Elephant. Both halves of this build are paid for by the same behaviour, which is why it functions at only 23,000 DPS. The author’s own note that the Barnacle “pulls its weight on damage too” is that bomb layer quietly ticking away underneath the spears.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Build around Rock Elephant, full stop. The happy side effect is that Guardian 10/10 is a defensive combo — so the stat feeding your damage also makes you genuinely hard to kill. This is a rare build where the greedy choice and the safe choice are the same choice.</li><li>On Wind Song, take the dash pieces. The last tier also hands you an extra Dash charge, and a Dash Attack here plants a bomb <em>and</em> counts as an attack — so dashing is how you farm extra Rock Elephant volleys. Treat the dash as a second attack button, not as a dodge.</li><li>Attack Speed is not comfort here, it is damage. Every 15% over your base is another rock spear, so anything that says Attack Speed is worth more than its tooltip suggests.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZxTheWqwXUC3kjPbPVAfLKCBqTHVC/QuM6vXmSDjQx8T+kbcQ29sEpwqr90ErMdV2lCCc7zDrpkQfMPw5i6hbPgdI5h1cldTWqjY2feybq1v/M+980zM+Dzh78B2FMXWpWWSThUZzd3iYVc5OqhoSJvIM2dZ08Fs5GnnSeuGKFRoIHNH1ROfpmDP0RN7cXnYgOWNHqVn59MCHlLnHGqenspae6lQPKjMoD6xKlwAmhZWvNUznmAC+00mS1FyZQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z13" class="bg-zin"><label for="bg-z13" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-barnacle/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z13"><img src="/images/games/sephiria/builds/crossbow-barnacle/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-barnacle/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-barnacle-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowBarnacleBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
