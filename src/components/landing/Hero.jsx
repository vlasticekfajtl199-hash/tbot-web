import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 px-6 flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content (60%) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
              <span className="font-mono text-xs text-neon tracking-wider uppercase">
                Private Beta Access
              </span>
            </div>

            <h1 className="font-inter font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-data-white leading-none tracking-tight">
              Tbot<span className="text-neon">.</span>
              <br />
              <span className="text-code-grey">System</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-code-grey font-light leading-relaxed max-w-2xl">
              Rule-based BTC signal infrastructure built for disciplined execution.
              <br />
              <span className="text-data-white font-medium">
                Live-tested. Structured. Designed to reduce emotional decision-making.
              </span>
            </p>

            <p className="mt-6 text-code-grey/70 leading-relaxed max-w-xl">
              Tbot System evaluates BTC market structure on a defined{' '}
              <span className="syntax-highlight">1H</span> framework using{' '}
              <span className="syntax-highlight">EMA</span>,{' '}
              <span className="syntax-highlight">RSI</span>, and{' '}
              <span className="syntax-highlight">breakout</span> filters with
              pre-set risk controls, monitored logic, and beta reporting.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://buy.stripe.com/14A28r2VKcRv67ucvNb3q00"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00FF9C] text-black px-6 py-3 rounded-xl font-bold hover:opacity-80 transition"
              >
                Join Beta
              </a>
              <a
                href="#metrics"
                className="inline-flex items-center gap-2 border-2 border-card-border text-code-grey font-inter font-medium px-6 py-3 rounded-lg hover:border-code-grey/50 hover:text-data-white transition-all duration-300 text-sm"
              >
                <Play size={14} />
                Review Current Metrics
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
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
          <div className="lg:col-span-5">
            <div className="monolith-card rounded-lg overflow-hidden">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-void/50">
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
                  className="w-full h-full object-cover object-center"
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

            <p className="mt-4 font-mono text-xs text-code-grey/30 text-center">
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
