import orderIcon from '@/assets/icons/order.png';
import styles from '../styles/SortDropdown.module.css';

function DropdownToggle({ onClick }) {
    return (
        <div
            className={styles.dropdownToggle}
            onClick={onClick}
        >
            <img
                src={orderIcon}
                alt="Ordenar"
                title="Ordenar"
                className={styles.sortIcon}
            />
        </div>
    );
}

export default DropdownToggle;
