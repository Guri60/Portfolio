function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Guri<span style={{ color: "#0d6efd" }}>Dev</span>
        </a>
        
      <div className="d-flex gap-4">
  <a href="#about" className="nav-link text-light">About</a>
  <a href="#skills" className="nav-link text-light">Skills</a>
  <a href="#projects" className="nav-link text-light">Projects</a>
  <a href="#contact" className="nav-link text-light">Contact</a>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
