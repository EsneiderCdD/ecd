import { Link } from 'react-router-dom';
import { stats } from '../data/homeData';
import styles from '../styles/HomeStats.module.css';

function HomeStats() {
  const [age, education, experience] = stats;

  return (
    <div className={styles.statsSection}>
      <div className={styles.statsColumn}>
        <div className={styles.statItem} style={{ marginLeft: 12 }}>
          <span className={styles.statValue}>{age.value}</span>
          <span className={styles.statLabel}>{age.label}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{education.value}</span>
          <span className={styles.statLabel}>{education.label}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{experience.value}</span>
          <span className={styles.statLabel}>{experience.label}</span>
        </div>
      </div>
      <div className={styles.verticalDivider} />
      <div className={styles.statsColumn}>
        <Link to="/about" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
          Sobre mí
        </Link>
        <Link to="/projects" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
          Proyectos
        </Link>
      </div>
    </div>
  );
}

export default HomeStats;
