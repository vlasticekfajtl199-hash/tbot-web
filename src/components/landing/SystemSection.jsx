import { Server, Code, Radio, Shield } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'VPS Hosted',
    description: 'Runs continuously in a remote environment designed for stable uptime and monitored operation.',
  },
  {
    icon: Code,
    title: 'Python-Based',
    description: 'Built in Python with modular components to support testing, iteration, and maintainable system logic.',
  },
  {
    icon: Radio,
    title: 'Execution',
    description: 'Trading execution powered by Deribit infrastructure.',
  },
  {
    icon: Shield,
    title: 'Monitored Automation',
    description: 'The system runs with structured logic and oversight during beta so behavior can be reviewed and improved responsibly.',
  },
];

export default function SystemSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal-up">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Infrastructure
            </span>
            <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
              The System
            </h2>
            <p className="mt-4 text-code-grey max-w-xl text-lg leading-relaxed mb-12">
              Tbot System is not positioned as a generic signal channel. It is a
              structured operating environment built to evaluate, format, and deliver
              BTC trade setups with consistent logic.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className={`premium-card rounded-2xl p-5 flex items-start gap-4 reveal-up ${i < 2 ? 'stagger-1' : 'stagger-2'}`}>
                  <div className="w-10 h-10 shrink-0 rounded-xl border border-card-border flex items-center justify-center bg-void/40">
                    <feature.icon size={18} className="text-neon" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-data-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-code-grey text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div className="premium-card rounded-[24px] overflow-hidden reveal-up stagger-2">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-void/50 backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 font-mono text-xs text-code-grey/50">tbot_core.py</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-code-grey/50"># Tbot System - Core Flow</div>
              <div className="mt-3">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-neon">TbotEngine</span>
                <span className="text-code-grey">:</span>
              </div>
              <div className="ml-4 mt-1">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-blue-400">__init__</span>
                <span className="text-code-grey">(self):</span>
              </div>
              <div className="ml-8 text-code-grey">
                self.timeframe = <span className="text-warning-amber">"1H"</span>
              </div>
              <div className="ml-8 text-code-grey">
                self.instrument = <span className="text-warning-amber">"BTC/USDT"</span>
              </div>
              <div className="ml-8 text-code-grey">
                self.signal_filters = <span className="text-neon">["ema", "rsi", "breakout"]</span>
              </div>
              <div className="ml-8 text-code-grey">
                self.beta_mode = <span className="text-neon">True</span>
              </div>
              <div className="mt-4 ml-4">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-blue-400">publish_signal</span>
                <span className="text-code-grey">(self, signal):</span>
              </div>
              <div className="ml-8 text-code-grey/50"># Validate - Format - Notify</div>
              <div className="ml-8 text-code-grey">
                <span className="text-purple-400">if</span> signal.confirmed:
              </div>
              <div className="ml-12 text-code-grey">
                self.apply_risk_rules(signal)
              </div>
              <div className="ml-12 text-code-grey">
                self.format_signal(signal)
              </div>
              <div className="ml-12 text-code-grey">
                self.notify(<span className="text-warning-amber">"telegram"</span>)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
