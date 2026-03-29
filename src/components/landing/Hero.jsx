import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 px-6 flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[34rem] pointer-events-none bg-[radial-gradient(circle_at_28%_28%,rgba(0,255,156,0.16),transparent_34%)]" />
      <div className="absolute right-[8%] top-[16%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(0,255,156,0.08),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content (60%) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 reveal-up">
              <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
              <span className="font-mono text-xs text-neon tracking-wider uppercase">
                Private Beta Access
              </span>
            </div>

            <h1 className="reveal-up stagger-1 font-inter font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-data-white leading-none tracking-tight">
              Automated BTC
              <br />
              <span className="text-slate-300">Trading Signals.</span>
              <br />
              <span className="text-data-white">Built as a System.</span>
            </h1>

            <p className="reveal-up stagger-2 mt-6 text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Systematic trading signals based on EMA, RSI, and breakout logic.
              Designed for consistent, rule-based execution.
            </p>

            <p className="reveal-up stagger-3 mt-5 text-code-grey/70 leading-relaxed max-w-xl">
              Currently in private beta. Signals are delivered via Telegram for
              manual execution and ongoing evaluation.
            </p>

            <div className="reveal-up stagger-4 mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/beta"
                className="premium-button group inline-flex items-center gap-2 font-inter font-semibold px-6 py-3 rounded-xl text-sm tracking-wide"
              >
                Join Beta
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="#metrics"
                className="premium-outline-button inline-flex items-center gap-2 font-inter font-medium px-6 py-3 rounded-xl text-sm"
              >
                <Play size={14} />
                View Live Results
              </a>
            </div>

            {/* Mini stats */}
            <div className="reveal-up stagger-4 mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <span className="font-mono text-2xl text-data-white font-bold">1H</span>
                <span className="block font-mono text-xs text-code-grey/40 mt-1 uppercase tracking-wide">
                  Core Timeframe
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-card-border" />
              <div>
                <span className="font-mono text-2xl text-data-white font-bold">BTC</span>
                <span className="block font-mono text-xs text-code-grey/40 mt-1 uppercase tracking-wide">
                  Primary Market
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-card-border" />
              <div>
                <span className="font-mono text-2xl text-data-white font-bold">24/7</span>
                <span className="block font-mono text-xs text-code-grey/40 mt-1 uppercase tracking-wide">
                  VPS Runtime
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image (40%) */}
          <div className="lg:col-span-5 reveal-up stagger-2">
            <div className="premium-card rounded-[24px] overflow-hidden">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-card-border/70 bg-void/60 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs text-code-grey/40">
                  dev@workstation
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src="https://media.base44.com/images/public/69c62a8ab79adf6ea143f745/3f1ad0c90_generated_684b7a7e.png"
                  alt="Developer workspace"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-void/60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-void/30 pointer-events-none" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-void/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon/20">
                  <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                  <span className="font-mono text-xs text-neon">LIVE</span>
                </div>

                <div className="absolute top-4 right-4 bg-void/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-card-border">
                  <span className="font-mono text-xs text-code-grey/60">BTC/USDT - 1H</span>
                </div>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs text-code-grey/40 text-center">
              Real operating environment: Python execution, VPS deployment, exchange APIs
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-code-grey/30 uppercase tracking-wider">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-card-border to-transparent" />
      </div>
    </section>
  );
}
