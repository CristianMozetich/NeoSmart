import React from "react";

//Enlaces de la barra de navegación lateral
const SideBarLink = ({ icon: Icon, label }) => (
  <div className="flex cursor-pointer gap-2 items-center">
    <Icon />
    <p className="dark:text-white text-fillicon dark:hover:text-neoBrandTertiary hover:text-neoBrandTertiary transition-all">
      {label}
    </p>
  </div>
);

export default SideBarLink;
