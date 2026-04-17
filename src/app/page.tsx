import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Professional from './components/Professional'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Instagram />
      <Blog />
      <FAQ />
      <Professional />
      <CTA />
      <Footer />
    </main>
  )
}
