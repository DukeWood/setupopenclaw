const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <img
              src="/logo-setupopenclaw.png"
              alt="SetupOpenClaw"
              className="h-14 sm:h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-slate-400 mt-3">
              A service by Innovatorly.ai
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">
                Accepting new clients
              </span>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Coverage
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  OpenClaw
                </a>
              </li>
              <li>
                <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Anthropic (Claude)
                </a>
              </li>
              <li>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  OpenAI
                </a>
              </li>
              <li>
                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Google Gemini
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/uk/shop/buy-mac/mac-mini" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Apple Mac Mini
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/lightsail/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  AWS Lightsail
                </a>
              </li>
              <li>
                <a href="https://www.digitalocean.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  DigitalOcean
                </a>
              </li>
              <li>
                <a href="https://www.hetzner.com/cloud" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Hetzner Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://setupopenclaw.pro" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  setupopenclaw.pro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            © 2026 Innovatorly Ltd. All rights reserved. Registered in England and Wales.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </footer>
  );
}
