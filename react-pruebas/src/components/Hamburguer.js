import React, { useState } from "react";
import "../styles/hamburguer.css";

export const Hamburguer = () => {
  const [open, setOpen] = useState("hidden");
  const handleMenu = () => {
    if (open === "hidden") {
      setOpen(!open);
    } else {
      setOpen("hidden");
    }
  };
  return (
    <div>
      <box-icon name="menu" className="bx" onClick={handleMenu}></box-icon>
      <div className={open}>
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
      </div>
    </div>
  );
};
