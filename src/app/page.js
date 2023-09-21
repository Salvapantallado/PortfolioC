'use client';
import styles from "./page.module.css";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import Projects from "./projects/page";
import Contact from "./contact/page";
import KnowledgeStack from "./knowledge/page";
import { useState } from "react";

export default function Home() {
  const [test, setTest] = useState('english')

  function handleSetTest(e){
    setTest(e)
  }
  return (
    <main className={styles.main}>
      <NavBar
        test={test}
        handleSetTest={handleSetTest}
      />
      <Landing test={test}  handleSetTest={handleSetTest}/>
      <KnowledgeStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
