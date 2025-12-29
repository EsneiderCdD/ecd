// src/components/DesktopFolders/DesktopFolders.jsx
import Folder from '../Folder/Folder';
import styles from "./DesktopFolders.module.css";

function DesktopFolders() {
  const folders = [
    { id: 'inicio', label: 'Inicio', to: '/' },
    { id: 'sobre-mi', label: 'Sobre mí', to: '/about' },
    { id: 'proyectos', label: 'Proyectos', to: '/projects' },
  ];

  return (
    <div className={styles.container}>
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          id={folder.id}
          label={folder.label}
          to={folder.to}
        />
      ))}
    </div>
  );
}

export default DesktopFolders;