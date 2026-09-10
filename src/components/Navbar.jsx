import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          aria-label="Mathieu Smuk home"
          onClick={closeMenu}
        >
          MS
        </a>

        <button
          className="menu-button"
          type="button"
          ref={menuButtonRef}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>

          <span
            className={`menu-icon ${isMenuOpen ? "menu-icon-open" : ""}`}
            aria-hidden="true"
          >
            <span></span>
            <span></span>
          </span>
        </button>

        <ul
          className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}
          id="primary-navigation"
        >
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
