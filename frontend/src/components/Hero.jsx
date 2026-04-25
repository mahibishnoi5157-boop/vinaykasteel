import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">Vinayaka Steel & Railing</p>
        <h1 className="hero-title">Premium Steel & Railing Fabrication in Bengaluru</h1>
        <p className="hero-subtitle">
          Stainless steel railings, glass railings, MS fabrication, gates & grills—on-site measurement, fabrication, and clean installation.
        </p>

        <div className="hero-pills" aria-label="Key highlights">
          <span className="hero-pill">On-site measurement</span>
          <span className="hero-pill">Premium finishing</span>
          <span className="hero-pill">Fast turnaround</span>
        </div>

        <div className="hero-cta">
          <a href="tel:9036348560" className="btn btn-primary">
            Call Now: 9036348560
          </a>
          <Link to="/contact" className="btn btn-accent">
            Request a Free Quote
          </Link>
        </div>

        <div className="hero-stats" aria-label="Trust indicators">
          <div className="hero-stat">
            <div className="hero-stat-value">Since 2015</div>
            <div className="hero-stat-label">Experienced team</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">Bengaluru</div>
            <div className="hero-stat-label">Local service</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">SS / MS / Glass</div>
            <div className="hero-stat-label">Material options</div>
          </div>
        </div>
      </div>
    </section>
  )
}
