import React, { useState } from "react";

function YearsOld() {
  const [year, setYear] = useState(20);
  const [number, setNumber] = useState(1);
  const handleClick = () => {
    setYear(year + 1);
  };
  const handleClick2 = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <p className="years-old">Hoy tengo {year} años de edad</p>
      <button onClick={handleClick} className="button">
        Hazme más viejo
      </button>
      <p className="presents">Tengo {number} regalo</p>
      <button onClick={handleClick2} className="button2">
        Dame regalos
      </button>
    </>
  );
}

export default YearsOld;
