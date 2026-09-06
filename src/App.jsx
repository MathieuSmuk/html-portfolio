import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import ExperienceEducation from "./sections/ExperienceEducation.jsx";
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

        <ExperienceEducation />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
