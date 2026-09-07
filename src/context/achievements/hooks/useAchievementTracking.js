import { useCallback } from 'react';

export function useAchievementTracking(userProgress, setUserProgress, checkAchievements, unlockedAchievements, allProjectsData) {
    const trackProjectVisit = useCallback((projectId) => {
        setUserProgress(prev => {
            const isNewProject = !prev.visitedProjects.includes(projectId);
            if (!isNewProject) return prev;

            const projectData = allProjectsData[projectId];
            const shouldCount = projectData && !projectData.isComingSoon;

            const newProgress = {
                ...prev,
                visitedProjects: [...prev.visitedProjects, projectId],
                projectsOpened: shouldCount ? prev.projectsOpened + 1 : prev.projectsOpened
            };

            checkAchievements(newProgress, unlockedAchievements);

            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress, allProjectsData]);

    const trackCollaborationInvite = useCallback(() => {
        setUserProgress(prev => {
            const newProgress = {
                ...prev,
                collaborationInvites: prev.collaborationInvites + 1
            };
            checkAchievements(newProgress, unlockedAchievements);
            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress]);

    const trackVideoView = useCallback((videoId) => {
        if (!videoId) return;
        setUserProgress(prev => {
            if (prev.visitedVideos && prev.visitedVideos.includes(videoId)) return prev;

            const newVisited = [...(prev.visitedVideos || []), videoId];
            const newProgress = {
                ...prev,
                visitedVideos: newVisited,
                videosWatched: (prev.videosWatched || 0) + 1
            };
            checkAchievements(newProgress, unlockedAchievements);
            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress]);

    const trackMessageSent = useCallback(() => {
        setUserProgress(prev => {
            const newProgress = {
                ...prev,
                messagesSent: (prev.messagesSent || 0) + 1
            };
            checkAchievements(newProgress, unlockedAchievements);
            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress]);

    return {
        trackProjectVisit,
        trackCollaborationInvite,
        trackVideoView,
        trackMessageSent
    };
}
