import React from "react";
import ModeIcon from "../icons/Mode";
import { useTheme } from "next-themes";

//Boton para cambiar entre modo oscuro y modo claro
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <ModeIcon />
    </button>
  );
};

export default ThemeToggleButton;
