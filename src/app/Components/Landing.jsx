import styles from "../page.module.css";

export default function Landing() {
  return (
    <>
      <div className={styles.Landing}>
        <div className={styles.videoWrapper}>
        <video disablePictureInPicture controls={false} autoPlay muted loop preload='true'>
        <source src="/video/background.mp4" type="video/mp4" />
        </video>
        </div>
        <div className={styles.bigTitle}>
          <div className={styles.bigTitleLogo}>
            <h1>LEM</h1>
          </div>
          <div className={styles.smallTitle}>
            <h3>I AM</h3>
          </div>
        <div className={styles.bigTitleDescription}>
          <h3>Lighuen E. Miranda</h3>
        </div>
        <div className={styles.smallTitle2}>
          <div>
            <h3>A JUNIOR</h3>
            <h3>WEB DEVELOPER</h3>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
