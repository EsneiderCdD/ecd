// src/components/Desktop/Desktop.jsx
import DesktopFolders from "../DesktopFolders/DesktopFolders";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import styles from "./Desktop.module.css";

function Desktop() {
    return (
        <div className={styles.container}>
            <ParticleBackground />
            <DesktopFolders />
        </div>
    )
}
export default Desktop