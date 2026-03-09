import { Rocket, Users, Palette, TrendingUp } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "Founders & CEOs",
    description: "Automate inbox triage, meeting prep, and investor updates so you focus on strategy.",
  },
  {
    icon: Users,
    title: "Executive Teams",
    description: "Keep your leadership aligned with automated briefings, action tracking, and comms.",
  },
  {
    icon: Palette,
    title: "Agencies & Studios",
    description: "Manage client comms, project updates, and creative workflows without the overhead.",
  },
  {
    icon: TrendingUp,
    title: "Investors & VCs",
    description: "Monitor portfolio updates, deal flow, and market signals automatically.",
  },
];

export function BuiltFor() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Built for <span className="text-gradient-brand">ambitious teams</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you&apos;re a solo founder or a 50-person team, OpenClaw adapts to your workflow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-4">
                <persona.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
