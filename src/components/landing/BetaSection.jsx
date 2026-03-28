import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Access to a private Telegram beta group',
  'Live trade signals with entry, stop-loss, and target levels',
  'Weekly performance summaries and product updates',
  'Direct feedback channel with the developer',
  'Priority access to future system improvements',
];

export default function BetaSection() {
  return (
    <section id="beta" className="relative py-32 px-6">
      {/* Darker overlay for focus */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-black/40 to-void pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs text-neon tracking-widest uppercase">
          // Limited Beta Access
        </span>

        <h2 className="mt-6 font-inter font-bold text-5xl md:text-6xl text-data-white leading-tight">
          Private Beta
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="font-mono text-7xl md:text-8xl font-bold text-neon neon-glow">
            10
          </span>
          <span className="font-inter text-xl text-code-grey text-left leading-tight">
            beta spots
            <br />
            available
          </span>
        </div>

        <p className="mt-8 text-code-grey text-lg leading-relaxed max-w-xl mx-auto">
          This beta is intentionally limited to a small group of early users who want
          structured access to the system, live signals, and a direct line for
          feedback. The goal is validation, usability, and disciplined iteration
          before wider release.
        </p>

        <div className="mt-12 text-left max-w-lg mx-auto space-y-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-neon/30 flex items-center justify-center shrink-0">
                <Check size={12} className="text-neon" />
              </div>
              <span className="text-code-grey text-sm leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-neon text-void font-inter font-semibold px-8 py-4 rounded-lg hover:bg-neon/90 transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Request Beta Access
          </Link>

          <p className="mt-4 font-mono text-xs text-code-grey/40">
            No upfront payment - access is reviewed manually during beta
          </p>
        </div>
      </div>
    </section>
  );
}
