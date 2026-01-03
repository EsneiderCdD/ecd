import styles from "./styles/SortDropdown.module.css";
import { useSortDropdown } from "./hooks/useSortDropdown";
import DropdownToggle from "./components/DropdownToggle";
import SortOptions from "./components/SortOptions";

function SortDropdown({ onSortChange }) {
    const {
        isOpen,
        activeSort,
        dropdownRef,
        toggleDropdown,
        handleOptionClick
    } = useSortDropdown(onSortChange);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <DropdownToggle onClick={toggleDropdown} />

            {isOpen && (
                <SortOptions
                    activeSort={activeSort}
                    onOptionClick={handleOptionClick}
                />
            )}
        </div>
    );
}

export default SortDropdown;
