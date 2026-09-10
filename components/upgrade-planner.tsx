'use client';
import { useMemo, useState } from 'react';
import { siteUrl } from '@/lib/repo-guide-pages';
const plans = {
  carrying: {
    primary: 'Strength or another carrying improvement',
    fallback: 'Stamina or a shorter carry route',
    why: 'Your route is surviving, but weight and handling are consuming too much time or control.',
    check:
      'Repeat one familiar valuable and compare whether the same doorway and distance are easier to manage.',
  },
  stamina: {
    primary: 'Stamina',
    fallback: 'Sprint or movement support',
    why: 'The run is ending when actions or movement stop before the team reaches safety.',
    check:
      'Run the same route and note whether you can finish the carry and still keep an escape reserve.',
  },
  damage: {
    primary: 'Health',
    fallback: 'Stamina for safer disengagement',
    why: 'Repeated damage is ending otherwise workable routes.',
    check:
      'Track whether the purchase prevents the same knockdown; if positioning still causes repeated hits, change the route next.',
  },
  reach: {
    primary: 'Range',
    fallback: 'Mobility or a safer approach angle',
    why: 'Unsafe distance or awkward interaction positions are forcing exposure.',
    check:
      'Use the same pickup or doorway and verify whether you can interact without entering the previous danger lane.',
  },
  control: {
    primary: 'A control tool the assigned player can use',
    fallback: 'Health or Stamina for a safer escape',
    why: 'A known enemy or blocked route is taking control away from the crew.',
    check:
      'Assign the tool before leaving the shop, then test whether it creates enough time to move the crew or cargo.',
  },
  fragile: {
    primary: 'Protection for fragile valuables',
    fallback: 'Strength or a simpler cart load',
    why: 'The team reaches extraction but loses value through impacts or difficult handling.',
    check:
      'Carry one comparable fragile item and record whether fewer collisions or breaks occur on the same route.',
  },
} as const;
const roles = {
  carrier: 'Carrier: prioritize handling and a route that stays open.',
  scout:
    'Scout: do not buy carrying power unless you will actually receive the load.',
  support:
    'Support/control: assign the tool and its trigger before leaving the Service Station.',
  flex: 'Flexible: give the purchase to the player who will use it most on the next route.',
} as const;
type Role = keyof typeof roles;
type Failure = keyof typeof plans;
type RecommendationInput = { crew: string; role: Role; failure: Failure };

