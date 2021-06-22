import React from "react";
import "../stylesheets/App.scss";

const FilterName = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    props.handleFilter({
      value: event.target.value,
      key: "name",
    });
  };

  return (
    <section className="filters__item">
      <form action="">
        <label className="form__label" htmlFor="name">
          Filtrar por nombre
        </label>
        <input
          className="form__input-text"
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
        />
      </form>
    </section>
  );
};
export default FilterName;
