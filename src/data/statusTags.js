// Configuración de tags de estado para la columna Estado
export const statusTagsConfig = {
  // Estados por defecto (sin tag especial)
  default: {
    "Completado": null,
    "Pausado": null,
    "Desarrollo": null,
    "Actualizado": null
  },
  
  // Estados con tags especiales
  special: {
    "Proyecto Favorito": {
      text: "Proyecto Favorito ⭐",
      variant: "favorite"
    },
    "En Destacado": {
      text: "En Destacado 🔥",
      variant: "highlight"
    },
    "Nuevo": {
      text: "Nuevo ✨",
      variant: "new"
    },
    "Urgente": {
      text: "Urgente ⚡",
      variant: "urgent"
    },
    "Beta": {
      text: "Beta 🧪",
      variant: "beta"
    }
  }
};

// Configuración de variantes de estilo para los tags
export const tagVariants = {
  favorite: {
    background: "linear-gradient(135deg, #ffd700, #ffed4e)",
    color: "#8b4513",
    border: "1px solid #ffd700",
    boxShadow: "0 2px 4px rgba(255, 215, 0, 0.3)"
  },
  highlight: {
    background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)",
    color: "#ffffff",
    border: "1px solid #ff6b6b",
    boxShadow: "0 2px 4px rgba(255, 107, 107, 0.3)"
  },
  new: {
    background: "linear-gradient(135deg, #4ecdc4, #6dd5ed)",
    color: "#ffffff",
    border: "1px solid #4ecdc4",
    boxShadow: "0 2px 4px rgba(78, 205, 196, 0.3)"
  },
  urgent: {
    background: "linear-gradient(135deg, #ff4757, #ff6b7a)",
    color: "#ffffff",
    border: "1px solid #ff4757",
    boxShadow: "0 2px 4px rgba(255, 71, 87, 0.3)"
  },
  beta: {
    background: "linear-gradient(135deg, #a55eea, #c084fc)",
    color: "#ffffff",
    border: "1px solid #a55eea",
    boxShadow: "0 2px 4px rgba(165, 94, 234, 0.3)"
  }
};

// Función para obtener la configuración del tag basado en el estado
export const getStatusTagConfig = (status) => {
  // Primero verificar si es un estado especial
  if (statusTagsConfig.special[status]) {
    return statusTagsConfig.special[status];
  }
  
  // Si no es especial, retornar null para usar el estado por defecto
  return null;
};
