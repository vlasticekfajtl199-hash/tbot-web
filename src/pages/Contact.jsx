import NavBar from '../components/landing/NavBar';
import ContactSection from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import Reveal from '../components/Reveal'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <Reveal as="div">
        <ContactSection />
      </Reveal>
      <Footer />
    </div>
  );
}
