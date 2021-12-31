import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    const add = counter + 1;
    setCounter(add);
  };
  const handleCounter2 = () => {
    const rest = counter - 1;
    setCounter(rest);
  };
  const handleReset = () => {
    let counter = 0;
    setCounter(counter);
  };
  return (
    <div>
      <h1 className="title">Contador: {counter}</h1>
      <button onClick={handleCounter}>Añade 1</button>
      <button onClick={handleCounter2}>Resta 1</button>
      <button onClick={handleReset}>Vuelve a 0</button>
    </div>
  );
}
export default Counter;
