import { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Accueil</a>
        <a href="#about" onClick={handleLinkClick}>À propos</a>
        <a href="#skills" onClick={handleLinkClick}>Compétences</a>
        <a href="#projects" onClick={handleLinkClick}>Projets</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </nav>

      <button
        className={`hamburger ${isScrolled ? 'hidden' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Accueil</a>
        <a href="#about" onClick={handleLinkClick}>À propos</a>
        <a href="#skills" onClick={handleLinkClick}>Compétences</a>
        <a href="#projects" onClick={handleLinkClick}>Projets</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </>
  )
}

export default Navbar
