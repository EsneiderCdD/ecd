// src/components/About/AboutHeader.jsx
import { useState, useEffect, useRef } from "react";
import {
  ArrowUpDown,
  List,
  Moon,
  Sun,
  Search,
} from "lucide-react";

import Dropdown from "./Dropdown/Dropdown";
import SortDropdown from "./Dropdown/SortDropdown";
import { useTheme } from "@/context/ThemeContext";
import { projectsList, projectDetailFiles } from '@/data/projectsData';
import { aboutFiles } from '@/data/aboutData';
import styles from "./About.module.css";

function AboutHeader() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Combinar todos los datos para búsqueda
  const allSearchableData = [
    ...projectsList.map(item => ({ ...item, category: 'project' })),
    ...aboutFiles.map(item => ({ ...item, category: 'about' })),
    ...Object.values(projectDetailFiles).flat().map(item => ({ ...item, category: 'projectFile' }))
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Buscar por nombre
    const results = allSearchableData.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results.slice(0, 10)); // Limitar a 10 resultados
    setShowResults(true);
  };

  const handleResultClick = (item) => {
    let targetUrl = null;
    
    if (item.category === 'project' && item.path) {
      // Navegar a la ruta del proyecto (carpeta)
      targetUrl = item.path;
    } else if (item.category === 'about') {
      // Navegar a la página About donde están los archivos
      targetUrl = '/about';
    } else if (item.category === 'projectFile') {
      // Para archivos de proyectos, necesitamos encontrar a qué proyecto pertenecen
      const projectKey = Object.keys(projectDetailFiles).find(key => 
        projectDetailFiles[key].some(file => file.name === item.name)
      );
      
      if (projectKey) {
        // Navegar a la página del proyecto específico
        const project = projectsList.find(p => p.path === `/projects/${projectKey}`);
        if (project) {
          targetUrl = project.path;
        }
      }
    }
    
    // Navegar si encontramos una URL válida
    if (targetUrl) {
      window.location.href = targetUrl;
    }
    
    // Cerrar los resultados después de navegar
    setShowResults(false);
    setSearchQuery("");
  };

  // Cerrar resultados al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div style={{ display: 'flex', alignItems: 'center', borderRight: '1px solid gray', paddingRight: '8px' }} ref={searchRef}>
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
        
        {/* Resultados de búsqueda */}
        {showResults && searchResults.length > 0 && (
          <div className={styles.searchResults}>
            <div className={styles.searchResultsHeader}>
              <span>Resultados de búsqueda</span>
              <span className={styles.resultsCount}>{searchResults.length}</span>
            </div>
            <div className={styles.searchResultsContent}>
              {searchResults.map((item, index) => (
                <div
                  key={index}
                  className={styles.searchResultItem}
                  onClick={() => handleResultClick(item)}
                >
                  <span className={styles.resultIcon}>{item.icon || '📄'}</span>
                  <div className={styles.resultInfo}>
                    <div className={styles.resultName}>{item.name}</div>
                    <div className={styles.resultType}>
                      {item.type} • {item.category === 'project' ? '📁 Proyecto' : 
                                   item.category === 'about' ? '👤 Sobre mí' : 
                                   '📄 Archivo'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Ordenar */}
      <div className={styles.icons3}>
        <SortDropdown />
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