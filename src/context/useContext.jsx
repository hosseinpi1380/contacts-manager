import React, { useContext, useState } from "react";
import { createContext } from "react";
const ThemeContext = createContext();
export const ContextData = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(false)
  const [toggled, setToggled] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(true);
  };

  return (
    <ThemeContext.Provider value={{ openDrawer, setOpenDrawer, 
    toggleDrawer, value, setValue, setToggled, toggled }}>
      {children}
    </ThemeContext.Provider>
  );
};
