import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Featured projects</h2>
          </div>

          <p className="projects-introduction">
            These projects demonstrate my progression from server-rendered CRUD
            applications to complete React platforms with authentication,
            relational databases, and production deployment.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} position={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
