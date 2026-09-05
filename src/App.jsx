function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Mathieu Smuk home">
            MS
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section" id="home">
          <div className="container">
            <p className="eyebrow">Hello, my name is</p>

            <h1>Mathieu Smuk</h1>

            <p className="hero-title">Junior Full-Stack Developer</p>

            <p className="hero-description">
              I build responsive web applications with React, Node.js, Express,
              and PostgreSQL. My background education in business administration
              helps me connect technical solutions with practical business
              needs.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my projects
              </a>

              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container">
            <p className="section-label">About</p>
            <h2>Building useful software with purpose</h2>
            <p className="section-placeholder">
              My professional background and development story will appear here.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="section-label">Selected work</p>
            <h2>Featured projects</h2>
            <p className="section-placeholder">
              Project case studies and live application links will appear here.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <p className="section-label">Capabilities</p>
            <h2>Technical skills</h2>
            <p className="section-placeholder">
              My frontend, backend, database, and development tools will appear
              here.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <p className="section-label">Background</p>
            <h2>Experience and education</h2>
            <p className="section-placeholder">
              Relevant experience and education will appear here.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="contact">
          <div className="container">
            <p className="section-label">Get in touch</p>
            <h2>Let&apos;s work together</h2>
            <p className="section-placeholder">
              My professional contact links will appear here.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {currentYear} Mathieu Smuk. Built with React and Vite.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
