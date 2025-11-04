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

  // Función para obtener el próximo logro sugerido
  const getNextAchievementHint = () => {
    // Obtener logros bloqueados (excluyendo el actualmente seleccionado)
    const lockedAchievements = Object.values(achievementsConfig).filter(ach => {
      return !selectedAchievement || ach.id !== selectedAchievement.id;
    });

    if (lockedAchievements.length === 0) return null;

    // Tomar un logro aleatorio bloqueado como sugerencia
    const randomLocked = lockedAchievements[Math.floor(Math.random() * lockedAchievements.length)];
    
    // Crear texto sugerente basado en el logro
    const hints = {
      snooper: "Desbloquea Husmeador revisando 3 proyectos",
      interested: "Desbloquea Interesado revisando 5 proyectos",
      explorer: "Explora más para descubrir nuevos logros",
      firstCommit: "Realiza tu primer commit para desbloquear un logro",
      consistent: "Mantén constancia en tus contribuciones",
      prolific: "Contribuye activamente al proyecto",
      mentor: "Ayuda a otros miembros del equipo",
      leader: "Lidera proyectos importantes",
      innovator: "Propón ideas innovadoras",
      teamPlayer: "Colabora con el equipo",
      problemSolver: "Resuelve problemas complejos",
      codeReviewer: "Revisa código de tus compañeros"
    };

    return hints[randomLocked.id] || `Desbloquea ${randomLocked.title} para continuar progresando`;
  };

  // Convertir el achievement seleccionado al formato que espera AboutInfoPanel
  const selectedFile = selectedAchievement ? {
    icon: selectedAchievement.icon || "🏆",
    name: selectedAchievement.title,
    type: selectedAchievement.rarity,
    date: selectedAchievement.date || "Desbloqueable",
    size: '', // Eliminamos los puntos del panel lateral
    description: [
      selectedAchievement.description, // Solo la descripción del logro
      '', // Espacio para separar
      getNextAchievementHint() // Texto de próximo logro
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