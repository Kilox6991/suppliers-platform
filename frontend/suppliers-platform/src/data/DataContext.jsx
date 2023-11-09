import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [suppliers, setSuppliers] = useState([]);
  const [newlyAddedSupplier, setNewlyAddedSupplier] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:5000/suppliers')
      .then((response) => response.json())
      .then((data) => setSuppliers(data));
  }, []);

  return (
    <DataContext.Provider value={{ suppliers, setSuppliers, newlyAddedSupplier, setNewlyAddedSupplier }}>
      {children}
    </DataContext.Provider>
  );
}
