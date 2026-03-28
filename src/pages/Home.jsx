import { Link } from 'react-router-dom';
import NavBar from '../components/landing/NavBar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import LiveMetrics from '../components/landing/LiveMetrics';
import SignalPreview from '../components/landing/SignalPreview';
import SystemSection from '../components/landing/SystemSection';
import Roadmap from '../components/landing/Roadmap';
import LiveLog from '../components/landing/LiveLog';
import Donate from '../components/landing/Donate';
import Footer from '../components/landing/Footer';

const routeCards = [
  {
    title: 'Private Beta',
    description: 'Review the beta access details, what is included, and how onboarding works.',
    to: '/beta',
    label: 'Open Beta',
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <Hero />
      <HowItWorks />
      <LiveMetrics />
      <SignalPreview />
      <SystemSection />
      <Roadmap />
      <LiveLog />

      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Navigation
            </span>
            <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
              Explore More
            </h2>
            <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
              Access the detailed FAQ, beta information, and contact page through
              dedicated routes while keeping the core landing experience focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routeCards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="monolith-card rounded-lg p-8 group hover:border-neon/20 transition-all duration-500 block"
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
                  <span className="font-mono text-xs text-neon tracking-widest uppercase">
                    {card.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Donate />
      <Footer />
    </div>
  );
}
