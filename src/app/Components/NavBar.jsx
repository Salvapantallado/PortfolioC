import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";

export default function NavBar({ test, handleSetTest }) {
  // console.log(test, "esto es test del navbar");



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
      {/* <label className={styles.switch}>
        <input
          id="checkLNG"
          type="checkbox"
          onClick={() => handleSetTest("hola")}
          className={styles.cb}
        />
        <span className={styles.toggle}>
          <span className={styles.left}>off</span>
          <span className={styles.right}>on</span>
        </span>
      </label> */}
    </nav>
  );
}
