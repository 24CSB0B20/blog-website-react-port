import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { fetchProjects } from '../api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError('')
      try {
        const data = await fetchProjects()
        if (!cancelled) setProjects(data)
      } catch (err) {
        if (!cancelled) {
          setProjects([])
          setError(
            err instanceof TypeError
              ? 'Cannot reach the API. Start the backend in /server and reload this page.'
              : err.message || 'Could not load projects.',
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <section className="page-hero">
        <h1>Projects</h1>
        <p className="tagline">things I've built, on and off campus</p>
      </section>

      <section>
        {loading && (
          <div className="status-block" aria-live="polite">
            <div className="spinner" aria-hidden="true" />
            <p className="tagline">Loading projects...</p>
          </div>
        )}

        {!loading && error && (
          <div className="status-block" role="alert">
            <p className="status-error">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="card-row">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
