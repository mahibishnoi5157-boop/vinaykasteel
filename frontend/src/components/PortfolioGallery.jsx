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
    image: 'https://images.unsplash.com/photo-NMGFl05r728?w=900&h=650&fit=crop'
  },
  {
    id: 2,
    category: 'Wood Railing',
    title: 'Wood Handrail & Railing',
    image: 'https://images.unsplash.com/photo-dTTjLxK3zD8?w=900&h=650&fit=crop'
  },
  {
    id: 3,
    category: 'Brass Railing',
    title: 'Brass Railing Finish',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=900&h=650&fit=crop'
  },
  {
    id: 4,
    category: 'PVD Coating',
    title: 'PVD Coated Metal Work',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=900&h=650&fit=crop'
  },
  {
    id: 5,
    category: 'Grills',
    title: 'Safety Grills',
    image: 'https://images.unsplash.com/photo-Aktzccl5qV0?w=900&h=650&fit=crop'
  },
  {
    id: 6,
    category: 'Gates',
    title: 'Main Entrance Gate',
    image: 'https://images.unsplash.com/photo-8zQW5cFKUvE?w=900&h=650&fit=crop'
  },
  {
    id: 7,
    category: 'HPL Sheet',
    title: 'HPL / Exterior Sheet Cladding',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=650&fit=crop'
  },
  {
    id: 8,
    category: 'SS Fittings',
    title: 'Stainless Steel Fittings',
    image: 'https://images.unsplash.com/photo-RwXneIyqxAw?w=900&h=650&fit=crop'
  },
  {
    id: 9,
    category: 'Pipes',
    title: 'Steel Pipe Work',
    image: 'https://images.unsplash.com/photo-XmmL7iNeFWc?w=900&h=650&fit=crop'
  },
  {
    id: 10,
    category: 'Hex Pipes',
    title: 'Hex Profile Pipe',
    image: 'https://images.unsplash.com/photo-TYeeT_YDC6o?w=900&h=650&fit=crop'
  },
  {
    id: 11,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: 'https://images.unsplash.com/photo-e9v1p1S-6Gs?w=900&h=650&fit=crop'
  },
  {
    id: 12,
    category: 'Curtain Rods',
    title: 'Curtain Rod Installation',
    image: 'https://images.unsplash.com/photo-nx1Qs_Q04dY?w=900&h=650&fit=crop'
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
