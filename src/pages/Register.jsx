import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../supabaseClient'
import { upsertUserProfile } from '../lib/userProfile'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
    telegram: '',
    riskAccepted: false,
  })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard')
    }
  }, [loading, navigate, user])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  if (loading) {
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setNotice('')

    if (!form.email || !form.password || !form.telegram) {
      setError('Please complete all fields before creating your account.')
      return
    }

    if (!form.riskAccepted) {
      setError('You need to confirm that you understand trading risk.')
      return
    }

    setIsSubmitting(true)

    const email = form.email.trim()
    const telegram = form.telegram.trim()

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password: form.password,
      options: {
        data: {
          telegram_username: telegram,
          beta_status: 'pending',
          payment_status: 'unpaid',
        },
      },
    })

    setIsSubmitting(false)

    if (signUpError) {
      const normalizedMessage = signUpError.message.toLowerCase()
      if (
        normalizedMessage.includes('already registered') ||
        normalizedMessage.includes('already exists') ||
        normalizedMessage.includes('user already registered')
      ) {
        setError('An account with this email already exists. Please sign in instead.')
        return
      }

      setError(signUpError.message)
      return
    }

    if (!data.user) {
      setError('Registration could not be completed. Please try again.')
      return
    }

    if (Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      setError('An account with this email already exists. Please sign in instead.')
      return
    }

    const { error: profileError } = await upsertUserProfile(data.user.id, {
      email,
      telegram_username: telegram,
      telegram_invite_link: null,
      beta_status: 'pending',
      payment_status: 'unpaid',
    })

    if (profileError) {
      setError('Account was created, but profile setup failed. Please try signing in again.')
      return
    }

    if (!data.session) {
      setNotice('Account created. Please confirm your email, then sign in to continue.')
      return
    }

    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-void text-data-white">
      <NavBar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="monolith-card rounded-lg p-8 md:p-10">
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Registration
            </span>
            <h1 className="mt-4 font-inter font-bold text-4xl text-data-white leading-tight">
              Create Your Beta Account
            </h1>
            <p className="mt-4 text-code-grey leading-relaxed">
              Register first to access your private beta dashboard, review your
              status, and continue to payment when you are ready.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block font-mono text-xs text-code-grey/60 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-card-border bg-void/60 px-4 py-3 text-data-white outline-none focus:border-neon/40 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-code-grey/60 uppercase tracking-widest mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-card-border bg-void/60 px-4 py-3 text-data-white outline-none focus:border-neon/40 transition-colors"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-code-grey/60 uppercase tracking-widest mb-2">
                  Telegram Username
                </label>
                <input
                  type="text"
                  name="telegram"
                  value={form.telegram}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-card-border bg-void/60 px-4 py-3 text-data-white outline-none focus:border-neon/40 transition-colors"
                  placeholder="@username"
                />
              </div>

              <label className="flex items-start gap-3 rounded-lg border border-card-border bg-void/40 px-4 py-4">
                <input
                  type="checkbox"
                  name="riskAccepted"
                  checked={form.riskAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-[#00FF9C]"
                />
                <span className="text-code-grey leading-relaxed text-sm">
                  I understand trading risk and that beta access does not include
                  guaranteed results or account management.
                </span>
              </label>

              {error ? (
                <div className="rounded-lg border border-warning-amber/20 bg-warning-amber/5 px-4 py-3 text-sm text-warning-amber">
                  {error}
                </div>
              ) : null}

              {notice ? (
                <div className="rounded-lg border border-neon/20 bg-neon/5 px-4 py-3 text-sm text-code-grey">
                  {notice}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-neon px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <p className="mt-6 text-center text-code-grey/60 text-sm">
              Already registered?{' '}
              <Link to="/login" className="text-neon hover:text-neon/80 transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
