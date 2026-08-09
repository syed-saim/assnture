export function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-zinc-200/70 bg-white py-12 dark:border-white/10 dark:bg-neutral-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <img
            src="/logo-color-light.png"
            alt="ASSNTURE"
            className="mb-3 h-7 w-auto dark:hidden"
          />
          <img
            src="/logo-color.png"
            alt="ASSNTURE"
            className="mb-3 hidden h-7 w-auto dark:block"
          />
          <p className="max-w-sm text-sm text-gray-600 dark:text-neutral-400">
            Bringing capital markets on-chain — securely and at scale.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href="mailto:hello@assnture.com"
            className="text-sm font-medium text-gray-800 hover:text-assnture dark:text-neutral-200 dark:hover:text-assnture"
          >
            hello@assnture.com
          </a>
          <p className="text-base text-gray-500 dark:text-neutral-500">
            Expected Launch Q3 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
