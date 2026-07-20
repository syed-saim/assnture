import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  listings,
  assetClasses,
  statuses,
  type ListingStatus,
} from '../data/listings'

export function ListingsSection() {
  const [assetFilter, setAssetFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState<'All' | ListingStatus>(
    'All',
  )

  const filtered = listings.filter((l) => {
    const assetOk = assetFilter === 'All' || l.assetClass === assetFilter
    const statusOk = statusFilter === 'All' || l.status === statusFilter
    return assetOk && statusOk
  })

  return (
    <section
      id="listings"
      className="relative z-10 py-16 md:py-32 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10">
              <span className="h-2 w-2 rounded-full bg-assnture" />
              <span className="text-gray-700 dark:text-neutral-300">
                Private Markets Platform
              </span>
            </div>
            <h2 className="text-4xl font-medium text-gray-900 md:text-5xl dark:text-neutral-100">
              Capital Market Listings
            </h2>
            <p className="mt-4 text-lg text-gray-700/80 dark:text-neutral-300/80">
              Curated private market opportunities on TBLOCS — connecting
              qualified investors with vetted transactions across the GCC and
              beyond.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <span className="mb-2 block text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-neutral-400">
                Asset Class
              </span>
              <div className="flex flex-wrap gap-2">
                {assetClasses.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setAssetFilter(cls)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      assetFilter === cls
                        ? 'border-assnture bg-assnture/10 text-assnture'
                        : 'border-zinc-300/70 text-gray-600 hover:border-zinc-400 dark:border-white/20 dark:text-neutral-400 dark:hover:border-white/40'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 block text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-neutral-400">
                Status
              </span>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatusFilter(s)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      statusFilter === s
                        ? 'border-assnture bg-assnture/10 text-assnture'
                        : 'border-zinc-300/70 text-gray-600 hover:border-zinc-400 dark:border-white/20 dark:text-neutral-400 dark:hover:border-white/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-500 dark:text-neutral-400">
          {filtered.length.toString().padStart(2, '0')} listings shown
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                className="col-span-full rounded-2xl border border-zinc-300/70 bg-white/70 p-12 text-center text-gray-600 dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No listings match the selected filters.
              </motion.div>
            ) : (
              filtered.map((listing, i) => (
                <motion.a
                  key={listing.id}
                  href={listing.href}
                  target="_blank"
                  rel="noreferrer"
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
                  className="group flex flex-col rounded-2xl border border-zinc-300/70 bg-white/70 p-6 transition-all hover:border-assnture/40 hover:shadow-lg sm:p-8 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-assnture/40"
                >
                  <span className="mb-3 text-xs font-medium tracking-wider text-assnture uppercase">
                    {listing.tag}
                  </span>
                  <h3 className="mb-6 flex-1 text-xl font-medium text-gray-900 dark:text-neutral-100">
                    {listing.title}
                  </h3>
                  <dl className="space-y-2 border-t border-zinc-200/70 pt-4 dark:border-white/10">
                    {[
                      ['Asset Class', listing.assetClass],
                      ['Geography', listing.geography],
                      ['Min. Ticket', listing.minTicket],
                      [
                        'Status',
                        listing.status,
                        listing.status === 'Open'
                          ? 'text-assnture'
                          : 'text-gray-500 dark:text-neutral-400',
                      ],
                    ].map(([label, value, cls]) => (
                      <div
                        key={label}
                        className="flex justify-between gap-4 text-sm"
                      >
                        <dt className="text-gray-500 dark:text-neutral-400">
                          {label}
                        </dt>
                        <dd
                          className={`font-medium text-gray-900 dark:text-neutral-100 ${cls ?? ''}`}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-200/70 pt-4 text-sm font-medium text-assnture dark:border-white/10">
                    <span>View on TBLOCS</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </motion.a>
              ))
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
          Opportunities shown are illustrative summaries for information
          purposes only. They do not constitute an offer, solicitation, or
          investment advice. ASSNTURE is in the process of obtaining its
          Financial Services Permission from the FSRA and is not yet licensed
          to provide regulated financial services.
        </p>
      </div>
    </section>
  )
}
