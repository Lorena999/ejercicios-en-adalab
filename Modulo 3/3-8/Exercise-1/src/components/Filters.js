import React from "react";
import "../stylesheets/App.scss";
import FilterName from "./FilterName";
import FilterCities from "./FilterCities";
import FilterGender from "./FilterGender";

const Filters = (props) => {
  return (
    <div className="filters">
      <FilterName handleFilter={props.handleFilter} />
      <FilterCities />
      <FilterGender handleFilter={props.handleFilter} />
    </div>
  );
};
export default Filters;
