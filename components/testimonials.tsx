import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SetupOpenClaw had our AI assistant running before lunch. The hypercare period was invaluable for tuning it to our exact needs.",
    name: "Placeholder Name",
    role: "CEO, Tech Startup",
  },
  {
    quote:
      "We tried setting up OpenClaw ourselves and gave up after two days. These folks did it in two hours with better security than we'd have managed.",
    name: "Placeholder Name",
    role: "CTO, Agency",
  },
  {
    quote:
      "The ROI was immediate. Our exec team saves 10+ hours per week on email triage and meeting prep alone.",
    name: "Placeholder Name",
    role: "COO, Scale-up",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          What teams are <span className="text-gradient-brand">saying</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
