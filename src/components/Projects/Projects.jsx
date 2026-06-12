import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.js";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      {/* --- Featured projects --- */}
      <div className={styles.featured}>
        {projects
          .filter((p) => p.featured === true)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>

      {/* --- Other projects heading --- */}
      <h3 className={styles.otherTitle}>Other Projects</h3>

      {/* --- Non-featured projects ---
          Same pattern — filter for featured === false,
          then map each one to a ProjectCard. */}
      <div className={styles.grid}>
        {projects
          .filter((p) => p.featured === false)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
