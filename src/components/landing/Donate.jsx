import { Heart } from 'lucide-react'
import btcPaymentQr from '@/assets/btc-payment-qr.png'

export default function Donate() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="premium-card rounded-[28px] p-12">
          <div className="w-14 h-14 rounded-xl border border-card-border flex items-center justify-center mx-auto mb-6 bg-void/40">
            <Heart size={22} className="text-neon" />
          </div>

          <span className="font-mono text-xs text-code-grey/40 tracking-widest uppercase">
            // Optional
          </span>
          <h2 className="section-heading mt-4 font-inter font-bold text-3xl">
            Support Development
          </h2>
          <p className="section-copy mt-4 leading-relaxed max-w-lg mx-auto">
            Tbot System is currently self-funded. If you want to support ongoing
            development, infrastructure, and beta operating costs, contributions are
            appreciated but entirely optional.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 items-center max-w-3xl mx-auto">
            <div className="premium-card rounded-2xl p-5 text-left">
              <span className="font-mono text-xs text-code-grey/40 block mb-2 uppercase tracking-widest">
                BTC Address
              </span>
              <code className="font-mono text-sm text-neon break-all select-all cursor-pointer">
                bc1qal7txxd2x8u2w39j2etuleakpsxghhe4kmz0dd
              </code>
            </div>

            <div className="premium-card rounded-2xl p-4 flex flex-col items-center">
              <span className="font-mono text-xs text-code-grey/40 block mb-3 uppercase tracking-widest">
                BTC QR
              </span>
              <img
                src={btcPaymentQr}
                alt="BTC payment QR code"
                className="w-44 h-44 rounded-lg bg-white p-2 object-contain"
              />
            </div>
          </div>

          <p className="mt-6 font-mono text-xs text-code-grey/30">
            Contributions go toward infrastructure and continued development
          </p>
        </div>
      </div>
    </section>
  )
}
