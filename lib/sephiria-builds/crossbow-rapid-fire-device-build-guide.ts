// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Colossal Crossbow</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Special Attack</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Rapid-Fire Device does one thing and does it loudly: <strong>Special Attack: Power Arrow</strong> hits harder from further away, and every time you cast it again within two seconds it stacks another +10% damage, up to +50%. That is a combo counter with a two-second fuse, so the build is entirely about never letting the fuse go out. <strong>Scholar Lizard</strong> is what makes that possible — Infinite MP means Power Arrow never costs a thing, so you can chain it forever. Blue Wrist Guard adds up to +42% Special Attack Damage on top. <strong>35,000 DPS</strong>, no cooldown, and a resource bar you never have to look at.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Scholar Lizard</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Sturdy 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">35,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Scholar Lizard</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/scholar-lizard.webp" alt="Scholar Lizard costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Scholar Lizard</h3><p class="bg-mut">Infinite MP, with Max HP hard-locked at 20. Your Max MP is fixed and it never decreases, which in practice means Power Arrow never costs you anything — and that is the entire reason this build exists. Rapid-Fire Device pays you for casting Power Arrow back to back inside a two-second window, and Scholar Lizard deletes the only thing that would ever stop you doing exactly that: no mana, no downtime, no reason to stop pressing the button. The 20 Max HP is the trade, and it is a real one — you cannot afford to eat a hit, which is why this build is about keeping your distance and never standing still.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Colossal Crossbow and the Scholar Lizard costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Blue Wrist Guard and Kriton’s Seal. Blue Wrist Guard is up to +42% Special Attack Damage — flat, unconditional, and aimed straight at the one button you press all game. Kriton’s Seal deals no damage; it just keeps the Leaf economy healthy so the pieces you want stay on the shelf.</li><li>Early-Run Goal: Sturdy and Precision to 10/10. Blue Wrist Guard, both cranks and Stone Spindle Whorl are all Sturdy bodies, so the combo finishes itself while you are collecting the build.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp" alt="Blue Wrist Guard" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Wrist Guard</h3><p class="bg-mut">+7% / +14% / +21% / +28% / +35% / +42% Special Attack Damage. One of the cleanest items in the game for a special-attack build — no condition, no penalty, and a top end of 42% on the exact damage type you never stop using.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-1419316a08e59bdd.webp" alt="Marksman’s Crank" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Marksman’s Crank</h3><p class="bg-mut">At max level: <strong>+20 Crossbow Reload Speed</strong>, and <strong>every completed reload grants +40% Normal Attack and Special Attack damage for 10 seconds</strong>. That second half is the real reason to run it — it refreshes on each reload, and a build whose entire job is firing Power Arrow without pause keeps it up essentially forever. It does not drop either: it starts life as <strong>Stiff Crank</strong> (+5 / +10 reload speed, no damage buff) and transforms into this after 50 complete reloads, which is why you take the Stiff Crank early and let the upgrade happen on its own.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5cf38aa694ee307c.webp" alt="Stone Spindle Whorl" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Stone Spindle Whorl</h3><p class="bg-mut">+6% / +12% / +18% / +24% / +30% Damage of abilities consuming MP. Worth knowing exactly how this reads, because Scholar Lizard makes people doubt it: the bonus keys off the <em>ability</em>, not off MP actually disappearing from the bar. Power Arrow is an MP-consuming attack, so it is always in the bonus, whether or not the cost is deducted. Infinite MP does not switch this item off — the bonus never needed your MP to actually go down, only for the attack to be the kind that costs MP. So you get the full multiplier on every single cast, for free. Which is why the author says to grab it the moment it shows up.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%. Precision is a finished combo here, and a Power Arrow that crits is a Power Arrow that scales with the +50% chain on top of it.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33% for −16 to −7 Max MP. The drawback is not just irrelevant here, it is comedy — your MP is fixed and never drops, so you are trading away a number that no longer exists.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">+20% / +40% / +60% Critical Damage, in exchange for a 10% chance to miss for 20% reduced damage. The third crit piece, and a 10% miss is small change next to a 50% chained damage bonus.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Colossal Crossbow</h3><p class="bg-mut">The default starting crossbow. A physical bolt weapon with a real reload — you are here for the fork, not for the gun.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Colossal Crossbow: Enhanced Special Bolts</h3><p class="bg-mut">Tier 2, where Power Arrow stops being a utility button.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> The attack range of Special Attack: Power Arrow is increased, and damage is increased by 30%.</p><p class="bg-mut" style="margin-top:10px">Range plus 30% is already a real weapon — and it is the tier where you should start treating Power Arrow as your primary, well before the crossbow is finished.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Colossal Crossbow: Rapid-Fire Device</h3><p class="bg-mut">The final form of the branch, and the tier that turns a good ability into a loop.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> The attack range of Special Attack: Power Arrow is increased, and damage is increased by 30%. When Special Attack: Power Arrow is cast consecutively (within 2 seconds), it deals an additional 10% damage for each consecutive cast. (up to a maximum of 50%)</p><p class="bg-mut" style="margin-top:10px">Read the second line carefully: <strong>within 2 seconds</strong>. The stack is not something you build and keep — it is something you maintain, and the moment you stop casting, it starts over. That single restriction is why the costume choice is not optional. Any MP cost at all and you would be pacing yourself; Infinite MP means the answer to "should I cast again?" is always yes.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Sturdy and Precision to 10/10 — and grab Stone Spindle Whorl the second you see it. It is the highest-value single item in the run and it is only Rare.</li><li>In the early and mid run, do not be afraid to spend a slot or two on Shadow or Guardian. A slightly slower build that reaches the boss beats a fast one that dies on floor three.</li><li>Until you have the Stiff Crank, keep Special Attack as your main damage. There is no point pretending the normal attack is carrying you before the crank line exists.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzziewqxXUQ3EvKb/VcSm+RZUt74kTNv0kkK7TMOofGTeZVMamoWXC+M6ni811EsOsgdzXcp9JiJv/4Lw4UwutwdPNfvx4UORSm1qZmF4pkdOiwVsstWICkvbHicynVraJj85FAge0c6hXrg+DvAlqFGdRSyE27F7g2/R9VEdX6K8HfqhrJNdWSaVU5FkncRJCxqC78+ICbH7oAWXzRbw0kaWwAXop8aU8L2r1/r7sDZndm6ChZ10D8bQa9yeUdIJXFpYXI=</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you find one, because until you do it is a permanently dead slot.</li><li>Marksman’s Crank is the card most people misread: +20 Crossbow Reload Speed, <em>plus</em> +40% Normal and Special Attack damage for 10 seconds every time a reload completes. The two halves feed each other — faster reloads mean the buff comes back sooner and stays up longer. Because you fire Power Arrow on loop, that 40% is effectively permanent, and the only way to lose it is to stop shooting long enough for a reload to lapse. So do not stop shooting.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z11" class="bg-zin"><label for="bg-z11" class="bg-zl"><img src="/images/games/sephiria/builds/crossbow-rapid-fire-device/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z11"><img src="/images/games/sephiria/builds/crossbow-rapid-fire-device/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/crossbow-rapid-fire-device/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/crossbow-rapid-fire-device-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderCrossbowRapidFireDeviceBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
