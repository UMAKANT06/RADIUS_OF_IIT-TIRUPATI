// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Some initial data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
