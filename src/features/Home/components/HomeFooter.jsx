import styles from '../styles/HomeFooter.module.css';

function HomeFooter() {
  return (
    <div className={styles.footer}>
      <span className={styles.footerButton} style={{ visibility: 'hidden' }}>Sobre mí</span>
      <span className={`${styles.footerButton} ${styles.footerButtonOutline}`} style={{ visibility: 'hidden' }}>Proyectos</span>
    </div>
  );
}

export default HomeFooter;
