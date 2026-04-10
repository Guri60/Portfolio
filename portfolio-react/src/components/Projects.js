const projects = [
  {
    title: "Project One",
    desc: "Short description",
    live: "#",
    github: "#"
  },
  {
    title: "Project Two",
    desc: "Short description",
    live: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">
        {projects.map((p, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 mb-3">
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
              <a href={p.live} className="btn btn-primary btn-sm">Live</a>
              <a href={p.github} className="btn btn-outline-dark btn-sm ms-2">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;