import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  listings,
  assetClasses,
  statuses,
  type ListingStatus,
} from './data/listings'
import './index.css'

type Theme = 'dark' | 'light'

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('assnture-theme') as Theme | null
    return stored ?? 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('assnture-theme', theme)
  }, [theme])

  return {
    theme,
    toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  }
}

function App() {
  const { theme, toggle } = useTheme()
  const [assetFilter, setAssetFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState<'All' | ListingStatus>('All')
  const [menuOpen, setMenuOpen] = useState(false)

  const filtered = listings.filter((l) => {
    const assetOk = assetFilter === 'All' || l.assetClass === assetFilter
    const statusOk = statusFilter === 'All' || l.status === statusFilter
    return assetOk && statusOk
  })

  return (
    <div className={`page${menuOpen ? ' nav-open' : ''}`}>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <a className="nav-logo" href="/">
          <img
            className="logo-dark"
            src="/logo-dark.svg"
            alt="ASSNTURE Capital"
          />
          <img
            className="logo-light"
            src="/logo-light.svg"
            alt="ASSNTURE Capital"
          />
          <span className="nav-logo-sep" />
          <span className="nav-logo-sub">Capital</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#listings" className="active">
              Listings
            </a>
          </li>
          <li>
            <a href="https://assnture.capital/#features">Services</a>
          </li>
          <li>
            <a href="https://assnture.capital/#about">About</a>
          </li>
          <li>
            <a href="https://assnture.capital/#compliance">Compliance</a>
          </li>
        </ul>

        <div className="nav-cta">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            <span className="tog-track" aria-hidden>
              <span className="tog-thumb" />
            </span>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <a
            className="btn btn-solid"
            href="https://assnture.capital/#contact"
          >
            Submit Enquiry
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-content">
          <motion.div
            className="live-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="live-dot" />
            FSRA Licensing Pending · Q3 2026
          </motion.div>

          <motion.p
            className="brand-mark"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            ASSNTURE
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Capital Market <em>Listings</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            Curated private market opportunities on TBLOCS — connecting
            qualified investors with vetted capital markets transactions across
            the GCC and beyond.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <a className="btn btn-solid btn-lg" href="#listings">
              Browse Listings →
            </a>
            <a
              className="btn btn-ghost btn-lg"
              href="https://tblocs.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit TBLOCS
            </a>
          </motion.div>
        </div>
      </header>

      <section className="listings-section" id="listings">
        <div className="listings-toolbar">
          <div>
            <div className="sec-eyebrow">Private Markets Platform</div>
            <h2 className="sec-title">
              Open <em>Opportunities</em>
            </h2>
          </div>

          <div className="filters">
            <div className="filter-group">
              <span className="filter-label">Asset Class</span>
              <div className="filter-pills" role="group" aria-label="Asset class">
                {assetClasses.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    className={`pill${assetFilter === cls ? ' active' : ''}`}
                    onClick={() => setAssetFilter(cls)}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="filter-label">Status</span>
              <div className="filter-pills" role="group" aria-label="Status">
                {statuses.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`pill${statusFilter === s ? ' active' : ''}`}
                    onClick={() => setStatusFilter(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="result-count">
          {filtered.length.toString().padStart(2, '0')} listings shown
        </p>

        <div className="listings-grid">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                className="empty-state"
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
                  className="listing-card"
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(i * 0.05, 0.25),
                  }}
                >
                  <div className="listing-card-tag">{listing.tag}</div>
                  <h3 className="listing-card-title">{listing.title}</h3>
                  <div className="listing-card-meta">
                    <div className="meta-row">
                      <span className="meta-label">Asset Class</span>
                      <span className="meta-val">{listing.assetClass}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Geography</span>
                      <span className="meta-val">{listing.geography}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Min. Ticket</span>
                      <span className="meta-val">{listing.minTicket}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Status</span>
                      <span
                        className={`meta-val ${
                          listing.status === 'Open'
                            ? 'status-open'
                            : 'status-soon'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </div>
                  </div>
                  <div className="listing-card-footer">
                    <span>View on TBLOCS</span>
                    <span>→</span>
                  </div>
                </motion.a>
              ))
            )}
          </AnimatePresence>
        </div>

        <p className="disclaimer">
          Opportunities shown are illustrative summaries for information
          purposes only. They do not constitute an offer, solicitation, or
          investment advice. Access to investment opportunities on TBLOCS is
          subject to eligibility, KYC/AML completion, and applicable regulatory
          requirements. ASSNTURE Capital is in the process of obtaining its
          Financial Services Permission from the FSRA. It is not yet licensed or
          authorised to provide regulated financial services.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-brand">ASSNTURE Capital</div>
        <div className="footer-meta">
          ADGM · FSRA Licensing Pending · Expected Launch Q3 2026
        </div>
      </footer>
    </div>
  )
}

export default App
