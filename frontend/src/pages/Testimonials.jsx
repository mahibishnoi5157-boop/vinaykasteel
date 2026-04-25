import './Pages.css'

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

export default function Testimonials() {
  return (
    <div className="page">
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">What Our Clients Say</h1>
          <p className="page-subtitle">
            Trusted by homeowners, contractors, and architects across Bengaluru and Karnataka.
          </p>
        </div>
      </section>
      <section className="section testimonials-list">
        <div className="container narrow">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-block">
              <p className="testimonial-quote">"{t.quote}"</p>
              <footer>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}
