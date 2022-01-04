import React, { useState } from "react";

const Receta = () => {
  const [potato, setPotato] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);
  const [macarrones, setMacarrones] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handlePotato = (ev) => {
    setPotato(ev.target.checked);
  };
  const handleEggs = (ev) => {
    setEggs(ev.target.checked);
  };
  const handleOnion = (ev) => {
    setOnion(ev.target.checked);
  };
  const handleCerveza = (ev) => {
    setCerveza(ev.target.checked);
  };
  const handleMacarrones = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handleNueces = (ev) => {
    setNueces(ev.target.checked);
  };

  return (
    <div>
      <h1 className="title">
        Selecciona los ingredientes de la tortilla de patatas
      </h1>
      <form action="">
        <label htmlFor="Macarrones" className="label">
          Macarrones
        </label>
        <input
          type="checkbox"
          className="input"
          checked={macarrones}
          name="Macarrones"
          onChange={handleMacarrones}
        />
        <label htmlFor="Patatas" className="label">
          Patatas
        </label>
        <input
          type="checkbox"
          className="input"
          checked={potato}
          name="Patatas"
          onChange={handlePotato}
        />
        <label htmlFor="Nueces" className="label">
          Nueces
        </label>
        <input
          type="checkbox"
          className="input"
          checked={nueces}
          name="Nueces"
          onChange={handleNueces}
        />
        <label htmlFor="Huevos" className="label">
          Huevos
        </label>
        <input
          type="checkbox"
          className="input"
          checked={eggs}
          name="Huevos"
          onChange={handleEggs}
        />
        <label htmlFor="Cebolla" className="label">
          Cebolla
        </label>
        <input
          type="checkbox"
          className="input"
          checked={onion}
          name="Cebolla"
          onChange={handleOnion}
        />
        <label htmlFor="Cerveza" className="label">
          Cerveza
        </label>
        <input
          type="checkbox"
          className="input"
          checked={cerveza}
          name="Cerveza"
          onChange={handleCerveza}
        />
      </form>
      <p>
        {(potato === true) &
        (eggs === true) &
        (onion === true) &
        (macarrones === false) &
        (nueces === false) &
        (cerveza === false)
          ? "Eres una persona concebollista"
          : "Eres un robot sin paladar"}
      </p>
    </div>
  );
};

export default Receta;
