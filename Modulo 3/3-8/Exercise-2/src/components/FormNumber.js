import React from "react";

function FormNumber(props) {
  const handleInput = (ev) => {
    const value = ev.target.value;
    props.handleInput(value);
  };
  return (
    <form>
      <label htmlFor="number">Ingresa un número:</label>
      <input id="number" type="number" onChange={handleInput} />
    </form>
  );

  const filterNumbers = props.numbers.map.filter((number) => number > 6);
}
export default FormNumber;
