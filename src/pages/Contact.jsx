import NavBar from '../components/landing/NavBar';
import ContactSection from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <ContactSection />
      <Footer />
    </div>
  );
}
