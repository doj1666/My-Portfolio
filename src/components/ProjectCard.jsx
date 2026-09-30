import AnimatedCard from './AnimatedCard'

function ProjectCard({ project, index }) {
  return (
    <AnimatedCard index={index}>
      <article className="card">
        <div className="card-image-wrapper">
          <img src={project.image} alt={project.imageAlt} className="card-image" />
        </div>

        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-text project-description">{project.description}</p>

          <ul className="tag-list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>

          <div className="card-buttons">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary button-small"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary button-small"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </AnimatedCard>
  )
}

export default ProjectCard
