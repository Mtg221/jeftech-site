import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Capabilities from './sections/Capabilities.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Process from './sections/Process.jsx'
import CtaBand from './sections/CtaBand.jsx'
import Contact from './sections/Contact.jsx'
import Booking from './sections/Booking.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer.jsx'
import { useScrollToAnchor } from './hooks/useAnchorNavigation.jsx'

function ScrollToAnchorHandler() {
  useScrollToAnchor()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToAnchorHandler />
      <main id="main">
        <Routes>
          <Route path="/" element={(
            <>
              <Hero />
              <Services />
              <WhyUs />
              <Capabilities />
              <Portfolio />
              <Process />
              <CtaBand />
              <Booking />
              <Contact />
            </>
          )} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}