// src/components/common/FileTable.jsx
import { useNavigate } from "react-router-dom";
import styles from "../About/AboutTable.module.css";
import { getStatusTagConfig, tagVariants } from "../../data/statusTags";

function FileTable({ files, selectedFile, setSelectedFile }) {
  const navigate = useNavigate();

  const isIconUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const u = url.toLowerCase();
    return (
      (u.includes("flaticon.com") || u.includes("icons8.com")) &&
      (u.endsWith(".png") || u.endsWith(".svg") || u.includes("/png") || u.includes("/svg"))
    );
  };

  const handleClick = (file) => {
    if (setSelectedFile) setSelectedFile(file);
  };

  // Función para renderizar el estado con tags especiales
  const renderStatus = (status) => {
    const tagConfig = getStatusTagConfig(status);

    if (tagConfig) {
      const variant = tagVariants[tagConfig.variant];
      return (
        <span
          className={styles.statusTag}
          style={{
            background: variant.background,
            color: variant.color,
            border: variant.border,
            boxShadow: variant.boxShadow
          }}
        >
          {tagConfig.text}
        </span>
      );
    }

    // Si no hay configuración especial, mostrar el estado normal
    return status;
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
        <span className={styles.size}>Estado</span>
      </div>

      {/* Filas dinámicas */}
      {files.map((file, index) => (
        <div
          key={index}
          className={`${styles.tableRow} ${selectedFile?.name === file.name ? styles.selectedRow : ""
            }`}
          onClick={() => handleClick(file)}
          onDoubleClick={() => handleDoubleClick(file)}
        >
          <span className={styles.name}>
            <span className={styles.rowIcon}>
              {file.iconUrl ? (
                <img src={file.iconUrl} alt="" />
              ) : isIconUrl(file.previewUrl) ? (
                <img src={file.previewUrl} alt="" />
              ) : (
                <span>{file.icon}</span>
              )}
            </span>
            {file.name}
          </span>
          <span className={styles.date}>{file.date}</span>
          <span className={styles.type}>{file.type}</span>
          <span className={styles.size}>
            {renderStatus(file.size)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FileTable;


