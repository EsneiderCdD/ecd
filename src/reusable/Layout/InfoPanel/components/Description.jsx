import styles from "../styles/InfoPanel.module.css";
import { formatText } from "../utils/formatText";

function Description({ content }) {
    if (!content) return null;

    return (
        <div className={styles.details}>
            {Array.isArray(content) ? (
                content.map((desc, index) => (
                    <p
                        key={index}
                        className={styles.descriptionParagraph}
                        dangerouslySetInnerHTML={{ __html: formatText(desc) }}
                    />
                ))
            ) : (
                <p dangerouslySetInnerHTML={{ __html: formatText(content) }} />
            )}
        </div>
    );
}

export default Description;
