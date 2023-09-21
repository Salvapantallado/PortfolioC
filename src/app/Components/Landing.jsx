import styles from "../page.module.css";

export default function Landing({languageButton}) {
  const spanishLogo = {
    a: "LEM",
    b: "SOY",
    c: "DESARROLLADOR WEB",
    d: "JUNIOR"
  }
  const englishLogo = {
    a: "LEM",
    b: "I AM",
    c: "A JUNIOR",
    d: "WEB DEVELOPER"
  }
  return (
    <>
      <div className={styles.Landing}>
        <div className={styles.videoWrapper}>
        <video disablePictureInPicture controls={false} autoPlay muted loop preload='true'>
        <source src="/video/background.mp4" type="video/mp4" />
        </video>
        </div>
        {languageButton === true ? (
          <div className={styles.bigTitle}>
          <div className={styles.bigTitleLogo}>
            <h1>{englishLogo.a}</h1>
          </div>
          <div className={styles.smallTitle}>
            <h3>{englishLogo.b}</h3>
          </div>
        <div className={styles.bigTitleDescription}>
          <h3>Lighuen E. Miranda</h3>
        </div>
        <div className={styles.smallTitle2}>
          <div>
            <h3>{englishLogo.c}</h3>
            <h3>{englishLogo.d}</h3>
          </div>
        </div>
        </div>
        ) : (<div className={styles.bigTitle}>
          <div className={styles.bigTitleLogo}>
            <h1>{spanishLogo.a}</h1>
          </div>
          <div className={styles.smallTitle}>
            <h3>{spanishLogo.b}</h3>
          </div>
        <div className={styles.bigTitleDescription}>
          <h3>Lighuen E. Miranda</h3>
        </div>
        <div className={styles.smallTitle2}>
          <div>
            <h3>{spanishLogo.c}</h3>
            <h3>{spanishLogo.d}</h3>
          </div>
        </div>
        </div>)}
        
      </div>
    </>
  );
}
