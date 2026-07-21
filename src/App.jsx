import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Process from './sections/Process.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Booking from './sections/Booking.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
