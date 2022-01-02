import React, { useState } from "react";
import "../styles/hamburguer.css";

export const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const renderMenu = () => {
    if (isOpen === true) {
      return (
        <div className="menu__container">
          <box-icon
            name="right-arrow-alt"
            className="bx"
            onClick={handleMenu}
          ></box-icon>
          <a href="#" className="menu__link">
            ¿Hablamos?
          </a>
          <a href="#" className="menu__link">
            Proyectos
          </a>
          <a href="#" className="menu__link">
            Sobre nosotros
          </a>
          <a href="#" className="menu__link">
            Contacto
          </a>
        </div>
      );
    } else {
      return (
        <div onClick={handleMenu}>
          <box-icon name="menu" className="bx"></box-icon>
        </div>
      );
    }
  };
  // const [open, setOpen] = useState("hidden");

  // const handleMenu = () => {
  //   if (open === "hidden") {
  //     setOpen(!open);
  //   } else {
  //     setOpen("hidden");
  //   }
  // };
  return renderMenu();
};
