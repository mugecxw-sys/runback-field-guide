// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Normal Attack</span><span class="bg-tag">Critical Damage</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">The M-9200 does one strange thing, and the entire build hangs on it: your Special Attack stops being an attack and becomes a loading step. At the first evolution it is <strong>Special Attack: Ammo Compression</strong> — 10 MP to merge every bullet in the magazine into a single round, with each bullet merged adding 25% damage. At the final tier, compressing <strong>ten rounds or more</strong> turns that shot into an <strong>Enhanced Compressed Round</strong>: a bigger projectile that hits for another 20%. You then fire it with a Normal Attack — and the game counts it as a Normal Attack. That last clause is the whole build. Every multiplier that keys off Normal Attack damage lands on the single largest hit you own: Crown of Humility pays out its combo finisher on that shot, Mystical Pendulum adds its Normal Attack damage to it, and neither bonus gets spread thin across the magazine.
 <strong>20,000 DPS</strong> in this run. As always, the draw decides the number more than the play does — treat it as a map, not a ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Sturdy 10/10 · Wind Song 6/8</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">20,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Ships with a flat <strong>+20% damage</strong> boost, and that is the whole reason it wins here: it multiplies every crit the compressed round lands and asks for nothing in return. No condition to upkeep, no element to match — the number simply goes up. The tablet it comes with can also be sold early for a free head start.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Stiff Crank, and get it early. It is an Advanced Sturdy item, so it shows up in the same pool you are already levelling for Crown of Humility and Mystical Pendulum — it competes with them for attention, but that is also why you will keep seeing it. On its own it is +5 / +10 Crossbow Reload Speed; complete 50 reloads and it becomes <strong>Marksman's Crank</strong>, which grants <strong>+40% Normal Attack and Special Attack damage for 10 seconds</strong> every time a reload finishes. This build reloads more or less on purpose, so the buff stays up instead of blinking on and off.</li><li>Early-Run Goal: Precision and Sturdy first, Wind Song second. Precision is where the crit damage lives and Sturdy is where Crown of Humility and Mystical Pendulum live, so those two are the build. Wind Song is the nice-to-have that arrives once the core is done.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0904986d68cf7c9a.webp" alt="Crown of Humility" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Crown of Humility</h3><p class="bg-mut">The last hit of the combo deals +10% / +22% / +40% / +60% / +84% increased damage. On any other build that is a bonus you have to earn by landing a full string. Here the compressed round <em>is</em> the last hit — it is the only shot you fire after loading — so the +84% lands every cycle. Highest-value slot in the build, and it is Legendary for a reason.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut">+22% / +26% / +32% / +40% / +50% Normal Attack Damage, and <strong>−10% Attack Speed</strong>. The penalty is real — it does slow you down — but it costs you almost nothing here, because this weapon fires one deliberate round per cycle rather than spray. The +50% at max level, on a shot the game explicitly counts as a Normal Attack, is the second-largest multiplier you own.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Only Rare, cheap to find, and no drawback at all. On a build whose damage arrives as a single critical hit, crit damage is not a luxury stat — it is the number the whole setup multiplies.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">+10% / +16% / +24% / +33% Critical Damage, at the cost of −16 to −7 Max MP. That trade is not free here, and it is worth saying plainly: Ammo Compression charges 10 MP every time you load a round, so the Max MP you give up is MP you would otherwise have spent on a bigger shot. Take the Critical Damage — it is still the best crit per slot — but if you ever find yourself short of MP mid-fight, this is the item to swap, not the compression loop.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, and attacks have a 10% chance to miss, which reduces damage by 20%. Read the second half: roughly one shot in ten lands for 80% instead of 100%. It is still the biggest Critical Damage number you can slot, and this run used it — but if you would rather not gamble, Warm Stone is the honest swap.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow: slow, physical, six bolts in the magazine, and it cuts your Move Speed by 40% while you are attacking. Nothing in this build tries to fix that — the plan is to make one shot worth more than a whole magazine.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>M-9199</h3><p class="bg-mut">The first evolution, and the tier that turns the crossbow's damage model upside down.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attacks pierce through enemies and damage is up 15%. Your Special Attack is replaced by <strong>Special Attack: Ammo Compression</strong> — spend 10 MP and every bullet left in the magazine is merged into a single round, with each bullet merged adding 25% damage.</p><p class="bg-mut" style="margin-top:10px">From here the magazine stops being a magazine and becomes a damage bank. Six rounds compressed is one shot worth 150% extra; a deep magazine is worth more. Nothing about the old Special Attack survives, so if you keep pressing it expecting a shot, you will spend 10 MP to load a round you have not fired yet.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>M-9200</h3><p class="bg-mut">The end of the branch, and the tier that stops being subtle about it.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Compress <strong>10 rounds or more</strong> with Special Attack: Ammo Compression and the shot upgrades into an <strong>Enhanced Compressed Round</strong> — the projectile is larger and deals 20% more damage.</p><p class="bg-mut" style="margin-top:10px">Ten rounds is +250% before the enhanced bonus ever applies, which is where a 20,000 readout comes from. And because the round is fired with a Normal Attack and counts as one, that entire pile then gets multiplied again: Crown of Humility's +84% finisher, Mystical Pendulum's +50%, Marksman's Crank's +40% after a reload, every point of Critical Damage. One shot, every multiplier you collected, no spread — that is the build.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Grab Precision and Sturdy first, Wind Song after. Precision is your crit damage and Sturdy holds both of the two items this build is actually about, so those are not preferences — they are the build. Wind Song is the finish, not the foundation.</li><li>Take Stiff Crank from the wish pool early rather than hoping for it later. It needs 50 complete reloads to become Marksman's Crank, and the compression cycle means you are reloading constantly anyway — so starting it early turns waiting time into a permanent <strong>+40% Normal Attack and Special Attack damage</strong> buff that the build keeps refreshing.</li><li>The loop is: fill the magazine, spend 10 MP on Ammo Compression, fire the round with a Normal Attack. Do not compress a half-empty magazine — both the 25%-per-bullet bonus and the ten-round threshold punish a short mag, so the gap between a six-round compression and a ten-round one is not just more damage, it is losing the Enhanced Compressed Round on top of it.</li><li>Your Special Attack is a loading press, not a panic button. It deals no damage on its own; it folds the magazine into one round and charges you 10 MP for the privilege. All the damage happens on the Normal Attack that fires it. Ten MP per compression is also the reason Sword Earrings' Max MP penalty is worth a second look — if you ever cannot afford a compression, that is the item to reconsider, not the loop.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzhd2qwXUD3kjObPVHRvVcomczNaz6uu0er8LYn50+SOa1TVegO2ciSmg67LVKg2aVhaLnghpQNPtH3P4Xo074Q7cv8Yzo2AA1vxSfK+8htNuQFwstWswc9DUF4QqIy6wdys2YhJDOxJDlv9FydCdf4i237UHKOR0scwCZcxYh6CQuuz6EYK9bJ4tzcR0sm40EHoZR7+wMivx3r1vvwn1TDjYOe2G3idNiNAvSziKsZXruDRyhmR2FyD</code>
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
<div style="position:relative"><input type="checkbox" id="bg-z15" class="bg-zin"><label for="bg-z15" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-m-9200/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z15"><img src="/images/games/sephiria/builds/crossbow-m-9200/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-m-9200/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-m-9200-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowM9200BuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
