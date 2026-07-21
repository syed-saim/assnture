import { platformCards } from '../data/content'

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative z-10 overflow-hidden dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 py-12 sm:py-16 lg:gap-16 lg:py-24">
          <div className="flex flex-col gap-6 md:flex-row">
            <h2 className="mb-2 max-w-xl text-3xl leading-tight font-medium text-gray-800 sm:text-4xl lg:mb-8 lg:text-6xl xl:text-7xl dark:text-neutral-100">
              Smart finance solutions
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-gray-700/80 lg:mt-4 dark:text-neutral-300/80">
              ASSNTURE is designed for institutions seeking regulated access to
              tokenized capital markets — intelligent placement systems, wealth
              management infrastructure, and strategic investment principles
              that build long-term institutional prosperity.
              <a
                href="#listings"
                className="mt-2 inline-flex items-center font-medium text-gray-800 transition-colors hover:text-gray-600 dark:text-neutral-100 dark:hover:text-neutral-300"
              >
                View listings now
                <span className="ml-2 flex h-4 w-4 items-center justify-center">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>

          <div className="mx-auto mt-4 grid w-full grid-cols-1 justify-items-center gap-5 sm:mt-0 lg:grid-cols-3">
            {platformCards.map((card) => (
              <div
                key={card.title}
                className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-300/70 bg-white/70 p-5 sm:p-8 dark:border-white/10 dark:bg-neutral-950"
              >
                <p className="relative z-10 mb-4 text-2xl font-medium text-gray-900 dark:text-neutral-100">
                  {card.title}
                </p>
                <img
                  alt=""
                  src={card.lightImg}
                  className="mx-auto mt-4 h-64 max-w-full object-contain sm:h-80 dark:hidden"
                />
                <img
                  alt=""
                  src={card.darkImg}
                  className="relative mx-auto mt-4 hidden h-64 max-w-full object-contain sm:h-80 dark:block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
