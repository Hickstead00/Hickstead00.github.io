import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar isScrolled={isScrolled} />
      <SideMenu isScrolled={isScrolled} />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
