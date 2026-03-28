import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../supabaseClient'

export default function LoginPage() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard')
    }
  }, [loading, navigate, user])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (loading) {
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.email.trim(),
      password: form.password,
    })

    setIsSubmitting(false)

    if (signInError) {
      setError(signInError.message)
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
              // Access
            </span>
            <h1 className="mt-4 font-inter font-bold text-4xl text-data-white leading-tight">
              Sign In
            </h1>
            <p className="mt-4 text-code-grey leading-relaxed">
              Access your beta dashboard to review your account and payment status.
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
                  placeholder="Enter your password"
                />
              </div>

              {error ? (
                <div className="rounded-lg border border-warning-amber/20 bg-warning-amber/5 px-4 py-3 text-sm text-warning-amber">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-neon px-6 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-void hover:bg-neon/90 transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <p className="mt-6 text-center text-code-grey/60 text-sm">
              Need an account?{' '}
              <Link to="/register" className="text-neon hover:text-neon/80 transition-colors">
                Create one here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
