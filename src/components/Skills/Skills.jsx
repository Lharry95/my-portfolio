import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Agile / Scrum",
      "Trello",
      "VS Code",
      "CI/CD",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>Skills</h2>

      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.category} className={styles.group}>
            {/* Category heading e.g. "Frontend" */}
            <h3 className={styles.groupTitle}>{group.category}</h3>

            <ul className={styles.skillList}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.skillTag}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
