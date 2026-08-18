import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import TagList from '../components/TagList'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
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