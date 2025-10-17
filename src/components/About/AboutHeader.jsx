// src/components/About/AboutHeader.jsx
import { useState } from "react";
import {
  ArrowUpDown,
  List,
  Moon,
  Sun,
  Search,
} from "lucide-react";

import Dropdown from "./Dropdown/Dropdown";
import { useTheme } from "@/context/ThemeContext";
import styles from "./About.module.css";

function AboutHeader() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // TODO: Aquí irá la lógica de búsqueda cuando esté lista
    // console.log("Buscando:", e.target.value);
  };

  return (
    <div className={styles.header}>
      {/* Dropdown */}
      <Dropdown />

      {/* Sección: GitHub, LinkedIn, Correo, etc */}
      <div className={styles.icons2}>
        {/* GitHub */}
        <a
          href="https://github.com/EsneiderCdD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            title="GitHub"
            className={styles.icon}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/esneidercdd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            title="LinkedIn"
            className={styles.icon}
          />
        </a>

        {/* Tema (modo claro/oscuro) */}
        <div
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
          className={styles.themeIcon}
        >
          {theme === "light" ? (
            <Moon
              className={styles.icon}
              title="Modo oscuro"
              style={{ color: "var(--text-primary)" }}
            />
          ) : (
            <Sun
              className={styles.icon}
              title="Modo claro"
              style={{ color: "var(--text-primary)" }}
            />
          )}
        </div>

        {/* ❤️ Favorito */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="Feedback"
          title="Feedback"
          className={`${styles.icon} ${styles.hoverIcon}`}
        />

        {/* 🛠️ Soporte */}
        <img
          src="/icons/support.png"
          alt="Soporte"
          title="Soporte"
          className={`${styles.icon} ${styles.hoverIcon} ${styles.supportIcon}`}
        />
      </div>

 

      {/* BUSCADOR - Reemplaza "Ver" */}
      <div style={{ display: 'flex', alignItems: 'center', borderRight: '1px solid gray', paddingRight: '8px' }}>
        <div className={styles.searchContainer}>
          <Search 
            className={styles.searchIcon} 
            title="Buscar" 
          />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>

           {/* Ordenar */}
      <div className={styles.icons3}>
        <ArrowUpDown className={styles.icon} title="Ordenar" />
        <p style={{ color: "var(--text-primary)" }}>Ordenar</p>
      </div>

      {/* Detalles */}
      <div className={styles.icons5}>
        <List className={styles.icon} title="Detalles" />
        <p style={{ color: "var(--text-primary)" }}>Detalles</p>
      </div>
    </div>
  );
}

export default AboutHeader;