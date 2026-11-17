// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">True Damage</span><span class="bg-tag">Attack Speed</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">This one throws out the crit formula entirely. RuinDance swaps the special attack for <strong>Normal Attack: Iaido Slash</strong> and — this is the part that makes the build — <strong>grants Barrage when the Sword Strike gauge hits 100%</strong>. Barrage means a burst of rapid attacks, and a burst of rapid attacks is a burst of hit counts, which is the one thing True Damage actually cares about.
 <br><br>So the plan is not "crit harder", it is <strong>"hit more, smaller, and unhittable-by-reduction"</strong>. True Damage is the floor of this build rather than its ceiling: scaling enemies stack damage reduction and normal damage gets shaved down, while True Damage keeps landing at the same number. It is a stable minimum instead of a high maximum.
 <br><br><strong>2,200 DPS</strong> in this run — not high, and I am not going to pretend otherwise. But it clears Difficulty 60, and it is the most different a katana build has felt to me. Draws vary, so read this as a map rather than a benchmark. The weapon's cost is worth knowing up front: <strong>you lose Normal Attack: Great Iaido Slash entirely</strong>.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Red Fox</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Wind Song 10/10 · Shadow 10/10</span></div>
<div class="bg-row"><span class="bg-mut">Damage Type</span><span style="text-align:right">True Damage</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">2,200</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Red Fox</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/red-fox.webp" alt="Red Fox costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Red Fox</h3><p class="bg-mut"><strong>+6 inventory slots</strong> and no combat stats at all. I took it for the bag space, because a True Damage build shops for a lot of small pieces and runs out of room fast. Any costume you actually like is fine here — this slot is a convenience pick, not a damage pick, and nothing in the build depends on it.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Swiftness</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Survival</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Red Fox costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>White Cape</strong> — <strong>+30% / +60% / +100% / +130% / +160% / +200% Duration of Buffs Applied by Self</strong>. Barrage is a buff, so stretching buff duration stretches the high-frequency window that this whole build is built on. It is Advanced, so it is cheap to get and easy to tier up.</li><li>Early-Run Goal: <strong>Wind Song, then Shadow, then Sturdy</strong>. Not Precision — crit is not what this build is doing, so a crit-heavy level is a level wasted. Wind Song is attack speed and hit frequency, which is where True Damage is actually generated, and Shadow hands you the survivability plus Six-leaf Clover and Battle Bracelet of Lerid.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cbe481cc6ae163f5.webp" alt="Impact Amplifier" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Impact Amplifier</h3><p class="bg-mut"><strong>True Damage +1 / +2 / +3 / +4 / +5 / +6 / +7 / +8 / +9 / +12 / +14</strong>. Eleven tiers, all of them the same stat, and it is the biggest single source of True Damage in the game. Everything else here is a small contribution next to it, so this is the item to tier aggressively. Legendary, no drawback.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-88311abe344ab0c1.webp" alt="Clear Cube" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Clear Cube</h3><p class="bg-mut">True Damage <strong>+1 / +2 / +3</strong>, plus <strong>+5% to +12% Move Speed</strong> and <strong>+5% to +12% Attack Speed</strong>. True Damage plus attack speed on one item is exactly this build's shape: the flat damage is what lands, and the speed is how often you land it. Nothing to manage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-f34cd00d9ee3cf0b.webp" alt="Battle Bracelet of Lerid" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Battle Bracelet of Lerid</h3><p class="bg-mut">True Damage <strong>+1 / +2 / +3</strong>, <strong>+2% to +8% Move Speed</strong>, up to <strong>+2 Dash Count</strong>, and Dash invincibility counts as an Evasion success. Small numbers, but they are the right numbers: more dashes is more uptime and more survivability, and the Evasion-on-dash is a free safety net that this build leans on since nothing here gives real defence.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-b06f4964c3827a72.webp" alt="Six-leaf Clover" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Six-leaf Clover</h3><p class="bg-mut">True Damage <strong>+1 / +2</strong>, plus <strong>+3 to +12 Evasion</strong>, <strong>+3 to +12 Luck</strong> and <strong>+2% to +8% Critical Chance</strong>. Only the True Damage line matters to the plan; the rest is defensive padding and Luck. Legendary, and worth taking for the flat damage even though nothing else on it is a build piece.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the Iaido machinery that defines the build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Rendblade: Heavenrend</h3><p class="bg-mut">Where the damage stops being a special attack.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Gain <strong>Sword Strike</strong> through Normal Attack. Special Attack: Heavy Slash changes to <strong>Normal Attack: Iaido Slash</strong>.</p><p class="bg-mut" style="margin-top:10px">This is the tier that makes Clear Cube and the attack-speed stacking worthwhile — your damage is now a normal attack you throw constantly, and hit count is the whole engine.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Rendblade: RuinDance</h3><p class="bg-mut">The final tier, and the one that turns hit count into a build.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Gain Sword Strike through Normal Attack. Special Attack: Heavy Slash changes to Normal Attack: Iaido Slash. <strong>You cannot use Normal Attack: Great Iaido Slash</strong>, but when the <strong>Sword Strike gauge is at 100%</strong>, you gain the <strong>Barrage</strong> buff.</p><p class="bg-mut" style="margin-top:10px">Two things to be clear about. The downside is real — losing Great Iaido Slash means losing the wide sweeping clear that the other Rendblade builds enjoy, so you are killing things one swing at a time instead of one circle at a time. The upside is Barrage: a high-frequency attack window that turns your hit count up, and hit count is exactly what a pile of flat True Damage wants.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Wind Song, Shadow, then Sturdy</strong>. Precision is deliberately absent — this is not a crit build, so crit chance and crit damage are dead weight in it.</li><li>Build for <strong>attack speed and multi-hit</strong>, not for big single numbers. The real strength of this setup is the attack speed and survivability that Wind Song and Shadow hand you; the True Damage is the stable floor underneath it, the part that keeps landing while scaling enemies stack damage reduction.</li><li>The costume is free — I took Red Fox for <strong>6 extra inventory slots</strong> and nothing else. If you prefer a different costume, use it, nothing here breaks.</li><li>Play it as a sustained auto-attacker: keep the Sword Strike gauge filling, spend the Barrage windows, and use the extra dashes from Battle Bracelet of Lerid to stay out of trouble instead of eating hits.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyyg/W/xXVx3tU43inf5jWKXKSc89T50/DnGIqwKgLuj6UwHDWnAFu6+wkAi0FZua6BctPzbfRycULI/IbDrb8mfdwbv0m8QXYp25quS+wNQu+d0weeuBawST7F3XAEYrwLyy1HnFyvlNyMNQyoOUW6rPNO4DYr9ZgtCNlVrivXqN95pQIdqbFDoGREwotwt4yg0ry1e4qI5J1Kttz4uq7BcCO12vOmat2XuuDjnaG5uQQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>Manage expectations honestly: this is a lower-DPS build than the crit katanas on this site. It clears Difficulty 60, and it is worth playing for how differently it plays rather than for its numbers.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z21" class="bg-zin"><label for="bg-z21" class="bg-zl"><img src="/images/games/sephiria/builds/katana-rendblade-ruindance/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z21"><img src="/images/games/sephiria/builds/katana-rendblade-ruindance/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-rendblade-ruindance/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-rendblade-ruindance-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaRendbladeRuinDanceBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
