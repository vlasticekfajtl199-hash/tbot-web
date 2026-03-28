import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import PageNotFound from './lib/PageNotFound'
import Home from './pages/Home'
import FAQPage from './pages/FAQ'
import ContactPage from './pages/Contact'
import BetaPage from './pages/Beta'
import BetaSuccess from './pages/BetaSuccess'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import { AuthProvider, useAuth } from './lib/AuthContext'

function AuthGate({ children }) {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-void">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    )
  }

  return children
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/beta" element={<BetaPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/beta-success" element={<BetaSuccess />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AuthProvider>
          <AuthGate>
            <AppRoutes />
          </AuthGate>
        </AuthProvider>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
