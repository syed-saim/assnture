import { motion } from 'framer-motion'
import { solutionsCapabilityDetails } from '../data/solutionsCapabilities'

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative z-10 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
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
