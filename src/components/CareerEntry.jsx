function CareerEntry({ entry }) {
  const { date, title, organization, summary, achievements } = entry;
  const hasAchievements = achievements.length > 0;

  return (
    <article className="career-entry">
      <p className="career-date">{date}</p>

      <div className="career-entry-content">
        <header className="career-entry-heading">
          <h4>{title}</h4>
          <p>{organization}</p>
        </header>

        <p className="career-summary">{summary}</p>

        {hasAchievements && (
          <ul className="career-achievements">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default CareerEntry;
