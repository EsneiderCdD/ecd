import { useCallback } from 'react';

export function useAchievementTracking(userProgress, setUserProgress, checkAchievements, unlockedAchievements) {
    const trackProjectVisit = useCallback((projectId) => {
        setUserProgress(prev => {
            const isNewProject = !prev.visitedProjects.includes(projectId);

            if (!isNewProject) return prev;

            const newProgress = {
                ...prev,
                visitedProjects: [...prev.visitedProjects, projectId],
                projectsOpened: prev.projectsOpened + 1
            };

            checkAchievements(newProgress, unlockedAchievements);

            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress]);

    const trackPdfDownload = useCallback((fileId) => {
        if (!fileId) return;
        setUserProgress(prev => {
            if (prev.visitedPdfs && prev.visitedPdfs.includes(fileId)) return prev;

            const newVisited = [...(prev.visitedPdfs || []), fileId];
            const newProgress = {
                ...prev,
                visitedPdfs: newVisited,
                pdfsDownloaded: (prev.pdfsDownloaded || 0) + 1
            };
            checkAchievements(newProgress, unlockedAchievements);
            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements, setUserProgress]);

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
        trackPdfDownload,
        trackCollaborationInvite,
        trackCollaborationInvite,
        trackVideoView,
        trackMessageSent
    };
}
