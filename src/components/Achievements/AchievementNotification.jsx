// src/components/Achievements/AchievementNotification.jsx
import { useEffect, useState } from 'react';
import styles from './AchievementNotification.module.css';
import { rarityColors } from '@/data/achievementsData';
import { useAchievementSound } from '@/hooks/useAchievementSound';

function AchievementNotification({ achievement, onDismiss, autoDismiss = true, className = '', style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const { playSound } = useAchievementSound();

  const rarityStyle = rarityColors[achievement.rarity] || rarityColors.common;

  useEffect(() => {
    // Reproducir sonido cuando aparece la notificación
    playSound();

    // Entrada animada
    setTimeout(() => setIsVisible(true), 100);

    if (autoDismiss) {
      // Auto-dismiss después de 5 segundos
      const timer = setTimeout(() => {
        handleDismiss();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss]);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      if (onDismiss) onDismiss(achievement.id);
    }, 400);
  };

  return (
    <div
      className={`${styles.notification} ${isVisible ? styles.visible : ''} ${isLeaving ? styles.leaving : ''} ${className}`}
      onClick={handleDismiss}
      style={{
        borderColor: rarityStyle.border,
        boxShadow: `0 4px 20px ${rarityStyle.glow}`,
        ...style
      }}
    >
      <div className={styles.content}>
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

        <div className={styles.textContent}>
          <div className={styles.header}>
            <span
              className={styles.badge}
              style={{ background: rarityStyle.border, color: '#fff' }}
            >¡Logro Desbloqueado!</span>
          </div>
          <h3 className={styles.title}>{achievement.title}</h3>
          <p className={styles.description}>{achievement.description}</p>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ background: rarityStyle.border }} />
      </div>
    </div>
  );
}

export default AchievementNotification;