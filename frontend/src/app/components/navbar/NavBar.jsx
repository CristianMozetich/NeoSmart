"use client";
import React from "react";
import SearchNavIcon from "../icons/SearchNav";
import QuestIcon from "../icons/QuestIcon";
import ModeIcon from "../icons/Mode";
import ButtonNav from "../ButtonNav/ButtonNav";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="dark:bg-tertiarySlate bg-lightbg h-12 top-0 w-screen shadow-md  fixed flex justify-end z-10 items-center gap-4">
      <SearchNavIcon />
      <QuestIcon />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <ModeIcon />
      </button>
      <ButtonNav />
    </header>
  );
}
