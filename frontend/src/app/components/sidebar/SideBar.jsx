"use client";
import { useState } from "react";
import SideBarIcon from "../icons/SideBarIcon";
import SideBarClose from "../icons/SideBarClose";
import SideBarOpen from "../icons/SideBarOpen";
import AcademyIcon from "../icons/AcademyIcon";
import FaqsIcon from "../icons/FaqsIcon";

export default function SideBar({ asideResponsive }) {
  const [isOpenPrompts, setIsOpenPrompts] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleToggleProfile = () => {
    setIsOpenProfile(!isOpenProfile);
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleTogglePrompts = () => {
    setIsOpenPrompts(!isOpenPrompts);
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <aside
      className={`dark:bg-tertiarySlate max-w-72 bg-slate-100 p-6 justify-start mt-12 ${
        asideResponsive ? "block fixed h-screen z-10" : "hidden md:block"
      }`}
    >
      <div className="flex flex-col gap-8">
        <div className="dark:bg-secondarySlate p-2 rounded-md text-fillicon dark:text-white flex flex-col dark:border-0 border border-solid border-sidebarPink">
          <div className="flex gap-4 text-sm items-center justify-between">
            <button
              className="flex items-center gap-3 p-1 hover:text-neoBrandTertiary cursor-pointer transition-all"
              onClick={handleTogglePrompts}
            >
              <SideBarIcon />
              Prompts
            </button>
            {isSideBarOpen ? <SideBarClose /> : <SideBarOpen />}
          </div>
          {isOpenPrompts && (
            <div className="flex flex-col items-center">
              <ul className="flex flex-col text-sm p-2 gap-2">
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Legal</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">People</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Marketing</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Finance</li>
              </ul>
            </div>
          )}
        </div>
        <div className="dark:bg-secondarySlate rounded-md p-2 text-fillicon dark:text-white flex flex-col dark:border-0 border border-solid border-sidebarPink">
          <div className="flex gap-1 text-sm items-center justify-between">
            <button
              className="flex items-center gap-3 p-1 hover:text-neoBrandTertiary cursor-pointer transition-all"
              onClick={handleToggleProfile}
            >
              <SideBarIcon />
              My profile
            </button>
            {isSideBarOpen ? <SideBarClose /> : <SideBarOpen />}
          </div>
          {isOpenProfile && (
            <div className="flex flex-col items-center">
              <ul className="flex flex-col gap-2 text-sm p-2">
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">My prompts</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Saved</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Settings</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Shared Whit</li>
                <li className="cursor-pointer hover:text-neoBrandTertiary transition-all">Friends</li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex cursor-pointer gap-2 items-center">
          <AcademyIcon />
          <p className="dark:text-white text-fillicon dark: dark:hover:text-neoBrandTertiary hover:text-neoBrandTertiary transition-all">Academy</p>
        </div>
        <div className="flex cursor-pointer gap-2 items-center ">
          <FaqsIcon />
          <p className="dark:text-white text-fillicon dark:hover:text-neoBrandTertiary hover:text-neoBrandTertiary transition-all">FAQs</p>
        </div>
      </div>
    </aside>
  );
}

