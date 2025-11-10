import { useState, useEffect } from 'react'
import './Projects.css'
import { FaGithub, FaStar, FaCodeBranch, FaCodeCommit } from 'react-icons/fa6'

const customDescriptions = {
    'Projet-django-semestre-5': 'Application web de gestion de consultations développée avec Django, permettant aux utilisateurs de créer, modifier et suivre leurs tâches efficacement',
    'Darkest-Dungeon-Randomizer-App': 'Application de randomisation de loadouts, equipes et skills pour le jeu Darkest Dungeon, développée en JavaFX',
    'beta-lecteur': 'Application de partages de manuscrits permettant de connecter auteurs et beta-lecteurs, développée avec le framework Spring Boot',
    'Nand2Tetris': '#Licence 2ème Année#\nImplémentation complète d\'un ordinateur virtuel Nand2Tetris, incluant l\'assembleur, le compilateur et le système d\'exploitation, réalisée en Python',
    'OthelloJava': '#Licence 2ème Année#\nJeu de Othello développé en Java avec une interface CLI, incluant un algorithme d\'IA utilisant la recherche minimax',
}

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const CACHE_KEY = 'github_repos_cache'
    const CACHE_DURATION = 24 * 60 * 60 * 1000

    const checkCache = () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached)
          const now = Date.now()

          if (now - timestamp < CACHE_DURATION) {
            setRepos(data)
            setLoading(false)
            return true
          }
        }
      } catch (e) {
        console.error('Erreur lecture cache:', e)
      }
      return false
    }

    if (checkCache()) {
      return
    }

    fetch('https://api.github.com/users/Hickstead00/repos?sort=updated&per_page=100')
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          if (response.status === 403 && errorData.message?.includes('rate limit')) {
            throw new Error('Limite de requêtes API GitHub atteinte. Réessayez dans quelques minutes.')
          }
          throw new Error('Erreur lors de la récupération des repos')
        }
        return response.json()
      })
      .then(async (data) => {
        const portfolioRepos = data.filter(repo =>
          repo.topics && repo.topics.includes('portfolio')
        )

        const reposWithCommits = await Promise.all(
          portfolioRepos.map(async (repo) => {
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/Hickstead00/${repo.name}/commits?per_page=1`
              )

              let commitCount = 0
              if (commitsResponse.ok) {
                const linkHeader = commitsResponse.headers.get('Link')
                if (linkHeader) {
                  const match = linkHeader.match(/page=(\d+)>; rel="last"/)
                  commitCount = match ? parseInt(match[1]) : 1
                } else {
                  commitCount = 1
                }
              }

              return { ...repo, commitCount }
            } catch {

              return { ...repo, commitCount: 0 }
            }
          })
        )


        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: reposWithCommits,
            timestamp: Date.now()
          }))
        } catch (e) {
          console.error('Erreur sauvegarde cache:', e)
        }

        setRepos(reposWithCommits)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2 className="section-title">Mes Projets</h2>
          <div className="loading">Chargement des projets...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2 className="section-title">Mes Projets</h2>
          <div className="error">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Découvrez mes derniers projets disponibles sur GitHub
        </p>

        <div className="projects-grid">
          {repos.map(repo => (
            <div key={repo.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{repo.name}</h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  title="Voir sur GitHub"
                >
                  <FaGithub />
                </a>
              </div>

              <p className="project-description">
                {customDescriptions[repo.name] || repo.description || 'Pas de description disponible'}
              </p>

              <div className="project-footer">
                {repo.language && (
                  <span className="project-language">
                    <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                    {repo.language}
                  </span>
                )}

                <div className="project-stats">
                  <span className="stat">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="stat">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className="stat">
                    <FaCodeCommit /> {repo.commitCount || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Vue: '#41b883',
    React: '#61dafb',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
  }
  return colors[language] || '#858585'
}

export default Projects
