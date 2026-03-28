import { Heart } from 'lucide-react';

export default function Donate() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="monolith-card rounded-lg p-12">
          <div className="w-14 h-14 rounded-lg border border-card-border flex items-center justify-center mx-auto mb-6">
            <Heart size={22} className="text-neon" />
          </div>

          <span className="font-mono text-xs text-code-grey/40 tracking-widest uppercase">
            // Optional
          </span>
          <h2 className="mt-4 font-inter font-bold text-3xl text-data-white">
            Support Development
          </h2>
          <p className="mt-4 text-code-grey leading-relaxed max-w-lg mx-auto">
            Tbot System is currently self-funded. If you want to support ongoing
            development, infrastructure, and beta operating costs, contributions are
            appreciated but entirely optional.
          </p>

          <div className="mt-8 monolith-card rounded-lg p-4 max-w-md mx-auto">
            <span className="font-mono text-xs text-code-grey/40 block mb-2">
              BTC Address
            </span>
            <code className="font-mono text-sm text-neon break-all select-all cursor-pointer">
              bc1qal7txxd2x8u2w39j2etuleakpsxghhe4kmz0dd
            </code>
          </div>

          <p className="mt-6 font-mono text-xs text-code-grey/30">
            Contributions go toward infrastructure and continued development
          </p>
        </div>
      </div>
    </section>
  );
}
