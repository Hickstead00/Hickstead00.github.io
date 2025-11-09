import './SideMenu.css'

function SideMenu({ isScrolled }) {
  return (
    <nav className={`side-menu ${isScrolled ? 'visible' : ''}`}>
      <a href="#home">Accueil</a>
      <a href="#about">À propos</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default SideMenu
