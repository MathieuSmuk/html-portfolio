function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container about-grid">
        <div className="about-heading">
          <p className="section-label">About</p>
          <h2>Building useful software with purpose</h2>
        </div>

        <div className="about-content">
          <div className="about-copy">
            <p>
              I am a full-stack developer based in Ontario, Canada, focused on
              building responsive and reliable web applications. My development
              journey began with a curiosity about how websites work and a
              desire to turn my own ideas into working software.
            </p>

            <p>
              What started with HTML, CSS, and JavaScript now includes building
              complete applications with React, Node.js, Express, and
              PostgreSQL. Through projects such as a personal finance tracker,
              journal platform, and book tracker, I have worked with
              authentication, REST APIs, relational databases, validation,
              search, filtering, pagination, and production deployment.
            </p>

            <p>
              My Bachelor of Commerce from Ontario Tech University and
              Accounting Business Administration diploma from Durham College
              give me an additional business perspective. I enjoy considering
              not only how an application works technically, but also how it can
              solve practical problems for the people using it.
            </p>
          </div>

          <ul className="about-highlights" aria-label="Development highlights">
            <li className="about-highlight">
              <h3>Business perspective</h3>
              <p>
                I connect technical decisions with practical requirements,
                workflows, and user needs.
              </p>
            </li>

            <li className="about-highlight">
              <h3>Full-stack development</h3>
              <p>
                I build interfaces, APIs, authentication systems, and relational
                database features.
              </p>
            </li>

            <li className="about-highlight">
              <h3>Complete delivery</h3>
              <p>
                I take projects from initial planning through testing,
                documentation, and deployment.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
