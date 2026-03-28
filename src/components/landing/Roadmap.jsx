const milestones = [
  {
    phase: 'Beta',
    period: '2025-2026',
    status: 'active',
    items: [
      'Live market testing',
      'Private beta access',
      'Signal validation',
      'User feedback collection',
    ],
  },
  {
    phase: 'Alpha',
    period: '2026',
    status: 'upcoming',
    items: [
      'Full automation rollout',
      'Exchange connection',
      'Improved execution layer',
      'Stability and monitoring upgrades',
    ],
  },
  {
    phase: 'Forex Expansion',
    period: '2027-2028',
    status: 'planned',
    items: [
      'Expansion to forex markets',
      'EUR/USD and major pairs',
      'Adapted strategy framework',
      'Long-term system scaling',
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Timeline
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Roadmap
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
            A realistic view of what is happening now, what is being prepared next,
            and how the project may evolve beyond beta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`monolith-card rounded-lg p-8 relative ${
                milestone.status === 'active' ? 'border-neon/30' : ''
              }`}
            >
              {milestone.status === 'active' && (
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                  <span className="font-mono text-xs text-neon">ACTIVE</span>
                </div>
              )}

              <span className="font-mono text-xs text-code-grey/40 tracking-widest">
                {milestone.period}
              </span>
              <h3 className="mt-2 font-inter font-bold text-2xl text-data-white">
                {milestone.phase}
              </h3>

              <div className="mt-6 space-y-3">
                {milestone.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        milestone.status === 'active' ? 'bg-neon' : 'bg-code-grey/30'
                      }`}
                    />
                    <span className="text-code-grey text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
