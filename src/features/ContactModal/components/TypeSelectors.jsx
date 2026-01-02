import styles from "../styles/ContactModal.module.css";

export function TypeSelector({ options, activeValue, onSelect, label }) {
    return (
        <div className={styles.contactSection}>
            {/* Hint Text */}
            <p className={styles.contactHint}>
                {label}
            </p>

            <div className={`${styles.contactSelector} ${options.length > 3 ? styles.proposalGrid : ''}`}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        className={`${styles.selectorBtn} ${activeValue === option.value ? styles.active : ""}`}
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
