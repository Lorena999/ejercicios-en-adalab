import { useState } from "react";

const Add = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };
  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };
  //   const total = parseInt(numberA) + parseInt(numberB);

  return (
    <div>
      <h1 className="title">La calculadora</h1>
      <form>
        <label className="form__label">
          Escriba un número:
          <input
            onChange={handleNumberA}
            type="number"
            className="form__input"
          />
        </label>
        <label className="form__label">
          Escriba otro número:
          <input
            onChange={handleNumberB}
            type="number"
            className="form__input"
          />
        </label>
        <p>
          La suma de {numberA}y {numberB} es{" "}
          {parseInt(numberA) + parseInt(numberB)}
        </p>
      </form>
    </div>
  );
};
export default Add;
