import React from "react";

class PersonDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>Nombre: {user.name}</h3>
        <img src={user.image} alt={user.name} />
        <ul>
          <li>Género: {user.gender}</li>
          <li>Email: {user.email}</li>
          <li>Nick: {user.username}</li>
          <li>Ciudad: {user.city}</li>
          <li>País: {user.country}</li>
          <li>Edad: {user.age}</li>
        </ul>
      </div>
    );
  }
}

export default PersonDetail;
