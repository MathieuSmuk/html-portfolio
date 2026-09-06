import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";

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

        <Projects />

        <Skills />

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
