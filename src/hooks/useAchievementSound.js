// src/hooks/useAchievementSound.js
import { useCallback } from 'react';
import notificationSuccessSound from '@/assets/audio/notification-success.mp3';

export const useAchievementSound = () => {
  const playSound = useCallback(() => {
    try {
      const audio = new Audio(notificationSuccessSound);
      audio.volume = 1;
      audio.play().catch(err => {
        // Silencio si falla (navegador bloqueó autoplay, etc.)
        console.debug('Audio playback prevented:', err);
      });
    } catch (error) {
      // Silencio si hay error
      console.debug('Audio error:', error);
    }
  }, []);

  return { playSound };
};
