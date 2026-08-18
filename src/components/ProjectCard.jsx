import { Link } from 'react-router-dom'
import { useState } from 'react'
import TagList from './TagList'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  const { title, date, description, techStack, image, link } = project

  return (
    <article className="card">
      <img src={image} alt={`${title} cover`} />
      <div className="card-body">
        <h3>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <span className="date">{date}</span>
        <p>{description}</p>
        <TagList tags={techStack} />

        <div className="card-actions">
          <button
            type="button"
            className="btn btn-small"
            aria-expanded={showDetails}
            onClick={() => setShowDetails((v) => !v)}
          >
            {showDetails ? 'Hide details' : 'View details'}
          </button>
          <Link className="btn btn-small btn-accent" to={`/projects/${project.id}`}>
            Project page
          </Link>
        </div>

        {showDetails && (
          <ul className="card-details">
            {project.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}