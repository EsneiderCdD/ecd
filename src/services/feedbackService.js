const API_URL = import.meta.env.VITE_API_URL;

export const feedbackService = {
    /**
     * Envia un nuevo feedback al backend
     * @param {Object} data - Datos del feedback {name, message}
     * @returns {Promise<Object>} - Respuesta del servidor
     */
    async sendFeedback(data) {
        try {
            const response = await fetch(`${API_URL}/feedbacks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Error al enviar el feedback');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en feedbackService:', error);
            throw error;
        }
    }
};
