import React from "react";
//import Preview from "./Preview";

function Form(props) {
  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    props.handleChange(name, value);
  };
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={props.name}
        onChange={handleChange}
      />
      <textarea name="description" id="text" onChange={handleChange}></textarea>
      <select onChange={handleChange} name="language" id="lang">
        <option value="Español" name="language">
          Español
        </option>
        <option value="Portugués" name="language">
          Portugués
        </option>
        <option value="Inglés" name="language">
          Inglés
        </option>
      </select>
    </form>
  );
}

export default Form;
