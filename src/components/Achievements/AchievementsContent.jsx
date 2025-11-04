// src/components/Achievements/AchievementsContent.jsx
import AchievementsGrid from './AchievementsGrid';
import styles from './AchievementsContent.module.css';

function AchievementsContent({ onAchievementSelect, selectedAchievement }) {
  return (
    <div className={styles.container}>
      {/* Grid de logros sin estadísticas */}
      <AchievementsGrid
        onAchievementSelect={onAchievementSelect}
        selectedAchievement={selectedAchievement}
      />
    </div>
  );
}

export default AchievementsContent;