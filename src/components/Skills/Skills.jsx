import './Skills.css'
import {
  FaJava,
  FaJs,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaDatabase,
  FaTerminal
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiTypescript,
  SiDjango
} from 'react-icons/si'

function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava />, color: '#65c999' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#65c999' },
    { name: 'JavaScript', icon: <FaJs />, color: '#65c999' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#65c999' },
    { name: 'React', icon: <FaReact />, color: '#65c999' },
    { name: 'Angular', icon: <FaAngular />, color: '#65c999' },
    { name: 'Oracle SQL', icon: <FaDatabase />, color: '#65c999' },
    { name: 'Git', icon: <FaGitAlt />, color: '#65c999' },
    { name: 'Docker', icon: <FaDocker />, color: '#65c999' },
    { name: 'Bash', icon: <FaTerminal />, color: '#65c999' },
    { name: 'Python', icon: <FaPython />, color: '#65c999' },
    { name: 'Django', icon: <SiDjango />, color: '#65c999' }
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Compétences</h2>
        <p className="section-subtitle">
          Technologies et outils que je maîtrise
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
