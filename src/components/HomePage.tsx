import { Hero } from './Hero'
import { PartnersMarquee } from './PartnersMarquee'
import { RwaUseCasesSection } from './RwaUseCasesSection'
import { MarketsSection } from './MarketsSection'
import { StatsSection } from './StatsSection'
import { ContactSection } from './ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
     
      <MarketsSection />
      <RwaUseCasesSection />
      <ContactSection />
    </>
  )
}
