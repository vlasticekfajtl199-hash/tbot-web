import signalChartPreview from '@/assets/signal-chart-preview.png'
import signalCardPreview from '@/assets/signal-card-preview.png'

const metrics = [
  { label: 'Market', value: 'BTC_USDT', note: 'Primary pair' },
  { label: 'Timeframe', value: '1H', note: 'Min60 logic' },
  { label: 'Signal Type', value: 'Long', note: 'Rule-based state' },
  { label: 'RR Target', value: '2.2', note: 'Structured setup' },
  { label: 'Delivery', value: 'Telegram', note: 'Compact output' },
  { label: 'Status', value: 'Active', note: 'Beta stream live' },
]

const previewCards = [
  {
    label: 'Primary View',
    title: 'Live chart execution snapshot',
    description:
      'Expanded chart layout showing the signal zone, target range, stop structure, and candle follow-through.',
    image: signalChartPreview,
    imageAlt: 'Tbot Signal chart preview',
    imageClass: 'aspect-[16/9] object-cover',
  },
  {
    label: 'Compact Delivery',
    title: 'Telegram-ready signal card',
    description:
      'Compact signal output designed for quick reading, structured entries, and efficient manual execution.',
    image: signalCardPreview,
    imageAlt: 'Tbot Signal compact card preview',
    imageClass: 'aspect-[4/5] object-contain max-h-[36rem] mx-auto',
  },
]

export default function LiveMetrics() {
  return (
    <section id="metrics" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.08),transparent_35%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Live Preview
            </span>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
              <span className="font-mono text-[11px] text-neon tracking-widest uppercase">
                Signal Feed Active
              </span>
            </div>
          </div>

          <h2 className="section-heading mt-4 font-inter font-bold text-4xl md:text-5xl leading-tight">
            Live Metrics
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-lg leading-relaxed">
            A visual snapshot of how Tbot System formats live signal delivery, chart structure,
            and execution-ready data during the beta phase.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_0.85fr] gap-6 items-stretch">
          {previewCards.map((card, index) => (
            <div
              key={card.title}
              className={`premium-card rounded-[28px] p-5 md:p-6 border border-card-border/80 overflow-hidden group transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(0,255,136,0.12)] hover:border-neon/25 ${
                index === 0 ? 'xl:min-h-[38rem]' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <span className="font-mono text-[11px] text-neon tracking-[0.24em] uppercase">
                    {card.label}
                  </span>
                  <h3 className="mt-3 font-inter font-semibold text-2xl text-data-white">
                    {card.title}
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-neon live-pulse shrink-0" />
              </div>

              <p className="section-copy leading-relaxed max-w-2xl">
                {card.description}
              </p>

              <div className="mt-6 rounded-[22px] border border-neon/10 bg-[#071117] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between px-3 py-2 border-b border-card-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="font-mono text-[11px] text-code-grey/50 uppercase tracking-widest">
                    tbot signal
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[18px] mt-3 bg-black/30">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className={`w-full rounded-[18px] transition-transform duration-700 ease-in-out group-hover:scale-[1.02] ${card.imageClass}`}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-void/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="premium-card rounded-xl p-5 text-center group transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-neon/20 hover:shadow-[0_0_24px_rgba(0,255,136,0.08)]"
            >
              <span className="font-mono text-[11px] text-code-grey/60 tracking-[0.22em] block mb-4 uppercase">
                {metric.label}
              </span>
              <span className="font-mono font-bold text-2xl md:text-3xl text-neon block mb-2 uppercase">
                {metric.value}
              </span>
              <span className="font-mono text-[11px] text-code-grey/50">
                {metric.note}
              </span>
            </div>
          ))}
        </div>

        <div className="premium-card mt-8 rounded-xl p-4 flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
          <span className="font-mono text-xs text-code-grey text-center">
            Signal visuals represent the current beta delivery format and structured setup output.
          </span>
        </div>
      </div>
    </section>
  )
}
