import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
interface IThemeContext {
  theme: string;
  setTheme: any;
}
export const ThemeContext = React.createContext({} as IThemeContext);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
