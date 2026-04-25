import './Pages.css'
import jambheshwarImg from './asset/jambheshwar.png'

export default function About() {
  return (
    <div className="page">
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Vinayaka Steel & Railing — your trusted partner for steel and railing fabrication in Bengaluru.
          </p>
        </div>
      </section>
      <section className="section about-content">
        <div className="container narrow">
          <img className="about-image" src={jambheshwarImg} alt="Jambheshwar" />
          <div className="about-text">
            <p>
              Vinayaka Steel & Railing has been serving clients in Bengaluru and across Karnataka since 2015. 
              We specialise in steel and railing fabrication, offering custom solutions for homeowners, 
              contractors, architects, and industrial clients.
            </p>
            <p>
              Our commitment is to quality and precision. Every project—from balcony railings and 
              staircases to gates, grills, and CNC laser-cut components—is crafted to meet your 
              specifications and our high standards. We work with stainless steel, glass, and mild 
              steel to deliver designs that are strong, safe, and visually appealing.
            </p>
            <p>
              Whether you need a simple railing upgrade or a full custom fabrication, we focus on 
              clear communication, timely execution, and lasting results. Contact us for a free 
              quote and let us bring style, strength, and safety to your space.
            </p>
          </div>
          <div className="about-contact-box">
            <h3>Get in touch</h3>
            <p><strong>Sunil Bishnoi</strong></p>
            <p><a href="tel:9036348560">9036348560</a></p>
            <p><a href="mailto:kingking29290@gmail.com">kingking29290@gmail.com</a></p>
            <p>
              <a href="https://maps.app.goo.gl/YfwaWc2UHp7464KV6" target="_blank" rel="noopener noreferrer">
                View our location
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
