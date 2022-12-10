import { useContext } from "react";
import { ThemeContext } from "../App";
import { AppTheme } from "../AppTheme";
import Strapline from "./Strapline";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const heroStyle: AppTheme = {
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
      height: "1400px",
    },
  };

  const themeStyle = {
    ...heroStyle.common,
    ...(theme === "light" ? heroStyle.light : heroStyle.dark),
  };

  return (
    <main style={themeStyle}>
      <div>
        <h1>We make great coffee</h1>
        <Strapline />
      </div>
      <img src="cafe.png" alt="Coffee Bar" />
    </main>
  );
};

export default Hero;
