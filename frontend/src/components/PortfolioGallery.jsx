import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioGallery.css'

const filters = [
  'All',
  'SS Railing',
  'Wood Railing',
  'Brass Railing',
  'PVD Coating',
  'Grills',
  'Gates',
  'HPL Sheet',
  'SS Fittings',
  'Pipes',
  'Hex Pipes',
  'Window Works',
  'Curtain Rods'
]

const projects = [
  {
    id: 1,
    category: 'SS Railing',
    title: 'Stainless Steel Railing',
    image: 'https://source.unsplash.com/800x600/?stainless-steel,railing'
  },
  {
    id: 2,
    category: 'Wood Railing',
    title: 'Wood Handrail & Railing',
    image: 'https://source.unsplash.com/800x600/?wood,railing'
  },
  {
    id: 3,
    category: 'Brass Railing',
    title: 'Brass Railing Finish',
    image: 'https://source.unsplash.com/800x600/?brass,railing'
  },
  {
    id: 4,
    category: 'PVD Coating',
    title: 'PVD Coated Metal Work',
    image: 'https://source.unsplash.com/800x600/?metal,coating'
  },
  {
    id: 5,
    category: 'Grills',
    title: 'Safety Grills',
    image: 'https://source.unsplash.com/800x600/?window,grill'
  },
  {
    id: 6,
    category: 'Gates',
    title: 'Main Entrance Gate',
    image: 'https://source.unsplash.com/800x600/?steel,gate'
  },
  {
    id: 7,
    category: 'HPL Sheet',
    title: 'HPL / Exterior Sheet Cladding',
    image: 'https://source.unsplash.com/800x600/?architectural,cladding'
  },
  {
    id: 8,
    category: 'SS Fittings',
    title: 'Stainless Steel Fittings',
    image: 'https://source.unsplash.com/800x600/?stainless-steel,fittings'
  },
  {
    id: 9,
    category: 'Pipes',
    title: 'Steel Pipe Work',
    image: 'https://source.unsplash.com/800x600/?steel,pipe'
  },
  {
    id: 10,
    category: 'Hex Pipes',
    title: 'Hex Profile Pipe',
    image: 'https://source.unsplash.com/800x600/?metal,pipe'
  },
  {
    id: 11,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: 'https://source.unsplash.com/800x600/?window,frame'
  },
  {
    id: 12,
    category: 'Curtain Rods',
    title: 'Curtain Rod Installation',
    image: 'https://source.unsplash.com/800x600/?curtain,rod'
  }
]

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="section portfolio-gallery">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          A selection of completed steel and railing projects across Bengaluru and Karnataka.
        </p>
        <div className="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((p) => (
            <article key={p.id} className="portfolio-item">
              <div className="portfolio-image-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="portfolio-category">{p.category}</span>
              </div>
              <h3 className="portfolio-title">{p.title}</h3>
            </article>
          ))}
        </div>
        <div className="portfolio-cta">
          <Link to="/portfolio" className="btn btn-primary">View Full Portfolio</Link>
        </div>
      </div>
    </section>
  )
}
