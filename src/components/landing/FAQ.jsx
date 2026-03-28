import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Tbot?",
    a: "Tbot System is a rule-based BTC trading system currently delivered in beta through trading signals. It is designed to support structured execution instead of discretionary decision-making.",
  },
  {
    q: "What does beta mean?",
    a: "Beta means the system is in an active testing phase. Users receive the current signal delivery format while workflows, reporting, and product details continue to be refined.",
  },
  {
    q: "Do I get access to the bot?",
    a: "No. During beta, users do not receive access to the bot, source code, or internal system controls. Beta access currently covers signals only.",
  },
  {
    q: "What do the signals include?",
    a: "Each signal includes direction, entry level, stop-loss, and take-profit targets so the setup can be reviewed and executed manually.",
  },
  {
    q: "Where are signals delivered?",
    a: "Signals are delivered through a private Telegram channel during the beta phase.",
  },
  {
    q: "How often are signals generated?",
    a: "Signals are generated only when the system detects a valid setup. Frequency depends on market conditions, so activity can vary from week to week.",
  },
  {
    q: "Are trades executed automatically?",
    a: "No. Beta users execute trades manually on their own exchange account. Tbot does not place trades or manage accounts for users during this phase.",
  },
  {
    q: "What strategy is used?",
    a: "The system uses a rule-based framework that combines trend, momentum, and breakout conditions, together with predefined risk parameters.",
  },
  {
    q: "What is the goal of the strategy?",
    a: "The goal is disciplined execution with controlled risk over time, not aggressive speculation or unrealistic short-term returns.",
  },
  {
    q: "Is trading risk-free?",
    a: "No. Trading always involves risk, including the possibility of loss. No signal system can guarantee profitable outcomes.",
  },
  {
    q: "What risk should I use?",
    a: "A conservative approach is recommended. Many users choose a small fixed risk per trade, often around 1% or less, depending on experience and account size.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Tbot System is provided for informational and educational purposes only and should not be treated as financial advice.",
  },
  {
    q: "Do I need API keys?",
    a: "No. Beta access does not require API keys, exchange integration, or any account connection.",
  },
  {
    q: "Does the bot run on my device?",
    a: "No. The system runs in a separate remote environment. Users only receive the resulting signals and updates.",
  },
  {
    q: "Will Tbot become fully automated?",
    a: "That is part of the longer-term direction. The current beta is focused on validating signal quality, workflow, and user experience before broader automation.",
  },
  {
    q: "Will there be a paid version?",
    a: "Yes. A broader paid version may follow after the beta phase, once the system and delivery model are validated more thoroughly.",
  },
  {
    q: "Who is Tbot for?",
    a: "Tbot is for users who understand the basics of trading, can execute setups manually, and want to evaluate a systematic approach during beta.",
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
            Answers to the most common questions about Tbot System and the current beta phase.
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
