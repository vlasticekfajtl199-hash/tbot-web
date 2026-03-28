import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Tbot System?",
    a: "Tbot System is a rule-based BTC trading system that generates signals from predefined market conditions. It is designed to reduce impulsive decision-making and keep execution aligned with a consistent framework.",
  },
  {
    q: "What does beta mean in this case?",
    a: "The beta phase is a controlled testing period. Users get early access to signals and updates while the system, workflows, and reporting are still being refined through live observation and direct feedback.",
  },
  {
    q: "What do beta users receive?",
    a: "Beta users receive live trading signals, access to the private Telegram group, performance summaries, and direct communication during the testing phase.",
  },
  {
    q: "Do I get access to the bot itself?",
    a: "No. During beta, users do not receive the bot, the source code, or direct system access. Access is currently limited to signals, reporting, and beta communication.",
  },
  {
    q: "What does each signal include?",
    a: "Each signal includes direction, entry zone, stop-loss level, and take-profit targets so the setup can be reviewed and executed manually.",
  },
  {
    q: "Where are signals delivered?",
    a: "Signals are delivered through Telegram in real time during the beta phase.",
  },
  {
    q: "How often are signals generated?",
    a: "Signals are published only when the system detects a valid setup. Frequency depends on market conditions, so activity may vary from week to week.",
  },
  {
    q: "Are trades executed automatically for users?",
    a: "No. In the current beta phase, execution is manual. Users receive the setup and decide whether and how to place the trade on their own exchange account.",
  },
  {
    q: "What market is the system focused on?",
    a: "The system is currently focused on BTC perpetual markets and is optimized around a defined execution framework used during testing.",
  },
  {
    q: "What logic does the system use?",
    a: "The system combines trend, momentum, and breakout conditions using indicators such as EMA, RSI, ADX, and ATR together with predefined risk parameters.",
  },
  {
    q: "Is this a fully automated product already?",
    a: "Not yet. Tbot System is currently being validated through a beta model where users receive outputs while the broader automation layer continues to be developed and monitored.",
  },
  {
    q: "Does it run on my device?",
    a: "No. The system runs in a remote environment. Beta users only receive the resulting signals and updates.",
  },
  {
    q: "Do I need API keys or exchange integration?",
    a: "No. Beta access does not require API keys or exchange integration.",
  },
  {
    q: "Is trading with Tbot risk-free?",
    a: "No. All trading carries risk, including the possibility of loss. Tbot System uses structured risk logic, but no system can remove market risk entirely.",
  },
  {
    q: "What level of risk is generally appropriate?",
    a: "A conservative approach is recommended. Many traders use a small fixed percentage of account risk per trade, often around 1% or less, depending on experience and risk tolerance.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Tbot System is provided for informational and educational purposes only and should not be considered financial advice or a guarantee of future performance.",
  },
  {
    q: "Will there be a paid version later?",
    a: "Yes. A paid version may follow after the beta phase, once the system and user experience have been validated more thoroughly.",
  },
  {
    q: "Who is beta access intended for?",
    a: "Beta access is intended for users who understand the basics of trading, can execute setups responsibly, and want to evaluate a systematic approach at an early stage.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Answers
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-2xl text-code-grey leading-relaxed">
            Clear answers on how Tbot System works, what beta users receive,
            and what to expect from the current stage of the product.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="monolith-card rounded-lg px-6 border-card-border"
            >
              <AccordionTrigger className="text-data-white font-inter font-medium text-left hover:no-underline hover:text-neon transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-code-grey leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
