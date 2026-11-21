// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Staff</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Bolt Barrage</span><span class="bg-tag">Academy</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Ilonica's Spirit Staff takes your spellbooks away and hands you a machine gun instead. The text on it is blunt about it: <strong>you cannot directly cast any Grimoire</strong>, and the Flower Staff spin <strong>becomes Grimoire: Bolt Barrage</strong>. So the bolts you are carrying fire themselves out of the staff while you stand there spinning.
 <br><br>That turns a melee weapon into a ranged one. You still have to be in melee range — the spin is doing the work — but the damage is going out in every direction, from bolt to bolt, on its own. It is genuinely one of the most entertaining weapons in the game, and the reason is that it plays nothing like a staff.
 <br><br>The number is honest: <strong>6,000 DPS</strong>. You cannot aim your way out of that either, because the bolts decide where they go — what you control is what you are carrying and how fast you are spinning. Academy first for Grimoire Damage, Elemental for the bolt elements, and then spend the leftovers on not dying.
 <br><br>Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Academy 10/10 · Shadow 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">6,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage.</strong> Plain damage, which is what the build is short on. There is no utility costume that fixes a 6,000 DPS weapon — you take the flat multiplier and accept the rest of the package.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting staff and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Fire Bolt</strong>, <strong>Lightning Bolt</strong>, <strong>Ice Bolt</strong> — each one simply acquires that bolt skill. In this build they are not buttons you press, they are <strong>ammunition</strong>: the Bolt Barrage fires whatever bolts you are holding, so more types means a wider spread of elements going out.</li><li>Early-Run Goal: <strong>Academy, then Elemental, then Shadow</strong>. In Academy you are hunting <strong>Grimoire Damage</strong> above everything — it is the only stat that scales the bolts — and Elemental gives the bolt types something to work with. Shadow arrives later as insurance, because 6,000 DPS means fights last long enough that you will get hit.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-d38fd4462b33b506.webp" alt="Bicorn Pipe" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Bicorn Pipe</h3><p class="bg-mut"><strong>Fires Bolt Magic in three directions.</strong> (Each spell's damage is reduced by <strong>0.31 / 0.37 / 0.43 / 0.49 / 0.55 / 0.61</strong>) <strong>MP cost increased by 0 / 25 / 50 / 75 / 100 / 125.</strong> The most important card in the build: one bolt becomes three, and on a weapon whose whole identity is a barrage, tripling the projectiles is the entire fantasy.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-69dc1d8ac8e60fd1.webp" alt="Mouse Mage’s Pendant" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mouse Mage’s Pendant</h3><p class="bg-mut"><strong>Bolt Magic homes in on enemies</strong> and <strong>+2 / +5 MP Regeneration</strong>. The fix for the build's biggest weakness: bolts that fly off into empty floor. Homing turns the random spray into something that actually lands, and the regeneration pays for the Bicorn Pipe's inflated costs.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-625cc98e97a518d0.webp" alt="Rylie’s Pocket Watch" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Rylie’s Pocket Watch</h3><p class="bg-mut"><strong>+40 / +60 / +80 Grimoire Haste</strong>, <strong>+8% / +14% / +20% Critical Damage</strong> and <strong>+5% / +10% Reduce MP Cost of Grimoire</strong>. Haste is the whole engine here — faster casting means a denser barrage — and the MP reduction offsets what the Pipe is charging you. The Critical Damage is a bonus on top.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3319de7306ac7934.webp" alt="Orb of Yearning" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Orb of Yearning</h3><p class="bg-mut"><strong>Reserve 15 MP</strong>, increasing Grimoire damage dealt by <strong>10% / 12% / 15% / 18%</strong>. A straight +18% to the only damage type you have, for 15 MP out of a pool you are not spending by hand anyway. Take it whenever it shows up.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-203b79a1f4872264.webp" alt="Pearl Dust" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pearl Dust</h3><p class="bg-mut"><strong>+8% / +10% / +12% Grimoire Damage</strong>. Small, unconditional, and it applies to every bolt in the barrage. On an Advanced item with no downside attached, this is exactly the kind of boring multiplier a low-DPS build needs.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3cbc7e3646813f86.webp" alt="Battle Mage’s Gloves" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Battle Mage’s Gloves</h3><p class="bg-mut"><strong>+10% / +12% / +15% / +20% Grimoire Damage</strong> and <strong>+3% / +4% / +5% / +6% Move Speed</strong>. The biggest Grimoire Damage line on a Rare, with a little movement so you can stay inside the pack without standing still. It appears in every Academy build on this site for a reason.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Staff</h3><p class="bg-mut">The starting staff: an ordinary normal attack, and you can still cast spellbooks by hand at this point. Nothing about the barrage exists yet.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Flourish Staff</h3><p class="bg-mut">The shared tier with the other staff build, and the point where the spin starts.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack changes to <strong>Normal Attack: Flower Staff</strong>.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Ilonica's Spirit Staff</h3><p class="bg-mut">The final tier, and the one that changes what kind of game you are playing.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Normal Attack changes to Normal Attack: Flower Staff. <strong>Cannot directly cast any Grimoire. Normal Attack: Flower Staff changes to Grimoire: Bolt Barrage.</strong></p><p class="bg-mut" style="margin-top:10px">Two lines carry the whole weapon. The first takes your spellbook buttons away. The second hands them back as automatic fire, so your carried bolts erupt out of the spin instead of needing a keybind. Everything you build from here is about making that barrage land.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Academy, Elemental, Shadow</strong>. Inside Academy take <strong>Grimoire Damage</strong> — it is the only thing that scales the bolts — and Grimoire Haste so the barrage stays dense.</li><li><strong>Take every bolt Grimoire you can find.</strong> Fire Bolt, Lightning Bolt, Ice Bolt and the rest are the ammunition; the barrage fires from what you are holding, so a thin library means a thin barrage.</li><li><strong>Get into melee and spin.</strong> You cannot cast manually anymore, so there is no rotation to learn — the Flower Staff is your delivery system, and the bolts come out of it wherever they feel like going.</li><li><strong>Spend the leftovers on survival.</strong> 6,000 DPS means fights are long, and long fights with no escape button need Shadow or Guardian. Do not chase damage you cannot reach; stay alive and let the barrage grind.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZwzi+2+wXVz2kjsc5xfa8kYa1mdUIwt1OEuqGb8nTTkUOQBla1bkKpT5m886b1qgcjJ5E8+HGfSBsoWQ/QOkcJlbKOyYYaUM43nHwgfGVRRjHPlf8slOhEhK1cl8xAZW6Lj/J2DnNthcY/2FVt7vEJJ+W3l71GtZaSXu53k2A5G3QDZT90GuJVtr0sqsCHrcQA2GniO/lQitPDCGkwWuQrZPp4VZ1i++/N4qqKuJvKzYdZWaMjC64wiJZsfOZB5MV2JDYHJl</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. Sell it to the merchant the first time you meet one — until you do it is a permanently dead slot.</li><li>If you want more DPS out of this weapon, add <strong>Precision</strong>. The bolts do crit, and it is the only real ceiling raiser available once Academy is capped.</li><li>You still have to be close. The spin is what fires the barrage, so any distance you open is bolts you are not throwing — stand in the pack rather than at the edge of it.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z29" class="bg-zin"><label for="bg-z29" class="bg-zl"><img src="/images/games/sephiria/builds/staff-ilonica-spirit/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z29"><img src="/images/games/sephiria/builds/staff-ilonica-spirit/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/staff-ilonica-spirit/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/staff-ilonica-spirit-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderStaffIonicaSpiritBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
