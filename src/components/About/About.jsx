import { useState } from 'react'
import './About.css'
import { FaGraduationCap, FaCode, FaUtensils, FaClipboard } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

function About() {
  const [activeStep, setActiveStep] = useState(null)

  const timelineData = [
    {
      year: '2013',
      title: 'Début dans la restauration \nOh Terroir Orléans',
      description: 'D\'abord comme employé polyvalent puis évolution vers des postes à responsabilités',
      icon: <FaUtensils />
    },
    {
      year: '2019',
      title: 'Assistant d\'Exploitation \nOh Terroir Orléans',
      description: 'Gestion d\'équipe, planification et optimisation des opérations quotidiennes',
      icon: <FaClipboard />
    },
    {
      year: '2023',
      title: 'Reconversion professionnelle',
      description: 'Décision de me lancer dans le développement web, inscription en Licence à l\'Université d\'Orléans',
      icon: <FaCode />
    },
    {
      year: '2025-2026',
      title: 'MIAGE - Université d\'Orléans',
      description: 'Licence 3 MIAGE en cours',
      icon: <FaGraduationCap />
    },
    {
      year: '2028',
      title: 'Diplôme Master MIAGE',
      description: 'Objectif : Master MIAGE en alternance',
      icon: <FaGraduationCap />
    }
  ]

  const values = [
    {
      title: 'Adaptabilité',
      description: 'Ma reconversion démontre ma capacité à apprendre et m\'adapter rapidement'
    },
    {
      title: 'Travail d\'équipe',
      description: '9 ans dans la restauration m\'ont appris l\'importance de la collaboration et de l\'esprit d\'équipe'
    },
    {
      title: 'Rigueur',
      description: 'Organisation et gestion du stress acquises dans un environnement exigeant'
    },
    {
      title: 'Passion',
      description: 'Motivé par la résolution de problèmes et la création de solutions innovantes'
    },
    {
      title: 'Curieux',
      description: 'J\'ai toujours aimé apprendre de nouvelles compétences'
    },
    {
      title: 'Persévérance',
      description: 'Détermination à réussir dans ce nouveau domaine malgré les défis'
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">À propos</h2>
        <p className="section-subtitle">
          Mon parcours et mes motivations
        </p>

        <div className="timeline-section">
          <h3>Mon parcours</h3>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${activeStep === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-dev-section">
          <h3>Pourquoi le développement ?</h3>
          <div className="why-dev-content">
            <p>
              Après 9 années passées dans le secteur de la restauration, j'ai ressenti le besoin de me lancer un nouveau défi.
              Passionné par le monde de la tech et attiré par la résolution de problèmes complexes, j'ai décidé de me reconvertir
              dans le développement informatique.
            </p>
            <p>
              J'ai toujours apprécié aprprendre de nouvelles compétences dans ma précédente carrière et l'univers de l'IT m'offre une opportunité
              incroyable de continuer à évoluer dans un domaine en constante innovation.
            </p>
            <p>
              Ce qui me plaît particulièrement dans le développement, c'est la possibilité de créer des solutions concrètes
              qui peuvent avoir un impact réel. Chaque projet est une opportunité d'apprendre de nouvelles choses, de progresser et de relever
              de nouveaux défis humains et techniques.
            </p>
            <p>
              Aujourd'hui en 3ème année de MIAGE à l'Université d'Orléans, je suis déterminé à faire de cette reconversion
              une réussite et à contribuer activement à des projets innovants.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h3>Mes valeurs</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="internship-section">
          <div className="internship-card">
            <MdWorkOutline className="internship-icon" />
            <h3>Recherche de stage | alternance</h3>
            <p>Je suis actuellement à la recherche d'un stage en développement web à partir du <strong>11 mai 2025</strong>.</p>
            <p>Et d'une alternance à partir de <strong>septembre 2026</strong> pour une durée de 24 mois dans le cadre de ma formation MIAGE.</p>
            <p className="location">
              📍 Orléans de préférence, possibilité de monter sur Paris
            </p>
            <a href="#contact" className="cta-btn">Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
