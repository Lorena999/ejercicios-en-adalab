import React from "react";

const Objets = () => {
  return (
    <div>
      <h1>Indica tu dirección para el envío:</h1>

      <form>
        <label htmlFor="address">Indica tu dirección postal:</label>
        <input
          type="text"
          id="address"
          value={shippingAddress}
          onChange={handleAddress}
        />
        <label htmlFor="city">Indica tu dirección postal:</label>
        <input
          type="text"
          id="city"
          value={shippingCity}
          onChange={handleCity}
        />
      </form>

      <p>
        Te lo vamos a enviar a la dirección <strong>{shippingAddress}</strong>{" "}
        en la ciudad
        <strong> {shippingCity}</strong>.
      </p>
    </div>
  );
};

export default Objets;
