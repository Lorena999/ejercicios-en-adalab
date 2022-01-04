import { useState } from "react";

const Add = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState("Sumar");
  const [reseat, setReseat] = useState("");

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };
  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };
  const handleOperation = (ev) => {
    setOperation(ev.target.value);
  };
  const handleReseat = (ev) => {
    SetReseat();
  };
  const result = parseInt(numberA) + parseInt(numberB);

  return (
    <div>
      <h1 className="title">La calculadora</h1>
      <form>
        <label className="form__label">¿Qué operación quieres hacer?</label>
        <select name="operation" id="operation" onChange={handleOperation}>
          Suma
          <option value="+">Sumar</option>
          <option value="-">Restar</option>
          <option value="*">Multiplicar</option>
          <option value="/">Dividir</option>
        </select>
        <br />
        <label className="form__label">
          Escriba un número:
          <input
            onChange={handleNumberA}
            type="number"
            className="form__input"
          />
        </label>
        <br />
        <label className="form__label"></label>
        Escriba otro número:
        <input onChange={handleNumberB} type="number" className="form__input" />
      </form>
      <p>
        La {operation} de <strong>{numberA}</strong> y{" "}
        <strong>{numberB}</strong> es <strong>{result}</strong>.
      </p>
      <button onClick={handleReseat}>Reset</button>
    </div>
  );
};
export default Add;
