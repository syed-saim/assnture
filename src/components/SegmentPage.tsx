import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { SegmentPage as SegmentPageData } from '../data/pages'
import { ContactSection } from './ContactSection'
import { RwaUseCasesSection } from './RwaUseCasesSection'

type SegmentPageProps = {
  page: SegmentPageData
}

export function SegmentPage({ page }: SegmentPageProps) {
  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl leading-[1.08] font-medium text-gray-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
            {page.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
            {page.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-assnture dark:hover:bg-assnture-hover"
            >
              {page.ctaLabel ?? 'Submit Enquiry'}
            </a>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300/70 bg-white/70 px-6 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/10"
            >
              Explore resources
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-zinc-200/70 bg-white/50 py-16 backdrop-blur-sm sm:py-24 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {page.highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-200/80 bg-white/90 p-7 dark:border-white/10 dark:bg-neutral-950"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {page.showRwaUseCases ? <RwaUseCasesSection /> : null}

      <ContactSection />
    </div>
  )
}
