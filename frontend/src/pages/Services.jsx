import './Pages.css'

const services = [
  {
    title: 'Stainless Steel Railings',
    description: 'Durable, corrosion-resistant railings for balconies, staircases, and terraces. We offer modern designs that complement both residential and commercial spaces. Our stainless steel work is built to last and requires minimal maintenance.',
    points: ['Balcony railings', 'Staircase railings', 'Terrace & deck railings', 'Custom designs']
  },
  {
    title: 'Glass Railings',
    description: 'Sleek, contemporary railings using toughened (tempered) glass for safety and clarity. Ideal for modern homes and commercial buildings where an open, light feel is desired. Frames can be stainless steel or minimal profile.',
    points: ['Toughened glass panels', 'Frameless or framed options', 'Indoor & outdoor', 'Easy to maintain']
  },
  {
    title: 'Mild Steel (MS) Fabrication',
    description: 'Cost-effective and versatile MS fabrication for gates, grills, railings, and structural work. We offer various finishes including powder coating and paint to match your requirements and environment.',
    points: ['Gates & grills', 'MS railings', 'Structural fabrication', 'Powder coating & paint']
  },
  {
    title: 'CNC Laser Cutting Services',
    description: 'Precision CNC laser cutting for custom designs, intricate patterns, and accurate metal components. Ideal for decorative panels, nameplates, and project-specific parts with fine detail.',
    points: ['Custom patterns', 'Decorative panels', 'Precision cutting', 'Various materials']
  },
  {
    title: 'Gates and Grills',
    description: 'Security and aesthetic appeal combined. We design and fabricate main gates, window grills, and compound gates that enhance your property’s look while providing reliable security.',
    points: ['Main entrance gates', 'Window grills', 'Compound gates', 'Manual & automated options']
  }
]

export default function Services() {
  return (
    <div className="page">
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Quality fabrication and installation for steel and railing projects across Bengaluru and Karnataka.
          </p>
        </div>
      </section>
      <section className="section services-list">
        <div className="container">
          {services.map((s, i) => (
            <article key={s.title} className="service-detail">
              <h2>{s.title}</h2>
              <p className="service-desc">{s.description}</p>
              <ul className="service-points">
                {s.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
