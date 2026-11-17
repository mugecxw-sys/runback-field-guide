import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';

const href = '/games/sephiria/builds/fundamentals';

export const metadata: Metadata = {
  title: 'Sephiria Build Fundamentals: How Damage Adds Up | RUNBACK',
  description:
    'The damage chain behind every Sephiria build, plus the method: how to audit your board, judge an artifact in four checks, and pick the factor that pays next.',
  alternates: { canonical: href },
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-12 border-t border-[var(--gold-border)]/20 pt-7">
      <h2 id={id} className="scroll-mt-24 font-serif text-2xl font-semibold leading-snug text-[var(--heading)]">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--body-soft)]">{children}</p>;
}

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 max-w-3xl overflow-x-auto border border-[var(--gold-border)]/25 bg-[var(--surface)] px-4 py-3 font-mono text-[13px] leading-6 text-[var(--gold-bright)]">
      {children}
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 max-w-3xl border-l-2 border-[var(--gold-label)]/60 bg-[var(--gold-label)]/[0.06] px-4 py-3 text-sm leading-6 text-[var(--body-soft)]">
      {children}
    </div>
  );
}

function Table({ head, rows, widths }: { head: string[]; rows: string[][]; widths?: string[] }) {
  return (
    <div className="mt-5 max-w-4xl overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            {head.map((cell, i) => (
              <th
                key={cell}
                style={widths ? { width: widths[i] } : undefined}
                className="border-b border-[var(--gold-border)]/25 px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('|')}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`border-b border-[var(--neutral-edge)]/10 px-3 py-2 align-top text-[var(--body-soft)] ${i === 0 ? 'font-semibold text-[var(--heading)]' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const toc = [
  ['the-four-rules', 'The Four Rules'],
  ['ten-seconds-per-artifact', 'Ten Seconds per Artifact'],
  ['audit-your-board', 'Audit Your Board'],
  ['the-damage-map', 'The Damage Map'],
  ['artifacts-and-combos', 'Artifacts and Combos'],
  ['where-the-next-point-goes', 'Where the Next Point Goes'],
  ['traps-and-checklist', 'Traps and Checklist'],
] as const;

const rules = [
  {
    title: 'Add inside a factor, multiply across factors',
    body: 'Bonus sources of the same kind share one factor and add. Different kinds of bonus multiply each other. This is the only structural rule in the game.',
  },
  {
    title: 'Feed the smallest factor you can actually fill',
    body: 'Size decides the payout. Availability decides whether the payout exists — the scarcest factor is sometimes a dead end, not an opportunity.',
  },
  {
    title: 'Base before percentages, until the base catches up',
    body: 'Flat damage is added before every multiplier. It wins while your flat total is below roughly 100 plus your percentage total, then percentages win for good.',
  },
  {
    title: 'Gates beat numbers',
    body: 'Weapon-family locks, element conversion and the target’s defensive wall can turn a perfect stat line into zero. Check those three before you score anything.',
  },
];

export default function BuildFundamentalsPage() {
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <article lang="en" className="pb-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gold-label)]">Build fundamentals</p>
        <h1 className="mt-2 max-w-3xl font-serif text-3xl font-semibold leading-tight text-[var(--heading)] sm:text-4xl">
          How Damage Adds Up
        </h1>
        <p className="mt-4 max-w-3xl text-[16px] leading-7 text-[var(--body-soft)]">
          Every build question — which weapon, which attacks, which artifacts, which combo — is the same question wearing
          different clothes: <strong className="text-[var(--heading)]">which factor am I feeding, and is it the smallest one I can
          fill?</strong>
        </p>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--body-soft)]">
          Sephiria never shows the formula, so most players copy a build instead of building one. This page gives you the four rules,
          a way to audit your own board, and the full damage chain underneath both. It contains no preset builds on purpose — the
          point is that you stop needing them.
        </p>

        <nav aria-label="On this page" className="mt-8 max-w-3xl border border-[var(--gold-border)]/20 bg-[var(--surface)] p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">On this page</p>
          <ol className="mt-2 grid gap-1 text-sm text-[var(--secondary)] sm:grid-cols-2">
            {toc.map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-[var(--heading)]">
                  <span className="mr-2 text-[var(--gold-muted)]">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <Section id="the-four-rules" title="The Four Rules">
          <P>
            Everything else on this page is explanation. These four lines are the working part — if you remember nothing else, remember
            these, in this order.
          </P>
          <div className="mt-5 grid max-w-4xl gap-3 sm:grid-cols-2">
            {rules.map((rule, i) => (
              <div key={rule.title} className="border border-[var(--gold-border)]/20 bg-[var(--surface)] p-4">
                <p className="text-[11px] font-bold tracking-[0.18em] text-[var(--gold-label)]">RULE {String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 font-serif text-[17px] font-semibold leading-snug text-[var(--heading)]">{rule.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{rule.body}</p>
              </div>
            ))}
          </div>
          <Note>
            Rule 2 has two halves and players usually only apply the first. The smallest factor is the best place to spend, but only if
            the game actually sells something for it. A factor with one source in the entire pool is a trap, not a plan.
          </Note>
        </Section>

        <Section id="ten-seconds-per-artifact" title="Ten Seconds per Artifact">
          <P>
            This is the whole evaluation. Four checks, in this order, and you can stop as soon as one fails — most bad artifacts die on
            the first or third.
          </P>
          <Table
            head={['#', 'Check', 'Question', 'If it fails']}
            widths={['2rem', '18%', 'auto', '24%']}
            rows={[
              ['1', 'Factor', 'Which factor does this stat land in, and is that the factor of the attack I actually press?', 'Skip it. A +40% dash bonus is worth zero on a special-attack plan.'],
              ['2', 'Size', 'How wide is that factor right now, and is it one of my smallest?', 'It is a small upgrade at best — keep it only if it fills a slot.'],
              ['3', 'Gate', 'Can my weapon family hold it? Does it convert my base into another element?', 'Skip it. It occupies a slot and adds nothing.'],
              ['4', 'Slot', 'Does its combo category line up with a threshold I am already pushing?', 'Still fine — you just pay full price for the stats.'],
            ]}
          />
          <P>
            Checks 1, 2 and 3 need only the item text and your board. Check 4 needs the combo table further down. Nothing here requires
            hidden numbers, which is why the method works on a first run with no reference open.
          </P>
        </Section>

        <Section id="audit-your-board" title="Audit Your Board">
          <P>
            The game will not show you &quot;special attack damage: +74%&quot;, so the instruction &quot;feed your smallest factor&quot; is
            useless until you can see your factors. You can, without any hidden value: every artifact prints its own line, and the board
            holds a couple of dozen items.
          </P>
          <P>
            Take your board and write five lines. Put a mark on the right line for each bonus you are carrying — one mark per source, with
            its number next to it. This takes a few minutes and you only do it once per run.
          </P>
          <Table
            head={['Line to tally', 'What belongs on it', 'An empty line means']}
            widths={['24%', 'auto', '30%']}
            rows={[
              ['Base', 'Flat physical, fire, ice or lightning damage', 'Every percentage you own is multiplying a very small number'],
              ['Amp', 'Element AMP, including physical AMP from combo thresholds', 'Your base is not being amplified at all'],
              ['Attack type', 'Basic, dash or special attack damage — only the one you press', 'That step is a ×1.00 no matter what else you stack'],
              ['Final weapon', 'Final weapon damage, plus every Forge threshold you hold', 'One of the cheapest multipliers in the game is untouched'],
              ['Crit', 'Crit chance and crit damage, separately', 'Crit chance alone is close to worthless without the damage half'],
            ]}
          />
          <P>
            Then read the five lines as a bar chart. The shortest line is your next purchase. Two empty lines is not a gear problem, it is
            the build problem — no amount of rarity fixes a factor that nothing is feeding.
          </P>
          <Note>
            Tally sources, not percentages. Ten artifacts at +4% and one artifact at +40% are the same line length in damage terms, but they
            cost very different numbers of slots — which is the next thing to fix.
          </Note>
        </Section>

        <Section id="the-damage-map" title="The Damage Map">
          <P>
            Here is what the game actually multiplies, grouped into eight steps in execution order. Everything above the line happens on
            your side; everything below it happens to the target.
          </P>
          <Table
            head={['#', 'Step', 'How it combines']}
            widths={['2.5rem', '22%', 'auto']}
            rows={[
              ['1', 'Base damage', 'starts as your flat element damage — physical, fire, ice or lightning'],
              ['2', 'Weapon bonus', 'D × (1 + WeaponDamageBonus / 100)'],
              ['3', 'Attack-type bonus', 'D × (1 + basic, dash or special attack damage / 100) — only the matching one applies'],
              ['4', 'Final weapon', 'D × (1 + FinalWeaponDamage / 100)'],
              ['5', 'Attack coefficient', 'D × the attack’s own multiplier, e.g. 4.0 for a heavy special'],
              ['6', 'Crit', 'chance = Critical / 100 + the attack’s own crit; on crit D × (1 + crit damage / 100)'],
              ['7', 'Damage taken and resistance', 'D × (1 − reduction) × (1 + increase) × (1 − resist / 100), resist capped at 99'],
              ['8', 'Defense and true damage', 'D − 0.445 × D × ln(1 + defense / 40), scaled by penetration; then + true damage − toughness, floored at 1'],
            ]}
          />
          <P>
            Two units are worth memorising. Crit damage starts at <strong className="text-[var(--heading)]">50</strong> before any crit
            damage stat, so a default crit is ×1.5. The <code className="text-[var(--gold-text)]">Critical</code> stat is stored at 100×
            its displayed percent — 4,500 is 45% chance — while everything else here is a plain percentage.
          </P>
          <P>
            Steps 2, 3, 4, 5, 6 and 7 are separate factors. That is rule 1 restated as a table, and it is why a build made of six +20%
            bonuses is not the same as a build made of two +60% ones.
          </P>
          <Note>
            Execution-flagged attacks double the crit bonus rather than the crit chance, so the same crit gear is worth roughly twice as
            much on those attacks.
          </Note>
        </Section>

        <Section id="artifacts-and-combos" title="Artifacts and Combos">
          <P>
            An artifact is a list of stat lines, one set per level. On the board, the game sums every line with the same stat key across all
            sources, applies that stat&apos;s own amplifier, and feeds the total into its single factor.
          </P>
          <Table
            head={['Question', 'Answer']}
            widths={['34%', 'auto']}
            rows={[
              ['Do two artifacts with the same stat stack?', 'Yes, and additively. Two crit damage artifacts are one larger crit damage number, not two multipliers.'],
              ['Do different stats stack?', 'Multiplicatively. That is the factor map above, and why "just stack more damage" is wrong in general and right across factors.'],
              ['Does a second copy of the same artifact stack?', 'It contributes its stat lines again, the same keys, so they sum — and it counts as a second item toward its combo. Effects flagged unique are the ones that apply once.'],
            ]}
          />
          <P>Under the base there is one more layer:</P>
          <Formula>base = (flat element damage) × (100 + element AMP) / 100</Formula>
          <P>
            Amplifier sources add to each other, so +15% from one combo and +10% from another is one +25% multiplier. The multiplier applies
            per element, which is why an AMP bonus for &quot;all four elements&quot; is also a physical bonus.
          </P>
          <h3 className="mt-7 font-serif text-lg font-semibold text-[var(--heading)]">Two gates that override all of it</h3>
          <P>
            <strong className="text-[var(--heading)]">Weapon family.</strong> Plenty of artifacts exist for one family only:
            weapon-skill charms, shield-side items, katana growth items and so on. A restricted artifact contributes nothing and still eats
            a slot, so family is the first filter on any pickup.
          </P>
          <P>
            <strong className="text-[var(--heading)]">Conversion.</strong> A 100% physical-to-fire effect moves your base into another
            element: the physical amplifier stops applying to the converted part, and the target&apos;s fire resistance starts. Conversion is
            a change of address for your base damage, not free damage.
          </P>
          <h3 className="mt-7 font-serif text-lg font-semibold text-[var(--heading)]">Combos are cumulative, per item, duplicates included</h3>
          <P>
            A combo counts the placed items in a category — one per item, not per level. Thresholds are cumulative, so at 10 items you also
            hold the 2, 4, 6 and 8 rewards, all active at once. Duplicates count, which makes a second copy a second point toward the
            threshold.
          </P>
          <Table
            head={['Combo', 'Thresholds', 'What it is for']}
            widths={['20%', 'auto', '26%']}
            rows={[
              ['Sturdy', '2/4/6/8: +2/+4/+6/+8 physical · 10: +15% physical AMP', 'The physical base'],
              ['Precision', '2/4/6/8: +4/+6/+8/+10% crit chance · 10: +30 crit damage', 'Crit builds'],
              ['Forge', '2/4/6: +8/+10/+12% final weapon damage', 'Any weapon build'],
              ['Elemental', '2/4: +5/+6 highest element damage · 6: +10% AMP to all four elements', 'Element and physical builds'],
              ['Wind Song', '2/4/6/8: +8/+12/+16/+20% attack speed · 10: +15% final weapon, +1 dash', 'Basic and dash builds'],
              ['Solar Blade', '4/6/8/10: flame sword damage and max charges', 'Flame Sword'],
              ['Academy', '2/4/6/8: cooldown and magic cost · 10: +15% magic damage', 'Magic'],
              ['Guardian', '2/4/6/8/10: +6 to +12 defense, +5% ignore defense', 'Defense, not damage'],
            ]}
          />
          <P>
            The board is six columns wide with 24 base slots, and permanent bonuses push the usable count into the low thirties. That is why
            real builds commit to two or three branches at 6–10 items instead of eight branches at 2.
          </P>
          <Note>
            The overlap is the trick. A good board counts each item twice — once for its stats, once toward a threshold — so the branch you
            commit to should be the branch your best damage artifacts already belong to.
          </Note>
        </Section>

        <Section id="where-the-next-point-goes" title="Where the Next Point Goes">
          <P>
            You do not need to simulate a build to rank two pickups. But &quot;percent bonuses&quot;, &quot;crit chance&quot; and
            &quot;flat damage&quot; do not obey the same rule, and using one formula for all three is how players talk themselves into bad
            swaps. Here are the three shapes.
          </P>

          <h3 className="mt-6 font-serif text-lg font-semibold text-[var(--heading)]">A percent bonus in an existing factor</h3>
          <Formula>gain = 10 / (100 + current bonus)</Formula>
          <Table
            head={['Factor is already at', 'The next +10% is worth']}
            widths={['50%', 'auto']}
            rows={[
              ['0%', '+10.0%'],
              ['+50%', '+6.7%'],
              ['+100%', '+5.0%'],
              ['+200%', '+3.3%'],
              ['+300%', '+2.5%'],
            ]}
          />

          <h3 className="mt-6 font-serif text-lg font-semibold text-[var(--heading)]">Crit chance</h3>
          <P>
            Crit chance is worth the chance you add, multiplied by the extra damage a crit carries. Ten points of chance is therefore about
            <em> (crit multiplier − 1) × 10% </em>of your un-crit damage — and it does not decay with your percentage total, only with the
            crit damage you already own.
          </P>
          <Table
            head={['Crit multiplier', 'Each +10% chance is worth']}
            widths={['50%', 'auto']}
            rows={[
              ['×1.5 (no crit damage)', '≈ 5% of base damage'],
              ['×1.8', '≈ 8%'],
              ['×2.1', '≈ 11%'],
              ['×2.4', '≈ 14%'],
            ]}
          />

          <h3 className="mt-6 font-serif text-lg font-semibold text-[var(--heading)]">Flat base damage</h3>
          <P>
            Flat damage is worth ten divided by your current flat total, and every multiplier after it applies to that gain as well:
          </P>
          <Formula>gain = 10 / current flat total</Formula>
          <P>
            That gives the crossover in rule 3. Flat beats a +10% bonus while your flat total is smaller than 100 plus your percentage
            total; above that, percentages stay ahead permanently. Early boards should buy flat; late boards should never look at it.
          </P>
          <Note>
            Rank the three shapes against each other, not inside themselves. The strongest pickup on a young board is almost always flat
            base; on a finished board it is almost always the one factor nobody has been feeding.
          </Note>
        </Section>

        <Section id="traps-and-checklist" title="Traps and Checklist">
          <Table
            head={['#', 'Trap', 'Why it costs you']}
            widths={['2rem', '32%', 'auto']}
            rows={[
              ['1', 'A factor sitting at zero', 'If your attack type has no bonus, every other factor is multiplying ×1.00 at that step.'],
              ['2', 'Filling a factor the game barely sells', 'One source in the whole pool is not a plan; switch attack type instead of chasing it.'],
              ['3', 'Attack speed on a special plan', 'Most weapons’ special attacks do not scale with attack speed at all.'],
              ['4', 'Crit chance without crit damage', '83% chance at ×1.5 averages ×1.42; the same chance at ×2.1 averages ×1.91.'],
              ['5', 'Stacking one factor', 'The fifth +30% in one factor is worth less than the first +10% in an empty one.'],
              ['6', 'Wrong weapon family, or an accidental conversion', 'Both leave you with a slot spent and a factor untouched.'],
              ['7', 'Ignoring the target', '40 defense removes 30.8% and 100 removes 55.7%; resistance caps at 99%; true damage skips both.'],
            ]}
          />
          <P>The checklist, in the order you should run it:</P>
          <ol className="mt-4 max-w-3xl list-decimal space-y-2 pl-5 text-[15px] leading-7 text-[var(--body-soft)]">
            <li>Name the attack you actually press, and its coefficient.</li>
            <li>Name its element and the flat stat that feeds it.</li>
            <li>Tally your five lines and find the shortest one that the game can actually fill.</li>
            <li>Spend the next slots there — not on the artifact with the biggest number printed on it.</li>
            <li>Count the combo thresholds you reach, and check each branch still pays at that count.</li>
            <li>Check weapon family and conversion on every artifact before you plan around it.</li>
            <li>Re-tally after every few items. The correct answer moves as the factors grow.</li>
          </ol>
          <Note>
            If a build underperforms, the cause is almost always one of four things: an empty attack-type factor, a base too small to
            multiply, crit without crit damage, or a defensive wall the plan never addressed.
          </Note>
        </Section>
      </article>
    </SephiriaGreatswordBuildShell>
  );
}
