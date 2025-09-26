import { Link } from "react-router-dom";
import styles from "../About/About.module.css";

function FileTable({ files }) {
  return (
    <div className={styles.table}>
      {/* Encabezado */}
      <div className={`${styles.tableRow} ${styles.headerRow}`}>
        <span className={styles.name}>Nombre</span>
        <span className={styles.date}>Fecha de modificación</span>
        <span className={styles.type}>Tipo</span>
        <span className={styles.size}>Tamaño</span>
      </div>

      {/* Filas dinámicas */}
      {files.map((file, index) => {
        const projectId = file.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/[@]/g, "");

        return (
          <div key={index} className={styles.tableRow}>
            <span className={styles.name}>
              <span className={styles.icon}>{file.icon}</span>
              {file.type === "Carpeta" ? (
                <Link to={`/projects/${projectId}`}>{file.name}</Link>
              ) : (
                file.name
              )}
            </span>
            <span className={styles.date}>{file.date}</span>
            <span className={styles.type}>{file.type}</span>
            <span className={styles.size}>{file.size}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FileTable;
