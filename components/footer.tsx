const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <img
              src="/logo.jpeg"
              alt="SetupOpenClaw"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-slate-400 mt-1">
              A service by Innovatorly.ai
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">
              Accepting new clients
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-8 border-t border-slate-800 mb-6 text-sm text-slate-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
        </nav>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://setupclaw.uk" className="hover:text-white transition-colors">
              setupclaw.uk
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          © 2026 Innovatorly Ltd. All rights reserved.
          Registered in England and Wales.
        </p>
      </div>
    </footer>
  );
}
