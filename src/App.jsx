import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import Hero from "./sections/Hero.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />

        <About />

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

      <Footer />
    </>
  );
}

export default App;
