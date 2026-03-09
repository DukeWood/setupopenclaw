import { CheckCircle, Star } from "lucide-react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

const tiers = [
  {
    name: "Hosted Setup",
    price: "770",
    description: "VPS-based managed deployment",
    featured: false,
    features: [
      "Cloud VPS deployment",
      "All integrations configured",
      "Security hardening",
      "14-day hypercare",
      "Slack support channel",
      "VPS hosting ~£5-10/mo",
    ],
  },
  {
    name: "Mac Mini Remote",
    price: "1,100",
    description: "With iMessage integration",
    featured: true,
    features: [
      "Everything in Hosted Setup",
      "iMessage integration",
      "Mac Mini configuration",
      "Remote setup & deployment",
      "14-day hypercare",
      "Hardware ~£500 (yours to keep)",
    ],
  },
  {
    name: "Mac Mini In-Person",
    price: "2,200",
    description: "London area, on-site installation",
    featured: false,
    features: [
      "Everything in Mac Mini Remote",
      "On-site installation",
      "In-person kickoff & training",
      "Hardware setup at your office",
      "London & surrounding areas",
      "14-day hypercare",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Simple, <span className="text-gradient-brand">transparent pricing</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          One-time setup fee. No subscriptions, no hidden costs. 14-day hypercare included.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border-2 transition-all hover:scale-[1.02] ${
                tier.featured
                  ? "border-emerald-500 bg-white dark:bg-slate-800 shadow-xl relative"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {tier.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  £{tier.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400 ml-1">
                  one-time
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  tier.featured
                    ? "bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Need more agents? <strong>+£350 per additional agent.</strong> All
          prices exclude VAT.
        </p>
      </div>
    </section>
  );
}
