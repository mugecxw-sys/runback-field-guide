// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Fire</span><span class="bg-tag">Burn</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">This one is not about the swing — it is about the pile. Every Weapon Attack here adds Burn, Blazing Helbanus turns that into free damage equal to <strong>30% of your Fire Damage</strong> on the hit itself, and the Burn stacks keep ticking in between. Everything else on the page exists to make those two numbers bigger: Ball of Red Yarn doubles Burn damage, Flame Bug hands you extra stacks per application, and Blacksmith's Tongs make the blade hit harder on anything already burning. The loop is swing, stack, walk away, watch it die.
 <strong>20,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Red-Clothed Cat</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Solar Blade 10/10 · Ember 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">20,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Red-Clothed Cat</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/red-clothed-cat.webp" alt="Red-Clothed Cat costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Red-Clothed Cat</h3><p class="bg-mut"><strong>Fire Damage +15%, Physical Damage −20%.</strong> The downside is worth spelling out, because on this weapon it is not free: the blade's own hits are the physical half of what you do, so you really do lose a fifth of the direct swing. What you buy for it is the number this whole build scales off — +15% Fire Damage feeds both the Burn ticks and Helbanus's "30% of Fire Damage" bonus on every hit. The plan is to make the fire do the killing, and this costume is the cheapest 15% fire you can put on before the run starts.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Red-Clothed Cat costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Wind Sheet Music. Its listed effect is +10% / +20% / +30% / +40% / +50% Melee Attack range, which on a Burn build is not a comfort pick — every stack in this build is applied by a Weapon Attack, so reach decides how often you can attack without stepping into a hit. Damage you do not have to trade health for is damage you keep.</li><li>Early-Run Goal: Solar Blade first, Ember second, Elemental third. Solar Blade is the tree the weapon itself scales from, Ember is where Burn damage lives, and Elemental is the top-up once the two that matter are done.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1900eb7254290af4.webp" alt="Ball of Red Yarn" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Ball of Red Yarn</h3><p class="bg-mut">+20% / +40% / +60% / +80% / +100% Burn Damage. The single most important line on this page: at max level it doubles every Burn tick you have ever applied. No condition, no drawback, and it is only Rare. If a run gives you this early, the build is already working.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-f9f93ecea6873255.webp" alt="Midday Whetstone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Midday Whetstone</h3><p class="bg-mut">+3% / +6% / +9% / +12% / +15% Attack Speed, then +1 / +2 True Damage. Attack speed is stack speed: more Weapon Attacks means more Burn applications and more 30%-of-Fire procs, which is the whole engine. The True Damage on top is small, but it is the damage type armour does not apply to, so it never goes to waste.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-8f5126b1b9f1fabc.webp" alt="Solis Decussa" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Solis Decussa</h3><p class="bg-mut">+5% / +10% / +15% / +20% Solar Blade Damage, plus +4% / +8% / +12% / +16% Critical Damage. This is the item that makes Solar Blade 10/10 pay: it is a straight multiplier on the tree you are levelling anyway, with crit damage riding along. Advanced rarity, so it shows up in the same pool you are already pulling from.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-52522c40e57a0920.webp" alt="Blacksmith's Tongs" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blacksmith's Tongs</h3><p class="bg-mut">Increases Weapon Attack damage dealt to Burn-afflicted targets by 5 / 10 / 15. This is the item that turns stacking from a slow burn into a fight you win: the first hit lights the target, and every hit after it lands harder. It also rewards attacking the thing you are already burning instead of spreading damage around, which is exactly how the build wants you to move.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-d4f6f5881ad2bf97.webp" alt="Flame Bug" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Flame Bug</h3><p class="bg-mut">+0 / 0 / +1 / +2 / +3 / +4 Burn stacks. Extra stacks per application means the damage ramps in fewer swings — and because Burn damage scales with how much Burn is on the target, this is a multiplier that keeps multiplying. The first two levels do literally nothing, so treat the upgrade tiers as the item and the base copy as a placeholder.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana. Physical, fast, and completely unremarkable — nothing about the base weapon applies Burn, so early on you are just a melee character waiting for the first upgrade.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Helbanus</h3><p class="bg-mut">This is the tier where the build switches on.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When performing a Weapon Attack, deal additional damage to the target equal to <strong>30% of Fire Damage</strong>.</p><p class="bg-mut" style="margin-top:10px">Read that as a second damage number attached to every swing you make, and it is paid out of the stat you are already stacking. The moment you have this, Fire Damage stops being a background number and starts being a damage source in its own right.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Blazing Helbanus</h3><p class="bg-mut">The final tier, and the one that makes the burn the point.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> When performing a Weapon Attack, deal additional damage equal to 30% of Fire Damage; <strong>Burn stacks increase by 2 and Fire Damage increases by 4</strong>.</p><p class="bg-mut" style="margin-top:10px">Two extra Burn stacks on every application is the part that wins fights — stacks are what Ball of Red Yarn then doubles and what Blacksmith's Tongs then feeds on. The +4 Fire Damage quietly improves the 30% bonus too, since that bonus is calculated from Fire Damage in the first place. By this point you are attacking to add fuel, not to deal the damage yourself.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Solar Blade first, then Ember, then Elemental. Solar Blade is the weapon's own scaling tree and Solis Decussa multiplies it; Ember is where Burn damage and most of your core items sit; Elemental comes once the two that actually carry the build are finished.</li><li>Take <strong>Oink Shaman's Necklace</strong> if it turns up: +20% / +40% / +60% / +80% / +100% duration of all debuffs inflicted on enemies. Burn is a debuff, so this is a straight extension of every stack you apply — damage that keeps ticking after you have already walked away. It comes out of the Curse pool, so take it when the pool offers it, not at the cost of your Ember items.</li><li>Commit to one target once it is lit. Blacksmith's Tongs pay you for hitting something that is already burning, so spreading hits across a crowd is the one way to play this build badly — pick the target with the most Burn on it and finish it.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzziC27wXVz0ijiTO+UMDHWeq+F7hye0qe7dSRRdnJ5zKizOFSmk25622P3Hwaf39hYjXBCDF1Lb2x1JQZcoj8ef64aR26l9IuPpQU5HJo5EVDkBcPPlx/9xzHUcg9xyaZiyJ7MelDYyE/QlSapxgGO9Y20mZDT7RFhtTqXSApa5jYrOo5/GytAkHNT+XVat43SX1Tg6A5ovfXjaEz8FzIgTKpXBmB3zuLW1ohNmhmzkXpEefWBsRg==</code>
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
<div style="position:relative"><input type="checkbox" id="bg-z16" class="bg-zin"><label for="bg-z16" class="bg-zl"><img src="/images/games/sephiria/builds/katana-blazing-helbanus/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z16"><img src="/images/games/sephiria/builds/katana-blazing-helbanus/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-blazing-helbanus/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-blazing-helbanus-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaBlazingHelbanusBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
