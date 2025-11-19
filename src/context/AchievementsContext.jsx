// src/context/AchievementsContext.jsx
import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { achievementsConfig } from '@/data/achievementsData';

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
    // Estado inicial SIN localStorage (temporal, no persistente)
    // Añadimos visitedPdfs para contabilizar vistas únicas de fichas técnicas
    const [userProgress, setUserProgress] = useState({
        projectsOpened: 0,
        pdfsDownloaded: 0,
        collaborationInvites: 0,
        visitedProjects: [], // Para trackear proyectos únicos
        visitedPdfs: [], // Para trackear fichas técnicas vistas (únicas)
        visitedVideos: [], // Para trackear videos vistos (únicos)
        videosWatched: 0
    });

    // Logros desbloqueados
    const [unlockedAchievements, setUnlockedAchievements] = useState([]);

    // Cola de notificaciones pendientes
    const [pendingNotifications, setPendingNotifications] = useState([]);

    // Ref para evitar verificaciones múltiples
    const isCheckingRef = useRef(false);

    // Verificar y desbloquear logros (memoizado)
    const checkAchievements = useCallback((currentProgress, currentUnlocked) => {
        if (isCheckingRef.current) return;
        isCheckingRef.current = true;

        const newlyUnlocked = [];

        Object.values(achievementsConfig).forEach(achievement => {
            // Si ya está desbloqueado, skip
            if (currentUnlocked.includes(achievement.id)) return;

            // Verificar si cumple la condición
            if (achievement.condition(currentProgress)) {
                newlyUnlocked.push(achievement);
            }
        });

        if (newlyUnlocked.length > 0) {
            setUnlockedAchievements(prev => [
                ...prev,
                ...newlyUnlocked.map(a => a.id)
            ]);
            setPendingNotifications(newlyUnlocked);
        }

        isCheckingRef.current = false;
    }, []);

    // Registrar visita a un proyecto
    const trackProjectVisit = useCallback((projectId) => {
        setUserProgress(prev => {
            const isNewProject = !prev.visitedProjects.includes(projectId);

            if (!isNewProject) return prev; // No hacer nada si ya fue visitado

            const newProgress = {
                ...prev,
                visitedProjects: [...prev.visitedProjects, projectId],
                projectsOpened: prev.projectsOpened + 1
            };

            // Verificar logros con el nuevo progreso
            checkAchievements(newProgress, unlockedAchievements);

            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements]);

    // Registrar "ver" de una ficha técnica (contabiliza vistas únicas)
    // fileId debe ser un identificador único para la ficha (ej: `${file.name}|${file.date}`)
    const trackPdfDownload = useCallback((fileId) => {
        if (!fileId) return;
        setUserProgress(prev => {
            // Si ya fue contabilizado, no hacer nada
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
    }, [checkAchievements, unlockedAchievements]);

    // Registrar invitación de colaboración
    const trackCollaborationInvite = useCallback(() => {
        setUserProgress(prev => {
            const newProgress = {
                ...prev,
                collaborationInvites: prev.collaborationInvites + 1
            };
            checkAchievements(newProgress, unlockedAchievements);
            return newProgress;
        });
    }, [checkAchievements, unlockedAchievements]);

        // Registrar vista de video (contabiliza vistas únicas)
        // videoId puede ser construido a partir del file.name o del previewUrl
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
        }, [checkAchievements, unlockedAchievements]);

    // Remover notificación de la cola
    const dismissNotification = useCallback((achievementId) => {
        setPendingNotifications(prev =>
            prev.filter(a => a.id !== achievementId)
        );
    }, []);

    const value = {
        userProgress,
        unlockedAchievements,
        pendingNotifications,
        trackProjectVisit,
        trackPdfDownload,
            trackVideoView,
        trackCollaborationInvite,
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