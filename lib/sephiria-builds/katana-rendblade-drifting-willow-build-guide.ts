// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Physical</span><span class="bg-tag">Normal Attack</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Drifting Willow replaces the katana's special attack with <strong>Normal Attack: Iaido Slash</strong> and turns your normal attack into Sword Strike, plus <strong>+30% Critical Chance</strong> and a Great Iaido Slash that hits in a full circle. All of that is the setup; the build itself comes from one interaction.
 <br><br><strong>Iaido Slash counts as the last hit of the combo every single time.</strong> Items that read "the last hit of the combo" are normally a once-per-chain payoff — here they fire on every attack you throw. That is why two crowns carry this build: <strong>Crown of Humility</strong> (+84% damage on the last hit) and <strong>Golden Crown of Arrogance</strong> (+100% Critical Chance on the last hit). Everything else on the list exists to multiply a normal attack.
 <br><br>It is a straight physical damage build with no burn, no DoT and nothing to stack — you swing, and the numbers are large on the first hit. <strong>24,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Sturdy 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">24,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">A flat <strong>+20% damage</strong>, with no condition attached and no element to line up. This build has nothing else to organise — no burn timer, no charge counter — so an unconditional multiplier is exactly right: it applies to the Iaido hits that the two crowns have already amplified.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Crown of Humility</strong> first — it is the damage multiplier the whole build is arranged around, and it is Legendary. <strong>Kriton's Seal</strong> is the second pick and it is not a damage item at all: it raises Leaf gain by <strong>+10% / +25% / +50%</strong>, so you take it when you want a richer shopping run rather than a stronger one. If you only care about damage, skip it and wish for <strong>Scythe of Berut</strong> instead.</li><li>Early-Run Goal: Precision and Sturdy, then Elemental. Precision feeds the crit side (Golden Crown of Arrogance wants to be sitting on a crit chance that is already high), Sturdy is where Crown of Humility and Mystical Pendulum live, and Elemental is there for the chaos damage the Iaido line puts out.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-0904986d68cf7c9a.webp" alt="Crown of Humility" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Crown of Humility</h3><p class="bg-mut">The last hit of the combo deals <strong>+10% / +22% / +40% / +60% / +84%</strong> increased damage. On any other weapon this is a once-per-chain bonus; here every Iaido Slash is the last hit, so it is close to a permanent +84%. The single most important item in the build, and the one to wish for first.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-631cf470fdcab811.webp" alt="Golden Crown of Arrogance" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Golden Crown of Arrogance</h3><p class="bg-mut">The last hit of the combo gains Critical Chance <strong>+15% / +30% / +50% / +75% / +100%</strong>. The other half of the pair — same trigger, so the same "every attack" maths. It is only Rare, which makes it cheap for how much it does. Stacked on the weapon's own +30% crit chance, the last hit is effectively guaranteed to crit.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut">Normal Attack Damage <strong>+22% / +26% / +32% / +40% / +50%</strong>, at the cost of <strong>−10% Attack Speed</strong>. This build's damage is a normal attack, so the upside lands squarely where it should — and the drawback is real: your swings are visibly slower. Worth it anyway, but it is the reason this build feels a step heavier than a speed katana rather than a fast flurry.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%, but it loses its effect when it isn't kept warm. Say it plainly: the biggest crit number here can quietly switch off, so it is not a fire-and-forget slot. With the crowns pushing the last hit to a near-guaranteed crit, crit damage has plenty to multiply.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of <strong>−16 to −7 Max MP</strong>. The second half of the crit package, and the cost is mostly free here: the Iaido line does not lean on MP the way a special-attack build does, so you are paying in a stat this build barely uses.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60%, and attacks have a <strong>10% chance to miss, which reduces damage by 20%</strong>. The largest crit number on the list, paid for in accuracy. With Mystical Pendulum already slowing your swings, a miss costs you more than it would on a fast weapon — still worth slotting for the ceiling, but it is the first thing to drop on a run that feels unreliable.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the Iaido machinery that defines the build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Rendblade: Heavenrend</h3><p class="bg-mut">Where the weapon stops being a special-attack katana and starts being a normal-attack one.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Gain <strong>Sword Strike</strong> through Normal Attack. Special Attack: Heavy Slash changes to <strong>Normal Attack: Iaido Slash</strong>.</p><p class="bg-mut" style="margin-top:10px">From here your damage is a normal attack, which is what makes <strong>Mystical Pendulum</strong> (+Normal Attack Damage) worth its −10% attack speed — from this tier onward that item is aimed at your main button instead of a side one.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Rendblade: Drifting Willow</h3><p class="bg-mut">The final tier, and the one that makes the two crowns absurd instead of good.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Gain Sword Strike through Normal Attack. Special Attack: Heavy Slash changes to Normal Attack: Iaido Slash. <strong>Critical Chance increases by 30%</strong>, and the range of Normal Attack: <strong>Great Iaido Slash changes to a full attack</strong>.</p><p class="bg-mut" style="margin-top:10px">The +30% crit chance stacks onto Golden Crown of Arrogance's +100% on the last hit, so the hit that Crown of Humility has already boosted by 84% is also close to a guaranteed crit. And Great Iaido Slash covering a full circle means you are not aiming — you are standing in a pack and swinging. Keep the crowns in mind: without them this weapon is only a decent katana.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Precision, then Sturdy</strong>, then Elemental. Precision builds the crit chance that the last hit is already multiplying, and Sturdy is where both crowns and Mystical Pendulum live. Elemental comes last because the Iaido line carries chaos damage and you want that covered — but it is a smaller step than the other two.</li><li>If you take any Wind Song at all, make it <strong>Wind Sheet Music</strong> (+10% / +20% / +30% / +40% / +50% Melee Attack range) — reach, not damage. See the tips: I chased Wind Song hard in this run and it did very little.</li><li>On mouse and keyboard: <strong>hold left click down, then tap right click</strong>. Attacks come out noticeably smoother than clicking each swing, and this build spends a lot of time swinging continuously.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzjDWqwXUD2ivKZ51Uekhp7dnDUYZtcxE1wyoMgvOqTWRai7sf9rL0pQjqz/8ffXyrdlMn4norf/TEmwKeOJFyVqWfhrAqGB/slEwxXWKrqjigEEOE0LGR6yOvlR3p2c3qkJXfXVEKIYetUOfnAI3hx52zu3Su+TGb7RT3gw132xi+vJQ8miaRzeBw9Hh8RwKZuyk0WNHav+dy/OpksyPW3e44CWhzqTFS/khosNpAr9oWfsIC4qCWNSOWIZWCRaEdBYHJl</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>To push the damage ceiling you want <strong>Golden Crown of Arrogance</strong> and <strong>Scythe of Berut</strong>. The scythe converts any Critical Chance above 100% into <strong>Execution Chance</strong>, and a build whose last hit is already over 100% crit is exactly the weapon it was designed for.</li><li>Honest note on Wind Song: it contributes very little to this build. I chased it hard in this run and it was not worth the investment — do not copy that part of my setup.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z20" class="bg-zin"><label for="bg-z20" class="bg-zl"><img src="/images/games/sephiria/builds/katana-rendblade-drifting-willow/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z20"><img src="/images/games/sephiria/builds/katana-rendblade-drifting-willow/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-rendblade-drifting-willow/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-rendblade-drifting-willow-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaRendbladeDriftingWillowBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
