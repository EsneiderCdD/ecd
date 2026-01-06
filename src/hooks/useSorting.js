import { useState, useMemo } from 'react';

export const useSorting = (data, defaultSort = null) => {
  const [sortType, setSortType] = useState(defaultSort);

  const sortedData = useMemo(() => {
    if (!data || data.length === 0) return data;
    
    if (sortType === 'name') {
      // Name
      return [...data].sort((a, b) => {
        const nameA = a.name?.toLowerCase() || '';
        const nameB = b.name?.toLowerCase() || '';
        return nameA.localeCompare(nameB);
      });
    } else if (sortType === 'date') {
      // Date
      return [...data].sort((a, b) => {
        const dateA = new Date(a.date || '');
        const dateB = new Date(b.date || '');
        return dateB - dateA;
      });
    }
    return data;
  }, [data, sortType]);

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };

  return {
    sortedData,
    sortType,
    handleSortChange
  };
};
