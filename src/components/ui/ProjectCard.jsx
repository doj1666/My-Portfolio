import AnimatedCard from './AnimatedCard'
import Button from './Button'

function ProjectCard({ project, index }) {
  return (
    <AnimatedCard index={index}>
      <article className="card">
        <div className="card-image-wrapper">
          <img src={project.image} alt={project.imageAlt} className="card-image" />
        </div>

        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-text">{project.description}</p>

          <div className="card-footer">
            <ul className="tag-list" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>

            <div className="card-buttons">
              {project.liveUrl && (
                <Button variant="primary" href={project.liveUrl}>Live Demo</Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" href={project.githubUrl}>GitHub</Button>
              )}
            </div>
          </div>
        </div>
      </article>
    </AnimatedCard>
  )
}

export default ProjectCard
