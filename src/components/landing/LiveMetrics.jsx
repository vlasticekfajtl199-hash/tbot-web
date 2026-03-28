const metrics = [
  { label: 'Win Rate', value: '48%', note: 'Beta sample' },
  { label: 'Profit Factor', value: '1.4', note: 'Risk-adjusted' },
  { label: 'Avg Monthly Return', value: '3.2%', note: 'Indicative range' },
  { label: 'Max Drawdown', value: '14%', note: 'Controlled risk' },
  { label: 'Timeframe', value: '1H', note: 'BTC' },
  { label: 'Status', value: 'Active', note: 'Signal delivery live' },
];

export default function LiveMetrics() {
  return (
    <section id="metrics" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Performance
            </span>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
              <span className="font-mono text-[11px] text-neon tracking-widest uppercase">
                Active
              </span>
            </div>
          </div>

          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Live Metrics
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
            Current system snapshot during beta phase
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="monolith-card rounded-lg p-6 text-center group hover:border-neon/20 transition-all duration-500"
            >
              <span className="font-mono text-xs text-code-grey/60 tracking-widest block mb-4 uppercase">
                {metric.label}
              </span>
              <span className="font-mono font-bold text-3xl md:text-4xl text-neon block mb-2">
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
          <span className="font-mono text-xs text-code-grey text-center">
            Metrics are based on historical and beta-phase data. Performance may vary.
          </span>
        </div>
      </div>
    </section>
  );
}
