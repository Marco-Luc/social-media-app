import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

// We create a context API
// To use it, we need the DarkModeContextProvider to wrap around our App component (in index.js)
// we have to use darkmode and toggle function in our components

export const DarkModeContextProvider = ({ children }) => {
  // If there is no darkmode, it means user is visiting website for first time.. so it is false
  //Check localstorage and if there is a variable like darkMode, just take the value to save it

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  // whenever darkmode is changed, save it to local storage

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
