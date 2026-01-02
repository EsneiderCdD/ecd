import { useNavigate } from "react-router-dom";
import styles from "../styles/DesktopTable.module.css";
import StatusTag from "./StatusTag";
import { isIconUrl } from "../utils/fileHelpers";

function FileRow({ file, isSelected, onClick }) {
    const navigate = useNavigate();

    const handleDoubleClick = (file) => {
        if (file.path) {
            navigate(file.path);
            return;
        }

        if (file.linkUrl) {
            window.open(file.linkUrl, "_blank");
            return;
        }

        if (file.type === "Carpeta" || file.type === "Carpeta de archivos") {
            const projectId = file.name
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace(/[@]/g, "");
            navigate(`/projects/${projectId}`);
        }
    };

    return (
        <div
            className={`${styles.tableRow} ${isSelected ? styles.selectedRow : ""}`}
            onClick={() => onClick(file)}
            onDoubleClick={() => handleDoubleClick(file)}
        >
            <span className={styles.name}>
                <span className={styles.rowIcon}>
                    {file.iconUrl ? (
                        <img src={file.iconUrl} alt="" />
                    ) : isIconUrl(file.previewUrl) ? (
                        <img src={file.previewUrl} alt="" />
                    ) : (
                        <span>{file.icon}</span>
                    )}
                </span>
                {file.name}
            </span>
            <span className={styles.date}>{file.date}</span>
            <span className={styles.type}>{file.type}</span>
            <span className={styles.size}>
                <StatusTag status={file.size} />
            </span>
        </div>
    );
}

export default FileRow;
