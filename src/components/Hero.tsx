import { motion } from 'framer-motion'
import { heroStats } from '../data/content'

const heroLight =
  'https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2001_49_56%20AM.png'
const heroDark =
  'https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2002_54_42%20AM.png'

export function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
      <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="space-y-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-700 dark:text-neutral-300">
                Regulated Capital Markets
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-medium text-gray-900 lg:text-6xl dark:text-neutral-100">
              Bringing Capital Markets On-Chain
            </h1>
            <p className="max-w-lg text-lg text-gray-700/80 dark:text-neutral-300/80">
              ASSNTURE is a next-generation financial and technology group
              converging traditional finance with decentralized systems through
              regulated infrastructure, tokenization, and digital asset
              innovation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <a
              href="#listings"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-neutral-900 px-8 py-3 font-medium text-neutral-100 transition-colors hover:bg-neutral-700 dark:bg-assnture dark:hover:bg-assnture-hover"
            >
              Browse Listings
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300/70 bg-white/70 px-8 py-3 font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/10"
            >
              Explore Platform
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-gray-900 dark:text-neutral-100">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 z-10 bg-linear-to-t from-white/50 to-transparent dark:from-neutral-950/50" />
          <div className="relative overflow-hidden rounded-2xl">
            <img
              alt="ASSNTURE platform dashboard"
              src={heroLight}
              className="w-full rounded-2xl border border-black/10 shadow-2xl dark:hidden"
            />
            <img
              alt="ASSNTURE platform dashboard"
              src={heroDark}
              className="hidden w-full rounded-2xl border border-white/15 shadow-2xl dark:block"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg border border-zinc-300/70 bg-white p-4 shadow-lg dark:border-white/20 dark:bg-neutral-900">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-neutral-100">
                  Placement Complete
                </div>
                <div className="text-xs text-gray-700/80 dark:text-neutral-300/80">
                  GCC Infrastructure Debt Fund II
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 rounded-lg border border-zinc-300/70 bg-white p-4 shadow-lg dark:border-white/20 dark:bg-neutral-900">
            <div className="mb-1 text-xs text-gray-700/80 dark:text-neutral-300/80">
              TBLOCS AUM Growth
            </div>
            <div className="text-lg font-semibold text-green-600">+18%</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
