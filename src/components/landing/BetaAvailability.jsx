export default function BetaAvailability() {
  return (
    <div className="monolith-card rounded-lg border border-neon/20 bg-void/60 px-4 py-4 shadow-[0_0_20px_rgba(0,255,136,0.06)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-code-grey/60 uppercase tracking-widest">
          Beta Access
        </span>
        <span className="font-mono text-sm text-data-white">
          <span className="text-neon font-semibold">0 / 10</span> spots remaining
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-code-grey/50">
        Applications are limited during the beta phase.
      </p>
    </div>
  );
}
