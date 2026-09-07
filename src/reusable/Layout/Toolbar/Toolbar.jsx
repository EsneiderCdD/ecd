import styles from "./styles/Toolbar.module.css";
import SocialButtons from "./components/SocialButtons";
import ProposalButton from "./components/ProposalButton";

function Toolbar() {
    return (
        <div className={styles.header}>
            <ProposalButton />
            <SocialButtons />
        </div>
    );
}

export default Toolbar;
