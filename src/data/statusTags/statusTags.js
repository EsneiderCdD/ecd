export const statusTagsConfig = {
  default: {
    "Completado": null,
    "Pausado": null,
    "Desarrollo": null,
    "Actualizado": null
  },

  special: {
    "Favorito": {
      text: "Favorito ⭐",
      variant: "favorite"
    },
    "Destacado": {
      text: "Destacado 🔥",
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
      text: "Divertido 🧪",
      variant: "beta"
    }
  }
};

export const getStatusTagConfig = (status) => {
  if (statusTagsConfig.special[status]) {
    return statusTagsConfig.special[status];
  }
  return null;
};
