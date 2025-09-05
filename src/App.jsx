import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts '
import Footer from './components/Footer'
import Categories from './components/Categories'
import OfferCard from './components/OfferCard'
import NewArrivals from './components/NewArrivals'
import Testimonials from './components/Testimonials'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <FeaturedProducts/>
    <Categories/>
    <OfferCard/>
    <NewArrivals/>
    <Testimonials/>
    <Footer/>
    <ScrollToTop/>
    
    </>
  )
}

export default App
