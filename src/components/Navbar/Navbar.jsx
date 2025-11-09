import './Navbar.css'

function Navbar({ isScrolled }) {
  return (
    <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
      <a href="#home">Accueil</a>
      <a href="#about">À propos</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default Navbar
