import { useState, useEffect } from "react";
import { projectsList, projectDetailFiles } from '@/data/projectsData';
import { aboutFiles } from '@/data/aboutData';

export function useSearch(searchRef) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const isIconUrl = (url) => {
        if (!url || typeof url !== "string") return false;
        const u = url.toLowerCase();
        return (
            (u.includes("flaticon.com") || u.includes("icons8.com")) &&
            (u.endsWith(".png") || u.endsWith(".svg") || u.includes("/png") || u.includes("/svg"))
        );
    };

    // Combinar todos los datos para búsqueda
    const allSearchableData = [
        ...projectsList.map(item => ({ ...item, category: 'project' })),
        ...aboutFiles.map(item => ({ ...item, category: 'about' })),
        ...Object.values(projectDetailFiles).flat().map(item => ({ ...item, category: 'projectFile' }))
    ];

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === "") {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        // Buscar por nombre
        const results = allSearchableData.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(results.slice(0, 10)); // Limitar a 10 resultados
        setShowResults(true);
    };

    const handleResultClick = (item) => {
        let targetUrl = null;

        if (item.category === 'project' && item.path) {
            // Navegar a la ruta del proyecto (carpeta)
            targetUrl = item.path;
        } else if (item.category === 'about') {
            // Navegar a la página About donde están los archivos
            targetUrl = '/about';
        } else if (item.category === 'projectFile') {
            // Para archivos de proyectos, necesitamos encontrar a qué proyecto pertenecen
            const projectKey = Object.keys(projectDetailFiles).find(key =>
                projectDetailFiles[key].some(file => file.name === item.name)
            );

            if (projectKey) {
                // Navegar a la página del proyecto específico
                const project = projectsList.find(p => p.path === `/projects/${projectKey}`);
                if (project) {
                    targetUrl = project.path;
                }
            }
        }

        // Navegar si encontramos una URL válida
        if (targetUrl) {
            window.location.href = targetUrl;
        }

        // Cerrar los resultados después de navegar
        setShowResults(false);
        setSearchQuery("");
    };

    // Cerrar resultados al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [searchRef]);

    return {
        searchQuery,
        searchResults,
        showResults,
        handleSearchChange,
        handleResultClick,
        setShowResults,
        isIconUrl
    };
}
