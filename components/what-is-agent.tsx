import { Bot } from "lucide-react";

export function WhatIsAgent() {
  return (
    <section id="what-is-openclaw" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What&apos;s an <span className="text-gradient-brand">Executive Agent</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            An Executive Agent is a fully managed OpenClaw instance — the open-source AI executive assistant — deployed, configured, and secured for your UK business in as little as one day. Each agent connects to your existing tools, learns your workflows, and operates with AES-256 encryption and 6 enterprise-grade security controls.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            <strong className="text-slate-900 dark:text-white">1 Executive Agent = 1 OpenClaw instance</strong> dedicated
            to your team. It handles scheduling, communications, research, and
            task management on your behalf — saving an average of 10+ hours per
            week across your organisation.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Need more capacity? Add additional agents for different departments,
            projects, or team members. Every deployment includes 14 days of
            hypercare support and same-day setup.
          </p>
        </div>
      </div>
    </section>
  );
}
