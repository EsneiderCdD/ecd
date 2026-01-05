import styles from "../styles/FeedbackModal.module.css";

export function FeedbackInput({ name, value, onChange, label, required = true }) {
    return (
        <div className={styles.inputBox}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={value ? styles.filled : ""}
            />
            <span className={styles.label}>{label}</span>
        </div>
    );
}

export function FeedbackTextArea({ name, value, onChange, label, required = true, rows = "4" }) {
    return (
        <div className={styles.inputBox}>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className={value ? styles.filled : ""}
            />
            <span className={styles.label}>{label}</span>
        </div>
    );
}
