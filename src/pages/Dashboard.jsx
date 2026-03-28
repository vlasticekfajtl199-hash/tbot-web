import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'
import { useAuth } from '../lib/AuthContext'
import { getUserProfile } from '../lib/userProfile'
import { supabase } from '../supabaseClient'

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/14A28r2VKcRv67ucvNb3q00'
const PROFILE_REFRESH_INTERVAL_MS = 15000
const SIMULATE_PAYMENT_ENDPOINT = 'https://api.tbotsystem.eu/simulate-payment'

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
  const [requestError, setRequestError] = useState('')
  const [isSimulatingPayment, setIsSimulatingPayment] = useState(false)

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

  const handleSimulatePaymentSuccess = async () => {
    if (!currentUser) return

    setIsSimulatingPayment(true)
    setRequestError('')

    try {
      const response = await fetch(SIMULATE_PAYMENT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: currentUser.id,
        }),
      })

      const responseText = await response.text()
      let result = null

      try {
        result = responseText ? JSON.parse(responseText) : null
      } catch (parseError) {
        console.error('Simulate payment response JSON parse failed:', {
          parseError,
          responseText,
        })
      }

      if (!response.ok || result?.success !== true) {
        console.error('Simulate payment request failed:', {
          status: response.status,
          responseText,
          result,
        })
        throw new Error(result?.message || 'Simulate payment request failed.')
      }

      await refreshProfile()
    } catch (error) {
      console.error('Simulate payment network failure:', error)
      setRequestError(
        error instanceof Error
          ? error.message
          : 'Simulate payment request failed. Please try again.'
      )
    } finally {
      setIsSimulatingPayment(false)
    }
  }

  if (isLoadingProfile || !profile) {
    return null
  }

  const isPaid = profile.payment_status === 'paid'
  const betaStatusLabel = formatBetaStatus(profile.beta_status, profile.payment_status)
  const paymentStatusLabel = formatPaymentStatus(profile.payment_status)
  const inviteReady = profile.invite_status === 'generated'
  const hasInviteLink = Boolean(profile.telegram_invite_link)

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
                Review your beta account, payment state, and invite access from one place.
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

          {requestError ? (
            <div className="mb-6 rounded-lg border border-warning-amber/20 bg-warning-amber/5 px-4 py-3 text-sm text-warning-amber">
              {requestError}
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
                  ? 'Your beta access is active and payment has been recorded.'
                  : 'Your account is registered and waiting for payment to activate beta access.'}
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
                  ? 'Payment has been recorded for this account.'
                  : 'Payment is the next step in the beta flow. Continue to Stripe to complete access.'}
              </p>

              {!isPaid ? (
                <>
                  <a
                    href={STRIPE_PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-neon px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300"
                  >
                    Continue to Payment
                  </a>

                  <button
                    type="button"
                    onClick={handleSimulatePaymentSuccess}
                    disabled={isSimulatingPayment}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-neon/30 px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-neon hover:bg-neon hover:text-void transition-all duration-300 disabled:opacity-60"
                  >
                    {isSimulatingPayment ? 'Updating Test Order...' : 'Simulate Payment Success'}
                  </button>

                  <p className="mt-4 text-code-grey/60 text-sm leading-relaxed">
                    This is a temporary test flow for internal development.
                  </p>
                </>
              ) : (
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-neon">
                    Payment Complete
                  </span>
                </div>
              )}
            </div>

            <div className="monolith-card rounded-lg p-8">
              <span className="font-mono text-xs text-neon tracking-widest uppercase">
                // Invite Access
              </span>

              {isPaid ? (
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-3 py-1">
                    <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
                    <span className="font-mono text-[11px] text-neon uppercase tracking-widest">
                      Beta Access Active
                    </span>
                  </div>

                  {inviteReady && hasInviteLink ? (
                    <>
                      <div className="mt-6 rounded-lg border border-card-border bg-void/40 p-5">
                        <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                          Telegram Access
                        </div>
                        <p className="mt-3 text-code-grey leading-relaxed text-sm">
                          Your private invite is ready. Open it in a new tab to continue onboarding.
                        </p>
                      </div>

                      <a
                        href={profile.telegram_invite_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-neon/30 px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-neon hover:bg-neon hover:text-void transition-all duration-300"
                      >
                        Join Telegram
                      </a>
                    </>
                  ) : (
                    <div className="mt-6 rounded-lg border border-card-border bg-void/40 p-5">
                      <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                        Telegram Access
                      </div>
                      <p className="mt-3 text-code-grey leading-relaxed text-sm">
                        Access is being prepared.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-6 rounded-lg border border-card-border bg-void/40 p-5">
                  <div className="font-mono text-xs text-code-grey/50 uppercase tracking-widest">
                    Telegram Access
                  </div>
                  <p className="mt-3 text-code-grey leading-relaxed text-sm">
                    Invite access appears automatically after payment is confirmed on your account.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
