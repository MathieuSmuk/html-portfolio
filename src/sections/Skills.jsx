import SkillGroup from "../components/SkillGroup.jsx";
import skillGroups from "../data/skills.js";

function Skills() {
  return (
    <section className="section section-muted skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <div>
            <p className="section-label">Capabilities</p>
            <h2>Technical skills</h2>
          </div>

          <p className="skills-introduction">
            I use these technologies to build complete applications—from
            responsive interfaces and API controllers to relational databases
            and production deployment.
          </p>
        </div>

        <div className="skill-group-list">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
