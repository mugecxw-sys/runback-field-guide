// Author-designed cards and section structure, with RUNBACK theme colors and English copy.
// FROZEN: Sephiria Build Guide Template V1 (2026-10-31).
// See templates/sephiria-build-guide/v1/README.md before changing this layout.
const buildGuideHtml = `<div class="bg-wrap" style="padding-top:28px">
<div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;align-items:center">
<div style="flex:1.4 1 420px">
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="bg-tag bg-g">Katana</span><span class="bg-tag">Difficulty 60</span><span class="bg-tag">Evasion</span><span class="bg-tag">Special Attack</span></div>
<h1 style="font-size:56px;line-height:1.15;font-weight:800">{{BUILD_NAME}}</h1>
<p style="margin-top:16px;color:var(--body-soft);max-width:560px">Beast Marks Sword 'Hou' is the Evasion katana. It keeps Heavy Slash instead of swapping it for something faster, and in exchange it lets that slash <strong>hit distant enemies</strong> and scales its damage off <strong>Evasion</strong>. So the build's job is not to stack attack speed — it is to be hard to hit, and then let the sword read that number.
 <br><br>It plays nothing like Famed Sword 'Muramasa'. Muramasa is a wall of fast swings; Hou is one heavy, long-reaching cut that you throw from outside the enemy's range, with a defensive layer that is doing double duty as your damage stat. I like this one more, and the reason is that the survivability and the damage are the same purchase rather than two competing ones.
 <br><br><strong>20,000 DPS</strong> in this run. Draws vary — read this as a map, not as this build's floor or ceiling.</p>
<div class="bg-nv" style="margin-top:24px"><a href="#prep">Before the Run</a><a href="#core">Core Items</a><a href="#weapon">Weapon Route</a><a href="#play">How to Play</a><a href="#notes">Tips</a><a href="#final">Run Results</a></div>
</div>
<div class="bg-card" style="flex:1 1 300px"><h3>Build Snapshot</h3>
<div class="bg-row"><span class="bg-mut">Costume</span><span style="text-align:right">Brown Rabbit</span></div>
<div class="bg-row"><span class="bg-mut">Core Setup</span><span style="text-align:right">Precision 10/10 · Shadow 10/10</span></div>
<div class="bg-row" style="border-bottom:0"><span class="bg-mut">DPS in This Run</span><span style="font-size:26px;font-weight:700;color:var(--gold-text)">20,000</span></div>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="prep">
<div class="bg-hd"><span class="bg-no">01</span><h2>Before the Run</h2></div>
<div class="bg-grid">
<div class="bg-card"><div class="bg-tb">
<input type="radio" name="cos" id="bg-c1" checked>
<input type="radio" name="cos" id="bg-c2">
<div class="bg-tl"><label for="bg-c1">Brown Rabbit</label><label for="bg-c2">Skeleton</label></div>
<div class="bg-pn bg-p1"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/brown-rabbit.webp" alt="Brown Rabbit costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Brown Rabbit</h3><p class="bg-mut"><strong>12 Evasion</strong>, and on Hou that is not only a defensive number — the sword pays <strong>1% damage per point of Evasion</strong>, so the costume that keeps you alive is also worth 12% damage. The run in the screenshot used it. No downside to note, it simply does less for a build that isn't reading Evasion.</p></div>
<div class="bg-pn bg-p2"><div style="height:100px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/costumes/skeleton.webp" alt="Skeleton costume" width="80" height="80" style="image-rendering:pixelated" loading="lazy"></div><h3>Skeleton</h3><p class="bg-mut"><strong>+20% damage</strong>, flat, with no condition and no element to line up. It is the more straightforward pick of the two and it does not ask you to build around anything — but it gives you no survivability, and this build's whole identity is that the defensive stat is also the damage stat.</p></div>
</div></div>
<div class="bg-card">
<h3>Talent Setup</h3>
<div class="bg-row"><span>Wrath</span><span style="font-weight:700;color:var(--gold-text)">10</span></div>
<div class="bg-row"><span>Swiftness</span><span style="font-weight:700;color:var(--gold-text)">5</span></div>
<div class="bg-row"><span>Wisdom</span><span style="font-weight:700;color:var(--gold-text)">15</span></div>
<div class="bg-row" style="border-bottom:0"><span>Ingenuity</span><span style="font-weight:700;color:var(--gold-text)">20</span></div>
</div>
<div class="bg-card">
<h3>Run Preparation</h3>
<ul class="bg-l"><li>Starting Items: the starting katana and the Brown Rabbit costume.</li><li>Difficulty: 60</li><li>Wish Pool Priority: <strong>Wind Sheet Music</strong>. Hou's special attack is slow by design and it rewards hitting from distance, so reach is the stat that makes the playstyle work: <strong>+10% / +20% / +30% / +40% / +50% Melee Attack range</strong>. Nothing to maintain and no drawback.</li><li>Early-Run Goal: <strong>Precision over Shadow</strong>, then fill in Sturdy. Shadow is here for the survivability pieces rather than as a damage investment — the Evasion it gives does convert at a full 1% per point, but Precision's crit package multiplies everything you already have, so it is the better return while both are available. Take Shadow when the alternative is nothing.</li></ul>
</div>
</div>
</div>

<div class="bg-wrap bg-sec" id="core">
<div class="bg-hd"><span class="bg-no">02</span><h2>Core Items</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))">
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp" alt="Blue Wrist Guard" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Blue Wrist Guard</h3><p class="bg-mut">Special Attack Damage +7% / +14% / +21% / +28% / +35% / +42%. Hou's damage is a special attack, so this multiplies the exact button you press — the cleanest damage slot on a build where the other numbers are all conditional.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-fdbfbab9de4df340.webp" alt="Broken Sapphire" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Broken Sapphire</h3><p class="bg-mut">Gain a shroud that guarantees an Evasion against every attack every 16 / 14 / 12 seconds, plus <strong>+2 / +4 / +6 Evasion</strong> and <strong>+2 / +4 / +6 Defense</strong>. Three things at once on the stat this build is built around — the guaranteed Evasion is the part that keeps you alive through a boss pattern, and the flat Evasion is also <strong>+6% damage</strong> at max tier, because Hou pays 1% per point. Nothing to manage, it just runs on its own timer.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-4db48347e291b141.webp" alt="Helena's Model Stairway" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Helena's Model Stairway</h3><p class="bg-mut">When you enter another place, gain <strong>+10% / +14% / +16% / +20% / +25% / +30% Move Speed</strong>, and the same ladder of <strong>Attack Speed</strong>, for 90 seconds. Take it for the movement: Hou's special attack has a <strong>24% lower base attack speed</strong> than normal, so the swing is slow and your position matters. The catch is that it only triggers on entering another place and expires after 90 seconds — a burst window at the start of each floor, not a permanent buff.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-bdef80c494e4c63b.webp" alt="Wind Sheet Music" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Wind Sheet Music</h3><p class="bg-mut">Melee Attack range +10% / +20% / +30% / +40% / +50%. The wish-pool target and the item that defines how this build fights: Hou explicitly rewards hitting distant enemies, so more reach means more of your swings land from outside the retaliation range. No condition, no downside.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-ed8274fd12a70032.webp" alt="Warm Stone" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Warm Stone</h3><p class="bg-mut">Critical Damage +10% / +20% / +30% / +40%, but it loses its effect when it isn't kept warm. Worth saying plainly: the biggest crit number here can quietly switch off, so it is not a fire-and-forget slot. With Precision at 10 you crit often enough for crit damage to carry its weight.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-458c4428770fd49c.webp" alt="Sword Earrings" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Sword Earrings</h3><p class="bg-mut">Critical Damage +10% / +16% / +24% / +33%, at the cost of <strong>−16 to −7 Max MP</strong>. The cost cuts against the Wisdom you invested: this build does want MP for its special attacks, so the Max MP hit is not completely free the way it is on a pure attack-speed katana. Take it, but know what you are trading.</p></div>
<div class="bg-card" style="padding:16px"><div style="height:96px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--surface-inset);border-radius:10px"><img src="/images/games/sephiria/wiki/items/item-34c47e1e7c10acff.webp" alt="Pointed Club" width="72" height="72" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated" loading="lazy"></div><h3 style="font-size:16px;margin-bottom:4px">Pointed Club</h3><p class="bg-mut">Critical Damage +20% / +40% / +60%, and attacks have a <strong>10% chance to miss, which reduces damage by 20%</strong>. The largest crit number on the list, paid for in accuracy. On a slower, heavier special attack each miss is felt more than it would be on a fast weapon — if the run is going badly, this is a reasonable slot to trade for something steadier.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="weapon">
<div class="bg-hd"><span class="bg-no">03</span><h2>Weapon Upgrade Route</h2></div>
<div class="bg-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
<div class="bg-card"><div class="bg-bd">1</div><h3>Blade</h3><p class="bg-mut">The starting katana: physical, ordinary, and with none of the Evasion-scaling machinery that defines the build.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">2</div><h3>Long Blade 'Onohara'</h3><p class="bg-mut">The tier where attack speed starts mattering for the special attack.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Special Attack: Heavy Slash is affected by <strong>Attack Speed</strong>. Attack Speed increases by <strong>15%</strong>.</p><p class="bg-mut" style="margin-top:10px">A stepping stone rather than the destination — the Evasion conversion that makes this build interesting arrives at the next tier.</p></div>
<div class="bg-card" style="grid-column:1/-1"><div class="bg-bd">3</div><h3>Beast Marks Sword 'Hou'</h3><p class="bg-mut">The final tier, and the reason this is an Evasion build rather than an attack-speed one.</p><p class="bg-mut" style="margin-top:10px"><strong>Effect:</strong> Special Attack: Heavy Slash is affected by Attack Speed. Attack Speed increases by 15%. Special Attack: Heavy Slash's <strong>base Attack Speed is reduced by 24%</strong>, but it <strong>can hit distant enemies</strong>. Damage increases by <strong>1% for every 1 Evasion</strong>.</p><p class="bg-mut" style="margin-top:10px">Two of those lines are costs and two are payoffs. The 24% slower base swing is a real drawback — it is why this build feels heavy and why positioning matters so much — and it is the price for a special attack that reaches distant enemies. Then Evasion turns into damage, which is what makes stacking a defensive stat worth doing at all: the run is survivable <em>because</em> of the thing that raises your DPS.</p></div>
</div>
</div>

<div class="bg-wrap bg-sec" id="play">
<div class="bg-hd"><span class="bg-no">04</span><h2>How to Play</h2></div>
<div class="bg-card">
<ul class="bg-l" style="font-size:15px;margin-top:0"><li>Pick order: <strong>Precision first, Shadow second, Sturdy to fill</strong>. The Evasion the sword converts is a real 1% damage per point, so Shadow is not wasted — it is simply a smaller step than Precision, because Precision's crit package multiplies everything else on the list while a point of Evasion just adds one. Levelling Shadow also happens to hand you the survivability pieces, which is the other half of why it comes second rather than last.</li><li>I put 15 points into Wisdom so the special attacks always have MP behind them. That is a personal preference rather than a fixed number — if your draws give you MP from somewhere else, move those points.</li><li>Fight from range. Hou hits distant enemies, and Helena's Model Stairway plus Wind Sheet Music exist to stretch that further. Standing in melee range with a 24% slower special attack is throwing away the one thing the weapon does better than any other katana.</li><li>Luck runs hot and cold and the draw is what it is — treat this as a map, not as a benchmark for the build's floor or ceiling.</li></ul>
<p class="bg-mut" style="margin-top:16px;margin-bottom:6px">My own preset code — import it in Runback:</p>
<code style="display:block;padding:12px 14px;background:var(--surface-inset);border:1px solid color-mix(in srgb, var(--gold-border) 25%, transparent);border-radius:10px;font-size:12px;line-height:1.6;word-break:break-all;color:var(--body-soft);user-select:all">AAF_PRESET_OBFZ|v1Xuh8aW9uQW5pZzzih2uwXUA2ivKZPdcEux+3rzEihD3ATSWfKQE3eSWcsbxjmbCX1Kr8rR+/LNawVw4S9ImXkx4RnJwMNM8j6yumB0u7P0HndOdq03L7lW57lTN15E7sxHJid7g9bcsRSjp3LvhsTzFg33RBqme6JkJUoleLME4VoZP9NTMG58LC7H5CXZPhqUpMdaGs9sAiUPmNaGEOLohbChih4jVOiYyDxrjuov6xUJuzx4x9aG9u</code>
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
<div style="position:relative"><input type="checkbox" id="bg-z19" class="bg-zin"><label for="bg-z19" class="bg-zl"><img src="/images/games/sephiria/builds/katana-beast-marks-sword-hou/run-results.webp" alt="Final build from a Difficulty 60 run" class="bg-zi" loading="lazy"></label><p class="bg-mut" style="margin-top:8px;font-size:12px">Click the screenshot to enlarge.</p><div class="bg-zov"><label for="bg-z19"><img src="/images/games/sephiria/builds/katana-beast-marks-sword-hou/run-results.webp" alt="Final build screenshot, enlarged"></label></div></div>
<div><video controls preload="metadata" playsinline poster="/images/games/sephiria/builds/katana-beast-marks-sword-hou/run-results.webp" style="display:block;aspect-ratio:16/9;width:100%;height:auto;object-fit:cover;border-radius:12px;border:1px solid color-mix(in srgb, var(--gold-border) 30%, transparent);background:var(--surface-inset)"><source src="/videos/sephiria/katana-beast-marks-sword-hou-run.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>
</div>
</div>`;

export function renderKatanaBeastMarksSwordHouBuildGuide(buildName: string) {
  const escapedName = buildName.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
  return buildGuideHtml.replace('{{BUILD_NAME}}', () => escapedName);
}
