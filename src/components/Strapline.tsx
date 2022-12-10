import { useContext } from "react";
import { ThemeContext } from "../App";
import { AppTheme } from "../AppTheme";

const Strapline = () => {
  const { theme } = useContext(ThemeContext);

  const straplineStyle: AppTheme = {
    dark: {
      color: "#aaa",
    },
    light: {
      color: "#111",
    },
    common: {
      transition: "all 1s ease",
      fontWeight: "400",
      fontSize: "1.5rem",
    },
  };

  const themeStyle = {
    ...straplineStyle.common,
    ...(theme === "light" ? straplineStyle.light : straplineStyle.dark),
  };

  return (
    <p style={themeStyle}>
      Enjoy out <strong>premium coffee</strong> at one relaxing city locations{" "}
    </p>
  );
};

export default Strapline;
