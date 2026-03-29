import { useEffect, useState } from 'react'

const BTC_PRICE_ENDPOINT = 'https://api.coinbase.com/v2/prices/BTC-USD/spot'
const REFRESH_INTERVAL_MS = 30000

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function LiveBtcPrice() {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    let isActive = true

    const fetchPrice = async () => {
      try {
        const response = await fetch(BTC_PRICE_ENDPOINT)

        if (!response.ok) {
          throw new Error(`BTC price request failed with ${response.status}`)
        }

        const payload = await response.json()
        const nextPrice = Number(payload?.data?.amount)

        if (!Number.isFinite(nextPrice)) {
          throw new Error('BTC price payload did not include a valid amount')
        }

        if (isActive) {
          setPrice(nextPrice)
        }
      } catch (error) {
        console.error('Failed to fetch live BTC price:', error)
      }
    }

    fetchPrice()
    const intervalId = window.setInterval(fetchPrice, REFRESH_INTERVAL_MS)

    return () => {
      isActive = false
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="hidden sm:flex items-center gap-2 rounded-full border border-card-border/80 bg-white/[0.03] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
      <div className="h-2 w-2 rounded-full bg-neon live-pulse shadow-[0_0_10px_rgba(0,255,156,0.45)]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-code-grey/60">
        BTC Live
      </span>
      <span className="font-mono text-xs text-slate-200">
        {price ? formatPrice(price) : '--'}
      </span>
      <span className="font-mono text-[11px] text-code-grey/50">
        1H
      </span>
    </div>
  )
}
