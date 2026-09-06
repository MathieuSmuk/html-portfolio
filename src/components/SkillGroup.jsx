function SkillGroup({ group }) {
  const { title, description, skills } = group;

  return (
    <article className="skill-group">
      <div className="skill-group-heading">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <ul className="skill-list" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillGroup;
