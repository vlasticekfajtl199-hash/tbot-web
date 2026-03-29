import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import LiveBtcPrice from './LiveBtcPrice'

const navLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Support', to: '/support' },
  { label: 'Beta', to: '/beta' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border/50 bg-void/70 backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
            <span className="font-mono text-xs text-neon tracking-wider uppercase">
              Beta Live
            </span>
          </div>
          <LiveBtcPrice />
        </div>

        <Link
          to="/"
          className="font-inter font-bold text-data-white tracking-tight text-xl md:text-[1.35rem] absolute left-1/2 -translate-x-1/2"
        >
          tbot<span className="text-neon">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-inter text-xs tracking-wide uppercase transition-colors ${
                  location.pathname === link.to
                    ? 'text-neon'
                    : 'text-code-grey hover:text-data-white'
                }`}
              >
                <span>{link.label}</span>
                {location.pathname === link.to ? (
                  <span className="absolute -bottom-2 left-1/2 h-px w-full -translate-x-1/2 bg-neon shadow-[0_0_12px_rgba(0,255,156,0.7)]" />
                ) : null}
              </Link>
            ))}

            <Link
              to="/beta"
              className="premium-button inline-flex items-center rounded-xl px-4 py-2 font-inter text-xs font-medium uppercase tracking-wide"
            >
              Join Beta
            </Link>
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

            <Link
              to="/beta"
              onClick={() => setOpen(false)}
              className="premium-button mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 font-inter text-sm font-medium uppercase tracking-wide"
            >
              Join Beta
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
