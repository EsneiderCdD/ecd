// src/components/About/AboutSidebar.jsx
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";

function AboutSidebar() {
  const [width, setWidth] = useState(200);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX; // medimos desde el borde izquierdo
    if (newWidth > 120 && newWidth < 400) {
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
        <div className={styles.iconsidebarContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png"
            alt="Escritorio"
            title="Escritorio"
            className={styles.iconsidebar}
          />
          <p className="text-navigation">Escritorio</p>
        </div>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <div className={styles.iconsidebarContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Sobre mí"
            title="Sobre mí"
            className={styles.iconsidebar}
          />
          <p className="text-navigation">Sobre mí</p>
        </div>

      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <div className={styles.iconsidebarContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1559/1559881.png"
            alt="Proyectos"
            title="Proyectos"
            className={styles.iconsidebar}
          />
          <p className="text-navigation">Proyectos</p>
        </div>

      </NavLink>
    </div>
  );
}

export default AboutSidebar;
