import styles from '../styles/NotificationToast.module.css';
import { achievementsColors } from '@/styles/achievementsColors';
import { useNotificationLogic } from '../hooks/useNotificationLogic';

function NotificationToast({ achievement, onDismiss, autoDismiss = true, className = '', style = {} }) {
    // Logic
    const isStatic = className.includes('static');
    const { isVisible, isLeaving, handleDismiss } = useNotificationLogic({
        achievementId: achievement.id,
        onDismiss,
        autoDismiss,
        isStatic
    });

    const rarityStyle = achievementsColors[achievement.rarity] || achievementsColors.common;

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
                {/* Icon */}
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

                {/* Text Details */}
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

            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ background: rarityStyle.border }} />
            </div>
        </div>
    );
}

export default NotificationToast;
