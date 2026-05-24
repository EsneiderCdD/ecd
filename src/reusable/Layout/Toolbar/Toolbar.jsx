import styles from "./styles/Toolbar.module.css";
import SocialButtons from "./components/SocialButtons";
import SearchBar from "./components/SearchBar";
import ProposalButton from "./components/ProposalButton";

function Toolbar() {
    return (
        <div className={styles.header}>
            <ProposalButton />
            <SocialButtons />
            <SearchBar />
        </div>
    );
}

export default Toolbar;
