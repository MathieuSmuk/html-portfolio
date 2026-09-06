function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {currentYear} Mathieu Smuk. Built with React and Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
