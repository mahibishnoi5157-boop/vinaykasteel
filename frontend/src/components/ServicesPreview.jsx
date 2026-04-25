import { Link } from 'react-router-dom'
import './ServicesPreview.css'

const services = [
  {
    title: 'Stainless Steel Railings',
    short: 'Durable, modern railings for balconies and staircases.',
    icon: '🔩'
  },
  {
    title: 'Glass Railings',
    short: 'Sleek toughened glass with minimal frames.',
    icon: '🪟'
  },
  {
    title: 'Mild Steel (MS) Fabrication',
    short: 'Cost-effective, versatile with various finishes.',
    icon: '⚙️'
  },
  {
    title: 'CNC Laser Cutting',
    short: 'Precision custom designs and intricate patterns.',
    icon: '✂️'
  },
  {
    title: 'Gates & Grills',
    short: 'Security and aesthetic appeal for entrances.',
    icon: '🚪'
  }
]

export default function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">
        <h2 className="section-title">What We Fabricate</h2>
        <p className="section-subtitle">
          From residential balconies to commercial projects, we deliver strong fabrication and clean installation with premium finishing.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          <a href="tel:9036348560" className="btn btn-outline">Call for Quick Quote</a>
        </div>
      </div>
    </section>
  )
}
