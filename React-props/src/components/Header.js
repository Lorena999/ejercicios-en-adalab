import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link
          className="menu-item"
          title="Blog"
          className="menu-link"
          href="https://adalab.es/blog/"
          text="Blog"
        />

        <Link
          className="menu-item"
          title="Blog"
          className="menu-link"
          href="https://adalab.es/contacto/"
          text="Contacto"
        />
      </ul>
    </nav>
  );
};

export default Header;
