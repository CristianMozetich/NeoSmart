"use client";
import React from "react";
import ToggleButton from "../toggleButton/ToggleButton";
import ThemeToggleButton from "../modeToggleButton/ModeToggleButton";
import NavIcons from "../navIcons/NavIcons";
import ButtonNav from "../ButtonNav/ButtonNav";

export default function NavBar({ handleAsideResponsive, asideResponsive }) {
  return (
    <header className="dark:bg-tertiarySlate bg-lightbg h-12 top-0 w-screen shadow-md fixed flex justify-between z-10 items-center gap-4">
      <ToggleButton isOpen={asideResponsive} onClick={handleAsideResponsive} />
      <div className="flex items-center gap-4 ml-auto">
        <NavIcons />
        <ThemeToggleButton />
        <ButtonNav />
      </div>
    </header>
  );
}
