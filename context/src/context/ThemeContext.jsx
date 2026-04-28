import { createContext, useState } from "react";

export let themeContext = createContext();

let ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState("light");
  let themeChange = () => {
    let dark = {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
      height: "100vh",
    };
    let light = {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
      height: "100vh",
    };

    if (theme === "dark") {
      return dark;
    } else {
      return light;
    }
  };

  let themeChangeValue = (data) => {
    setTheme(data);
  };
  return (
    <themeContext.Provider value={{ themeChangeValue, themeChange, theme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
