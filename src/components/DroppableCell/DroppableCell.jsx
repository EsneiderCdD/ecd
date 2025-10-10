// src/components/DroppableCell/DroppableCell.jsx
import { useDroppable } from '@dnd-kit/core';
import styles from './DroppableCell.module.css';

function DroppableCell({ id, col, row, isOccupied }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    disabled: isOccupied,
  });

  const cellStyle = {
    gridColumn: col,
    gridRow: row,
  };

  return (
    <div
      ref={setNodeRef}
      style={cellStyle}
      className={`${styles.cell} ${isOver && !isOccupied ? styles.cellOver : ''} ${isOccupied ? styles.cellOccupied : ''}`}
    />
  );
}

export default DroppableCell;