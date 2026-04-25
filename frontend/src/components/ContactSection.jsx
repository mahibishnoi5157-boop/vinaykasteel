import { Link } from 'react-router-dom'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Request a free quote or visit us. We serve Bengaluru and surrounding areas.
        </p>
        <div className="contact-section-inner">
          <div className="contact-info-block">
            <h3>Vinayaka Steel & Railing</h3>
            <p><strong>Contact:</strong> Sunil Bishnoi</p>
            <p><a href="tel:9036348560">9036348560</a></p>
            <p><a href="mailto:kingking29290@gmail.com">kingking29290@gmail.com</a></p>
            <p>
              <a href="https://maps.app.goo.gl/YfwaWc2UHp7464KV6" target="_blank" rel="noopener noreferrer">
                View location on Google Maps
              </a>
            </p>
            <Link to="/contact" className="btn btn-primary">Contact Form & Map</Link>
          </div>
          <div className="map-embed-wrap">
            <a
              href="https://maps.app.goo.gl/YfwaWc2UHp7464KV6"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-block"
              aria-label="Open Vinayaka Steel & Railing location in Google Maps"
            >
              <span className="map-link-text">View our location on Google Maps</span>
              <span className="map-link-sub">Bengaluru, Karnataka</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
