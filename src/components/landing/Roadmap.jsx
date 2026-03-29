import { ArrowUpRight, Rocket } from 'lucide-react'

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
]

const statusStyles = {
  active: {
    badge: 'Active',
    badgeClass: 'border-neon/30 bg-neon/10 text-neon',
    dotClass: 'bg-neon shadow-[0_0_18px_rgba(0,255,136,0.5)]',
    cardClass: 'border-neon/30 shadow-[0_0_30px_rgba(0,255,136,0.08)]',
  },
  upcoming: {
    badge: 'Upcoming',
    badgeClass: 'border-card-border bg-void/50 text-code-grey',
    dotClass: 'bg-code-grey/40',
    cardClass: 'border-card-border',
  },
  planned: {
    badge: 'Planned',
    badgeClass: 'border-card-border bg-void/50 text-code-grey',
    dotClass: 'bg-code-grey/40',
    cardClass: 'border-card-border',
  },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-neon/20 bg-neon/5 px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Launch Timeline
            </span>
          </div>
          <h2 className="section-heading mt-6 font-inter font-bold text-4xl md:text-5xl leading-tight">
            Roadmap
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-lg leading-relaxed">
            A realistic view of what is happening now, what is being prepared next,
            and how the system is planned to expand beyond beta.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
          <div className="hidden lg:flex absolute top-[34px] right-10 items-center justify-center w-16 h-16 rounded-full border border-neon/20 bg-void/90 shadow-[0_0_30px_rgba(0,255,136,0.12)]">
            <Rocket size={24} className="text-neon rotate-45" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => {
              const styles = statusStyles[milestone.status]

              return (
                <div
                  key={milestone.phase}
                  className={`premium-card rounded-2xl p-8 relative border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(0,255,136,0.08)] ${styles.cardClass}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${styles.dotClass}`} />
                      <span className="font-mono text-xs text-code-grey/40 tracking-[0.24em] uppercase">
                        {milestone.period}
                      </span>
                    </div>
                    <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${styles.badgeClass}`}>
                      {styles.badge}
                    </span>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-inter font-bold text-2xl text-data-white">
                        {milestone.phase}
                      </h3>
                      <div className="w-10 h-10 rounded-lg border border-card-border/80 bg-void/60 flex items-center justify-center">
                        {index === milestones.length - 1 ? (
                          <Rocket size={16} className="text-neon" />
                        ) : (
                          <ArrowUpRight size={16} className="text-neon" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {milestone.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${styles.dotClass}`} />
                        <span className="text-code-grey text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
