import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Structure',
    text: 'A real-world asset is placed within a legally recognised investment vehicle.',
    icon: 'M4 19V9l8-4 8 4v10M2 19h20M8 19v-6h8v6',
  },
  {
    number: '02',
    title: 'Digitise',
    text: 'Ownership rights are represented as programmable tokens on secure infrastructure.',
    icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18m8-13.5-8 4.5-8-4.5',
  },
  {
    number: '03',
    title: 'Distribute',
    text: 'Eligible investors access fractional interests through compliant digital channels.',
    icon: 'M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 21v-2.5a6.5 6.5 0 0 1 13 0V21M3 10l-2 2 2 2m18-4 2 2-2 2',
  },
  {
    number: '04',
    title: 'Service',
    text: 'Smart workflows streamline reporting, distributions and secondary transfers.',
    icon: 'M4 7h16M7 3v4m10-4v4M5 11h5v4H5zm9 0h5v4h-5zM5 19h14',
  },
]

const benefits = [
  ['Fractional access', 'Broaden participation by dividing high-value assets into smaller investable units.'],
  ['Operational efficiency', 'Automate ownership records, distributions and lifecycle events.'],
  ['Greater transparency', 'Create a consistent, auditable record of transactions and entitlements.'],
]

const articles = [
  {
    category: 'Tokenization 101',
    title: 'What makes an asset ready for tokenization?',
    text: 'A practical framework for evaluating legal structure, data quality, investor demand and operational readiness.',
    read: '6 min read',
  },
  {
    category: 'Market infrastructure',
    title: 'The institutional path to on-chain capital markets',
    text: 'Why regulation, custody and interoperable rails matter as digital securities move beyond early pilots.',
    read: '8 min read',
  },
  {
    category: 'Investor education',
    title: 'Understanding liquidity in tokenized assets',
    text: 'Tokenization can improve transferability, but healthy markets still depend on access, demand and sound design.',
    read: '5 min read',
  },
]

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

export function ResourcesPage() {
  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">Knowledge centre</p>
          <h1 className="text-4xl leading-[1.08] font-medium text-gray-900 sm:text-5xl lg:text-7xl dark:text-neutral-100">
            Understand the future of capital markets
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
            Clear, practical perspectives on tokenization, digital assets and the infrastructure bringing regulated markets on-chain.
          </p>
        </motion.div>
      </section>

      <section className="resources-infographic border-y border-zinc-200/70 py-20 backdrop-blur-sm sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-assnture uppercase">Infographic</p>
            <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">How tokenization works</h2>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">From a conventional asset to a programmable investment, in four connected stages.</p>
          </div>

          <div className="resource-steps relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-16 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-assnture/50 to-transparent lg:block" />
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                className="resource-step-card relative rounded-2xl border p-6 shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-assnture text-white shadow-lg shadow-orange-500/20">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-zinc-300 dark:text-neutral-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">{step.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="resource-benefits mt-8 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3">
            {benefits.map(([title, text]) => (
              <div key={title} className="resource-benefit p-6">
                <p className="font-semibold text-gray-900 dark:text-neutral-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-assnture uppercase">Watch & learn</p>
            <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">Tokenization, explained</h2>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-neutral-400">Selected conversations on real-world assets, market infrastructure and the practical realities of adoption.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ['7le3N_H6L2k', 'Unlocking liquidity through real estate tokenization'],
            ['y-Xsy6J4xBc', 'Blockchain and tokenization in property markets'],
          ].map(([id, title]) => (
            <article key={id} className="resource-video-card overflow-hidden rounded-2xl border shadow-sm">
              <div className="aspect-video bg-neutral-900">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3 className="min-h-20 p-5 text-lg leading-7 font-medium text-gray-900 dark:text-neutral-100">{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-blog border-t py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-assnture uppercase">Insights</p>
              <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">From the blog</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="resource-article group grid min-h-96 grid-rows-[auto_auto_1fr_auto] rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/5">
                <div className="mb-10 flex items-center justify-between text-xs">
                  <span className="font-semibold tracking-wide text-assnture uppercase">{article.category}</span>
                  <span className="text-gray-500 dark:text-neutral-500">{article.read}</span>
                </div>
                <h3 className="text-2xl leading-snug font-medium text-gray-900 dark:text-neutral-100">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-neutral-400">{article.text}</p>
                <a href={`mailto:info@assnture.com?subject=${encodeURIComponent(article.title)}`} className="flex items-center gap-2 pt-8 text-sm font-semibold text-gray-900 transition-colors group-hover:text-assnture dark:text-neutral-100">
                  Request article <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="resources-cta overflow-hidden rounded-3xl p-6 text-white shadow-xl sm:p-12">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-widest text-orange-300 uppercase dark:text-white/70">Stay informed</p>
            <h2 className="mt-3 max-w-2xl text-2xl leading-tight font-medium sm:text-4xl">Get institutional tokenization insights from ASSNTURE.</h2>
          </div>
          <a href="mailto:info@assnture.com?subject=Subscribe%20to%20ASSNTURE%20insights" className="resources-cta-button inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-neutral-900 transition">
            Join the mailing list <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
