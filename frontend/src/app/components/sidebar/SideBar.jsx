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
    <aside className="dark:bg-tertiarySlate w-96 bg-lightbg flex flex-col gap-16 p-6 justify-start mt-12">
      <div className="dark:bg-secondarySlate p-2 rounded-md text-fillicon dark:text-white flex flex-col dark:border-0 border border-solid border-sidebarPink">
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
              <li className="cursor-pointer">Legal</li>
              <li className="cursor-pointer">People</li>
              <li className="cursor-pointer">Marketing</li>
              <li className="cursor-pointer">Finance</li>
            </ul>
          </div>
        )}
      </div>
      <div className="dark:bg-secondarySlate rounded-md p-2 text-fillicon dark:text-white flex flex-col dark:border-0 border border-solid border-sidebarPink">
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
              <li className="cursor-pointer">My prompts</li>
              <li className="cursor-pointer">Saved</li>
              <li className="cursor-pointer">Settings</li>
              <li className="cursor-pointer">Shared Whit</li>
              <li className="cursor-pointer">Friends</li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex cursor-pointer gap-2 items-center">
        <AcademyIcon />
        <p className="dark:text-white text-fillicon">Academy</p>
      </div>
      <div className="flex cursor-pointer gap-2 items-center">
        <FaqsIcon />
        <p className="dark:text-white text-fillicon">FAQs</p>
      </div>
    </aside>
  );
}
