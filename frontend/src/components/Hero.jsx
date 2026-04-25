import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <h1 className="hero-title">Steel & Railing Fabrication in Bengaluru</h1>
        <p className="hero-subtitle">
          Stainless steel railings, glass railings, MS fabrication, gates & grills—measurement, fabrication, and installation across Bengaluru.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary">
            Request a Free Quote
          </Link>
          <a href="tel:9606079929" className="btn btn-accent">
            Call 9606079929
          </a>
        </div>
      </div>
    </section>
  )
}
