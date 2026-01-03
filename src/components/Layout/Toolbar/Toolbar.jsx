import SortDropdown from "@/features/SortDropdown/SortDropdown";
import styles from "./styles/Toolbar.module.css";
import SocialButtons from "./components/SocialButtons";
import SearchBar from "./components/SearchBar";
import ProposalButton from "./components/ProposalButton";

function Toolbar({ onSortChange }) {
    return (
        <div className={styles.header}>
            <ProposalButton />
            <SocialButtons />
            <SearchBar />
            <div className={styles.icons3}>
                <SortDropdown onSortChange={onSortChange} />
            </div>
        </div>
    );
}

export default Toolbar;
