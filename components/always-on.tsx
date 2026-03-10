import { Mail, Calendar, Zap, MessageSquare } from "lucide-react";

const intervals = [
  {
    icon: Mail,
    time: "Every 30 min",
    title: "Email scanning & drafting",
    description: "Scans your inbox, drafts replies, flags urgent messages.",
  },
  {
    icon: Calendar,
    time: "9:00 AM daily",
    title: "Meeting briefings",
    description: "Prepares agendas, pulls context from past conversations.",
  },
  {
    icon: Zap,
    time: "On demand",
    title: "Action triggers",
    description: "Responds to Slack commands, calendar events, and webhooks.",
  },
  {
    icon: MessageSquare,
    time: "Ongoing",
    title: "Slack & messaging monitoring",
    description: "Watches channels for questions, tasks, and follow-ups.",
  },
];

export function AlwaysOn() {
  return (
    <section id="always-on" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Always on, <span className="text-gradient-brand">always working</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Your AI assistant runs 24/7. Communicate via Slack, Telegram, WhatsApp, or Discord.
        </p>
        <div className="space-y-6 max-w-2xl mx-auto">
          {intervals.map((item, i) => (
            <div key={item.title} className="flex items-start gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                {i < intervals.length - 1 && (
                  <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.time}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
