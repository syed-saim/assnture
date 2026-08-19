import { SolutionsSection } from './SolutionsSection'
import { ListingsSection } from './ListingsSection'
import { StatsSection } from './StatsSection'
import { ContactSection } from './ContactSection'
import { PartnersMarquee } from './PartnersMarquee'

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
        {eyebrow}
      </p>
      <h1 className="max-w-3xl text-4xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
        {description}
      </p>
    </section>
  )
}

export function PlatformPage() {
  return (
    <>
      <PageIntro
        eyebrow="Company · Platform"
        title="Digital capital markets infrastructure"
        description="Regulated tokenization, private placement distribution and on-chain settlement — from origination through liquidity management."
      />
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl rounded-3xl border border-zinc-200/80 bg-white/80 p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
            Assnture leverages institutional-grade tokenisation engines and
            regulated marketplaces to accelerate the structuring, issuance and
            secondary distribution of real-world asset (RWA) tokens within a
            fully compliant regulatory framework.
          </p>
        </div>
      </section>
      <PartnersMarquee />
      <ContactSection />
    </>
  )
}

export function ListingsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Company · Listings"
        title="Private market opportunities"
        description="Explore curated listings prepared for qualified investors across emerging digital asset classes."
      />
      <ListingsSection />
      <ContactSection />
    </>
  )
}

export function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Company · Solutions"
        title="How ASSNTURE arranges, advises, issues and distributes"
        description="From structuring through placement, ASSNTURE supports the full journey of bringing capital markets activity on-chain — with regulatory alignment at every step."
      />
      <SolutionsSection />
      <ContactSection />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
          Company · About
        </p>
        <h1 className="max-w-3xl text-4xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
          About ASSNTURE
        </h1>
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
          <p>
            ASSNTURE is a multi-entity group designed to redefine how capital is
            created, distributed, and managed in the digital era. By combining
            regulatory alignment with advanced blockchain infrastructure, we
            deliver scalable solutions for financial institutions, corporates,
            and asset managers.
          </p>
          <p>
            Operating at the intersection of capital markets, financial
            technology, and real-world asset tokenization, our ecosystem enables
            the seamless transition of financial assets from traditional
            structures into blockchain-native, globally accessible instruments.
          </p>
        </div>
      </section>
      <StatsSection />
      <PartnersMarquee />
      <ContactSection />
    </>
  )
}
