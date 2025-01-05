import { useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { Categories } from './components/Categories'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='min-h-screen bg-[#0d1117]'>
      <Navbar/>
      <Hero/>
      <Categories/>
      <ProductGrid/>
      <Stats/>
      <Testimonials/>
      <Footer/>
     </div>
    </>
  )
}

export default App
