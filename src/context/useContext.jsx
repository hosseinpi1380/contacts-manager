import React, { useContext, useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext({
  name,
  setName: () => {},
  changeHandler: () => {},
});
export const ContextData = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [name, setName] = useState();
  const changeHandler=()=>{
    return 'hello world'
  }
  return (
    <ThemeContext.Provider value={{name,setName,changeHandler}}>
      {children}
    </ThemeContext.Provider>
  );
};
