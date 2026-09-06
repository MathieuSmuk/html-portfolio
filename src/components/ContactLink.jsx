function ContactLink({ link }) {
  const { label, value, href, external, download } = link;

  return (
    <a
      className="contact-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
    >
      <span className="contact-link-text">
        <span className="contact-link-label">{label}</span>
        <span className="contact-link-value">{value}</span>
      </span>

      <span className="contact-link-arrow" aria-hidden="true">
        {external ? "↗" : "→"}
      </span>
    </a>
  );
}

export default ContactLink;
