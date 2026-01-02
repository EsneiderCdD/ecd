export const formatText = (text) => {
    if (!text || typeof text !== 'string') return text;

    // Convertir ***texto*** a <strong><em>texto</em></strong> (negrilla + cursiva)
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

    // Convertir **texto** a <strong>texto</strong> (negrilla)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convertir *texto* a <em>texto</em> (cursiva)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    return text;
};
