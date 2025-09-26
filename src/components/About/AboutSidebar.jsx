// src/components/About/AboutSidebar.jsx
import { NavLink } from "react-router-dom";
import styles from "./About.module.css";

function AboutSidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink
        to="/desktop"
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
