import React from "react";

const Map = () => {
  const adalabers = ["María", "Luisa", "Pedro"];
  const users = [
    { name: "María", nickname: "Fugitiva", id: "6754" },
    { name: "Juana", nickname: "Veloz", id: "6750" },
    { name: "Siena", nickname: "Miller", id: "6759" },
  ];

  const renderAdalabers = () => {
    return adalabers.map((adalaber, index) => {
      return <li key={index}>{adalaber.toUpperCase()}</li>;
    });
  };
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <li key={user.id}>
          El nombre del usuario es {user.name} y se apoda {user.nickname}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de Adalabers</h1>
      <ul>{renderAdalabers()}</ul>
      <h1>Lista de usuarios</h1>
      <ul>{renderUsers()}</ul>
    </div>
  );
};

export default Map;
