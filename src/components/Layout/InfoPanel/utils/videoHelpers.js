export const getYouTubeEmbedUrl = (url) => {
    try {
        if (url.includes("youtu.be")) {
            const id = url.split("youtu.be/")[1].split("?")[0];
            return `https://www.youtube.com/embed/${id}`;
        } else if (url.includes("youtube.com/watch")) {
            const params = new URL(url).searchParams.get("v");
            return `https://www.youtube.com/embed/${params}`;
        }
        return url;
    } catch {
        return url;
    }
};
