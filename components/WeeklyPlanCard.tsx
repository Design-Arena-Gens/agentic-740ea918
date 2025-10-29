import type { WeeklyPlan } from "@/data/contentPlan";

function renderChannel(channel: WeeklyPlan["heroContent"]["channel"]) {
  if (Array.isArray(channel)) {
    return channel.join(" · ");
  }
  return channel;
}

interface WeeklyPlanCardProps {
  plan: WeeklyPlan;
}

export function WeeklyPlanCard({ plan }: WeeklyPlanCardProps) {
  return (
    <article className="grid gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sherobrick">
            Week {plan.week} · {plan.timeframe}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{plan.focus}</h3>
        </div>
        <span className="inline-flex items-center rounded-full bg-sherogreen/10 px-3 py-1 text-xs font-medium text-sherogreen">
          {plan.objective}
        </span>
      </header>

      <section>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-sherogreen">
          Hero Content
        </h4>
        <div className="mt-2 rounded-xl bg-sherocream/80 p-4">
          <p className="text-base font-semibold text-slate-900">
            {plan.heroContent.title}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {plan.heroContent.description}
          </p>
          <dl className="mt-3 flex flex-wrap gap-4 text-xs text-slate-700">
            <div>
              <dt className="font-semibold">Channel</dt>
              <dd>{renderChannel(plan.heroContent.channel)}</dd>
            </div>
            <div>
              <dt className="font-semibold">Format</dt>
              <dd>{plan.heroContent.format}</dd>
            </div>
            <div>
              <dt className="font-semibold">Cadence</dt>
              <dd>{plan.heroContent.cadence}</dd>
            </div>
            <div>
              <dt className="font-semibold">CTA</dt>
              <dd>{plan.heroContent.callToAction}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-sherogreen">
          Supporting Plays
        </h4>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {plan.supportingContent.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-100 bg-white/60 p-4"
            >
              <p className="text-sm font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-slate-600">{item.description}</p>
              <dl className="mt-2 space-y-1 text-xs text-slate-700">
                <div>
                  <dt className="font-semibold">Channel</dt>
                  <dd>{Array.isArray(item.channel) ? item.channel.join(" · ") : item.channel}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Format</dt>
                  <dd>{item.format}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Cadence</dt>
                  <dd>{item.cadence}</dd>
                </div>
                <div>
                  <dt className="font-semibold">CTA</dt>
                  <dd>{item.callToAction}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-sherogold/10 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sherobrick">
            Community Activation
          </h4>
          <p className="mt-2 text-sm text-slate-700">{plan.communityActivation}</p>
        </div>
        <div className="rounded-xl bg-sherogold/10 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sherobrick">
            Partnership Hooks
          </h4>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
            {plan.partnershipIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-100 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Measurement & Signals
          </h4>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
            {plan.measurement.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-slate-100 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Ops Notes
          </h4>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
            {plan.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
