import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LocalTrustSection from '../components/LocalTrustSection'
import ServicesPreview from '../components/ServicesPreview'
import PortfolioGallery from '../components/PortfolioGallery'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <LocalTrustSection />
      <ServicesPreview />
      <PortfolioGallery />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
