import React, { useState, useEffect } from "react";

const App = () => {
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  console.log("Me estoy renderizando");
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    console.log("Me estoy montando");
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    console.log("Me estoy desmontando");
    return () => {
      clearInterval(intervalId);
    };
  });
  return <div>Contador: {counter}</div>;
};

export default App;
