// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const greatswordBuildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Everything here exists to push one button harder. Cap Critical Chance, pour the rest into Critical Damage and Special Attack Damage, and every Whirlwind starts critting. With Negligence the Special Attack also comes out already charged, so you are never standing around waiting on it — normal attacks exist only to refill the bar.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Sturdy 10/10 · Precision 10/10</span></div>
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
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">Ships with a flat +20% damage boost, which is the whole reason it wins here: it multiplies every crit the Special Attack lands and asks for nothing in return. The tablet it comes with can be sold early for a free head start.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row" style="border-bottom:0"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Greatsword, Skeleton costume, and Heavy Heart — the Difficulty 60 artifact. It does nothing for you, but the shop will take it off your hands.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Discarded Golden Ring, Angry Potato.</li><li>Early-Run Goal: Get Sturdy and Precision online first, then start moving points into Critical Chance and Critical Damage.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-fe3773f4a62a3b74.webp" alt="Valter’s Work Monocle" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Valter’s Work Monocle</h3><p class="bg-mut">Critical Chance up to +45% — the fastest way to cap your crit rate. Respect the penalty: stay 3 tiles away from enemies or you lose 30% Critical Damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage up to +40% with no conditions beyond keeping it warm — the damage half of the Precision combo, and the cheapest crit damage you’ll find.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp" alt="Blue Wrist Guard" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Wrist Guard</h3><p class="bg-mut">Up to +42% Special Attack Damage, which is the biggest single multiplier Whirlwind gets. Upgrade it early and never take it off.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">The largest Critical Damage roll available at +60%, bought with a 10% chance to miss for 20% reduced damage. Once crit rate is capped, that trade is almost always correct.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-38d8f121f12d505f.webp" alt="Agma Projection Sword No. 190, 191" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Agma Projection Sword No. 190, 191</h3><p class="bg-mut">Flat Physical Damage up to +14. It reads small, but a Special Attack that hits on every tick applies it again and again.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ee6426e1161cde31.webp" alt="Discarded Golden Ring" width="72" height="72" style="image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Discarded Golden Ring</h3><p class="bg-mut">+10 to +30 Special Attack Range so Whirlwind covers more of the screen, and after 40 Special Attack kills it transforms into something stronger.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Greatsword</h3><p class="bg-mut">Where every run starts. Nothing remarkable on its own — the point is that its Special Attack, Whirlwind, becomes the delivery system for everything else in this build.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Hypersensitivity</h3><p class="bg-mut">Tier：2 on the Greatsword<br>Effect：Whirlwind deals 20% more damage and charges 50% faster.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Third Upgrade — Pick One</h3><p class="bg-mut">Both are Tier 3 Greatsword upgrades and they are mutually exclusive: a run only ever gives you one of them. This build runs Negligence, but Loving Gaze is a perfectly fine substitute if that is what drops.</p><div class="bg-grid" style="margin-top:16px"><div style="background:var(--surface-inset);border:1px solid var(--gold-text);border-radius:10px;padding:16px"><h3 style="font-size:16px;margin-bottom:6px">Negligence <span class="bg-tag bg-g" style="font-size:11px;vertical-align:middle;margin-left:6px">This Build</span></h3><p class="bg-mut" style="margin-bottom:10px">Effect：Whirlwind damage +20%, charge speed +50%, Special Attack Damage +15%, Whirlwind comes out already charged — but Special Attack Speed −15%.</p><p class="bg-mut">What this build uses. Whirlwind is already charged the moment you press it, so the Special Attack is always available, and the +15% Special Attack Damage is pure extra scaling on top.</p></div><div style="background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;padding:16px"><h3 style="font-size:16px;margin-bottom:6px">Loving Gaze</h3><p class="bg-mut" style="margin-bottom:10px">Effect：Whirlwind damage +20%, charge speed +50%, Whirlwind Critical Chance +100%, Special Attack Speed +50%.</p><p class="bg-mut">The crit branch. +100% Whirlwind crit chance covers your crit rate almost for free and lets you skip some Critical Chance sources elsewhere — but you give up the instant charge.</p></div></div></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Fill out Sturdy and Precision first. Elemental comes after those two are done.</li><li>Send slates and upgrades into Critical Chance and Critical Damage before anything else.</li><li>Always grab Stone Spindle Whorl when it shows up.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzijWuwXUA3kvKZPVDxXegiHMAvUcniP375hBjMhaeTgVrQvRB8Vu+puYcdLiA5eQxQ21+q/qicP1PMddJho/1QsASgs1ryCPrKFOH/I/slG985Gv8MyifjaAirTkRRXUJiNJJlfWPpcB8k3b1j39McXDScwbtzIt2KUDBmDXkMSNHptfkVF/fKaQtTzc3kB9+UZ0WTkDTFOfFmLr7106roz7BpA074zKgMHM8ZstqVtx7DVn+QRjBfNrNlZHNl</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>On the current patch, at Difficulty 60 you can sell Heavy Heart — the artifact you start the run with — and the tablet that comes with Skeleton at the merchant. That is a free head start, take it.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z1" class="bg-zin"><label for="bg-z1" class="bg-zl"><img src="/images/games/sephiria/builds/greatsword/run-results.webp" alt="Final build from a cleared Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z1"><img src="/images/games/sephiria/builds/greatsword/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/greatsword/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/greatsword-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderGreatswordBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return greatswordBuildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}

