import type { MonthlyTheme } from "@/data/contentPlan";

interface MonthlyThemeCardProps {
  theme: MonthlyTheme;
}

export function MonthlyThemeCard({ theme }: MonthlyThemeCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sherobrick">
        {theme.month}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{theme.theme}</h3>
      <p className="mt-3 text-sm text-slate-600">{theme.narrative}</p>
      <dl className="mt-4 space-y-2 text-sm text-slate-700">
        <div>
          <dt className="font-semibold text-sherogreen">North-star metric</dt>
          <dd>{theme.northStarMetric}</dd>
        </div>
        <div>
          <dt className="font-semibold text-sherogreen">Hero campaign</dt>
          <dd>{theme.heroCampaign}</dd>
        </div>
        <div>
          <dt className="font-semibold text-sherogreen">Key moments</dt>
          <dd>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {theme.keyMoments.map((moment) => (
                <li key={moment}>{moment}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
}
