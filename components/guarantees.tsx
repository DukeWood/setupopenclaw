import { ShieldCheck } from "lucide-react";

export function Guarantees() {
  return (
    <section id="guarantees" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            If you&apos;re not completely satisfied with your setup within the 14-day
            hypercare period, we&apos;ll refund your full payment. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
