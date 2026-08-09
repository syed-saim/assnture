import { motion } from 'framer-motion'

const marketPillars = [
  {
    title: 'Origination',
    text: 'Structure private market instruments for digital issuance within regulated frameworks.',
  },
  {
    title: 'Distribution',
    text: 'Connect issuers with qualified investors through controlled, compliant channels.',
  },
  {
    title: 'Settlement',
    text: 'Move from delayed settlement cycles to near real-time delivery-versus-payment.',
  },
]

const rwaBenefits = [
  {
    title: 'Fractional ownership',
    text: 'Divide high-value real-world assets into smaller investable units without changing the underlying economic rights.',
  },
  {
    title: 'Operational efficiency',
    text: 'Automate ownership records, distributions, reporting and lifecycle events with programmable workflows.',
  },
  {
    title: 'Greater transparency',
    text: 'Maintain a consistent, auditable trail of entitlements and transfers across the asset lifecycle.',
  },
  {
    title: 'Transferability',
    text: 'Improve the potential for secondary movement where market design and regulation allow.',
  },
  {
    title: 'Broader access',
    text: 'Open private market exposure to a wider qualified investor base through digital rails.',
  },
  {
    title: 'Institutional controls',
    text: 'Preserve eligibility gates, custody-ready processes and compliance oversight throughout.',
  },
]

const videos = [
  {
    id: '7le3N_H6L2k',
    title: 'From real-world assets to digital securities',
    text: 'How RWA tokenization converts tangible assets into programmable investment interests.',
  },
  {
    id: 'y-Xsy6J4xBc',
    title: 'Tokenization in practice',
    text: 'A closer look at how blockchain infrastructure supports property and private market tokenization.',
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
              Digital private markets
            </p>
            <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-4xl md:text-5xl dark:text-neutral-100">
              Private markets, redesigned for the digital age
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-gray-600 dark:text-neutral-300/80">
            ASSNTURE brings private placements on-chain — connecting issuers,
            asset managers and qualified investors through regulated
            infrastructure for origination, distribution and settlement.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {marketPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="rounded-2xl border border-zinc-200/80 bg-white/80 p-7 dark:border-white/10 dark:bg-white/[0.03]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="text-sm font-semibold tracking-widest text-assnture uppercase">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-neutral-100">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="border-y border-zinc-200/70 bg-white/50 py-16 backdrop-blur-sm sm:py-24 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-assnture uppercase">
              RWA tokenization
            </p>
            <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
              Benefits of tokenizing real-world assets
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-neutral-400">
              Tokenization turns ownership rights in funds, real estate, credit
              and other assets into digital securities that can be issued,
              transferred and serviced with greater precision.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rwaBenefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 dark:border-white/10 dark:bg-neutral-950"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                  {benefit.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-assnture uppercase">
            Watch & learn
          </p>
          <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
            From RWA to digital assets — then tokenization
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-neutral-400">
            See how real-world assets become digitally represented securities,
            and how tokenization unlocks more efficient private market
            infrastructure.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-sm dark:border-white/10 dark:bg-neutral-950"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="aspect-video bg-neutral-900">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg leading-7 font-medium text-gray-900 dark:text-neutral-100">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                  {video.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
