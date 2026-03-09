import { Bot } from "lucide-react";

export function WhatIsAgent() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What&apos;s an <span className="text-gradient-brand">Executive Agent</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            <strong className="text-slate-900 dark:text-white">1 Executive Agent = 1 OpenClaw instance</strong> deployed
            and configured specifically for your team. It learns your workflows,
            connects to your tools, and acts on your behalf.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Need more capacity? Add additional agents for different departments,
            projects, or team members.
          </p>
        </div>
      </div>
    </section>
  );
}
