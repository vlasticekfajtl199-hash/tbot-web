import NavBar from '../components/landing/NavBar'
import Donate from '../components/landing/Donate'
import Footer from '../components/landing/Footer'
import Reveal from '../components/Reveal'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <main className="pt-14">
        <Reveal as="div">
          <Donate />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}
