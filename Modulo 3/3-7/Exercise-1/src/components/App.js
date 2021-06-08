import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form";
import Preview from "./Preview";

function Apps() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (inputName, inputValue) => {
    if (inputName === "name") {
      setName = { inputValue };
    } else if (inputName === "description") {
      setDescription = { inputValue };
    } else if (inputName === "select") {
      setLanguage = { inputValue };
    }
  };

  return (
    <>
      <div>
        <Preview name={name} description={description} language={language} />
        <Form handleChange={handleChange} />
      </div>
    </>
  );
}
export default Apps;
