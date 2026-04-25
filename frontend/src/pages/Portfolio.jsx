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
    image: 'https://images.unsplash.com/photo-NMGFl05r728?w=1200&h=900&fit=crop'
  },
  {
    id: 2,
    category: 'SS Railing',
    title: 'SS Balcony Railing',
    image: 'https://images.unsplash.com/photo-GVMCvjF6tuU?w=1200&h=900&fit=crop'
  },
  {
    id: 3,
    category: 'Wood Railing',
    title: 'Wood Handrail',
    image: 'https://images.unsplash.com/photo-dTTjLxK3zD8?w=1200&h=900&fit=crop'
  },
  {
    id: 4,
    category: 'Wood Railing',
    title: 'Wood Railing Detail',
    image: 'https://images.unsplash.com/photo-CXCCrLxhMLI?w=1200&h=900&fit=crop'
  },
  {
    id: 5,
    category: 'Brass Railing',
    title: 'Brass Finish Railing',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=1200&h=900&fit=crop'
  },
  {
    id: 6,
    category: 'Brass Railing',
    title: 'Brass Handrail',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=1200&h=900&fit=crop'
  },
  {
    id: 7,
    category: 'PVD Coating',
    title: 'PVD Coated Hardware',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=1200&h=900&fit=crop'
  },
  {
    id: 8,
    category: 'PVD Coating',
    title: 'Coated Metal Finish',
    image: 'https://images.unsplash.com/photo-vMyKCfwAsjQ?w=1200&h=900&fit=crop'
  },
  {
    id: 9,
    category: 'Grills',
    title: 'Window Safety Grills',
    image: 'https://images.unsplash.com/photo-Aktzccl5qV0?w=1200&h=900&fit=crop'
  },
  {
    id: 10,
    category: 'Grills',
    title: 'Decorative Grills',
    image: 'https://images.unsplash.com/photo-o0uqicTPUAE?w=1200&h=900&fit=crop'
  },
  {
    id: 11,
    category: 'Gates',
    title: 'Residential Gate',
    image: 'https://images.unsplash.com/photo-8zQW5cFKUvE?w=1200&h=900&fit=crop'
  },
  {
    id: 12,
    category: 'Gates',
    title: 'Steel Gate Work',
    image: 'https://images.unsplash.com/photo-8zQW5cFKUvE?w=1200&h=900&fit=crop'
  },
  {
    id: 13,
    category: 'HPL Sheet',
    title: 'Exterior Cladding Sheet',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop'
  },
  {
    id: 14,
    category: 'HPL Sheet',
    title: 'Facade Sheet Work',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop'
  },
  {
    id: 15,
    category: 'SS Fittings',
    title: 'SS Fittings',
    image: 'https://images.unsplash.com/photo-RwXneIyqxAw?w=1200&h=900&fit=crop'
  },
  {
    id: 16,
    category: 'SS Fittings',
    title: 'Fittings & Hardware',
    image: 'https://images.unsplash.com/photo-EkEJRxZloKI?w=1200&h=900&fit=crop'
  },
  {
    id: 17,
    category: 'Pipes',
    title: 'Steel Pipe Fabrication',
    image: 'https://images.unsplash.com/photo-XmmL7iNeFWc?w=1200&h=900&fit=crop'
  },
  {
    id: 18,
    category: 'Pipes',
    title: 'Pipe Work',
    image: 'https://images.unsplash.com/photo-4YErbksQ_DA?w=1200&h=900&fit=crop'
  },
  {
    id: 19,
    category: 'Hex Pipes',
    title: 'Profile Pipe Work',
    image: 'https://images.unsplash.com/photo-TYeeT_YDC6o?w=1200&h=900&fit=crop'
  },
  {
    id: 20,
    category: 'Hex Pipes',
    title: 'Custom Pipe Profiles',
    image: 'https://images.unsplash.com/photo-XmmL7iNeFWc?w=1200&h=900&fit=crop'
  },
  {
    id: 21,
    category: 'Window Works',
    title: 'Window Fabrication',
    image: 'https://images.unsplash.com/photo-e9v1p1S-6Gs?w=1200&h=900&fit=crop'
  },
  {
    id: 22,
    category: 'Window Works',
    title: 'Window Grill & Frame',
    image: 'https://images.unsplash.com/photo-fV1Rr-ebSAg?w=1200&h=900&fit=crop'
  },
  {
    id: 23,
    category: 'Curtain Rods',
    title: 'Curtain Rods',
    image: 'https://images.unsplash.com/photo-nx1Qs_Q04dY?w=1200&h=900&fit=crop'
  },
  {
    id: 24,
    category: 'Curtain Rods',
    title: 'Rod Installation',
    image: 'https://images.unsplash.com/photo-nx1Qs_Q04dY?w=1200&h=900&fit=crop'
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
