import { motion } from 'framer-motion'
import ChromaGrid from './ChromaGrid/ChromaGrid'
import {
  solutionsCapabilities,
  solutionsCapabilityDetails,
} from '../data/solutionsCapabilities'

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative z-10 overflow-hidden pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
            End-to-end capabilities
          </p>
          <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
            How ASSNTURE arranges, advises, issues and distributes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-neutral-400">
            From structuring through placement, ASSNTURE supports the full
            journey of bringing capital markets activity on-chain — with
            regulatory alignment at every step.
          </p>
        </div>

        <div className="mb-6 min-h-[520px] rounded-3xl border border-zinc-200/70 bg-neutral-950/95 p-4 sm:p-6 dark:border-white/10">
          <ChromaGrid items={solutionsCapabilities} radius={260} className="py-2" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutionsCapabilityDetails.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-200/80 bg-white/80 p-6 sm:p-7 dark:border-white/10 dark:bg-white/[0.03]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
