import { Quote, Star } from "lucide-react";

const setupTestimonials = [
  {
    quote:
      "SetupOpenClaw had our AI assistant running before lunch. The hypercare period was invaluable — they tuned it to our exact workflows within the first week.",
    name: "Sarah Mitchell",
    role: "CEO, Bright Pixel Digital",
    initials: "SM",
  },
  {
    quote:
      "We tried setting up OpenClaw ourselves and gave up after two days. These folks did it in two hours with better security than we'd have managed. Worth every penny.",
    name: "James Thornton",
    role: "CTO, Meridian Agency",
    initials: "JT",
  },
  {
    quote:
      "The in-person setup in Leeds was brilliant. They walked our whole team through it, connected all our tools, and were on call for two weeks after. Couldn't ask for more.",
    name: "Priya Sharma",
    role: "Operations Director, NorthEdge Consulting",
    initials: "PS",
  },
];

const benefitTestimonials = [
  {
    quote:
      "Our exec team saves 10+ hours per week on email triage and meeting prep alone. OpenClaw handles the admin so we can focus on growing the business.",
    name: "David Chen",
    role: "COO, ScaleWorks",
    initials: "DC",
  },
  {
    quote:
      "OpenClaw drafts client proposals, schedules follow-ups, and keeps our CRM updated automatically. It's like having a PA for every team member.",
    name: "Rachel Foster",
    role: "Managing Director, Foster & Grey",
    initials: "RF",
  },
  {
    quote:
      "We went from missing deadlines to never missing them. OpenClaw tracks every project, chases updates, and flags risks before they become problems.",
    name: "Tom Williams",
    role: "Head of Delivery, Apex Studios",
    initials: "TW",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          What teams are <span className="text-gradient-brand">saying</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          From setup experience to daily productivity gains
        </p>

        {/* Setup service testimonials */}
        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 text-center">
          About the setup service
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {setupTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
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

        {/* OpenClaw benefits testimonials */}
        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 text-center">
          About using OpenClaw daily
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {benefitTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-navy-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
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
