// src/components/About/AboutInfoPanel.jsx
import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";

function AboutInfoPanel() {
  const [width, setWidth] = useState(250); // ancho inicial del panel
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = window.innerWidth - e.clientX; // calcular desde borde derecho
    if (newWidth > 150 && newWidth < 600) { // límites opcionales
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
      {/* Resizer handle */}
      <div className={styles.resizer} onMouseDown={handleMouseDown} />
      <p>Panel de información</p>
    </div>
  );
}

export default AboutInfoPanel;
