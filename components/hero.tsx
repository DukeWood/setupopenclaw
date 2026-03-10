import { Shield, Zap, Clock, Globe } from "lucide-react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

const stats = [
  { icon: Shield, value: "AES-256", label: "Encryption" },
  { icon: Zap, value: "Same Day", label: "Deployment" },
  { icon: Clock, value: "14 Days", label: "Hypercare" },
  { icon: Globe, value: "10 Cities", label: "Across UK" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Gradient orbs — boosted opacity for visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-navy-500/20 to-navy-600/10 blur-3xl animate-float" />
        <div
          className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/10 to-amber-600/5 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                Accepting new clients
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              We deploy your team&apos;s{" "}
              <span className="text-gradient-brand">AI assistant</span>
            </h1>

            <p className="sr-only">
              SetupOpenClaw is a managed deployment service for OpenClaw, the open-source AI executive assistant, purpose-built for UK businesses with 4–50 employees. Provided by Innovatorly Ltd, we handle security-first installation, configuration, and 14-day hypercare so your team is productive from day one.
            </p>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              White-glove OpenClaw deployment for UK teams of 4-50.
              Remotely, securely, from day one.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Security-first", "Same-day setup", "14-day hypercare"].map(
                (feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    {feature}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                Book a Free 15-Min Call
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center text-white font-bold py-4 px-8 rounded-xl border-2 border-slate-700 hover:bg-slate-800 transition-all"
              >
                View Pricing
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" /> 100%
                satisfaction guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" /> Setup in
                hours, not weeks
              </span>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-[1.02]"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
