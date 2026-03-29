import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import LiveMetrics from '../components/landing/LiveMetrics'
import SystemSection from '../components/landing/SystemSection'
import Footer from '../components/landing/Footer'
import Reveal from '../components/Reveal'

const routeCards = [
  {
    title: 'Private Beta',
    description: 'Review the beta access details, what is included, and how onboarding works.',
    to: '/beta',
    label: 'Join Beta',
  },
  {
    title: 'FAQ',
    description: 'Read the key answers about the system, beta access, and trading workflow.',
    to: '/faq',
    label: 'Open FAQ',
  },
  {
    title: 'Contact',
    description: 'Reach out directly for beta access, product questions, or follow-up details.',
    to: '/contact',
    label: 'Open Contact',
  },
  {
    title: 'Roadmap',
    description: 'See the current launch stages, planned rollout, and where the system is heading next.',
    to: '/roadmap',
    label: 'Open Roadmap',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <Hero />
      <Reveal as="div">
        <LiveMetrics />
      </Reveal>
      <Reveal as="div" delay={80}>
        <HowItWorks />
      </Reveal>
      <Reveal as="div" delay={120}>
        <SystemSection />
      </Reveal>

      <Reveal as="section" delay={140} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Navigation
            </span>
            <h2 className="section-heading mt-4 font-inter font-bold text-4xl md:text-5xl leading-tight">
              Explore More
            </h2>
            <p className="section-copy mt-4 max-w-2xl text-lg leading-relaxed">
              Access the detailed FAQ, beta information, and contact page through
              dedicated routes while keeping the core landing experience focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {routeCards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="premium-card rounded-2xl p-8 group block reveal-up"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-data-white mb-3 group-hover:text-neon transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-code-grey leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neon tracking-widest uppercase self-start">
                    {card.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  )
}
