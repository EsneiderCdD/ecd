// src/components/Achievements/NotificationManager.jsx
import { useAchievements } from '@/context/AchievementsContext';
import AchievementNotification from './AchievementNotification';
import styles from './NotificationManager.module.css';

/**
 * Componente que renderiza las notificaciones de logros
 * Se debe colocar en el App.jsx para que esté disponible globalmente
 */
function NotificationManager() {
  const { pendingNotifications, dismissNotification } = useAchievements();

  if (pendingNotifications.length === 0) return null;

  return (
    <div className={styles.container}>
      {pendingNotifications.map((achievement) => (
        <AchievementNotification
          key={achievement.id}
          achievement={achievement}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
}

export default NotificationManager;