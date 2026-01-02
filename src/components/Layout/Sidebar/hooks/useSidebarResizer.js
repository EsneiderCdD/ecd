import { useState, useRef, useEffect } from "react";

export function useSidebarResizer(initialWidth = 200, minWidth = 120, maxWidth = 400) {
    const [width, setWidth] = useState(initialWidth);
    const isResizing = useRef(false);

    const handleMouseDown = () => {
        isResizing.current = true;
    };

    const handleMouseMove = (e) => {
        if (!isResizing.current) return;
        const newWidth = e.clientX;
        if (newWidth > minWidth && newWidth < maxWidth) {
            setWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        isResizing.current = false;
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return { width, handleMouseDown };
}