export const greatswordBuildGuideCss = `@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;800&display=swap");
.bg-pg{font-family:'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif;color:var(--text);background:var(--wiki-page-bg);line-height:1.7;font-size:16px;padding-bottom:64px}
.bg-wrap{max-width:1080px;margin:0 auto;padding:0 32px;box-sizing:border-box}
.bg-sec{padding-top:80px}
.bg-hd{display:flex;align-items:baseline;gap:16px;margin-bottom:28px}
.bg-no{display:none}
:where(.bg-pg) h1,:where(.bg-pg) h2,:where(.bg-pg) h3{font-family:'Noto Serif SC',serif;color:var(--heading);margin:0}
:where(.bg-pg) h2{font-size:32px}
:where(.bg-pg) h3{font-size:19px;margin-bottom:8px}
:where(.bg-pg) p{margin:0}
.bg-grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}
.bg-card{background:var(--surface);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:14px;padding:22px;box-sizing:border-box}
.bg-ph{display:flex;align-items:center;justify-content:center;text-align:center;border:1.5px dashed color-mix(in srgb, var(--gold-border) 55%, transparent);border-radius:10px;color:var(--muted);font-size:13px;background:var(--surface-inset);box-sizing:border-box}
.bg-tag{display:inline-block;font-size:12px;font-weight:700;padding:2px 10px;border-radius:999px;border:1px solid color-mix(in srgb, var(--gold-border) 55%, transparent);color:var(--body-soft)}
.bg-tag.bg-g{border-color:var(--gold-text);color:var(--gold-text)}
.bg-mut{color:var(--muted);font-size:14px}
.bg-nd{display:inline-block;width:22px;height:22px;border-radius:50%;border:2px solid color-mix(in srgb, var(--gold-border) 55%, transparent);box-sizing:border-box;margin-right:6px}
.bg-nd.bg-on{background:var(--gold-text);border-color:var(--gold-text)}
.bg-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);font-size:15px}
:where(.bg-pg) ul.bg-l{margin:10px 0 0;padding-left:18px;color:var(--body-soft);font-size:14px}
:where(.bg-pg) ul.bg-l li{margin-bottom:6px}
.bg-nv a{display:inline-block;padding:6px 16px;border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:999px;color:var(--body-soft);text-decoration:none;font-size:14px;margin:0 8px 8px 0}
.bg-nv a:hover{border-color:var(--gold-text);color:var(--gold-text)}
.bg-bd{width:34px;height:34px;border-radius:50%;background:var(--gold-text);color:var(--page-bg);font-weight:700;display:flex;align-items:center;justify-content:center;margin-bottom:12px}
:where(.bg-pg) a{color:var(--gold-text)}
.bg-tb{position:relative}
.bg-tb input{position:absolute;opacity:0;width:1px;height:1px}
.bg-tl{display:flex;gap:8px;margin-bottom:14px}
.bg-tl label{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;min-height:44px;padding:6px;box-sizing:border-box;border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:13px;color:var(--body-soft);cursor:pointer}
.bg-tl label:hover{border-color:var(--gold-text)}
.bg-pn{display:none;min-height:236px}
#bg-c1:checked ~ .bg-p1,#bg-c2:checked ~ .bg-p2,#bg-c3:checked ~ .bg-p3{display:block}
#bg-c1:checked ~ .bg-tl label[for=bg-c1],#bg-c2:checked ~ .bg-tl label[for=bg-c2],#bg-c3:checked ~ .bg-tl label[for=bg-c3]{border-color:var(--gold-text);color:var(--gold-text);background:var(--surface-raised)}
#bg-c1:focus-visible ~ .bg-tl label[for=bg-c1],#bg-c2:focus-visible ~ .bg-tl label[for=bg-c2],#bg-c3:focus-visible ~ .bg-tl label[for=bg-c3]{outline:2px solid var(--gold-text);outline-offset:2px}
/* Restore the supplied HTML defaults inside Tailwind’s reset, scoped to this guide. */
.bg-pg h2,.bg-pg h3{font-weight:700}
.bg-pg ul.bg-l{list-style:disc}
.bg-pg a{text-decoration:underline}
.bg-pg .bg-nv a{text-decoration:none}
.bg-pg .bg-ph{font-weight:400}
.bg-zin{position:absolute;opacity:0;width:1px;height:1px;pointer-events:none}
.bg-zl{display:block;cursor:zoom-in;position:relative}
.bg-zi{display:block;width:100%;height:auto;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent)}
.bg-zov{display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.9);align-items:center;justify-content:center;padding:3vh 3vw;box-sizing:border-box;cursor:zoom-out}
.bg-zin:checked ~ .bg-zov{display:flex}
.bg-zov img{max-width:100%;max-height:100%;width:auto;height:auto;border-radius:8px;box-shadow:0 24px 80px rgba(0,0,0,.7)}

@media(max-width:640px){.bg-pg h1{font-size:clamp(32px,8vw,44px)!important}}
`;
