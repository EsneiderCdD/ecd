import { getStatusTagConfig, tagVariants } from "@/data/statusTags";
import styles from "../styles/DesktopTable.module.css";

function StatusTag({ status }) {
    const tagConfig = getStatusTagConfig(status);

    if (tagConfig) {
        const variant = tagVariants[tagConfig.variant];
        return (
            <span
                className={styles.statusTag}
                style={{
                    background: variant.background,
                    color: variant.color,
                    border: variant.border,
                    boxShadow: variant.boxShadow
                }}
            >
                {tagConfig.text}
            </span>
        );
    }

    return status;
}

export default StatusTag;
