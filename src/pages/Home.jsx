import Folder from '@/features/Folder/Folder';
import styles from './Home.module.css';

function Home() {
  const folders = [
    { id: 'sobre-mi', label: 'Sobre mí', to: '/about' },
    { id: 'proyectos', label: 'Proyectos', to: '/projects' },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.folders}>
        {folders.map((folder) => (
          <Folder
            key={folder.id}
            id={folder.id}
            label={folder.label}
            to={folder.to}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
