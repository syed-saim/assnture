import { motion } from 'framer-motion'
import { ContactSection } from './ContactSection'

const principles = [
  {
    title: 'No Riba',
    text: 'Zero interest-bearing instruments. All returns structured as profit on trade or leasing income in accordance with AAOIFI standards.',
  },
  {
    title: 'No Gharar',
    text: 'Smart contracts eliminate ambiguity. All transaction terms are fixed, transparent, and immutably recorded on-chain prior to execution.',
  },
  {
    title: 'Asset-Backed',
    text: 'All transactions are anchored to underlying tangible assets or AAOIFI-approved commodities — no speculative instruments.',
  },
  {
    title: 'AAOIFI Aligned',
    text: 'All digital instruments and tokenized structures are fully compliant with AAOIFI Shariah Standards, including SS 62 on tokenization.',
  },
]

const credentials = [
  'PhD in Islamic Jurisprudence — Umm Al Qura University, Makkah',
  'Member, Grand Islamic Scholars Body, Dubai',
  'Head, Fatwa Committee of Zakat Funds, UAE',
  'Shariah Board Member — multiple GCC Islamic financial institutions',
  'Professor of Islamic Jurisprudence — UAE University, Al Ain',
  'Author of multiple published works on modern Islamic finance',
]

function DiamondIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rotate-45 bg-assnture"
    />
  )
}

export function CompliancePage() {
  return (
    <div className="relative z-10">
      <section className="border-b border-zinc-200/70 py-16 sm:py-20 lg:py-28 dark:border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center rounded border border-assnture/70 px-3 py-1.5">
              <p className="text-xs font-semibold tracking-[0.18em] text-assnture uppercase">
                — Shariah Expertise
              </p>
            </div>

            <h1 className="text-4xl leading-[1.05] font-medium tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
              COMPLIANCE BY{' '}
              <span className="font-serif font-normal text-assnture italic">
                Architecture.
              </span>
            </h1>

            <p className="mt-7 text-base leading-7 text-gray-600 sm:text-lg dark:text-neutral-300/85">
              ASSNTURE&apos;s platforms are Shariah-compliant by design — not by
              adaptation. Every instrument type, transaction flow, and settlement
              mechanism is structured under the direct supervision of our Chief
              Shariah Advisor, ensuring every product and process meets the
              highest standards of Islamic jurisprudence before reaching the
              market.
            </p>

            <ul className="mt-10 divide-y divide-zinc-200/80 dark:divide-white/10">
              {principles.map((item) => (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <DiamondIcon />
                  <div>
                    <p className="text-sm font-semibold tracking-[0.14em] text-gray-900 uppercase dark:text-neutral-100">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:pt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-assnture uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-assnture" />
              Chief Shariah Advisor
            </p>

            <h2 className="text-2xl leading-snug font-medium text-gray-900 sm:text-3xl dark:text-neutral-100">
              Dr. Mohammed Abdul Rahim Sultan Al Olama
            </h2>
            <p className="mt-3 font-serif text-base text-assnture italic sm:text-lg">
              Professor of Islamic Jurisprudence — UAE University, Al Ain
            </p>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-[15px] dark:text-neutral-300/85">
              <p>
                Dr. Mohammed Al Olama is one of the most distinguished Islamic
                jurisprudence scholars in the GCC and a globally recognised
                authority in Islamic finance. He serves as Professor of Islamic
                Jurisprudence at UAE University in Al Ain, where he also chaired
                the Basic Islamic Studies Department and served as Assistant Dean
                for Research Affairs — bringing over 17 years of academic
                leadership and more than 20 published Islamic studies courses to
                his advisory role at ASSNTURE.
              </p>
              <p>
                Dr. Al Olama is a member of the Grand Islamic Scholars Body in
                Dubai, head of the Fatwa Committee of Zakat Funds in the UAE, and
                sits on the Shariah supervisory boards of multiple leading Islamic
                financial institutions and Takaful companies across the region. He
                holds a Bachelor&apos;s degree in Shariah from the Islamic
                University of Madinah, and a Master&apos;s degree and PhD in
                Islamic Jurisprudence from Umm Al Qura University in Makkah.
              </p>
              <p>
                In his capacity as Chief Shariah Advisor to ASSNTURE, Dr. Al Olama
                provides direct oversight of all platform instruments, transaction
                structures, and digital asset flows — ensuring every product, from
                Commodity Murabaha on TRADEDESK to tokenized treasury instruments
                on TBLOCS, carries full Shariah certification before deployment.
              </p>
            </div>

            <ul className="mt-8 divide-y divide-zinc-200/80 font-mono text-xs leading-5 text-gray-700 sm:text-[13px] dark:divide-white/10 dark:text-neutral-300">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 py-3.5 first:pt-0 last:pb-0">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-assnture" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
