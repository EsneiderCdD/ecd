import { useAchievements } from '@/context/AchievementsContext';
import NotificationToast from './components/NotificationToast';
import styles from './styles/NotificationManager.module.css';

/**
 * Component that renders achievement notifications
 * Should be placed in App.jsx to be available globally
 */
function NotificationManager() {
    const { pendingNotifications, dismissNotification } = useAchievements();

    if (pendingNotifications.length === 0) return null;

    return (
        <div className={styles.container}>
            {/* Notifications List */}
            {pendingNotifications.map((achievement) => (
                <NotificationToast
                    key={achievement.id}
                    achievement={achievement}
                    onDismiss={dismissNotification}
                />
            ))}
        </div>
    );
}

export default NotificationManager;
