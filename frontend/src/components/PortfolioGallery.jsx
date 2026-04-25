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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=650&fit=crop'
  },
  {
    id: 2,
    category: 'Wood Railing',
    title: 'Wood Handrail & Railing',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=650&fit=crop'
  },
  {
    id: 3,
    category: 'Brass Railing',
    title: 'Brass Railing Finish',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=650&fit=crop'
  },
  {
    id: 4,
    category: 'PVD Coating',
    title: 'PVD Coated Metal Work',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&h=650&fit=crop'
  },
  {
    id: 5,
    category: 'Grills',
    title: 'Safety Grills',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=650&fit=crop'
  },
  {
    id: 6,
    category: 'Gates',
    title: 'Main Entrance Gate',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=650&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&h=650&fit=crop'
  },
  {
    id: 9,
    category: 'Pipes',
    title: 'Steel Pipe Work',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=650&fit=crop'
  },
  {
    id: 10,
    category: 'Hex Pipes',
    title: 'Hex Profile Pipe',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=650&fit=crop'
  },
  {
    id: 11,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=650&fit=crop'
  },
  {
    id: 12,
    category: 'Curtain Rods',
    title: 'Curtain Rod Installation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=650&fit=crop'
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
