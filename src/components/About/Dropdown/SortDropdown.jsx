// src/components/About/Dropdown/SortDropdown.jsx
import { useState, useEffect, useRef } from "react";
import styles from "./SortDropdown.module.css";

function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    console.log("Opción seleccionada:", option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {/* Botón principal */}
      <div
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/icons/order.png"
          alt="Ordenar"
          title="Ordenar"
          className={styles.sortIcon}
        />
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div
            className={styles.dropdownItem}
            onClick={() => handleOptionClick("Nombre")}
          >
            <span className={styles.itemIcon}>📝</span>
            Ordenar por Nombre
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleOptionClick("Fecha")}
          >
            <span className={styles.itemIcon}>📅</span>
            Ordenar por Fecha
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleOptionClick("Tipo")}
          >
            <span className={styles.itemIcon}>🏷️</span>
            Ordenar por Tipo
          </div>
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
