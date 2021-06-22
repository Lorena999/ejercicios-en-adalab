import React from "react";
import "../stylesheets/App.scss";

const FilterGender = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    props.handleFilter({
      value: event.target.value,
      key: "gender",
    });
  };

  return (
    <section className="filters__item">
      <label className="form__label" htmlFor="gender">
        Género
      </label>

      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binario">No hay límites</option>
      </select>
    </section>
  );
};
export default FilterGender;
