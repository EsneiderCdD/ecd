import styles from '../styles/SortDropdown.module.css';

function SortOptions({ activeSort, onOptionClick }) {
    return (
        <div className={styles.dropdownMenu}>
            <div
                className={`${styles.dropdownItem} ${activeSort === 'name' ? styles.active : ''}`}
                onClick={() => onOptionClick("Nombre")}
            >
                Ordenar por Nombre
                {activeSort === 'name' && <span className={styles.checkmark}>✓</span>}
            </div>
            <div
                className={`${styles.dropdownItem} ${activeSort === 'date' ? styles.active : ''}`}
                onClick={() => onOptionClick("Fecha")}
            >
                Ordenar por Fecha
                {activeSort === 'date' && <span className={styles.checkmark}>✓</span>}
            </div>
        </div>
    );
}

export default SortOptions;
