import { useState, useEffect, useRef } from "react";
import { FilePlus, ChevronDown } from "lucide-react";
import styles from "./Dropdown.module.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // 🔹 referencia al contenedor principal

  // 🔸 Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilePlus className={styles.icon} />
        <p>Nuevo</p>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
        />
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
