import Link from "next/link";
import styles from "../page.module.css";

export default function Footer({ classStyle }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcons}>
        <Link
          href="https://github.com/Salvapantallado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/lighuen-miranda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
        </Link>
      </div>
    </div>
  );
}
