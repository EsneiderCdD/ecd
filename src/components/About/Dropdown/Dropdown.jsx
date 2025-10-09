import { useState } from "react";
import { FilePlus } from "lucide-react";
import styles from "./Dropdown.module.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      {/* Botón principal (mismo estilo que icons1) */}
      <div
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilePlus className={styles.icon} />
        <p>Nuevo</p>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>Nueva invitación a colaborar</div>
          <div className={styles.dropdownItem}>Nueva propuesta freelance</div>
          <div className={styles.dropdownItem}>Nueva oferta laboral</div>
          <div className={styles.dropdownItem}>Nuevo proyecto</div>
          <div className={styles.dropdownItem}>Nueva propuesta</div>
          <div className={styles.dropdownItem}>Nueva conversación / amigo :D</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
