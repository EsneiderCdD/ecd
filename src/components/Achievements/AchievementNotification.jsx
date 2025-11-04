// src/components/Achievements/AchievementNotification.jsx
import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import styles from './AchievementNotification.module.css';
import { rarityColors } from '@/data/achievementsData';

function AchievementNotification({ achievement, onDismiss }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const rarityStyle = rarityColors[achievement.rarity] || rarityColors.common;

  useEffect(() => {
    // Entrada animada
    setTimeout(() => setIsVisible(true), 100);

    // Auto-dismiss después de 5 segundos
    const timer = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onDismiss(achievement.id);
    }, 400);
  };

  return (
    <div 
      className={`${styles.notification} ${isVisible ? styles.visible : ''} ${isLeaving ? styles.leaving : ''}`}
      onClick={handleDismiss}
      style={{
        borderColor: rarityStyle.border,
        boxShadow: `0 4px 20px ${rarityStyle.glow}`
      }}
    >
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <Trophy 
            className={styles.trophyIcon}
            style={{ color: rarityStyle.border }}
          />
        </div>
        
        <div className={styles.textContent}>
          <div className={styles.header}>
            <span className={styles.badge}>¡Logro Desbloqueado!</span>
          </div>
          <h3 className={styles.title}>{achievement.title}</h3>
          <p className={styles.description}>{achievement.description}</p>
          <div className={styles.points}>+{achievement.points} puntos</div>
        </div>

        <div 
          className={styles.achievementImage}
          style={{ background: rarityStyle.background }}
        >
          <img 
            src={achievement.icon} 
            alt={achievement.title}
            className={styles.icon}
          />
        </div>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ background: rarityStyle.border }} />
      </div>
    </div>
  );
}

export default AchievementNotification;