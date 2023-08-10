import Link from "next/link";
import styles from "../page.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="#home" className={styles.navLogo}>
        <h1>LEM</h1>
        <h1>DEV</h1>
      </Link>
      <div className={styles.navLinks}>
      <Link href="#stack">
          <h3>STACK</h3>
        </Link>
        <Link href="#projects">
          <h3>PROJECTS</h3>
        </Link>
        <Link href="#contact">
          <h3>CONTACT</h3>
        </Link>
      </div>
    </nav>
  );
}
