import React, { useState, useContext, createContext } from "react";

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const initialValue = {
  email: "",
  name: "",
  authColor: [],
  authStage: 0,
  isLogged: false,
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialValue);

  const values = { state, setState };

  return <AppContext.Provider values={values}>{children}</AppContext.Provider>;
};