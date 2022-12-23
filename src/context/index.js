import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [data, setDate] = useState({});

  const setValues = (values) => {
    setDate((prev) => ({
      ...prev,
      ...values,
    }));
  };

  return (
    <Context.Provider value={{ data, setValues }}>{children}</Context.Provider>
  );
};

export const useData = () => useContext(Context);
