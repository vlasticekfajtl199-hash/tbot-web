import { useState, useEffect } from 'react';

const logEntries = [
  { time: '14:00:01', type: 'system', text: '[tbot] Engine initialized - BTC/USDT 1H' },
  { time: '14:00:02', type: 'system', text: '[tbot] Fetching candle data...' },
  { time: '14:00:03', type: 'info', text: '[analysis] EMA: 67234.50 | RSI: 42.3' },
  { time: '14:00:03', type: 'info', text: '[analysis] Checking breakout conditions...' },
  { time: '14:00:05', type: 'success', text: '[signal] Valid long setup confirmed' },
  { time: '14:00:06', type: 'warning', text: '[risk] Entry 67312.00 | SL 66890.00 | TP 68150.00' },
  { time: '14:00:06', type: 'info', text: '[risk] Planned risk allocation within defined limits' },
  { time: '14:00:07', type: 'system', text: '[notify] Telegram beta alert sent' },
  { time: '14:00:07', type: 'system', text: '[tbot] Signal recorded in trade log' },
  { time: '15:00:01', type: 'info', text: '[monitor] Price 67580.00 | Setup active' },
  { time: '16:00:01', type: 'info', text: '[monitor] Price 67890.00 | Signal progress reviewed' },
  { time: '17:00:01', type: 'success', text: '[result] Target reached - setup closed' },
  { time: '17:00:02', type: 'success', text: '[result] Recorded outcome: +1.25% | R:R 1.82' },
  { time: '17:00:03', type: 'system', text: '[tbot] Daily report queued for beta summary' },
  { time: '17:00:04', type: 'system', text: '[tbot] Waiting for next candle...' },
  { time: '18:00:01', type: 'system', text: '[tbot] Scanning new candle data...' },
  { time: '18:00:02', type: 'info', text: '[analysis] EMA: 67456.20 | RSI: 55.1' },
  { time: '18:00:03', type: 'info', text: '[analysis] No signal - conditions not met' },
  { time: '18:00:03', type: 'system', text: '[tbot] Standing by...' },
];

const typeColors = {
  system: 'text-code-grey/50',
  info: 'text-code-grey',
  success: 'text-neon',
  warning: 'text-warning-amber',
};

export default function LiveLog() {
  const [visibleLines, setVisibleLines] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= logEntries.length) return 5;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            // Terminal Output
          </span>
          <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
            Live Log
          </h2>
          <p className="mt-4 text-code-grey max-w-2xl text-lg leading-relaxed">
            A sample view of how the system processes data, validates setups, and
            records beta outputs in a monitored environment.
          </p>
        </div>

        <div className="monolith-card rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-void/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-xs text-code-grey/40">
              tbot@vps:~$ python tbot.py --beta
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon live-pulse" />
              <span className="font-mono text-xs text-neon/60">RUNNING</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm max-h-96 overflow-hidden">
            <div className="space-y-1.5">
              {logEntries.slice(0, visibleLines).map((entry, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${typeColors[entry.type]} ${
                    i === visibleLines - 1 ? 'fade-in-up' : ''
                  }`}
                >
                  <span className="text-code-grey/30 shrink-0">{entry.time}</span>
                  <span>{entry.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 text-neon/60 mt-2">
                <span>|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
