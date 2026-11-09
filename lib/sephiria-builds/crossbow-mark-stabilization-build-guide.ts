// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Magitech</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Mark Stabilization turns the crossbow into a lightning rod. Every Normal Attack rolls a 40% chance to fire a <strong>Lightning Arrow</strong> — and once you upgrade into it, that arrow applies <strong>Electrocution</strong> on hit with Electrocution damage up 25%. So the build stops caring about the bolt and starts stacking one debuff: Magitech for Lightning Damage, Elemental for the elemental side, Precision so the electric hits can crit, and Oink Shaman’s Necklace so Electrocution lives long enough to finish the job. <strong>70,000 DPS</strong> is what a fully stacked Electrocution looks like when you let it tick instead of interrupting it.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Frog</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Magitech 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">70,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Frog</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/frog.webp" alt="Frog costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Frog</h3><p class="bg-mut">Lightning Damage +15%, Physical Damage −20%. Read that second half — it is a real penalty, not free stats. It pays off here only because almost everything this build actually kills with is lightning; the plain bolts you are nerfing are the damage you stopped scaling the moment you picked up Mark Stabilization.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Frog costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Thunderstorm Tracking Compass and Kriton’s Seal. The Compass is the single most important item in the run — a 15% to 60% chance to turn every Electrocution into <strong>Enhanced Electrocution</strong>, plus flat Lightning Damage on top. Kriton’s Seal deals no damage; it just keeps the Leaf economy healthy so the Magitech pieces you are hunting are still on the shelf.</li><li>Early-Run Goal: Magitech and Precision to 10/10, then Elemental to 6/6. Magitech is where your Lightning Damage actually comes from, so it is not optional.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-caa3d0cbcdbaa433.webp" alt="Thunderstorm Tracking Compass" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Thunderstorm Tracking Compass</h3><p class="bg-mut">When Electrocution is applied, there is a 15% / 30% / 45% / 60% chance to apply <strong>Enhanced Electrocution</strong> instead, plus +2 / +4 / +6 / +8 Lightning Damage. This is the item that decides whether Electrocution is a nuisance or a kill button. Take it to max every run.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-71ec4f09f5f25bcd.webp" alt="Thunder's Earring" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Thunder’s Earring</h3><p class="bg-mut">Every 4 seconds it deals Lightning Damage to 1 / 2 / 3 / 4 nearby enemies and inflicts Electrocution, and it adds +1 to +6 Lightning Damage. Electrocution on a timer is worth more than it sounds — it keeps the debuff running through your reload, which is the one moment this build would otherwise go quiet.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1454e01d0a5e9fd3.webp" alt="Zap Bug" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Zap Bug</h3><p class="bg-mut">Extra Electrocution stacks — +1 to +3 depending on level. Electrocution scales with stacks, so this is raw damage for one cheap slot, and it is a Magitech body pushing you toward the next Lightning Damage threshold.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-b038fe1aa8b26bc0.webp" alt="Oink Shaman’s Necklace" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Oink Shaman’s Necklace</h3><p class="bg-mut">+20% / +40% / +60% / +80% / +100% duration of all debuffs you inflict. Electrocution’s whole problem is expiring right when it starts paying — this fixes that, and the effect stacks, so take every copy you are offered.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Precision is a finished combo here, so crit damage is what turns the flat Critical stat into Lightning Arrows that actually delete things.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of −16 to −7 Max MP. Nothing here casts anything — the lightning comes off your Normal Attacks — so the drawback is invisible.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, in exchange for a 10% chance to miss for 20% reduced damage. The third crit piece, and the miss is a rounding error on a weapon that rolls a Lightning Arrow every other shot.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow. A plain physical bolt weapon with a real reload — nothing electric about it yet, and nothing worth keeping past the first fork.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Colossal Crossbow: Unstable Lightning Mark</h3><p class="bg-mut">Tier 2, where the lightning starts but does not yet stick.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'.</p><p class="bg-mut" style="margin-top:10px">Plenty of flashes, no payoff — a Lightning Arrow on its own is just extra damage on one shot. The reason this tier feels like a downgrade is that it does nothing you can build around. Keep going.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Colossal Crossbow: Mark Stabilization</h3><p class="bg-mut">The final form of the branch, and the tier where the whole build clicks into place.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When using Normal Attack, has a 40% chance to fire 'Lightning Arrow'. Applies Electrocution debuff on hit with 'Lightning Arrow'. Electrocution damage increased by 25%.</p><p class="bg-mut" style="margin-top:10px">Two words carry the entire build: <strong>applies Electrocution</strong>. Before this tier you were firing lightning at things; after it, every Lightning Arrow plants a damage-over-time debuff with a 25% damage bonus on top. That is why Magitech, Zap Bug and the Necklace suddenly matter — you are no longer scaling shots, you are scaling a DoT, and a DoT rewards duration, stacks and Lightning Damage far more than it rewards more bolts.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Magitech and Precision to 10/10 first — Magitech is where your Lightning Damage comes from and Precision is what lets it crit. Elemental rounds out at 6/6.</li><li>Oink Shaman’s Necklace can be taken more than once and the duration stacks. Two or three of them turns Electrocution from a tick into a timer nobody survives.</li><li>Mini Ballista and Ahmad’s Spirit Powder are there to cover the reload window. While you are reloading you are not applying Electrocution, and those two keep the debuff ticking so the momentum never drops.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzjCwpwXED0ivKZ51eOQsn2j7bLhxU1hM1l37MDUGuSuSIVnQCagJIohu9bBWoDv4srUKPP2IEjukeiksgm9wC5LUEwOuNypVESjQE3/q19pbPHbGD9ehQTUXvsmdD+dB64/fv1nO+QntgL9H+H2HL0qNkEt5aZclrQK/Y/dEJjlUgc/XYqERA2BIKDOIUOmPGUpp2tnud+2JF+3AZl50xe5Cv1caUGIqi/36uGHaY24k6dsafshSO+q8Gig1kHL8ONFtkS2U=</code>
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
<div style="position:relative"><input type="checkbox" id="bg-z10" class="bg-zin"><label for="bg-z10" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-mark-stabilization/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z10"><img src="/images/games/sephiria/builds/crossbow-mark-stabilization/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-mark-stabilization/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-mark-stabilization-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowMarkStabilizationBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
