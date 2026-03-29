export default function BetaAvailability({
  label = 'Beta Access',
  remaining = '0 / 10',
}) {
  return (
    <div className="premium-card rounded-2xl border border-neon/15 bg-void/70 px-4 py-4 shadow-[0_0_20px_rgba(0,255,136,0.06)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] text-code-grey/60 uppercase tracking-[0.22em]">
          {label}
        </span>
        <span className="inline-flex items-center rounded-full border border-neon/15 bg-neon/5 px-2.5 py-1 font-mono text-[11px] text-data-white">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_rgba(0,255,156,0.5)]" />
          <span className="text-neon font-semibold">{remaining}</span>
          <span className="ml-1.5 text-code-grey/80">spots remaining</span>
        </span>
      </div>
      <p className="mt-3 max-w-[16rem] font-mono text-[11px] leading-relaxed text-code-grey/55">
        Applications are limited during the beta phase.
      </p>
    </div>
  )
}
