import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [suppliers, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/suppliers')
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <DataContext.Provider value={{ suppliers }}>
      {children}
    </DataContext.Provider>
  );
}
