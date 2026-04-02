import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const feedbackService = {
    async sendFeedback(data) {
        try {
            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: data.name,
                    message: data.message,
                    proposalType: 'Feedback General',
                    contactType: 'N/A',
                    contactValue: 'N/A'
                },
                PUBLIC_KEY
            );

            return response;
        } catch (error) {
            console.error('Error en feedbackService con EmailJS:', error);
            throw error;
        }
    }
};
