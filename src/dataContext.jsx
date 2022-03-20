import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [AppData, SetAppData] = useState({
    cart: [],
  });
  return (
    <DataContext.Provider value={{ AppData, SetAppData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

//export default DataContextProvider;
