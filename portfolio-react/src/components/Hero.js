function Hero() {
  return (
    <section id="home" className="hero text-center d-flex align-items-center">
      <div className="container">
        <h1>GSL Creators</h1>
        <p className="lead">Frontend Developer | React Developer</p>

        <p className="mt-3">
          I build clean, responsive, and user-friendly web applications using modern technologies like React and Bootstrap.
        </p>

        <a href="#projects" className="btn btn-primary mt-3 me-2">
          View Work
        </a>

        <a href="/resume.pdf" className="btn btn-outline-light mt-3" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
