import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../lib/AuthContext'

const navLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Beta', to: '/beta' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
    setOpen(false)
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border/50 backdrop-blur-xl bg-void/80">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
            <span className="font-mono text-xs text-neon tracking-wider uppercase">
              Beta Live
            </span>
          </div>
          <span className="hidden sm:block font-mono text-xs text-code-grey">
            BTC/USDT - 1H - Rule-Based Signals
          </span>
        </div>

        <Link
          to="/"
          className="font-inter font-bold text-data-white tracking-tight text-lg absolute left-1/2 -translate-x-1/2"
        >
          tbot<span className="text-neon">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-inter text-xs tracking-wide uppercase transition-colors ${
                  location.pathname === link.to
                    ? 'text-neon'
                    : 'text-code-grey hover:text-data-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`font-inter text-xs tracking-wide uppercase transition-colors ${
                    location.pathname === '/dashboard'
                      ? 'text-neon'
                      : 'text-code-grey hover:text-data-white'
                  }`}
                >
                  Dashboard
                </Link>
                <div className="hidden xl:flex items-center rounded-full border border-card-border px-3 py-1 font-mono text-[11px] text-code-grey/70">
                  {user.email}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center rounded-lg border border-card-border px-4 py-2 font-inter text-xs font-medium uppercase tracking-wide text-code-grey hover:text-data-white hover:border-code-grey/40 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`font-inter text-xs tracking-wide uppercase transition-colors ${
                    location.pathname === '/login'
                      ? 'text-neon'
                      : 'text-code-grey hover:text-data-white'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center rounded-lg border border-neon/40 px-4 py-2 font-inter text-xs font-medium uppercase tracking-wide text-neon hover:bg-neon hover:text-void transition-all duration-300"
                >
                  Join Beta
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-code-grey hover:text-data-white transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-card-border/50 bg-void/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-inter text-sm text-code-grey hover:text-data-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="font-inter text-sm text-code-grey hover:text-data-white transition-colors py-2"
                >
                  Dashboard
                </Link>
                <div className="rounded-lg border border-card-border px-4 py-3 font-mono text-xs text-code-grey/70">
                  {user.email}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 inline-flex items-center justify-center rounded-lg border border-card-border px-4 py-3 font-inter text-sm font-medium uppercase tracking-wide text-code-grey hover:text-data-white hover:border-code-grey/40 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="font-inter text-sm text-code-grey hover:text-data-white transition-colors py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-lg border border-neon/40 px-4 py-3 font-inter text-sm font-medium uppercase tracking-wide text-neon hover:bg-neon hover:text-void transition-all duration-300"
                >
                  Join Beta
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
