import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { queryClientInstance } from '@/lib/query-client'
import PageNotFound from './lib/PageNotFound'
import Home from './pages/Home'
import FAQPage from './pages/FAQ'
import ContactPage from './pages/Contact'
import BetaPage from './pages/Beta'
import BetaSuccess from './pages/BetaSuccess'
import RoadmapPage from './pages/RoadmapPage'
import SupportPage from './pages/Support'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/beta" element={<BetaPage />} />
      <Route path="/beta-success" element={<BetaSuccess />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  )
}

export default App
