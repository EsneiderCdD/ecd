import { useCallback } from 'react';
import notificationSuccessSound from '@/assets/audio/notification-success.mp3';

export const useAchievementSound = () => {
  const playSound = useCallback(() => {
    try {
      const audio = new Audio(notificationSuccessSound);
      audio.volume = 0.33;
      audio.play().catch(err => {
        console.debug('Audio playback prevented:', err);
      });
    } catch (error) {
      console.debug('Audio error:', error);
    }
  }, []);

  return { playSound };
};
