import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import { Download, ExternalLink } from "lucide-react";


function AboutInfoPanel({ file }) {
  const [width, setWidth] = useState(400);
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

  const getYouTubeEmbedUrl = (url) => {
    try {
      if (url.includes("youtu.be")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      } else if (url.includes("youtube.com/watch")) {
        const params = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${params}`;
      }
      return url;
    } catch {
      return url;
    }
  };


  return (
    <div className={styles.infoPanel} style={{ width: `${width}px` }}>
      <div className={styles.resizer} onMouseDown={handleMouseDown} />

      {/* Imagen o video dinámico */}
      {file.previewUrl && (
        <div className={styles.imageBox}>
          {file.previewUrl.includes("youtube.com") || file.previewUrl.includes("youtu.be") ? (
            <iframe
              className={styles.previewImage}
              src={getYouTubeEmbedUrl(file.previewUrl)}
              title={file.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={file.previewUrl}
              alt={`Vista previa de ${file.name}`}
              className={styles.previewImage}
            />
          )}
        </div>
      )}

      {/* Nombre - no mostrar si es imagen sin descripción */}
      {!isImageOnly && <h2 className={styles.title}>{file.name}</h2>}

      {/* Botones - mostrar solo si existen */}
      {(file.downloadUrl || file.linkUrl || file.links) && (
        <div className={styles.buttons}>
          {file.downloadUrl && (
            <a href={file.downloadUrl} download>
              <button className={styles.winButton}>
                <Download size={16} style={{ marginRight: "6px" }} />
                Descargar
              </button>
            </a>
          )}
          {/* Si hay múltiples links como array */}
          {file.links && Array.isArray(file.links) ? (
            file.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <button className={styles.winButton}>
                  <ExternalLink size={16} style={{ marginRight: "6px" }} />
                  {link.label || "Ver"}
                </button>
              </a>
            ))
          ) : (
            /* Link individual (compatibilidad con formato anterior) */
            file.linkUrl && (
              <a href={file.linkUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.winButton}>
                  <ExternalLink size={16} style={{ marginRight: "6px" }} />
                  Ver
                </button>
              </a>
            )
          )}
        </div>
      )}

      {/* Descripción - no mostrar si es imagen sin descripción */}
      {!isImageOnly && file.description && (
        <div className={styles.details}>
          {/* Si es un array de descripciones, renderizar cada una como párrafo separado */}
          {Array.isArray(file.description) ? (
            file.description.map((desc, index) => (
              <p key={index} className={styles.descriptionParagraph}>
                {desc}
              </p>
            ))
          ) : (
            /* Renderizar como HTML si contiene tags, sino como texto */
            typeof file.description === 'string' && file.description.includes('<') ? (
              <div dangerouslySetInnerHTML={{ __html: file.description }} />
            ) : (
              <p>{file.description}</p>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default AboutInfoPanel;