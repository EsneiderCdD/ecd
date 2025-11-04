// src/data/achievementsData.js

/**
 * Sistema de logros del portafolio
 * Estructura escalable para agregar nuevos logros fácilmente
 */

export const achievementsConfig = {
  explorer: {
    id: 'explorer',
    title: 'Explorador',
    description: 'Abriste tu primer proyecto',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    category: 'projects',
    condition: (state) => state.projectsOpened >= 1,
    rarity: 'common', // common, rare, epic, legendary
    points: 10
  },
  
  // Ejemplos de logros futuros (comentados para no implementar aún)
  
  snooper: {
    id: 'snooper',
    title: 'Husmeador',
    description: 'Abriste 3 proyectos diferentes',
    icon: 'https://cdn-icons-png.flaticon.com/512/2919/2919600.png',
    category: 'projects',
    condition: (state) => state.projectsOpened >= 3,
    rarity: 'common',
    points: 25
  },
  
  interested: {
    id: 'interested',
    title: 'Interesado',
    description: 'Abriste 5 proyectos',
    icon: 'https://cdn-icons-png.flaticon.com/512/2919/2919622.png',
    category: 'projects',
    condition: (state) => state.projectsOpened >= 5,
    rarity: 'rare',
    points: 50
  },
  
  reader: {
    id: 'reader',
    title: 'Lector',
    description: 'Descargaste tu primer PDF',
    icon: 'https://cdn-icons-png.flaticon.com/512/...',
    category: 'files',
    condition: (state) => state.pdfsDownloaded >= 1,
    rarity: 'common',
    points: 15
  },
  
  scientist: {
    id: 'scientist',
    title: 'Científico',
    description: 'Revisaste 3 fichas técnicas',
    icon: 'https://cdn-icons-png.flaticon.com/512/...',
    category: 'files',
    condition: (state) => state.pdfsDownloaded >= 3,
    rarity: 'rare',
    points: 40
  },
  
  collaborator: {
    id: 'collaborator',
    title: 'Colaborador',
    description: 'Enviaste una invitación a colaborar',
    icon: 'https://cdn-icons-png.flaticon.com/512/...',
    category: 'interaction',
    condition: (state) => state.collaborationInvites >= 1,
    rarity: 'epic',
    points: 100
  }
  
};

// Categorías de logros para organización futura
export const achievementCategories = {
  projects: {
    name: 'Exploración',
    color: '#4ecdc4'
  },
  files: {
    name: 'Investigación',
    color: '#ffd700'
  },
  interaction: {
    name: 'Colaboración',
    color: '#ff6b6b'
  }
};

// Colores según rareza
export const rarityColors = {
  common: {
    border: '#95a5a6',
    glow: 'rgba(149, 165, 166, 0.3)',
    background: 'linear-gradient(135deg, #ecf0f1, #bdc3c7)'
  },
  rare: {
    border: '#3498db',
    glow: 'rgba(52, 152, 219, 0.4)',
    background: 'linear-gradient(135deg, #5dade2, #3498db)'
  },
  epic: {
    border: '#9b59b6',
    glow: 'rgba(155, 89, 182, 0.5)',
    background: 'linear-gradient(135deg, #bb8fce, #9b59b6)'
  },
  legendary: {
    border: '#f39c12',
    glow: 'rgba(243, 156, 18, 0.6)',
    background: 'linear-gradient(135deg, #f5b041, #f39c12)'
  }
};