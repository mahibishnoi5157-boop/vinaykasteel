import { Link } from 'react-router-dom'
import './TestimonialsSection.css'

const testimonials = [
  {
    quote: 'Vinayaka Steel delivered exactly what we wanted—professional work, on time, and the railing quality is excellent.',
    author: 'Ramesh K.',
    role: 'Homeowner, Bengaluru'
  },
  {
    quote: 'We have used them for multiple projects. Timely execution and great finish every time. Highly recommend.',
    author: 'Suresh M.',
    role: 'Contractor'
  },
  {
    quote: 'The balcony railing they installed has transformed our home. Clean design and solid craftsmanship.',
    author: 'Priya N.',
    role: 'Residential Client'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by homeowners, contractors, and architects across Bengaluru and Karnataka.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <footer>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="testimonials-cta">
          <Link to="/testimonials" className="btn btn-outline">More Testimonials</Link>
        </div>
      </div>
    </section>
  )
}
