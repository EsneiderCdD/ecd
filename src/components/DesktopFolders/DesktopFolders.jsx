import Folder from "../Folder/Folder";
import styles from "./DesktopFolders.module.css";

function DesktopFolders() {
  return (
    <div className={styles.container}>
      <Folder label="Inicio" to="/" />
      <Folder label="Sobre mí" to="/about" />
      <Folder label="Proyectos" to="/projects" />
    </div>
  );
}

export default DesktopFolders;
