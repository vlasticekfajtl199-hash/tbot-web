import NavBar from '../components/landing/NavBar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import LiveMetrics from '../components/landing/LiveMetrics';
import SystemSection from '../components/landing/SystemSection';
import BetaSection from '../components/landing/BetaSection';
import Roadmap from '../components/landing/Roadmap';
import LiveLog from '../components/landing/LiveLog';
import FAQ from '../components/landing/FAQ';
import Contact from '../components/landing/Contact';
import Donate from '../components/landing/Donate';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <Hero />
      <HowItWorks />
      <LiveMetrics />
      <SystemSection />
      <BetaSection />
      <Roadmap />
      <LiveLog />
      <FAQ />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
}