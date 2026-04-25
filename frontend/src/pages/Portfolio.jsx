import { useState } from 'react'
import './Pages.css'
import './PortfolioPage.css'

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
    category: 'SS Railing',
    title: 'SS Balcony Railing',
    image: '/src/projects/ss-railing-2.jpg'
  },
  {
    id: 3,
    category: 'Wood Railing',
    title: 'Wood Handrail',
    image: '/src/projects/wood-railing-1.jpg'
  },
  {
    id: 4,
    category: 'Wood Railing',
    title: 'Wood Railing Detail',
    image: '/src/projects/wood-railing-2.jpg'
  },
  {
    id: 5,
    category: 'Brass Railing',
    title: 'Brass Finish Railing',
    image: '/src/projects/brass-railing-1.jpg'
  },
  {
    id: 6,
    category: 'Brass Railing',
    title: 'Brass Handrail',
    image: '/src/projects/brass-railing-2.jpg'
  },
  {
    id: 7,
    category: 'PVD Coating',
    title: 'PVD Coated Hardware',
    image: '/src/projects/pvd-1.jpg'
  },
  {
    id: 8,
    category: 'PVD Coating',
    title: 'Coated Metal Finish',
    image: '/src/projects/pvd-2.jpg'
  },
  {
    id: 9,
    category: 'Grills',
    title: 'Window Safety Grills',
    image: '/src/projects/grill-1.jpg'
  },
  {
    id: 10,
    category: 'Grills',
    title: 'Decorative Grills',
    image: '/src/projects/grill-2.jpg'
  },
  {
    id: 11,
    category: 'Gates',
    title: 'Residential Gate',
    image: '/src/projects/gate-1.jpg'
  },
  {
    id: 12,
    category: 'Gates',
    title: 'Steel Gate Work',
    image: '/src/projects/gate-2.jpg'
  },
  {
    id: 13,
    category: 'HPL Sheet',
    title: 'Exterior Cladding Sheet',
    image: '/src/projects/hpl-sheet-1.jpg'
  },
  {
    id: 14,
    category: 'HPL Sheet',
    title: 'Facade Sheet Work',
    image: '/src/projects/hpl-sheet-2.jpg'
  },
  {
    id: 15,
    category: 'SS Fittings',
    title: 'SS Fittings',
    image: '/src/projects/ss-fitting-1.jpg'
  },
  {
    id: 16,
    category: 'SS Fittings',
    title: 'Fittings & Hardware',
    image: '/src/projects/ss-fitting-2.jpg'
  },
  {
    id: 17,
    category: 'Pipes',
    title: 'Steel Pipe Fabrication',
    image: '/src/projects/pipe-1.jpg'
  },
  {
    id: 18,
    category: 'Pipes',
    title: 'Pipe Work',
    image: '/src/projects/pipe-12.jpg'
  },
  {
    id: 19,
    category: 'Hex Pipes',
    title: 'Profile Pipe Work',
    image: '/src/projects/pipe-12.jpg'
  },
  {
    id: 20,
    category: 'Hex Pipes',
    title: 'Custom Pipe Profiles',
    image: '/src/projects/pipe-12.jpg'
  },
  {
    id: 21,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: '/src/projects/window-1.jpg'
  },
  {
    id: 22,
    category: 'Window Works',
    title: 'Window Grill & Frame',
    image: '/src/projects/window-2.jpg'
  },
  {
    id: 23,
    category: 'Curtain Rods',
    title: 'Curtain Rods',
    image: '/src/projects/window-1.jpg'
  },
  {
    id: 24,
    category: 'Curtain Rods',
    title: 'Rod Installation',
    image: '/src/projects/window-2.jpg'
  }
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
