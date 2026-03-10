import { Shield, Lock, Eye, FileCheck, Key, Server } from "lucide-react";

const features = [
  { icon: Lock, title: "Docker Sandboxing", description: "Every agent runs in an isolated container." },
  { icon: Shield, title: "Composio Middleware", description: "Secure tool orchestration layer." },
  { icon: Eye, title: "Audit Trails", description: "Every action logged and reviewable." },
  { icon: Key, title: "OAuth Token Management", description: "Secure credential handling, no plaintext." },
  { icon: FileCheck, title: "Read-Only Defaults", description: "Agents can read but not act without approval." },
  { icon: Server, title: "Your Infrastructure", description: "Runs on your VPS or Mac Mini. Your data stays yours." },
];

export function Security() {
  return (
    <section id="security" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Security-first <span className="text-gradient-brand">by design</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          We don&apos;t just deploy — we harden. Every installation follows our security checklist.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
