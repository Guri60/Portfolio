const projects = [
  {
    title: "Shopping Cart App",
    desc: "Built using React and Redux, this app allows users to add, remove, and manage products in a cart with dynamic state updates.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
    live: "https://react.dev",
    github: "https://github.com/"
  },
  {
    title: "Todo List App",
    desc: "A simple task management app built with JavaScript that allows users to add, delete, and organize daily tasks efficiently.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    live: "https://getbootstrap.com",
    github: "https://github.com/"
  },
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with React and Bootstrap to showcase projects, skills, and contact information.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    live: "https://vitejs.dev",
    github: "https://github.com/"
  }
];

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">
        {projects.map((p, index) => (
          <div className="col-md-4" key={index}>
            <div className="project-card">

              <div className="image-container">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="p-3">
                <h5>{p.title}</h5>
                <p>{p.desc}</p>

                <div className="d-flex gap-2">
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary btn-sm w-50"
                  >
                    Live Demo
                  </a>

                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm w-50"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
