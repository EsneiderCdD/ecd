import { useState, useEffect, useRef } from "react";

export function useSortDropdown(onSortChange) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSort, setActiveSort] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOptionClick = (option) => {
        let newSort = null;

        if (option === "Nombre") {
            newSort = activeSort === 'name' ? null : 'name';
        } else if (option === "Fecha") {
            newSort = activeSort === 'date' ? null : 'date';
        } else if (option === "Recomendado") {
            setIsOpen(false);
            return;
        }

        setActiveSort(newSort);

        if (onSortChange) {
            onSortChange(newSort);
        }

        setIsOpen(false);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    return {
        isOpen,
        activeSort,
        dropdownRef,
        toggleDropdown,
        handleOptionClick
    };
}
