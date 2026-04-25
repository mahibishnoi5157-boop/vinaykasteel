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
    image: 'https://source.unsplash.com/1200x900/?stainless-steel,railing'
  },
  {
    id: 2,
    category: 'SS Railing',
    title: 'SS Balcony Railing',
    image: 'https://source.unsplash.com/1200x900/?stainless-steel,balcony'
  },
  {
    id: 3,
    category: 'Wood Railing',
    title: 'Wood Handrail',
    image: 'https://source.unsplash.com/1200x900/?wood,handrail'
  },
  {
    id: 4,
    category: 'Wood Railing',
    title: 'Wood Railing Detail',
    image: 'https://source.unsplash.com/1200x900/?wood,staircase'
  },
  {
    id: 5,
    category: 'Brass Railing',
    title: 'Brass Finish Railing',
    image: 'https://source.unsplash.com/1200x900/?brass,interior'
  },
  {
    id: 6,
    category: 'Brass Railing',
    title: 'Brass Handrail',
    image: 'https://source.unsplash.com/1200x900/?brass,handrail'
  },
  {
    id: 7,
    category: 'PVD Coating',
    title: 'PVD Coated Hardware',
    image: 'https://source.unsplash.com/1200x900/?metal,hardware'
  },
  {
    id: 8,
    category: 'PVD Coating',
    title: 'Coated Metal Finish',
    image: 'https://source.unsplash.com/1200x900/?metal,finish'
  },
  {
    id: 9,
    category: 'Grills',
    title: 'Window Safety Grills',
    image: 'https://source.unsplash.com/1200x900/?window,grill'
  },
  {
    id: 10,
    category: 'Grills',
    title: 'Decorative Grills',
    image: 'https://source.unsplash.com/1200x900/?metal,grill'
  },
  {
    id: 11,
    category: 'Gates',
    title: 'Residential Gate',
    image: 'https://source.unsplash.com/1200x900/?gate,entrance'
  },
  {
    id: 12,
    category: 'Gates',
    title: 'Steel Gate Work',
    image: 'https://source.unsplash.com/1200x900/?steel,gate'
  },
  {
    id: 13,
    category: 'HPL Sheet',
    title: 'Exterior Cladding Sheet',
    image: 'https://source.unsplash.com/1200x900/?building,cladding'
  },
  {
    id: 14,
    category: 'HPL Sheet',
    title: 'Facade Sheet Work',
    image: 'https://source.unsplash.com/1200x900/?architecture,facade'
  },
  {
    id: 15,
    category: 'SS Fittings',
    title: 'SS Fittings',
    image: 'https://source.unsplash.com/1200x900/?stainless-steel,parts'
  },
  {
    id: 16,
    category: 'SS Fittings',
    title: 'Fittings & Hardware',
    image: 'https://source.unsplash.com/1200x900/?metal,fittings'
  },
  {
    id: 17,
    category: 'Pipes',
    title: 'Steel Pipe Fabrication',
    image: 'https://source.unsplash.com/1200x900/?steel,pipe'
  },
  {
    id: 18,
    category: 'Pipes',
    title: 'Pipe Work',
    image: 'https://source.unsplash.com/1200x900/?industrial,pipe'
  },
  {
    id: 19,
    category: 'Hex Pipes',
    title: 'Profile Pipe Work',
    image: 'https://source.unsplash.com/1200x900/?metal,tube'
  },
  {
    id: 20,
    category: 'Hex Pipes',
    title: 'Custom Pipe Profiles',
    image: 'https://source.unsplash.com/1200x900/?metal,pipe'
  },
  {
    id: 21,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: 'https://source.unsplash.com/1200x900/?window,frame'
  },
  {
    id: 22,
    category: 'Window Works',
    title: 'Window Grill & Frame',
    image: 'https://source.unsplash.com/1200x900/?window,installation'
  },
  {
    id: 23,
    category: 'Curtain Rods',
    title: 'Curtain Rods',
    image: 'https://source.unsplash.com/1200x900/?curtain,rod'
  },
  {
    id: 24,
    category: 'Curtain Rods',
    title: 'Rod Installation',
    image: 'https://source.unsplash.com/1200x900/?interior,curtain'
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
