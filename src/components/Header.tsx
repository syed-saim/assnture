import { useState } from 'react'
import type { Theme } from '../hooks/useTheme'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

const navLinks = [
  { href: '/#platform', label: 'Platform' },
  { href: '/#listings', label: 'Listings' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#about', label: 'About' },
  { href: '/resources', label: 'Resources' },
]

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:py-5">
          <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
            <a href="/" className="flex items-center gap-3">
              <img
                src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
                alt="ASSNTURE"
                className="h-7 w-auto sm:h-8"
              />
            </a>

            <button
              type="button"
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          </div>

          <nav className="hidden lg:block">
            <ul className="flex gap-8 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700/80 transition-colors duration-150 hover:text-gray-900 dark:text-neutral-300/80 dark:hover:text-neutral-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-700 dark:bg-assnture dark:hover:bg-assnture-hover"
            >
              Submit Enquiry
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-zinc-200/70 py-4 lg:hidden dark:border-white/10">
            <ul className="flex flex-col gap-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700/80 dark:text-neutral-300/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="text-gray-700/80 dark:text-neutral-300/80"
                >
                  Switch to {theme === 'dark' ? 'light' : 'dark'} mode
                </button>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-2.5 font-medium text-white dark:bg-assnture"
                  onClick={() => setMenuOpen(false)}
                >
                  Submit Enquiry
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
