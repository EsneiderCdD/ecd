import styles from '../styles/NotificationToast.module.css';
import { useNotificationLogic } from '../hooks/useNotificationLogic';

function NotificationToast({ achievement, onDismiss, autoDismiss = true, className = '', style = {} }) {
    const isStatic = className.includes('static');
    const { isVisible, isLeaving, handleDismiss } = useNotificationLogic({
        achievementId: achievement.id,
        onDismiss,
        autoDismiss,
        isStatic
    });

    const rarityClass = styles[achievement.rarity] || styles.common;

    return (
        <div
            className={`${styles.notification} ${rarityClass} ${isVisible ? styles.visible : ''} ${isLeaving ? styles.leaving : ''} ${className}`}
            onClick={handleDismiss}
            style={style}
        >
            <div className={styles.content}>
                {/* Icon */}
                <div className={styles.achievementImage}>
                    {typeof achievement.icon === 'function' ? (
                        <achievement.icon rarity={achievement.rarity} />
                    ) : (
                        <img
                            src={achievement.icon}
                            alt={achievement.title}
                            className={styles.icon}
                        />
                    )}
                </div>

                {/* Text Details */}
                <div className={styles.textContent}>
                    <div className={styles.header}>
                        <span className={styles.badge}>¡Logro Desbloqueado!</span>
                    </div>
                    <h3 className={styles.title}>{achievement.title}</h3>
                    <p className={styles.description}>{achievement.description}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div className={styles.progressFill} />
            </div>
        </div>
    );
}

export default NotificationToast;
