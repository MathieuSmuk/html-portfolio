import ContactLink from "../components/ContactLink.jsx";
import contactLinks from "../data/contact.js";

function Contact() {
  const availableLinks = contactLinks.filter((link) => link.href);

  return (
    <section className="section section-muted contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-heading">
          <p className="section-label">Get in touch</p>
          <h2>Let&apos;s build something useful</h2>
        </div>

        <div className="contact-content">
          <p className="contact-introduction">
            I am interested in junior full-stack and web development
            opportunities where I can contribute, continue learning, and help
            create reliable applications that solve practical problems.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Location</dt>
              <dd>Ontario, Canada</dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>Full-stack JavaScript development</dd>
            </div>
          </dl>

          <div className="contact-link-list">
            {availableLinks.map((link) => (
              <ContactLink key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
