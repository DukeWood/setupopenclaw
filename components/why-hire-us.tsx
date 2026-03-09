import { CheckCircle, XCircle } from "lucide-react";

export function WhyHireUs() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Why teams <span className="text-gradient-brand">hire us</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          OpenClaw is open source — anyone can install it. But &ldquo;install&rdquo; and &ldquo;production-ready&rdquo; are very different things.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* DIY column */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              DIY Setup
            </h3>
            <ul className="space-y-3">
              {[
                "Hours of configuration",
                "Security gaps you don't know about",
                "No monitoring or alerting",
                "Trial and error integrations",
                "You're on your own",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* SetupOpenClaw column */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-emerald-500 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              SetupOpenClaw
            </h3>
            <ul className="space-y-3">
              {[
                "Deployed and hardened in hours",
                "Enterprise-grade security from day one",
                "Monitoring, alerting, audit trails",
                "All integrations configured and tested",
                "14-day hypercare + ongoing support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
