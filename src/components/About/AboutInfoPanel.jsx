import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import { Download, ExternalLink } from "lucide-react";


function AboutInfoPanel({ file }) {
  const [width, setWidth] = useState(280); // ancho inicial
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth > 200 && newWidth < 600) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!file) {
    return (
      <div className={styles.infoPanel} style={{ width: `${width}px` }}>
        <div className={styles.resizer} onMouseDown={handleMouseDown} />
        <p style={{ padding: "20px", textAlign: "center", color: "#666" }}>
          Selecciona un archivo o carpeta para ver la información
        </p>
      </div>
    );
  }

  return (
    <div className={styles.infoPanel} style={{ width: `${width}px` }}>
      <div className={styles.resizer} onMouseDown={handleMouseDown} />

      {/* Imagen dinámica */}
      {file.previewUrl && (
        <div className={styles.imageBox}>
          <img
            src={file.previewUrl}
            alt={`Vista previa de ${file.name}`}
            className={styles.previewImage}
          />
        </div>
      )}

      {/* Nombre */}
      <h2 className={styles.title}>{file.name}</h2>

      {/* Botón de descarga si existe */}
      <div className={styles.buttons}>
        {file.downloadUrl && (
          <a href={file.downloadUrl} download>
            <button className={styles.winButton}>
              <Download size={16} style={{ marginRight: "6px" }} />
              Descargar
            </button>
          </a>
        )}
        {file.linkUrl && (
          <a href={file.linkUrl} target="_blank" rel="noopener noreferrer">
            <button className={styles.winButton}>
              <ExternalLink size={16} style={{ marginRight: "6px" }} />
              Ver
            </button>
          </a>
        )}
      </div>

      {/* Descripción */}
      <div className={styles.details}>
        <h3>Detalles</h3>
        <p>{file.description || "No hay detalles disponibles para este archivo."}</p>
      </div>
    </div>
  );
}

export default AboutInfoPanel;
