export const isIconUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const u = url.toLowerCase();
    return (
        (u.includes("flaticon.com") || u.includes("icons8.com")) &&
        (u.endsWith(".png") || u.endsWith(".svg") || u.includes("/png") || u.includes("/svg"))
    );
};
