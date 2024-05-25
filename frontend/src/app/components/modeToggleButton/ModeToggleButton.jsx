import React from "react";
import ModeIcon from "../icons/Mode";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <ModeIcon />
    </button>
  );
};

export default ThemeToggleButton;
