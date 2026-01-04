export const statusTagsConfig = {
  "Actualizado": {
    text: "Actualizado",
    variant: "updated"
  },
  "Completado": {
    text: "Completado",
    variant: "completed"
  },
  "En Curso": {
    text: "En Curso",
    variant: "dev"
  }
};

export const getStatusTagConfig = (status) => {
  return statusTagsConfig[status] || null;
};
