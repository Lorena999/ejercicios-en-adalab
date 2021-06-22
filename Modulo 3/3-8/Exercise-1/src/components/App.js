import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import ListCard from "./ListCard";
import Filters from "./Filters";
import getDataApi from "../services/getDataApi";

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  useEffect(() => {
    getDataApi().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "gender") {
      setGenderFilter(data.value);
    }
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toUpperCase().includes(nameFilter.toLocaleUpperCase());
  });
  console.log(filteredUsers);
  return (
    <div>
      <h1 className="title--big">Directorio de personas</h1>
      <main className="main">
        <Filters handleFilter={handleFilter} />
        <ListCard users={filteredUsers} />
      </main>
    </div>
  );
};
export default App;
