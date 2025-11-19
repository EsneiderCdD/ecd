import { achievementsConfig } from '../../data/achievementsData';
import AchievementNotification from '../../components/Achievements/AchievementNotification';
import styles from './Notifications.module.css';

function Notifications() {
    const achievements = Object.values(achievementsConfig);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Notificaciones</h1>
                <p className={styles.subtitle}>
                    Vista permanente de todas las notificaciones del sistema.
                </p>
            </div>

            <div className={styles.grid}>
                {achievements.map((achievement) => (
                    <div key={achievement.id} className={styles.notificationWrapper}>
                        <AchievementNotification
                            achievement={achievement}
                            autoDismiss={false}
                            className={styles.staticNotification}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notifications;
