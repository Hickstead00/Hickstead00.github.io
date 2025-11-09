import './Hero.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Colonne gauche - Profil */}
        <div className="hero-left">
          <h1>Virgile Bodin</h1>
          <p className="subtitle">Développeur Full-Stack</p>
          <p className="description">
            Étudiant en informatique passionné par le développement web moderne.
            À la recherche d'une alternance pour mettre en pratique mes compétences
            en React, Node.js et bases de données.
          </p>
        </div>

        {/* Colonne droite - Photo et liens */}
        <div className="hero-right">
          <div className="profile-image">
            <div className="image-placeholder">Photo</div>
          </div>

          <div className="social-links">
            <a href="mailto:votre.email@example.com" className="social-icon" title="Email">
              <MdEmail />
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn btn-primary">
              Télécharger CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
