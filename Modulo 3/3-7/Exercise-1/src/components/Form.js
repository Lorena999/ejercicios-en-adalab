import React from "react";
//import Preview from "./Preview";

function Form(props) {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={props.name}
        handleChange={props.handleChange}
      />
      <textarea
        name="textarea"
        id="textarea"
        id="description"
        value={props.description}
        cols="30"
        rows="10"
        handleChange={props.handleChange}
      ></textarea>
      <select handleChange={props.handleChange} name="language" id="">
        <option value={props.language}>Español</option>
        <option value={props.language}>Portugués</option>
        <option value={props.language}>Inglés</option>
      </select>
    </form>
  );
}

export default Form;
