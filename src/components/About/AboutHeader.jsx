import styles from "./About.module.css";
import {
  ArrowUpDown, 
  Layout,      
  List,   
  Moon,
  Sun,
} from "lucide-react";

import Dropdown from "./Dropdown/Dropdown";
import { useTheme } from '@/context/ThemeContext';

function AboutHeader() {

  const { theme, toggleTheme } = useTheme();

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
          href="https://www.linkedin.com/in/esneidercdd/" // 🔹 Cambia por tu perfil real
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

        {/* Tema */}
        <div onClick={toggleTheme} style={{cursor: 'pointer'}}>
          {theme === 'light' ? <Moon className={styles.icon} title="Modo oscuro" /> : <Sun className={styles.icon} title="Modo claro" />}
        </div>

        {/* Correo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Correo"
          title="Correo"
          className={styles.icon}
        />

        {/* ❤️ Favorito */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="Favorito"
          title="Favorito"
          className={styles.icon}
        />

      </div>

      {/* Ordenar */}
      <div className={styles.icons3}>
        <ArrowUpDown className={styles.icon} title="Ordenar" />
        <p style={{color: 'var(--text-primary)'}}>Ordenar</p>
      </div>

      {/* Ver */}
      <div className={styles.icons4}>
        <Layout className={styles.icon} title="Ver" />
        <p style={{color: 'var(--text-primary)'}}>Ver</p>
      </div>

      {/* Detalles */}
      <div className={styles.icons5}>
        <List className={styles.icon} title="Detalles" />
        <p style={{color: 'var(--text-primary)'}}>Detalles</p>
      </div>

    </div>
  );
}

export default AboutHeader;
