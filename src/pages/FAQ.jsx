import NavBar from '../components/landing/NavBar';
import FAQSection from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import Reveal from '../components/Reveal'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <Reveal as="div">
        <FAQSection />
      </Reveal>
      <Footer />
    </div>
  );
}
