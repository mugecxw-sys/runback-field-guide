// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Magic Blade</span><span class="bg-tag">Lake</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Adamah’s Oath does not care about your sword, and only partly cares about your spellbooks. Every time you use magic it summons a <strong>Magic Blade</strong> that flies at the enemy, and that blade hits for <strong>20 + 70% of your empty MP</strong>. Read the formula again, because it is backwards from every other build on this page: <strong>it scales off the mana you are missing.</strong> A full bar throws a weak blade, an empty bar throws a strong one.
 <br><br>So the whole kit points one way — make the bar big and keep it empty. Max MP is the ceiling of that formula, which is why <strong>Lake comes before Academy</strong> and why Wisdom sits at 20 here. Every cast both fires a blade and drains the pool that makes the next blade hit harder. <strong>Orb of Yearning</strong> is quietly perfect for it: it permanently reserves 15 MP, and reserved mana is mana you never have, so the formula counts it as damage on top of its +18% Grimoire Damage.
 <br><br>The one place the build argues with itself is regeneration. MP regen keeps you casting, but every point of it is empty MP you no longer own. In this run the bar drained fast enough that without regen pieces there were stretches with nothing to cast — which is why the Straw Doll and the regen half of Jeweled Armor made the list. Treat those as sustain you are buying at a small damage cost, not as free stats.
 <br><br><strong>22,000 DPS</strong> this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Red Fox</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Lake 9/9 · Academy 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">22,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Red Fox</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/red-fox.webp" alt="Red Fox costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Red Fox</h3><p class="bg-mut"><strong>+6 extra inventory slots.</strong> Not a damage costume — a carrying costume, and that is deliberate. You want as many Grimoires in the bag as you can hold, because the more of them you are running, the easier the combo sets and the tablets come together. Six extra slots is six more spellbooks you are not leaving on the floor.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Red Fox costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Fire Bolt</strong> — it is there so you walk out of the first room with a Grimoire in hand, and its cooldown is short, so treat it as a placeholder: any bolt-type Grimoire you find can replace it. Then <strong>Mage's Coin</strong> (<strong>+15 / +20 / +30 Grimoire Haste</strong>) and <strong>Straw Doll</strong> (<strong>+3 / +6 / +9 MP Regeneration</strong>, <strong>+2% / +3% / +5% Critical Damage</strong>).</li><li>Early-Run Goal: <strong>Lake, then Academy</strong>. In Lake you are hunting <strong>Max MP</strong> before anything else — it is the ceiling on your Magic Blade damage, not a comfort stat. Then Academy for Grimoire Damage and Grimoire Haste so the casts keep coming and the bar keeps draining.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3319de7306ac7934.webp" alt="Orb of Yearning" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Orb of Yearning</h3><p class="bg-mut"><strong>Reserve 15 MP</strong>, increasing Grimoire damage dealt by <strong>10% / 12% / 15% / 18%</strong>. The single best card in the build, and the only one that pays twice: +18% Grimoire damage, and 15 MP of permanent empty bar that the Magic Blade formula reads as damage. On any other build reserving mana is a cost — here it is a buff.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5cf38aa694ee307c.webp" alt="Stone Spindle Whorl" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Stone Spindle Whorl</h3><p class="bg-mut"><strong>+6% / +12% / +18% / +24% / +30% Damage of abilities consuming MP</strong>. The Magic Blade is exactly what that line describes — an ability paid for out of your mana bar — so up to +30% lands straight on your entire damage output, from a Rare. There is no condition to play around.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5a156b58c18fb42a.webp" alt="Jolow's Watering Can" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Jolow's Watering Can</h3><p class="bg-mut"><strong>If Max MP is at least 500 / 400 / 320 / 250 / 200, cast Grimoire 1 additional times</strong>, plus <strong>+3% / +6% / +9% / +12% / +15% Grimoire Damage</strong>. One extra Grimoire cast is one extra Magic Blade and one more bite out of the bar, so this card feeds both halves of the formula at once. It is also the reason to chase Max MP breakpoints.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-897eece0f990b50d.webp" alt="Meditation Book" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Meditation Book</h3><p class="bg-mut"><strong>Instantly cast all Grimoire without action</strong>, plus <strong>+6% / +8% / +11% / +14% Grimoire Damage</strong>. Casting every spellbook in one action drops the whole volley of blades in an instant instead of dribbling them out over seven animations — the closest thing this build has to a burst button. Worth a slot for the effect even at level 1.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-91ea520d66da03d0.webp" alt="Jeweled Armor" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Jeweled Armor</h3><p class="bg-mut"><strong>+10% / +20% / +30% Grimoire Critical Chance</strong>, <strong>+4 / +6 / +8 MP Regeneration</strong> and <strong>-3 / -5 / -7 Physical Damage</strong>. You are here for the crit chance; the -7 Physical is completely free because you never swing the sword. The regen is the interesting line — it costs you a sliver of empty MP, so it is sustain rather than damage.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-625cc98e97a518d0.webp" alt="Rylie’s Pocket Watch" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Rylie’s Pocket Watch</h3><p class="bg-mut"><strong>+40 / +60 / +80 Grimoire Haste</strong>, <strong>+8% / +14% / +20% Critical Damage</strong> and <strong>+5% / +10% Reduce MP Cost of Grimoire</strong>. Haste is more casts, and more casts is more blades. The cheaper casts are the one mixed line — a slower drain means slightly less empty MP — but the extra rotations more than cover it, and the Critical Damage is pure profit.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5aa54b2e4afe217e.webp" alt="Academy Brigandine" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Academy Brigandine</h3><p class="bg-mut"><strong>+2 / +3 / +4 / +6 / +8 / +10 Defense</strong> and <strong>+14 / +18 / +20 / +24 / +29 / +35 Grimoire Haste</strong>. Up to +35 haste on a Rare, and the Defense earns its place in a build that plants its feet to cast instead of dodging.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3cbc7e3646813f86.webp" alt="Battle Mage’s Gloves" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Battle Mage’s Gloves</h3><p class="bg-mut"><strong>+10% / +12% / +15% / +20% Grimoire Damage</strong> and <strong>+3% / +4% / +5% / +6% Move Speed</strong>. Grimoire Damage on a Rare with nothing attached to it, plus enough movement to survive while you stand there casting. Boring, always good, and in every Academy build I write.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with no Blade Slash economy and no Magic Blades. Nothing about this build works yet, so the upgrade is the run.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>The Awaiting Azureblade</h3><p class="bg-mut">The branch point — this is the tier the Grimoire build lives on, and the one both Yui's Short Dagger and Adamah’s Oath grow out of.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Continuously gain <strong>'Blade Slash'</strong> when Sheath. Consumes <strong>10 Blade Slash</strong> when casting magic to increase <strong>Grimoire Damage by 20%</strong>.</p><p class="bg-mut" style="margin-top:10px">So the sheathe button is your builder and your cast is what spends it — 10 Blade Slash for a flat 20% on the spell. That part is unchanged all the way up this branch.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Adamah’s Oath</h3><p class="bg-mut">The final tier, and the reason the build exists.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Continuously gain 'Blade Slash' when Sheath. Consumes 10 Blade Slash when casting magic to increase Grimoire Damage by 20%. <strong>Summons a 'Magic Blade' that flies towards the enemy and deals damage when magic is used. (Damage: 20 + 70% of empty MP amount)</strong></p><p class="bg-mut" style="margin-top:10px">That parenthetical is the entire build: the blade is flat 20 plus 70% of your missing mana. Nothing else you can buy scales as hard as a big, empty pool does — which is why Lake is the first tree and why you should never feel bad about being out of mana on this weapon.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Lake first, then Academy</strong>. In Lake take <strong>Max MP</strong> greedily — it is the ceiling on the Magic Blade formula, and every Watering Can threshold you clear is another Grimoire cast and another blade.</li><li>Take the <strong>high-rarity Grimoires, and lean towards the ones that cost more MP per cast</strong>. That looks like a downside and isn't: an expensive cast drains the pool, and the pool being low is what makes the blade hit hard. Stone Spindle Whorl is also paying you a percentage for exactly this.</li><li><strong>Sheath instead of attacking.</strong> Sheathing is what builds Blade Slash, and each magic cast spends 10 of it for <strong>+20% Grimoire Damage</strong> — so the bar is worth keeping up, and your normal attack is worth nothing. This is a casting weapon wearing a katana.</li><li><strong>Keep the bar low.</strong> Sitting on a full mana bar is the one mistake that quietly deletes your damage, because a full bar means 0 empty MP and a 20-damage blade. When nothing is off cooldown, cast something cheap rather than wait.</li><li>Watch the <strong>Max MP breakpoints</strong> — 200 / 250 / 320 / 400 / 500 for Jolow's Watering Can. An item that drops you under one of those numbers costs you a whole extra Grimoire cast, which is worse than whatever the item gave you.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzTje26wTUD0EmGbfXe09ICwwk0kLS7XT6nfFdXTl5LR7Twuc97l8vT1h1c6veFQDe86q7xrQMGnBo33eMoy9+PEJgiGme/G2ibeivjKHD0faJlwrzcrKWdffd0PAmSSPVEIKiiiYYwaZ/4IOenZW2A0AcdsiQaxfzlsHU6gRCLdJPUGXQZ44mY2QW80VnrQaJWvcAex8o1Y3WyMSwIjQ7ZAeao8SanyN62+c12Kz1368PIGFIFnGfchi3tTZHNl</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. Sell it to the merchant the first time you meet one — until you do it is a permanently dead slot.</li><li>This run still felt short on MP, which is why <strong>Wisdom is 20</strong> here instead of the 10 that other Academy builds get away with. Max MP is damage on this weapon, so the talent is not just comfort.</li><li>Do not stack regeneration blindly. Regen keeps the rotation alive, but it also shrinks the empty-MP number the blade scales off, so take <strong>only as much as you need to keep casting</strong> and spend the rest of your slots on Max MP and Grimoire damage.</li><li>If the damage looks flat, check the bar before the gear. A full bar is the usual culprit, and it looks like everything is going fine.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z27" class="bg-zin"><label for="bg-z27" class="bg-zl"><img src="/images/games/sephiria/builds/katana-adamahs-oath/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z27"><img src="/images/games/sephiria/builds/katana-adamahs-oath/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-adamahs-oath/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-adamahs-oath-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaAdamahsOathBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
