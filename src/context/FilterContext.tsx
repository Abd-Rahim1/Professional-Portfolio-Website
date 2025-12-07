import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  projectFilter: string | null;
  setProjectFilter: (filter: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projectFilter, setProjectFilter] = useState<string | null>(null);

  return (
    <FilterContext.Provider value={{ projectFilter, setProjectFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};