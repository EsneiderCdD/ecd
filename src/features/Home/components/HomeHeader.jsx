import styles from '../styles/HomeHeader.module.css';

function HomeHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.positionBadge}>POS</span>
      <div className={styles.jobTitles}>
        <span className={styles.jobTitle}>Desarrollador FullStack</span>
        <span className={styles.jobTitleSecondary}>Analista de Datos</span>
      </div>
    </div>
  );
}

export default HomeHeader;
