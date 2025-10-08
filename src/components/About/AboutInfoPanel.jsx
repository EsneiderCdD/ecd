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

  // Determinar si es un archivo de imagen sin descripción
  const isImageOnly = file.type === "Imagen" && !file.description;

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

      {/* Nombre - no mostrar si es imagen sin descripción */}
      {!isImageOnly && <h2 className={styles.title}>{file.name}</h2>}

      {/* Botones - mostrar solo si existen */}
      {(file.downloadUrl || file.linkUrl) && (
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
      )}

      {/* Descripción - no mostrar si es imagen sin descripción */}
      {!isImageOnly && file.description && (
        <div className={styles.details}>
          <h3>Detalles</h3>
          {/* Renderizar como HTML si contiene tags, sino como texto */}
          {typeof file.description === 'string' && file.description.includes('<') ? (
            <div dangerouslySetInnerHTML={{ __html: file.description }} />
          ) : (
            <p>{file.description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AboutInfoPanel;