import React from "react";
import "../stylesheets/App.scss";

const Card = (props) => {
  const getGender = () => {
    if (props.user.gender === "female") {
      return "Mujer";
    } else if (props.user.gender === "male") {
      return "Hombre";
    } else {
      return "No hay límites";
    }
  };

  return (
    <li className="card">
      <img
        className="card__img"
        src={props.user.photo}
        alt={`Foto de ${props.user.name}`}
        title={`Foto de ${props.user.name}`}
      />
      <h2 className="card__title">{props.user.name}</h2>
      <p className="card__city">{props.user.city}</p>
      <p className="card__gender">{props.user.age}</p>
      <p className="gender">{getGender()}</p>
    </li>
  );
};
export default Card;
