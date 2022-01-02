import { useState } from "react";
import "../styles/App.css";
import State from "./State";
import Add from "./Add";
import Counter from "./Counter";
import Dark from "./Dark";
import { Hamburguer } from "./Hamburguer";
import Form from "./Form";

function App() {
  const handleButtom = (ev) => {
    ev.preventDefault();
    console.log("Me han presionado");
  };
  const [userName, setUserName] = useState("");

  const handleInput = (ev) => {
    ev.preventDefault();
    // console.log("El botón ha sido pulsado");
    // console.log("El evento lanzado es: ", ev);
    // console.log("La última tecla pulsada es: ", ev.key);
    // console.log("El valor del input es: ", ev.target.value);
    const inputValue = ev.target.value;
    setUserName(inputValue);
  };

  return (
    <div className="App">
      <Form />
      <Hamburguer />

      <button onClick={handleButtom} className="header__buttom">
        Púlsame
      </button>
      <form onKeyUp={handleInput}>
        <input type="text" />
        <label>Pon tu nombre</label>
      </form>
      <h3>Su nombre es {userName}</h3>
      <State />
      <Add />
      <Counter />
      <br />
      <Dark />
    </div>
  );
}

export default App;
