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
    image: '/src/projects/ss-railing-1.jpg'
  },
  {
    id: 2,
    category: 'Wood Railing',
    title: 'Wood Handrail & Railing',
    image: '/src/projects/wood-railing-1.jpg'
  },
  {
    id: 3,
    category: 'Brass Railing',
    title: 'Brass Railing Finish',
    image: '/src/projects/brass-railing-1.jpg'
  },
  {
    id: 4,
    category: 'PVD Coating',
    title: 'PVD Coated Metal Work',
    image: '/src/projects/pvd-1.jpg'
  },
  {
    id: 5,
    category: 'Grills',
    title: 'Safety Grills',
    image: '/src/projects/grill-1.jpg'
  },
  {
    id: 6,
    category: 'Gates',
    title: 'Main Entrance Gate',
    image: '/src/projects/gate-1.jpg'
  },
  {
    id: 7,
    category: 'HPL Sheet',
    title: 'HPL / Exterior Sheet Cladding',
    image: '/src/projects/hpl-sheet-1.jpg'
  },
  {
    id: 8,
    category: 'SS Fittings',
    title: 'Stainless Steel Fittings',
    image: '/src/projects/ss-fitting-1.jpg'
  },
  {
    id: 9,
    category: 'Pipes',
    title: 'Steel Pipe Work',
    image: '/src/projects/pipe-1.jpg'
  },
  {
    id: 10,
    category: 'Hex Pipes',
    title: 'Hex Profile Pipe',
    image: '/src/projects/pipe-12.jpg'
  },
  {
    id: 11,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: '/src/projects/window-1.jpg'
  },
  {
    id: 12,
    category: 'Curtain Rods',
    title: 'Curtain Rod Installation',
    image: '/src/projects/window-2.jpg'
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
