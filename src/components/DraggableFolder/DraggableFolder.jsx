// src/components/DraggableFolder/DraggableFolder.jsx
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useNavigate } from 'react-router-dom';
import styles from './DraggableFolder.module.css';

function DraggableFolder({ id, label, to, gridPosition }) {
  const navigate = useNavigate();
  
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

  const handleDoubleClick = (e) => {
    e.preventDefault();
    // Solo navegar si NO está arrastrando
    if (!isDragging) {
      navigate(to);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.folder}
      onDoubleClick={handleDoubleClick}
      {...attributes}
      {...listeners}
    >
      <div className={styles.icon}></div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default DraggableFolder;