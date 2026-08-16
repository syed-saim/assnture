import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { Theme } from '../hooks/useTheme'
import { navigation, type NavChild } from '../data/navigation'
import GooeyNav from './GooeyNav/GooeyNav'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

type TopNavItem = {
  label: string
  href: string
  children?: NavChild[]
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function getTopNavItems(): TopNavItem[] {
  return navigation.map((item) => {
    if (item.children) {
      return {
        label: item.label,
        href: item.children[0].href,
        children: item.children,
      }
    }
    return { label: item.label, href: item.href }
  })
}

function resolveActiveIndex(pathname: string, items: TopNavItem[]) {
  if (pathname === '/') return -1

  const exact = items.findIndex(
    (item) =>
      item.href === pathname ||
      item.children?.some((child) => child.href === pathname),
  )
  if (exact >= 0) return exact

  const prefix = items.findIndex(
    (item) =>
      item.children?.some((child) => pathname.startsWith(`${child.href}/`)) ||
      (item.href !== '/' && pathname.startsWith(`${item.href}/`)),
  )
  return prefix >= 0 ? prefix : -1
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const topItems = useMemo(() => getTopNavItems(), [])
  const gooeyItems = useMemo(
    () => topItems.map(({ label, href }) => ({ label, href })),
    [topItems],
  )

  const [menuOpen, setMenuOpen] = useState(false)
  const [openDesktop, setOpenDesktop] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(() =>
    resolveActiveIndex(location.pathname, topItems),
  )
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    setMenuOpen(false)
    setOpenDesktop(null)
    setOpenMobileGroup(null)
    setActiveIndex(resolveActiveIndex(location.pathname, topItems))
  }, [location.pathname, topItems])

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpenDesktop(null), 140)
  }

  useEffect(() => () => clearCloseTimer(), [])

  const openDropdown = (label: string) => {
    clearCloseTimer()
    setOpenDesktop(label)
  }

  const activeChildren =
    openDesktop != null
      ? topItems.find((item) => item.label === openDesktop)?.children
      : undefined

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:py-5">
          <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={theme === 'dark' ? '/logo-color.png' : '/logo-color-light.png'}
                alt="ASSNTURE"
                className="h-7 w-auto sm:h-8"
              />
            </Link>

            <button
              type="button"
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <div
            className="relative hidden justify-self-center lg:block"
            onMouseLeave={scheduleClose}
          >
            <div
              onMouseMove={(e) => {
                const target = (e.target as HTMLElement).closest('a')
                if (!target) return
                const label = target.textContent?.trim()
                const match = topItems.find((item) => item.label === label)
                if (match?.children) openDropdown(match.label)
                else {
                  clearCloseTimer()
                  setOpenDesktop(null)
                }
              }}
            >
              <GooeyNav
                items={gooeyItems}
                theme={theme}
                activeIndex={activeIndex}
                particleCount={12}
                animationTime={500}
                onItemClick={(item, index) => {
                  setActiveIndex(index)
                  const full = topItems[index]
                  if (full.children) openDropdown(full.label)
                  navigate(item.href)
                }}
              />
            </div>

            {activeChildren ? (
              <div
                role="menu"
                className="absolute top-full left-1/2 z-50 mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-xl shadow-zinc-950/10 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/95 dark:shadow-black/40"
                onMouseEnter={clearCloseTimer}
                onMouseLeave={scheduleClose}
              >
                <ul className="flex flex-col gap-0.5">
                  {activeChildren.map((child) => (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        role="menuitem"
                        className="group block rounded-xl px-3.5 py-3 hover:bg-zinc-100 dark:hover:bg-white/5"
                        onClick={() => setOpenDesktop(null)}
                      >
                        <span className="block text-sm font-medium text-gray-900 group-hover:text-assnture dark:text-neutral-100">
                          {child.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-gray-500 dark:text-neutral-400">
                          {child.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <Link
              to={{ pathname: '/', hash: 'contact' }}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-700 dark:bg-assnture dark:hover:bg-assnture-hover"
            >
              Submit Enquiry
            </Link>
          </div>
        </div>

        {menuOpen ? (
          <nav className="border-t border-zinc-200/70 lg:hidden dark:border-white/10">
            <ul className="flex flex-col gap-1 py-4 text-sm">
              {topItems.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-gray-800 dark:text-neutral-100"
                      aria-expanded={openMobileGroup === item.label}
                      onClick={() =>
                        setOpenMobileGroup((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <Chevron open={openMobileGroup === item.label} />
                    </button>
                    {openMobileGroup === item.label ? (
                      <ul className="pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              className="block rounded-lg px-2 py-2.5 text-gray-600 dark:text-neutral-400"
                              onClick={() => setMenuOpen(false)}
                            >
                              <span className="block font-medium text-gray-800 dark:text-neutral-200">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-5">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="block rounded-lg px-2 py-2.5 text-gray-800 dark:text-neutral-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="w-full rounded-lg px-2 py-2.5 text-left text-gray-700/80 dark:text-neutral-300/80"
                >
                  Switch to {theme === 'dark' ? 'light' : 'dark'} mode
                </button>
              </li>
              <li className="pt-2">
                <Link
                  to={{ pathname: '/', hash: 'contact' }}
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-2.5 font-medium text-white dark:bg-assnture"
                  onClick={() => setMenuOpen(false)}
                >
                  Submit Enquiry
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
