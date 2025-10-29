import { channelCadence, monthlyThemes, weeklyPlan } from "@/data/contentPlan";
import { ChannelCadenceTable } from "@/components/ChannelCadenceTable";
import { MonthlyThemeCard } from "@/components/MonthlyThemeCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WeeklyPlanCard } from "@/components/WeeklyPlanCard";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:px-6">
      <section className="rounded-3xl border border-sherogreen/20 bg-gradient-to-br from-white via-sherocream to-white p-10 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sherogreen">
          Shero Home Foods · 90-Day Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
          A strategic content engine celebrating homemade love, empowering Sheroes,
          and driving conversion.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          This 13-week plan weaves together storytelling, community activation,
          and high-intent conversion plays across Shero’s owned, earned, and paid
          channels. Each week ladders up to monthly narratives that honour women
          home cooks, reassure customers on quality, and accelerate festive & city
          expansion goals.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "Hero cadence",
              value: "Weekly anchor story + 3 supporting plays"
            },
            {
              label: "North-star outcomes",
              value: "Awareness → Engagement → Conversion & Loyalty"
            },
            {
              label: "Core audience",
              value: "Urban families, working professionals, women entrepreneurs"
            }
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-sherogreen/15 bg-white/60 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-sherobrick">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="monthly-themes" className="space-y-8">
        <SectionHeader
          eyebrow="Monthly narrative arcs"
          title="Guide each month with a clear strategic story"
          description="Every month articulates the why behind the weekly campaigns – from reigniting nostalgia to accelerating festive conversions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {monthlyThemes.map((theme) => (
            <MonthlyThemeCard key={theme.month} theme={theme} />
          ))}
        </div>
      </section>

      <section id="weekly-plan" className="space-y-8">
        <SectionHeader
          eyebrow="Week-by-week sprints"
          title="Execute 13 themed micro-campaigns"
          description="Each week has a hero narrative, supporting plays, community hooks, and measurement plan so teams can move fast without losing cohesion."
        />
        <div className="space-y-8">
          {weeklyPlan.map((plan) => (
            <WeeklyPlanCard key={plan.week} plan={plan} />
          ))}
        </div>
      </section>

      <section id="channel-cadence" className="space-y-8 pb-12">
        <SectionHeader
          eyebrow="Always-on engine"
          title="Channel cadence & governance"
          description="Sustain momentum with a disciplined publishing rhythm, tailored storytelling angles, and optimization tactics for every channel."
        />
        <ChannelCadenceTable items={channelCadence} />
      </section>
    </main>
  );
}
