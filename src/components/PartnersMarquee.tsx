import { partners } from '../data/content'

export function PartnersMarquee() {
  const items = [...partners, ...partners]

  return (
    <section className="relative bg-white pb-4 dark:bg-neutral-950">
      <div className="group relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:border-black/10 md:pr-6 dark:md:border-white/15">
            <p className="text-center text-sm text-gray-600 md:text-end dark:text-neutral-400">
              Trusted infrastructure partners
            </p>
          </div>
          <div className="relative w-full overflow-hidden py-5 md:w-[calc(100%-11rem)] md:py-6">
            <div className="animate-scroll flex flex-row flex-nowrap items-center gap-x-10 sm:gap-x-16">
              {items.map((name, i) => (
                <div key={`${name}-${i}`} className="flex shrink-0">
                  <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-neutral-400">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-neutral-950" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-neutral-950" />
          </div>
        </div>
      </div>
    </section>
  )
}
