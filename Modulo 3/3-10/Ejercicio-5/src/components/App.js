import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import ls from "../services/ls.js";

const App = () => {
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    const userInput = ls.get("userInput");
    if (userInput) {
      setUserInput(userInput);
    }
  }, []);

  useEffect(() => {
    ls.set("userInput", userInput);
  }, [userInput]);

  const handleInput = (ev) => {
    setUserInput(ev.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInput} value={userInput} />
    </div>
  );
};

export default App;
