import styles from "./About.module.css";
import {
  ArrowUpDown, // Ordenar
  Layout,      // Ver
  List,        // Detalles
} from "lucide-react";

import Dropdown from "./Dropdown/Dropdown";

function AboutHeader() {
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

        {/* 📤 Compartir */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2958/2958783.png"
          alt="Compartir"
          title="Compartir"
          className={styles.icon}
        />

        {/* 💌 Feedback */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png"
          alt="Feedback"
          title="Feedback"
          className={styles.icon}
        />
      </div>

      {/* Ordenar */}
      <div className={styles.icons3}>
        <ArrowUpDown className={styles.icon} title="Ordenar" />
        <p>Ordenar</p>
      </div>

      {/* Ver */}
      <div className={styles.icons4}>
        <Layout className={styles.icon} title="Ver" />
        <p>Ver</p>
      </div>

      {/* Detalles */}
      <div className={styles.icons5}>
        <List className={styles.icon} title="Detalles" />
        <p>Detalles</p>
      </div>
    </div>
  );
}

export default AboutHeader;
