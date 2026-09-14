import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TagList from '../components/TagList'
import { fetchProject } from '../api'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError('')
      setNotFound(false)
      setProject(null)
      try {
        const data = await fetchProject(projectId)
        if (!cancelled) setProject(data)
      } catch (err) {
        if (!cancelled) {
          if (err.status === 404) {
            setNotFound(true)
          } else {
            setError(
              err instanceof TypeError
                ? 'Cannot reach the API. Start the backend in /server and reload this page.'
                : err.message || 'Could not load this project.',
            )
          }
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [projectId])

  if (loading) {
    return (
      <section className="page-hero">
        <div className="status-block" aria-live="polite">
          <div className="spinner" aria-hidden="true" />
          <p className="tagline">Loading project...</p>
        </div>
      </section>
    )
  }

  if (notFound) {
    return (
      <section className="page-hero">
        <h1>Project not found</h1>
        <p className="tagline">There is no project with the id "{projectId}".</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="page-hero">
        <h1>Could not load project</h1>
        <p className="tagline status-error" role="alert">
          {error}
        </p>
        <div className="hero-actions">
          <Link className="btn btn-accent" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <Link className="back-link" to="/projects">
        &lt; Back to projects
      </Link>

      <article>
        <img className="detail-img" src={project.image} alt={`${project.title} cover`} />
        <h1>{project.title}</h1>
        <span className="date">{project.date}</span>
        <p className="detail-description">{project.description}</p>
        <TagList tags={project.techStack} />
        <h2>Highlights</h2>
        <ul className="detail-list">
          {project.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="btn btn-accent" href={project.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </article>
    </section>
  )
}
