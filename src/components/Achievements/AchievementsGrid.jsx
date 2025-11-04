// src/components/Achievements/AchievementsGrid.jsx
import { useAchievements } from '@/context/AchievementsContext';
import { achievementsConfig } from '@/data/achievementsData';
import styles from './AchievementsGrid.module.css';

function AchievementsGrid({ onAchievementSelect, selectedAchievement }) {
  const { unlockedAchievements } = useAchievements();

  const handleClick = (achievement) => {
    if (unlockedAchievements.includes(achievement.id)) {
      onAchievementSelect(achievement);
    }
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.achievementsGrid}>
        {Object.values(achievementsConfig).map((achievement) => {
          const isUnlocked = unlockedAchievements.includes(achievement.id);
          const isSelected = selectedAchievement?.id === achievement.id;

          return (
            <div
              key={achievement.id}
              className={`${styles.achievementCard} ${
                isUnlocked ? '' : styles.locked
              } ${isSelected ? styles.selected : ''}`}
              onClick={() => handleClick(achievement)}
            >
              {/* Icono del logro */}
              <div className={styles.achievementImage}>
                {isUnlocked ? achievement.icon : '🔒'}
              </div>

              {/* Información del logro */}
              <div className={styles.achievementTitle}>
                {isUnlocked ? achievement.title : '???'}
              </div>

              <div className={styles.achievementDescription}>
                {isUnlocked ? achievement.description : 'Logro bloqueado'}
              </div>

              {/* Footer con rareza y puntos */}
              <div className={styles.achievementFooter}>
                <span className={`${styles.rarityBadge} ${styles[`rarity${achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}`]}`}>
                  {isUnlocked ? achievement.rarity : '???'}
                </span>
                <span className={styles.pointsBadge}>
                  {isUnlocked ? `${achievement.points} pts` : '???'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementsGrid;