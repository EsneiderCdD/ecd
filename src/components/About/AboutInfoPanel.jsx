import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useAchievements } from "@/context/AchievementsContext";

// Función para convertir texto con formato markdown a HTML
const formatText = (text) => {
  if (!text || typeof text !== 'string') return text;

  // Convertir ***texto*** a <strong><em>texto</em></strong> (negrilla + cursiva)
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

  // Convertir **texto** a <strong>texto</strong> (negrilla)
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convertir *texto* a <em>texto</em> (cursiva)
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

  return text;
};

function AboutInfoPanel({ file }) {
  const { trackPdfDownload } = useAchievements();
  const [width, setWidth] = useState(400);
  const [currentContributionIndex, setCurrentContributionIndex] = useState(0);
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

  // Funciones para navegación de contribuciones
  const handlePreviousContribution = () => {
    if (file?.contributions && currentContributionIndex > 0) {
      setCurrentContributionIndex(currentContributionIndex - 1);
    }
  };

  const handleNextContribution = () => {
    if (file?.contributions && currentContributionIndex < file.contributions.length - 1) {
      setCurrentContributionIndex(currentContributionIndex + 1);
    }
  };

  // Resetear índice cuando cambie el archivo
  useEffect(() => {
    setCurrentContributionIndex(0);
  }, [file]);

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

  // Obtener la contribución actual si es tipo Dinámico
  const currentContribution = file.type === "Dinámico" && file.contributions
    ? file.contributions[currentContributionIndex]
    : null;

  // Determinar si mostrar navegación de contribuciones
  const showContributionNavigation = file.type === "Dinámico" && file.contributions && file.contributions.length > 1;

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
      {(file.previewUrl || currentContribution?.previewUrl) && (
        <div className={styles.imageBox}>
          {(() => {
            const previewUrl = currentContribution?.previewUrl || file.previewUrl;
            if (previewUrl.includes("youtube.com") || previewUrl.includes("youtu.be")) {
              return (
                <iframe
                  className={styles.previewVideo}  // ← NUEVA CLASE
                  src={getYouTubeEmbedUrl(previewUrl)}
                  title={currentContribution?.name || file.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              );
            } else {
              return (
                <img
                  src={previewUrl}
                  alt={`Vista previa de ${currentContribution?.name || file.name}`}
                  className={styles.previewImage}
                />
              );
            }
          })()}
        </div>
      )}

      {/* Nombre - no mostrar si es imagen sin descripción */}
      {/* {!isImageOnly && <h2 className={styles.title}>{file.name}</h2>} */}

      {/* Navegación de contribuciones */}
      {showContributionNavigation && (
        <div className={styles.contributionNavigation}>
          <button
            className={styles.navButton}
            onClick={handlePreviousContribution}
            disabled={currentContributionIndex === 0}
          >
            <ChevronLeft size={16} />
          </button>
          <span className={styles.contributionCounter}>
            {currentContributionIndex + 1} / {file.contributions.length}
          </span>
          <button
            className={styles.navButton}
            onClick={handleNextContribution}
            disabled={currentContributionIndex === file.contributions.length - 1}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Título de la contribución actual */}
      {currentContribution && (
        <h3 className={styles.contributionTitle}>{currentContribution.name}</h3>
      )}

      {/* Botones - mostrar solo si existen */}
      {(file.linkUrl || file.links) && (
        <div className={styles.buttons}>
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
              <a
                href={file.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Si es una ficha técnica (PDF o Word), contar vista única
                  if (file.type === 'PDF' || file.type === 'Word') {
                    const fileId = `${file.name}||${file.date}`;
                    try { trackPdfDownload(fileId); } catch (e) { /* silent */ }
                  }
                }}
              >
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
      {!isImageOnly && (currentContribution?.description || file.description) && (
        <div className={styles.details}>
          {/* Si es un array de descripciones, renderizar cada una como párrafo separado */}
          {(() => {
            const description = currentContribution?.description || file.description;
            if (Array.isArray(description)) {
              return description.map((desc, index) => (
                <p
                  key={index}
                  className={styles.descriptionParagraph}
                  dangerouslySetInnerHTML={{ __html: formatText(desc) }}
                />
              ));
            } else {
              return <p dangerouslySetInnerHTML={{ __html: formatText(description) }} />;
            }
          })()}
        </div>
      )}
    </div>
  );
}

export default AboutInfoPanel;