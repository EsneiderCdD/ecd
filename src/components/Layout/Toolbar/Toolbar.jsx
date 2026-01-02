import Dropdown from "../Dropdown/Dropdown";
import SortDropdown from "../Dropdown/SortDropdown";
import styles from "./styles/Toolbar.module.css";
import SocialButtons from "./components/SocialButtons";
import SearchBar from "./components/SearchBar";

function Toolbar({ onSortChange }) {
    return (
        <div className={styles.header}>
            {/* Dropdown */}
            <Dropdown />

            {/* Sección: GitHub, LinkedIn, Correo, etc */}
            <SocialButtons />

            {/* BUSCADOR */}
            <SearchBar />

            {/* Ordenar */}
            <div className={styles.icons3}>
                <SortDropdown onSortChange={onSortChange} />
            </div>
        </div>
    );
}

export default Toolbar;
