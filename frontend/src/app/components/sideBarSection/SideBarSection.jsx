import React, { useState } from "react";
import SideBarIcon from "../icons/SideBarIcon";
import SideBarClose from "../icons/SideBarClose";
import SideBarOpen from "../icons/SideBarOpen";

//Secciónes de la barra de navegación lateral
const SideBarSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="dark:bg-secondarySlate p-2 rounded-md text-fillicon dark:text-white flex flex-col dark:border-0 border border-solid border-sidebarPink">
      <div className="flex gap-4 text-sm items-center">
        <button
          className="flex items-center justify-between gap-3 w-44 p-1 hover:text-neoBrandTertiary cursor-pointer transition-all"
          onClick={handleToggle}
        >
          <SideBarIcon />
          {title}
          {isOpen ? <SideBarClose /> : <SideBarOpen />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center">
          <ul className="flex flex-col ml-3 text-sm p-2 gap-2">
            {items.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-neoBrandTertiary transition-all">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBarSection;
