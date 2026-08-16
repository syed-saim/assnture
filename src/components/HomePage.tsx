import { Hero } from './Hero'
import { PartnersMarquee } from './PartnersMarquee'
import { RwaUseCasesSection } from './RwaUseCasesSection'
import { MarketsSection } from './MarketsSection'
import { ContactSection } from './ContactSection'
import { StatsSection } from './StatsSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <StatsSection />
      <MarketsSection />
      <RwaUseCasesSection />
      <ContactSection />
    </>
  )
}
