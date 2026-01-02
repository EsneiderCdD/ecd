import { useState, useEffect } from "react";
import { projectsList, projectDetailFiles } from '@/data/projects';
import { aboutFiles } from '@/data/aboutMe/aboutMe';

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

        const results = allSearchableData.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(results.slice(0, 10));
        setShowResults(true);
    };

    const handleResultClick = (item) => {
        let targetUrl = null;

        if (item.category === 'project' && item.path) {
            targetUrl = item.path;
        } else if (item.category === 'about') {
            targetUrl = '/about';
        } else if (item.category === 'projectFile') {
            const projectKey = Object.keys(projectDetailFiles).find(key =>
                projectDetailFiles[key].some(file => file.name === item.name)
            );

            if (projectKey) {
                const project = projectsList.find(p => p.path === `/projects/${projectKey}`);
                if (project) {
                    targetUrl = project.path;
                }
            }
        }

        if (targetUrl) {
            window.location.href = targetUrl;
        }

        setShowResults(false);
        setSearchQuery("");
    };

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
