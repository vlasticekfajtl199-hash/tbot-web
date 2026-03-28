const metrics = [
  { label: 'WIN RATE', value: '~46%', note: 'Current sample' },
  { label: 'PROFIT FACTOR', value: '~1.4', note: 'Risk-adjusted' },
  { label: 'AVG R:R', value: '~1:1.8', note: 'Per setup' },
  { label: 'TIMEFRAME', value: '1H', note: 'Core model' },
  { label: 'MARKET', value: 'BTC', note: 'Perpetual' },
];

export default function LiveMetrics() {
  return (
    <section id="metrics" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Performance
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Live Metrics
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
            A simple view of the current operating profile. These numbers are presented
            as working beta metrics, not promises, and should be read in the context of
            ongoing forward testing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="monolith-card rounded-lg p-6 text-center group hover:border-neon/20 transition-all duration-500"
            >
              <span className="font-mono text-xs text-code-grey/60 tracking-widest block mb-4 uppercase">
                {metric.label}
              </span>
              <span className="font-mono font-bold text-3xl md:text-4xl text-data-white neon-glow block mb-2">
                {metric.value}
              </span>
              <span className="font-mono text-xs text-code-grey/50">
                {metric.note}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 monolith-card rounded-lg p-4 flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
          <span className="font-mono text-xs text-code-grey">
            Forward testing in progress - metrics reviewed during beta
          </span>
        </div>
      </div>
    </section>
  );
}
