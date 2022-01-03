import React, { useState } from "react";

const Traductor = () => {
  const [text, setText] = useState("");
  const handleText = (ev) => {
    setText(ev.target.value);
  };

  return (
    <div>
      <textarea
        name="textarea"
        id="texarea"
        cols="30"
        rows="10"
        onChange={handleText}
      ></textarea>
      <p>{text.replace(/[aeiouáéíóú]/gi, "i")}</p>
    </div>
  );
};

export default Traductor;
