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
        Escritorio
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Sobre mí
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Proyectos
      </NavLink>
    </div>
  );
}

export default AboutSidebar;
