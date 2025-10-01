// src/components/common/FileTable.jsx
import { useNavigate } from "react-router-dom";
import styles from "../About/About.module.css";

function FileTable({ files, selectedFile, setSelectedFile }) {
  const navigate = useNavigate();

  const handleClick = (file) => {
    if (setSelectedFile) setSelectedFile(file);
  };

  const handleDoubleClick = (file) => {
  
    if (file.path) {
      navigate(file.path);
      return;
    }

    if (file.linkUrl) {
    window.open(file.linkUrl, "_blank");
    return;
  }

    if (file.type === "Carpeta" || file.type === "Carpeta de archivos") {
      const projectId = file.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[@]/g, "");
      navigate(`/projects/${projectId}`);
    }
  };

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
      {files.map((file, index) => (
        <div
          key={index}
          className={`${styles.tableRow} ${
            selectedFile?.name === file.name ? styles.selectedRow : ""
          }`}
          onClick={() => handleClick(file)}
          onDoubleClick={() => handleDoubleClick(file)}
        >
          <span className={styles.name}>
            <span className={styles.icon}>{file.icon}</span>
            {file.name}
          </span>
          <span className={styles.date}>{file.date}</span>
          <span className={styles.type}>{file.type}</span>
          <span className={styles.size}>{file.size}</span>
        </div>
      ))}
    </div>
  );
}

export default FileTable;


