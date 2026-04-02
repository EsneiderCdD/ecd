import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const messageService = {
    async sendMessage(data) {
        try {
            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: data.name,
                    proposalType: data.proposalType || 'No especificada',
                    contactType: data.contactType || 'N/A',
                    contactValue: data.contactValue || 'N/A',
                    message: data.message
                },
                PUBLIC_KEY
            );

            return response;
        } catch (error) {
            console.error('Error en messageService con EmailJS:', error);
            throw error;
        }
    }
};
