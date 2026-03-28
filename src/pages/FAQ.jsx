import NavBar from '../components/landing/NavBar';
import FAQSection from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <FAQSection />
      <Footer />
    </div>
  );
}
