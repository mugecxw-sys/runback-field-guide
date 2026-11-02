// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Greatsword</span><span class="bg-tag">Difficulty 60</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Bloodletting Gearblade has a quirk worth building around: it turns your Max HP into basic-attack damage, which is what makes an attack-speed playstyle actually work here. Fair warning up front — this run drew badly and several key items never showed up. Treat the list below as the floor, not the ceiling, and optimize freely if your run rolls better.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Skeleton</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Sturdy 10/10 · Precision 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">13,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<div class="bg-tl"><label for="bg-c1">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut">A flat +20% damage boost that asks for nothing in return. It applies to every hit of a normal-attack chain, and this build throws a lot of them. The tablet it ships with can be sold early for a free head start.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Willpower</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
<div class="bg-row"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row" style="border-bottom:0"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>

</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: Greatsword and the Skeleton costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: Keel Fragment, Mystical Pendulum.</li><li>Early-Run Goal: Lock in the combo order first — Sturdy &gt; Precision &gt; Wind Song &gt; Lake.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-cc41221383f303c0.webp" alt="Mystical Pendulum" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Mystical Pendulum</h3><p class="bg-mut">+22% to +50% Normal Attack Damage, at the cost of 10% Attack Speed. It reads like a bad trade for a speed build — it is not. Each swing hits hard enough that the extra damage per second dwarfs the swing you give up.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-38d8f121f12d505f.webp" alt="Agma Projection Sword No. 190, 191" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Agma Projection Sword No. 190, 191</h3><p class="bg-mut">Flat Physical Damage from +2 up to +14. Flat damage is worth more here than usual, because a fast normal-attack chain applies it several times a second.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage Rate +10% at Lv1 up to +33% at Lv4, with Max MP dropping from −16% to −7%. Note the Max MP penalty is smaller than it sounds once Lv4 is in — and the MP budget still has to cover Reassemble.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60% across its levels, paid for with a 10% chance to miss for 20% reduced damage. On a chain that swings constantly, missing one hit matters far less than the crit damage you gain.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena’s Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena’s Model Stairway</h3><p class="bg-mut">Entering a new area grants +10% to +30% Move Speed and Attack Speed for 90 seconds. It is a floor-to-floor speed boost — clear the next area inside that window and the whole run snowballs.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-9dd5c01e05d7c137.webp" alt="Angry Potato" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Angry Potato</h3><p class="bg-mut">+4% to +15% Ignore Defense, +1 to +4 Luck, and +5% to +10% Move Speed. A quiet stat-stick: ignore defense is what keeps fast, small hits from being eaten by armor.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Greatsword</h3><p class="bg-mut">Where every run starts. Nothing special on its own — what matters is that this line branches into the gearblades rather than the crit upgrades.</p></div>
<div class="bg-card"><div class="bg-bd">2</div><h3>Bone Gearblade</h3><p class="bg-mut">Tier 2 on the Greatsword line — the first fork in the tree.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Special Attack Reassemble — spend 25 MP and the blade extends for 8 seconds, letting you keep the normal-attack chain going without closing the distance yourself.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Bloodletting Gearblade</h3><p class="bg-mut">The other branch off Bone Gearblade — a run only ever gives you one of them. This build takes the bloodletting side.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Reassemble is replaced by Bloodletting. Your Max HP is cut down, and everything above that line is converted into damage for the duration: bonus Basic Attack Damage scaling with your excess Max HP, bonus Final Damage scaling with your excess current HP, plus flat damage reduction. The converted HP comes back when the buff ends.</p><p class="bg-mut" style="margin-top:10px">That is the whole trick of this build, and the reason the Lake combo wants raw HP: every point of Max HP you stack is also an attack-damage stat.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Combo pick order: Sturdy &gt; Precision &gt; Wind Song &gt; Lake.</li><li>From the Lake combo, chase HP above everything else — Heart-Shaped Carrot and Star Ruby are the pickups you are looking for.</li><li>Upgrade Normal Attack Damage and Weapon Damage first, then fill in Critical Chance afterwards.</li><li>Luck varies and the draw is what it is — use this as a guide, not as a benchmark for the build’s floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZyzjDWqwXUD2ivKZ51XaGEbq1e8vaZtcxE1wyoMgvOqTWQYBB3Btpr2rGoHeYjsUhMHcmYad3NG5nplKqPUB7vZmhPng0z3ckDh9zOmwB66Vk4kZM+16RkpAO8VxhbYyRVj+YTdNaNVpc+Zsy0APTKTYbLdOHjK9wbc8GBJ/nnjS4BEMtW8LkZpE8K9OUFQhL1g2IJ7gEDc4XEsYNcWPN/8cbOg1XofyeOmQO3iD5sK2+7PYVhSLLRqWjU8viKBMVVJoYQ==</code>
</div>
</div>

<div class="bg-wrap bg-sec" id="notes">
<div class="bg-hd"><span class="bg-no">05</span><h2>Tips</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Scythe of Berut and Wind Sheet Music overlap — take one or the other, not both.</li></ul>
</div>
</div>

<div class="bg-wrap bg-sec" id="final">
<div class="bg-hd"><span class="bg-no">06</span><h2>Run Results</h2></div>
<p class="bg-mut" style="margin:-12px 0 20px">Results from this run. Item availability varies, so your final setup may differ.</p>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">
<div style="position:relative"><input type="checkbox" id="bg-z3" class="bg-zin"><label for="bg-z3" class="bg-zl"><img src="/images/games/sephiria/builds/greatsword-bloodletting-gearblade/run-results.webp" alt="Final build from a cleared Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z3"><img src="/images/games/sephiria/builds/greatsword-bloodletting-gearblade/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/greatsword-bloodletting-gearblade/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/greatsword-bloodletting-gearblade-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderGreatswordBloodlettingGearbladeBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
