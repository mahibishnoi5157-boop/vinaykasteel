import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About Us' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact Us' }
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="header">
        <div className="header-inner container">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-text">Vinayaka Steel & Railing</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={location.pathname === path ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header-cta">
              <a href="tel:9606079929" className="btn btn-primary">
                Call Now
              </a>
              <Link to="/contact" className="btn btn-outline" onClick={() => setMenuOpen(false)}>
                Request a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <strong>Vinayaka Steel & Railing</strong>
            <p>Steel & railing fabrication in Bengaluru, Karnataka</p>
          </div>
          <div className="footer-contact">
            <p><strong>Contact</strong></p>
            <p>Sunil Kumar</p>
            <a href="tel:9606079929">9606079929</a>
            <a href="mailto:kingking29290@gmail.com">kingking29290@gmail.com</a>
            <a href="https://maps.app.goo.gl/YfwaWc2UHp7464KV6" target="_blank" rel="noopener noreferrer">View on Map</a>
          </div>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Vinayaka Steel & Railing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
