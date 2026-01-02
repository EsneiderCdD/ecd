// src/components/About/Dropdown/SortDropdown.jsx
import { useState, useEffect, useRef } from "react";
import styles from "./SortDropdown.module.css";

function SortDropdown({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(null); // null = default, 'name' = nombre, 'date' = fecha
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
    let newSort = null;
    
    if (option === "Nombre") {
      // Toggle: si está activo, desactivar; si no, activar
      newSort = activeSort === 'name' ? null : 'name';
    } else if (option === "Fecha") {
      // Toggle: si está activo, desactivar; si no, activar
      newSort = activeSort === 'date' ? null : 'date';
    } else if (option === "Recomendado") {
      // Por ahora no hacer nada, solo cerrar
      setIsOpen(false);
      return;
    }
    
    setActiveSort(newSort);
    
    // Llamar a la función padre para aplicar el ordenamiento
    if (onSortChange) {
      onSortChange(newSort);
    }
    
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
            className={`${styles.dropdownItem} ${activeSort === 'name' ? styles.active : ''}`}
            onClick={() => handleOptionClick("Nombre")}
          >
            <span className={styles.itemIcon}>📝</span>
            Ordenar por Nombre
            {activeSort === 'name' && <span className={styles.checkmark}>✓</span>}
          </div>
          <div
            className={`${styles.dropdownItem} ${activeSort === 'date' ? styles.active : ''}`}
            onClick={() => handleOptionClick("Fecha")}
          >
            <span className={styles.itemIcon}>📅</span>
            Ordenar por Fecha
            {activeSort === 'date' && <span className={styles.checkmark}>✓</span>}
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleOptionClick("Recomendado")}
          >
            <span className={styles.itemIcon}>⭐</span>
            Orden Recomendado
          </div>
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
