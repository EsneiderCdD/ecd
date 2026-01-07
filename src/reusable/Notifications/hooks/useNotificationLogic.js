import { useState, useEffect } from 'react';
import { useAchievementSound } from '@/hooks/useAchievementSound';

export function useNotificationLogic({ achievementId, onDismiss, autoDismiss, isStatic }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const { playSound } = useAchievementSound();

    useEffect(() => {
        // Sound
        if (!isStatic) {
            playSound();
        }
        // Animation Entry
        setTimeout(() => setIsVisible(true), 100);
        // Auto Dismiss
        if (autoDismiss) {
            const timer = setTimeout(() => {
                handleDismiss();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [autoDismiss, isStatic, playSound]);

    const handleDismiss = () => {
        setIsLeaving(true);
        setTimeout(() => {
            if (onDismiss) onDismiss(achievementId);
        }, 400);
    };

    return {
        isVisible,
        isLeaving,
        handleDismiss
    };
}
