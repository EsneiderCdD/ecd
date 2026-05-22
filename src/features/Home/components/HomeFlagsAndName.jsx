import { flags } from '../data/homeData';
import styles from '../styles/HomeFlagsAndName.module.css';

function HomeFlagsAndName() {
  return (
    <div className={styles.flagsSection}>
      <div className={styles.flagsList}>
        {flags.map((url, i) => (
          <img key={i} className={styles.flagImage} src={url} alt="flag" />
        ))}
      </div>
      <div className={styles.nameContainer}>
        <h1 className={`${styles.fullName} ${styles.fullNameBadge}`}>Esneider Cadavid</h1>
      </div>
    </div>
  );
}

export default HomeFlagsAndName;
