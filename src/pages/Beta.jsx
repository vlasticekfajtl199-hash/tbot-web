import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BetaAvailability from '../components/landing/BetaAvailability';
import NavBar from '../components/landing/NavBar';
import Footer from '../components/landing/Footer';

const benefits = [
  'Live BTC trading signals',
  'Entry / Stop Loss / Take Profit levels',
  'Private Telegram access',
  'Weekly performance updates',
  'Early access to future features',
];

const audience = [
  'Users with basic trading understanding',
  'People who can execute trades manually',
  'Users willing to test and provide feedback',
];

const disclaimers = [
  'This is a beta testing phase',
  'No guaranteed profit',
  'No account management',
  'Trading involves risk',
  'Signals are informational only',
];

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Private Access
            </span>
            <h1 className="mt-5 font-inter font-bold text-4xl md:text-6xl text-data-white leading-tight">
              Private Beta Access
            </h1>
            <p className="mt-6 text-xl text-code-grey leading-relaxed">
              Get early access to Tbot System and join the first group of beta users.
            </p>
            <p className="mt-5 text-code-grey/80 leading-relaxed max-w-2xl mx-auto">
              This beta phase provides access to the current signal delivery stage
              of Tbot System, including Telegram access and ongoing updates.
            </p>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 monolith-card rounded-lg p-8">
              <div className="mb-8">
                <span className="font-mono text-xs text-neon tracking-widest uppercase">
                  // What You Get
                </span>
                <h2 className="mt-4 font-inter font-bold text-3xl text-data-white">
                  Included in Beta Access
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-lg border border-card-border bg-void/40 px-4 py-4 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-neon shrink-0 mt-0.5" />
                    <span className="text-code-grey leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <BetaAvailability />

              <div className="monolith-card rounded-lg p-8 border border-neon/30 shadow-[0_0_30px_rgba(0,255,136,0.08)]">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Pricing
              </span>
              <h2 className="mt-4 font-inter font-bold text-2xl text-data-white">
                One-time beta access
              </h2>
              <div className="mt-6 font-mono font-bold text-5xl text-neon neon-glow">
                €10
              </div>
              <p className="mt-3 text-code-grey/70 text-sm uppercase tracking-wide">
                Beta phase only
              </p>

              <div className="mt-8 pt-6 border-t border-card-border">
                <p className="text-code-grey leading-relaxed text-sm">
                  Access is intended for early users who want to review the current
                  signal workflow before broader release.
                </p>
              </div>

                <Link
                  to="/register"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-neon px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="monolith-card rounded-lg p-8">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Who This Is For
              </span>
              <h2 className="mt-4 font-inter font-bold text-3xl text-data-white">
                Who This Is For
              </h2>

              <div className="mt-8 space-y-4">
                {audience.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon mt-2 shrink-0" />
                    <span className="text-code-grey leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="monolith-card rounded-lg p-8 border border-card-border bg-void/70">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Disclaimer
              </span>
              <h2 className="mt-4 font-inter font-bold text-3xl text-data-white">
                Important Notes
              </h2>

              <div className="mt-8 space-y-4">
                {disclaimers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-code-grey/40 mt-2 shrink-0" />
                    <span className="text-code-grey leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
