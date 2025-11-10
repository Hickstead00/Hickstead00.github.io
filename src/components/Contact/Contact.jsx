import { useState } from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mldaedpb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Me contacter</h2>
        <p className="section-subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informations de contact</h3>

            <div className="info-item">
              <MdEmail className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:virgile.bdin@gmail.com">virgile.bdin@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/virgilebodin/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/virgilebodin
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaGithub className="info-icon" />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Hickstead00" target="_blank" rel="noopener noreferrer">
                  github.com/Hickstead00
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {status === 'success' && (
              <p className="status-message success">Message envoyé avec succès !</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Erreur lors de l'envoi. Réessayez plus tard.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
