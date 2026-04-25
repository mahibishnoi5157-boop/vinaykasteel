import { Link } from 'react-router-dom'
import './LocalTrustSection.css'

const highlights = [
  {
    title: 'Trusted Local Fabricators',
    desc: 'Bengaluru-based team focused on safety, finish, and long-lasting installations.'
  },
  {
    title: 'On-Site Measurement',
    desc: 'Accurate measurements and clear quotation before we start the work.'
  },
  {
    title: 'Clean Installation',
    desc: 'We keep your site clean and deliver a smooth handover.'
  },
  {
    title: 'Fast Turnaround',
    desc: 'Reliable timelines for balconies, staircases, gates, and custom fabrication.'
  }
]

const faqs = [
  {
    q: 'Do you provide railing fabrication and installation in Bengaluru?',
    a: 'Yes. We fabricate and install balcony railings, staircase railings, glass railings, and gates across Bengaluru and nearby areas.'
  },
  {
    q: 'How do I get a quotation?',
    a: 'Call us or WhatsApp for a quick discussion. For accurate pricing, we typically do an on-site measurement.'
  },
  {
    q: 'What materials do you work with?',
    a: 'We work with stainless steel (SS), mild steel (MS), and glass railing systems. We also support CNC laser cutting for custom designs.'
  }
]

export default function LocalTrustSection() {
  return (
    <section className="section local-trust">
      <div className="container">
        <h2 className="section-title">Steel & Railing Fabrication in Bengaluru</h2>
        <p className="section-subtitle">
          Looking for railing fabrication near you? Vinayaka Steel & Railing provides premium fabrication and installation across Bengaluru, Karnataka.
        </p>

        <div className="local-trust-grid">
          {highlights.map((item) => (
            <div key={item.title} className="local-trust-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="local-trust-cta">
          <a className="btn btn-primary" href="tel:9036348560">Call for Quick Quote</a>
          <Link className="btn btn-outline" to="/contact">Request Site Visit</Link>
        </div>

        <div className="local-faq">
          <h3 className="local-faq-title">FAQs</h3>
          <div className="local-faq-grid">
            {faqs.map((f) => (
              <details key={f.q} className="local-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
