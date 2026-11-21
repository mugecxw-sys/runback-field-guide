// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Staff</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Flower Staff</span><span class="bg-tag">Sturdy</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">This build is one button held down while standing on top of the enemy. The Staff of Great Might changes your normal attack into <strong>Normal Attack: Flower Staff</strong> — a staff that keeps spinning — and from there the whole build is: stay glued to the target, keep the spin alive, and stack every normal-attack and critical multiplier you can find.
 <br><br>The order follows the scaling. The weapon already gives <strong>+30% Normal Attack Damage</strong>, so <strong>Sturdy</strong> comes first (normal attack damage), <strong>Precision</strong> second (critical damage), and <strong>Wind Song</strong> third for the spin itself — faster rotation means more contacts, and Wind Sheet Music stretches your reach so the arc keeps connecting while you move.
 <br><br>What I deliberately skip is the weapon's defensive half. It grants a <strong>shield equal to 5% of Defense, refreshed every 20 seconds</strong>, and that is not worth building Defense for: once per 20 seconds is a rotation, not a defense, and the payoff is thin next to simply killing the room faster. Let it happen when it happens.
 <br><br>The cost is fragility. You are a stationary blender with almost no way to disengage, so a bad room kills you — and the answer to that is Evasion from the Shadow tree, never Defense. <strong>12,000 DPS</strong> this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Sturdy 10/10 · Precision 10/10 · Wind Song 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">12,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage.</strong> The plain damage costume, and on a build with no utility to spend the slot on, that is the right answer. You are not dodging your way out of trouble with this weapon — you are killing the room before it kills you.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting staff and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Wind Sheet Music</strong> — <strong>+10% / +20% / +30% / +40% / +50% increase in Melee Attack range</strong>. You are already standing on top of the target, but the extra reach keeps the spin connecting at the edges of a pack and lets you keep the arc alive while you reposition.</li><li>Early-Run Goal: <strong>Sturdy, then Precision, then Wind Song</strong>. Sturdy is the engine because the weapon converts normal attack damage into your actual output, Precision multiplies it through crits, and Wind Song is rotation speed. Elemental can come later if the run hands it to you — it is not part of the plan.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut"><strong>+22% / +26% / +32% / +40% / +50% Normal Attack Damage</strong> and <strong>-10% Attack Speed</strong>. The largest normal-attack multiplier in the game and the reason this build exists — and yes, you pay 10% attack speed for it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-75ca81ec2f035a97.webp" alt="Glass Hammer" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Glass Hammer</h3><p class="bg-mut"><strong>+3% / +6% / +9% / +12% Weapon Damage</strong> and <strong>-3% / -6% / -9% / -12% Final HP</strong>. Solid Weapon Damage on an Advanced item, with an honest price: you are giving up up to 12% of your health on a build that already dies easily. Take it, but take it knowing that a bad room is now a slightly more likely death.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-58175a71915a1d9c.webp" alt="Bunnyville Guard Helmet" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Bunnyville Guard Helmet</h3><p class="bg-mut"><strong>+4% / +8% / +12% / +16% Weapon Damage</strong> and <strong>-4 / -8 Evasion</strong>. Up to +16% Weapon Damage on a Rare for 8 Evasion, and Evasion is the one stat this build cannot really spare. It is still worth the slot — just be aware this is the item that makes the shield-and-shrug plan fall apart in a crowded room.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut"><strong>+10% / +20% / +30% / +40% Critical Damage</strong>. Nothing attached, nothing to play around. On a build whose Precision tree is already pushing crit, +40% Critical Damage on a Rare is about as clean as items get.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut"><strong>Attacks have a 10% chance to miss (reduces damage by 20%)</strong> and <strong>+20% / +40% / +60% Critical Damage</strong>. Up to +60% Critical Damage on a Rare is absurd, and the miss chance is the tax you pay for it. On a high-frequency spin the miss averages out instead of clumping, which is why it works here and would not work on a slow, single-hit weapon.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut"><strong>+10% / +16% / +24% / +33% Critical Damage</strong> and <strong>-16 / -13 / -10 / -7 Max MP</strong>. More Critical Damage, and the MP penalty is nearly free on a build that casts almost nothing. One of the few items where the drawback genuinely does not apply to you.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Staff</h3><p class="bg-mut">The starting staff — an ordinary normal attack with nothing spinning. Your damage is unremarkable until the first upgrade lands, so treat getting it as the opening goal of the run.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Flourish Staff</h3><p class="bg-mut">The tier where this stops being a staff and becomes a blender.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack changes to <strong>Normal Attack: Flower Staff</strong>.</p><p class="bg-mut" style="margin-top:10px">From here your normal attack is a continuous spin, which is why the build wants attack speed, melee range and crit rather than anything that only fires once.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Staff of Great Might</h3><p class="bg-mut">The final tier, and the reason the normal-attack items are the core of the build.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack changes to Normal Attack: Flower Staff. <strong>Normal Attack Damage increases by 30%</strong>, and while attacking, gain <strong>Shield equal to 5% of Defense</strong>. (Refreshes every 20 sec.)</p><p class="bg-mut" style="margin-top:10px">Take the +30% — it compounds with Mystical Pendulum and every Weapon Damage roll you own. Then read the shield line as a bonus, not a plan: 5% of Defense, once every 20 seconds, is not a defensive layer worth spending item slots on.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Sturdy, Precision, Wind Song</strong>. Inside Sturdy take Normal Attack Damage and Weapon Damage; inside Precision take Critical Damage; Wind Song is rotation speed and reach.</li><li><strong>Stay glued to the target and keep spinning.</strong> There is genuinely no more to it — the Flower Staff damages whatever is inside its arc, so distance is damage you are choosing not to deal. Walk into the pack, hold the button, and let the room come to you.</li><li><strong>Do not build Defense for the shield.</strong> The 5% Defense shield refreshing every 20 seconds looks like a defensive engine and is not one. Put those slots into damage, and if you are dying, fix it with Evasion from the Shadow tree.</li><li>If the spin feels slow, remember Mystical Pendulum costs you 10% attack speed — a slower spin is fewer contacts, so attack speed is not a luxury stat on this weapon.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzThC2rwLUD0inieOw+wuF0SjPYQxHRn3v/g0/Dj15WTL2dTnaKCqc+WJYRrKUPEnD/zR5AHFMKxjjXj4ddgDeuCPRkpwi+XNRaDB0emed7NO/jiO+V9w7jYTUVu9rgy5VRC+5NNRAgIaLtVy2ZTgPDtu14GmRakUL/hWmWxSO1rtWYjIy/NY1Lw6SB8hJUo42w8JqoV0OyB++GYQgOl0oq366RS7bXDgLjcnthgVk/OU9t5bGFs</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. Sell it to the merchant the first time you meet one — until you do it is a permanently dead slot.</li><li><strong>Survivability is this build's weak point</strong>, not its damage. When a run turns rough, add <strong>Shadow</strong> for Evasion rather than Defense — Evasion avoids the hit entirely, while Defense only feeds a shield that fires once every 20 seconds.</li><li>If a room kills you twice, it is usually because you stood still in the middle of a pack. The Flower Staff wants you in melee, but it does not require you to be rooted — step with the spin instead of planting.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z28" class="bg-zin"><label for="bg-z28" class="bg-zl"><img src="/images/games/sephiria/builds/staff-great-might/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z28"><img src="/images/games/sephiria/builds/staff-great-might/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/staff-great-might/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/staff-great-might-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderStaffGreatMightBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
