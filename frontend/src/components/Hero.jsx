import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <h1 className="hero-title">Bringing Style, Strength, and Safety to Your Space</h1>
        <p className="hero-subtitle">
          Premium steel and railing fabrication in Bengaluru. Custom solutions for homes, 
          commercial spaces, and industrial projects—crafted with precision and care.
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
