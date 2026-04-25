import ContactForm from '../components/ContactForm'
import './Pages.css'
import './ContactPage.css'

const MAP_LINK = 'https://maps.app.goo.gl/YfwaWc2UHp7464KV6'

export default function Contact() {
  return (
    <div className="page">
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Request a free quote or visit us. We serve Bengaluru and surrounding areas.
          </p>
        </div>
      </section>
      <section className="section contact-page">
        <div className="container contact-layout">
          <div className="contact-form-section">
            <h2>Request a Free Quote</h2>
            <p className="contact-intro">
              Fill in the form and we’ll get back to you shortly. You can also call us directly.
            </p>
            <ContactForm />
          </div>
          <div className="contact-details-section">
            <h2>Vinayaka Steel & Railing</h2>
            <div className="contact-details">
              <p><strong>Contact</strong></p>
              <p>Sunil Kumar</p>
              <p><a href="tel:9606079929">9606079929</a></p>
              <p><a href="mailto:kingking29290@gmail.com">kingking29290@gmail.com</a></p>
              <p><strong>Location</strong></p>
              <p>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </p>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-cta"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
