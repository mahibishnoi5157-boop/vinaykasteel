import './ReviewsSection.css'

const PLACE_NAME = 'Vinayaka Steel & Railing'
const MAP_LINK = 'https://maps.app.goo.gl/YfwaWc2UHp7464KV6'

const reviews = [
  {
    name: 'Ramesh K.',
    text: 'Very good finishing and strong railing work. They completed on time and the team was professional.',
    location: 'Bengaluru'
  },
  {
    name: 'Priya N.',
    text: 'Excellent quality and clean installation. The glass railing looks premium and feels safe.',
    location: 'Bengaluru'
  },
  {
    name: 'Suresh M.',
    text: 'Reliable fabrication work. Good communication and fair pricing. Recommended for gates and railings.',
    location: 'Karnataka'
  }
]

function Stars() {
  return (
    <div className="stars" aria-label="5 star rating">
      <span aria-hidden="true">★★★★★</span>
      <span className="stars-text">5.0</span>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="section reviews">
      <div className="container">
        <h2 className="section-title">Reviews & Local Trust</h2>
        <p className="section-subtitle">
          People choose us for quality finishing, safe installation, and timely delivery in Bengaluru.
        </p>

        <div className="reviews-header">
          <div className="reviews-summary">
            <h3 className="reviews-place">{PLACE_NAME}</h3>
            <Stars />
            <p className="reviews-note">Based on recent customer feedback</p>
          </div>
          <div className="reviews-cta">
            <a className="btn btn-primary" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
            <a className="btn btn-outline" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
              Leave a Review
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-top">
                <div className="review-avatar" aria-hidden="true">{r.name.slice(0, 1)}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-meta">{r.location}</div>
                </div>
              </div>
              <div className="review-stars" aria-hidden="true">★★★★★</div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
