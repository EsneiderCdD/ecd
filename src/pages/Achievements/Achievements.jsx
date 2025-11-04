// src/pages/Achievements/Achievements.jsx
import AboutHeader from '@/components/About/AboutHeader';
import AboutSidebar from '@/components/About/AboutSidebar';
import { useAchievements } from '@/context/AchievementsContext';
import { achievementsConfig, rarityColors } from '@/data/achievementsData';
import styles from './Achievements.module.css';
import { Lock } from 'lucide-react';

function Achievements() {
  const { unlockedAchievements, userProgress } = useAchievements();

  const isUnlocked = (achievementId) => {
    return unlockedAchievements.includes(achievementId);
  };

  const getTotalPoints = () => {
    return Object.values(achievementsConfig)
      .filter(a => isUnlocked(a.id))
      .reduce((sum, a) => sum + a.points, 0);
  };

  const getMaxPoints = () => {
    return Object.values(achievementsConfig)
      .reduce((sum, a) => sum + a.points, 0);
  };

  return (
    <div className={styles.container}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        
        <div className={styles.achievementsContent}>
          {/* Header con estadísticas */}
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

          {/* Grilla de logros */}
          <div className={styles.achievementsGrid}>
            {Object.values(achievementsConfig).map(achievement => {
              const unlocked = isUnlocked(achievement.id);
              const rarityStyle = rarityColors[achievement.rarity];

              return (
                <div 
                  key={achievement.id}
                  className={`${styles.achievementCard} ${unlocked ? styles.unlocked : styles.locked}`}
                  style={{
                    borderColor: unlocked ? rarityStyle.border : 'var(--border-color)',
                    boxShadow: unlocked ? `0 4px 12px ${rarityStyle.glow}` : 'none'
                  }}
                >
                  <div 
                    className={styles.cardImage}
                    style={{ 
                      background: unlocked ? rarityStyle.background : 'var(--bg-secondary)'
                    }}
                  >
                    {unlocked ? (
                      <img 
                        src={achievement.icon} 
                        alt={achievement.title}
                        className={styles.achievementIcon}
                      />
                    ) : (
                      <Lock className={styles.lockIcon} />
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.achievementTitle}>
                      {unlocked ? achievement.title : '???'}
                    </h3>
                    <p className={styles.achievementDescription}>
                      {unlocked ? achievement.description : 'Logro bloqueado'}
                    </p>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.rarity} style={{ color: rarityStyle.border }}>
                        {achievement.rarity.toUpperCase()}
                      </span>
                      {unlocked && (
                        <span className={styles.achievementPoints}>
                          {achievement.points} pts
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;