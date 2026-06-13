import styles from "./Contact.module.css";

/* --- Contact links data --- */
const contactLinks = [
  {
    label: "Email",
    href: "mailto:lharyzza@icloud.com",
    display: "lharyzza@icloud.com",
    ariaLabel: "Send me an email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lharyzza-va-ai-499447147/",
    display: "linkedin.com/in/Lharyzza",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/Lharry95",
    display: "github.com/Lharry95",
    ariaLabel: "Visit my GitHub profile",
  },
];

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.overline}>What's next?</p>

      <h2 className={styles.heading}>Get In Touch</h2>

      <p className={styles.body}>
        I'm currently available for freelance work and open to new
        opportunities. Whether you have a project in mind, a question, or just
        want to say hi — my inbox is always open.
      </p>

      {/* --- Contact links --- */}
      <ul className={styles.linkList}>
        {contactLinks.map((link) => (
          <li key={link.label} className={styles.linkItem}>
            {/* Category label e.g. "Email" */}
            <span className={styles.linkLabel}>{link.label}</span>

            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className={styles.link}
            >
              {link.display}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
