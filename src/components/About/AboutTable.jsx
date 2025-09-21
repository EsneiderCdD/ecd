import styles from "./About.module.css";

function AboutTable() {
  return (
    <div className={styles.table}>
      <div className={styles.tableRow}>
        <span className={styles.icon}>📁</span>
        <span className={styles.name}>Carpeta 1</span>
        <span className={styles.type}>Carpeta</span>
      </div>
      <div className={styles.tableRow}>
        <span className={styles.icon}>📄</span>
        <span className={styles.name}>Archivo.txt</span>
        <span className={styles.type}>Documento</span>
      </div>
    </div>
  );
}

export default AboutTable;
