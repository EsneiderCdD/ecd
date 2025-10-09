// src/components/DraggableFolder/DraggableFolder.jsx
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Link } from "react-router-dom";
import styles from './DraggableFolder.module.css';

function DraggableFolder({ id, label, to, gridPosition }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    gridColumn: gridPosition.col,
    gridRow: gridPosition.row,
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.folder}
      {...listeners}
      {...attributes}
    >
      <Link to={to} className={styles.link} onClick={(e) => isDragging && e.preventDefault()}>
        <div className={styles.icon}></div>
        <span className={styles.label}>{label}</span>
      </Link>
    </div>
  );
}

export default DraggableFolder;