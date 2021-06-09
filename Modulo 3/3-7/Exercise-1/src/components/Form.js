import React from "react";

function Form(props) {
  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    props.handleChange(name, value);
  };
  const handleAge = (ev) => {
    const age = ev.target.name;
    const value = ev.target.value;
    props.handleAge(age, value);
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
      <label htmlFor="">Edad recomendada:</label>
      <input
        type="radio"
        name="age"
        value="A"
        onChange={handleAge}
        checked={props.age === "A"}
      />
      Todos los públicos
      <input
        type="radio"
        name="age"
        value="7"
        onChange={handleAge}
        checked={props.age === "7"}
      />
      7 años
      <input
        type="radio"
        name="age"
        value="12"
        onChange={handleAge}
        checked={props.age === "12"}
      />
      12 años
      <input
        type="radio"
        name="age"
        value="16"
        onChange={handleAge}
        checked={props.age === "16"}
      />
      Mayores de 16 años
      <input
        type="radio"
        name="age"
        value="18"
        onChange={handleAge}
        checked={props.age === "18"}
      />
      Mayores de 18
    </form>
  );
}

export default Form;
