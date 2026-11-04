// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Sword &amp; Shield</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Block</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Perfect Balance does one thing that no other Sword &amp; Shield does: every Normal Attack automatically Blocks in front of you. Blocking eats MP, and that cost is the only reason the trick is not completely free. Scholar Lizard deletes the cost — infinite MP means the Block never runs out. What is left is a build with infinite Block: you hold one button and are very hard to kill. It is the laziest thing on this site, and it genuinely works.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Scholar Lizard</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Sturdy 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">21,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Scholar Lizard</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/scholar-lizard.webp" alt="Scholar Lizard costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Scholar Lizard</h3><p class="bg-mut">Infinite MP, with Max HP hard-locked at 20. Everything about this build hangs on the first half: Block has an MP cost, so a character with no MP limit can hold the front line forever. The 20 HP is the trade — it means you cannot afford to get caught out even once, which is exactly what the automatic Block is there to prevent. The two halves fit together better here than in any other build on this site.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Survival</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Sword &amp; Shield and the Scholar Lizard costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Mystical Pendulum and Shield. One is raw Normal Attack damage, the other is a free defensive Skill — both are exactly what this build is short of.</li><li>Early-Run Goal: Combo order first — Precision &gt; Sturdy &gt; Wind Song = Guardian.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0904986d68cf7c9a.webp" alt="Crown of Humility" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Crown of Humility</h3><p class="bg-mut">The last hit of your combo deals +10% / +22% / +40% / +60% / +84% increased damage. One of the two core items — pairing it with Golden Crown of Arrogance turns your combo finisher into the actual damage of the build.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-631cf470fdcab811.webp" alt="Golden Crown of Arrogance" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Golden Crown of Arrogance</h3><p class="bg-mut">The last hit of your combo gains Critical Chance +15% / +30% / +50% / +75% / +100%. This is the other half of the pair — the Crown of Humility scales the finisher's damage, this one makes it crit almost every time.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut">+22% to +50% Normal Attack Damage, at the cost of 10% Attack Speed. Since this build is nothing but Normal Attacks, the upside lands on everything you do.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4ac234154b76f17c.webp" alt="Crest of the Iron Wall" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Crest of the Iron Wall</h3><p class="bg-mut">+15% / +20% / +25% Weapon Damage. A plain multiplier on the weapon you are swinging constantly — no condition, no downside.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4039880aee897489.webp" alt="Balisong" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Balisong</h3><p class="bg-mut">Damage dealt to enemies within 2.5 tiles: 6 / 8 / 11 / 14. You are standing in melee range permanently, so this is free flat damage on everything around you.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, with a 10% chance to miss for 20% reduced damage. Cheap critical damage for the finisher that the two crowns are already pushing into crit range.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Sword &amp; Shield</h3><p class="bg-mut">The starting weapon. Its own Cleave Special Attack is what you will lose later, and that costs this build nothing.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Perfect Balance</h3><p class="bg-mut">Second evolution, and the entire reason this build exists.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> +15% Attack Speed, and performing a Normal Attack automatically Blocks in front. That is the "offense and defense at once" the name refers to — you are attacking and guarding with the same button.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Indomitable</h3><p class="bg-mut">Third evolution. It keeps everything Perfect Balance gave you and adds damage.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> +15% Attack Speed and automatic frontal Block on Normal Attacks are retained, and Normal Attack Damage is increased by 33%. Special Attack: Cleave can no longer be used — which costs you nothing, because this build never presses it.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Combo pick order: Precision &gt; Sturdy &gt; Wind Song = Guardian. Wind Song and Guardian are equal — take whichever the run offers first.</li><li>Pick up Wind Song early if you can. The real jump in survivability comes the moment the weapon reaches Perfect Balance at tier 2.</li><li>Crown of Humility and Golden Crown of Arrogance are the core items. Build the run around them.</li><li>Once the build is online you genuinely just keep Normal Attacking. That is the whole rotation — no combos to track, no cooldowns to manage. It is about as braindead as Sephiria gets.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzTgeWqwXUS2kjPbPVDRnRn3BcAsqDE/yufN7BsdnZpj+EZaVbS12Li4wb5sSFw8ALSc897CzntLgrQZEs0tv2wz1HUb0N8VvmjMOkbqkcrSVZh4xDxrzCZZ8wFvh+JiWNM8pWKdY8Kq57Fz3YTBAClTB0vgeVSobsfK6JDG78rPrS1VSAMjUBcyskOpCvalZC/646GD9gskn67KeSNcwoC5K5qV6LlVvYBBXys6msF1ix51ktR4KQGYkSpuZHNl</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Once you have both Crown of Humility and Golden Crown of Arrogance, stop chasing max Critical Chance. The Golden Crown already hands your finisher up to +100%, so extra crit rate is close to wasted on this build.</li><li>For Wind Song, only take the good Attack Speed pieces. Do not fill the combo with whatever is lying around — you have unlimited Block, not unlimited item slots.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z5" class="bg-zin"><label for="bg-z5" class="bg-zl"><img src="/images/games/sephiria/builds/sword-shield-perfect-balance/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z5"><img src="/images/games/sephiria/builds/sword-shield-perfect-balance/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/sword-shield-perfect-balance/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/sword-shield-perfect-balance-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderSwordShieldPerfectBalanceBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
