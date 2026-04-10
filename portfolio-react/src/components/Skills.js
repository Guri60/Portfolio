function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  return (
    <section id="skills" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">Skills</h2>

        {skills.map((skill, index) => (
          <span key={index} className="badge bg-dark m-2 p-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;