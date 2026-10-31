// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const greatswordBuildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="font-size:20px;margin-top:12px;font-weight:500;color:var(--gold-text)">[The build’s main damage engine.]</p>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">[A short introduction to the core setup, playstyle, and who this build suits.]</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">[Costume]</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">[Core damage engine]</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">[DPS]</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked><input type="radio" name="cos" id="bg-c2"><input type="radio" name="cos" id="bg-c3">
<div class="bg-tl"><label for="bg-c1">[Costume 1]</label><label for="bg-c2">[Costume 2]</label><label for="bg-c3">[Costume 3]</label></div>
<div class="bg-pn bg-p1"><div class="bg-ph" style="height:100px;margin-bottom:14px">[Costume 1 Icon]</div><h3>[Costume 1]</h3><p class="bg-mut">[Costume effects and how they fit this build.]</p></div>
<div class="bg-pn bg-p2"><div class="bg-ph" style="height:100px;margin-bottom:14px">[Costume 2 Icon]</div><h3>[Costume 2]</h3><p class="bg-mut">[Costume effects and how they fit this build.]</p></div>
<div class="bg-pn bg-p3"><div class="bg-ph" style="height:100px;margin-bottom:14px">[Costume 3 Icon]</div><h3>[Costume 3]</h3><p class="bg-mut">[Costume effects and how they fit this build.]</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>[Talent 1]</span><span><i class="bg-nd bg-on"></i><i class="bg-nd bg-on"></i><i class="bg-nd bg-on"></i></span></div>
<div class="bg-row"><span>[Talent 2]</span><span><i class="bg-nd bg-on"></i><i class="bg-nd bg-on"></i><i class="bg-nd"></i></span></div>
<div class="bg-row" style="border-bottom:0"><span>[Talent 3]</span><span><i class="bg-nd bg-on"></i><i class="bg-nd"></i><i class="bg-nd"></i></span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items：[…]</li><li>Difficulty：[…]</li><li>Run Requirements：[…]</li><li>Early-Run Goal：[…]</li></ul>
<div class="bg-ph" style="height:90px;margin-top:14px">[Optional Image]</div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 1]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 2]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 3]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 4]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 5]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 6]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 7]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
<div class="bg-card" style="padding:16px"><div class="bg-ph" style="height:96px;margin-bottom:12px">[Item Icon]</div><h3 style="font-size:16px;margin-bottom:4px">[Core Item 8]</h3><p class="bg-mut">[A short description of this item’s role.]</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>[Starting Greatsword]</h3><p class="bg-mut">[How to obtain it and its early-game role.]</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>[First Upgrade]</h3><p class="bg-mut">Upgrade Requirements：[…]<br>Effect：[…]</p></div>
<div class="bg-card"><div class="bg-bd">3</div><h3>[Second Upgrade]</h3><p class="bg-mut">Upgrade Requirements：[…]<br>Effect：[…]</p></div>
<div class="bg-card" style="border-color:var(--gold-text)"><div class="bg-bd">4</div><h3>[Final Upgrade]</h3><p class="bg-mut">Requirements：[…]<br>Effect：[…]</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>[Gameplay Tip 1]</li><li>[Gameplay Tip 2]</li><li>[Gameplay Tip 3]</li><li>[Gameplay Tip 4]</li></ul>
<div class="bg-ph" style="height:140px;margin-top:16px">[Optional Image / GIF]</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>[Tip 1]</li><li>[Tip 2]</li><li>[Tip 3]</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div><div class="bg-ph" style="aspect-ratio:16/9;width:100%">[Final Build Screenshot]</div></div>
<div><div class="bg-ph" style="aspect-ratio:16/9;width:100%;position:relative"><button aria-label="Play gameplay video" style="width:64px;height:64px;border-radius:50%;border:0;background:var(--gold-text);cursor:pointer;display:flex;align-items:center;justify-content:center"><svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="var(--page-bg)"/></svg></button></div></div>
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

@media(max-width:640px){.bg-pg h1{font-size:clamp(32px,8vw,44px)!important}}
`;
