"use client";
import React from "react";
import SearchNavIcon from "../icons/SearchNav";
import QuestIcon from "../icons/QuestIcon";
import ModeIcon from "../icons/Mode";
import ButtonNav from "../ButtonNav/ButtonNav";
import MenuResponsive from "../icons/MenuResponsive";
import CloseIcon from "../icons/CloseIcon";
import { useTheme } from "next-themes";

export default function NavBar({ handleAsideResponsive, asideResponsive }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="dark:bg-tertiarySlate bg-lightbg h-12 top-0 w-screen shadow-md fixed flex justify-between z-10 items-center gap-4">
      <div>
        <button className="md:hidden ml-5 flex items-center" onClick={handleAsideResponsive}>
          {asideResponsive ? <CloseIcon /> : <MenuResponsive />}
        </button>
      </div>
      <div className="flex items-center gap-4">
        <SearchNavIcon />
        <QuestIcon />
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <ModeIcon />
        </button>
        <ButtonNav />
      </div>
    </header>
  );
}