function crewAdvice(crew: string) {
  if (crew === '1')
    return 'Solo: favor the change that protects your own carry and exit route.';
  if (crew === '2')
    return 'Two players: decide who carries and who keeps the route clear before spending.';
  return `${crew} players: assign the purchase to one player and agree on who covers the next carry.`;
}
export function UpgradePlanner() {
  const [crew, setCrew] = useState('3'),
    [role, setRole] = useState<Role>('flex'),
    [failure, setFailure] = useState<Failure>('carrying'),
    [recommendation, setRecommendation] =
      useState<RecommendationInput | null>(null);
  const plan = useMemo(
    () => (recommendation ? plans[recommendation.failure] : null),
    [recommendation],
  );
  return (
    <main className="min-h-screen px-5 py-10 text-[#e1e6e8]">
      <div className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebApplication',
                  name: 'R.E.P.O. upgrade planner',
                  url: siteUrl + '/guides/r-e-p-o-upgrade-planner',
                  applicationCategory: 'GameApplication',
                  operatingSystem: 'Web browser',
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: siteUrl,
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'R.E.P.O.',
                      item: siteUrl + '/games/repo',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Upgrade planner',
                      item: siteUrl + '/guides/r-e-p-o-upgrade-planner',
                    },
                  ],
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
        <nav aria-label="Breadcrumb" className="text-sm text-[#aeb7bc]">
          <a href="/">Home</a> › <a href="/games/repo">R.E.P.O.</a>{' '}
          › <span>Upgrade planner</span>
        </nav>
        <h1 className="mt-7 text-4xl font-semibold">
          R.E.P.O. upgrade planner
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-[#aeb7bc]">
          Choose the bottleneck that ended the last run. The planner returns a
          priority, a fallback, and one check for the next attempt. It does not
          assume a specific shop roll or fixed price.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setRecommendation({ crew, role, failure });
          }}
          aria-label="Planner inputs"
          className="mt-8 grid gap-5 rounded-xl border border-white/10 bg-[#192126] p-5 sm:grid-cols-3"
        >
          <label className="text-sm">
            Crew size
            <select
              value={crew}
              onChange={(e) => setCrew(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-[#111417] p-3"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Role
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as keyof typeof roles)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-[#111417] p-3"
            >
              <option value="carrier">Carrier</option>
              <option value="scout">Scout / navigator</option>
              <option value="support">Support / control</option>
              <option value="flex">Flexible</option>
            </select>
          </label>
          <label className="text-sm">
            Last failure
            <select
              value={failure}
              onChange={(e) => setFailure(e.target.value as keyof typeof plans)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-[#111417] p-3"
            >
              <option value="carrying">Heavy or slow carry</option>
              <option value="stamina">Stamina ran out</option>
              <option value="damage">Repeated damage</option>
              <option value="reach">Unsafe reach</option>
              <option value="control">Lost control of the route</option>
              <option value="fragile">Fragile value was lost</option>
            </select>
          </label>
          <div className="sm:col-span-3">
            <button
              type="submit"
              className="rounded-lg bg-[#ff7043] px-5 py-3 font-semibold text-[#111417] hover:bg-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
            >
              Recommend
            </button>
          </div>
        </form>
        <section
          aria-live="polite"
          className="mt-6 rounded-xl border border-[#ff7043]/30 bg-[#ff7043]/[0.06] p-6"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff9a7a]">
            {recommendation
              ? `Recommendation for ${recommendation.crew} player${recommendation.crew === '1' ? '' : 's'}`
              : 'Recommendation'}
          </p>
          {plan && recommendation ? (
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm text-[#9fd7ba]">Primary priority</dt>
                <dd className="mt-1 text-xl font-semibold">{plan.primary}</dd>
              </div>
              <div>
                <dt className="text-sm text-[#9fd7ba]">Fallback</dt>
                <dd className="mt-1 leading-7">{plan.fallback}</dd>
              </div>
              <div>
                <dt className="text-sm text-[#9fd7ba]">Why</dt>
                <dd className="mt-1 leading-7">
                  {plan.why} {roles[recommendation.role]}{' '}
                  {crewAdvice(recommendation.crew)}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-[#9fd7ba]">Next-run check</dt>
                <dd className="mt-1 leading-7">{plan.check}</dd>
              </div>
            </dl>
          ) : (
            <p className="mt-4 leading-7 text-[#c7d0d5]">
              Choose the crew, role, and last-run failure, then select Recommend.
            </p>
          )}
        </section>
        <aside className="mt-6 rounded-xl border border-white/10 p-5 text-sm leading-6 text-[#aeb7bc]">
          If the recommended category is not on the shelf, use the fallback or
          save. Change one variable at a time, and always read the current item
          description.
        </aside>
        <nav
          aria-label="Related guides"
          className="mt-9 border-t border-white/10 pt-6"
        >
          <h2 className="text-xl font-semibold">Related Guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/guides/upgrade-priority"
              className="rounded-lg border border-white/10 p-4"
            >
              Upgrade priority →
            </a>
            <a
              href="/guides/upgrades-explained"
              className="rounded-lg border border-white/10 p-4"
            >
              Upgrades explained →
            </a>
            <a
              href="/guides/first-shop-priority"
              className="rounded-lg border border-white/10 p-4"
            >
              First shop priority →
            </a>
            <a
              href="/games/repo"
              className="rounded-lg border border-white/10 p-4"
            >
              All R.E.P.O. guides →
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}
