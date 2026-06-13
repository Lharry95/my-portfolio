/* ============================================
   PROJECT CARD COMPONENT — ProjectCard.jsx

   Receives one "project" object as a prop
   and renders it as a card with a preview image.
   ============================================ */

// Shared CSS module — both ProjectCard and Projects use this file
import styles from "./Projects.module.css";

function ProjectCard({ project }) {
  // Destructure all fields from the project object
  const { title, description, tech, role, github, demo, image } = project;

  return (
    <article className={styles.card}>
      {/* --- Preview image ---
          Only renders if an image path exists on the project.
          */}
      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt={`Screenshot of ${title}`} />
        </div>
      )}

      {/* --- Card header: folder icon + links --- */}
      <div className={styles.cardHeader}>
        <div className={styles.folderIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className={styles.cardLinks}>
          {/* Only render demo link if demo is not null */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label="Live demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
            aria-label="GitHub repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>

      {/* --- Card body --- */}
      <span className={styles.role}>{role}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>

      <ul className={styles.techList}>
        {tech.map((item) => (
          <li key={item} className={styles.techTag}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
