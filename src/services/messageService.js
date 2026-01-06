const API_URL = import.meta.env.VITE_API_URL;

export const messageService = {
    async sendMessage(data) {
        try {
            const response = await fetch(`${API_URL}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Error al enviar el mensaje');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en messageService:', error);
            throw error;
        }
    }
};
