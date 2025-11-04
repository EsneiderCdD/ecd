// src/pages/Achievements/Achievements.jsx
import { useState } from 'react';
import AboutHeader from '@/components/About/AboutHeader';
import AboutSidebar from '@/components/About/AboutSidebar';
import AboutInfoPanel from '@/components/About/AboutInfoPanel';
import AchievementsContent from '@/components/Achievements/AchievementsContent';
import { achievementsConfig } from '@/data/achievementsData';
import styles from '@/components/About/About.module.css';

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Convertir el achievement seleccionado al formato que espera AboutInfoPanel
  const selectedFile = selectedAchievement ? {
    icon: selectedAchievement.icon || "🏆",
    name: selectedAchievement.title,
    type: selectedAchievement.rarity,
    date: selectedAchievement.date || "Desbloqueable",
    size: `${selectedAchievement.points} pts`,
    description: [
      selectedAchievement.description,
      ``,
      `🎯 **Rareza:** ${selectedAchievement.rarity.toUpperCase()}`,
      `⭐ **Puntos:** ${selectedAchievement.points}`,
      `🔑 **ID:** ${selectedAchievement.id}`,
      ``,
      selectedAchievement.rarity === 'comun' ? `📝 Logro común - Fácil de obtener` :
      selectedAchievement.rarity === 'raro' ? `🌟 Logro raro - Requiere algo de esfuerzo` :
      selectedAchievement.rarity === 'epico' ? `✨ Logro épico - Requiere dedicación` :
      `👑 Logro legendario - Extremadamente difícil de obtener`
    ],
    previewUrl: selectedAchievement.icon,
    downloadUrl: null,
    linkUrl: null
  } : null;

  const handleAchievementSelect = (achievement) => {
    setSelectedAchievement(achievement);
  };

  return (
    <div className={styles.aboutContainer}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <AchievementsContent
          onAchievementSelect={handleAchievementSelect}
          selectedAchievement={selectedAchievement}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default Achievements;