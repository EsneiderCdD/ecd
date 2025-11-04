// src/components/Achievements/AchievementsContent.jsx
import { useAchievements } from '@/context/AchievementsContext';
import { achievementsConfig } from '@/data/achievementsData';
import AchievementsGrid from './AchievementsGrid';
import styles from './AchievementsContent.module.css';

function AchievementsContent({ onAchievementSelect, selectedAchievement }) {
  const { unlockedAchievements, userProgress } = useAchievements();

  const getTotalPoints = () => {
    return Object.values(achievementsConfig)
      .filter(a => unlockedAchievements.includes(a.id))
      .reduce((sum, a) => sum + a.points, 0);
  };

  const getMaxPoints = () => {
    return Object.values(achievementsConfig)
      .reduce((sum, a) => sum + a.points, 0);
  };

  return (
    <div className={styles.container}>
      {/* Header con estadísticas - versión minimalista */}
      <div className={styles.statsHeader}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {unlockedAchievements.length}/{Object.keys(achievementsConfig).length}
          </div>
          <div className={styles.statLabel}>Logros Desbloqueados</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statValue}>{getTotalPoints()}</div>
          <div className={styles.statLabel}>Puntos Totales</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>{userProgress.projectsOpened}</div>
          <div className={styles.statLabel}>Proyectos Visitados</div>
        </div>
      </div>

      {/* Grid de logros */}
      <AchievementsGrid
        onAchievementSelect={onAchievementSelect}
        selectedAchievement={selectedAchievement}
      />
    </div>
  );
}

export default AchievementsContent;