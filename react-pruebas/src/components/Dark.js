import "../styles/dark.css";
import { useState } from "react";

const Dark = () => {
  const [bgcolor, setBgcolor] = useState("light");
  const handleDark = () => {
    if (bgcolor === "light") {
      setBgcolor("dark");
    } else {
      setBgcolor("light");
    }
  };
  const renderDarkModeText = () => {
    if (bgcolor === "dark") {
      return <p className="dark__text">Tienes activado el Dark mode</p>;
    } else {
      return null;
    }
  };
  console.log(renderDarkModeText());
  return (
    <div className={bgcolor}>
      <button className="dark__button" onClick={handleDark}>
        Des/activar Dark mode
      </button>
      <p className="dark__text" onChange={renderDarkModeText}>
        Tienes activado el Dark mode
      </p>
      <p className="dark__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
        accusantium minima. Quibusdam repudiandae voluptate culpa, possimus,
        perferendis consequuntur repellat maxime rem, modi voluptatibus vero
        omnis molestias minus molestiae quisquam aut?
      </p>
    </div>
  );
};
export default Dark;
