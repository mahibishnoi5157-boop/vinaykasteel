import { useState } from 'react'
import './Pages.css'
import './PortfolioPage.css'

const projectImages = import.meta.glob('../projects/*', {
  eager: true,
  import: 'default'
})

function getProjectImage(fileName) {
  return projectImages[`../projects/${fileName}`]
}

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
    image: getProjectImage('ss-railing-1.jpg .jpeg')
  },
  {
    id: 2,
    category: 'SS Railing',
    title: 'SS Balcony Railing',
    image: getProjectImage('ss-railing-2.jpg')
  },
  {
    id: 3,
    category: 'Wood Railing',
    title: 'Wood Handrail',
    image: getProjectImage('wood-railing-1.jpg')
  },
  {
    id: 4,
    category: 'Wood Railing',
    title: 'Wood Railing Detail',
    image: getProjectImage('wood-railing-2.jpg')
  },
  {
    id: 5,
    category: 'Brass Railing',
    title: 'Brass Finish Railing',
    image: getProjectImage('brass-railing-1.jpg')
  },
  {
    id: 6,
    category: 'Brass Railing',
    title: 'Brass Handrail',
    image: getProjectImage('brass-railing-2.jpg')
  },
  {
    id: 7,
    category: 'PVD Coating',
    title: 'PVD Coated Hardware',
    image: getProjectImage('pvd-1.jpg')
  },
  {
    id: 8,
    category: 'PVD Coating',
    title: 'Coated Metal Finish',
    image: getProjectImage('pvd-2.jpg')
  },
  {
    id: 9,
    category: 'Grills',
    title: 'Window Safety Grills',
    image: getProjectImage('grill-1.jpg')
  },
  {
    id: 10,
    category: 'Grills',
    title: 'Decorative Grills',
    image: getProjectImage('grill-2.jpg')
  },
  {
    id: 11,
    category: 'Gates',
    title: 'Residential Gate',
    image: getProjectImage('gate-1.jpg')
  },
  {
    id: 12,
    category: 'Gates',
    title: 'Steel Gate Work',
    image: getProjectImage('gate-2.jpg')
  },
  {
    id: 13,
    category: 'HPL Sheet',
    title: 'Exterior Cladding Sheet',
    image: getProjectImage('hpl-sheet-1.jpg')
  },
  {
    id: 14,
    category: 'HPL Sheet',
    title: 'Facade Sheet Work',
    image: getProjectImage('hpl-sheet-2.jpg')
  },
  {
    id: 15,
    category: 'SS Fittings',
    title: 'SS Fittings',
    image: getProjectImage('ss-fitting-1.jpg')
  },
  {
    id: 16,
    category: 'SS Fittings',
    title: 'Fittings & Hardware',
    image: getProjectImage('ss-fitting-2.jpg')
  },
  {
    id: 17,
    category: 'Pipes',
    title: 'Steel Pipe Fabrication',
    image: getProjectImage('pipe-1.jpg')
  },
  {
    id: 18,
    category: 'Pipes',
    title: 'Pipe Work',
    image: getProjectImage('pipe-12.jpg')
  },
  {
    id: 19,
    category: 'Hex Pipes',
    title: 'Profile Pipe Work',
    image: getProjectImage('pipe-12.jpg')
  },
  {
    id: 20,
    category: 'Hex Pipes',
    title: 'Custom Pipe Profiles',
    image: getProjectImage('pipe-12.jpg')
  },
  {
    id: 21,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: getProjectImage('window-1.jpg .jpeg')
  },
  {
    id: 22,
    category: 'Window Works',
    title: 'Window Grill & Frame',
    image: getProjectImage('window-2.jpg .jpeg')
  },
  {
    id: 23,
    category: 'Curtain Rods',
    title: 'Curtain Rods',
    image: getProjectImage('window-1.jpg .jpeg')
  },
  {
    id: 24,
    category: 'Curtain Rods',
    title: 'Rod Installation',
    image: getProjectImage('window-2.jpg .jpeg')
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
