// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Critical</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Gunpowder Synthesis turns the crossbow into a shotgun, and then turns the shotgun into a crit engine. Blast Shot replaces Normal Attack and hits 80% harder; the final upgrade adds +35% Critical Chance to Direct Attacks and — the part that actually matters — <strong>recharges a bullet every time you crit</strong>. Pair that with the game's two "last hit of the combo" items, Golden Crown of Arrogance and Crown of Humility, and the finisher of every attack string is a <strong>guaranteed critical hit carrying +84% damage</strong> that hands the bullet straight back to you. You stop reloading. <strong>60,000 DPS</strong> is what that loop looks like once it is built.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Sturdy 10/10 · Wind Song 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">60,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Damage dealt +20%, with no condition attached to it. The costume is not clever here, it is just a clean 20% multiplier on a build that has already stacked every critical hit multiplier it could find — which is exactly why it wins. There is no drawback to justify and nothing to play around.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Golden Crown of Arrogance and Kriton’s Seal. The Crown is the run — +100% Critical Chance on the last hit of the combo is what converts "sometimes a crit" into "always a refund". Kriton’s Seal deals no damage at all, but it keeps the Leaf economy healthy so the Precision pieces you are actually hunting are still on the shelf.</li><li>Early-Run Goal: Precision and Sturdy to 10/10 first, then Wind Song to 6/6. Precision is the crit half of the engine and Sturdy is the physical half — the shotgun is a physical weapon, so neither is optional.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-631cf470fdcab811.webp" alt="Golden Crown of Arrogance" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Golden Crown of Arrogance</h3><p class="bg-mut">The last hit of the combo gains Critical Chance +15% / +30% / +50% / +75% / +100%. At max level that is not a bonus, it is a guarantee — and a guaranteed crit on a Gunpowder Synthesis crossbow is a guaranteed bullet refund. This single line is the difference between a shotgun that runs dry and a shotgun that does not.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0904986d68cf7c9a.webp" alt="Crown of Humility" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Crown of Humility</h3><p class="bg-mut">The last hit of the combo deals +10% / +22% / +40% / +60% / +84% increased damage. It hits the exact same swing Golden Crown of Arrogance forces to crit, so the two items stack on one shot: +84% base damage, then every point of Critical Damage you own gets multiplied on top of it. That is where the 60,000 comes from, and why neither crown is playable without the other.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Now that the combo finisher always crits, Critical Damage is no longer a chance-based stat — it is a flat multiplier on your biggest hit. Cheap, common, take every copy.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">+10% / +16% / +24% / +33% Critical Damage, at the cost of −16 to −7 Max MP. The price is almost invisible here: your damage is Normal Attack and the only thing you cast is Power Shot at 10 MP, used as an emergency reload. Being a little short on Max MP changes nothing about how the build plays.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, with a 10% chance per attack to miss for 20% reduced damage. Both halves are real — the miss is a genuine tax on your Normal Attacks. It is still worth the slot, because one guaranteed crit finisher outweighs a 10% graze on the shots in between.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut">+22% / +26% / +32% / +40% / +50% Normal Attack Damage, −10% Attack Speed. Blast Shot <em>is</em> your Normal Attack, so this is a direct multiplier on the only button you press. You are trading a tenth of your attack speed for half again the damage of every shell, which is a trade worth making at every level of this weapon.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow: a slow physical bolt weapon that automatically reloads once the arrows are gone, and cuts your Move Speed by 40% while you are attacking. Both of those drawbacks are what the rest of the route is there to fix.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Colossal Crossbow: Scattershot Shooter</h3><p class="bg-mut">Tier 2, where the crossbow stops being a crossbow.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Basic Attack is changed to Blast Shot, and damage is increased by 80%.</p><p class="bg-mut" style="margin-top:10px">Blast Shot is a point-blank shotgun spread that counts as a melee attack, so from here on you are playing a short-range build with 80% free damage on top. Nothing in this tier interacts with crits yet — it is the raw damage layer the crowns later get to multiply.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Colossal Crossbow: Gunpowder Synthesis</h3><p class="bg-mut">The final form of the branch, and the tier that turns the shotgun into an engine.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Increase Critical Chance of Direct Attack by 35% and recharge 1 bullet if the attack hits critically.</p><p class="bg-mut" style="margin-top:10px">Read the second clause again: <strong>a critical hit recharges a bullet</strong>. Combine that with Golden Crown of Arrogance pushing the last hit of every combo to +100% Critical Chance, and the finisher of each attack string spawns its own ammunition. Your arrows stop being a resource you spend and start being a resource you cycle — which means the auto-reload, and the 40% Move Speed penalty that comes with attacking, almost never fire. The +35% Critical Chance is the supporting half: it makes the shots <em>before</em> the finisher crit often enough to keep the magazine topped up between guaranteed ones.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>The build is Golden Crown of Arrogance plus Crown of Humility and nothing else. Once those two are in your inventory the rest of the run is just filling Sturdy and Precision to 10/10 so the same shot keeps getting bigger.</li><li>Do <strong>not</strong> take the Sturdy crossbow-exclusive artifact — the Marksman’s Crank line. It is a reload speed item, and this build wins by never actually completing a reload. A whole slot of nothing.</li><li>Keep firing. The finisher of every attack string is a forced crit carrying +84% damage, and every one of those crits hands a bullet back — the loop only pays if you never stop pressing the button.</li><li>You are a shotgun, not a sniper. Blast Shot is a short-range spread, so close the gap and attack from inside the fight; back off only when something is actually about to hit you.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZ1zijWvxXUA3kvKZ/dIkv/tOGj596gEuzSTH7zSzIJ7ziPWgoLEWi083IUAY11b12dZDpJiKsbDBZglQBI7aXoFUz4Q0/Rv4fInEA/cIfhTOew3q2mzjx2x4fCHKaqPiFBeCYTnmWFNAZPEqw+VM7HIQCb+u40fmQKsO9RPKaGx35HHC3FbHL7txAfPoQdfy2klnuXNG0ifTpA08lCzr/lgzr+1V1LHcobSGhAoagkEZou7XGSL/gYA6Hk/n8TSLbVJoYQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>If you do accidentally empty the magazine, you are not stuck: a <strong>Power Shot critical also recharges a bullet</strong>. Firing the special attack into a crowd is the fastest way to get the shotgun back online.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z12" class="bg-zin"><label for="bg-z12" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-gunpowder-synthesis/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z12"><img src="/images/games/sephiria/builds/crossbow-gunpowder-synthesis/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-gunpowder-synthesis/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-gunpowder-synthesis-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowGunpowderSynthesisBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
