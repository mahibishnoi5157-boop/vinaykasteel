import './ServiceAreasSection.css'

const areas = [
  'Whitefield',
  'HSR Layout',
  'Koramangala',
  'Indiranagar',
  'Jayanagar',
  'JP Nagar',
  'BTM Layout',
  'Marathahalli',
  'Electronic City',
  'Yelahanka',
  'Hebbal',
  'Rajajinagar'
]

export default function ServiceAreasSection() {
  return (
    <section className="section service-areas">
      <div className="container">
        <h2 className="section-title">Service Areas in Bengaluru</h2>
        <p className="section-subtitle">
          We take up railing fabrication and installation across Bengaluru. If you are searching for “railing fabrication near me”, call us for a quick quote.
        </p>

        <div className="areas-grid" role="list">
          {areas.map((a) => (
            <div key={a} className="area-chip" role="listitem">{a}</div>
          ))}
        </div>

        <div className="areas-cta">
          <a className="btn btn-primary" href="tel:9036348560">Call Now</a>
          <a className="btn btn-outline" href="https://maps.app.goo.gl/YfwaWc2UHp7464KV6" target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
