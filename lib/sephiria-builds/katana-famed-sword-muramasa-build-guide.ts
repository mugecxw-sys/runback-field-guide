// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Attack Speed</span><span class="bg-tag">Special Attack</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Famed Sword 'Muramasa' is the attack-speed katana, and it is built around one swap: <strong>Special Attack: Heavy Slash becomes Swift Slash</strong>, which is paid for in attack speed instead of windup, and <strong>attack speed is 80% more efficient on it</strong>. That single line turns Wind Song from a comfort stat into your damage stat — every point of attack speed is a faster Swift Slash, and Swift Slash is the whole kit.
 <br><br>What makes it genuinely pleasant to play is the geometry. Swift Slash does not drag you across the floor while it fires, so you can keep attacking mid-movement instead of committing to a lunge, and the arc is wide enough that you are rarely aiming at a single target. For a melee weapon that is close to the best output environment you can ask for.
 <br><br><strong>10,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Wind Song 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">10,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">A flat <strong>+20% damage</strong>, with no condition attached and no element to line up. On a build whose damage is a stream of fast, small-ish Swift Slash hits, a clean unconditional multiplier is exactly what you want — there is no window to miss and nothing to upkeep.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Blue Wrist Guard</strong>. It is <strong>+7% / +14% / +21% / +28% / +35% / +42% Special Attack Damage</strong> at Legendary, and roughly all of this build's output is Special Attack — Swift Slash, over and over. It also sits in the Sturdy pool, which is the same pool you are already levelling for the survivability pieces, so it is not costing you a separate investment.</li><li>Early-Run Goal: Wind Song first, Precision second, Sturdy third. Wind Song is the damage stat on this weapon, not a luxury — with 80% attack speed efficiency it is what makes Swift Slash worth spamming. Precision comes next for the crit package, and Sturdy is there so the run survives long enough to spend it.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp" alt="Blue Wrist Guard" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Wrist Guard</h3><p class="bg-mut">Special Attack Damage +7% / +14% / +21% / +28% / +35% / +42%. Six tiers, so it wants to be levelled, but every one of them lands on the only button you press. Swift Slash is a Special Attack, which means this is the single cleanest damage slot the build has — and it is Legendary, so the top end is real.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena's Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena's Model Stairway</h3><p class="bg-mut">When you enter another place, gain <strong>+10% / +14% / +16% / +20% / +25% / +30% Move Speed</strong>, and the same ladder of <strong>Attack Speed</strong>, for 90 seconds. On Muramasa those two numbers are not separate things — attack speed is damage, so this is a damage item that also happens to make you harder to hit. The catch is real though: it only triggers on entering another place and it runs out after 90 seconds, so it is a burst window at the start of each floor, not a permanent buff. Do not count on it being up for the boss you meet halfway through.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-bdef80c494e4c63b.webp" alt="Wind Sheet Music" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wind Sheet Music</h3><p class="bg-mut">Melee Attack range +10% / +20% / +30% / +40% / +50%. Reach rather than damage, and it is the whole reason the build feels comfortable: Swift Slash already sweeps wide, and 50% more range means you can stand where enemies are not swinging and still connect. Nothing to maintain, no downside — it just removes a lot of the risk that comes with being in melee at Difficulty 60.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%, but it loses its effect when it isn't kept warm. Worth stating plainly: the biggest crit number here can quietly switch off, so it is not a fire-and-forget slot. With Precision at 10 you already crit often enough for crit damage to matter, so when the stone is warm this is one of the best slots on the list.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of <strong>−16 to −7 Max MP</strong>. The crit package's other half, and the cost is the one thing to watch: this build does not cast, so the Max MP hit is usually free — but if your kit that run leans on spells, it is the slot to swap first.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60%, and attacks have a <strong>10% chance to miss, which reduces damage by 20%</strong>. The largest crit number you can slot, paid for in accuracy. On a build that hits this many times a second the 10% misses mostly average out, but they are still there — if you dislike seeing misses, Warm Stone plus Sword Earrings is already enough crit damage.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the attack-speed machinery that defines the build. Until you evolve, Wind Song is only a comfort stat.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Long Blade 'Onohara'</h3><p class="bg-mut">The tier where attack speed becomes a damage stat.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Special Attack: Heavy Slash is affected by <strong>Attack Speed</strong>. Attack Speed increases by <strong>15%</strong>.</p><p class="bg-mut" style="margin-top:10px">From here on, stacking Wind Song is no longer just quality of life — the special attack itself scales with it, so every attack-speed item on the list is quietly a damage item.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Famed Sword 'Muramasa'</h3><p class="bg-mut">The final tier, and the reason this is an attack-speed build rather than a burn or crit build.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Special Attack: Heavy Slash is affected by Attack Speed. Attack Speed increases by 15%. Always remains in Sheath state, and Special Attack: Heavy Slash changes to <strong>Special Attack: Swift Slash</strong>. The efficiency of Attack Speed is increased by <strong>80%</strong>.</p><p class="bg-mut" style="margin-top:10px">Swift Slash is the entire build: a special attack you can throw out continuously, with no lunge and a wide sweep, that gets 80% more value out of every attack-speed point you own. Wind Song, Helena's Model Stairway and the 15% on the weapon all pour into the same number.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Wind Song, then Precision, then Sturdy</strong>. On this weapon Wind Song is damage — 80% attack speed efficiency means the stat you are levelling is the stat that makes Swift Slash fast — so it is not the usual "take it if it shows up" pick. Precision carries the crit package that Warm Stone, Sword Earrings and Pointed Club all multiply, and Sturdy is what keeps you alive.</li><li>Grab Guardian or Shadow pieces when they appear. This is a melee build with no defensive layer of its own, and extra survivability is the difference between a full run and dying with the build online.</li><li>Stay moving while you swing. Swift Slash does not move you, so you can keep pressure on while repositioning instead of choosing between attacking and escaping — use that instead of standing still and gambling on the trade.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzTid+qxXVz3EvCaPV/6TLXzePCdOwc9K7M8e+hPPioD/569JBuT8/xCyfTvL9Vg5txsQ9PSRpoX/eC28tZZ8+Wmg8yDhGtnTbGw224NOH6XWpJlaoCn2x0o7b1kHuHSvWEJIKhFVloUdeIh28xwwXl6KK/0Ijo+K+3OOkP3Mah636Dz0D2+PT4HM5wDaPH353RhXMy598BUawnX2QN3PLGz2PY2z5kV3Ig+naUdwZyavDFHhjZTkBDsmbx9/NRKq05pYXI=</code>
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
<div style="position:relative"><input type="checkbox" id="bg-z18" class="bg-zin"><label for="bg-z18" class="bg-zl"><img src="/images/games/sephiria/builds/katana-famed-sword-muramasa/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z18"><img src="/images/games/sephiria/builds/katana-famed-sword-muramasa/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-famed-sword-muramasa/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-famed-sword-muramasa-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaFamedSwordMuramasaBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
