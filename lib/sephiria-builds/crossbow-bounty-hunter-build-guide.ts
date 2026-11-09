// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Dash Count</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Bounty Hunter rewrites the whole weapon. Normal Attack damage drops 45%, Special Attack becomes <strong>Advanced Reload</strong>, the magazine is locked at six rounds — and dashing reloads it instantly. Dash Attack is disabled outright. In exchange you get one extremely good line: <strong>+7% damage for every point of Dash Count you are carrying.</strong> So this build treats Dash Count as a damage stat. Stack charges, stack Dash Recovery on top of it, and the loop never stops — fire six, dash to reload, fire six again, with every charge in your pocket quietly multiplying the shots. Sturdy and Precision carry the numbers, Mystical Pendulum buys back the Normal Attack damage the weapon takes away, and 29,000 DPS is what you get once you stop thinking of your dash bar as movement.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Sturdy 10/10 · Wind Song 6/8</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">29,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Damage dealt increased by 20%. Flat, unconditional, no cooldown — and it sits at the very top of a damage stack that is already being multiplied by your Dash Count. On a build with no defensive upside anywhere, a clean +20% that never asks anything of you is exactly the right costume.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Swiftness</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Mystical Pendulum and Kriton’s Seal. Mystical Pendulum gives +22% to +50% Normal Attack Damage for a −10% Attack Speed penalty — it is the cleanest single answer to the 45% Normal Attack damage the weapon takes off you, and it counts as a Sturdy body on top. Kriton’s Seal deals no damage at all; it just keeps the Leaf economy healthy so the pieces you want stay on the shelf.</li><li>Early-Run Goal: Sturdy and Precision to 10/10. Wind Song can stop at 6/8 — those items are there for the Attack Speed body, not for a perfect count.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-75ca81ec2f035a97.webp" alt="Glass Hammer" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Glass Hammer</h3><p class="bg-mut">+3% / +6% / +9% / +12% Weapon Damage, for −3% to −12% Final HP. It does two jobs at once: a Sturdy body pushing you toward the next threshold, and Weapon Damage, which scales the bolt itself rather than the crit sitting on top of it. The HP cost is real at Difficulty 60 — if you are already getting one-shot, stop one level short.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">Entering a new area grants +10% to +30% Move Speed and Attack Speed for 90 seconds. Move Speed matters more here than on most builds, because your reload is a dash — being able to reposition at any moment is what keeps the six-round cycle turning. It is also a Wind Song body.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2302c9b7900f77d7.webp" alt="Compression Bandage" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Compression Bandage</h3><p class="bg-mut">Dash Recovery Speed +10% / +15% / +30%. Cheap, common, and the one item here that feeds the build's actual engine — faster charge recovery means more +7% damage stacks in hand and more instant reloads. It happens to be a Wind Song body too, so it pays twice.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Precision is one of your two finished combos, so this is where that flat Critical stat actually converts into kills instead of just sitting in the panel.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of −16 to −7 Max MP. Nothing in this build spends MP — you have no Special Attack left to cast — so the drawback never actually shows up on screen.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, in exchange for a 10% chance to miss for 20% reduced damage. You are firing constantly, so the occasional miss is a rounding error — and the crit damage applies to every bolt that does land.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow. A bolt weapon with a real reload and no passives to juggle — nothing wrong with it, and nothing you want to keep.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Colossal Crossbow: Reload Device</h3><p class="bg-mut">Tier 2, and where the build becomes possible — at a price.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack damage is reduced by 45%. Special Attack is changed to 'Advanced Reload'.</p><p class="bg-mut" style="margin-top:10px">Advanced Reload is what turns dashing into a reload, and the 45% Normal Attack damage cut is what you pay for it. Every other item on this page exists to buy that 45% back — which is exactly why Mystical Pendulum is the wish you take first.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Bounty Hunter</h3><p class="bg-mut">The final form of the branch, and the only weapon in this tree that turns a movement resource into raw damage.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack damage is reduced by 45%. Special Attack is changed to 'Advanced Reload'. The magazine is fixed at 6 rounds and reloads instantly when using Dash. Dash Attack is disabled, and damage increases by 7% for every point of Dash Count.</p><p class="bg-mut" style="margin-top:10px">The last line is the whole build. Dash Count stops being a movement stat and becomes your damage multiplier, while the line before it means every one of those charges also refills the magazine on the spot — so the thing that makes you hit harder is the same thing that keeps you loaded. Just read the third line properly too: <strong>Dash Attack is disabled</strong>. Dashing is pure utility here, and any item that only boosts Dash Attack is a dead slot on this weapon.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Sturdy and Precision first, both to 10/10. Those two combos are the build — Wind Song is a supporting body that can stop at 6/8.</li><li>Every tablet upgrade that can go into Dash Count or Dash Recovery Speed goes there. At +7% damage per charge, one point of Dash Count is worth more than almost any other stat you can buy.</li><li>If you are running Scythe of Berut, fight from further back. Get too close and you lose a whole chunk of your damage.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzgdwqxXUD3EvKb/VdSiBaMr6z03AM8dAzLxeDPm/W8aJyNmT46432fDI+TlcgLTcgXRP+ngz+EPBGF0l6zHLRgP+Mj41wuWvMt6/+oSjLCg9VWhF6+19pTpzZepkFBETTWobsrlF7ovXI8Smd6H9+U+LR+WRzqRSQuR6pMV+lH6bdvEDpz+PjXx8GsHbOwX51NojNirbXGaZfb28IuAyzOw5G1M5iQKIxG+BnxslebtFz0Va+nNnmZFcmMgJJZyFy71Emum3pndkpvRG5uQQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you find one, because until you do it is a permanently dead slot.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z9" class="bg-zin"><label for="bg-z9" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-bounty-hunter/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z9"><img src="/images/games/sephiria/builds/crossbow-bounty-hunter/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-bounty-hunter/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-bounty-hunter-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowBountyHunterBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
