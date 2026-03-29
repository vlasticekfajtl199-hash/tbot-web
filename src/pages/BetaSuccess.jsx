import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

export default function BetaSuccess() {
  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="monolith-card rounded-lg p-8 md:p-10 text-center">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Order Received
            </span>
            <h1 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
              Thank You
            </h1>
            <p className="mt-5 text-xl text-code-grey leading-relaxed">
              Your beta access order has been received.
            </p>
            <p className="mt-6 text-code-grey leading-relaxed max-w-2xl mx-auto">
              Your payment was successfully submitted. We will contact you soon by
              email with the next steps and beta access details.
            </p>
            <p className="mt-4 text-code-grey/60 text-sm leading-relaxed">
              Please make sure to check your inbox and spam folder.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-lg bg-neon px-6 py-3 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300 min-w-44"
              >
                Back to Home
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-card-border px-6 py-3 font-inter text-sm font-medium uppercase tracking-wide text-code-grey hover:text-data-white hover:border-code-grey/40 transition-all duration-300 min-w-44"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
