import styles from '../styles/SortDropdown.module.css';

function SortOptions({ activeSort, onOptionClick }) {
    return (
        <div className={styles.dropdownMenu}>
            <div
                className={`${styles.dropdownItem} ${activeSort === 'name' ? styles.active : ''}`}
                onClick={() => onOptionClick("Nombre")}
            >
                <span className={styles.itemIcon}>📝</span>
                Ordenar por Nombre
                {activeSort === 'name' && <span className={styles.checkmark}>✓</span>}
            </div>
            <div
                className={`${styles.dropdownItem} ${activeSort === 'date' ? styles.active : ''}`}
                onClick={() => onOptionClick("Fecha")}
            >
                <span className={styles.itemIcon}>📅</span>
                Ordenar por Fecha
                {activeSort === 'date' && <span className={styles.checkmark}>✓</span>}
            </div>
            <div
                className={styles.dropdownItem}
                onClick={() => onOptionClick("Recomendado")}
            >
                <span className={styles.itemIcon}>⭐</span>
                Orden Recomendado
            </div>
        </div>
    );
}

export default SortOptions;
