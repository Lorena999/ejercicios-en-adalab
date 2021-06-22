import React from "react";
import "../stylesheets/App.scss";

const FilterCities = () => {
  return (
    <section className="filters__item">
      <form action="">
        <label className="form__label" htmlFor="city">
          Ciudad
        </label>
        <input type="checkbox" name="city" id="city" />
        Todas
        <input type="checkbox" name="city" id="city" />
        Madrid
        <input type="checkbox" name="city" id="city" />
        Barcelona
      </form>
    </section>
  );
};
export default FilterCities;
