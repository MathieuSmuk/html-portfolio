function ProjectCard({ project, position }) {
  const {
    title,
    category,
    description,
    highlights,
    technologies,
    repositoryUrl,
    liveUrl,
  } = project;

  const projectNumber = String(position + 1).padStart(2, "0");

  return (
    <article className="project-card">
      <div className="project-card-header">
        <p className="project-number" aria-hidden="true">
          {projectNumber}
        </p>

        <p className="project-category">{category}</p>
      </div>

      <div className="project-card-body">
        <h3>{title}</h3>

        <p className="project-description">{description}</p>

        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <ul className="technology-list" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            View live project
            <span aria-hidden="true"> ↗</span>
          </a>
        )}

        {repositoryUrl && (
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            View source code
            <span aria-hidden="true"> ↗</span>
          </a>
        )}

        {!liveUrl && !repositoryUrl && (
          <p className="project-links-pending">Project links coming soon</p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
