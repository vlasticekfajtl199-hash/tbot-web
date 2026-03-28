import { useEffect, useState } from 'react';

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatUtcTimestamp(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
}

function generatePreviewSignal() {
  const direction = Math.random() > 0.5 ? 'LONG' : 'SHORT';
  const entry = Math.floor(Math.random() * 30001) + 60000;
  const riskDistance = Math.floor(Math.random() * 901) + 400;
  const rewardDistance = Math.floor(Math.random() * 1601) + 1200;

  const stopLoss = direction === 'LONG' ? entry - riskDistance : entry + riskDistance;
  const takeProfit = direction === 'LONG' ? entry + rewardDistance : entry - rewardDistance;

  return {
    symbol: 'BTCUSDT',
    timeframe: '1H',
    direction,
    entry: formatPrice(entry),
    stopLoss: formatPrice(stopLoss),
    takeProfit: formatPrice(takeProfit),
    status: 'ACTIVE',
    risk: '1%',
    timestamp: formatUtcTimestamp(new Date()),
  };
}

export default function SignalPreview() {
  const [signal, setSignal] = useState(() => generatePreviewSignal());

  useEffect(() => {
    setSignal(generatePreviewSignal());
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Signal Output
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Signal Preview
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed mx-auto">
            Example of a demo signal format
          </p>
        </div>

        <div className="monolith-card rounded-lg overflow-hidden border border-neon/20 shadow-[0_0_30px_rgba(0,255,136,0.08)]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-void/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-neon tracking-widest uppercase border border-neon/30 rounded-full px-3 py-1 bg-neon/5">
                Demo Preview
              </span>
              <span className="font-mono text-xs text-code-grey/40">
                signal_preview.log
              </span>
            </div>
          </div>

          <div className="p-8 font-mono text-sm sm:text-base leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-data-white">{signal.symbol}</div>
                <div className="text-code-grey mt-1">
                  TIMEFRAME: <span className="text-neon">{signal.timeframe}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSignal(generatePreviewSignal())}
                className="inline-flex items-center justify-center rounded-lg border border-neon/30 px-4 py-2 text-xs font-inter font-medium uppercase tracking-wide text-neon hover:bg-neon hover:text-void transition-all duration-300"
              >
                Generate Preview
              </button>
            </div>

            <div className="mt-6 space-y-2 text-code-grey">
              <div>
                DIRECTION: <span className="text-neon">{signal.direction}</span>
              </div>
              <div>
                ENTRY: <span className="text-neon">{signal.entry}</span>
              </div>
              <div>
                STOP LOSS: <span className="text-neon">{signal.stopLoss}</span>
              </div>
              <div>
                TAKE PROFIT: <span className="text-neon">{signal.takeProfit}</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-code-grey">
              <div>
                STATUS: <span className="text-neon">{signal.status}</span>
              </div>
              <div>
                RISK: <span className="text-neon">{signal.risk}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-card-border text-code-grey">
              TIMESTAMP: <span className="text-neon">{signal.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
