import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <span className="font-inter font-bold text-data-white text-lg">
              tbot<span className="text-neon">.</span>
            </span>
            <p className="mt-2 text-code-grey/50 text-sm max-w-sm leading-relaxed">
              Rule-based BTC trading system currently available through a focused private beta.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            <Link
              to="/"
              className="text-code-grey/50 hover:text-code-grey transition-colors"
            >
              Home
            </Link>
            <Link
              to="/beta"
              className="text-code-grey/50 hover:text-code-grey transition-colors"
            >
              Beta
            </Link>
            <Link
              to="/faq"
              className="text-code-grey/50 hover:text-code-grey transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-code-grey/50 hover:text-code-grey transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border/50">
          <p className="text-code-grey/30 text-xs font-mono leading-relaxed max-w-3xl">
            Disclaimer: Trading cryptocurrencies involves risk, including the risk of
            loss. Past performance does not guarantee future results. Tbot System is
            provided for informational and beta testing purposes only and does not
            constitute financial advice. Users remain fully responsible for their own
            trading decisions and risk management.
          </p>
          <p className="mt-4 text-code-grey/20 text-xs font-mono">
            (c) {new Date().getFullYear()} Tbot System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
