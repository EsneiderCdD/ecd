import { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import styles from "../styles/Toolbar.module.css";
import { useSearch } from "../hooks/useSearch";

function SearchBar() {
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const {
        searchQuery,
        searchResults,
        showResults,
        handleSearchChange,
        handleResultClick,
        isIconUrl
    } = useSearch(searchRef);

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (!isExpanded) return;
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isExpanded]);

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded]);

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div
            style={{ display: 'flex', alignItems: 'center' }}
            ref={searchRef}
        >
            {!isExpanded && (
                <div className={styles.searchToggle} onClick={handleToggle}>
                    <Search
                        className={styles.searchIcon}
                        title="Buscar"
                    />
                </div>
            )}

            <div className={`${styles.searchWrapper} ${isExpanded ? styles.searchExpanded : ''}`}>
                <div className={styles.searchContainer}>
                    <Search
                        className={styles.searchIcon}
                        title="Buscar"
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>
            </div>

            {/* Resultados de búsqueda */}
            {showResults && searchResults.length > 0 && (
                <div className={styles.searchResults}>
                    <div className={styles.searchResultsHeader}>
                        <span>Resultados de búsqueda</span>
                        <span className={styles.resultsCount}>{searchResults.length}</span>
                    </div>
                    <div className={styles.searchResultsContent}>
                        {searchResults.map((item, index) => (
                            <div
                                key={index}
                                className={styles.searchResultItem}
                                onClick={() => handleResultClick(item)}
                            >
                                {item.iconUrl ? (
                                    <img src={item.iconUrl} alt="" className={styles.resultIconImg} />
                                ) : isIconUrl(item.previewUrl) ? (
                                    <img src={item.previewUrl} alt="" className={styles.resultIconImg} />
                                ) : (
                                    <span className={styles.resultIcon}>{item.icon || '📄'}</span>
                                )}
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultName}>{item.name}</div>
                                    <div className={styles.resultType}>
                                        {item.type} • {item.category === 'project' ? '📁 Proyecto' :
                                            item.category === 'about' ? '📁 Sobre mí' :
                                                '📄 Archivo'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
