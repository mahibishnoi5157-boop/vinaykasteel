import { useState } from 'react'
import './Pages.css'
import './PortfolioPage.css'

const filters = ['All', 'Stainless Steel', 'Glass', 'MS Work']

const projects = [
  { id: 1, category: 'Stainless Steel', title: 'Residential Balcony Railing', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop' },
  { id: 2, category: 'Glass', title: 'Modern Staircase Railing', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop' },
  { id: 3, category: 'MS Work', title: 'Industrial Gate & Fencing', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop' },
  { id: 4, category: 'Stainless Steel', title: 'Villa Exterior Railing', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop' },
  { id: 5, category: 'Glass', title: 'Penthouse Balcony', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop' },
  { id: 6, category: 'MS Work', title: 'Commercial Entrance Gate', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop' },
  { id: 7, category: 'Stainless Steel', title: 'Apartment Complex Railing', image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop' },
  { id: 8, category: 'Glass', title: 'Office Building Railing', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
  { id: 9, category: 'MS Work', title: 'Residential Gate', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop' }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="page">
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Portfolio & Projects</h1>
          <p className="page-subtitle">
            A selection of our completed steel and railing projects in Bengaluru and Karnataka.
          </p>
        </div>
      </section>
      <section className="section portfolio-page">
        <div className="container">
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
          <div className="portfolio-grid-full">
            {filtered.map((p) => (
              <article key={p.id} className="portfolio-item-full">
                <div className="portfolio-image-wrap">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="portfolio-category">{p.category}</span>
                </div>
                <h3 className="portfolio-title">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
