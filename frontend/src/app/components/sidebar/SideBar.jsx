"use client";
import React from "react";
import SideBarSection from "../sideBarSection/SideBarSection";
import SideBarLink from "../sideBarLink/SideBarLink";
import AcademyIcon from "../icons/AcademyIcon";
import FaqsIcon from "../icons/FaqsIcon";

export default function SideBar({ asideResponsive }) {
  const promptsItems = ["Legal", "People", "Marketing", "Finance"];
  const profileItems = ["My prompts", "Saved", "Settings", "Shared With", "Friends"];

  return (
    <aside
      className={`dark:bg-tertiarySlate max-w-72 bg-slate-100 p-6 justify-start mt-12 ${
        asideResponsive ? "block fixed h-screen z-10" : "hidden md:block"
      }`}
    >
      <div className="flex flex-col gap-8">
        <SideBarSection title="Prompts" items={promptsItems} />
        <SideBarSection title="My profile" items={profileItems} />
        <SideBarLink icon={AcademyIcon} label="Academy" />
        <SideBarLink icon={FaqsIcon} label="FAQs" />
      </div>
    </aside>
  );
}
