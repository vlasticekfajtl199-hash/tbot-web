import { Activity, Shield, Send, Zap } from 'lucide-react';

const cards = [
  {
    icon: Activity,
    title: 'Signal Logic',
    tag: 'STRATEGY',
    description: 'The system evaluates trend, momentum, and breakout conditions on the 1H timeframe using predefined rules instead of discretionary decisions.',
    specs: ['EMA', 'RSI', 'Breakout'],
  },
  {
    icon: Zap,
    title: 'Validation Layer',
    tag: 'FILTERING',
    description: 'Each setup is checked against confirmation and market-structure filters before it is allowed into the beta signal flow.',
    specs: ['Setup Checks', 'Confirmation', 'Defined Triggers'],
  },
  {
    icon: Shield,
    title: 'Risk Framework',
    tag: 'RISK',
    description: 'Signals are structured with predefined stop-loss and take-profit logic so risk is considered before an alert is published.',
    specs: ['SL / TP', 'Risk Limits', 'Structured Entries'],
  },
  {
    icon: Send,
    title: 'Delivery',
    tag: 'REPORTING',
    description: 'Validated outputs are sent to the beta channel together with reporting and monitoring so users can review the setup clearly.',
    specs: ['Telegram Alerts', 'Trade Logs', 'Weekly Updates'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Architecture
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
            Tbot System follows a structured flow from market scan to signal delivery.
            Each layer is designed to make the beta experience clearer, more consistent,
            and easier to evaluate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="monolith-card rounded-lg p-8 group hover:border-neon/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg border border-card-border flex items-center justify-center group-hover:border-neon/30 transition-colors">
                  <card.icon size={20} className="text-neon" />
                </div>
                <span className="font-mono text-xs text-code-grey/60 tracking-widest">
                  {card.tag}
                </span>
              </div>
              <h3 className="font-inter font-semibold text-xl text-data-white mb-3">
                {card.title}
              </h3>
              <p className="text-code-grey leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.specs.map((spec, j) => (
                  <span key={j} className="syntax-highlight text-xs">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
