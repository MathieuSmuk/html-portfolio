import { resumeUrl } from "../config/site.js";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <p className="eyebrow">Hello, my name is</p>

        <h1>Mathieu Smuk</h1>

        <p className="hero-title">Junior Full-Stack Developer</p>

        <p className="hero-description">
          I build responsive web applications with React, Node.js, Express, and
          PostgreSQL. My background in business and accounting helps me connect
          technical solutions with practical business needs.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my projects
          </a>

          <a
            className="button button-secondary"
            href={resumeUrl}
            download="Mathieu-Smuk-Resume.pdf"
          >
            Download résumé
          </a>

          <a className="button button-secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
