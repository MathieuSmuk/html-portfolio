import CareerEntry from "../components/CareerEntry.jsx";
import { education, experience } from "../data/career.js";

function ExperienceEducation() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="experience-heading">
          <div>
            <p className="section-label">Background</p>
            <h2>Experience and education</h2>
          </div>

          <p className="experience-introduction">
            My professional and academic background has developed the analytical
            thinking, collaboration, accuracy, and business perspective that I
            now bring to software development.
          </p>
        </div>

        <div className="career-columns">
          <div className="career-column">
            <h3>Experience</h3>

            <div className="career-list">
              {experience.map((entry) => (
                <CareerEntry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>

          <div className="career-column">
            <h3>Education</h3>

            <div className="career-list">
              {education.map((entry) => (
                <CareerEntry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
