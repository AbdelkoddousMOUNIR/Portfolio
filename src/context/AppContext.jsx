import React, { useState, useEffect, createContext } from 'react';

export const appContext = createContext(null);

export default function AppContext({ children }) {
  let [mode, setMode] = useState(localStorage.getItem('darkMode') === 'true');

  let changeMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', mode);
  }, [mode]);

  let AppValues = {
    mode,
    changeMode,
  };

  return (
    <appContext.Provider value={AppValues}>
      {children}
    </appContext.Provider>
  );
}
