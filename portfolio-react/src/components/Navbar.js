function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">MyPortfolio</a>
        <div>
          <a href="#projects" className="nav-link d-inline text-light">Projects</a>
          <a href="#contact" className="nav-link d-inline text-light">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;