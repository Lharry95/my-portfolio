import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.backToTop}>
        ↑ Back to top
      </a>

      <p className={styles.credit}>
        Designed & Built by{" "}
        <a
          href="https://github.com/Lharry95"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lharyzza Va'ai
        </a>
      </p>
    </footer>
  );
}

export default Footer;
