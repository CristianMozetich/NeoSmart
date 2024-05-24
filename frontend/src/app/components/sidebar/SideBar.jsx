"use client";
import { useState } from "react";
import SideBarIcon from "../icons/SideBarIcon";
import SideBarClose from "../icons/SideBarClose";
import SideBarOpen from "../icons/SideBarOpen";
import AcademyIcon from "../icons/AcademyIcon";
import FaqsIcon from "../icons/FaqsIcon";
export default function SideBar() {
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
    <aside className="bg-tertiarySlate w-52 z-10 h-full flex flex-col gap-16 fixed top-0 p-4 justify-center">
      <div className="bg-secondarySlate rounded-md text-white flex flex-col">
        <div className="flex gap-1 text-sm items-center justify-between">
          <button
            className="flex items-center gap-3 p-1"
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
              <li>Legal</li>
              <li>People</li>
              <li>Marketing</li>
              <li>Finance</li>
            </ul>
          </div>
        )}
      </div>
      <div className="bg-secondarySlate rounded-md text-white flex flex-col">
        <div className="flex gap-1 text-sm items-center justify-between">
          <button
            className="flex items-center gap-3 p-1"
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
              <li>My prompts</li>
              <li>Saved</li>
              <li>Settings</li>
              <li>Shared Whit</li>
              <li>Friends</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <AcademyIcon />
      </div>
      <div>
        <FaqsIcon />
      </div>
    </aside>
  );
}
