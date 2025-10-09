import styles from "./About.module.css";
import {
  Scissors,   // Cortar
  Copy,       // Copiar
  ClipboardPaste, // Pegar
  Edit3,      // Cambiar nombre
  Share2,     // Compartir
  Trash2,     // Eliminar
  ArrowUpDown,// Ordenar
  Layout,     // Ver
  List,       // Detalles
} from "lucide-react";

import Dropdown from "./Dropdown/Dropdown";

function AboutHeader() {
  return (
    <div className={styles.header}>
      {/* Dropdown */}
      <Dropdown />

      {/* Sección: Cortar, Copiar, Pegar, etc */}
      <div className={styles.icons2}>
        <Scissors className={styles.icon} title="Cortar" />
        <Copy className={styles.icon} title="Copiar" />
        <ClipboardPaste className={styles.icon} title="Pegar" />
        <Edit3 className={styles.icon} title="Cambiar nombre" />
        <Share2 className={styles.icon} title="Compartir" />
        <Trash2 className={styles.icon} title="Eliminar" />
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
