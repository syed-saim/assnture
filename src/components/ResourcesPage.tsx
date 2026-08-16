import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
    id: 'asset-ready',
    category: 'Tokenization 101',
    title: 'What makes an asset ready for tokenization?',
    text: 'A practical framework for evaluating legal structure, data quality, investor demand and operational readiness.',
    read: '6 min read',
    body: [
      'Not every asset is immediately suitable for tokenization. The strongest candidates combine clear legal rights, reliable data, and a credible path to investor demand.',
      'Start with legal structure. Ownership, cash-flow entitlements and transfer restrictions must be documented in a way that can be represented digitally without creating ambiguity. Assets held through recognised vehicles — such as funds, SPVs or note programmes — are typically easier to digitise than informal or fragmented ownership arrangements.',
      'Data quality matters just as much. Tokenization depends on accurate records of valuations, performance, servicing events and investor entitlements. Incomplete or inconsistent data increases operational risk and weakens confidence among institutional participants.',
      'Finally, assess market readiness. Tokenization creates a digital representation of an asset; it does not automatically create liquidity. Issuers should understand who the target investors are, what eligibility rules apply, and how distribution, custody and settlement will work in practice.',
      'When legal clarity, operational data and investor demand align, tokenization becomes a practical infrastructure upgrade rather than a speculative experiment.',
    ],
  },
  {
    id: 'institutional-path',
    category: 'Market infrastructure',
    title: 'The institutional path to on-chain capital markets',
    text: 'Why regulation, custody and interoperable rails matter as digital securities move beyond early pilots.',
    read: '8 min read',
    body: [
      'Institutional adoption of on-chain capital markets will not be driven by novelty. It will be driven by whether digital rails can meet the same expectations of control, compliance and resilience that traditional market infrastructure already provides.',
      'Regulation is the first gate. Institutions need clarity on issuance, distribution, investor classification and ongoing obligations. Frameworks that support digital securities within recognised financial centres make it possible to move from pilots to production with appropriate governance.',
      'Custody and operational accountability come next. Tokenized assets still require clear responsibility for safekeeping, permissions, corporate actions and investor records. Without those controls, on-chain efficiency gains are unlikely to outweigh institutional risk concerns.',
      'Interoperability is the third pillar. Capital markets involve many participants — issuers, advisors, distributors, custodians, investors and settlement agents. Rails that connect these roles without fragmenting processes are far more valuable than isolated platforms.',
      'The institutional path forward is therefore pragmatic: regulated structures, reliable servicing, and infrastructure designed for multi-party workflows. That is how digital securities move from demonstration projects into durable market practice.',
    ],
  },
  {
    id: 'liquidity',
    category: 'Investor education',
    title: 'Understanding liquidity in tokenized assets',
    text: 'Tokenization can improve transferability, but healthy markets still depend on access, demand and sound design.',
    read: '5 min read',
    body: [
      'Tokenization is often described as a liquidity solution. In reality, it improves the technical ability to transfer ownership — but liquidity still depends on market design, investor access and genuine demand.',
      'A tokenized interest can be easier to record, transfer and service than a traditional paper process. That can reduce friction in secondary movements where regulation and product terms allow. However, if the investor base is narrow, disclosure is limited, or transfer restrictions remain tight, the market will still feel illiquid.',
      'Healthy liquidity usually emerges when three conditions are present: eligible buyers and sellers can participate, pricing information is credible, and operational settlement is reliable. Tokenization supports the third condition strongly and can support the first two when paired with thoughtful distribution and product structuring.',
      'For investors, the important distinction is between transferability and active trading. A tokenized private market instrument may become more operationally flexible without becoming exchange-like. That can still be valuable — especially for portfolio management, servicing efficiency and controlled secondary transfers.',
      'The practical takeaway is simple: treat tokenization as market infrastructure. Liquidity follows when the asset, investor community and operating model are designed for it.',
    ],
  },
  {
    id: 'tokenization-102',
    category: 'Tokenization 102',
    title: 'Types of assets and how tokenization occurs for each',
    text: 'A practical guide to how different real-world asset classes are structured, digitised and issued as tokens.',
    read: '7 min read',
    body: [
      'Tokenization is not a single process applied uniformly to every asset. The method depends on the legal nature of the asset, how cash flows are generated, and which rights investors are meant to receive. Understanding these differences is essential before designing an issuance.',
      'Real estate is typically tokenized through an SPV, fund or note that holds title or economic rights to the property. Tokens usually represent equity or income participation in that vehicle, rather than a direct deed. Valuation schedules, rental distributions and transfer rules must be defined before the digital layer is added.',
      'Private credit and receivables are often structured as claims on repayments from loans, invoices or trade facilities. Tokenization focuses on packaging documented cash-flow rights, eligibility criteria and servicing processes into a digital security that can be allocated to qualified investors.',
      'Funds and portfolio shares map naturally to tokenization because units already represent fractional interests. Digitization can automate subscriber records, capital calls, distributions and secondary transfers while preserving the fund’s constitutional and regulatory framework.',
      'Commodities and inventory-backed instruments require careful custody and title verification. Tokens may represent warehouse receipts, inventory financing interests or commodity-linked claims — always anchored to identifiable underlying assets and approved documentation.',
      'Across all types, the sequence is consistent: define the legal rights, place them in a recognised structure, create a faithful digital representation, then distribute and service that representation through compliant rails. Technology does not replace structuring; it extends it.',
    ],
  },
  {
    id: 'tokenization-103-sukuk',
    category: 'Tokenization 103',
    title: 'Use case: Islamic sukuk tokenization',
    text: 'How tokenized sukuk can modernise Shariah-compliant capital raising while preserving AAOIFI-aligned structures.',
    read: '7 min read',
    body: [
      'Sukuk are among the strongest candidates for institutional tokenization. They already rely on asset-backed or asset-based structures, transparent cash-flow logic and Shariah governance — principles that map cleanly onto digital securities infrastructure.',
      'In a tokenized sukuk use case, the underlying arrangement — such as Ijara, Murabaha or Musharakah — remains the economic and legal foundation. Tokens represent certificate interests in that structure, not a redesign of the Shariah contract itself. The digital layer records ownership, distributions and transfers with greater precision.',
      'Operational benefits are practical. Certificate registers become easier to maintain. Periodic profit distributions can be automated according to predefined rules. Secondary transfers among eligible investors can be controlled through permissioned workflows while remaining aligned with offering terms and Shariah approvals.',
      'For issuers, tokenization can widen access to qualified investors across jurisdictions without changing the need for robust documentation, asset backing and Shariah board oversight. For investors, it can improve transparency around entitlements and settlement timing.',
      'The institutional opportunity is not to create “crypto sukuk,” but to issue Shariah-compliant capital markets instruments on regulated digital rails — with AAOIFI standards, including considerations under SS 62 on tokenization, applied from design through deployment.',
    ],
  },
  {
    id: 'cln-tokenization',
    category: 'Use cases',
    title: 'Use case: Credit linked note tokenization',
    text: 'How tokenized credit linked notes can improve distribution, servicing and settlement for structured credit exposure.',
    read: '6 min read',
    body: [
      'Credit linked notes (CLNs) package credit exposure into a note format that investors can hold as a capital markets instrument. Tokenization does not change the credit thesis; it digitises issuance, ownership and lifecycle management of that note.',
      'In a typical tokenized CLN structure, the note is issued through a recognised vehicle and references a credit risk — such as a loan portfolio, corporate exposure or structured receivable arrangement. Tokens represent note interests with defined coupons or returns linked to the underlying credit performance and documentation.',
      'Where tokenization adds value is in the operating model. Issuers and arrangers can maintain a clearer register of holders, automate coupon and redemption workflows, and support controlled secondary transfers among eligible institutional buyers. Settlement can move closer to delivery-versus-payment standards on compliant rails.',
      'Risk transparency remains essential. Investors still need clarity on reference credit, trigger events, subordination, servicing responsibility and recovery mechanics. Digitization should make those terms easier to administer and audit, not obscure them.',
      'For institutions seeking efficient access to private credit markets, tokenized CLNs offer a path to combine familiar structured-credit economics with modern distribution and settlement infrastructure — provided legal structuring, disclosure and investor eligibility remain rigorous.',
    ],
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
  const [expandedId, setExpandedId] = useState<string | null>(null)

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
            {articles.map((article) => {
              const expanded = expandedId === article.id

              return (
                <article
                  key={article.id}
                  className={`resource-article group rounded-2xl border p-7 transition hover:shadow-xl hover:shadow-zinc-950/5 ${
                    expanded
                      ? 'lg:col-span-3'
                      : 'grid min-h-96 grid-rows-[auto_auto_1fr_auto] hover:-translate-y-1'
                  }`}
                >
                  <div className="mb-6 flex items-center justify-between text-xs sm:mb-10">
                    <span className="font-semibold tracking-wide text-assnture uppercase">
                      {article.category}
                    </span>
                    <span className="text-gray-500 dark:text-neutral-500">
                      {article.read}
                    </span>
                  </div>
                  <h3 className="text-2xl leading-snug font-medium text-gray-900 dark:text-neutral-100">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                    {article.text}
                  </p>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 space-y-4 border-t border-zinc-200/80 pt-6 text-sm leading-7 text-gray-600 dark:border-white/10 dark:text-neutral-300/90">
                          {article.body.map((paragraph) => (
                            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-gray-900 transition-colors group-hover:text-assnture dark:text-neutral-100"
                    aria-expanded={expanded}
                    onClick={() =>
                      setExpandedId((current) =>
                        current === article.id ? null : article.id,
                      )
                    }
                  >
                    {expanded ? 'Show less' : 'Read full article'}
                    <motion.span
                      animate={{ rotate: expanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ArrowIcon />
                    </motion.span>
                  </button>
                </article>
              )
            })}
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
