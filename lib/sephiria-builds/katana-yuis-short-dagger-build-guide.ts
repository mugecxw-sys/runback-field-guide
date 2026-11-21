// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Grimoire Damage</span><span class="bg-tag">Academy</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Yui's Short Dagger is a spellbook with a blade glued to the handle. Nothing in this build wants you to swing it: you <strong>Sheath</strong> to bank <strong>Blade Slash</strong>, and every spell you cast from a <strong>Grimoire</strong> spends <strong>10 Blade Slash</strong> to hit for <strong>+20% Grimoire Damage</strong>. The final tier adds <strong>+30% Grimoire Critical Chance</strong> on top, and that second line is what turns seven spellcasts into one crit window.
 <br><br>So the loop runs backwards compared with every other katana on this page. Your attack button is not the damage — sheathing is, because it refills the resource that rides on every cast. Then you empty the spellbooks in cooldown order: seven Grimoires, cast whatever is ready, all of it inside the buff.
 <br><br>The cost is real and I'll say it plainly: <strong>the blade itself contributes almost nothing</strong>, and I gave up normal attacks on purpose to keep the 20% live. If a run refuses to hand you Grimoires, you have no build — this is one of the more draw-dependent weapons on the katana page, not a safe pick. What you get back is <strong>14,000 DPS</strong> in this run, with the costume paying the entire MP bill so the rotation is gated by cooldown instead of by mana.
 <br><br>Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Ghost</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Academy 10/10 · Elemental 6/6</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">14,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Ghost</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/ghost.webp" alt="Ghost costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Ghost</h3><p class="bg-mut"><strong>Grimoire casts cost no MP.</strong> This is not a comfort pick, it is the fuel line. You are casting seven spellbooks on rotation — attach a mana cost to that and the whole thing is gated by a bar you cannot refill mid-fight. With Ghost on, cooldown is the only limit left, which is exactly why the rest of the build is Grimoire Haste.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Ghost costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Rylie’s Pocket Watch</strong> — <strong>+40 / +60 / +80 Grimoire Haste</strong>, <strong>+8% / +14% / +20% Critical Damage</strong> and <strong>+5% / +10% Reduce MP Cost of Grimoire</strong>. Haste is the rotation and Critical Damage multiplies the +30% critical chance the weapon hands you. Then <strong>Mage's Coin</strong>: <strong>+15 / +20 / +30 Grimoire Haste</strong>, a Common item that is nothing but rotation speed, which is the stat this build eats.</li><li>Early-Run Goal: <strong>Academy, then Elemental</strong>. Inside Academy you are hunting two lines only — <strong>Grimoire Damage</strong> and <strong>Grimoire Haste</strong>. Cooldown is damage here, so treat haste as a damage stat rather than a convenience.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-b54e6ce7e89629da.webp" alt="Empty Hilt" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Empty Hilt</h3><p class="bg-mut"><strong>+5% / +10% / +15% / +20% / +25% / +30% Grimoire Damage</strong>, <strong>+7% / +9% / +11% / +13% / +15% / +20% Final MP</strong> and <strong>+2 / +4 / +6 MP Regeneration</strong>. The biggest single Grimoire Damage line you can slot, which is the entire reason it is here. Be honest about the rest of the card, though: with Ghost paying your casting bill, the Final MP and regeneration lines do nothing for you. You are buying one line and two blanks.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-5aa54b2e4afe217e.webp" alt="Academy Brigandine" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Academy Brigandine</h3><p class="bg-mut"><strong>+2 / +3 / +4 / +6 / +8 / +10 Defense</strong> and <strong>+14 / +18 / +20 / +24 / +29 / +35 Grimoire Haste</strong>. Up to +35 haste on a Rare is the cheapest rotation speed in the build, and the Defense half is not filler — this build plants its feet to cast, so it eats more stray hits than a normal katana run does.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3cbc7e3646813f86.webp" alt="Battle Mage’s Gloves" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Battle Mage’s Gloves</h3><p class="bg-mut"><strong>+10% / +12% / +15% / +20% Grimoire Damage</strong> and <strong>+3% / +4% / +5% / +6% Move Speed</strong>. Grimoire Damage on a Rare with no condition attached, plus a little movement so you are not a statue between casts. Nothing clever, never a bad pickup, and it keeps being good at every rarity.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-897eece0f990b50d.webp" alt="Meditation Book" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Meditation Book</h3><p class="bg-mut"><strong>Instantly cast all Grimoire without action</strong>, plus <strong>+6% / +8% / +11% / +14% Grimoire Damage</strong>. This is the opener: seven books fire in one instant instead of seven casts, which compresses the whole rotation into a single buff moment instead of spreading it out. Take it for the effect even at level 1 — the damage line is a bonus.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-3319de7306ac7934.webp" alt="Orb of Yearning" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Orb of Yearning</h3><p class="bg-mut"><strong>Reserve 15 MP</strong>, increasing Grimoire damage dealt by <strong>10% / 12% / 15% / 18%</strong>. A straight trade: 15 MP locked away, up to +18% Grimoire damage back. With Ghost covering your casts, MP is the cheapest currency you own, which makes this one of the few items in the game whose downside is genuinely free here.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-625cc98e97a518d0.webp" alt="Rylie’s Pocket Watch" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Rylie’s Pocket Watch</h3><p class="bg-mut"><strong>+40 / +60 / +80 Grimoire Haste</strong>, <strong>+8% / +14% / +20% Critical Damage</strong> and <strong>+5% / +10% Reduce MP Cost of Grimoire</strong>. The wish-pool item and the best card in the build: haste for the rotation, then Critical Damage to multiply the dagger's flat +30% critical chance. The MP reduction is the one dead line, for the same Ghost reason as everything else.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with no Blade Slash economy behind it. At this tier you are just a worse sword build, so the upgrade is a priority rather than a nice-to-have.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>The Awaiting Azureblade</h3><p class="bg-mut">The tier where the build actually exists — the blade stops being a weapon and starts being a battery for your spellbook.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Continuously gain <strong>'Blade Slash'</strong> when Sheath. Consumes <strong>10 Blade Slash</strong> when casting magic to increase <strong>Grimoire Damage by 20%</strong>.</p><p class="bg-mut" style="margin-top:10px">Two things to notice. The stacks come from sheathing, not from hitting anything — so your Sheath button is your builder. And the buff is per cast, which means a bar that is not refilled is a cast that lost 20%.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Yui's Short Dagger</h3><p class="bg-mut">The final tier, and the one that turns the buff into a burst window.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Continuously gain 'Blade Slash' when Sheath. Consumes 10 Blade Slash when casting magic to increase Grimoire Damage by 20%. <strong>Grimoire Critical Chance increases by 30%.</strong></p><p class="bg-mut" style="margin-top:10px">The crit line is the bigger half of this weapon. +30% critical chance is good on a single spell and enormous on a rotation that lands seven of them inside the same window — and it is the reason Critical Damage on Rylie’s Pocket Watch is worth chasing over almost anything else in the wish pool.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Academy, then Elemental</strong>. Inside Academy take <strong>Grimoire Damage</strong> and <strong>Grimoire Haste</strong> and treat everything else as filler until those two are up — cooldown is a damage stat when your damage is seven spells on rotation.</li><li>Take the <strong>high-rarity Grimoires</strong>. A high-rarity book sitting at level 1 will out-damage the cheap Common one you have been feeding all run, and you only have seven slots.</li><li><strong>Sheath instead of attacking.</strong> This is the part people get wrong: you are deliberately giving up normal attacks, because the +20% is only live while the bar is paid and the blade barely contributes anyway. Every second spent swinging is a cast you did not make.</li><li><strong>Fire on cooldown.</strong> Seven books, cast whatever is ready, no saving for a burst window — with Ghost paying the MP bill there is no reason to hold anything back. Meditation Book makes that opener instant when you need it.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzih2uwXUA2ivKZPVmxLD+3hkzNEGzZf0R6vq7yapwTinU3naLqKQUTU7Tx1SjA/jPSH22DrpzLlEwzgOQAXWyrjdG8dQpTsHK8xh2EpoVo8Up7LYxCEGsy7WBrwmv1NZRYv2F48uQ3pW7j1mJ7T7aXpT7FGH4i8AD3rAvcIFcbjSBGQYxuOy9BvBxRks6uVjqoc/u6WO4TPFiUjOxQknX6UTqFZ3NlSw==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>At Difficulty 60 you start with Heavy Heart and you cannot throw it away. You can, however, sell it to the merchant — do that the first time you meet one, because until you do it is a permanently dead slot.</li><li>For higher DPS, <strong>two Grimoire damage attributes is enough</strong>. Commit to the stronger one and pour your combo stacks into it; spreading the books across more attributes thins out the multipliers faster than it gains anything.</li><li>If the damage ever feels flat, check the bar before you check the gear. A half-filled Blade Slash bar is a 20% damage loss on every cast in that window, and it is the most common thing to get wrong in this build.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z26" class="bg-zin"><label for="bg-z26" class="bg-zl"><img src="/images/games/sephiria/builds/katana-yuis-short-dagger/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z26"><img src="/images/games/sephiria/builds/katana-yuis-short-dagger/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-yuis-short-dagger/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-yuis-short-dagger-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaYuisShortDaggerBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
