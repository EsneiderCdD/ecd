import { useState, useCallback, useRef } from 'react';
import { achievementsConfig } from '../data/achievementsConfig';
import { checkNewlyUnlockedAchievements } from '../utils/achievementChecker';

export function useAchievementsLogic() {
    const [userProgress, setUserProgress] = useState({
        projectsOpened: 0,
        pdfsDownloaded: 0,
        collaborationInvites: 0,
        visitedProjects: [],
        visitedPdfs: [],
        visitedVideos: [],
        videosWatched: 0
    });

    const [unlockedAchievements, setUnlockedAchievements] = useState([]);
    const [pendingNotifications, setPendingNotifications] = useState([]);
    const isCheckingRef = useRef(false);

    const checkAchievements = useCallback((currentProgress, currentUnlocked) => {
        if (isCheckingRef.current) return;
        isCheckingRef.current = true;

        const newlyUnlocked = checkNewlyUnlockedAchievements(
            achievementsConfig,
            currentProgress,
            currentUnlocked
        );

        if (newlyUnlocked.length > 0) {
            setUnlockedAchievements(prev => [
                ...prev,
                ...newlyUnlocked.map(a => a.id)
            ]);
            setPendingNotifications(newlyUnlocked);
        }

        isCheckingRef = false;
    }, []);

    const dismissNotification = useCallback((achievementId) => {
        setPendingNotifications(prev =>
            prev.filter(a => a.id !== achievementId)
        );
    }, []);

    return {
        userProgress,
        setUserProgress,
        unlockedAchievements,
        pendingNotifications,
        setPendingNotifications,
        checkAchievements,
        dismissNotification
    };
}
