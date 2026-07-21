import { useTheme } from './hooks/useTheme'
import { GradientBackground } from './components/GradientBackground'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PartnersMarquee } from './components/PartnersMarquee'
import { PlatformShowcase } from './components/PlatformShowcase'
import { SolutionsSection } from './components/SolutionsSection'
import { ListingsSection } from './components/ListingsSection'
import { StatsSection } from './components/StatsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ResourcesPage } from './components/ResourcesPage'
import './index.css'

function App() {
  const { theme, toggle } = useTheme()
  const isResourcesPage = window.location.pathname.replace(/\/$/, '') === '/resources'

  return (
    <div className="relative isolate min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <GradientBackground />
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        {isResourcesPage ? (
          <ResourcesPage />
        ) : (
          <>
            <Hero />
            <PartnersMarquee />
            <PlatformShowcase />
            <SolutionsSection />
            <ListingsSection />
            <StatsSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
