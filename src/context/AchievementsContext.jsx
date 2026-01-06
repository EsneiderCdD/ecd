import { createContext, useContext } from 'react';
import { achievementsConfig } from './achievements/data/achievementsConfig';
import { useAchievementsLogic } from './achievements/hooks/useAchievementsLogic';
import { useAchievementTracking } from './achievements/hooks/useAchievementTracking';

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
    const {
        userProgress,
        setUserProgress,
        unlockedAchievements,
        pendingNotifications,
        checkAchievements,
        dismissNotification
    } = useAchievementsLogic();

    const {
        trackProjectVisit,
        trackPdfDownload,
        trackCollaborationInvite,
        trackVideoView,
        trackMessageSent
    } = useAchievementTracking(userProgress, setUserProgress, checkAchievements, unlockedAchievements);

    const value = {
        userProgress,
        unlockedAchievements,
        pendingNotifications,
        trackProjectVisit,
        trackPdfDownload,
        trackVideoView,
        trackCollaborationInvite,
        trackMessageSent,
        dismissNotification,
        achievementsConfig
    };

    return (
        <AchievementsContext.Provider value={value}>
            {children}
        </AchievementsContext.Provider>
    );
}

export function useAchievements() {
    const context = useContext(AchievementsContext);
    if (!context) {
        throw new Error('useAchievements must be used within AchievementsProvider');
    }
    return context;
}