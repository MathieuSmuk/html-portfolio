import { resumeUrl } from "../config/site.js";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "Send me a message",
    href: "mailto:mathieu.smuk@hotmail.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/MathieuSmuk",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://ca.linkedin.com/in/mathieu-smuk-b5027a183",
    external: true,
  },
  {
    id: "resume",
    label: "Résumé",
    value: "Download my résumé",
    href: resumeUrl,
    external: false,
    download: "Mathieu-Smuk-Resume.pdf",
  },
];

export default contactLinks;
