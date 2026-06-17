import styles from "./Hero.module.css";

function Hero() {
  return (
    <div>
      <section id="hero" className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.className}>Lharyzza Va'ai.</h1>
          <h2 className={styles.tagline}>I build things for the web.</h2>

          <p className={styles.bio}>
            I'm a web developer based in Auckland, NZ. A career changer from the
            government sector with a passion for building clean, purposeful
            digital experiences. Currently available for freelance work or
            employment.
          </p>

          <div className={styles.callToAction}>
            <a href="#projects" className={styles.btnPrimary}>
              See my work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
