import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";

function AboutInfoPanel() {
  const [width, setWidth] = useState(280); // ancho inicial
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = window.innerWidth - e.clientX; // calcular desde borde derecho
    if (newWidth > 200 && newWidth < 600) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  // listeners globales
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.infoPanel} style={{ width: `${width}px` }}>
      {/* Línea de arrastre */}
      <div className={styles.resizer} onMouseDown={handleMouseDown} />

      {/* Contenido principal del panel */}
      <div className={styles.imageBox}>
        <img
          src="https://via.placeholder.com/200x120"
          alt="Preview"
          className={styles.previewImage}
        />
      </div>

      <h2 className={styles.title}>Título del Archivo</h2>

      <button className={styles.button}>Descargar</button>

      <div className={styles.details}>
        <h3>Detalles</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
      </div>
    </div>
  );
}

export default AboutInfoPanel;
