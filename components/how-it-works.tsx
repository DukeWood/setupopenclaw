import { Phone, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Kickoff Call",
    description:
      "We map your goals, workflows, and integrations in a 20-45 minute session. You tell us what you need — we handle the rest.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Deploy & Harden",
    description:
      "Same-day deployment. We configure OpenClaw, connect your tools, set up security layers, and lock it down.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "14-Day Hypercare",
    description:
      "Two weeks of active tuning, monitoring, and support. We fine-tune triggers, fix edge cases, and train your team.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          How it <span className="text-gradient-brand">works</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          From first call to fully operational — usually within 24 hours.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Step {step.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
