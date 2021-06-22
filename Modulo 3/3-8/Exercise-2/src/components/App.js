import "../stylesheets/App.scss";
import ListNumber from "./ListNumber";
import FormNumber from "./FormNumber";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInput = (input, value) => {};

  const numbers = [1, 4, 6, 8, 45, 89];

  return (
    <div>
      <ListNumber numbers={numbers} handleInput={handleInput} />
      <FormNumber numbers={numbers} handleInput={handleInput} />
    </div>
  );
}

export default App;
