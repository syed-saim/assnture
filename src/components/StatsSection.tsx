import { companyStats } from '../data/content'

export function StatsSection() {
  return (
    <section id="about" className="relative z-10 py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16">
          <h2 className="mb-6 text-3xl leading-tight font-medium text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-neutral-100">
            Built for institutional scale
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700/80 dark:text-neutral-300/80">
            ASSNTURE combines deep capital markets expertise with cutting-edge
            blockchain infrastructure — delivering regulated, scalable solutions
            across issuance, distribution, and asset management with a presence
            spanning ADGM and Kenya.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-assnture">
          <div className="overflow-hidden rounded-lg border border-zinc-300/70 bg-white px-2 py-2 dark:border-white/20 dark:bg-neutral-950">
            <div className="grid grid-cols-1 gap-10 rounded-lg border border-zinc-300/70 bg-transparent px-4 py-10 text-center text-gray-800 sm:px-8 sm:py-14 md:grid-cols-3 md:gap-16 md:px-12 md:py-20 dark:border-neutral-800 dark:text-gray-100">
              {companyStats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-3 flex items-center justify-center text-5xl font-medium sm:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center text-lg">
                    <div className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400">
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
                          d={stat.icon}
                        />
                      </svg>
                    </div>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
