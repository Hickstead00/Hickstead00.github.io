import { useState, useEffect } from 'react'
import './Hero.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Miagiste en recherche d\'ALTERNANCE'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="fade-in">Virgile Bodin</h1>
          <p className="subtitle typing-effect">
            {typedText}
            <span className="cursor">|</span>
          </p>
          <div className="description fade-in-delay">
            <p>Après presque 9 ans passé dans le secteur de la restauration j'ai décidé de me lancer un nouveau défi !</p>
            <p>Passionné par le monde de la tech, j'ai entrepris de reprendre mes études pour devenir développeur.</p>
            <p>Aujourd'hui en 3ème année de MIAGE à l'Université d'Orléans, je suis extrêmement motivé pour décrocher une alternance.</p>
          </div>
        </div>

        <div className="hero-right fade-in-right">
          <div className="profile-image">
            <img src="/p1.jpg" alt="Virgile Bodin" />
            <div className="image-overlay"></div>
          </div>

          <div className="social-links">
            <a href="mailto:virgile.bdin@gmail.com" className="social-icon" title="Email">
              <MdEmail />
            </a>
            <a href="https://www.linkedin.com/in/virgilebodin/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn btn-primary">
              Téléchargez mon CV
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
