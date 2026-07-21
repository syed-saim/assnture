import { features } from '../data/content'

const dashLight =
  'https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2001_49_56%20AM.png'
const dashDark =
  'https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2002_54_42%20AM.png'

export function PlatformShowcase() {
  return (
    <section id="platform" className="relative z-10 w-full overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-700 dark:text-neutral-300">
              Digital Capital Infrastructure
            </span>
          </div>
          <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-4xl lg:text-5xl dark:text-neutral-100">
            Start your capital markets journey
          </h2>
          <p className="mt-6 text-lg text-gray-700/80 dark:text-neutral-300/80">
            Empower institutions, corporates, and qualified investors with
            regulated tokenization, private placement distribution, and
            on-chain settlement — from origination through liquidity management.
          </p>
        </div>

        <div className="relative -mx-2 rounded-3xl py-3 sm:-mx-4 sm:p-3 md:-mx-12">
          <div className="perspective-near">
            <div className="rotate-x-6 transform">
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[88/40]">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-white dark:to-neutral-950"
                />
                <img
                  alt="TBLOCS dashboard"
                  src={dashLight}
                  className="h-full w-full rounded-xl object-cover object-left px-2 sm:px-6 dark:hidden"
                />
                <img
                  alt="TBLOCS dashboard"
                  src={dashDark}
                  className="hidden h-full w-full rounded-xl object-cover object-left px-2 sm:px-6 dark:block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center text-gray-800 dark:text-neutral-200">
                  <svg
                    className="h-full w-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-neutral-100">
                  {feature.title}
                </p>
              </div>
              <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
