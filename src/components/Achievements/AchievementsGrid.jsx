// src/components/Achievements/AchievementsGrid.jsx
import { useAchievements } from '@/context/AchievementsContext';
import { achievementsConfig, rarityColors } from '@/data/achievementsData';
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
          const rarityStyle = rarityColors[achievement.rarity];

          return (
            <div
              key={achievement.id}
              className={`${styles.achievementCard} ${
                isUnlocked ? styles.unlocked : styles.locked
              } ${isSelected ? styles.selected : ''}`}
              onClick={() => handleClick(achievement)}
            >
              {/* Contenedor del icono con fondo blanco */}
              <div 
                className={styles.cardImage}
                style={{
                  background: isUnlocked ? '#ffffff' : 'var(--bg-secondary)'
                }}
              >
                {isUnlocked ? (
                  <img 
                    src={achievement.icon} 
                    alt={achievement.title}
                    className={styles.achievementIcon}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <span className={styles.lockIcon}>🔒</span>
                )}
                {/* Fallback para cuando la imagen no carga */}
                <span 
                  className={styles.fallbackIcon}
                  style={{ display: 'none' }}
                >
                  {achievement.icon}
                </span>
              </div>

              {/* Información del logro - Solo título y rareza */}
              <div className={styles.cardContent}>
                <div className={styles.achievementTitle}>
                  {isUnlocked ? achievement.title : '???'}
                </div>

                {/* Footer solo con rareza - sin descripción y sin puntos */}
                <div className={styles.cardFooter}>
                  <span 
                    className={styles.rarityBadge}
                    style={{
                      background: isUnlocked ? `${rarityStyle.border}20` : 'var(--bg-tertiary)',
                      color: isUnlocked ? rarityStyle.border : 'var(--text-muted)'
                    }}
                  >
                    {isUnlocked ? achievement.rarity : '???'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementsGrid;