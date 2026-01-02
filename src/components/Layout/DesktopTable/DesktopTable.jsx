import styles from "./styles/DesktopTable.module.css";
import FileRow from "./components/FileRow";

function DesktopTable({ files, selectedFile, setSelectedFile }) {

    if (!files) return null;

    return (
        <div className={styles.table}>
            {/* Header */}
            <div className={`${styles.tableRow} ${styles.headerRow}`}>
                <span className={styles.name}>Nombre</span>
                <span className={styles.date}>Fecha de modificación</span>
                <span className={styles.type}>Tipo</span>
                <span className={styles.size}>Estado</span>
            </div>

            {/* Dynamic Rows */}
            {files.map((file, index) => (
                <FileRow
                    key={index}
                    file={file}
                    isSelected={selectedFile?.name === file.name}
                    onClick={setSelectedFile}
                />
            ))}
        </div>
    );
}

export default DesktopTable;
