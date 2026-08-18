import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <h1>Projects</h1>
        <p className="tagline">things I've built, on and off campus</p>
      </section>

      <section>
        <div className="card-row">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}