import { MessageSquare, Phone, Wrench } from "lucide-react";

const timeline = [
  {
    icon: MessageSquare,
    time: "Within 48 hours",
    title: "We reach out",
    description: "We'll contact you and set up a dedicated Slack channel for your team.",
  },
  {
    icon: Phone,
    time: "Kickoff call",
    title: "20-45 minute session",
    description: "We map your goals, workflows, tools, and integrations.",
  },
  {
    icon: Wrench,
    time: "Setup session",
    title: "1-3 hours live build",
    description: "We deploy, configure, harden, and test your OpenClaw instance in real-time.",
  },
];

export function AfterPurchase() {
  return (
    <section id="after-purchase" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          After you <span className="text-gradient-brand">purchase</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {timeline.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {item.time}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
