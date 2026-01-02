import { getStatusTagConfig } from "@/data/statusTags/statusTags";
import styles from "../styles/StatusTag.module.css";

function StatusTag({ status }) {
    const config = getStatusTagConfig(status);

    if (!config) {
        return <span>{status}</span>;
    }

    return (
        <span
            className={`${styles.tag} ${styles[config.variant]}`}
        >
            {config.text}
        </span>
    );
}

export default StatusTag;
