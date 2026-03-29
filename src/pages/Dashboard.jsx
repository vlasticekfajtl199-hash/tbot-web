import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'
import { useAuth } from '../lib/AuthContext'
import { getUserProfile } from '../lib/userProfile'
import { supabase } from '../supabaseClient'

// Configure this Stripe Payment Link in the Stripe dashboard.
// Stripe-side redirect placeholders:
// success_url = https://tbotsystem.eu/beta-success
// cancel_url = https://tbotsystem.eu/beta
const STRIPE_PAYMENT_URL = 'https://buy.stripe.com/14A28r2VKcRv67ucvNb3q00'
const PROFILE_REFRESH_INTERVAL_MS = 15000

function formatPaymentStatus(paymentStatus) {
  return paymentStatus === 'paid' ? 'Paid' : 'Unpaid'
}

function formatBetaStatus(betaStatus, paymentStatus) {
  if (paymentStatus === 'paid') return 'Active'
  return betaStatus === 'active' ? 'Active' : 'Pending'
}

export default function DashboardPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [profile, setProfile] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)
  const [profileWarning, setProfileWarning] = useState('')

  const refreshProfile = async ({ showLoader = false } = {}) => {
    if (showLoader) {
      setIsLoadingProfile(true)
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError) {
      console.error('Supabase auth getUser failed:', authError)
      setProfileWarning('Unable to resolve the authenticated user.')
      setIsLoadingProfile(false)
      return
    }

    if (!user) {
      setProfileWarning('No authenticated user was found.')
      setIsLoadingProfile(false)
      return
    }

    setCurrentUser(user)

    const { profile: nextProfile, error } = await getUserProfile(user)
    setProfile(nextProfile)
    setProfileWarning(error)
    setIsLoadingProfile(false)
  }

  useEffect(() => {
    refreshProfile({ showLoader: true })

    const intervalId = window.setInterval(() => {
      refreshProfile()
    }, PROFILE_REFRESH_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  if (isLoadingProfile || !profile) {
    return null
  }

  const isPaid = profile.payment_status === 'paid'
  const betaStatusLabel = formatBetaStatus(profile.beta_status, profile.payment_status)
  const paymentStatusLabel = formatPaymentStatus(profile.payment_status)

  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <section className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Dashboard
              </span>
              <h1 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
                Dashboard
              </h1>
              <p className="mt-4 text-code-grey max-w-2xl leading-relaxed">
                Review your beta account and payment status in one place.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-lg border border-card-border px-4 py-3 font-inter text-sm font-medium text-code-grey hover:text-data-white hover:border-code-grey/40 transition-all duration-300"
            >
              Logout
            </button>
          </section>

          {profileWarning ? (
            <div className="mb-6 rounded-lg border border-warning-amber/20 bg-warning-amber/5 px-4 py-3 text-sm text-warning-amber">
              {profileWarning}
            </div>
          ) : null}

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="monolith-card rounded-lg p-8">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Account
              </span>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                    Logged in as
                  </div>
                  <div className="mt-2 text-data-white">{profile.email || currentUser?.email}</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                    Telegram
                  </div>
                  <div className="mt-2 text-data-white">
                    {profile.telegram_username || 'Not added yet'}
                  </div>
                </div>
              </div>
            </div>

            <div className="monolith-card rounded-lg p-8">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Beta Status
              </span>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                <div className="font-mono text-2xl text-data-white">{betaStatusLabel}</div>
              </div>
              <p className="mt-4 text-code-grey leading-relaxed">
                {isPaid
                  ? 'Your payment has been received. Beta access will be delivered manually by email.'
                  : 'Your beta access will be delivered manually after payment confirmation.'}
              </p>
            </div>
          </section>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="monolith-card rounded-lg p-8 border border-neon/20">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Payment Status
              </span>
              <div className="mt-6 font-mono text-3xl text-data-white">
                {paymentStatusLabel}
              </div>
              <p className="mt-4 text-code-grey leading-relaxed">
                {isPaid
                  ? 'Your order is complete. We will contact you soon by email with the next steps.'
                  : 'Continue to Stripe checkout to submit your beta access order.'}
              </p>

              {!isPaid ? (
                <a
                  href={STRIPE_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-neon px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300"
                >
                  Continue to Payment
                </a>
              ) : (
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-neon">
                    Payment Received
                  </span>
                </div>
              )}
            </div>

            <div className="monolith-card rounded-lg p-8">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Manual Onboarding
              </span>
              <div className="mt-6 rounded-lg border border-card-border bg-void/40 p-5">
                <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                  Delivery Method
                </div>
                <p className="mt-3 text-code-grey leading-relaxed text-sm">
                  Beta access is currently delivered manually after payment confirmation.
                  We will review the order in Stripe and contact you by email with the next steps.
                </p>
              </div>

              <p className="mt-4 text-code-grey/60 text-sm leading-relaxed">
                Please make sure your payment email matches the account email shown above.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
