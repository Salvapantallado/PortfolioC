// import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import Footer from './Components/Footer'
import Projects from './projects/page'
import Contact from './contact/page'
import KnowledgeStack from './knowledge/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <Landing/>
      <KnowledgeStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
