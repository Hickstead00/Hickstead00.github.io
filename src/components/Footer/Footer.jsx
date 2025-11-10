import './Footer.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Virgile Bodin</h3>
            <p>Développeur Full Stack en formation</p>
          </div>

          <div className="footer-center">
            <h4>Navigation</h4>
            <nav className="footer-nav">
              <a href="#home">Accueil</a>
              <a href="#about">À propos</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-right">
            <h4>Me suivre</h4>
            <div className="footer-social">
              <a href="mailto:virgile.bdin@gmail.com" title="Email">
                <MdEmail />
              </a>
              <a href="https://www.linkedin.com/in/virgilebodin/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Hickstead00" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Virgile Bodin. Tous droits réservés.</p>
          <p className="footer-tech">Développé avec React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
