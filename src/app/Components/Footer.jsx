import Link from "next/link";
import styles from "../page.module.css";

export default function Footer({ classStyle }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcons}>
        <Link
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original"></i>
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
        </Link>
      </div>
      <div className={classStyle}>
        <h3>scroll</h3>
      </div>
    </div>
  );
}
