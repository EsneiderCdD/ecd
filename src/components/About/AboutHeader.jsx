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
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          alt="GitHub"
          title="GitHub"
          className={styles.icon}
        />

        {/* LinkedIn */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          title="LinkedIn"
          className={styles.icon}
        />

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

      {/* ✅ BLOQUE: STACK */}
      <div className={styles.iconsStack}>
        <p>Stack</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="JavaScript"
          title="JavaScript"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
          alt="React"
          title="React"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
          alt="HTML"
          title="HTML"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
          alt="CSS"
          title="CSS"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
          alt="Git"
          title="Git"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
          alt="GitHub"
          title="GitHub"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          title="LinkedIn"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          alt="Next.js"
          title="Next.js"
          className={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
          alt="PostgreSQL"
          title="PostgreSQL"
          className={styles.icon}
        />
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
