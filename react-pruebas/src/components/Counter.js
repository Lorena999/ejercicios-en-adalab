import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounterInput = (ev) => {
    setCounter(ev.target.value);
  };
  const handleCounter = (counter) => {
    setCounter(counter + 1);
  };
  const handleCounter2 = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1 className="title">Contador: </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="counter">Escribe aquí un número</label>
        <input
          type="number"
          name="counter"
          id="counter"
          value={counter}
          onChange={handleCounterInput}
        />
        <button onClick={handleCounter}>Añade 1</button>
        <button onClick={handleCounter2}>Resta 1</button>
        <button onClick={handleReset}>Vuelve a 0</button>
        <p>Valor del contador {counter}</p>
      </form>
    </div>
  );
}
export default Counter;
