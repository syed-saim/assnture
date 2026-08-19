import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { GradientBackground } from './components/GradientBackground'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage'
import { ResourcesPage } from './components/ResourcesPage'
import { SegmentPage } from './components/SegmentPage'
import { CompliancePage } from './components/CompliancePage'
import { ScrollToTop } from './components/ScrollToTop'
import {
  AboutPage,
  ListingsPage,
  PlatformPage,
  SolutionsPage,
} from './components/CompanyPages'
import { segmentPages } from './data/pages'
import './index.css'

function SegmentRoute({ path }: { path: keyof typeof segmentPages }) {
  const page = segmentPages[path]
  if (!page) return <Navigate to="/" replace />
  return <SegmentPage page={page} />
}

function App() {
  const { theme, toggle } = useTheme()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative isolate min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <GradientBackground />
        <Header theme={theme} onToggleTheme={toggle} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company/platform" element={<PlatformPage />} />
            <Route path="/company/listings" element={<ListingsPage />} />
            <Route path="/company/solutions" element={<SolutionsPage />} />
            <Route path="/company/about" element={<AboutPage />} />
            <Route path="/company/compliance" element={<CompliancePage />} />
            <Route
              path="/institutions/compliance"
              element={<Navigate to="/company/compliance" replace />}
            />
            <Route path="/investors" element={<SegmentRoute path="/investors" />} />
            <Route
              path="/investors/market-access"
              element={<SegmentRoute path="/investors/market-access" />}
            />
            <Route
              path="/investors/get-started"
              element={<SegmentRoute path="/investors/get-started" />}
            />
            <Route
              path="/asset-managers"
              element={<SegmentRoute path="/asset-managers" />}
            />
            <Route
              path="/asset-managers/issuance"
              element={<SegmentRoute path="/asset-managers/issuance" />}
            />
            <Route
              path="/asset-managers/distribution"
              element={<SegmentRoute path="/asset-managers/distribution" />}
            />
            <Route
              path="/institutions"
              element={<SegmentRoute path="/institutions" />}
            />
            <Route
              path="/institutions/infrastructure"
              element={<SegmentRoute path="/institutions/infrastructure" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
