import NavBar from '../components/landing/NavBar';
import BetaSection from '../components/landing/BetaSection';
import Footer from '../components/landing/Footer';

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <BetaSection />
      <Footer />
    </div>
  );
}
