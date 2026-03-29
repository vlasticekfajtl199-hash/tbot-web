import NavBar from '../components/landing/NavBar'
import Roadmap from '../components/landing/Roadmap'
import Footer from '../components/landing/Footer'
import Reveal from '../components/Reveal'

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />
      <main className="pt-14">
        <Reveal as="div">
          <Roadmap />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}
