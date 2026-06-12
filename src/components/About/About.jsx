import styles from "./About.module.css";

function About() {
  return (
    <div>
      <section id="about" className={styles.about}>
        <h2 className={styles.sectionTitle}>About Me!</h2>

        <div className={styles.grid}>
          <p>
            I'm a web developer based in Auckland, NZ and a proud mum of three.
            Before writing code, I spent years as a court registry officer at
            the Ministry of Justice. This was an environment that demanded
            precision, process and careful attention to detail under pressure.
          </p>

          <p>
            I brought those same qualities into software development. My son has
            autism, which inspired my first web project: an educational
            awareness site built with genuine purpose behind it, not just to
            tick a box.
          </p>

          <p>
            I'm a faster learner who thrives on picking up new technologies
            quickly. In one bootcamp I went from HTML basics to helping build a
            3D BIM viewer using Three.js and web-ifc.
          </p>

          <p>
            I'm currently available for freelance work across web development,
            full-stack development and front-end development. If you have a
            project in mind, or just want to chat about tech, feel free to reach
            out!
          </p>

          <a
            href="/LharyzzaVaai-CV26.pdf"
            download="LharyzzaVaai-CV26.pdf"
            className={styles.cvButton}
          >
            Download CV
          </a>
        </div>

        <div className={styles.photoWrapper}>
          <div className={styles.photoPlaceholder}>
            <span>LV</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
