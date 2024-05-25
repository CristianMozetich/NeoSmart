import React from "react";
import MenuResponsive from "../icons/MenuResponsive";
import CloseIcon from "../icons/CloseIcon";

//Botón para mostrar y ocultar la barra de navegación lateral
const ToggleButton = ({ isOpen, onClick }) => (
  <button className="md:hidden ml-5 flex items-center" onClick={onClick}>
    {isOpen ? <CloseIcon /> : <MenuResponsive />}
  </button>
);

export default ToggleButton;
