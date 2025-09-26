// src/components/About/AboutSidebar.jsx
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";

function AboutSidebar() {
  const [width, setWidth] = useState(200); // ancho inicial
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX; // medimos desde el borde izquierdo
    if (newWidth > 150 && newWidth < 400) {
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

  return (
    <div className={styles.sidebar} style={{ width: `${width}px` }}>
      {/* Resizer handle */}
      <div className={styles.sidebarResizer} onMouseDown={handleMouseDown} />

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <span role="img" aria-label="Escritorio">🖥️</span> Escritorio
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <span role="img" aria-label="Sobre mí">👤</span> Sobre mí
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <span role="img" aria-label="Proyectos">📂</span> Proyectos
      </NavLink>
    </div>
  );
}

export default AboutSidebar;
