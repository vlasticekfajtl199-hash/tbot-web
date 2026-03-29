import { ShieldAlert, Sparkles, Users } from 'lucide-react'
import BetaAvailability from '../components/landing/BetaAvailability'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'
import betaSignalAccessCard from '@/assets/beta-signal-access-card.jpg'
import betaBotAccessCard from '@/assets/beta-bot-access-card.jpg'

const SIGNAL_ACCESS_URL = 'https://buy.stripe.com/14A28r2VKcRv67ucvNb3q00'
const BOT_ACCESS_URL = 'https://buy.stripe.com/28EdR9eEs04J53qbrJb3q01'

const products = [
  {
    title: 'Beta Signal Access',
    level: 'Entry Level',
    badge: 'Most Popular',
    price: '\u20AC10',
    availabilityLabel: 'Signal Beta',
    availabilityRemaining: '0 / 5',
    description:
      'Entry-level beta access for users who want the live signal workflow and tester onboarding.',
    image: betaSignalAccessCard,
    imageAlt: 'Beta Signal Access product preview',
    features: [
      'Live BTC signals (1H system)',
      'Entry / Stop Loss / Take Profit levels',
      'Telegram access',
      'Beta tester access',
    ],
    cta: 'Join Signal Beta',
    href: SIGNAL_ACCESS_URL,
    delayClass: 'delay-0',
  },
  {
    title: 'Beta Bot Access',
    level: 'Advanced',
    badge: 'Limited Spots',
    price: '\u20AC35',
    availabilityLabel: 'Bot Beta',
    availabilityRemaining: '0 / 2',
    description:
      'Advanced beta access for users who want early automation testing with more guided onboarding.',
    image: betaBotAccessCard,
    imageAlt: 'Beta Bot Access product preview',
    features: [
      'Includes everything from Signal Access',
      'Access to automated bot beta',
      'VPS-supported access (limited)',
      'Priority onboarding',
    ],
    cta: 'Join Bot Beta',
    href: BOT_ACCESS_URL,
    delayClass: 'delay-150',
  },
]

const audience = [
  'Users with basic trading understanding',
  'People who can execute trades manually',
  'Users willing to test and provide feedback',
]

const disclaimers = [
  'This is a beta testing phase',
  'No guaranteed profit',
  'No account management',
  'Trading involves risk',
  'Signals are informational only',
]

const infoSections = [
  {
    eyebrow: '// Who This Is For',
    title: 'Who This Is For',
    icon: Users,
    items: audience,
  },
  {
    eyebrow: '// Important Notes',
    title: 'Important Notes',
    icon: ShieldAlert,
    items: disclaimers,
  },
]

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="relative max-w-3xl mx-auto text-center flex flex-col items-center overflow-hidden">
            <div className="absolute inset-x-0 -top-24 h-44 bg-[radial-gradient(circle,rgba(0,255,156,0.08)_0%,rgba(0,255,156,0.03)_38%,transparent_72%)] blur-3xl pointer-events-none" />

            <span className="relative font-mono text-xs text-neon tracking-widest uppercase">
              // Private Access
            </span>
            <h1 className="relative mt-4 font-inter font-bold text-4xl md:text-6xl text-white leading-[1.05] tracking-tight max-w-2xl">
              Private Beta Access
            </h1>
            <p className="relative mt-5 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Get early access to Tbot System and join the first group of beta users.
            </p>
            <p className="relative mt-4 text-slate-300/80 leading-relaxed max-w-2xl">
              This beta phase provides access to the current signal delivery stage
              of Tbot System, including Telegram access and ongoing updates.
            </p>
          </section>

          <section className="mt-16 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {products.map((product) => (
                <div
                  key={product.title}
                  className={`premium-card rounded-2xl p-8 flex flex-col h-full transform-gpu hover:scale-[1.02] hover:-translate-y-1 hover:border-[#00FF9C] hover:shadow-[0_0_20px_rgba(0,255,156,0.15)] group animate-in fade-in slide-in-from-bottom-4 duration-700 ${product.delayClass}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="mb-6 max-w-[13rem]">
                      <BetaAvailability
                        label={product.availabilityLabel}
                        remaining={product.availabilityRemaining}
                      />
                    </div>

                    <div className="inline-flex items-center rounded-full border border-neon/25 bg-neon/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-neon shadow-[0_0_18px_rgba(0,255,156,0.12)]">
                      {product.badge}
                    </div>
                  </div>

                  {product.image ? (
                    <div className="mb-7 overflow-hidden rounded-2xl border border-neon/15 bg-[#081117] p-2 shadow-[0_0_24px_rgba(0,255,156,0.08)]">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full rounded-[14px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.015]"
                      />
                    </div>
                  ) : null}

                  <span className="font-mono text-xs text-neon tracking-widest uppercase">
                    // Product
                  </span>
                  <h2 className="mt-4 font-inter font-bold text-3xl text-white leading-tight">
                    {product.title}
                  </h2>

                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-code-grey/60">
                      {product.level}
                    </div>
                    <div className="mt-2 font-mono font-bold text-[2.65rem] leading-none text-neon transition-all duration-500 ease-in-out group-hover:drop-shadow-[0_0_18px_rgba(0,255,156,0.42)]">
                      {product.price}
                    </div>
                  </div>

                  <p className="mt-5 max-w-[34rem] text-code-grey leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-card-border/80 space-y-5 flex-1">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-neon shrink-0 shadow-[0_0_12px_rgba(0,255,156,0.35)]" />
                        <span className="text-code-grey leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-button mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide"
                  >
                    {product.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-card-border/60 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {infoSections.map((section) => {
              const Icon = section.icon

              return (
                <div
                  key={section.title}
                  className="premium-card rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/5">
                      <Icon size={18} className="text-neon" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-neon tracking-widest uppercase">
                        {section.eyebrow}
                      </span>
                      <h2 className="mt-2 font-inter font-bold text-3xl text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 max-w-[30rem] space-y-5">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-neon/70 shrink-0" />
                        <span className="text-code-grey leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </section>

          <section className="mt-16">
            <div className="premium-card mx-auto max-w-3xl text-center rounded-2xl px-8 py-8">
              <div className="inline-flex items-center gap-2 text-neon/80">
                <Sparkles size={15} />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
                  Built on Reliable Infrastructure
                </span>
              </div>
              <p className="mt-4 text-code-grey leading-relaxed">
                Trading system running on Deribit infrastructure with real market data.
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-card-border/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-code-grey/60">
                Powered by Deribit
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
