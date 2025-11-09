import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'
import Hero from './components/Hero/Hero'
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

      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquid corrupti optio odit iste assumenda corporis facilis voluptates nostrum expedita. Consequuntur aliquam incidunt odio provident magni, labore officiis non aliquid.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquid corrupti optio odit iste assumenda corporis facilis voluptates nostrum expedita. Consequuntur aliquam incidunt odio provident magni, labore officiis non aliquid.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquid corrupti optio odit iste assumenda corporis facilis voluptates nostrum expedita. Consequuntur aliquam incidunt odio provident magni, labore officiis non aliquid.</p>
      </section>
    </div>
  )
}

export default App
